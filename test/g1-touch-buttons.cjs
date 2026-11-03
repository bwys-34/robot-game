const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),path=require('node:path');
const req=require('node:module').createRequire(path.resolve(__dirname,'../demos/g1/package.json'));
(async()=>{
 const source=req('esbuild').transformSync(require('node:fs').readFileSync(path.resolve(__dirname,'../demos/g1/src/touch-buttons.ts'),'utf8'),{loader:'ts',format:'iife',globalName:'TouchButtons'}).code+'\nTouchButtons.enableTouchButtons(document.body);';
 const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1920},hasTouch:true});
  await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><div id="other" style="width:200px;height:70px">Non-button content</div><button id="action" style="width:200px;height:70px;touch-action:none">Adjust</button><button id="disabled" disabled>Disabled</button>');
  await page.evaluate(()=>{window.calls={action:0,other:0,disabled:0};for(const id of Object.keys(calls))document.getElementById(id).addEventListener('click',()=>calls[id]++);});
  await page.addScriptTag({content:source});
  await page.locator('#other').tap();await page.waitForTimeout(50);assert.equal(await page.evaluate(()=>calls.other),1,'Non-button native events remain untouched');
  await page.locator('#action').tap();await page.waitForTimeout(400);assert.equal(await page.evaluate(()=>calls.action),1,'A native touchscreen tap runs exactly once');
  await page.locator('#action').click();assert.equal(await page.evaluate(()=>calls.action),2,'A mouse click after a touch remains available');
  await page.locator('#action').focus();await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>calls.action),3,'Keyboard Enter runs once');
  await page.keyboard.press('Space');assert.equal(await page.evaluate(()=>calls.action),4,'Keyboard Space runs once');
  const ignored=await page.evaluate(()=>{
   const b=document.getElementById('action'),send=(type,x)=>b.dispatchEvent(new PointerEvent(type,{bubbles:true,pointerId:42,pointerType:'touch',isPrimary:true,clientX:x,clientY:100}));
   send('pointerdown',10);send('pointermove',40);send('pointermove',10);send('pointerup',10);
   send('pointerdown',10);send('pointercancel',10);send('pointerup',10);
   const disabled=document.getElementById('disabled');for(const type of ['pointerdown','pointerup'])disabled.dispatchEvent(new PointerEvent(type,{bubbles:true,pointerId:43,pointerType:'touch',isPrimary:true}));
   return calls;
  });
  assert.deepEqual(ignored,{action:4,other:1,disabled:0},'Drags, cancellation and disabled buttons cannot trigger an action');
  console.log('PASS native tap once, mouse/keyboard after touch, non-button events, drag/cancel and disabled controls');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
