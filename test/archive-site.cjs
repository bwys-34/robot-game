// Verify the published site under a GitHub Pages project prefix, or SITE_URL.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const root=process.env.SITE_ROOT||path.resolve(__dirname,'..');
const out=path.resolve(__dirname,'../work/archive-release');fs.mkdirSync(out,{recursive:true});
const records=JSON.parse(fs.readFileSync(path.join(root,'archive.html'),'utf8').match(/<script id="archive-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.json':'application/json','.glb':'model/gltf-binary'};
(async()=>{
 let server;
 const local=!process.env.SITE_URL;
 if(local){server=http.createServer((req,res)=>{const p=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(!p.startsWith('/robot-game/'))return res.writeHead(404).end();let f=path.resolve(root,'.'+p.slice('/robot-game'.length));if(f!==root&&!f.startsWith(root+path.sep))return res.writeHead(403).end();if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');fs.readFile(f,(e,b)=>{res.writeHead(e?404:200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'}).end(e?'Missing':b);});});await new Promise(r=>server.listen(0,'127.0.0.1',r));}
 const base=process.env.SITE_URL||`http://127.0.0.1:${server.address().port}/robot-game/`;
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const report={base,at:new Date().toISOString(),records:0,layouts:[],errors:[],failed:[]};
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1});const page=await context.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400)report.failed.push({status:r.status(),url:r.url()});});
  await page.goto(base+'?v=archive-20261116-1#home');
  assert.equal(await page.locator('.demo-home').count(),1,'正式首页应显示新版档案馆');
  const expectedPath=new URL(base).pathname;
  await page.locator('#nav-archive').click();await page.locator('#catalog-next').click();const first=await page.locator('#catalog-grid [data-record]').first().getAttribute('data-record');await page.locator('#catalog-grid [data-record]').first().click();await page.locator('[data-back-list]').first().click();assert.equal(await page.locator('#catalog-page').textContent(),'2 / 13');assert.equal(await page.locator('#catalog-grid [data-record]').first().getAttribute('data-record'),first);
  await page.locator('#archive-search').fill('137');await page.locator('#catalog-grid [data-record="143"]').click();
  await page.locator('g1-record #tab-notes').click();
  const g1=records.find(r=>r.id==='143');for(const k of ['intro','tech','use','prosCons'])assert.equal((await page.locator(`g1-record [data-source="${k}"]`).textContent()).replace(/\r/g,''),g1[k].replace(/\r/g,''));
  const g1Link=await page.locator('g1-record a[href*="demos/g1/"]').first().getAttribute('href');assert.equal(new URL(g1Link,base).pathname,expectedPath+'demos/g1/');
  await page.locator('g1-record [data-view="detail"]').click();await page.locator('g1-record #hero-model').evaluate(i=>i.decode());
  await page.locator('g1-record [data-open-photo]').click();await page.keyboard.press('Escape');
  for(const r of records){
   await page.evaluate(id=>{location.hash='#robot/'+id;},r.id);
   if(r.id==='143'){await page.locator('g1-record').waitFor();report.records++;continue;}
   await page.waitForFunction(id=>document.querySelector('.standard-record')?.dataset.recordId===id,r.id);
   const data=await page.locator('.standard-record').evaluate(async el=>{const img=el.querySelector('.record-hero img'),qr=el.querySelector('.record-qr img');await Promise.all([img.decode(),qr.decode()]);return {photo:img.src,fit:getComputedStyle(img).objectFit,canonical:el.querySelector('[data-canonical]').href,source:Object.fromEntries([...el.querySelectorAll('[data-original]')].map(p=>[p.dataset.original,p.textContent]))};});
   assert.equal(new URL(data.photo).pathname,expectedPath+r.photo);assert.equal(data.fit,'contain');assert.equal(data.canonical,'https://bwys-34.github.io/robot-QR-code/robots.html?id='+r.id);
   for(const k of ['intro','tech','use','prosCons'])assert.equal(data.source[k].replace(/\r/g,''),(r[k]||'').replace(/\r/g,''),r.name+' '+k);
   report.records++;
  }
  for(const [width,height]of [[1440,1000],[390,844],[320,740],[1080,1800],[1920,1080],[720,1280]]){
   await page.setViewportSize({width,height});
   for(const [name,hash,selector]of [['home','#home','.demo-home'],['catalog','#archive','.demo-catalog'],['g1','#robot/143','g1-record'],['standard','#robot/110','.standard-record'],['navigator','#robot/33','.standard-record']]){
    await page.goto(base+'?v=archive-20261116-1'+hash);await page.locator(selector).waitFor();
    await page.evaluate(async()=>{const roots=[document,...[...document.querySelectorAll('g1-record')].map(e=>e.shadowRoot)];await Promise.all(roots.flatMap(r=>[...r.querySelectorAll('img')]).map(async i=>{i.loading='eager';await i.decode();}));});
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);assert.ok(overflow<=1,`${name} ${width}: overflow ${overflow}`);report.layouts.push({name,width,height,overflow});
    if(width===1440||width===390)await page.screenshot({path:path.join(out,`${local?'local':'live'}-${name}-${width}.png`),fullPage:name==='standard'});
   }
  }
  await page.locator('[data-photo-open]').click();await page.evaluate(()=>{location.hash='#archive';});await page.locator('.demo-catalog').waitFor();assert.equal(await page.evaluate(()=>document.body.classList.contains('photo-is-open')),false);
  await page.locator('#nav-quiz').click();await page.locator('.answer:not(:disabled)').first().waitFor();await page.locator('#nav-home').click();await page.locator('#continue-round').click();assert.equal(await page.locator('#main').getAttribute('data-screen'),'quiz');
  for(let i=0;i<10;i++){await page.locator('.answer:not(:disabled)').first().waitFor();const wrong=await page.evaluate(()=>{const id=document.querySelector('#question-photo').getAttribute('src').split('/').pop().replace(/\.[^.]+$/,'');return [...document.querySelectorAll('.answer-name b')].findIndex(e=>e.textContent!==ROBOTS.find(r=>r.no===id).model);});await page.locator('.answer').nth(wrong).click();await page.locator('#next-question').click();}
  await page.locator('#review-result').click();assert.equal(await page.locator('.mistake-card').count(),10);await page.locator('#review-home').click();await page.reload();await page.locator('.demo-home').waitFor();assert.equal(await page.locator('#last-round').isEnabled(),true);assert.equal(new URL(page.url()).pathname,expectedPath);
  // Simulate the existing exhibition browser's missing native dialog API.
  await page.evaluate(()=>{HTMLDialogElement.prototype.showModal=undefined;HTMLDialogElement.prototype.close=undefined;Object.hasOwn=undefined;});await page.locator('#nav-archive').click();await page.locator('#archive-search').fill('Nix');await page.locator('#catalog-grid [data-record="60"]').click();assert.match(await page.locator('.record-use-list').textContent(),/暂未收录/);await page.locator('[data-photo-open]').click();await page.keyboard.press('Escape');assert.equal(await page.locator('#standard-photo-dialog').isVisible(),false);
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.failed,[]);
  fs.writeFileSync(path.join(out,local?'preflight.json':'live-smoke.json'),JSON.stringify(report,null,2));console.log(`PASS: ${report.records} archives, ${report.layouts.length} layouts, Pages prefix, ten questions/results/mistakes/storage and legacy photo dialog`);
 }finally{await browser.close();if(server)await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
