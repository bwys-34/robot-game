const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const p=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true}),errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{
   const names=new WeakMap();for(const proto of [WebGLRenderingContext.prototype,WebGL2RenderingContext.prototype]){
    const get=proto.getUniformLocation,write=proto.uniformMatrix4fv;
    proto.getUniformLocation=function(program,name){const location=get.call(this,program,name);if(location)names.set(location,name);return location;};
    proto.uniformMatrix4fv=function(location,transpose,value,...rest){if(names.get(location)==='viewMatrix')window.cameraView=Array.from(value);return write.call(this,location,transpose,value,...rest);};
   }
  });
  await p.goto('http://127.0.0.1:8765/demos/g1/drive/?v=camera-qa');await p.locator('body[data-ready=true]').waitFor({timeout:30000});
  await p.locator('#source-manual').click();await p.locator('#drive-start').click();
  const canvas=p.locator('#drive-viewer canvas');await canvas.tap({position:{x:120,y:100}});await p.waitForTimeout(150);
  assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'false','A tap to focus must keep camera following');
  const box=await canvas.boundingBox();await p.mouse.move(box.x+box.width*.4,box.y+box.height*.45);await p.mouse.down();await p.mouse.move(box.x+box.width*.65,box.y+box.height*.45,{steps:12});await p.mouse.up();await p.waitForTimeout(100);
  assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'true','An actual drag still allows free observation');
  const before=await p.evaluate(()=>cameraView);await p.keyboard.down('e');await p.waitForTimeout(800);await p.keyboard.up('e');await p.waitForTimeout(600);
  const after=await p.evaluate(()=>cameraView),heading=m=>Math.atan2(-m[2],-m[10]);
  assert(Math.abs(Math.atan2(Math.sin(heading(after)-heading(before)),Math.cos(heading(after)-heading(before))))>.4,'Actual camera orientation follows the turn, not only the button label');
  assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'false','Driving/turning after a drag restores chase camera');
  fs.mkdirSync('work/g1-gait-audio',{recursive:true});await p.screenshot({path:'work/g1-gait-audio/camera-follow-turn.png'});
  await p.locator('#camera-toggle').click();await p.waitForTimeout(500);const overview=await p.evaluate(()=>cameraView);await p.keyboard.down('e');await p.waitForTimeout(500);await p.keyboard.up('e');
  const held=await p.evaluate(()=>cameraView);assert(Math.abs(heading(held)-heading(overview))<.02,'Explicit overview camera stays fixed while the robot turns');
  assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'true','Explicit overview stays selected while driving');
  await p.locator('#camera-toggle').click();await p.waitForTimeout(700);assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'false');
  // Cancelled gestures must not retain pointer ownership or block auto-follow.
  await p.mouse.move(box.x+120,box.y+100);await p.mouse.down();
  await p.evaluate(()=>document.querySelector('#drive-viewer canvas').dispatchEvent(new PointerEvent('pointercancel',{pointerId:1,pointerType:'mouse',bubbles:true})));await p.mouse.up();
  await p.keyboard.down('w');await p.waitForTimeout(300);await p.keyboard.up('w');assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'false');
  assert.deepEqual(errors,[]);console.log('PASS tap/focus keeps chase, drag permits orbit, driving restores chase, explicit overview and cancelled touches');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
