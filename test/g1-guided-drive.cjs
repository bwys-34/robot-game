const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {navigateTutorial}=require('./helpers/g1-tutorial-browser.cjs');
const root='http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-09-route-1';
const sizes=[[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]];
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const errors=[],report=[];fs.mkdirSync('work/g1-guided-drive',{recursive:true});
 async function layouts(page,stage){
  for(const [width,height]of sizes){
   await page.setViewportSize({width,height});await page.waitForTimeout(80);
   const metrics=await page.evaluate(()=>{
    const visible=[...document.querySelectorAll('.mission-card,.controller-card,.mode-info,.mission-card button,.mission-card p,.mission-card h2,.tutorial-key,#drive-start,[data-mode-shortcut],[data-performance-action],#touch-controls')].filter(e=>e.getClientRects().length);
    return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,
     clipped:visible.filter(e=>{const r=e.getBoundingClientRect();return r.top<0||r.left<0||r.bottom>innerHeight+1||r.right>innerWidth+1;}).map(e=>e.id||e.className),
     overflow:visible.filter(e=>e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2).map(e=>({id:e.id||e.className,w:e.clientWidth,sw:e.scrollWidth,h:e.clientHeight,sh:e.scrollHeight}))};
   });
   assert(metrics.root<=2&&metrics.viewer>=230&&metrics.clipped.length===0&&metrics.overflow.length===0,JSON.stringify({stage,width,height,...metrics}));
   if(width===1080&&height===1800)await page.screenshot({path:`work/g1-guided-drive/${stage}.png`});
   report.push({stage,width,height,...metrics});
  }
  await page.setViewportSize({width:1080,height:1800});
 }
 try{
  const p=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true});p.on('pageerror',e=>errors.push(e.message));
  await p.goto(root);await p.locator('body[data-ready=true]').waitFor();await p.locator('button[data-experience=mission]').click();await p.locator('#source-manual').click();await p.locator('#drive-start').click();
  await layouts(p,'walk');
  await p.keyboard.down('s');await p.waitForTimeout(1600);await p.keyboard.up('s');await p.waitForTimeout(400);assert.equal(await p.locator('body').getAttribute('data-stage'),'walk','Wrong direction cannot pass');
  await navigateTutorial(p,'turn');await layouts(p,'turn');await navigateTutorial(p,'park');await layouts(p,'park');await navigateTutorial(p,'stand');await layouts(p,'stand');
  await p.locator('#tutorial-action').click();await p.waitForFunction(()=>document.body.dataset.stage==='damp');await layouts(p,'damp');
  await p.locator('#tutorial-action').click();await p.waitForFunction(()=>document.body.dataset.stage==='recover');await layouts(p,'recover');
  await p.locator('#tutorial-action').click();await p.waitForFunction(()=>document.body.dataset.stage==='perform');await layouts(p,'perform');
  await p.locator('#tutorial-action').click();await p.waitForFunction(()=>document.body.dataset.mode==='performance');await p.waitForTimeout(250);
  await p.locator('[data-performance-action=dance]').click();await p.waitForFunction(()=>document.body.dataset.motion==='dance');
  assert.equal(await p.locator('body').getAttribute('data-stage'),'perform');await p.keyboard.press('p');const paused=await p.locator('#tutorial-progress').getAttribute('style');await p.waitForTimeout(350);assert.equal(await p.locator('#tutorial-progress').getAttribute('style'),paused);await p.keyboard.press('p');
  await p.waitForFunction(()=>document.body.dataset.stage==='complete',{},{timeout:20000});await layouts(p,'complete');assert(await p.locator('#drive-result').isVisible());
  await p.locator('#tutorial-action').click();await p.waitForFunction(()=>document.body.dataset.experience==='free');assert(!await p.locator('.mission-card').isVisible());
  await p.locator('#drive-start').click();await p.locator('[data-drive-speed=fast]').click();await p.keyboard.down('s');await p.waitForFunction(()=>document.body.dataset.body==='fallen');await p.keyboard.up('s');
  assert.match(await p.locator('#drive-message').textContent(),/碰撞|墙/);await p.screenshot({path:'work/g1-guided-drive/collision.png'});
  await p.locator('#recover-body').click();await p.waitForFunction(()=>document.body.dataset.body==='upright');await p.locator('[data-mode-shortcut=A]').click();await p.waitForTimeout(250);
  const before=Number(await p.locator('#map-robot').getAttribute('data-z'));await p.keyboard.down('w');await p.waitForTimeout(500);await p.keyboard.up('w');assert(Number(await p.locator('#map-robot').getAttribute('data-z'))<before);
  // Android profile: actual raw channels, including right stick in analog buttons.
  const a=await browser.newPage({viewport:{width:1080,height:1800}});a.on('pageerror',e=>errors.push(e.message));
  await a.addInitScript(()=>{window.pad={id:'Xbox Wireless Controller',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:16},(_,i)=>({pressed:i===6||i===7,value:i===6||i===7?.5:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});});
  await a.goto(root);await a.locator('body[data-ready=true]').waitFor();await a.locator('#pad-layout').selectOption('exhibition-android');await a.locator('button[data-experience=mission]').click();
  await a.evaluate(()=>pad.buttons[0]={pressed:true,value:1});await a.waitForTimeout(200);await a.evaluate(()=>pad.buttons[0]={pressed:false,value:0});await a.waitForFunction(()=>document.body.dataset.input==='ready');
  await navigateTutorial(a,'stand','android');await a.locator('#tutorial-action').click();await a.waitForFunction(()=>document.body.dataset.stage==='damp');
  assert.match(await a.locator('#tutorial-key').textContent(),/LB \+ B/);
  const chord=async(face)=>{await a.evaluate(face=>{pad.buttons[8]={pressed:true,value:1};pad.buttons[face]={pressed:true,value:1};},face);await a.waitForTimeout(200);await a.evaluate(face=>{pad.buttons[8]={pressed:false,value:0};pad.buttons[face]={pressed:false,value:0};},face);await a.waitForTimeout(160);};
  await chord(1);await a.waitForFunction(()=>document.body.dataset.stage==='recover');assert.match(await a.locator('#tutorial-key').textContent(),/LB \+ X/);
  await chord(3);await a.waitForFunction(()=>document.body.dataset.stage==='perform');await a.locator('#tutorial-action').click();await a.waitForFunction(()=>document.body.dataset.mode==='performance');await a.waitForTimeout(200);
  await a.evaluate(()=>{pad.buttons[9]={pressed:true,value:1};pad.buttons[1]={pressed:true,value:1};});await a.waitForTimeout(200);await a.evaluate(()=>{pad.buttons[9]={pressed:false,value:0};pad.buttons[1]={pressed:false,value:0};});
  await a.waitForFunction(()=>document.body.dataset.motion==='robotdance');await a.waitForFunction(()=>document.body.dataset.stage==='complete',{},{timeout:20000});
  await a.screenshot({path:'work/g1-guided-drive/android-complete.png'});assert.equal(await a.locator('body').getAttribute('data-input'),'ready');
  assert.deepEqual(errors,[]);fs.writeFileSync('work/g1-guided-drive/report.json',JSON.stringify({report,errors,android:'simulated raw channels; physical device pending'},null,2));
  console.log('PASS seven-task location tutorial, all eight screens at six sizes, wrong direction, pause, completion, collision/recovery and Android raw-channel tutorial.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
