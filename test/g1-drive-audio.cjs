const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('module').createRequire(path.resolve('demos/g1/package.json'));
const out=path.resolve('work/g1-gait-audio');fs.mkdirSync(out,{recursive:true});
const bundle=r('esbuild').buildSync({entryPoints:['demos/g1/src/drive-audio.ts'],bundle:true,format:'iife',globalName:'AudioQA',write:false,target:'chrome88'}).outputFiles[0].text;
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.audioStats={contexts:[],starts:[],sources:[]};const Native=window.AudioContext;
   window.AudioContext=function(...args){const c=new Native(...args);window.audioStats.contexts.push(c);
    for(const method of ['createOscillator','createBufferSource']){const make=c[method].bind(c);c[method]=()=>{const node=make(),start=node.start.bind(node),disconnect=node.disconnect.bind(node);window.audioStats.sources.push(node);node.qaDisconnected=false;node.disconnect=(...a)=>{node.qaDisconnected=true;return disconnect(...a);};node.start=(...a)=>{window.audioStats.starts.push({type:method,at:c.currentTime});return start(...a);};return node;};}return c;};
  });
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/?v=audio-qa');await page.locator('body[data-ready=true]').waitFor({timeout:30000});
  assert.equal(await page.evaluate(()=>audioStats.contexts.length),0,'No audio context/download before opt-in');
  await page.locator('#source-manual').click();await page.locator('#drive-start').click();
  await page.keyboard.down('w');await page.waitForTimeout(700);await page.keyboard.up('w');
  assert.equal(await page.evaluate(()=>audioStats.contexts.length),0,'Silent driving works');
  await page.locator('#sound-toggle').click();await page.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='on');
  assert(await page.evaluate(()=>audioStats.sources.some(n=>n.type==='triangle')),'The live game uses the clear speaker profile, not just the standalone sound bank test');
  await page.waitForTimeout(1000);const base=await page.evaluate(()=>audioStats.starts.length);
  await page.keyboard.down('w');await page.waitForTimeout(900);await page.keyboard.up('w');await page.waitForTimeout(800);
  const footsteps=await page.evaluate(()=>audioStats.starts.filter(e=>e.type==='createBufferSource').length);assert(footsteps>=2&&footsteps<15,`Actual landings produce bounded footsteps: ${footsteps}`);
  assert((await page.evaluate(()=>audioStats.starts.length))>base);await page.waitForTimeout(400);
  const still=await page.evaluate(()=>audioStats.starts.length);await page.waitForTimeout(500);assert.equal(await page.evaluate(()=>audioStats.starts.length),still,'No footsteps at rest');
  await page.screenshot({path:path.join(out,'portrait-audio-on.png')});
  await page.locator('#action-wave').click();await page.waitForFunction(()=>document.body.dataset.motion==='wave');
  assert((await page.evaluate(()=>audioStats.starts.length))>still,'Action starts a cue');
  await page.locator('#sound-toggle').click();await page.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='off');
  await page.waitForTimeout(300);assert.equal(await page.evaluate(()=>audioStats.sources.filter(n=>!n.qaDisconnected).length),0,'Mute releases all audio sources');
  assert.equal(await page.evaluate(()=>audioStats.contexts[0].state),'suspended');
  await page.locator('#sound-toggle').click();await page.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='on');
  await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForTimeout(200);
  assert.equal(await page.locator('#sound-toggle').getAttribute('data-sound'),'resume');assert.equal(await page.evaluate(()=>audioStats.sources.filter(n=>!n.qaDisconnected).length),0);
  assert.equal(await page.evaluate(()=>audioStats.contexts[0].state),'suspended');
  await page.locator('#sound-toggle').click();await page.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='on');
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720]]){
   await page.setViewportSize({width,height});const clipped=await page.evaluate(()=>[...document.querySelectorAll('.stage-top button,.stage-top>span')].some(e=>{const r=e.getBoundingClientRect(),p=e.closest('.stage-top').getBoundingClientRect();return r.left<p.left||r.right>p.right||r.bottom>p.bottom;}));assert(!clipped,`Audio control fits at ${width}x${height}`);
  }
  await page.addScriptTag({content:bundle});
  const rendered=await page.evaluate(async()=>{
   const result=[];
   for(const cue of ['footstep','ready','pause','mode','speed','action','success','warning','servo','swoosh','clap','kick','snare','hat','bell','landing']){
    const c=new OfflineAudioContext(1,24000,24000),bank=new AudioQA.DriveSoundBank(c,c.destination);
    let error='';try{bank.play({cue,side:'left',strength:1,...(['servo','swoosh','clap','kick','snare','hat','bell','landing'].includes(cue)?{action:'wave'}:{})});}catch(e){error=e.message;}
    const audio=await c.startRendering(),data=audio.getChannelData(0);
    result.push({cue,error,peak:Math.max(...data.map(Math.abs)),rms:Math.sqrt(data.reduce((s,v)=>s+v*v,0)/data.length),tail:Math.max(...data.slice(12000).map(Math.abs)),voices:bank.activeVoices});
   }return result;
  });
  for(const sound of rendered){assert(sound.rms>.003&&sound.peak<.8,`Bounded audible cue ${JSON.stringify(sound)}`);assert(sound.tail<.00001&&sound.voices===0,'Cues end and release nodes');}
  const cancelled=await page.evaluate(()=>{const c=new OfflineAudioContext(1,24000,24000),b=new AudioQA.DriveSoundBank(c,c.destination);b.play({cue:'servo',action:'wave'});b.play({cue:'ready'});const before=b.activeVoices;b.stopPerformance();const after=b.activeVoices;b.stop();return {before,after,final:b.activeVoices};});
  assert.deepEqual(cancelled,{before:3,after:2,final:0},'Cancelling a show stops its sounds without cancelling operation feedback');
  fs.writeFileSync(path.join(out,'audio-report.json'),JSON.stringify({footsteps,rendered,errors},null,2));assert.deepEqual(errors,[]);
  const blocked=await browser.newPage();await blocked.addInitScript(()=>{const Native=window.AudioContext;window.AudioContext=function(){const c=new Native();c.resume=()=>new Promise(()=>{});return c;};});
  await blocked.goto('http://127.0.0.1:8765/demos/g1/drive/');await blocked.locator('body[data-ready=true]').waitFor();await blocked.locator('#sound-toggle').click();
  await blocked.waitForTimeout(2300);assert.equal(await blocked.locator('#sound-toggle').getAttribute('data-sound'),'resume','Unresolved browser permission must leave a retry control');
  const unavailable=await browser.newPage();await unavailable.addInitScript(()=>{Object.defineProperty(window,'AudioContext',{value:undefined});Object.defineProperty(window,'webkitAudioContext',{value:undefined});});
  await unavailable.goto('http://127.0.0.1:8765/demos/g1/drive/');await unavailable.locator('body[data-ready=true]').waitFor();await unavailable.locator('#sound-toggle').click();
  await unavailable.waitForFunction(()=>document.querySelector('#sound-toggle').dataset.sound==='unavailable');await unavailable.locator('#source-manual').click();await unavailable.locator('#drive-start').click();await unavailable.keyboard.down('w');await unavailable.waitForTimeout(500);await unavailable.keyboard.up('w');
  assert(parseFloat(await unavailable.locator('#distance-travelled').textContent())>.05,'Audio failure never gates driving');
  console.log('PASS real Web Audio synthesis, opt-in, landing sync, mute/background/retry/fallback and exhibition control layout',JSON.stringify(rendered));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
