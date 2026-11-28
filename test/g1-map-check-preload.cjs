const assert = require('node:assert/strict');
const {createReadStream, mkdirSync, statSync} = require('node:fs');
const {createServer} = require('node:http');
const path = require('node:path');
const {chromium} = require(process.env.PLAYWRIGHT_CORE_PATH || 'C:/Users/13229/.codex/skills/browser-qa/node_modules/playwright-core');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'work/g1-map-check');
const types = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css'};
const server = createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = path.resolve(root, '.' + (pathname.endsWith('/') ? `${pathname}index.html` : pathname));
  if (!file.startsWith(root + path.sep) || !statSync(file, {throwIfNoEntry: false})?.isFile()) {
    return response.writeHead(404).end();
  }
  response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
  createReadStream(file).pipe(response);
});

async function check(browser, url) {
  const page = await browser.newPage({viewport: {width: 1080, height: 1920}, deviceScaleFactor: 2});
  const messages = [];
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.exposeFunction('saveBenchmarkMessage', message => messages.push(message));
  await page.addInitScript(() => {
    if (window !== window.top) return;
    window.addEventListener('message', event => {
      if (event.origin === location.origin && event.source === document.querySelector('#run iframe')?.contentWindow) {
        window.saveBenchmarkMessage(event.data.type);
      }
    });
  });
  let releaseModel;
  const modelGate = new Promise(resolve => { releaseModel = resolve; });
  const modelPath = '**/nearfield/training-ground.glb';
  await page.route(modelPath, async route => { await modelGate; await route.continue(); });
  await page.goto(url);
  const request = page.waitForRequest(modelPath);
  await page.locator('#start').click();
  await request;
  const begin = page.getByRole('button', {name: '开始计分'});
  await page.locator('#progress').filter({hasText: '正在加载模型'}).waitFor({timeout: 4000});
  assert.equal(await begin.isVisible(), false);
  assert(!messages.includes('progress'));
  releaseModel();
  await begin.waitFor({timeout: 30000});
  const iframe = page.locator('#run iframe');
  const box = await iframe.boundingBox();
  const viewport = await page.evaluate(() => ({width: innerWidth, height: innerHeight}));
  assert.deepEqual(box, {x: 0, y: 0, ...viewport});
  const frame = page.frameLocator('#run iframe');
  assert(await frame.locator('canvas').isVisible());
  assert(!messages.includes('progress'));
  await page.screenshot({path: path.join(output, 'preload-ready.png')});
  await begin.click();
  await page.locator('#report').waitFor({timeout: 60000});
  assert.equal(await page.locator('#profiles tbody tr').count(), 6);
  assert.match(await page.locator('#report-text').inputValue(), /加载至首帧/);
  assert.deepEqual(errors, []);
  await page.unroute(modelPath);
  console.log('PASS delayed model, full viewport, visible first frame, explicit start, six scored scenes');

  await page.route(modelPath, route => route.abort());
  await page.locator('#start').click();
  await page.locator('#notice').waitFor({timeout: 25000});
  const failure = await page.locator('#notice').textContent();
  assert.match(failure, /training-ground\.glb 加载或解析失败/);
  assert.match(failure, /最后阶段 正在加载模型/);
  assert(!(await page.locator('#report').isVisible()));
  await page.unroute(modelPath);
  await page.screenshot({path: path.join(output, 'preload-failed.png'), fullPage: true});
  console.log('PASS missing model identifies resource and produces no score');

  await page.locator('button[value="endurance"]').click();
  await begin.waitFor({timeout: 25000});
  await begin.click();
  await page.locator('#progress').filter({hasText: '持续压力 · 展厅'}).waitFor();
  await page.locator('#cancel').click();
  assert.equal(await iframe.count(), 0);
  console.log('PASS sustained test waits for explicit start and can be cancelled');
  await page.close();
}

async function checkMissingGalleryAssets(browser, url) {
  const page = await browser.newPage();
  const notice = page.locator('#notice');
  const begin = page.getByRole('button', {name: '开始计分'});
  for (const file of ['modern-gallery.glb', 'modern-gallery-floor.jpg']) {
    const pattern = `**/gallery/${file}`;
    await page.route(pattern, route => route.abort());
    await page.goto(url);
    await page.locator('#start').click();
    await notice.or(begin).filter({visible: true}).waitFor({timeout: 15000});
    assert.equal(await begin.isVisible(), false, `Scoring was enabled without ${file}`);
    assert((await notice.textContent()).includes(`${file} 加载或解析失败`));
    assert.equal(await page.locator('#report').isVisible(), false);
    await page.unroute(pattern);
  }
  await page.close();
  console.log('PASS missing gallery mesh or floor texture blocks scoring and identifies the resource');
}

async function diagnostics(browser, url) {
  const page = await browser.newPage({viewport: {width: 390, height: 844}});
  await page.addInitScript(() => {
    if (window !== window.top) return;
    const original = window.setTimeout;
    window.setTimeout = (callback, delay, ...args) => original(callback, delay === 120_000 ? 1000 : delay, ...args);
  });
  await page.route('**/scene.js?*', () => {});
  await page.goto(url);
  await page.locator('#start').click();
  await page.locator('#notice').waitFor({timeout: 7000});
  assert.match(await page.locator('#notice').textContent(), /场景脚本.*超时/);
  await page.close();

  const noWebGL = await browser.newPage();
  await noWebGL.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.startsWith('webgl') || type === 'experimental-webgl' ? null : original.call(this, type, ...args);
    };
  });
  await noWebGL.goto(url);
  await noWebGL.locator('#start').click();
  await noWebGL.locator('#notice').waitFor({timeout: 10000});
  assert.match(await noWebGL.locator('#notice').textContent(), /WebGL 初始化/);
  assert(!(await noWebGL.getByRole('button', {name: '开始计分'}).isVisible()));
  await noWebGL.close();
  console.log('PASS stalled scene script and unavailable WebGL have separate diagnostics');
}

(async () => {
  mkdirSync(output, {recursive: true});
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = process.argv[2] || `http://127.0.0.1:${server.address().port}/demos/g1/map-check/`;
  const browser = await chromium.launch({executablePath: process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true});
  try {
    await checkMissingGalleryAssets(browser, url);
    await check(browser, url);
    await diagnostics(browser, url);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
