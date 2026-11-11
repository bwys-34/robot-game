const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const root='http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-10-reception-1';
const sizes=[[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]];
async function navigate(p,until,source){return p.evaluate(async({until,source})=>{
 const viewer=document.querySelector('#drive-viewer'),active=new Set();let oldYaw=null,oldTime=0;const start=performance.now();
 const command=(forward,turn)=>{
  if(source==='manual'){
   const next=[...(forward?['w']:[]),...(turn>.1?['q']:turn<-.1?['e']:[])];
   for(const key of ['w','q','e'])if(next.includes(key)!==active.has(key)){viewer.dispatchEvent(new KeyboardEvent(next.includes(key)?'keydown':'keyup',{key,bubbles:true}));if(next.includes(key))active.add(key);else active.delete(key);}
  }else{pad.axes[1]=-forward;if(source==='android')pad.buttons[6]={pressed:true,value:(1-turn)/2};else pad.axes[2]=-turn;}
 };
 try{while(document.body.dataset.receptionStep!==until){
  if(document.body.dataset.body!=='upright')throw Error('Unplanned fall: '+document.querySelector('#drive-message').textContent);
  if(performance.now()-start>70000)throw Error('Timeout '+document.querySelector('#reception-live').textContent);
  const robot=document.querySelector('#map-robot'),target=document.querySelector('#map-target'),x=+robot.dataset.x,z=+robot.dataset.z,yaw=+robot.dataset.yaw;
  const tx=+target.dataset.x,tz=+target.dataset.z,r=+target.dataset.radius;
  const error=Math.atan2(Math.sin(Math.atan2(tx-x,tz-z)-yaw),Math.cos(Math.atan2(tx-x,tz-z)-yaw));
  const now=performance.now(),omega=oldYaw===null?0:Math.atan2(Math.sin(yaw-oldYaw),Math.cos(yaw-oldYaw))/Math.max(.03,(now-oldTime)/1000);
  const turn=Math.abs(error)>.045?Math.max(-.55,Math.min(.55,error*1.8-omega*.22)):0;
  const forward=document.body.dataset.receptionStep!=='face'&&Math.hypot(tx-x,tz-z)>r*.4&&Math.abs(error)<.16?(source==='manual'?1:.9):0;
  command(forward,turn);oldYaw=yaw;oldTime=now;await new Promise(resolve=>setTimeout(resolve,55));
 }}finally{command(0,0);}
 return {step:document.body.dataset.receptionStep,seconds:(performance.now()-start)/1000};
},{until,source});}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const errors=[],report=[];fs.mkdirSync('work/g1-reception',{recursive:true});
 async function layouts(p,stage){
  for(const [width,height]of sizes){
   await p.setViewportSize({width,height});await p.waitForTimeout(170);
   const metrics=await p.evaluate(()=>{
    const ns=[...document.querySelectorAll('#reception-panel,#reception-panel button,#reception-panel p,#reception-panel h2,.experience-switch,.experience-switch button,.controller-card,.mode-info,.stage-top')].filter(n=>n.getClientRects().length);
    return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,clipped:ns.filter(n=>{const r=n.getBoundingClientRect();return r.top<0||r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1}).map(n=>n.id||n.className),overflow:ns.filter(n=>n.scrollHeight>n.clientHeight+2||n.scrollWidth>n.clientWidth+2).map(n=>({id:n.id||n.className,h:n.clientHeight,sh:n.scrollHeight,w:n.clientWidth,sw:n.scrollWidth}))};
   });report.push({stage,width,height,...metrics});
   await p.screenshot({path:`work/g1-reception/${stage}-${width}x${height}.png`});
   assert(metrics.root<=2&&metrics.viewer>=230&&!metrics.clipped.length&&!metrics.overflow.length,JSON.stringify(report.at(-1)));
  }await p.setViewportSize({width:1080,height:1800});
 }
 try{
  for(const source of (process.env.RECEPTION_SOURCE?[process.env.RECEPTION_SOURCE]:['manual','desktop','android'])){
   const context=await browser.newContext({viewport:{width:1080,height:1800},hasTouch:true}),p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
   if(source!=='manual')await p.addInitScript(android=>{window.pad={id:android?'Xbox Wireless Controller':'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:false,value:android&&(i===6||i===7)?.5:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});},source==='android');
   await p.goto(root);await p.locator('body[data-ready=true]').waitFor({timeout:30000});await p.locator('[data-experience=reception]').click();
   if(source==='manual')await p.locator('#source-manual').click();if(source==='android')await p.locator('#pad-layout').selectOption('exhibition-android');
   await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
   if(source==='manual'){await p.locator('#reception-hint').click();await p.waitForTimeout(150);await layouts(p,'route-hint');}
   console.log(source,await navigate(p,'park',source));if(source==='manual')await layouts(p,'park');
   console.log(source,await navigate(p,'face',source));if(source==='manual')await layouts(p,'face');
   console.log(source,await navigate(p,'greet',source));
   await p.locator('#reception-primary').click();await p.waitForFunction(()=>document.body.dataset.mode==='stand');await p.waitForTimeout(350);
   if(source==='manual')await layouts(p,'greet');
   if(source==='manual')await p.keyboard.press('1');else{await p.evaluate(()=>pad.buttons[0]={pressed:true,value:1});await p.waitForTimeout(130);await p.evaluate(()=>pad.buttons[0]={pressed:false,value:0});}
   await p.waitForFunction(()=>document.body.dataset.motion==='wave');assert.equal(await p.locator('body').getAttribute('data-reception-step'),'greet');
   await p.waitForFunction(()=>document.body.dataset.receptionStep==='complete',{},{timeout:20000});
   assert(await p.locator('#reception-scorecard').isVisible());assert(+await p.locator('#reception-score').textContent()>=85);
   if(source==='manual'){
    await layouts(p,'complete');
    // A real held screen control collides, then the contextual task button recovers.
    await p.locator('#drive-reset').click();assert.equal(await p.locator('body').getAttribute('data-reception-step'),'route');await p.locator('#drive-start').click();
    const forward=p.getByRole('button',{name:'接待挑战前进',exact:true}),b=await forward.boundingBox();await p.mouse.move(b.x+b.width/2,b.y+b.height/2);await p.mouse.down();
    await p.waitForFunction(()=>document.body.dataset.body==='fallen');await p.mouse.up();await p.waitForTimeout(150);
    assert.match(await p.locator('#reception-primary').textContent(),/起身/);await p.locator('#reception-primary').click();await p.waitForFunction(()=>document.body.dataset.body==='upright');await p.waitForTimeout(150);
    assert.match(await p.locator('#reception-primary').textContent(),/恢复行走/);await p.locator('#reception-primary').click();await p.waitForFunction(()=>document.body.dataset.mode==='locomotion');
    assert.equal(await p.locator('body').getAttribute('data-reception-step'),'route');
   }else await p.screenshot({path:`work/g1-reception/${source}-complete.png`});
   await p.locator('[data-experience=free]').click();assert.equal(await p.locator('#reception-panel').isVisible(),false);assert.equal(await p.locator('#hoist-toggle').isVisible(),true);
   await context.close();console.log('PASS complete reception with',source);
  }
  assert.deepEqual(errors,[]);fs.writeFileSync('work/g1-reception/browser-report.json',JSON.stringify({report,errors,hardware:'Development Edge; physical Android pending'},null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
