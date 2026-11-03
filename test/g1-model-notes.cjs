const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const out=path.resolve(__dirname,'../work/g1-restored-layout-qa');
async function checkLayout(page,size){
  await page.setViewportSize(size);await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(350);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow');
  const viewer=await page.locator('#viewer').boundingBox(),panel=await page.locator('.observation-panel').boundingBox();
  if(size.height>size.width)assert(panel.y>=viewer.y+viewer.height-1,'Portrait restores the original model-above-controls layout');
  else assert(panel.x>=viewer.x+viewer.width-1,'Landscape retains the original sidebar');
  for(const selector of ['#stage-task','.view-readout','.gesture-hint','#discovery-feedback','#joint-caption','#pose-warning','#fall-notice','#training-result','#training-legend']){
    const node=page.locator(selector);if(!await node.isVisible())continue;
    const box=await node.boundingBox();assert(box&&box.width>0&&box.height>0,selector+' is readable');
    assert(box.x>=viewer.x+viewer.width-1||box.y>=viewer.y+viewer.height-1||box.x+box.width<=viewer.x+1||box.y+box.height<=viewer.y+1,selector+' must stay outside the model');
  }
  fs.mkdirSync(out,{recursive:true});await page.screenshot({path:path.join(out,`${size.width}-${size.height}-${await page.locator('#pose-game').getAttribute('data-status')||'discovery'}.png`),fullPage:true});
}
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try{
    const page=await browser.newPage({viewport:{width:1080,height:1920}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
    assert.equal(await page.locator('#gesture-orbit,#gesture-pose').count(),0,'Remove the added gesture-mode switch');
    assert.equal(await page.locator('#viewer .viewer-toolbar #fullscreen').count(),1,'Restore fullscreen to its original toolbar');
    assert.equal(await page.locator('#stage-surface').count(),0,'Restore the original model surface');
    await checkLayout(page,{width:1080,height:1920});
    await page.locator('#enter-training').click();await page.locator('#training-start').click();
    for(let i=0;i<20;i++)await page.locator('#training-more').click();
    await page.waitForFunction(()=>!document.getElementById('training-submit').disabled);
    await page.locator('#training-submit').click();
    assert.equal(await page.locator('#pose-game').getAttribute('data-status'),'complete');
    assert(await page.locator('#training-result').isVisible(),'Show earned feedback');
    assert(await page.locator('.training-task-cards').isVisible(),'Restore original recommendation cards');
    for(const size of [{width:1080,height:1920},{width:1920,height:1080},{width:1366,height:768},{width:390,height:844}])await checkLayout(page,size);
    await page.locator('#training-start').click();
    await page.locator('#training-hint').click();await page.locator('#training-hint').click();
    assert(await page.locator('#training-legend').isVisible());await checkLayout(page,{width:1080,height:1920});
    assert.deepEqual(errors,[]);
    console.log('PASS restored layout, original toolbar and controls, score/target text outside the model at four sizes');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
