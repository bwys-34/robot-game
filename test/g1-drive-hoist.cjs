const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const root='http://127.0.0.1:8765/demos/g1/drive/?v=2026-11-09-hoist-2';
const sizes=[[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]];
const position=p=>p.locator('#map-robot').evaluate(n=>({x:Number(n.dataset.x),z:Number(n.dataset.z)}));
async function arrive(p,source){
 for(let i=0;i<170;i++){
  const at=await position(p),dx=-1.25-at.x,dz=-1.5-at.z;
  if(Math.hypot(dx,dz)<.16)break;
  if(source==='manual'){
   for(const [k,on]of [['a',dx<-.09],['d',dx>.09],['w',dz<-.09],['s',dz>.09]])await p.keyboard[on?'down':'up'](k);
  }else await p.evaluate(({dx,dz})=>{pad.axes[0]=Math.abs(dx)>.09?Math.sign(dx)*.85:0;pad.axes[1]=Math.abs(dz)>.09?Math.sign(dz)*.85:0;},{dx,dz});
  await p.waitForTimeout(100);
 }
 if(source==='manual')for(const k of ['a','d','w','s'])await p.keyboard.up(k);else await p.evaluate(()=>pad.axes=[0,0,0,0]);
 await p.waitForFunction(()=>!document.querySelector('#hoist-primary').disabled,{},{timeout:6000});
 assert.equal(await p.locator('body').getAttribute('data-hoist'),'detached','Arrival cannot attach automatically');
}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const errors=[],report=[];fs.mkdirSync('work/g1-hoist',{recursive:true});
 async function layouts(p,phase){
  for(const [width,height]of sizes){await p.setViewportSize({width,height});await p.waitForTimeout(120);
   const metrics=await p.evaluate(()=>{const nodes=[...document.querySelectorAll('.hoist-panel,.hoist-panel button,.hoist-panel p,.hoist-panel h2,.hoist-route>span,.controller-card,.experience-switch,.mode-info,#drive-message')].filter(n=>n.getClientRects().length);
    return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,clipped:nodes.filter(n=>{const r=n.getBoundingClientRect();return r.top<0||r.left<0||r.bottom>innerHeight+1||r.right>innerWidth+1}).map(n=>n.id||n.className),overflow:nodes.filter(n=>n.scrollHeight>n.clientHeight+2||n.scrollWidth>n.clientWidth+2).map(n=>({id:n.id||n.className,h:n.clientHeight,sh:n.scrollHeight,w:n.clientWidth,sw:n.scrollWidth}))};});
   report.push({phase,width,height,...metrics});
   await p.screenshot({path:`work/g1-hoist/${phase}-${width}x${height}.png`});
   assert(metrics.root<=2&&metrics.viewer>=230&&!metrics.clipped.length&&!metrics.overflow.length,JSON.stringify(report.at(-1)));
  }await p.setViewportSize({width:1080,height:1800});
 }
 try{
  for(const source of ['manual','standard','android']){
   const p=await browser.newPage({viewport:{width:1080,height:1800}});p.on('pageerror',e=>errors.push(e.message));
   if(source!=='manual')await p.addInitScript(android=>{window.pad={id:android?'Xbox Wireless Controller':'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:false,value:android&&(i===6||i===7)?.5:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[pad]});},source==='android');
   await p.goto(root);await p.locator('body[data-ready=true]').waitFor({timeout:30000});assert.equal(await p.locator('button[data-experience]').count(),2);await p.locator('#hoist-toggle').click();
   if(source==='manual')await p.locator('#source-manual').click();else if(source==='android')await p.locator('#pad-layout').selectOption('exhibition-android');
   await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
   if(source==='manual')await layouts(p,'approach');
   if(source!=='manual'){
    const before=await position(p),button=p.locator('#hoist-directions [data-hold=forward]'),r=await button.boundingBox();
    await p.mouse.move(r.x+r.width/2,r.y+r.height/2);await p.mouse.down();await p.waitForTimeout(450);await p.mouse.up();await p.waitForTimeout(200);
    assert((await position(p)).z<before.z-.045,'On-screen controls still work with gamepad selected');
   }
   await p.locator('#drive-viewer').focus();await arrive(p,source);
   const pressA=async()=>{if(source==='manual')await p.keyboard.press('h');else {await p.evaluate(()=>pad.buttons[0]={pressed:true,value:1});await p.waitForTimeout(130);await p.evaluate(()=>pad.buttons[0]={pressed:false,value:0});}await p.waitForTimeout(180);};
   await pressA();await p.waitForFunction(()=>document.body.dataset.hoist==='attaching');
   await p.locator('#drive-pause').click();const frozen=await p.locator('#hoist-progress').getAttribute('style');await p.waitForTimeout(300);assert.equal(await p.locator('#hoist-progress').getAttribute('style'),frozen);await p.locator('#drive-start').click();
   await p.waitForFunction(()=>document.body.dataset.hoist==='supported');assert.equal(await p.locator('body').getAttribute('data-motion'),'idle');
   if(source==='manual')await layouts(p,'supported');
   const mode=async(name)=>{if(source==='manual')await p.locator(`#hoist-${name}`).click();else {
     const modifier=source==='android'?8:6,face=name==='damp'?1:source==='android'?4:3;
     await p.evaluate(({modifier,face})=>{pad.buttons[modifier]={pressed:true,value:1};pad.buttons[face]={pressed:true,value:1};},{modifier,face});await p.waitForTimeout(source==='android'?200:2200);
     await p.evaluate(({modifier,face})=>{pad.buttons[modifier]={pressed:false,value:0};pad.buttons[face]={pressed:false,value:0};},{modifier,face});
    }await p.waitForFunction(name=>document.body.dataset.mode===name,name);await p.waitForTimeout(850);assert.equal(await p.locator('body').getAttribute('data-body'),'upright');};
   await mode('damp');await mode('zero');assert.match(await p.locator('#hoist-title').textContent(),/解挂/);assert.equal(await p.locator('#fall-count').textContent(),'0');
   if(source==='manual')await layouts(p,'zero');
   if(source==='manual'){
    await p.locator('[data-drive-mode=debug]').click();await p.waitForFunction(()=>document.body.dataset.mode==='debug');assert.equal(await p.locator('body').getAttribute('data-body'),'upright');
    await p.waitForTimeout(300);await p.locator('#drive-viewer').focus();await p.keyboard.down('w');await p.waitForTimeout(250);await p.keyboard.up('w');await p.waitForTimeout(300);
    assert(parseFloat(await p.locator('#lab-angle').textContent())>16,'Attached debug still controls its selected joint');
    await p.locator('#lab-exit').click();await p.waitForFunction(()=>document.body.dataset.mode==='damp');assert.equal(await p.locator('body').getAttribute('data-hoist'),'supported');
   }
   await pressA();await p.waitForFunction(()=>document.body.dataset.mode==='stand');await p.waitForTimeout(650);await pressA();await p.waitForFunction(()=>document.body.dataset.hoist==='detached');
   assert.match(await p.locator('#hoist-step').textContent(),/完成/);assert.equal(await p.locator('#fall-count').textContent(),'0');
   if(source==='manual')await layouts(p,'complete');
   await p.locator('#hoist-walk').click();await p.waitForTimeout(250);const at=await position(p);
   if(source==='manual'){await p.locator('#drive-viewer').focus();await p.keyboard.down('s');await p.waitForTimeout(650);await p.keyboard.up('s');}else{await p.evaluate(()=>pad.axes[1]=1);await p.waitForTimeout(650);await p.evaluate(()=>pad.axes[1]=0);}
   assert((await position(p)).z>at.z+.06,'Explicitly detached robot can leave');
   // Unsupported passive modes continue to produce a fall in this experience.
   await p.locator('[data-drive-mode=zero]').first().click();await p.waitForFunction(()=>document.body.dataset.body==='fallen');assert.equal(await p.locator('#fall-count').textContent(),'1');
   await p.close();console.log('PASS hoist complete circuit:',source);
  }
  assert.deepEqual(errors,[]);fs.writeFileSync('work/g1-hoist/browser-report.json',JSON.stringify({report,errors,hardware:'simulated gamepad channels; physical controller and exhibition Android pending'},null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
