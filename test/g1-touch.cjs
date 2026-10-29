const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const req=createRequire(path.resolve(__dirname,'../demos/g1/package.json')),THREE=req('three');
async function limbPoint(rect){
 const {GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js'),bytes=fs.readFileSync(path.resolve(__dirname,'../demos/g1/assets/g1-sample.glb'));
 const {scene}=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');scene.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(scene),center=box.getCenter(new THREE.Vector3()),radius=box.getSize(new THREE.Vector3()).y/(2*Math.tan(THREE.MathUtils.degToRad(31/2)))*1.32;
 const camera=new THREE.PerspectiveCamera(31,rect.width/rect.height,.01,100),distance=radius*Math.max(1,.75/camera.aspect);
 camera.position.set(distance,distance*.14,0).add(center);camera.lookAt(center);camera.updateMatrixWorld(true);
 const meshes=[],targets=[];scene.traverse(mesh=>{if(!mesh.isMesh)return;mesh.material.side=THREE.DoubleSide;meshes.push(mesh);let link=mesh;while(link&&!link.userData.urdf_link)link=link.parent;if(link?.name==='left_hip_yaw_link')targets.push(mesh);});
 const ray=new THREE.Raycaster();
 for(const mesh of targets){const positions=mesh.geometry.attributes.position;for(let i=0;i<positions.count;i+=20){
  const p=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(mesh.matrixWorld).project(camera);
  ray.setFromCamera(new THREE.Vector2(p.x,p.y),camera);if(!targets.includes(ray.intersectObjects(meshes,false)[0]?.object))continue;
  return {x:rect.x+(p.x*.5+.5)*rect.width,y:rect.y+(-p.y*.5+.5)*rect.height,id:1};
 }}throw Error('No visible hip surface');
}
const turn=(a,b)=>Math.abs(((b-a+540)%360)-180);
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800},deviceScaleFactor:2,hasTouch:true});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
  const cdp=await page.context().newCDPSession(page);
  const send=(type,touchPoints)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints});
  const angle=async()=>parseFloat(await page.locator('#azimuth').textContent());
  async function front(){await page.locator('[data-view=front]').click();await page.waitForFunction(()=>document.getElementById('azimuth').textContent==='000°');await page.waitForTimeout(100);await page.locator('#viewer').scrollIntoViewIfNeeded();return page.locator('canvas').boundingBox();}
  async function orbit(label){
   const rect=await page.locator('canvas').boundingBox(),before=await angle();
   const point={x:rect.x+rect.width*.12,y:rect.y+rect.height*.5,id:1};
   await send('touchStart',[point]);
   for(let i=1;i<=8;i++)await send('touchMove',[{...point,x:point.x+i*10}]);
   await send('touchEnd',[]);await page.waitForTimeout(350);
   const after=await angle();assert(turn(before,after)>8,`${label}: blank-background touch must rotate, azimuth ${before} -> ${after}`);
  }
  await page.locator('#mode-observe').click();await front();await orbit('initial');
  let rect=await front();
  // An interrupted capture can leave OrbitControls remembering an old touch.
  await page.evaluate(()=>document.querySelector('canvas').addEventListener('pointerdown',event=>window.__touchId=event.pointerId,{once:true}));
  const point={x:rect.x+rect.width*.12,y:rect.y+rect.height*.5,id:1};
  await send('touchStart',[point]);await send('touchMove',[{...point,x:point.x+10}]);
  await page.evaluate(()=>document.querySelector('canvas').releasePointerCapture(window.__touchId));
  await send('touchMove',[{...point,x:1060}]);await send('touchEnd',[]);
  rect=await front();
  const limb=await limbPoint(rect);
  await send('touchStart',[limb]);
  for(let i=1;i<=8;i++)await send('touchMove',[{...limb,y:limb.y-i*6}]);
  await send('touchEnd',[]);await page.waitForTimeout(800);
  assert(Math.abs(parseFloat(await page.locator('#angle-value').textContent()))>5,'The touch actually manipulated a robot limb');
  await orbit('after limb manipulation and interrupted capture');
  // Cancelled part manipulation must also release the temporary orbit lock.
  await page.locator('#reset-knee').click();rect=await front();
  const cancelledLimb=await limbPoint(rect);
  await send('touchStart',[cancelledLimb]);await send('touchMove',[{...cancelledLimb,y:cancelledLimb.y-25}]);await send('touchCancel',[]);
  await orbit('after cancelled limb manipulation');
  // Native two-finger input still zooms and leaves no touch behind in either order.
  for(const primaryFirst of [false,true]){
   rect=await front();
   const a={x:rect.x+rect.width*.1,y:rect.y+rect.height*.4,id:1},b={x:rect.x+rect.width*.25,y:rect.y+rect.height*.4,id:2};
   const before=await page.locator('canvas').screenshot();
   await send('touchStart',[a]);await send('touchStart',[a,b]);
   await send('touchMove',[a,{...b,x:b.x+80}]);await send('touchEnd',primaryFirst?[b]:[a]);await send('touchEnd',[]);
   await page.waitForTimeout(250);assert(!before.equals(await page.locator('canvas').screenshot()),'Two-finger zoom changes the rendered view');
   await orbit(`after pinch, ${primaryFirst?'primary':'secondary'} lifted first`);
  }
  // A host focus interruption must not poison the next one-finger gesture.
  rect=await front();const focusPoint={x:rect.x+rect.width*.12,y:rect.y+rect.height*.5,id:1};
  await send('touchStart',[focusPoint]);await send('touchMove',[{...focusPoint,x:focusPoint.x+10}]);
  await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await send('touchEnd',[]);
  await orbit('after host focus interruption');
  await page.locator('#mode-challenge').click();await page.locator('#enter-training').click();await page.locator('#training-start').click();
  rect=await front();
  // The same visible left hip is controllable in the step task.
  await page.locator('#training-task').selectOption('step');await page.locator('#training-start').click();rect=await front();
  await page.locator('.training-axis[data-joint="left_hip_pitch_joint"]').click();await page.locator('#viewer').scrollIntoViewIfNeeded();rect=await page.locator('canvas').boundingBox();
  // Training overview uses a different camera target/distance; the front preset restores the fixture camera.
  const trainingLimb=await limbPoint(rect);await send('touchStart',[trainingLimb]);await send('touchMove',[{...trainingLimb,y:trainingLimb.y-40}]);await send('touchEnd',[]);
  await page.waitForTimeout(800);assert(Math.abs(parseFloat(await page.locator('#angle-value').textContent()))>5,'Training also accepts actual limb touch input');
  await orbit('after training limb drag');
  assert.equal(await page.locator('#training-score').textContent(),'—','Touch handling does not auto-submit or reveal a score');
  assert.deepEqual(errors,[]);
  console.log('PASS portrait DPR 2 touch: lost capture, limb drag/cancel, pinch release orders, focus interruption, training drag and orbit');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
