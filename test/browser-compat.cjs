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
      for (const viewport of [{ width: 1080, height: 1720 }, { width: 1080, height: 1920 }, { width: 720, height: 1280 }, { width: 2160, height: 3840 }, { width: 1920, height: 1080 }, { width: 390, height: 844 }]) {
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
        await page.locator('#archive-entry').click();
        await page.locator('[data-screen="archive"]').waitFor();
        assert.equal(await page.locator('.archive-card').count(), 8);
        if (viewport.width >= 601) {
          assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'Archive list fits the exhibition screen');
          assert(await page.locator('.archive-photo').evaluateAll(photos=>photos.every(photo=>photo.getBoundingClientRect().height>40)), 'Each card leaves space for a full robot photo');
        }
        assert.equal(await page.locator('a[target="_blank"]').count(), 0);
        await page.locator('#archive-next').click();
        const secondPageId = await page.locator('.archive-card').first().getAttribute('data-robot');
        await page.locator('.archive-card').first().click();
        await page.locator('[data-screen="robot"]').waitFor();
        assert.equal(await page.locator('.robot-detail').getAttribute('data-robot'), secondPageId);
        if (viewport.width >= 601) assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'Detail controls fit the exhibition screen');
        await page.locator('[data-tab="tech"]').click();
        assert((await page.locator('#detail-content').innerText()).length > 20);
        await page.locator('#archive-back').click();
        assert.equal(await page.locator('#archive-page').innerText(), '2 / 19');
        await page.locator('#archive-search').fill('4ne-1');
        await page.locator('#archive-search-form').evaluate(form=>form.requestSubmit());
        assert.equal(await page.locator('.archive-card').count(), 1);
        await page.locator('.archive-card').click();
        await page.goBack();
        await page.locator('[data-screen="archive"]').waitFor();
        assert.equal(await page.locator('#archive-search').inputValue(), '4ne-1');
        await page.locator('#archive-search').fill('不存在的机器人');
        await page.locator('#archive-search-form').evaluate(form=>form.requestSubmit());
        assert(await page.locator('#archive-empty').isVisible());
        await page.locator('#archive-clear').click();
        assert.equal(await page.locator('.archive-card').count(), 8);
        await page.locator('.archive-card').first().click();
        await page.locator('#archive-start').click();
        await page.locator('.answer:not(:disabled)').first().waitFor();
        assert.match(await page.locator('.round-player').innerText(), /小小观察员/);
        await page.locator('#nav-archive').click();
        assert(await page.locator('#exit-dialog').isVisible());
        await page.locator('#continue-round').click();
        assert.equal(await page.locator('[data-screen="quiz"]').count(), 1);
        await page.goBack();
        await page.locator('#exit-dialog[open]').waitFor();
        assert.equal(await page.locator('#confirm-exit').innerText(), '前往档案馆');
        await page.locator('#continue-round').click();
        assert.equal(await page.locator('[data-screen="quiz"]').count(), 1);
        assert.equal(await page.evaluate(()=>location.hash), '#quiz');
        await page.locator('#nav-archive').click();
        await page.locator('#confirm-exit').click();
        await page.locator('[data-screen="archive"]').waitFor();
        await page.locator('#nav-home').click();
        await page.locator('#player-name').fill('星'.repeat(13));
        await page.locator('.start-button').click();
        assert(await page.locator('#name-error').innerText());
        await page.locator('#player-name').fill('');
        await page.locator('.start-button').click();
        await page.locator('.answer:not(:disabled)').first().waitFor();
        assert.match(await page.locator('.round-player').innerText(), /小小观察员/);
        await page.locator('#exit-round').click();
        await page.locator('#confirm-exit').click();
        assert.equal(await page.locator('#exit-dialog').isVisible(), false, 'Exit dialog stays hidden on homepage');
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        assert(await page.locator('.shell').evaluate(el => el.getBoundingClientRect().height >= innerHeight - 1));
        if (viewport.width === 1920) assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1));
        const portraitKiosk = viewport.width >= 601 && viewport.height > viewport.width;
        if (portraitKiosk) {
          const layout = await page.evaluate(() => {
            const rect = selector => document.querySelector(selector).getBoundingClientRect().toJSON();
            return { intro: rect('.welcome-copy'), header: rect('.masthead'), hero: rect('.welcome-photos'), signup: rect('.challenge-panel'), start: rect('.start-button'), nickname: rect('[data-nickname]'), height: innerHeight, scroll: document.documentElement.scrollHeight };
          });
          assert(layout.intro.top - layout.header.bottom < viewport.height * .08, 'Portrait content starts near header, without a large empty band');
          assert(layout.signup.top >= layout.intro.bottom - 1, 'Portrait actions sit directly below introduction');
          assert(layout.hero.top >= layout.signup.bottom - 1, 'Portrait photos follow the actions');
          assert(layout.start.height >= 48 && layout.nickname.height >= 44, 'Portrait controls have touch targets');
          assert(layout.signup.bottom <= viewport.height - 10, 'Registration fits on screen');
          assert(layout.scroll <= viewport.height + 1, 'Portrait homepage fits one screen');
        }
        if (process.env.QA_SCREENSHOT_DIR) {
          fs.mkdirSync(process.env.QA_SCREENSHOT_DIR, { recursive: true });
          await page.screenshot({ path: path.join(process.env.QA_SCREENSHOT_DIR, `${legacy ? 'chrome88' : 'native'}-${viewport.width}-${viewport.height}.png`), fullPage: true });
        }
        await page.locator('[data-nickname="未来博士"]').click();
        await page.locator('.start-button').click();
        await page.locator('.answer:not(:disabled)').first().waitFor();
        if (portraitKiosk) {
          assert(await page.evaluate(() => document.querySelector('.answers').getBoundingClientRect().top >= document.querySelector('.question-photo').getBoundingClientRect().bottom), 'Portrait answers sit below photo');
          assert(await page.evaluate(() => document.querySelector('#next-question').getBoundingClientRect().bottom <= innerHeight), 'Next question is visible');
        }
        if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({ path: path.join(process.env.QA_SCREENSHOT_DIR, `${legacy ? 'chrome88' : 'native'}-${viewport.width}-${viewport.height}-quiz.png`), fullPage: true });
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
        if (portraitKiosk) assert(await page.evaluate(() => document.querySelector('.result-actions').getBoundingClientRect().bottom <= innerHeight), 'Result actions fit portrait screen');
        if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({ path: path.join(process.env.QA_SCREENSHOT_DIR, `${legacy ? 'chrome88' : 'native'}-${viewport.width}-${viewport.height}-result.png`), fullPage: true });
        await page.locator('#review-result').click();
        assert.equal(await page.locator('.mistake-card').count(), 10);
        await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth));
        if (viewport.width === 1920) assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'All ten mistakes fit a landscape screen');
        if (portraitKiosk) {
          assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'All ten mistakes fit portrait screen');
          assert.equal(await page.locator('.mistakes-grid').evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 2, 'Portrait review uses two columns');
        }
        if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({ path: path.join(process.env.QA_SCREENSHOT_DIR, `${legacy ? 'chrome88' : 'native'}-${viewport.width}-${viewport.height}-review.png`), fullPage: true });
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
        if (portraitKiosk) {
          const completed = await page.evaluate(() => localStorage.getItem('robot-game-exhibition-v1'));
          for (const count of [1, 4, 6, 0]) {
            await page.evaluate(({ completed, count }) => {
              const state = JSON.parse(completed);
              state.lastRound.answers.forEach((answer, index) => { if (index >= count) answer.selected = answer.question; });
              localStorage.setItem('robot-game-exhibition-v1', JSON.stringify(state));
            }, { completed, count });
            await page.goto(`http://127.0.0.1:${server.address().port}/#review`);
            await page.reload();
            assert.equal(await page.locator('.mistake-card').count(), count);
            await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth));
            assert(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), `${count} mistakes fit portrait screen`);
            if (count) assert(await page.locator('.mistake-photo').evaluateAll(elements => elements.every(el => el.getBoundingClientRect().height > 30)), 'Review photos have space');
          }
        }
        assert.deepEqual(errors, []);
        console.log(`PASS: ${legacy ? 'Chrome 88 constraints' : 'native'} ${viewport.width}x${viewport.height}; archive search/detail/back, optional nickname, navigation guard, full round, review, storage`);
        await context.close();
      }
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
