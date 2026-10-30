const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),req=createRequire(path.join(project,'package.json'));
require.extensions['.ts']=(module,filename)=>module._compile(req('esbuild').transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs'}).code,filename);
const THREE=req('three'),{GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js');
const {PoseChain}=req(path.join(project,'src/pose-chain.ts'));
const {MOTION_CHALLENGES:tasks}=req(path.join(project,'src/motion-challenges.ts'));
const {G1_INTERACTION_CONFIG:config}=req(path.join(project,'src/interaction-config.ts'));
const {jointDragDirection}=req(path.join(project,'src/joint-drag.ts'));
const out=path.resolve('work/g1-visitor-qa');
async function shot(page,name){fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,name+'.png'),fullPage:true});}
async function layout(page){
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow');
 assert(await page.evaluate(()=>{const a=document.getElementById('pose-game').getBoundingClientRect(),b=document.getElementById('training-controls').getBoundingClientRect();return a.right<=b.left+1||b.right<=a.left+1||a.bottom<=b.top+1||b.bottom<=a.top+1;}),'Task and controls do not overlap');
 assert(await page.evaluate(()=>document.querySelector('footer').getBoundingClientRect().top>=Math.max(document.querySelector('.exhibit').getBoundingClientRect().bottom,document.querySelector('.observation-panel').getBoundingClientRect().bottom)-1),'Footer clears the full panel, including result feedback');
}
async function fixture(){
 const buffer=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));
 const {scene}=await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength),'');
 scene.traverse(node=>{if(node.isMesh)node.material.side=THREE.DoubleSide;});scene.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(scene),center=bounds.getCenter(new THREE.Vector3());
 const radius=bounds.getSize(new THREE.Vector3()).y/(2*Math.tan(THREE.MathUtils.degToRad(31/2)))*1.32;
 return {scene,pose:new PoseChain(scene),center,radius};
}
async function front(page){await page.locator('[data-view=front]').click();await page.waitForTimeout(800);}
async function visiblePoint(page,model,name){
 await page.locator('#viewer').scrollIntoViewIfNeeded();
 const rect=await page.locator('canvas').boundingBox();
 const camera=new THREE.PerspectiveCamera(31,rect.width/rect.height,.01,100),distance=model.radius*Math.max(1,.75/camera.aspect);
 camera.position.set(distance,distance*.14,0).add(model.center);camera.lookAt(model.center);camera.updateMatrixWorld(true);
 model.scene.updateMatrixWorld(true);
 const prefix=name.startsWith('left_')?'left_':'right_',limb=/shoulder|elbow|wrist/.test(name)?/shoulder|elbow|wrist|rubber_hand/:/hip|knee|ankle/;
 const meshList=[],targets=[];
 model.scene.traverse(mesh=>{if(!mesh.isMesh)return;meshList.push(mesh);let parent=mesh;while(parent&&!parent.userData.urdf_link)parent=parent.parent;const link=parent?.name??'';if(name.startsWith('waist')?/torso|waist|pelvis/.test(link):link.startsWith(prefix)&&limb.test(link))targets.push(mesh);});
 const ray=new THREE.Raycaster();
 // Prefer central surface samples, avoiding silhouette edges which are hard to hit.
 for(const mesh of targets.reverse()){
  const positions=mesh.geometry.attributes.position;
  for(let i=0;i<positions.count;i+=Math.max(1,Math.floor(positions.count/250))){
   const point=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(mesh.matrixWorld).project(camera);
   if(Math.abs(point.x)>.85||Math.abs(point.y)>.7)continue;
   ray.setFromCamera(new THREE.Vector2(point.x,point.y),camera);const hit=ray.intersectObjects(meshList,false)[0];
   if(hit&&targets.includes(hit.object))return {x:rect.x+(point.x*.5+.5)*rect.width,y:rect.y+(-point.y*.5+.5)*rect.height,rect};
  }
 }
 throw Error('No visible limb for '+name);
}
async function drag(page,model,name,degrees){
 const control=config.partControls.find(item=>item.jointName===name);
 await page.locator(`.training-axis[data-joint="${name}"]`).click();
 const point=await visiblePoint(page,model,name),offset=degrees-model.pose.getAngle(name);
 const camera=new THREE.PerspectiveCamera(31,point.rect.width/point.rect.height,.01,100),distance=model.radius*Math.max(1,.75/camera.aspect);
 camera.position.set(distance,distance*.14,0).add(model.center);camera.lookAt(model.center);camera.updateMatrixWorld(true);
 const direction=jointDragDirection(model.pose,camera,name,control.dragAxis);
 const dx=offset/control.dragSensitivity*point.rect.width*direction.x;
 const dy=offset/control.dragSensitivity*point.rect.height*direction.y;
 await page.mouse.move(point.x,point.y);await page.mouse.down();await page.mouse.move(point.x+dx,point.y+dy,{steps:12});await page.mouse.up();
 await page.waitForFunction(value=>Math.abs(Number(document.getElementById('angle-value').textContent.replace('°',''))-value)<=1,degrees,{timeout:5000});
 await page.waitForTimeout(1250);
 assert.equal(await page.locator('#joint-select').inputValue(),name,'Drag keeps the chosen axis');
 assert.equal(await page.locator('#training-score').textContent(),'—','Actual drag reveals no live score');
 assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'playing','Dragging never auto-submits');
 model.pose.setControlledJoint(name,degrees);model.pose.update(3);model.pose.maintainSupportAnchor();
}
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const model=await fixture(),page=await browser.newPage({viewport:{width:1080,height:1920}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});await page.locator('#enter-training').click();
  assert.equal(await page.locator('#training-task option').count(),13);assert(await page.locator('#training-legend').isHidden());assert(await page.locator('#training-hint-copy').isHidden());
  assert.equal(await page.locator('#training-task').inputValue(),'first-lift');
  assert.equal(await page.locator('.training-axis').count(),1);
  await page.locator('#training-start').click();await front(page);await drag(page,model,'right_elbow_joint',60);
  assert(await page.locator('#training-drag-cue').isVisible());
  await page.locator('#training-submit').click();assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'complete','One actual gesture earns the first success');
  assert.match(await page.locator('#training-stars').getAttribute('aria-label'),/3 颗星/);await shot(page,'first-success');
  await page.locator('#training-task').selectOption('wave');model.pose.reset();
  assert.equal(await page.locator('#training-controls input[type=range]').count(),0);assert(!/[°]/.test(await page.locator('#training-controls').innerText()));
  await layout(page);await shot(page,'portrait-ready');
  await page.locator('#training-preview').click();await page.waitForTimeout(1400);await shot(page,'portrait-preview');
  assert.equal(await page.locator('#training-score').textContent(),'—');assert(await page.locator('#training-submit').isHidden());
  await page.waitForFunction(()=>document.getElementById('pose-game').dataset.status==='ready');
  await page.locator('#training-start').click();assert(await page.locator('#training-submit').isDisabled());
  await front(page);await drag(page,model,'right_elbow_joint',10);
  await page.locator('#training-submit').click();assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'review');
  assert(Number(await page.locator('#training-score').textContent())<80);assert(await page.locator('#training-review').isVisible());await layout(page);await shot(page,'portrait-review');
  assert.match(await page.locator('#training-review').textContent(),/向前抬|向外打开|弯起/);
  assert(await page.locator('#training-adjust').isVisible());
  await page.locator('#training-adjust').click();assert(await page.locator('#training-submit').isDisabled());
  await page.locator('#training-more').click();await page.waitForTimeout(1300);assert(await page.locator('#training-submit').isEnabled(),'Micro-adjust buttons count as manual input');
  await page.locator('#training-hint').click();assert(await page.locator('#training-hint-copy').isVisible());assert(await page.locator('#training-legend').isHidden());
  assert(!/[0-9°]/.test(await page.locator('#training-hint-copy').innerText()));
  await page.locator('#training-hint').click();assert(await page.locator('#training-legend').isVisible());await shot(page,'portrait-hint');
  await page.locator('#training-hint').click();assert(await page.locator('#training-legend').isHidden());
  for(const task of tasks){
   console.log('Testing manual pose:',task.id);
   await page.locator('#training-task').selectOption(task.id);model.pose.reset();
   assert(await page.locator('#training-hint-copy').isHidden());assert(await page.locator('#training-legend').isHidden());
   await page.locator('#training-start').click();await front(page);
   for(const goal of task.joints)await drag(page,model,goal.name,goal.degrees);
   assert(await page.locator('#training-submit').isEnabled());await page.waitForTimeout(1400);assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'playing','Stable pose still needs visitor submission');
   await shot(page,`pose-${task.id}`);await page.locator('#training-submit').click();
   const score=Number(await page.locator('#training-score').textContent());assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'complete',`${task.id}: ${score}; ${await page.locator('#training-review').textContent()}`);assert(score>=98&&score<=100);
   assert.equal(await page.locator('#viewer').getAttribute('data-fallen'),'false');await layout(page);await shot(page,`result-${task.id}`);
  }
  assert.match(await page.locator('#training-total').textContent(),/13 \/ 13/);
  await page.locator('#training-task').selectOption('step');model.pose.reset();await page.locator('#training-start').click();await front(page);
  await drag(page,model,'left_knee_joint',82.5);await drag(page,model,'left_hip_pitch_joint',-90);
  await page.locator('#training-submit').click();
  assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'review');
  assert.match(await page.locator('#training-review').textContent(),/重叠.*扣分/,'Current collision is assessed and explicitly explained');
  assert(Number(await page.locator('#training-score').textContent())<80);await shot(page,'collision-penalty');
  await page.reload();await page.locator('body[data-ready=true]').waitFor({timeout:60000});await page.locator('#enter-training').click();assert.match(await page.locator('#training-total').textContent(),/13 \/ 13/);
  await page.locator('#training-task').selectOption('cheer');
  for(const viewport of [{width:1080,height:1920},{width:1920,height:1080},{width:1366,height:768},{width:540,height:960}]){await page.setViewportSize(viewport);await page.waitForTimeout(400);await layout(page);await shot(page,`layout-${viewport.width}`);}
  await page.setViewportSize({width:1080,height:1920});await page.emulateMedia({reducedMotion:'reduce'});await page.locator('#training-start').click();
  const axis=page.locator('.training-axis').first();await axis.focus();await page.keyboard.press('ArrowDown');await page.waitForTimeout(1400);assert.equal(await page.locator('#training-score').textContent(),'—');assert(await page.locator('#training-submit').isEnabled());await page.locator('#training-submit').click();assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'review');
  await page.locator('#leave-training').click();assert(await page.locator('#discovery-game').isVisible());assert.equal(await page.locator('#discovery-progress').textContent(),'0 / 3');
  await page.locator('#enter-training').click();await page.locator('#mode-observe').click();assert.equal(await page.locator('body').getAttribute('data-training'),'false');assert(await page.locator('#pose-game').isHidden());
  await page.locator('#mode-challenge').click();await page.locator('#enter-training').click();await page.locator('#mode-challenge').click();assert.equal(await page.locator('body').getAttribute('data-training'),'false');
  assert.deepEqual(errors,[]);console.log('PASS: one-drag first success, thirteen real mesh-drag poses, actionable retry, micro-adjust controls, hidden answers, explicit submission, hints, records, keyboard/reduced motion, mode isolation, four layouts');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
