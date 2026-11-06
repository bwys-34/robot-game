const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true}),errors=[];
  await page.addInitScript(()=>{
   window.draws=0;
   for(const proto of [WebGLRenderingContext.prototype,WebGL2RenderingContext.prototype]){const draw=proto.drawElements;proto.drawElements=function(...args){window.draws++;return draw.apply(this,args);};}
  });
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/');await page.locator('body[data-ready=true]').waitFor({timeout:30000});
  assert.equal(await page.locator('body').getAttribute('data-experience'),'free');assert(!await page.locator('.mission-card').isVisible());
  fs.mkdirSync('work/g1-drive/console',{recursive:true});
  const layoutErrors=[];
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]]){
   await page.setViewportSize({width,height});
   for(const experience of ['free','mission'])for(const source of ['pad','manual']){
    await page.locator(`button[data-experience=${experience}]`).click();await page.locator('#source-'+source).click();await page.waitForTimeout(200);
    const report=await page.evaluate(()=>{
     const selectors='.controller-card,.mission-card,.mode-info,#touch-controls,[data-performance-action],[data-mode-shortcut],#drive-start,#action-select';
     const nodes=[...document.querySelectorAll(selectors)].filter(e=>e.getClientRects().length);
     return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,clipped:nodes.filter(e=>{const r=e.getBoundingClientRect();return r.bottom>innerHeight+1||r.right>innerWidth+1||r.left<0||r.top<0}).map(e=>e.id||e.className),overflow:nodes.filter(e=>e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2).map(e=>[e.id||e.className,e.clientHeight,e.scrollHeight,e.clientWidth,e.scrollWidth])};
    });
    await page.screenshot({path:`work/g1-drive/console/${width}x${height}-${experience}-${source}.png`});
    console.log(width,height,experience,source,JSON.stringify(report));if(report.root>2||report.viewer<230||report.clipped.length||report.overflow.length)layoutErrors.push({width,height,experience,source,...report});
   }
  }
  assert.deepEqual(layoutErrors,[]);
  await page.setViewportSize({width:1080,height:1800});await page.locator('button[data-experience=free]').click();await page.locator('#source-manual').click();await page.locator('#drive-start').click();
  await page.locator('[data-performance-action=robotdance]').click();await page.waitForFunction(()=>document.body.dataset.motion==='robotdance');
  await page.locator('[data-mode-shortcut=B]').click();await page.waitForFunction(()=>document.body.dataset.body==='fallen');
  assert.match(await page.locator('#mode-copy').textContent(),/阻力|阻尼/);
  await page.locator('[data-mode-shortcut=X]').click();await page.waitForFunction(()=>document.body.dataset.body==='upright');
  await page.locator('[data-mode-shortcut=A]').click();await page.waitForFunction(()=>document.body.dataset.mode==='locomotion');
  const forward=page.locator('[data-hold=forward]'),box=await forward.boundingBox();await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.waitForTimeout(700);await page.mouse.up();
  await page.waitForTimeout(700);assert(parseFloat(await page.locator('#distance-travelled').textContent())>.15);
  await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)===0);
  await page.waitForTimeout(5000);await page.evaluate(()=>window.draws=0);await page.waitForTimeout(400);
  assert.equal(await page.evaluate(()=>window.draws),0,'Stationary free scene stops submitting unchanged GPU draws');
  const viewer=await page.locator('#drive-viewer').boundingBox();await page.mouse.move(viewer.x+viewer.width*.3,viewer.y+viewer.height*.5);await page.mouse.down();await page.mouse.move(viewer.x+viewer.width*.6,viewer.y+viewer.height*.5,{steps:8});await page.mouse.up();await page.waitForTimeout(200);
  assert((await page.evaluate(()=>window.draws))>0,'Orbit drag wakes rendering and damping');
  await page.locator('button[data-experience=mission]').click();assert(await page.locator('.mission-card').isVisible());assert.equal(await page.locator('body').getAttribute('data-input'),'paused');
  assert.deepEqual(errors,[]);console.log('PASS visitor console layouts, free/task switch, LB/RB screen cards, held movement and release');
  for(const android of [false,true]){
   const p=await browser.newPage({viewport:{width:1080,height:1800}});
   await p.addInitScript(android=>{
    window.pad={id:android?'Xbox Wireless Controller':'Standard gamepad',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:android&&(i===6||i===7),value:android&&(i===6||i===7)?.5:0}))};
    Object.defineProperty(navigator,'getGamepads',{value:()=>[window.pad]});
   },android);
   await p.goto('http://127.0.0.1:8765/demos/g1/drive/');await p.locator('body[data-ready=true]').waitFor();
   if(android){await p.locator('#pad-layout').selectOption('exhibition-android');await p.waitForTimeout(250);}
   const keys=android?[0,1,3,4,8,9]:[0,1,2,3,4,5];
   const press=async(...ids)=>{await p.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i]={pressed:true,value:1}),ids);await p.waitForTimeout(180);await p.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i]={pressed:false,value:0}),ids);await p.waitForTimeout(180);};
   await press(keys[0]);await p.waitForFunction(()=>document.body.dataset.input==='ready');
   await press(keys[5],keys[1]);await p.waitForFunction(()=>document.body.dataset.motion==='robotdance');assert.equal(await p.locator('body').getAttribute('data-mode'),'locomotion');
   await press(keys[4],keys[1]);await p.waitForFunction(()=>document.body.dataset.body==='fallen');assert.equal(await p.locator('body').getAttribute('data-mode'),'damp');
   assert.equal(await p.locator('body').getAttribute('data-input'),'ready','LB+B must not pause');
   await press(keys[4],keys[2]);await p.waitForFunction(()=>document.body.dataset.body==='upright');await press(keys[4],keys[0]);await p.waitForFunction(()=>document.body.dataset.mode==='locomotion');
   await press(keys[4],keys[3]);await p.waitForFunction(()=>document.body.dataset.body==='fallen');assert.equal(await p.locator('body').getAttribute('data-mode'),'zero');
   console.log('PASS physical-channel simulation LB modes/recover and RB action',android?'Android observed':'desktop standard');await p.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
