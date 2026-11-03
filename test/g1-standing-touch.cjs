const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict');
const path=require('node:path'),fs=require('node:fs');
const req=require('node:module').createRequire(path.resolve(__dirname,'../demos/g1/package.json')),THREE=req('three');
async function limbPoint(rect,linkName){
 const {GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js'),bytes=fs.readFileSync(path.resolve(__dirname,'../demos/g1/assets/g1-sample.glb'));
 const {scene}=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');scene.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(scene),center=box.getCenter(new THREE.Vector3()),radius=box.getSize(new THREE.Vector3()).y/(2*Math.tan(THREE.MathUtils.degToRad(31/2)))*1.32;
 const camera=new THREE.PerspectiveCamera(31,rect.width/rect.height,.01,100),distance=radius*Math.max(1,.75/camera.aspect);
 camera.position.set(distance,distance*.14,0).add(center);camera.lookAt(center);camera.updateMatrixWorld(true);
 const meshes=[],targets=[];scene.traverse(mesh=>{if(!mesh.isMesh)return;mesh.material.side=THREE.DoubleSide;meshes.push(mesh);let link=mesh;while(link&&!link.userData.urdf_link)link=link.parent;if(link?.name===linkName)targets.push(mesh);});
 const ray=new THREE.Raycaster();
 for(const mesh of targets){const positions=mesh.geometry.attributes.position;for(let i=0;i<positions.count;i+=10){const p=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(mesh.matrixWorld).project(camera);ray.setFromCamera(new THREE.Vector2(p.x,p.y),camera);if(!targets.includes(ray.intersectObjects(meshes,false)[0]?.object))continue;return {x:rect.x+(p.x*.5+.5)*rect.width,y:rect.y+(-p.y*.5+.5)*rect.height};}}
 throw Error('No visible limb: '+linkName);
}
const failures=[];
async function check(name,fn){try{await fn();console.log('PASS',name);}catch(e){failures.push(`${name}: ${e.message}`);console.error('FAIL',name,e.message);}}
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1920},hasTouch:true,deviceScaleFactor:2}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
  const cdp=await page.context().newCDPSession(page);
  async function swipe(x,y){await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y,id:0}]});for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x+i*10,y,id:0}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(300);}
  await check('standing controls share the upper screen with the model',async()=>{
   await page.locator('#enter-training').tap();await page.locator('#training-start').tap();await page.evaluate(()=>scrollTo(0,0));
   for(const id of ['training-task','training-start','training-joints','training-more','training-submit']){const r=await page.locator('#'+id).boundingBox();assert(r.y>0&&r.y+r.height<1920*.63,`${id} is too low: ${Math.round(r.y)}`);}
   const a=await page.locator('canvas').boundingBox(),b=await page.locator('#training-task').boundingBox();assert(b.x>=a.x+a.width-1,'Options must sit beside the model on a portrait kiosk');
  });
  await check('instructions occupy a separate area from the rendered robot',async()=>{
   const a=await page.locator('canvas').boundingBox();for(const selector of ['#stage-task','.gesture-hint','#training-drag-cue small']){if(!await page.locator(selector).isVisible())continue;const b=await page.locator(selector).boundingBox();assert(a.x+a.width<=b.x+1||b.x+b.width<=a.x+1||a.y+a.height<=b.y+1||b.y+b.height<=a.y+1,`${selector} covers the canvas`);}
  });
  await check('explicit orbit works over the robot after choosing actions',async()=>{
   assert.equal(await page.locator('#gesture-orbit').count(),1,'A visible rotate-view mode is needed');
   for(const task of ['wave','step','first-lift']){
    await page.locator('#training-task').selectOption(task);await page.locator('#training-start').tap();
    assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'playing',task+': a touch starts the chosen action after orbiting');
    await page.locator('#gesture-orbit').tap();await page.locator('[data-view=front]').tap();await page.waitForTimeout(800);await page.evaluate(()=>scrollTo(0,0));
    const r=await page.locator('canvas').boundingBox(),before=parseFloat(await page.locator('#azimuth').textContent()),joint=await page.locator('#angle-value').textContent();
    const point=await limbPoint(r,task==='step'?'left_hip_yaw_link':'right_elbow_link');
    await swipe(point.x,point.y);
    const after=parseFloat(await page.locator('#azimuth').textContent());assert(Math.abs(((after-before+540)%360)-180)>8,`${task}: ${before} -> ${after}`);
    assert.equal(await page.locator('#angle-value').textContent(),joint,'Orbit mode must not change the pose');
    await page.locator('#gesture-pose').tap();await page.waitForFunction(()=>document.getElementById('gesture-pose').getAttribute('aria-pressed')==='true');
   }
   await page.locator('[data-view=front]').tap();await page.waitForTimeout(800);
   const r=await page.locator('canvas').boundingBox(),point=await limbPoint(r,'right_elbow_link'),before=parseFloat(await page.locator('#angle-value').textContent());
   const direction=await page.locator('#training-drag-arrow').evaluate(e=>parseFloat(e.style.transform.slice(7)));
   await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...point,id:1}]});
   for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:point.x+Math.cos(direction)*i*10,y:point.y+Math.sin(direction)*i*10,id:1}]});
   await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(900);
   assert(Math.abs(parseFloat(await page.locator('#angle-value').textContent())-before)>5,`Switching back to pose mode restores actual limb dragging: ${before} -> ${await page.locator('#angle-value').textContent()}`);
   const count=await page.evaluate(()=>{window.__nudgeClicks=0;document.getElementById('training-more').addEventListener('click',()=>window.__nudgeClicks++);return window.__nudgeClicks;});
   const angleBefore=parseFloat(await page.locator('#angle-value').textContent());
   await page.locator('#training-more').tap();await page.waitForTimeout(900);
   assert.equal(await page.evaluate(()=>window.__nudgeClicks),count+1,'Touching a nudge after dragging runs exactly once');
   assert(Math.abs(parseFloat(await page.locator('#angle-value').textContent())-angleBefore-3)<.3,'A single tap adjusts by exactly three degrees');
   await page.locator('#training-more').focus();await page.keyboard.press('Enter');await page.waitForTimeout(900);
   assert.equal(await page.evaluate(()=>window.__nudgeClicks),count+2,'Keyboard activation remains available after touch');
   await page.locator('#fullscreen').tap();
   await page.waitForFunction(()=>document.fullscreenElement===document.documentElement);
   await page.evaluate(()=>document.exitFullscreen());
  });
  await check('completion keeps the next action within standing reach',async()=>{
   await page.locator('#training-reset').tap();
   for(let i=0;i<20;i++)await page.locator('#training-more').tap();
   await page.waitForFunction(()=>!document.getElementById('training-submit').disabled);
   await page.locator('#training-submit').tap();
   assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'complete');
   await page.evaluate(()=>scrollTo(0,0));
   const next=await page.locator('#training-next').boundingBox();assert(next.y+next.height<1920*.63,'The next-action button must stay reachable after results appear');
   const result=await page.locator('#training-result').boundingBox(),canvas=await page.locator('canvas').boundingBox();assert(result.x>=canvas.x+canvas.width,'Results cannot cover the robot');
   const out=path.resolve('work/g1-standing-qa');fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,'completed.png'),fullPage:true});
   await page.locator('#training-start').tap();
  });
  for(const size of [{width:1080,height:1920},{width:1920,height:1080},{width:1366,height:768},{width:390,height:844}])await check(`layout ${size.width}x${size.height}`,async()=>{
   await page.setViewportSize(size);await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(250);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal overflow');
   const a=await page.locator('canvas').boundingBox();assert(a.width>100&&a.height>200);
   const out=path.resolve('work/g1-standing-qa');fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,`${size.width}.png`),fullPage:true});
  });
  assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
