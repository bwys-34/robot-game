const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const out=path.resolve(__dirname,'../work/g1-performance-game-qa');

async function layout(page,label){
  await page.waitForTimeout(150);
  const issues=await page.evaluate(()=>{
    const problems=[],visible=e=>Boolean(e.getClientRects().length)&&getComputedStyle(e).visibility!=='hidden';
    if(document.documentElement.scrollWidth>innerWidth+1)problems.push('horizontal overflow');
    if(innerWidth>=600&&innerHeight>innerWidth){
      if(document.documentElement.scrollHeight>innerHeight+2)problems.push('page needs scrolling');
      const viewer=document.querySelector('#viewer').getBoundingClientRect();
      if(viewer.height<250)problems.push('model too small: '+viewer.height);
      for(const element of document.querySelectorAll('#performance-game button,#performance-game select,#performance-game p,#performance-game details,.performance-result,#performance-top-entry')){
        if(!visible(element))continue;const r=element.getBoundingClientRect();
        if(r.top<0||r.bottom>innerHeight+1||r.left<0||r.right>innerWidth+1)problems.push(element.id+' outside viewport');
        for(let parent=element.parentElement;parent;parent=parent.parentElement){const p=parent.getBoundingClientRect(),s=getComputedStyle(parent);if(/hidden|clip|auto|scroll/.test(s.overflowY)&&(r.bottom>p.bottom+2||r.top<p.top-2))problems.push(element.id+' clipped');}
      }
      for(const node of document.querySelectorAll('.observation-panel,.performance-game'))if(visible(node)&&node.scrollHeight>node.clientHeight+2)problems.push(node.className+' internal overflow');
    }
    return problems;
  });
  await page.screenshot({path:path.join(out,label+'.png'),fullPage:true});
  assert.deepEqual(issues,[],label);
}
async function choose(page,ids){
  for(const [index,id] of ids.entries()){
    await page.locator('#performance-steps button').nth(index).click();
    await page.locator('#performance-action').selectOption(id);
  }
}
(async()=>{
  fs.mkdirSync(out,{recursive:true});
  const browser=await chromium.launch({executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try{
    const page=await browser.newPage({viewport:{width:1080,height:1800},deviceScaleFactor:2,hasTouch:true});
    page.setDefaultTimeout(12000);
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:8765/demos/g1/');await page.locator('body[data-ready=true]').waitFor({timeout:60000});
    assert(await page.locator('#performance-top-entry').evaluate(e=>e.getBoundingClientRect().bottom<=document.querySelector('#viewer').getBoundingClientRect().top),'Top entry must be outside and above model');
    await page.locator('#performance-top-entry').click();await layout(page,'theme-ready');
    assert.deepEqual(await page.locator('#performance-steps button:not([hidden]) b').allTextContents(),['挥手招呼','双臂迎宾','转身展示','双手呈递','单臂邀请','礼貌鞠躬']);
    assert.equal(await page.locator('#performance-play').isEnabled(),true,'A complete themed program is ready immediately');
    assert.match(await page.locator('#performance-play').textContent(),/主题表演/);
    assert.equal(await page.locator('#performance-restore').isEnabled(),false);
    await page.locator('#performance-play').click();await page.waitForTimeout(650);
    assert.match(await page.locator('#performance-now-label').textContent(),/开场.*招手/);
    assert.match(await page.locator('#stage-instruction').textContent(),/开场.*招手/);
    assert.equal(await page.locator('#performance-task-cards [data-task=dance]').isEnabled(),false);
    assert.equal(await page.locator('#performance-restore').isEnabled(),false);
    await page.waitForFunction(()=>document.querySelector('#performance-action').value==='turn',null,{timeout:20000});
    assert.match(await page.locator('#performance-now-label').textContent(),/介绍/);
    await layout(page,'theme-middle');
    await page.waitForFunction(()=>document.querySelector('#performance-game').dataset.status==='result',null,{timeout:40000});
    assert.equal(await page.locator('#performance-score-wrap').isVisible(),false,'Watching a preset does not award a task score');
    assert.equal(await page.locator('#performance-stars').isVisible(),false,'Watching alone does not earn task stars');
    assert.match(await page.locator('#performance-result-title').textContent(),/欢迎光临.*演出完成/);
    await layout(page,'theme-finished');
    await page.locator('#performance-steps button').nth(2).click();await page.locator('#performance-action').selectOption('guide-right');
    assert.equal(await page.locator('#performance-restore').isEnabled(),true);
    await page.locator('#performance-task-cards [data-task=reception]').click();
    assert.equal(await page.locator('#performance-action').inputValue(),'guide-right','Retapping the active theme must preserve edits');
    await page.locator('#performance-restore').click();
    assert.equal(await page.locator('#performance-restore').isEnabled(),false);
    assert.equal(await page.locator('#performance-result').isVisible(),false);
    assert.equal(await page.locator('#performance-steps button').nth(2).locator('b').textContent(),'转身展示');
    await choose(page,['wave','welcome','invite','guide-left','offer','bow']);
    assert.match(await page.locator('#performance-progress').textContent(),/6 \/ 6 步 · 约 3\d 秒/,'Six varied actions make a half-minute performance');
    await page.locator('#performance-step-up').click();
    assert.deepEqual(await page.locator('#performance-steps button:not([hidden]) b').allTextContents(),['挥手招呼','双臂迎宾','单臂邀请','左侧指引','礼貌鞠躬','双手呈递']);
    await page.locator('#performance-step-down').click();
    await page.locator('#performance-step-remove').click();
    assert.equal(await page.locator('#performance-play').isEnabled(),false);
    await page.locator('#performance-action').selectOption('bow');
    assert.equal(await page.locator('#performance-play').isEnabled(),true);
    await layout(page,'reception-ready');
    await page.locator('#performance-preview').click();await page.waitForTimeout(600);await layout(page,'preview');
    await page.waitForFunction(()=>document.querySelector('#performance-game').dataset.status==='editing',null,{timeout:10000});
    assert.equal(await page.locator('#performance-result').isVisible(),false,'Single preview never awards score');
    await page.locator('#performance-play').click();await page.waitForTimeout(600);
    assert.equal(await page.locator('#performance-action').inputValue(),'wave','Playing action and visible explanation must match');
    await page.locator('#performance-pause').click();assert.match(await page.locator('#performance-pause').textContent(),/继续/);
    const before=await page.locator('#azimuth').textContent();
    const rect=await page.locator('canvas').boundingBox();
    await page.mouse.move(rect.x+rect.width*.8,rect.y+rect.height*.35);await page.mouse.down();
    await page.mouse.move(rect.x+rect.width*.55,rect.y+rect.height*.35,{steps:8});await page.mouse.up();await page.waitForTimeout(250);
    assert.notEqual(await page.locator('#azimuth').textContent(),before,'Orbit remains usable while choreography is paused');
    const progress=await page.locator('#performance-play-progress').getAttribute('value');
    await page.waitForTimeout(500);assert.equal(await page.locator('#performance-play-progress').getAttribute('value'),progress);
    await layout(page,'paused');await page.locator('#performance-pause').click();
    await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
    assert.equal(await page.locator('#performance-game').getAttribute('data-status'),'paused','Backgrounding explicitly pauses the timeline');
    await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
    await page.locator('#performance-pause').click();
    await page.waitForFunction(()=>document.querySelector('#performance-game').dataset.status==='result',null,{timeout:60000});
    assert.equal(await page.locator('#performance-score').textContent(),'100');
    assert.equal(await page.locator('#viewer').getAttribute('data-fallen'),'false');
    await layout(page,'reception-result');
    for(const [task,ids] of [['guide',['wave','welcome','guide-right','offer','turn','bow']],['dance',['raise','sway','pulse','punch','open-close','diagonal']],['free',['wave','pulse','open-close','diagonal','raise','turn','salute','finale']]]){
      await page.locator(`#performance-task-cards [data-task=${task}]`).click();
      assert.equal(await page.locator('#performance-play').isEnabled(),task!=='free','Themed shows preload; free creation starts empty');
      if(task!=='free')assert.match(await page.locator('#performance-program-title').textContent(),/THEME SHOW/);
      else assert.equal(await page.locator('#performance-restore').isVisible(),false);
      await choose(page,ids);
      for(const size of [{width:1080,height:1920},{width:720,height:1280}]){
        await page.setViewportSize(size);await layout(page,task+'-'+size.width);
        if(task==='free'){await page.locator('#analysis-details').evaluate(e=>e.open=true);await layout(page,'analysis-'+size.width);await page.locator('#analysis-details').evaluate(e=>e.open=false);}
      }
      if(task==='guide'||task==='free'){
        await page.locator('#performance-play').click();
        await page.waitForFunction(()=>document.querySelector('#performance-game').dataset.status==='result',null,{timeout:60000});
        if(task==='guide'){assert.equal(await page.locator('#performance-score').textContent(),'70');assert.match(await page.locator('#performance-status').textContent(),/左侧/);}
        else assert.equal(await page.locator('#performance-score-wrap').isVisible(),false,'Free creation gives a title, not an arbitrary task score');
        await layout(page,task+'-result');
      }
    }
    await page.locator('#performance-play').click();await page.waitForTimeout(900);await page.locator('#performance-stop').click();
    assert.equal(await page.locator('#performance-game').getAttribute('data-status'),'editing');
    assert.equal(await page.locator('#performance-result').isVisible(),false);
    await page.locator('#mode-observe').click();assert.equal(await page.locator('#performance-game').isVisible(),false);
    await page.locator('#mode-challenge').click();await page.locator('#enter-training').click();
    assert.equal(await page.locator('#pose-game').isVisible(),true);assert.equal(await page.locator('#performance-game').isVisible(),false);
    await page.locator('#performance-top-entry').click();assert.equal(await page.locator('#pose-game').isVisible(),false);
    await page.locator('#performance-task-cards [data-task=dance]').click();await choose(page,['raise','sway','pulse','punch','open-close','diagonal']);
    await page.locator('#performance-play').click();await page.waitForTimeout(1000);await layout(page,'dance-playing');
    await page.waitForFunction(()=>document.querySelector('#performance-game').dataset.status==='result',null,{timeout:60000});
    assert.equal(await page.locator('#performance-score').textContent(),'100');await layout(page,'dance-result');
    await page.locator('#performance-play').click();
    await page.locator('#mode-observe').click();assert.equal(await page.locator('#performance-game').isVisible(),false,'Mode switch interrupts playback');
    await page.locator('#performance-top-entry').click();assert.equal(await page.locator('#performance-game').getAttribute('data-status'),'editing');
    await page.locator('#performance-play').click();
    await page.locator('#performance-stop').click();
    await page.setViewportSize({width:1920,height:1080});await layout(page,'desktop');
    assert.deepEqual(errors,[],'No page exceptions');
    console.log('PASS theme shows: immediate playback, live scene cues, unscored viewing, restore/custom edits, preview/play/pause/result, four tasks, portrait layouts, modes and original training');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
