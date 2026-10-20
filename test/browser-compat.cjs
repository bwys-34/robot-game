// Run with Playwright Core installed; optionally set PLAYWRIGHT_CORE_PATH and BROWSER_PATH.
// Chrome 88 checks remove unsupported APIs and discard unsupported svh declarations.
// This reproduces compatibility constraints in a current engine, not an actual Chrome 88 binary.
const { chromium } = require(process.env.PLAYWRIGHT_CORE_PATH || 'playwright-core');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    res.writeHead(err ? 404 : 200, { 'Content-Type': (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8' });
    res.end(err ? 'Not found' : data);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ executablePath: process.env.BROWSER_PATH, headless: true });
  try {
    for (const legacy of [true, false]) {
      for (const viewport of [{ width: 1920, height: 1080 }, { width: 1080, height: 1920 }, { width: 390, height: 844 }]) {
        const context = await browser.newContext({ viewport, hasTouch: true });
        if (legacy) {
          await context.addInitScript(() => {
            Object.hasOwn = undefined;
            if (window.crypto) Object.defineProperty(window.crypto, 'randomUUID', { value: undefined });
            HTMLDialogElement.prototype.showModal = undefined;
            HTMLDialogElement.prototype.close = undefined;
          });
          await context.route('**/*.css*', async route => {
            const response = await route.fetch();
            const css = (await response.text()).replace(/(?:^|[;{])\s*[-a-z]+\s*:[^;{}]*\b\d*svh\b[^;{}]*(?=[;}])/g, match => match[0]);
            await route.fulfill({ response, body: css });
          });
        }
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => { if (response.status() >= 400) errors.push(response.status() + ' ' + response.url()); });
        await page.goto(`http://127.0.0.1:${server.address().port}/`);
        await page.waitForLoadState('networkidle');
        assert.equal(await page.locator('.start-button').count(), 1, `Homepage must start; errors: ${errors.join('; ')}`);
        assert.equal(await page.locator('body').getAttribute('class'), 'lab');
        assert.equal(await page.locator('#archive-entry').getAttribute('href'), 'https://bwys-34.github.io/robot-QR-code/');
        assert.equal(await page.locator('#exit-dialog').isVisible(), false, 'Exit dialog stays hidden on homepage');
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        assert(await page.locator('.shell').evaluate(el => el.getBoundingClientRect().height >= innerHeight - 1));
        if (viewport.width === 1920) assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1));
        if (process.env.QA_SCREENSHOT_DIR) {
          fs.mkdirSync(process.env.QA_SCREENSHOT_DIR, { recursive: true });
          await page.screenshot({ path: path.join(process.env.QA_SCREENSHOT_DIR, `${legacy ? 'chrome88' : 'native'}-${viewport.width}.png`), fullPage: true });
        }
        await page.locator('[data-nickname="未来博士"]').click();
        await page.locator('.start-button').click();
        await page.locator('.answer:not(:disabled)').first().waitFor();
        await page.locator('#exit-round').click();
        assert(await page.locator('#exit-dialog').isVisible());
        await page.locator('#continue-round').click();
        assert.equal(await page.locator('#exit-dialog').isVisible(), false);
        if (legacy) {
          await page.locator('#exit-round').click();
          await page.keyboard.press('Escape');
          assert.equal(await page.locator('#exit-dialog').isVisible(), false);
        }
        for (let i = 0; i < 10; i++) {
          const correctModel = await page.evaluate(() => {
            const no = document.querySelector('#question-photo').getAttribute('src').match(/(\d+)\.jpg$/)[1];
            return ROBOTS.find(robot => robot.no === no).model;
          });
          const choices = page.locator('.answer');
          const labels = await choices.locator('.answer-name b').allTextContents();
          await choices.nth(labels.findIndex(label => label !== correctModel)).click();
          await page.locator('#next-question').click();
        }
        assert.match(await page.locator('.result-welcome h1').innerText(), /未来博士/);
        await page.locator('#review-result').click();
        assert.equal(await page.locator('.mistake-card').count(), 10);
        await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth));
        if (viewport.width === 1920) assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'All ten mistakes fit a landscape screen');
        await page.locator('#review-home').click();
        await page.locator('[data-nickname="未来博士"]').click();
        await page.locator('.start-button').click();
        await page.locator('#exit-round').click();
        await page.locator('#confirm-exit').click();
        assert.equal(await page.locator('.start-button').count(), 1);
        await page.reload();
        await page.locator('#last-round').click();
        assert.equal(await page.locator('.mistake-card').count(), 10);
        assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('robot-game-exhibition-v1')).records.length), 1);
        assert.deepEqual(errors, []);
        console.log(`PASS: ${legacy ? 'Chrome 88 constraints' : 'native'} ${viewport.width}x${viewport.height}; homepage, exit, full round, ten mistakes, persisted count`);
        await context.close();
      }
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
