const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const p=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true}),errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{
   window.soundLog=[];window.soundSources=[];const Native=AudioContext;
   window.AudioContext=function(...args){const c=new Native(...args);
    for(const method of ['createOscillator','createBufferSource']){const make=c[method].bind(c);c[method]=()=>{const n=make(),start=n.start.bind(n),disconnect=n.disconnect.bind(n);n.qaReleased=false;window.soundSources.push(n);n.disconnect=(...a)=>{n.qaReleased=true;return disconnect(...a);};n.start=(...a)=>{soundLog.push({type:method,time:c.currentTime,frequency:n.frequency?.value});return start(...a);};return n;};}return c;};
  });
  await p.goto('http://127.0.0.1:8765/demos/g1/drive/?v=performance-audio-2');await p.locator('body[data-ready=true]').waitFor({timeout:30000});
  await p.locator('#source-manual').click();await p.locator('#drive-start').click();await p.locator('#sound-toggle').click();await p.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='on');await p.waitForTimeout(400);
  const report=[];let nextMode='stand';
  for(const action of ['dance','robotdance','armdance','cheerdance']){
   await p.locator(`[data-performance-action=${action}]`).click();await p.waitForFunction(a=>document.body.dataset.motion===a,action);
   await p.waitForTimeout(350);const intro=await p.evaluate(()=>soundLog.length);await p.waitForTimeout(1100);
   assert((await p.evaluate(()=>soundLog.length))>intro+1,`${action} needs synchronized sounds throughout, not just at start`);
   await p.keyboard.press('p');await p.waitForFunction(()=>document.body.dataset.input==='paused');await p.waitForTimeout(300);
   assert.equal(await p.evaluate(()=>soundSources.filter(s=>!s.qaReleased).length),0,'Pausing disconnects all voices after short pause cue');
   const frozen=await p.evaluate(()=>soundLog.length);await p.waitForTimeout(300);assert.equal(await p.evaluate(()=>soundLog.length),frozen,'Paused animation cannot keep a beat timer running');
   await p.keyboard.press('p');await p.waitForFunction(()=>document.body.dataset.input==='ready');await p.waitForTimeout(150);
   await p.locator(`[data-drive-mode=${nextMode}]`).click();nextMode=nextMode==='stand'?'locomotion':'stand';await p.waitForTimeout(350);
   assert.equal(await p.evaluate(()=>soundSources.filter(s=>!s.qaReleased).length),0,'Mode switch cancels soundtrack without lingering voices');
   report.push({action,continued:true,pauseStops:true,modeCancels:true});
  }
  await p.locator('#action-select').selectOption('clap');const before=await p.evaluate(()=>soundLog.length);await p.locator('#action-wave').click();await p.waitForFunction(()=>document.body.dataset.motion==='clap');
  await p.waitForFunction(()=>document.body.dataset.motion!=='clap',{},{timeout:15000});await p.waitForTimeout(300);
  const claps=await p.evaluate(i=>soundLog.slice(i).filter(e=>e.type==='createBufferSource').length,before);assert.equal(claps,6,'Each of three synchronized claps synthesizes two short layers');
  fs.mkdirSync('work/g1-gait-audio',{recursive:true});await p.screenshot({path:'work/g1-gait-audio/performance-audio-portrait.png'});
  fs.writeFileSync('work/g1-gait-audio/performance-audio-report.json',JSON.stringify({report,clapLayers:claps,errors},null,2));assert.deepEqual(errors,[]);
  console.log('PASS four distinct sustained dance soundtracks, pause/resume, mode cancellation and three actual claps');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
