const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const root=process.env.G1_BINDINGS_URL||'http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-09-hoist-2';
const sizes=[[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]];
const pos=p=>p.locator('#map-robot').evaluate(n=>({x:+n.dataset.x,z:+n.dataset.z}));
const {arrive:campusArrive}=require('./g1-campus-route.cjs');
const arrive=p=>campusArrive(p,'pad');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const errors=[],report=[];fs.mkdirSync('work/g1-bindings',{recursive:true});
 try{
  for(const android of [false,true]){
   const context=await browser.newContext({viewport:{width:1080,height:1800}}),p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
   await p.addInitScript(android=>{
    window.pad={id:android?'Xbox Wireless Controller':'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:false,value:android&&(i===6||i===7)?.5:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});
   },android);
   await p.goto(root);await p.locator('body[data-ready=true]').waitFor({timeout:30000});assert.deepEqual(await p.locator('button[data-experience]').evaluateAll(nodes=>nodes.map(n=>n.dataset.experience)),['free','mission','reception','course','show']);
   if(android)await p.locator('#pad-layout').selectOption('exhibition-android');await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
   // Drive directly to the station; its console must appear without a mouse click.
   assert(!await p.locator('#hoist-panel').isVisible());assert.equal(await p.locator('body').getAttribute('data-experience'),'free');assert.equal(await p.locator('#drive-pause').textContent(),'暂停');
   await arrive(p);
   const chord=async(...ids)=>{await p.evaluate(ids=>ids.forEach(i=>pad.buttons[i]={pressed:true,value:1}),ids);await p.waitForTimeout(150);await p.evaluate(ids=>ids.forEach(i=>pad.buttons[i]={pressed:false,value:0}),ids);await p.waitForTimeout(200);};
   await chord(0);await p.waitForFunction(()=>document.body.dataset.hoist==='supported');await p.locator('#hoist-damp').click();await p.waitForTimeout(750);
   // Enter debug with the actual per-device normalized chord, not a test hook.
   const mods=android?[8,9]:[6,7];await p.evaluate(ids=>ids.forEach(i=>pad.buttons[i]={pressed:true,value:1}),mods);await p.waitForTimeout(android?950:2200);await p.evaluate(ids=>ids.forEach(i=>pad.buttons[i]={pressed:false,value:0}),mods);
   await p.waitForFunction(()=>document.body.dataset.mode==='debug'&&!document.querySelector('[data-debug-tab=bindings]').disabled);
   for(const tab of ['joints','bindings']){
    await p.locator(`[data-debug-tab=${tab}]`).click();await p.waitForTimeout(180);
    if(!android)for(const [width,height]of sizes){
     await p.setViewportSize({width,height});await p.waitForTimeout(140);
     const metrics=await p.evaluate(()=>{
      const nodes=[...document.querySelectorAll('#lab-panel,#lab-panel button,#lab-panel select,#lab-panel p,.controller-card,.experience-switch,.mode-info')].filter(n=>n.getClientRects().length);
      return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,clipped:nodes.filter(n=>{const r=n.getBoundingClientRect();return r.top<0||r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1}).map(n=>n.id||n.className),overflow:nodes.filter(n=>n.scrollHeight>n.clientHeight+2||n.scrollWidth>n.clientWidth+2).map(n=>n.id||n.className)};
     });report.push({tab,width,height,...metrics});await p.screenshot({path:`work/g1-bindings/${tab}-${width}x${height}.png`});assert(metrics.root<=2&&metrics.viewer>=230&&!metrics.clipped.length&&!metrics.overflow.length,JSON.stringify(report.at(-1)));
    }
   }
   await p.setViewportSize({width:1080,height:1800});
   const goal=await p.locator('#lab-command').textContent();
   await p.locator('#binding-A').selectOption('wave');await p.locator('#bindings-default').click();await p.waitForTimeout(150);assert.equal(await p.locator('#binding-A').inputValue(),'dance');
   await p.locator('#binding-A').selectOption('wave');await p.locator('#binding-B').selectOption('clap');
   await p.locator('.binding-slot').first().getByRole('button').click();await p.waitForTimeout(700);assert.match(await p.locator('#bindings-status').textContent(),/上肢预览/);assert.equal(await p.locator('#lab-command').textContent(),goal);assert.equal(await p.locator('body').getAttribute('data-hoist'),'supported');
   await p.screenshot({path:`work/g1-bindings/preview-${android?'android':'desktop'}.png`});
   await p.locator('#bindings-save').click();assert.match(await p.locator('#bindings-status').textContent(),/已保存到本机/);
   await p.locator('#bindings-exit').click();await p.waitForFunction(()=>document.body.dataset.mode==='stand');await p.waitForTimeout(650);await chord(0);await p.waitForFunction(()=>document.body.dataset.hoist==='detached');
   // Leave the station using the stick; normal controls return automatically.
   await p.locator('#hoist-walk').click();await p.waitForTimeout(250);await p.evaluate(()=>pad.axes[1]=1);await p.waitForTimeout(2200);await p.evaluate(()=>pad.axes[1]=0);
   await p.locator('#hoist-panel').waitFor({state:'hidden'});await p.waitForTimeout(300);await p.locator('[data-drive-mode=performance]').click();await p.waitForTimeout(250);
   assert.match(await p.locator('[data-performance-slot="0"]').textContent(),/挥手招呼/);assert.match(await p.locator('[data-performance-slot="1"]').textContent(),/拍手鼓掌/);
   await chord(android?9:5,1);await p.waitForFunction(()=>document.body.dataset.motion==='clap');assert.equal(await p.locator('#drive-pause').textContent(),'暂停','RB+B never becomes plain B pause');
   await p.reload();await p.locator('body[data-ready=true]').waitFor({timeout:30000});assert.match(await p.locator('[data-performance-slot="0"]').textContent(),/挥手招呼/);assert.match(await p.locator('[data-performance-slot="1"]').textContent(),/拍手鼓掌/);
   await context.close();console.log('PASS Free station → debug bindings → saved physical shortcut → refresh',android?'Android':'desktop');
  }
  assert.deepEqual(errors,[]);fs.writeFileSync('work/g1-bindings/browser-report.json',JSON.stringify({report,errors,hardware:'Development Edge and simulated raw input; physical Android pending'},null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
