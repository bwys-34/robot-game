const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const out=process.env.QA_SCREENSHOT_DIR||path.resolve('work/g1-experience-qa');
async function capture(page,name){fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,name+'.png'),fullPage:true});}
async function watchGesture(page){
  return page.evaluate(()=>new Promise(resolve=>{
    const samples=[],start=performance.now();
    function frame(){samples.push({angle:parseFloat(document.getElementById('angle-value').textContent),fallen:document.getElementById('viewer').dataset.fallen,motion:document.getElementById('viewer').dataset.motion});
      if(performance.now()-start<1500)requestAnimationFrame(frame);else resolve(samples);
    }frame();
  }));
}
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1920}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/');
  await page.locator('body[data-ready=true]').waitFor({timeout:60000});
  assert.deepEqual(await page.evaluate(()=>[innerWidth,innerHeight]),[1080,1920]);
  assert.equal(await page.locator('#joint-select').inputValue(),'left_knee_joint','Initial selected joint matches the visible knee control');
  await capture(page,'portrait-challenge');
  // Use the same visitor hint path as a mesh click, then observe actual rendered angles.
  for(let i=0;i<3;i++){
    await page.locator('#hint-knee').click();await page.locator('#knee-hotspot').click();
    const watching=watchGesture(page);
    if(i===0){await page.waitForTimeout(370);await capture(page,'portrait-discovery-motion');}
    const samples=await watching;
    assert(samples.some(s=>s.angle>=4),'Every discovery must immediately play a visible joint movement');
    assert(samples.every(s=>s.fallen==='false'),'Teaching hip/ankle gestures must never cause a fall');
    assert.equal(samples.at(-1).angle,0,'The gesture returns before the next discovery');
    assert.equal(await page.locator('#discovery-progress').textContent(),`${i+1} / 3`);
  }
  await capture(page,'portrait-unlocked');
  await page.locator('#replay-joint').click();await page.waitForTimeout(180);await page.locator('#replay-joint').click();
  const repeated=await watchGesture(page);
  assert(Math.max(...repeated.map(s=>s.angle))<=6,'Repeated teaching clicks cannot accumulate rotation');
  // Hide at the teaching peak, resume, then replay. The captured baseline survives.
  await page.locator('#replay-joint').click();
  await page.waitForFunction(()=>parseFloat(document.getElementById('angle-value').textContent)>=5);
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForTimeout(180);
  await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForTimeout(1000);
  assert.equal(parseFloat(await page.locator('#angle-value').textContent()),0,'Backgrounding cannot leave a teaching pose behind');
  await page.locator('#replay-joint').click();const resumed=await watchGesture(page);
  assert(Math.max(...resumed.map(s=>s.angle))<=6);assert.equal(resumed.at(-1).angle,0);
  await page.locator('#mode-observe').click();
  assert.equal(await page.locator('body').getAttribute('data-experience'),'observe');
  assert(await page.locator('#discovery-game').isHidden());assert(await page.locator('#observe-guide').isVisible());
  await page.locator('#joint-select').selectOption('left_hip_pitch_joint');
  await page.locator('#knee-angle').fill('65');await page.waitForTimeout(1200);
  assert.equal(await page.locator('#viewer').getAttribute('data-fallen'),'false','Observation is a warning-only experience');
  assert.equal(await page.locator('#balance-state').getAttribute('data-state'),'outside','Measurement is not falsified');
  await capture(page,'portrait-observe');
  await page.locator('#analysis-details').evaluate(n=>n.open=true);await capture(page,'portrait-analysis');
  await page.locator('#analysis-details').evaluate(n=>n.open=false);
  await page.locator('#mode-challenge').click();
  assert.equal(await page.locator('#discovery-progress').textContent(),'3 / 3','Switching preserves progress');
  await page.locator('#joint-select').selectOption('left_hip_pitch_joint');await page.locator('#knee-angle').fill('65');
  await page.waitForFunction(()=>document.getElementById('balance-state').dataset.state==='outside');
  await page.locator('#joint-select').selectOption('left_elbow_joint');
  await page.waitForFunction(()=>document.getElementById('viewer').dataset.fallen==='true');
  await capture(page,'portrait-fall');await page.locator('#recover-pose').click();
  await page.locator('#restart-game').click();await page.locator('#mode-observe').click();
  assert(await page.locator('#play-knee').isEnabled(),'Observation chain preview needs no game unlock');
  await page.locator('#play-knee').click();
  await page.waitForFunction(()=>document.getElementById('viewer').dataset.mode==='chain');
  await page.waitForFunction(()=>document.getElementById('viewer').dataset.mode==='isolated',null,{timeout:15000});
  await page.locator('#mode-challenge').click();
  assert.equal(await page.locator('#discovery-game').getAttribute('data-phase'),'scan','Observation playback cannot complete a game task');
  assert.equal(await page.locator('#discovery-progress').textContent(),'0 / 3');
  await page.emulateMedia({reducedMotion:'reduce'});await page.locator('#hint-knee').click();await page.locator('#knee-hotspot').click();
  const reduced=await watchGesture(page);assert(reduced.some(s=>s.angle>=4),'Intentional teaching motion remains functional under reduced motion');
  assert(reduced.every(s=>s.fallen==='false'));
  for(const v of [{width:1080,height:1920},{width:1920,height:1080},{width:1366,height:768}]){
    await page.setViewportSize(v);await page.waitForTimeout(300);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    assert(await page.evaluate(()=>document.querySelector('footer').getBoundingClientRect().top>=document.querySelector('.exhibit').getBoundingClientRect().bottom-1),'Footer must follow the complete exhibit');
    assert(await page.evaluate(()=>{
      const a=document.getElementById('discovery-game').getBoundingClientRect(),b=document.getElementById('joint-controls').getBoundingClientRect();
      return a.right<=b.left+1||b.right<=a.left+1||a.bottom<=b.top+1||b.bottom<=a.top+1;
    }),'Task and controls cannot overlap');
    await capture(page,`layout-${v.width}`);
  }
  assert.deepEqual(errors,[]);
  console.log('PASS immediate hip/knee/ankle teaching motion without falls, repeated-click baseline, both modes, preserved game progress, honest warnings, manual falls, reduced motion and portrait layouts');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
