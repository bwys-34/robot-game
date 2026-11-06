const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const out=path.resolve(__dirname,'../work/g1-drive');
(async()=>{
  fs.mkdirSync(out,{recursive:true});
  const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try{
    const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.addInitScript(()=>{
      window.pad={id:'HID-compliant game controller (STANDARD GAMEPAD Vendor: 045e Product: 02e0)',index:0,mapping:'standard',connected:false,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};
      Object.defineProperty(navigator,'getGamepads',{value:()=>window.pad.connected?[window.pad]:[]});
    });
    await page.goto('http://127.0.0.1:8765/demos/g1/drive/');
    await page.locator('body[data-ready=true]').waitFor({timeout:20000});
    await page.locator('#drive-start').click();
    await page.waitForFunction(()=>document.body.dataset.input==='waiting');
    await page.evaluate(()=>{window.pad.connected=true;window.pad.buttons[0].pressed=true;});
    await page.waitForFunction(()=>document.body.dataset.input==='neutral');
    await page.evaluate(()=>window.pad.buttons[0].pressed=false);
    await page.waitForFunction(()=>document.body.dataset.input==='ready');
    await page.evaluate(()=>window.pad.buttons[3].pressed=true);
    await page.waitForFunction(()=>document.querySelector('#camera-toggle').dataset.overview==='true');
    await page.evaluate(()=>window.pad.buttons[3].pressed=false);await page.waitForTimeout(100);
    await page.locator('#camera-toggle').click();
    await page.waitForFunction(()=>document.querySelector('#camera-toggle').dataset.overview==='false');
    await page.evaluate(()=>window.pad.axes[1]=-1);
    await page.waitForFunction(()=>parseFloat(document.querySelector('#distance-travelled').textContent)>=1.4);
    await page.evaluate(()=>window.pad.axes[1]=0);
    await page.waitForFunction(()=>document.body.dataset.stage==='greeting');
    await page.waitForTimeout(700);
    await page.evaluate(()=>window.pad.buttons[0].pressed=true);
    await page.waitForTimeout(180);
    await page.evaluate(()=>window.pad.buttons[0].pressed=false);
    await page.waitForFunction(()=>document.body.dataset.motion==='wave');
    assert.equal(await page.locator('body').getAttribute('data-stage'),'greeting','Wave must complete before advancement');
    await page.screenshot({path:path.join(out,'wave.png')});
    await page.waitForFunction(()=>document.body.dataset.stage==='guide',{},{timeout:20000});
    // Face the exhibit to the robot's right, then approach it.
    await page.evaluate(()=>window.pad.axes[2]=1);
    await page.waitForFunction(()=>Math.abs(Number(document.querySelector('#map-robot').dataset.yaw)-Math.PI/2)<.14);
    await page.evaluate(()=>{window.pad.axes[2]=0;window.pad.axes[1]=-1;});
    await page.waitForFunction(()=>Number(document.querySelector('#map-robot').dataset.x)>1.08);
    await page.evaluate(()=>window.pad.axes[1]=0);
    await page.waitForTimeout(700);
    // Move sideways relative to this eastward heading toward the exhibit's z.
    await page.evaluate(()=>window.pad.axes[0]=1);
    await page.waitForFunction(()=>Number(document.querySelector('#map-robot').dataset.z)>-.75);
    await page.evaluate(()=>window.pad.axes[0]=0);
    await page.waitForTimeout(800);
    await page.locator('#action-invite').click();
    await page.waitForFunction(()=>document.body.dataset.stage==='complete',{},{timeout:20000});
    assert(await page.locator('#drive-result').isVisible());
    assert(Number((await page.locator('#result-score').textContent()).replace(/\D/g,''))>=90);
    await page.screenshot({path:path.join(out,'completed-desktop.png')});
    await page.evaluate(()=>{window.pad.axes[1]=-1;});
    await page.waitForTimeout(500);
    await page.evaluate(()=>{window.pad.buttons[1].pressed=true;});
    await page.waitForFunction(()=>document.body.dataset.input==='paused');
    const stopped=await page.locator('#distance-travelled').textContent();
    await page.evaluate(()=>{window.pad.buttons[1].pressed=false;window.pad.axes[1]=0;});
    await page.waitForTimeout(500);
    assert.equal(await page.locator('#distance-travelled').textContent(),stopped,'B latches stop');
    await page.evaluate(()=>window.pad.buttons[9].pressed=true);
    await page.waitForFunction(()=>document.body.dataset.input==='ready');
    await page.evaluate(()=>{window.pad.buttons[9].pressed=false;window.pad.connected=false;});
    await page.waitForFunction(()=>document.body.dataset.input==='disconnected');
    await page.evaluate(()=>window.pad.connected=true);
    await page.waitForTimeout(400);
    assert.equal(await page.locator('body').getAttribute('data-input'),'disconnected','Reconnect cannot silently start');
    await page.locator('#drive-start').click();
    await page.waitForFunction(()=>document.body.dataset.input==='ready');
    await page.evaluate(()=>dispatchEvent(new Event('blur')));
    await page.waitForFunction(()=>document.body.dataset.input==='paused');
    await page.locator('#source-manual').click();
    await page.locator('#drive-reset').click();
    await page.locator('#drive-start').click();
    // Moving must still work after clicking camera/UI buttons.
    await page.locator('#camera-toggle').click();
    await page.keyboard.down('w');await page.waitForTimeout(800);await page.keyboard.up('w');
    await page.waitForTimeout(250);
    assert(parseFloat(await page.locator('#distance-travelled').textContent())>.15,'Keyboard moves robot in default low gear');
    if(!await page.locator('#touch-controls').isVisible())await page.locator('#show-touch').click();
    const touch=page.locator('[data-hold=forward]'),rect=await touch.boundingBox();
    const previous=parseFloat(await page.locator('#distance-travelled').textContent());
    await page.mouse.move(rect.x+rect.width/2,rect.y+rect.height/2);await page.mouse.down();await page.waitForTimeout(500);await page.mouse.up();
    await page.waitForTimeout(250);
    assert(parseFloat(await page.locator('#distance-travelled').textContent())>previous,'Held screen control moves robot');
    await page.locator('#drive-pause').click();
    for(const [width,height] of [[1440,1000],[1080,1800],[1080,1920],[720,1280]]){
      await page.setViewportSize({width,height});await page.waitForTimeout(250);
      const layout=await page.evaluate(()=>{
        const ids=['drive-start','drive-reset','action-wave','action-invite','emergency-stop','fullscreen','drive-message'];
        const failures=[];
        for(const id of ids){const r=document.getElementById(id).getBoundingClientRect();if(r.top<0||r.left<0||r.bottom>innerHeight||r.right>innerWidth)failures.push(id);}
        const nested=[...document.querySelectorAll('.dashboard,.controller-card,.mission-card')].filter(e=>e.scrollHeight>e.clientHeight+2).map(e=>e.className);
        return {failures,nested,root:document.documentElement.scrollHeight<=innerHeight+2,viewer:document.getElementById('drive-viewer').clientHeight};
      });
      await page.screenshot({path:path.join(out,`layout-${width}x${height}.png`)});
      assert.deepEqual(layout.failures,[],JSON.stringify({width,height,layout}));assert.deepEqual(layout.nested,[],JSON.stringify({width,height,layout}));assert(layout.root);assert(layout.viewer>230);
    }
    await page.locator('#source-pad').click();
    await page.evaluate(()=>window.pad.mapping='');
    await page.locator('#drive-start').click();
    await page.waitForFunction(()=>document.body.dataset.input==='unsupported');
    assert.match(await page.locator('#input-status').textContent(),/标准|映射/);
    await page.locator('#fullscreen').click();
    await page.waitForFunction(()=>Boolean(document.fullscreenElement));
    await page.evaluate(()=>document.exitFullscreen());
    await page.locator('#fullscreen-reenter').waitFor({state:'visible'});
    assert.deepEqual(errors,[]);
    console.log('PASS: simulated standard gamepad, full reception task, stop/pause/disconnect/focus, keyboard/screen input and four layouts; no page errors.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
