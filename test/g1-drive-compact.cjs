const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/');await page.locator('body[data-ready=true]').waitFor();
  const out=path.resolve('work/g1-drive/compact');fs.mkdirSync(out,{recursive:true});
  for(const [width,height]of [[1528,698],[1440,800],[1280,720]]){
   await page.setViewportSize({width,height});
   for(const source of ['pad','manual']){
    await page.locator('#source-'+source).click();
    const report=await page.evaluate(()=>({
     clipped:[...document.querySelectorAll('#action-select,#action-prev,#action-next,#action-wave,#action-invite,#emergency-stop,[data-drive-speed],#drive-start,#drive-pause,#drive-reset,#touch-controls,.mode-shortcuts,footer')].filter(e=>e.getClientRects().length).filter(e=>{const r=e.getBoundingClientRect();return r.top<0||r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(e=>e.id||e.className),
     overflow:[...document.querySelectorAll('.dashboard,.mission-card,.controller-card')].filter(e=>getComputedStyle(e).display!=='contents'&&e.scrollHeight>e.clientHeight+2).map(e=>e.className),
     root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,
    }));
    await page.screenshot({path:path.join(out,`${width}x${height}-${source}.png`)});
    assert.deepEqual(report.clipped,[],`${width}x${height} ${source}`);assert.deepEqual(report.overflow,[]);assert(report.root<=2);assert(report.viewer>=230);
    assert.equal(await page.locator('#action-select option').count(),15);
    await page.locator('#action-select').selectOption('backflip');await page.waitForFunction(()=>document.body.dataset.action==='backflip');
    assert.match(await page.locator('#action-wave').textContent(),/后空翻/);
    console.log('PASS',width,height,source,JSON.stringify(report));
   }
  }
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
