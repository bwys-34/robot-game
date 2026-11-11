const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const url='http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-11-assessment-1';
const sizes=[[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]];
const output='work/g1-assessment';fs.mkdirSync(output,{recursive:true});
const report=[],errors=[];
async function layouts(p,name){
 for(const [width,height]of sizes){
  await p.setViewportSize({width,height});await p.waitForTimeout(200);
  const m=await p.evaluate(()=>{
   const nodes=[...document.querySelectorAll('.experience-switch,.experience-switch button,.controller-card,#challenge-panel,#challenge-panel button,#challenge-panel p,#challenge-title,#course-level,#hoist-panel,#lab-panel,#bindings-content,#bindings-content button,#bindings-content select,.stage-top')].filter(n=>n.getClientRects().length);
   return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,clipped:nodes.filter(n=>{const r=n.getBoundingClientRect();return r.top<0||r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1}).map(n=>n.id||n.className),overflow:nodes.filter(n=>n.scrollHeight>n.clientHeight+2||n.scrollWidth>n.clientWidth+2).map(n=>({id:n.id||n.className,h:n.clientHeight,sh:n.scrollHeight,w:n.clientWidth,sw:n.scrollWidth}))};
  });report.push({name,width,height,...m});await p.screenshot({path:`${output}/${name}-${width}x${height}.png`});
  assert(m.root<=2&&m.viewer>=230&&!m.clipped.length&&!m.overflow.length,JSON.stringify(report.at(-1)));
 }await p.setViewportSize({width:1080,height:1800});
}
async function travel(p,until,source){
 console.log('navigate',source,until);
 const result=await p.evaluate(async({until,source})=>{
  const viewer=document.querySelector('#drive-viewer'),active=new Set(),started=performance.now();
  const keys=(list)=>{for(const key of ['w','s','a','d','q','e'])if(list.includes(key)!==active.has(key)){viewer.dispatchEvent(new KeyboardEvent(list.includes(key)?'keydown':'keyup',{key,bubbles:true}));if(list.includes(key))active.add(key);else active.delete(key);}};
  const stick=v=>Math.abs(v)<.0001?0:Math.sign(v)*(.16+.84*Math.abs(v));
  const rotate=v=>{if(source==='android')pad.buttons[6]={pressed:true,value:(1-v)/2};else pad.axes[2]=-v;};
  let oldYaw=null,oldTime=0;
  const done=()=>until==='hoist-ready'?!document.querySelector('#hoist-primary').disabled&&document.body.dataset.hoist==='detached':document.body.dataset[document.body.dataset.experience==='course'?'courseStep':'showStep']===until;
  try{while(!done()){
   if(document.body.dataset.body!=='upright')throw Error('Collision: '+document.querySelector('#drive-message').textContent);
   if(performance.now()-started>210000)throw Error('Navigation timed out: '+document.querySelector('#challenge-live').textContent);
   const robot=document.querySelector('#map-robot'),target=document.querySelector('#map-target'),dx=+target.dataset.x-+robot.dataset.x,dz=+target.dataset.z-+robot.dataset.z,d=Math.hypot(dx,dz),r=+target.dataset.radius;
   if(document.body.dataset.experience==='course'){
    const yaw=+robot.dataset.yaw,stage=document.body.dataset.courseStep,side=stage==='side',park=stage==='park',orient=stage==='reverse'&&d<r*.4;
    const desired=side||park||orient?+document.body.dataset.courseHeading:Math.atan2(dx,dz);
    const angle=a=>Math.atan2(Math.sin(a),Math.cos(a)),error=angle(desired-yaw),now=performance.now();
    const omega=oldYaw===null?0:angle(yaw-oldYaw)/Math.max(.025,(now-oldTime)/1000);oldTime=now;oldYaw=yaw;
    const turn=Math.abs(error)>.035?Math.max(-.7,Math.min(.7,error*2-omega*.3)):0;
    const move=Math.abs(error)<.10&&d>r*.32?Math.min(.9,d*1.4):0;
    const f=side||park?move*(Math.sin(desired)*dx+Math.cos(desired)*dz)/Math.max(.001,d):move;
    const x=side||park?move*(-Math.cos(desired)*dx+Math.sin(desired)*dz)/Math.max(.001,d):0;
    if(source==='manual'){
     keys([...(turn>.11?['q']:turn<-.11?['e']:[]),...(f>.07?['w']:f<-.04?['s']:[]),...(x>.035?['d']:x<-.035?['a']:[])]);
     await new Promise(resolve=>setTimeout(resolve,turn&&Math.abs(error)<.25?33:d<.5?45:65));
     if((turn&&Math.abs(error)<.25)||d<.5){keys([]);await new Promise(resolve=>setTimeout(resolve,65));}
    }else{pad.axes[0]=stick(x);pad.axes[1]=-stick(f);rotate(turn);await new Promise(resolve=>setTimeout(resolve,55));}
   }else if(source==='manual'){
    const threshold=Math.max(.03,r*.22),axisStop=.045,list=d>threshold?[...(dx< -axisStop?['a']:dx>axisStop?['d']:[]),...(dz< -axisStop?['w']:dz>axisStop?['s']:[])]:[];
    keys(list);await new Promise(r=>setTimeout(r,d<.6?25:70));
    if(d<.6){keys([]);await new Promise(r=>setTimeout(r,65));}
   }else{
    const gain=d>r*.3?Math.min(.9,d*1.4):0;
    pad.axes[0]=d?stick(dx/d*gain):0;pad.axes[1]=d?stick(dz/d*gain):0;
    await new Promise(r=>setTimeout(r,55));
   }
  }}finally{if(source==='manual')keys([]);else {pad.axes[0]=pad.axes[1]=0;rotate(0);}}
  return {elapsed:(performance.now()-started)/1000,body:document.body.dataset.body,step:document.body.dataset.courseStep,show:document.body.dataset.showStep};
 },{until,source});console.log(result);await p.waitForTimeout(300);
}
async function begin(p,experience,source){
 await p.locator(`button[data-experience=${experience}]`).click();if(source==='manual')await p.locator('#source-manual').click();if(source==='android')await p.locator('#pad-layout').selectOption('exhibition-android');
 await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');await p.waitForTimeout(200);
 if(source!=='manual')await p.locator('#challenge-speed').click();await p.locator('#drive-viewer').focus();
}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  for(const source of process.env.CHALLENGE_SOURCE?[process.env.CHALLENGE_SOURCE]:['manual','desktop','android']){
   const context=await browser.newContext({viewport:{width:1080,height:1800},hasTouch:true}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
   if(source!=='manual')await page.addInitScript(android=>{window.pad={id:android?'Xbox Wireless Controller':'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:false,value:android&&(i===6||i===7)?.5:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});},source==='android');
   await page.goto(url);await page.locator('body[data-ready=true]').waitFor({timeout:30000});
   for(const name of ['course','show'])assert.equal(await page.locator(`[data-experience=${name}]`).count(),1,`${name} must be available as a playable task`);
   if(!process.env.SHOW_ONLY){
   if(process.env.COURSE_LEVEL&&process.env.COURSE_LEVEL!=='practice'){
    await page.locator('[data-experience=course]').click();await page.locator('#course-level').selectOption(process.env.COURSE_LEVEL);
    assert(!await page.locator('#challenge-hint').isVisible());
   }
   await begin(page,'course',source);
   if(source==='manual'){
    await page.locator('#challenge-hint').click();await layouts(page,'course-start');await page.locator('#camera-toggle').click();await page.waitForTimeout(700);await page.screenshot({path:`${output}/courtyard-overview.png`});await page.locator('#camera-toggle').click();
    if(process.env.LAYOUT_ONLY)continue;
   }
   await travel(page,'reverse',source);if(source==='manual')await layouts(page,'course-reverse');
   await travel(page,'complete',source);assert(+await page.locator('#challenge-score').textContent()>=85);assert.equal(await page.locator('#fall-count').textContent(),'0');
   assert.match(await page.locator('#challenge-review-metrics').textContent(),/停车偏差.*朝向误差/);
   assert((await page.locator('#challenge-result-copy').textContent()).includes(await page.locator('#elapsed').textContent()));
   if(source==='manual'||process.env.COURSE_LEVEL)await layouts(page,'course-complete');else await page.screenshot({path:`${output}/${source}-course.png`});
   if(process.env.COURSE_ONLY){await context.close();console.log('PASS course',source);continue;}
   }
   await begin(page,'show',source);await travel(page,'hoist-ready',source);
   await page.locator('#hoist-primary').click();await page.waitForFunction(()=>document.body.dataset.showStep==='program');
   if(source==='manual')await layouts(page,'show-supported');
   await page.locator('#hoist-damp').click();await page.waitForTimeout(250);await page.locator('#hoist-debug').click();await page.waitForFunction(()=>document.body.dataset.mode==='debug');await page.waitForTimeout(250);
   await page.locator('[data-debug-tab=bindings]').click();
   await page.locator('#binding-A').selectOption('wave');await page.locator('#binding-B').selectOption('bow');await page.locator('#binding-X').selectOption('dance');
   if(source==='manual')await layouts(page,'show-program');
   await page.locator('#bindings-save').click();await page.waitForFunction(()=>document.body.dataset.showStep==='release');
   await page.locator('#bindings-exit').click();await page.waitForTimeout(750);await page.locator('#hoist-primary').click();await page.waitForFunction(()=>document.body.dataset.showStep==='route');await page.waitForTimeout(200);
   await page.locator('#challenge-primary').click();await page.waitForTimeout(250);await travel(page,'perform',source);
   if(source==='manual')await layouts(page,'show-positioned');await page.locator('#challenge-primary').click();await page.waitForTimeout(300);
   // A wrong complete action cannot advance the first item.
   await page.locator('#show-action-1').click();await page.waitForFunction(()=>document.body.dataset.motion==='bow');await page.waitForFunction(()=>document.body.dataset.motion==='idle',{},{timeout:20000});assert.equal(await page.locator('body').getAttribute('data-show-action'),'0');
   await page.locator('#show-action-0').click();await page.waitForFunction(()=>document.body.dataset.motion==='wave');await page.locator('#drive-pause').click();
   assert.match(await page.locator('#challenge-live').textContent(),/暂停.*未计入.*重演/);
   await page.locator('#drive-start').click();
   await page.waitForFunction(()=>document.body.dataset.input==='ready'&&document.body.dataset.motion==='idle',{},{timeout:20000});
   assert.equal(await page.locator('body').getAttribute('data-show-action'),'0');assert.match(await page.locator('#challenge-live').textContent(),/重演/);
   for(let i=0;i<3;i++){
    if(source==='manual')await page.locator(`#show-action-${i}`).click();
    else{
     const rb=source==='android'?9:5,button=i===0?0:i===1?1:source==='android'?3:2;
     await page.evaluate(({rb,button})=>{pad.buttons[rb]={pressed:true,value:1};pad.buttons[button]={pressed:true,value:1};},{rb,button});await page.waitForTimeout(150);
     await page.evaluate(({rb,button})=>{pad.buttons[rb]={pressed:false,value:0};pad.buttons[button]={pressed:false,value:0};},{rb,button});
    }
    await page.waitForFunction(index=>+document.body.dataset.showAction===index, i+1,{timeout:25000});await page.waitForTimeout(200);
   }
   assert.equal(await page.locator('body').getAttribute('data-show-step'),'complete');assert(+await page.locator('#challenge-score').textContent()>=85);
   const elapsed=await page.locator('#elapsed').textContent();assert((await page.locator('#challenge-result-copy').textContent()).includes(elapsed));await page.waitForTimeout(1100);assert.equal(await page.locator('#elapsed').textContent(),elapsed);
   if(source==='manual')await layouts(page,'show-complete');else await page.screenshot({path:`${output}/${source}-show.png`});
   await page.locator('#drive-reset').click();assert.equal(await page.locator('body').getAttribute('data-show-step'),'hoist');await page.locator('[data-experience=free]').click();assert(!await page.locator('#challenge-panel').isVisible());
   await context.close();console.log('PASS both challenges',source);
  }
  assert.deepEqual(errors,[]);
 }catch(error){
  for(const context of browser.contexts())for(const page of context.pages()){
   await page.screenshot({path:`${output}/failure-${process.env.CHALLENGE_SOURCE||'all'}.png`}).catch(()=>{});
   console.error(await page.evaluate(()=>({experience:document.body.dataset.experience,course:document.body.dataset.courseStep,show:document.body.dataset.showStep,body:document.body.dataset.body,live:document.querySelector('#challenge-live').textContent,robot:document.querySelector('#map-robot').outerHTML,target:document.querySelector('#map-target').outerHTML})).catch(()=>null));
  }throw error;
 }finally{fs.writeFileSync(`${output}/browser-report-${process.env.CHALLENGE_SOURCE||'all'}.json`,JSON.stringify({report,errors,hardware:'Development Edge; physical Android performance/input not verified'},null,2));await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
