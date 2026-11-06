const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1528,height:698}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.pad={id:'Standard test gamepad',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>window.pad.connected?[window.pad]:[]});});
  await page.goto('http://127.0.0.1:8765/demos/g1/drive/');await page.locator('body[data-ready=true]').waitFor();
  const hold=async(...ids)=>{await page.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i].pressed=true),ids);await page.waitForTimeout(100);};
  const release=async()=>{await page.evaluate(()=>window.pad.buttons.forEach(b=>b.pressed=false));await page.waitForTimeout(100);};
  const press=async(...ids)=>{await hold(...ids);await release();};
  await hold(0);await page.waitForFunction(()=>document.body.dataset.input==='neutral');
  assert.equal(await page.locator('body').getAttribute('data-motion'),'idle');
  await release();await page.waitForFunction(()=>document.body.dataset.input==='ready');
  assert.equal(await page.locator('body').getAttribute('data-motion'),'idle','Start A never triggers an action');
  await press(1);await page.waitForFunction(()=>document.body.dataset.input==='paused');
  await hold(0);await page.waitForFunction(()=>document.body.dataset.input==='neutral');await release();await page.waitForFunction(()=>document.body.dataset.input==='ready');
  assert.equal(await page.locator('body').getAttribute('data-motion'),'idle');
  // Returning to a window with A already held cannot silently resume it.
  await page.evaluate(()=>dispatchEvent(new Event('blur')));await hold(0);assert.equal(await page.locator('body').getAttribute('data-input'),'paused');await release();await press(0);await page.waitForFunction(()=>document.body.dataset.input==='ready');
  await page.evaluate(()=>window.pad.connected=false);await page.waitForFunction(()=>document.body.dataset.input==='disconnected');
  await page.evaluate(()=>{window.pad.buttons[0].pressed=true;window.pad.connected=true;});await page.waitForTimeout(250);assert.equal(await page.locator('body').getAttribute('data-input'),'disconnected');
  await release();await press(0);await page.waitForFunction(()=>document.body.dataset.input==='ready');
  await page.locator('[data-drive-mode=performance]').click();await page.waitForTimeout(200);
  assert.match(await page.locator('#mode-title').textContent(),/动作表演/);assert.match(await page.locator('#mode-copy').textContent(),/RB/);
  const out=path.resolve('work/g1-drive/visitor-controls');fs.mkdirSync(out,{recursive:true});
  for(const [button,id]of [[0,'dance'],[1,'robotdance'],[2,'armdance'],[3,'cheerdance']]){
   await hold(5);assert.equal(await page.locator('body').getAttribute('data-mode'),'performance');await hold(button);
   await page.waitForFunction(id=>document.body.dataset.motion===id,id);
   await page.evaluate(()=>window.pad.buttons[5].pressed=false);await page.waitForTimeout(100);
   assert.equal(await page.locator('body').getAttribute('data-input'),'ready','Chord button is consumed after RB releases');
   assert.equal(await page.locator('body').getAttribute('data-mode'),'performance');
   await release();await page.waitForTimeout(1200);await page.screenshot({path:path.join(out,id+'.png')});
   await page.waitForFunction(()=>document.body.dataset.motion==='idle',null,{timeout:15000});
  }
  await page.locator('#action-select').selectOption('backflip');await page.locator('#action-menu-play').click();await page.waitForFunction(()=>document.body.dataset.motion==='backflip');await page.waitForFunction(()=>document.body.dataset.motion==='idle');
  await page.locator('[data-performance-action=robotdance]').click();await page.waitForFunction(()=>document.body.dataset.motion==='robotdance');
  await page.locator('#drive-pause').click();
  for(const [width,height]of [[1528,698],[1280,720],[1440,1000],[1080,1800],[1080,1920],[720,1280]]){
   await page.setViewportSize({width,height});
   for(const source of ['pad','manual']){
    await page.locator('#source-'+source).click();await page.waitForTimeout(150);
    const report=await page.evaluate(()=>({clipped:[...document.querySelectorAll('.mode-info,#performance-shortcuts,[data-performance-action],#action-select,#action-menu-play,#drive-start,#drive-pause,#touch-controls,.mode-shortcuts,[data-drive-speed]')].filter(e=>e.getClientRects().length).filter(e=>{const r=e.getBoundingClientRect();return r.top<0||r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(e=>e.id||e.className),overflow:[...document.querySelectorAll('.mission-card,.controller-card')].filter(e=>e.scrollHeight>e.clientHeight+2).map(e=>e.className),root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight}));
    await page.screenshot({path:path.join(out,`${width}x${height}-${source}.png`)});
    assert.deepEqual(report.clipped,[],`${width}x${height} ${source}`);assert.deepEqual(report.overflow,[]);assert(report.root<=2);assert(report.viewer>=230);console.log('LAYOUT',width,height,source,JSON.stringify(report));
   }
  }
  for(const [mode,pattern]of [['damp',/有阻力/],['zero',/不出力/],['stand',/保持站姿/],['locomotion',/主动保持平衡/],['debug',/暂停运动控制/]]){
   await page.locator('#drive-reset').click();if(mode==='debug'){await page.locator('[data-drive-mode=damp]').click();await page.waitForTimeout(150);}
   await page.locator('[data-drive-mode='+mode+']').click();await page.waitForTimeout(150);
   assert.match(await page.locator('#mode-title').textContent(),pattern);
  }
  assert.deepEqual(errors,[]);console.log('PASS: A starts/resumes without mouse or action leakage, focus/reconnect require fresh input, four RB dances and click playback, explanatory modes, desktop/portrait layouts.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
