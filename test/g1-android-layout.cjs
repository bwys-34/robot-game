const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const out=path.resolve('work/g1-android-layout');fs.mkdirSync(out,{recursive:true});
 let page;
 try{
  page=await browser.newPage({viewport:{width:1080,height:1800}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.pad={id:'Xbox Wireless Controller',index:0,mapping:'standard',connected:true,axes:[.005,-.004,0,0],buttons:Array.from({length:16},(_,i)=>({pressed:i===6||i===7,value:i===6?.503:i===7?.502:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>window.pad.connected?[window.pad]:[]});});
  await page.goto(process.env.DRIVE_URL||'http://127.0.0.1:8765/demos/g1/drive/');await page.locator('body[data-ready=true]').waitFor();
  assert.equal(await page.locator('#pad-layout').count(),1,'Visitor can explicitly select the observed Android layout');
  await page.locator('#pad-layout').selectOption('exhibition-android');
  // Switching profiles requires a released frame before a fresh A press.
  await page.waitForTimeout(250);
  const button=async(index,value)=>{await page.evaluate(({index,value})=>window.pad.buttons[index]={pressed:value>.5,value},{index,value});await page.waitForTimeout(120);};
  await button(0,1);await button(0,0);await page.waitForFunction(()=>document.body.dataset.input==='ready');assert.equal(await page.locator('body').getAttribute('data-mode'),'locomotion');
  const yaw=Number(await page.locator('#map-robot').getAttribute('data-yaw'));await button(6,1);await page.waitForTimeout(500);assert(Number(await page.locator('#map-robot').getAttribute('data-yaw'))<yaw-.15);await button(6,.5);assert.equal(await page.locator('body').getAttribute('data-body'),'upright');
  const selected=await page.locator('#action-select').inputValue();await button(15,1);await button(15,0);assert.notEqual(await page.locator('#action-select').inputValue(),selected);assert.equal(await page.locator('body').getAttribute('data-mode'),'locomotion');
  await page.locator('#drive-reset').click();await page.waitForTimeout(250);await button(0,1);await button(0,0);await page.waitForFunction(()=>document.body.dataset.input==='ready');await page.waitForTimeout(500);await button(3,1);await button(3,0);await page.waitForFunction(()=>document.body.dataset.motion==='invite');
  await page.locator('#drive-reset').click();await page.waitForTimeout(250);await button(0,1);await button(0,0);await page.waitForFunction(()=>document.body.dataset.input==='ready');await button(4,1);await button(4,0);await page.waitForFunction(()=>document.querySelector('#camera-toggle').dataset.overview==='true');
  await page.locator('[data-drive-mode=performance]').click();await page.waitForTimeout(500);await button(9,1);await button(1,1);await page.waitForFunction(()=>document.body.dataset.motion==='robotdance');await button(1,0);await button(9,0);assert.equal(await page.locator('body').getAttribute('data-input'),'ready');
  await page.locator('#drive-reset').click();await page.locator('#drive-start').click();await page.waitForFunction(()=>document.body.dataset.input==='ready');await button(1,1);await page.waitForFunction(()=>document.body.dataset.input==='paused');await button(1,0);await button(0,1);await button(0,0);await page.waitForFunction(()=>document.body.dataset.input==='ready');
  await page.evaluate(()=>window.pad.connected=false);await page.waitForFunction(()=>document.body.dataset.input==='disconnected');await page.evaluate(()=>window.pad.connected=true);await page.waitForTimeout(300);assert.equal(await page.locator('body').getAttribute('data-input'),'disconnected');
  await page.reload();await page.locator('body[data-ready=true]').waitFor();assert.equal(await page.locator('#pad-layout').inputValue(),'exhibition-android');assert.match(await page.locator('#mode-shortcuts').textContent(),/未读到|未响应/);assert(!/LT.*0\.6/.test(await page.locator('#mode-shortcuts').textContent()));
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698]]){
   await page.setViewportSize({width,height});await page.waitForTimeout(250);
   for(const mode of ['locomotion','performance']){
   await page.locator(`[data-drive-mode=${mode}]`).click();await page.waitForFunction(mode=>document.body.dataset.mode===mode,mode);
   await page.waitForTimeout(300); // Let the resized WebGL surface and CSS transition paint.
   const layout=await page.evaluate(()=>({scroll:document.documentElement.scrollHeight-innerHeight,clipped:[...document.querySelectorAll('#pad-layout,#device-select,#drive-start,#mode-shortcuts')].filter(e=>{const r=e.getBoundingClientRect();return r.x<0||r.y<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(e=>e.id),nested:[...document.querySelectorAll('.dashboard,.controller-card,.mission-card')].filter(e=>e.scrollHeight>e.clientHeight+2).map(e=>e.className)}));assert(layout.scroll<=2,JSON.stringify(layout));assert.deepEqual(layout.clipped,[]);assert.deepEqual(layout.nested,[]);await page.screenshot({path:path.join(out,`${width}x${height}.png`)});
   }
  }
  await page.locator('#show-touch').click();assert(await page.locator('#pad-layout').isVisible(),'Expanding screen controls keeps layout selector accessible');await page.locator('#show-touch').click();
  await page.locator('#source-manual').click();assert(await page.locator('#pad-layout').isHidden());await page.locator('#source-pad').click();assert(await page.locator('#pad-layout').isVisible());
  await page.locator('#pad-layout').selectOption('standard');assert.equal(await page.locator('body').getAttribute('data-input'),'paused');assert.deepEqual(errors,[]);
  console.log('PASS: simulated photographed Android channels drive turning, actions, A start, RB chords; profile persistence, interruption and four layouts. Actual Android trial remains required.');
 }catch(error){if(page){console.error(await page.evaluate(()=>({state:{...document.body.dataset},focus:document.hasFocus(),input:document.querySelector('#input-status').textContent,mission:document.querySelector('.mission-card').textContent})));await page.screenshot({path:path.join(out,'failure.png')});}throw error;}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
