const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const out=path.resolve('work/g1-input-feedback');fs.mkdirSync(out,{recursive:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.pad={id:'Android nonstandard Bluetooth sample',index:0,mapping:'',connected:true,axes:[0,0,0,0,-1,0,0,0,0,3.2857],buttons:Array.from({length:11},(_,i)=>({pressed:i===6,value:i===6?1:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>window.pad.connected?[window.pad]:[]});});
  const url=process.env.FEEDBACK_URL||'http://127.0.0.1:8765/demos/g1/input-check/';
  await page.goto(url);await page.waitForFunction(()=>document.querySelector('#connection').dataset.ready==='true');
  assert.match(await page.locator('#device-meta').textContent(),/原始布局/);await page.locator('#baseline').click();assert.match(await page.locator('#notice').textContent(),/按钮 6/);
  await page.locator('[data-target=dpad-down]').click();
  await page.evaluate(()=>{window.pad.buttons[3]={pressed:true,value:1};window.pad.axes[5]=.714;});await page.waitForTimeout(150);
  assert.match(await page.locator('#capture-result').textContent(),/按钮 3/);assert.match(await page.locator('#capture-result').textContent(),/轴 5/);
  await page.evaluate(()=>{window.pad.buttons[3]={pressed:false,value:0};window.pad.axes[5]=0;});await page.waitForTimeout(100);await page.locator('#save').click();
  await page.locator('[data-target=right-right]').click();await page.evaluate(()=>window.pad.axes[7]=1);await page.waitForTimeout(120);await page.evaluate(()=>window.pad.axes[7]=0);await page.waitForTimeout(80);await page.locator('#save').click();
  await page.locator('#view-report').click();let report=JSON.parse(await page.locator('#report-text').inputValue());assert.equal(report.records.length,2);assert.equal(report.records[0].baseline.buttons[6].value,1);assert(report.records[1].axes.some(a=>a.index===7));assert.equal(report.restingBaseline.axes[9],3.2857);await page.locator('#close-report').click();
  const downloadEvent=page.waitForEvent('download');await page.locator('#download').click();const download=await downloadEvent;await download.saveAs(path.join(out,'report.json'));assert.equal(JSON.parse(fs.readFileSync(path.join(out,'report.json'))).records.length,2);
  await page.reload();await page.waitForFunction(()=>document.querySelector('#connection').dataset.ready==='true');assert.match(await page.locator('#progress').textContent(),/2 \/ 24/);
  await page.locator('#baseline').click();await page.locator('[data-target=a]').click();await page.evaluate(()=>window.pad.buttons[2]={pressed:true,value:1});await page.waitForTimeout(100);await page.evaluate(()=>dispatchEvent(new Event('blur')));assert.match(await page.locator('#capture-note').textContent(),/失去焦点/);
  await page.evaluate(()=>{window.pad.connected=false;});await page.waitForFunction(()=>document.querySelector('#connection').dataset.ready==='false');
  await page.locator('[data-target=dpad-left]').click();await page.keyboard.press('ArrowLeft');await page.waitForTimeout(100);assert.match(await page.locator('#capture-result').textContent(),/键盘 ArrowLeft/);await page.locator('#save').click();
  await page.locator('#view-report').click();report=JSON.parse(await page.locator('#report-text').inputValue());assert(report.records.some(r=>r.target==='dpad-left'&&r.baseline===null&&r.keys.some(k=>k.code==='ArrowLeft')));assert(report.records.some(r=>r.interrupted));await page.locator('#close-report').click();
  await page.evaluate(()=>{window.pad.connected=true;window.pad.buttons=Array.from({length:35},()=>({pressed:false,value:0}));window.pad.axes=Array.from({length:17},()=>0);});await page.waitForFunction(()=>document.querySelector('#button-count').textContent==='35');await page.locator('#buttons-next').click();await page.locator('#axes-next').click();await page.waitForTimeout(100);assert(await page.locator('.raw-button[data-index="34"]').count());assert(await page.locator('.raw-axis[data-index="16"]').count());
  await page.evaluate(()=>{window.pad.buttons=Array.from({length:17},()=>({pressed:false,value:0}));window.pad.axes=[0,0,0,0];});await page.waitForTimeout(120);assert.equal(await page.locator('#button-page').textContent(),'1 / 1');assert(await page.locator('.raw-button[data-index="0"]').count());
  await page.locator('#baseline').click();await page.locator('[data-target=lt]').click();
  assert.equal(await page.locator('#no-response').count(),1,'A physical control without browser input must be recordable');
  await page.locator('#no-response').click();await page.locator('#photo-report').click();
  assert.equal(await page.locator('#photo-rows .photo-row').count(),24);assert.match(await page.locator('#photo-rows [data-target=lt]').textContent(),/无响应/);assert.match(await page.locator('#photo-rows [data-target=rt]').textContent(),/未记录/);
  await page.locator('#close-photo').click();await page.locator('#view-report').click();report=JSON.parse(await page.locator('#report-text').inputValue());assert(report.records.some(r=>r.target==='lt'&&r.noResponse===true));await page.locator('#close-report').click();
  await page.reload();await page.evaluate(()=>{window.pad.buttons=Array.from({length:17},()=>({pressed:false,value:0}));window.pad.axes=[0,0,0,0];});await page.waitForFunction(()=>document.querySelector('#button-count').textContent==='17');await page.locator('#photo-report').click();assert.match(await page.locator('#photo-rows [data-target=lt]').textContent(),/无响应/);await page.locator('#close-photo').click();
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720]]){
   await page.setViewportSize({width,height});await page.waitForTimeout(120);
   const layout=await page.evaluate(()=>({height:document.documentElement.scrollHeight,viewport:innerHeight,clipped:[...document.querySelectorAll('#targets button,#baseline,#save,#next,#download,#view-report,#copy-report,.keyboard-box')].filter(e=>{const r=e.getBoundingClientRect();return r.x<0||r.y<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(e=>e.id||e.textContent),overflow:[...document.querySelectorAll('.panel')].filter(e=>e.scrollHeight>e.clientHeight+2).map(e=>e.className)}));
   await page.screenshot({path:path.join(out,`${width}x${height}.png`)});console.log('LAYOUT',width,height,JSON.stringify(layout));assert.deepEqual(layout.clipped,[]);assert(layout.height<=height+2);assert.deepEqual(layout.overflow,[]);
   await page.locator('#photo-report').click();
   const photo=await page.locator('#photo-sheet').evaluate(e=>({height:e.scrollHeight,viewport:innerHeight,clipped:[...e.querySelectorAll('.photo-row,#close-photo')].filter(c=>{const r=c.getBoundingClientRect();return r.x<0||r.y<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(c=>c.textContent)}));
   assert.deepEqual(photo.clipped,[]);assert(photo.height<=height+2);await page.screenshot({path:path.join(out,`photo-${width}x${height}.png`)});await page.locator('#close-photo').click();
  }
  await page.evaluate(()=>{
   const p={id:'Android nonstandard Bluetooth sample',index:0,mapping:'',connected:true,axes:[0,0,0,0,-1,0,0,0,0,3.2857],buttons:Array.from({length:11},(_,i)=>({pressed:i===6,value:i===6?1:0}))};
   const records=[...document.querySelectorAll('#targets [data-target]')].map((b,i)=>({target:b.dataset.target,startedAtMs:0,durationMs:800,baseline:p,last:p,axes:i%4===0?[{index:7,min:-1,max:0,minDelta:-1,maxDelta:0},{index:5,min:-.3,max:0,minDelta:-.3,maxDelta:0}]:[],buttons:i%4===0?[{index:3,min:0,max:1,pressedSeen:true}]:i%4===1?[{index:14,min:0,max:1,pressedSeen:true}]:[],keys:[],interrupted:null,hasInput:i%4<2,samples:24,noResponse:i%4===2}));
   localStorage.setItem('g1-input-feedback-v1',JSON.stringify({version:1,records}));
  });
  await page.reload();await page.waitForFunction(()=>document.querySelector('#connection').dataset.ready==='true');
  for(const [width,height]of [[1080,1800],[720,1280],[1528,698]]){
   await page.setViewportSize({width,height});await page.locator('#photo-report').click();
   assert.match(await page.locator('#photo-rows [data-target=dpad-up]').textContent(),/轴7/);
   const overflowing=await page.locator('.photo-row').evaluateAll(es=>es.filter(e=>e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2).map(e=>e.textContent));assert.deepEqual(overflowing,[]);
   await page.screenshot({path:path.join(out,`photo-full-${width}x${height}.png`)});await page.locator('#close-photo').click();
  }
  assert.deepEqual(errors,[]);console.log('PASS: raw capture, explicit no-response, old saved records, photo summaries with all channels, JSON download and five layouts.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
