const {chromium}=require('C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1080,height:1800},hasTouch:true}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(process.env.AUDIO_CHECK_URL||'http://127.0.0.1:8765/demos/g1/audio-check/');
  assert.equal(response.status(),200,'An audio diagnostic page must be available for the exhibition screen');
  await page.locator('#test-original').tap();await page.waitForFunction(()=>document.querySelector('#status-original').dataset.state==='complete');
  assert.match(await page.locator('#status-original').textContent(),/时钟正常/);
  await page.locator('#heard-original-no').tap();
  await page.locator('#test-synth').tap();await page.waitForFunction(()=>document.querySelector('#status-synth').dataset.state==='complete');
  assert.match(await page.locator('#status-synth').textContent(),/时钟正常/);await page.locator('#heard-synth-no').tap();
  await page.locator('#test-file').tap();await page.waitForFunction(()=>document.querySelector('#status-file').dataset.state==='complete');
  assert.match(await page.locator('#status-file').textContent(),/进度正常/);await page.locator('#heard-file-yes').tap();
  assert.match(await page.locator('#conclusion').textContent(),/普通音频.*能出声.*合成/);
  await page.reload();assert.equal(await page.locator('#heard-file-yes').getAttribute('aria-pressed'),'true','Results survive refresh for photos');
  const report=[];fs.mkdirSync('work/g1-audio-check',{recursive:true});
  for(const [width,height]of [[1080,1800],[1080,1920],[720,1280],[1528,698],[1280,720]]){
   await page.setViewportSize({width,height});await page.waitForTimeout(100);
   const result=await page.evaluate(()=>({scroll:document.documentElement.scrollHeight-innerHeight,clipped:[...document.querySelectorAll('button,.result')].filter(e=>{const r=e.getBoundingClientRect();return r.top<0||r.bottom>innerHeight+1||r.left<0||r.right>innerWidth+1;}).map(e=>e.id)}));
   assert(result.scroll<=2,JSON.stringify({width,height,...result}));assert.deepEqual(result.clipped,[]);report.push({width,height,...result});
  }
  await page.setViewportSize({width:1080,height:1800});await page.screenshot({path:'work/g1-audio-check/portrait.png'});
  const unavailable=await browser.newPage();await unavailable.addInitScript(()=>{window.AudioContext=undefined;window.webkitAudioContext=undefined;});
  await unavailable.goto(page.url());await unavailable.locator('#test-synth').click();await unavailable.waitForFunction(()=>document.querySelector('#status-synth').dataset.state==='error');
  await unavailable.locator('#test-file').click();await unavailable.waitForFunction(()=>document.querySelector('#status-file').dataset.state==='complete');
  assert.deepEqual(errors,[]);fs.writeFileSync('work/g1-audio-check/report.json',JSON.stringify({report,errors},null,2));
  console.log('PASS: real synthesis and ordinary WAV playback, clock progress, explicit hearing reports, reload persistence, five layouts and media playback without Web Audio. This does not verify the physical speaker.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
