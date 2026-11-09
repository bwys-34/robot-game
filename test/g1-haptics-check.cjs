const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const out=path.resolve('work/g1-haptics-check');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:850}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.qaPad=null;window.qaEffects=[];window.qaReset=0;window.qaOutcome='complete';
   Object.defineProperty(navigator,'getGamepads',{value:()=>window.qaPad?[window.qaPad]:[]});
   window.qaConnect=(supported=true)=>window.qaPad={index:0,id:'Simulated desktop controller',connected:true,mapping:'standard',axes:[0,0,0,0],buttons:Array.from({length:17},()=>({value:0,pressed:false})),
    ...(supported?{vibrationActuator:{playEffect:async(type,options)=>{qaEffects.push({type,...options});if(qaOutcome==='pending')return new Promise(()=>{});if(qaOutcome==='error')throw Error('rejected');return qaOutcome;},reset:async()=>{qaReset++;}}}:{})};
  });
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/haptics-check/');
  assert(await page.locator('#test').isDisabled());await page.evaluate(()=>qaConnect(false));
  await page.waitForFunction(()=>document.body.dataset.capability==='unsupported');assert(await page.locator('#test').isDisabled());
  await page.evaluate(()=>{qaPad=null;});await page.waitForFunction(()=>document.body.dataset.capability==='no-device');
  await page.evaluate(()=>qaConnect());await page.waitForFunction(()=>document.body.dataset.capability==='ready');
  assert.equal(await page.evaluate(()=>qaEffects.length),0,'Connection does not automatically vibrate');
  await page.locator('#test').click();await page.waitForFunction(()=>document.body.dataset.result==='completed');
  assert.equal(await page.evaluate(()=>qaEffects.length),1);assert(await page.locator('#confirmation').isVisible());
  await page.locator('#not-felt').click();assert.equal(await page.locator('body').getAttribute('data-result'),'not-felt');
  await page.evaluate(()=>qaOutcome='error');await page.locator('#test').click();await page.waitForFunction(()=>document.body.dataset.result==='error');
  await page.evaluate(()=>qaOutcome='pending');await page.locator('#test').click();await page.waitForTimeout(50);
  await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForFunction(()=>document.body.dataset.result==='interrupted');
  assert(await page.evaluate(()=>qaReset>=2),'Blur resets the active actuator');
  await page.evaluate(()=>qaOutcome='complete');await page.locator('#test').click();await page.waitForFunction(()=>document.body.dataset.result==='completed');
  await page.screenshot({path:path.join(out,'desktop.png')});
  for(const [width,height]of [[1280,850],[1528,698],[1080,1800]]){
   await page.setViewportSize({width,height});assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)));
   assert(await page.locator('#test').isVisible());
  }
  assert.deepEqual(errors,[]);console.log('PASS desktop haptic test UI: missing/unsupported/controller API, explicit-only pulses, human confirmation, rejection and blur cancellation. Hardware vibration remains unverified.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
