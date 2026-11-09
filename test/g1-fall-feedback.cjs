const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const errors=[],out='work/g1-fall-feedback';fs.mkdirSync(out,{recursive:true});
 try{
  const p=await browser.newPage({viewport:{width:1080,height:1800}});p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{
   window.effects=[];window.resets=0;
   window.pad={index:0,id:'Standard test pad',connected:true,mapping:'standard',axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0})),vibrationActuator:{playEffect:async(type,options)=>{effects.push({type,...options});return 'complete';},reset:async()=>{resets++;}}};
   Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});
  });
  await p.goto('http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-09-fall-feedback-1');await p.locator('body[data-ready=true]').waitFor();
  await p.waitForFunction(()=>!document.querySelector('#haptic-toggle').disabled);assert.equal(await p.locator('#haptic-toggle').textContent(),'震动已开');
  await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
  assert.equal(await p.evaluate(()=>effects.length),0);
  await p.locator('[data-drive-mode=stand]').click();await p.waitForFunction(()=>effects.some(e=>e.duration===100));
  await p.waitForTimeout(150);const light=await p.evaluate(()=>effects[0]);assert(light.strongMagnitude<.2);
  await p.locator('[data-drive-mode=locomotion]').click();await p.waitForTimeout(200);
  assert.equal(await p.evaluate(()=>effects.filter(e=>e.duration===100).length),2);
  await p.locator('[data-drive-speed=fast]').click();await p.evaluate(()=>pad.axes[1]=1);
  await p.waitForFunction(()=>document.body.dataset.body==='falling');assert.equal(await p.evaluate(()=>effects.filter(e=>e.duration===800).length),0);
  await p.waitForFunction(()=>document.body.dataset.body==='fallen');await p.evaluate(()=>pad.axes[1]=0);
  const effects=await p.evaluate(()=>window.effects.filter(e=>e.duration===800));assert.equal(effects.length,1);
  await p.waitForTimeout(900);assert.equal(await p.evaluate(()=>effects.filter(e=>e.duration===800).length),1,'Lying on the floor cannot loop vibration');
  assert(await p.evaluate(()=>Number(getComputedStyle(document.querySelector('#fall-feedback')).opacity)>.6));
  assert.equal(await p.locator('#fall-feedback').evaluate(e=>getComputedStyle(e).pointerEvents),'none');
  await p.screenshot({path:`${out}/fallen-portrait.png`});
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]]){
   await p.setViewportSize({width,height});await p.waitForTimeout(100);
   const result=await p.evaluate(()=>{
    const panel=document.querySelector('.stage-top').getBoundingClientRect();
    return {scroll:document.documentElement.scrollHeight-innerHeight,clipped:[...document.querySelectorAll('.stage-top button,.stage-top>span')].filter(e=>{const r=e.getBoundingClientRect();return r.left<panel.left||r.right>panel.right||r.top<panel.top||r.bottom>panel.bottom;}).map(e=>e.id||e.tagName)};
   });assert(result.scroll<=2&&result.clipped.length===0,JSON.stringify({width,height,result}));
  }
  await p.locator('#recover-body').click();await p.waitForFunction(()=>document.body.dataset.body==='recovering');
  await p.waitForTimeout(350);assert.equal(await p.locator('#fall-feedback').evaluate(e=>Number(getComputedStyle(e).opacity)),0);
  await p.waitForFunction(()=>document.body.dataset.body==='upright');
  await p.locator('#haptic-toggle').click();assert.equal(await p.locator('#haptic-toggle').getAttribute('aria-pressed'),'false');
  await p.locator('[data-drive-mode=zero]').click();await p.waitForFunction(()=>document.body.dataset.body==='fallen');
  assert.equal(await p.evaluate(()=>effects.filter(e=>e.duration===800).length),1,'Muting does not replay the next fall');
  const count=await p.evaluate(()=>effects.length);await p.locator('#haptic-toggle').click();await p.waitForTimeout(200);assert.equal(await p.evaluate(()=>effects.length),count,'Enabling on the floor cannot replay the missed fall');
  // Unsupported devices still get red visual feedback and all screen controls.
  const q=await browser.newPage({viewport:{width:1280,height:720}});q.on('pageerror',e=>errors.push(e.message));
  await q.goto('http://127.0.0.1:8765/demos/g1/drive/');await q.locator('body[data-ready=true]').waitFor();
  await q.locator('#source-manual').click();await q.locator('#drive-start').click();await q.locator('[data-drive-mode=zero]').click();
  await q.waitForFunction(()=>document.body.dataset.body==='fallen');assert(await q.locator('#haptic-toggle').isDisabled());
  await q.waitForTimeout(200);assert(await q.locator('#fall-feedback').evaluate(e=>Number(getComputedStyle(e).opacity)>.6));
  await q.screenshot({path:`${out}/fallen-desktop.png`});
  assert.deepEqual(errors,[]);console.log('PASS actual wall fall -> one 800ms haptic command, red screen edge, recovery fade, opt-out/no-replay, unsupported fallback and six toolbar layouts. Physical 800ms feel pending.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
