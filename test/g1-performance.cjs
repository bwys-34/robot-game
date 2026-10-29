// Edge checks for avoidable work, not a claim about the exhibition device's FPS.
const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800},deviceScaleFactor:2});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
  await page.locator('#mode-observe').click();await page.locator('#joint-select').selectOption('left_knee_joint');
  // Count actual DOM replacements on the same visitor path as continuous dragging.
  await page.evaluate(()=>{
   window.__updates={};window.__observer=new MutationObserver(records=>{for(const r of records){const id=r.target.id;if(id)window.__updates[id]=(window.__updates[id]||0)+1;}});
   window.__observer.observe(document.getElementById('discovery-game'),{subtree:true,childList:true});
   window.__observer.observe(document.getElementById('stage-instruction'),{childList:true});
   const slider=document.getElementById('knee-angle');slider.value='70';slider.dispatchEvent(new Event('input',{bubbles:true}));
  });
  await page.waitForFunction(()=>Math.abs(parseFloat(document.getElementById('angle-value').textContent)-70)<1);
  const updates=await page.evaluate(()=>{window.__observer.disconnect();return window.__updates;});
  assert((updates['game-stage']||0)<=2,`Unchanged task must not be rewritten every animation frame: ${JSON.stringify(updates)}`);
  assert((updates['stage-instruction']||0)<=2,'Stage instruction changes only with game state');
  await page.locator('#reset-knee').click();await page.waitForTimeout(300);
  await page.evaluate(()=>{window.__azimuthWrites=0;new MutationObserver(records=>window.__azimuthWrites+=records.length).observe(document.getElementById('azimuth'),{childList:true});});
  await page.waitForTimeout(450);assert(await page.evaluate(()=>window.__azimuthWrites<=1),'Static azimuth must not replace its DOM text every frame');
  const canvas=await page.locator('canvas').evaluate(node=>({pixels:node.width*node.height,css:node.clientWidth*node.clientHeight}));
  assert(canvas.pixels<=canvas.css*1.05,`Android default does not supersample the 3D canvas: ${JSON.stringify(canvas)}`);
  assert.deepEqual(errors,[]);console.log('PASS stable task DOM, static azimuth and Android 3D pixel budget; knee still reaches requested angle');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
