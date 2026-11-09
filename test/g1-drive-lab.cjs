const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const errors=[];fs.mkdirSync('work/g1-drive-lab',{recursive:true});
  for(const android of [false,true]){
   const p=await browser.newPage({viewport:{width:1080,height:1800}});p.on('pageerror',e=>errors.push(e.message));
   await p.addInitScript(android=>{
    window.pad={id:android?'Xbox Wireless Controller':'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:false,value:android&&(i===6||i===7)?.5:0}))};
    Object.defineProperty(navigator,'getGamepads',{value:()=>[window.pad]});
   },android);
   await p.goto('http://127.0.0.1:8765/demos/g1/drive/');await p.locator('body[data-ready=true]').waitFor({timeout:30000});
   await p.locator('[data-experience=mission]').click();
   if(android)await p.locator('#pad-layout').selectOption('exhibition-android');
   await p.locator('#drive-start').click();await p.waitForFunction(()=>document.body.dataset.input==='ready');
   assert.match(await p.locator('#control-profile-title').textContent(),android?/安卓/:/电脑/);
   const down=async(...ids)=>p.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i]={pressed:true,value:1}),ids);
   const up=async(...ids)=>{await p.evaluate(ids=>ids.forEach(i=>window.pad.buttons[i]={pressed:false,value:0}),ids);await p.waitForTimeout(120);};
   const tap=async(...ids)=>{await down(...ids);await p.waitForTimeout(150);await up(...ids);};
   const modifier=android?8:6;
   await down(modifier);if(!android)await p.waitForTimeout(2100);await tap(1);await up(modifier);await p.waitForFunction(()=>document.body.dataset.body==='fallen');
   if(android){await down(8,9);await p.waitForTimeout(900);await up(8,9);}
   else{await down(6);await p.waitForTimeout(2100);await tap(7);await up(6);}
   await p.waitForFunction(()=>document.body.dataset.mode==='debug'&&document.body.dataset.body==='upright');
   await p.waitForFunction(()=>!document.querySelector('#lab-confirm').disabled);
   await p.locator('#lab-panel').waitFor({state:'visible'});assert(!await p.locator('.control-columns').isVisible());
   assert.match(await p.locator('#mode-copy').textContent(),/虚拟吊架/);
   const before=await p.locator('#distance-travelled').textContent();
   await p.evaluate(()=>window.pad.axes[1]=-1);await p.waitForTimeout(500);await p.evaluate(()=>window.pad.axes[1]=0);await p.waitForTimeout(500);
   assert.equal(await p.locator('#distance-travelled').textContent(),before);
   assert(parseFloat(await p.locator('#lab-angle').textContent())>20,'Stick changes the measured joint angle');
   const rawX=android?3:2,rawY=android?4:3;
   await tap(rawX);await p.waitForTimeout(900);await tap(0);assert.equal(await p.locator('#lab-progress').textContent(),'0 / 3');
   assert.match(await p.locator('#lab-feedback').textContent(),/示范/);await tap(rawY);
   // Adjust using the actual raw gamepad axis, stop near the visible target,
   // wait for servo settling and explicitly confirm. No private game APIs.
   await p.waitForTimeout(600);await p.evaluate(()=>window.pad.axes[1]=-0.5);
   await p.waitForFunction(()=>parseFloat(document.querySelector('#lab-command').textContent)>=68.5,{},{timeout:12000});
   await p.evaluate(()=>window.pad.axes[1]=0);await p.waitForTimeout(850);await tap(0);
   await p.waitForFunction(()=>document.querySelector('#lab-progress').textContent==='1 / 3');
   await tap(15);await p.waitForFunction(()=>document.querySelector('[data-lab-joint=shoulder]').getAttribute('aria-pressed')==='true');
   await p.evaluate(()=>window.pad.axes[1]=-1);await p.waitForTimeout(350);await p.evaluate(()=>window.pad.axes[1]=0);
   assert.equal(await p.locator('body').getAttribute('data-mode'),'debug','D-pad selects experiments without triggering modes');
   await p.waitForTimeout(300);const commandBefore=parseFloat(await p.locator('#lab-command').textContent());
   const adjust=await p.locator('[data-hold=lab-increase]').boundingBox();await p.mouse.move(adjust.x+adjust.width/2,adjust.y+adjust.height/2);await p.mouse.down();await p.waitForTimeout(350);await p.mouse.up();await p.waitForTimeout(250);
   assert(parseFloat(await p.locator('#lab-command').textContent())<commandBefore-5,'Screen controls still adjust joints while gamepad is selected');
   const failures=[];
   for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720],[1440,1000]]){
    await p.setViewportSize({width,height});await p.waitForTimeout(150);
    const report=await p.evaluate(()=>{
     const nodes=[...document.querySelectorAll('#lab-panel,#lab-panel button,.controller-card,.mode-info')].filter(e=>e.getClientRects().length);
     return {root:document.documentElement.scrollHeight-innerHeight,viewer:document.querySelector('#drive-viewer').clientHeight,
      clipped:nodes.filter(e=>{const r=e.getBoundingClientRect();return r.bottom>innerHeight+1||r.right>innerWidth+1||r.left<0||r.top<0}).map(e=>e.id||e.className),
      overflow:nodes.filter(e=>e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2).map(e=>e.id||e.className)};
    });
    if(report.root>2||report.viewer<230||report.clipped.length||report.overflow.length)failures.push({width,height,...report});
    if(width===1080&&height===1800||width===1528)await p.screenshot({path:`work/g1-drive-lab/${android?'android':'desktop'}-${width}x${height}.png`});
   }
   assert.deepEqual(failures,[]);await p.setViewportSize({width:1080,height:1800});
   await p.locator('#source-manual').click();await p.locator('#drive-start').click();await p.waitForTimeout(250);
   const beforeKeyboard=parseFloat(await p.locator('#lab-command').textContent());await p.keyboard.down('s');await p.waitForTimeout(350);await p.keyboard.up('s');await p.waitForTimeout(250);
   assert(parseFloat(await p.locator('#lab-command').textContent())>beforeKeyboard+5,'Manual keyboard lab controls remain available');
   await p.locator('#lab-exit').click();await p.waitForFunction(()=>document.body.dataset.mode==='damp');assert(!await p.locator('#lab-panel').isVisible());
   console.log('PASS',android?'Android observed':'desktop standard','physical channels, debug entry, servo adjustment, diagnostic no-score, explicit calibration, six layouts and exit');await p.close();
  }
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
