const { chromium } = require(process.env.PLAYWRIGHT_CORE_PATH || 'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert = require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module');
const requireDemo=createRequire(path.resolve(__dirname,'../demos/g1/package.json'));
const THREE=requireDemo('three');
const {GLTFLoader}=requireDemo('three/examples/jsm/loaders/GLTFLoader.js');

// Reconstruct the initial camera in the test, without production debug hooks.
async function loadFixture(){
  const buffer=fs.readFileSync(path.resolve(__dirname,'../demos/g1/assets/g1-sample.glb'));
  const {scene}=await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength),'');
  scene.traverse(node=>{if(node.isMesh)node.material.side=THREE.DoubleSide;});
  scene.updateMatrixWorld(true);return scene;
}
async function view(page,name){
  await page.locator(`[data-view="${name}"]`).click();
  await page.waitForFunction(value=>document.getElementById('azimuth').textContent===value,{front:'000°',side:'270°'}[name]);
  await page.waitForTimeout(250);
}
async function visiblePoint(page,model,linkName,viewName){
  const rect=await page.locator('canvas').boundingBox();
  const bounds=new THREE.Box3().setFromObject(model),center=bounds.getCenter(new THREE.Vector3());
  const camera=new THREE.PerspectiveCamera(31,rect.width/rect.height,.01,100);
  const radius=bounds.getSize(new THREE.Vector3()).y/(2*Math.tan(THREE.MathUtils.degToRad(31/2)))*1.32;
  const distance=radius*Math.max(1,.75/camera.aspect),angle=viewName==='side'?Math.PI:Math.PI/2;
  camera.position.set(Math.sin(angle)*distance,distance*.14,Math.cos(angle)*distance).add(center);
  camera.lookAt(center);camera.updateMatrixWorld(true);
  const meshes=[],targets=[];
  model.traverse(node=>{if(!node.isMesh)return;meshes.push(node);let parent=node;while(parent&&!parent.userData.urdf_link)parent=parent.parent;if(parent?.name===linkName)targets.push(node);});
  const ray=new THREE.Raycaster();
  for(const mesh of targets){
    const position=mesh.geometry.attributes.position;
    for(let i=0;i<position.count;i+=Math.max(1,Math.floor(position.count/300))){
      const point=new THREE.Vector3().fromBufferAttribute(position,i).applyMatrix4(mesh.matrixWorld).project(camera);
      ray.setFromCamera(new THREE.Vector2(point.x,point.y),camera);
      const hit=ray.intersectObjects(meshes,false)[0];
      if(hit&&targets.includes(hit.object))return {x:rect.x+(point.x*.5+.5)*rect.width,y:rect.y+(-point.y*.5+.5)*rect.height};
    }
  }
  throw new Error(`No visible test point for ${linkName} from ${viewName}`);
}
async function blankDrag(page){
  const box=await page.locator('canvas').boundingBox();
  await page.mouse.move(box.x+box.width*.2,box.y+box.height*.5);await page.mouse.down();
  await page.mouse.move(box.x+box.width*.2+100,box.y+box.height*.5,{steps:8});await page.mouse.up();
}

async function screenshot(page,name){
  if(!process.env.QA_SCREENSHOT_DIR)return;
  fs.mkdirSync(process.env.QA_SCREENSHOT_DIR,{recursive:true});
  await page.screenshot({path:path.join(process.env.QA_SCREENSHOT_DIR,name+'.png'),fullPage:true});
}
async function settle(page,degrees){
  await page.waitForFunction(value=>Math.abs(Number(document.getElementById('angle-value').textContent.replace('°',''))-value)<=1,degrees);
}
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try{
    const model=await loadFixture(),page=await browser.newPage({viewport:{width:1920,height:1080}}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto('http://127.0.0.1:8765/demos/g1/');
    await page.locator('body[data-ready="true"]').waitFor({timeout:60000});
    const slider=page.locator('#knee-angle'),joint=page.locator('#joint-select'),play=page.locator('#play-knee');
    assert.equal(await joint.locator('option').count(),23);
    assert.equal(await play.isEnabled(),false);
    await screenshot(page,'g1-discovery-start');
    await view(page,'front');
    let point=await visiblePoint(page,model,'head_link','front');await page.mouse.click(point.x,point.y);
    assert.match(await page.locator('#joint-status').textContent(),/头部固定/);
    assert.equal(await slider.isEnabled(),false);
    const azimuth=await page.locator('#azimuth').textContent();await blankDrag(page);
    await page.waitForFunction(value=>document.getElementById('azimuth').textContent!==value,azimuth);
    assert.equal(await slider.isEnabled(),false);
    // Actual mesh clicks discover one axis. Reset camera target before projecting next click.
    for(const [link,name,viewName,count] of [
      ['left_hip_yaw_link','left_hip_pitch_joint','front',1],
      ['left_knee_link','left_knee_joint','side',2],
      ['left_ankle_roll_link','left_ankle_pitch_joint','front',3],
    ]){
      await page.locator('#reset-knee').evaluate(node=>{if(!node.disabled)node.click();});
      await view(page,viewName);await page.waitForTimeout(700);
      point=await visiblePoint(page,model,link,viewName);await page.mouse.click(point.x,point.y);
      await screenshot(page,`g1-mesh-click-${name}`);
      assert.equal(await joint.inputValue(),name,JSON.stringify({link,point,viewport:await page.evaluate(()=>({width:innerWidth,height:innerHeight,scrollY,azimuth:document.getElementById('azimuth').textContent,canvas:document.querySelector('canvas').getBoundingClientRect().toJSON()}))}));
      assert.equal(await page.locator('#discovery-progress').textContent(),`${count} / 3`);
      assert.equal(await page.locator('#viewer').getAttribute('data-mode'),'isolated');
      assert.equal(await play.isEnabled(),count===3);
      await page.waitForTimeout(1200);
      assert.match(await page.locator('#chain-readout').textContent(),/左髋 0° · 左膝 0° · 左踝 0°/);
      assert.equal(await page.locator('#view-name').textContent(),'关节观察视角');
    }
    await screenshot(page,'g1-chain-unlocked');await play.click();
    await page.waitForFunction(()=>/左膝 (3[5-9]|4[0-5])°/.test(document.getElementById('chain-readout').textContent));
    assert.equal(await page.locator('#viewer').getAttribute('data-mode'),'chain');
    assert.match(await page.locator('#chain-readout').textContent(),/左踝 -[2-3]\d°/);
    assert.notEqual(await page.locator('#balance-state').getAttribute('data-state'),'outside');
    await screenshot(page,'g1-chain-crouch');
    await page.waitForFunction(()=>document.getElementById('discovery-game').dataset.phase==='challenge',null,{timeout:30000});
    assert.equal(await page.locator('#viewer').getAttribute('data-mode'),'isolated');await settle(page,0);
    // Deliberate isolated hip movement triggers delayed fall. Reset preserves discovery.
    await joint.selectOption('left_hip_pitch_joint');await slider.fill('65');
    await page.waitForFunction(()=>document.getElementById('viewer').dataset.fallen==='true',null,{timeout:10000});
    assert(await page.locator('#fall-notice').isVisible());assert(await slider.isDisabled());
    assert.equal(await page.locator('#discovery-game').getAttribute('data-phase'),'complete');
    assert(await page.locator('#imbalance-edge').isVisible());await screenshot(page,'g1-discovery-fall');
    await page.locator('#recover-pose').click();
    assert.equal(await page.locator('#viewer').getAttribute('data-fallen'),'false');
    assert.equal(await page.locator('#discovery-progress').textContent(),'3 / 3');assert.equal(await slider.isEnabled(),true);
    // Foot is now ankle-only; dragging is not a discovery click or an orbit.
    await page.locator('#restart-game').click();await view(page,'front');await page.waitForTimeout(700);
    point=await visiblePoint(page,model,'left_ankle_roll_link','front');
    const before=await page.locator('#azimuth').textContent();
    await page.mouse.move(point.x,point.y);await page.mouse.down();await page.mouse.move(point.x,point.y-45,{steps:8});await page.mouse.up();
    assert.equal(await joint.inputValue(),'left_ankle_pitch_joint');
    await page.waitForFunction(()=>Number(document.getElementById('angle-value').textContent.replace('°',''))>3);
    assert.match(await page.locator('#chain-readout').textContent(),/左髋 0° · 左膝 0°/);
    assert.equal(await page.locator('#discovery-progress').textContent(),'0 / 3');
    assert.equal(await page.locator('#azimuth').textContent(),before);
    assert.equal(await page.locator('#viewer').getAttribute('data-dragging'),null);
    await page.locator('#reset-knee').click();await view(page,'front');await page.waitForTimeout(700);
    point=await visiblePoint(page,model,'left_ankle_roll_link','front');
    await page.mouse.move(point.x,point.y);await page.mouse.down();await page.mouse.move(point.x,point.y-30,{steps:4});
    await page.locator('canvas').dispatchEvent('pointercancel',{pointerId:1});await page.mouse.up();
    assert.equal(await page.locator('#viewer').getAttribute('data-dragging'),null);
    await page.locator('#reset-knee').click();await blankDrag(page);
    await page.waitForFunction(value=>document.getElementById('azimuth').textContent!==value,before);
    // Collision danger alone does not trigger an imbalance fall.
    await view(page,'front');await joint.selectOption('left_shoulder_yaw_joint');await slider.fill('-80');await settle(page,-80);
    await page.waitForFunction(()=>/左小臂与躯干/.test(document.getElementById('collision-status').textContent));
    await page.waitForTimeout(700);assert.equal(await page.locator('#fall-notice').isVisible(),false);
    assert(await page.locator('#pose-warning').isVisible());
    const warningBefore=await page.locator('#pose-warning').boundingBox();await screenshot(page,'g1-discovery-collision');
    await view(page,'side');const warningAfter=await page.locator('#pose-warning').boundingBox();
    assert(warningBefore&&warningAfter&&Math.hypot(warningBefore.x-warningAfter.x,warningBefore.y-warningAfter.y)>10);
    await page.locator('#reset-knee').click();await joint.selectOption('left_elbow_joint');
    await slider.focus();await page.keyboard.press('Home');assert.equal(Number(await slider.inputValue()),0);
    await page.keyboard.press('End');await settle(page,120);assert(Number(await slider.inputValue())<=120.001);
    await page.locator('#reset-knee').click();await joint.selectOption('left_knee_joint');
    await slider.focus();await page.keyboard.press('End');assert(Number(await slider.inputValue())>164.9);
    await page.locator('#reset-knee').click();
    for(const viewport of [{width:1920,height:1080},{width:1080,height:1920},{width:1366,height:768}]){
      await page.setViewportSize(viewport);await page.waitForTimeout(350);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow');
      const box=await slider.boundingBox();assert(box&&box.width>120&&box.height>=32);
      assert(await page.evaluate(()=>{const panel=document.querySelector('.observation-panel');return panel.clientHeight>=panel.scrollHeight-1;}),'Game and safety fit without hidden controls');
      await screenshot(page,`g1-discovery-${viewport.width}`);
    }
    await page.emulateMedia({reducedMotion:'reduce'});await joint.selectOption('left_hip_pitch_joint');await slider.fill('65');
    await page.waitForFunction(()=>document.getElementById('viewer').dataset.fallen==='true');
    await page.setViewportSize({width:1080,height:1920});
    await page.locator('#fullscreen').click();await page.waitForFunction(()=>document.fullscreenElement===document.documentElement);
    assert.equal(await page.locator('#fullscreen').getAttribute('aria-pressed'),'true','Fullscreen covers the complete exhibit page');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Portrait fullscreen has no horizontal overflow');
    assert(await page.locator('#fall-notice').isVisible());assert(await page.locator('#imbalance-edge').isVisible());
    await page.locator('#recover-pose').click();assert.equal(await page.locator('#fall-notice').isVisible(),false);
    await page.evaluate(()=>document.exitFullscreen());await page.waitForFunction(()=>!document.fullscreenElement);
    assert(await page.locator('#fullscreen-reenter').isVisible(),'Show a user-gesture recovery button after leaving fullscreen');
    await page.locator('#fullscreen-reenter').click();await page.waitForFunction(()=>document.fullscreenElement===document.documentElement);
    await page.locator('#fullscreen').click();await page.waitForFunction(()=>!document.fullscreenElement);
    assert.deepEqual(errors,[]);
    console.log('PASS isolated discovery, damping, camera focus/reset, chain unlock/playback, grounded crouch, delayed imbalance/recovery, ankle drag/cancel, collision-only warning, UI limits, reduced motion/full-page fullscreen recovery and 3 kiosk layouts');
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
