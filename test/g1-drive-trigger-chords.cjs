const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.pad={id:'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};
   Object.defineProperty(navigator,'getGamepads',{value:()=>[window.pad]});
  });
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/');
  await page.locator('body[data-ready=true]').waitFor({timeout:30000});await page.locator('#drive-start').click();
  await page.waitForFunction(()=>document.body.dataset.input==='ready');
  assert.match(await page.locator('#input-status').textContent(),/LT 0% · RT 0%/);
  const set=async values=>page.evaluate(values=>Object.entries(values).forEach(([i,value])=>window.pad.buttons[i]={value,pressed:false}),values);
  await set({6:.83});await page.waitForFunction(()=>document.querySelector('#input-status').textContent.includes('LT 83% · RT 0%'));
  assert.match(await page.locator('#input-status').textContent(),/LT 确认/);
  await set({1:1});await page.waitForTimeout(400);assert.equal(await page.locator('body').getAttribute('data-mode'),'locomotion');
  await page.waitForFunction(()=>document.body.dataset.mode==='damp');
  await page.waitForFunction(()=>document.body.dataset.body==='fallen');
  await set({6:0});await page.waitForTimeout(200);assert.equal(await page.locator('body').getAttribute('data-input'),'ready','Releasing LT before B must not pause');
  await set({1:0});await page.waitForTimeout(150);
  await set({6:1,2:1});await page.waitForFunction(()=>document.body.dataset.body==='recovering');
  await page.waitForFunction(()=>document.body.dataset.body==='upright');
  await set({6:0,2:0});await page.waitForTimeout(200);
  await set({7:.92});await page.waitForFunction(()=>document.querySelector('#input-status').textContent.includes('LT 0% · RT 92%'));
  await set({0:1});await page.waitForFunction(()=>document.body.dataset.mode==='locomotion');
  await set({7:0,0:0});await page.waitForTimeout(150);
  await set({6:1,3:1});await page.waitForFunction(()=>document.body.dataset.mode==='zero'&&document.body.dataset.body==='fallen');
  await set({6:0,3:0});await page.waitForTimeout(150);
  await set({6:1,7:1});await page.waitForFunction(()=>document.body.dataset.mode==='debug'&&document.body.dataset.body==='upright');
  await set({6:0,7:0});await page.waitForTimeout(200);
  const failures=[];
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]]){
   await page.setViewportSize({width,height});await page.waitForTimeout(120);
   const overflow=await page.evaluate(()=>{
    const nodes=[...document.querySelectorAll('#input-status,#control-profile-hint,.controller-card,.dashboard')].filter(e=>e.getClientRects().length);
    return nodes.filter(e=>e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2||e.getBoundingClientRect().bottom>innerHeight+1).map(e=>e.id||e.className);
   });
   if(overflow.length)failures.push({width,height,overflow});
  }
  assert.deepEqual(failures,[]);assert.deepEqual(errors,[]);
  fs.mkdirSync('work/g1-drive-trigger-chords',{recursive:true});await page.screenshot({path:'work/g1-drive-trigger-chords/desktop.png'});
  console.log('PASS: standard analog trigger readouts, simultaneous held mode chords, recovery, release suppression, debug entry, six viewport overflow checks. Injected input only; physical mapping still needs on-device confirmation.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
