const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const out=path.resolve(__dirname,'../work/g1-kiosk-fit-qa');

async function check(page,label,screenshot=true){
 await page.waitForTimeout(250);
 const result=await page.evaluate(()=>{
  const issues=[];
  const visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
  for(const selector of ['.observation-panel','.joint-panel']){
   const e=document.querySelector(selector),s=getComputedStyle(e);
   if(e.scrollHeight>e.clientHeight+2)issues.push(`${selector} needs ${e.scrollHeight-e.clientHeight}px of internal scrolling`);
   if(/auto|scroll/.test(s.overflowY))issues.push(`${selector} still declares a scroll container`);
  }
  for(const e of document.querySelectorAll('.observation-panel button,.observation-panel select,.observation-panel input,.model-notes>*,#training-result,#training-review')){
   if(!visible(e))continue;
   const r=e.getBoundingClientRect();
   if(r.bottom>innerHeight+1||r.top<0||r.left<0||r.right>innerWidth+1)issues.push(`${e.id||e.className} is outside the screen`);
   for(let parent=e.parentElement;parent;parent=parent.parentElement){
    const s=getComputedStyle(parent),p=parent.getBoundingClientRect();
    if(/hidden|clip|auto|scroll/.test(s.overflowY)&&(r.bottom>p.bottom+2||r.top<p.top-2))issues.push(`${e.id||e.className} is clipped by ${parent.className||parent.tagName}`);
   }
  }
  const footer=document.querySelector('footer').getBoundingClientRect(),viewer=document.getElementById('viewer').getBoundingClientRect(),mode=document.getElementById('mode-observe').getBoundingClientRect();
  if(Math.abs(footer.bottom-innerHeight)>3)issues.push(`Unused space below footer: ${innerHeight-footer.bottom}px`);
  if(document.documentElement.scrollHeight>innerHeight+2)issues.push('Page needs scrolling');
  if(mode.bottom>viewer.top)issues.push('Modes are not above the model');
  if(viewer.height<230)issues.push('Model lost its usable display height');
  return {issues,viewport:{width:innerWidth,height:innerHeight},viewerHeight:viewer.height};
 });
 if(screenshot)await page.screenshot({path:path.join(out,label+'.png'),fullPage:true});
 assert.deepEqual(result.issues,[],label+': '+JSON.stringify(result));
}

(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  for(const legacy of [true,false]){
   const page=await browser.newPage({viewport:{width:1080,height:1800},deviceScaleFactor:2,hasTouch:true});
   const errors=[];page.on('pageerror',error=>errors.push(error.message));
   // An older Chrome drops dvh declarations, while retaining vh/percentage fallbacks.
   if(legacy)await page.route('**/kiosk-layout.css*',async route=>{const response=await route.fetch();await route.fulfill({response,body:(await response.text()).replace(/[\w-]+\s*:[^;{}]*dvh\b[^;{}]*;/g,'')});});
   const name=legacy?'legacy':'modern';
   await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
   await check(page,name+'-discovery');
   await page.locator('#mode-observe').click();await page.locator('#select-knee').click();await check(page,name+'-observe');
   await page.locator('#mode-challenge').click();await page.locator('#enter-training').click();
   await check(page,name+'-training-ready');
   await page.locator('#training-task').selectOption('crouch');await page.locator('#training-start').click();
   await check(page,name+'-training-playing');
   await page.locator('#training-hint').click();await check(page,name+'-hint');
   await page.locator('#training-more').click();await page.waitForTimeout(1400);await page.locator('#training-submit').click();
   await check(page,name+'-review');
   await page.locator('#analysis-details').evaluate(element=>element.open=true);await check(page,name+'-analysis');
   await page.locator('#analysis-details').evaluate(element=>element.open=false);
   if(!legacy){
    const tasks=await page.locator('#training-task option').evaluateAll(options=>options.map(option=>option.value));
    for(const task of tasks){await page.locator('#training-task').selectOption(task);await check(page,'task-'+task,false);}
    await page.locator('#training-task').selectOption('first-lift');await page.locator('#training-start').click();
    for(let i=0;i<20;i++)await page.locator('#training-more').click();
    await page.waitForFunction(()=>!document.getElementById('training-submit').disabled);await page.locator('#training-submit').click();
    assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'complete');await check(page,'success');
    await page.locator('#fullscreen').click();await page.waitForFunction(()=>Boolean(document.fullscreenElement));await check(page,'fullscreen');
    await page.locator('#fullscreen').click();await page.waitForFunction(()=>!document.fullscreenElement);
    for(const size of [{width:1080,height:1920},{width:720,height:1280}]){await page.setViewportSize(size);await check(page,`${size.width}-${size.height}-review`);}
   }
   assert.deepEqual(errors,[],'No browser exceptions');await page.close();
  }
  console.log('PASS: Android display size/DPR, legacy viewport CSS, no internal scrolling or clipped controls, observe/discovery/training/hints/review/fullscreen');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
