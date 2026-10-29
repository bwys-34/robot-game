const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const base=process.env.QA_BASE_URL||'http://127.0.0.1:8765/';
const out=path.resolve('work/g1-home-integration-qa');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1920}}),errors=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
  page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  await page.goto(base);await page.locator('.start-button').waitFor();
  assert.equal(await page.locator('#g1-entry').count(),1,'Approved homepage has a G1 entry');
  assert.equal(await page.locator('#g1-entry').getAttribute('href'),'demos/g1/');
  assert.equal(await page.locator('#archive-entry').count(),1);assert.equal(await page.locator('#player-name').count(),1);
  assert(!requests.some(url=>/g1-sample\.glb|demos\/g1\/app\.js/.test(url)),'Home uses only the static preview, not the 3D runtime');
  for(const viewport of [{width:1080,height:1920},{width:1080,height:1720},{width:720,height:1280},{width:2160,height:3840},{width:1920,height:1080},{width:1366,height:768},{width:390,height:844}]){
   await page.setViewportSize(viewport);await page.waitForTimeout(150);await page.waitForFunction(()=>[...document.images].every(img=>img.complete&&img.naturalWidth>0));
   const layout=await page.evaluate(()=>({width:innerWidth,height:innerHeight,scroll:document.documentElement.scrollHeight,wide:document.documentElement.scrollWidth,quiz:document.querySelector('#name-form').getBoundingClientRect().toJSON(),g1:document.querySelector('#g1-entry').getBoundingClientRect().toJSON(),archive:document.querySelector('#archive-entry').getBoundingClientRect().toJSON(),footer:document.querySelector('.site-footer').getBoundingClientRect().toJSON()}));
   assert(layout.wide<=layout.width+1,'No horizontal overflow');
   assert(layout.quiz.bottom<=layout.archive.top||layout.archive.bottom<=layout.quiz.top||layout.quiz.right<=layout.archive.left||layout.archive.right<=layout.quiz.left,'Quiz and archive cards do not overlap');
   if(viewport.width>600){assert(layout.scroll<=layout.height+1,`Homepage fits ${viewport.width}×${viewport.height}: ${JSON.stringify(layout)}`);assert(layout.g1.bottom<=layout.footer.top+1);assert(layout.archive.bottom<=layout.footer.top+1);}
   fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,`home-${viewport.width}-${viewport.height}.png`),fullPage:true});
  }
  await page.setViewportSize({width:1080,height:1920});await page.locator('#archive-entry').click();await page.frameLocator('#original-archive').locator('.catalog-item').first().waitFor();assert.equal(await page.frameLocator('#original-archive').locator('.catalog-item').count(),12);
  await page.frameLocator('#original-archive').locator('#archive-home').click();await page.locator('#g1-entry').click();
  await page.locator('body[data-ready=true]').waitFor({timeout:60000});assert.equal(await page.locator('#training-task option').count(),12);
  await page.locator('#enter-training').click();await page.locator('#training-start').click();assert.equal(await page.locator('#training-score').textContent(),'—');
  assert.equal(await page.locator('#training-controls input[type=range]').count(),0);
  await page.locator('#g1-home').click();await page.locator('#g1-entry').waitFor();
  await page.locator('.start-button').click();await page.locator('.answer:not(:disabled)').first().waitFor();assert.match(await page.locator('.round-player').innerText(),/小小观察员/);
  for(let i=0;i<10;i++){await page.locator('.answer:not(:disabled)').first().waitFor();await page.locator('.answer').first().click();await page.locator('#next-question').click();}
  await page.locator('#review-result').waitFor();await page.locator('#review-result').click();await page.locator('#review-home').click();
  const record=await page.evaluate(()=>JSON.parse(localStorage.getItem('robot-game-exhibition-v1')));assert.equal(record.records.length,1);
  await page.reload();assert(await page.locator('#last-round').isEnabled());await page.locator('#last-round').click();
  assert(await page.locator('#back-result').isVisible());assert.deepEqual(errors,[]);
  console.log('PASS: approved homepage layouts, static-only load, archive/G1/home navigation, unchanged 12-task training, full quiz, review and persisted score');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
