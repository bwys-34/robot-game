const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const out=path.resolve(__dirname,'../work/g1-drive/modes');
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const p=await browser.newPage({viewport:{width:1080,height:1800}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{window.pad={id:'Standard test gamepad',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[window.pad]});});
  await p.goto('http://127.0.0.1:8765/demos/g1/drive/');await p.locator('body[data-ready=true]').waitFor();await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
  assert.equal(await p.locator('[data-drive-speed]').count(),2,'Visitors can see low and high gear without opening a menu');
  assert.equal(await p.locator('body').getAttribute('data-speed'),'slow','Start in low gear');
  await p.locator('[data-drive-speed=fast]').click();await p.waitForFunction(()=>document.body.dataset.speed==='fast');
  assert.equal(await p.locator('[data-drive-speed=fast]').getAttribute('aria-pressed'),'true');
  await p.evaluate(()=>{window.pad.buttons[4].pressed=true;window.pad.axes[1]=-1;});await p.waitForFunction(()=>Number(document.querySelector('#speed').textContent)>.7);
  assert.equal(await p.locator('body').getAttribute('data-speed'),'fast','Holding LB never overrides high gear');
  await p.evaluate(()=>window.pad.axes[1]=0);
  await p.evaluate(()=>window.pad.buttons[4].pressed=false);await p.waitForFunction(()=>document.querySelector('#speed-status').textContent.includes('当前：高速'));
  const doubleTap=async key=>{for(let i=0;i<2;i++){await p.evaluate(key=>window.pad.buttons[key].pressed=true,key);await p.waitForTimeout(65);await p.evaluate(key=>window.pad.buttons[key].pressed=false,key);await p.waitForTimeout(65);}};
  await doubleTap(6);await p.waitForFunction(()=>document.body.dataset.speed==='slow');
  await doubleTap(4);await p.waitForFunction(()=>document.body.dataset.speed==='fast');
  await p.evaluate(()=>{window.pad.buttons[7].pressed=true;window.pad.buttons[13].pressed=true;});await p.waitForTimeout(250);assert.equal(await p.locator('body').getAttribute('data-speed'),'fast','Removed RT chord does not select a third gear');await p.evaluate(()=>window.pad.buttons.forEach(b=>b.pressed=false));
  await p.locator('[data-drive-speed=slow]').click();await p.waitForFunction(()=>document.body.dataset.speed==='slow');
  await p.locator('#drive-reset').click();await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
  const press=async(...ids)=>{await p.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i].pressed=true),ids);await p.waitForTimeout(180);await p.evaluate(()=>window.pad.buttons.forEach(b=>b.pressed=false));await p.waitForTimeout(180);};
  await press(5);assert.equal(await p.locator('body').getAttribute('data-mode'),'stand');
  const original=await p.locator('#distance-travelled').textContent();await p.evaluate(()=>window.pad.axes[1]=-1);await p.waitForTimeout(700);assert.equal(await p.locator('#distance-travelled').textContent(),original);
  await p.evaluate(()=>window.pad.axes[1]=0);
  const lt=async key=>{await p.evaluate(()=>window.pad.buttons[6].value=1);await p.waitForTimeout(2100);await press(key);await p.evaluate(()=>window.pad.buttons[6].value=0);await p.waitForTimeout(200);};
  await lt(1);assert.equal(await p.locator('body').getAttribute('data-mode'),'damp');await p.waitForFunction(()=>document.body.dataset.body==='fallen');await press(0);assert.equal(await p.locator('body').getAttribute('data-motion'),'fallen');assert(await p.locator('#action-wave').isDisabled());await p.screenshot({path:path.join(out,'damping.png')});
  await p.locator('[data-drive-mode=locomotion]').click();assert.equal(await p.locator('body').getAttribute('data-mode'),'damp','Fallen model cannot teleport upright');
  await lt(2);await p.waitForFunction(()=>document.body.dataset.body==='upright');assert.equal(await p.locator('body').getAttribute('data-mode'),'stand');
  await p.locator('[data-drive-mode=performance]').click();await p.waitForTimeout(250);await press(15);assert.equal(await p.locator('body').getAttribute('data-action'),'handshake');await press(0);await p.waitForFunction(()=>document.body.dataset.motion==='handshake');await p.waitForTimeout(1100);await p.screenshot({path:path.join(out,'handshake.png')});
  await lt(3);await p.waitForFunction(()=>document.body.dataset.mode==='zero'&&document.body.dataset.body==='fallen');assert.equal(await p.locator('#camera-toggle').getAttribute('data-overview'),'false','Modifier Y must not switch camera');
  await p.locator('#recover-body').click();await p.waitForFunction(()=>document.body.dataset.body==='upright');await p.waitForTimeout(250);
  await p.locator('#action-select').selectOption('clap');await p.waitForFunction(()=>document.body.dataset.action==='clap');await press(0);await p.waitForFunction(()=>document.body.dataset.motion==='clap');await p.waitForTimeout(1100);await p.screenshot({path:path.join(out,'clap.png')});
  await p.waitForFunction(()=>document.body.dataset.motion==='idle');
  await p.locator('#action-select').selectOption('dance');await p.waitForFunction(()=>document.body.dataset.action==='dance');await press(0);await p.waitForTimeout(1700);await p.screenshot({path:path.join(out,'dance.png')});
  await p.waitForFunction(()=>document.body.dataset.motion==='idle');await p.locator('[data-drive-mode=performance]').click();await p.waitForTimeout(250);
  await p.locator('#action-select').selectOption('backflip');await p.waitForFunction(()=>document.body.dataset.action==='backflip');await press(0);await p.waitForFunction(()=>document.body.dataset.motion==='backflip');
  for(const [name,delay]of [['prepare',550],['air',700],['inverted',350],['landing',650]]){await p.waitForTimeout(delay);await p.screenshot({path:path.join(out,`backflip-${name}.png`)});}
  await p.waitForFunction(()=>document.body.dataset.motion==='idle');
  await press(0);await p.waitForTimeout(1350);await lt(3);await p.waitForFunction(()=>document.body.dataset.body==='fallen');await p.screenshot({path:path.join(out,'interrupted-flip-fallen.png')});await lt(2);await p.waitForFunction(()=>document.body.dataset.body==='upright');
  await press(9);await p.waitForTimeout(450);assert.equal(await p.locator('body').getAttribute('data-mode'),'locomotion');
  await p.evaluate(()=>window.pad.buttons[9].pressed=true);await p.waitForTimeout(60);await p.evaluate(()=>window.pad.buttons[9].pressed=false);await p.waitForTimeout(70);await p.evaluate(()=>window.pad.buttons[9].pressed=true);await p.waitForTimeout(60);await p.evaluate(()=>window.pad.buttons[9].pressed=false);await p.waitForFunction(()=>document.body.dataset.stepping==='true');
  await p.locator('#drive-pause').click();
  for(const [width,height]of [[1440,1000],[1080,1800],[1080,1920],[720,1280]]){
   await p.setViewportSize({width,height});
   for(const manual of [false,true]){
    if(manual)await p.locator('#source-manual').click();else await p.locator('#source-pad').click();await p.waitForTimeout(150);
    const failures=await p.evaluate(()=>{
     const failures=[];
     for(const el of document.querySelectorAll('[data-drive-mode],[data-drive-speed],#speed-status,#speed-help,#action-select,#action-wave,#action-invite,#drive-start,#drive-reset,#emergency-stop,#fullscreen,#drive-message,#touch-controls,#recover-body,#step-toggle')){
      if(!el.getClientRects().length)continue;const r=el.getBoundingClientRect();if(r.top<0||r.left<0||r.bottom>innerHeight+1||r.right>innerWidth+1)failures.push(el.id||el.dataset.driveMode);
     }
     for(const el of document.querySelectorAll('.dashboard,.controller-card,.mission-card'))if(el.scrollHeight>el.clientHeight+2)failures.push('overflow:'+el.className);
     if(document.documentElement.scrollHeight>innerHeight+2)failures.push('root');if(document.querySelector('#drive-viewer').clientHeight<230)failures.push('small viewer');return failures;
    });
    await p.screenshot({path:path.join(out,`layout-${width}x${height}-${manual?'touch':'pad'}.png`)});assert.deepEqual(failures,[],`${width}x${height} manual=${manual}`);
   }
  }
  assert.deepEqual(errors,[]);console.log('PASS: R3 gamepad chords, fall/recovery gate, backflip/air interruption, START single/double, actions, four layouts with pad/touch; no page errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
