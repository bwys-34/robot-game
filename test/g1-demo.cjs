const { chromium } = require(process.env.PLAYWRIGHT_CORE_PATH || 'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto('http://127.0.0.1:8765/demos/g1/');
    assert.equal(response.status(), 200, 'G1 sample page must exist');
    await page.locator('body[data-ready="true"]').waitFor({ timeout: 60000 });
    assert.equal(await page.locator('canvas').count(), 1);
    await page.getByRole('button', {name:'背面',exact:true}).click();
    await page.locator('#azimuth').filter({hasText:'180°'}).waitFor();
    await page.getByRole('button', {name:'正面',exact:true}).click();
    await page.locator('#azimuth').filter({hasText:'000°'}).waitFor();
    await page.getByRole('button', {name:'自动旋转',exact:true}).click();
    const initialAngle = await page.locator('#azimuth').innerText();
    await page.waitForFunction(value => document.getElementById('azimuth').textContent !== value, initialAngle);
    await page.getByRole('button', {name:'暂停旋转',exact:true}).click();
    const pausedAngle = await page.locator('#azimuth').innerText();
    await page.waitForTimeout(400);
    assert.equal(await page.locator('#azimuth').innerText(), pausedAngle, 'Pause must stop actual rotation');
    const canvas = await page.locator('canvas').boundingBox();
    await page.mouse.move(canvas.x + canvas.width * .2, canvas.y + canvas.height / 2);
    await page.mouse.down();
    await page.mouse.move(canvas.x + canvas.width * .2 + 170, canvas.y + canvas.height / 2, {steps:10});
    await page.mouse.up();
    await page.waitForFunction(value => document.getElementById('azimuth').textContent !== value, pausedAngle);
    await page.getByRole('button', {name:'复位',exact:true}).click();
    await page.locator('#azimuth').filter({hasText:'045°'}).waitFor();
    for (const viewport of [{width:1920,height:1080},{width:1080,height:1920},{width:1366,height:768}]) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(800);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No horizontal clipping');
      const bounds = await page.locator('#viewer').boundingBox();
      assert(bounds.height > 300, 'Robot must have a usable viewing area');
      if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({path:`${process.env.QA_SCREENSHOT_DIR}/g1-${viewport.width}.png`,fullPage:true});
    }
    assert.deepEqual(errors, []);
    console.log('PASS G1 model load, view presets, rotation controls and desktop/portrait layouts');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
