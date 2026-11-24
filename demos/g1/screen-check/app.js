import {scoreRun, summarizeFrames} from './metrics.js';

const byId = id => document.getElementById(id);
const start = byId('start');
const notice = byId('notice');
const report = byId('report');
const run = byId('run');
const progress = byId('progress');
const scenes = ['前进 / 后退', '左右转向', '机械舞'];
let activeRun;

function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new Error('测试已取消'));
      return;
    }
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', cancel);
      resolve();
    }, ms);
    function cancel() {
      clearTimeout(timer);
      reject(new Error('测试已取消'));
    }
    signal.addEventListener('abort', cancel, {once: true});
  });
}

async function waitFor(condition, timeout, message, signal) {
  const deadline = performance.now() + timeout;
  while (!condition()) {
    if (performance.now() >= deadline) throw new Error(message);
    await wait(100, signal);
  }
}

function observeFrames(canvas) {
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) throw new Error('无法读取游戏画布，请确认 Chrome 的 WebGL 支持。');
  const originalClear = gl.clear;
  let frames = null;
  let counted = false;
  // The G1 renderer clears this canvas on each actual scene render. Group
  // multiple clears in the same render and leave idle browser frames uncounted.
  gl.clear = function (mask) {
    originalClear.call(this, mask);
    if (frames && (mask & gl.COLOR_BUFFER_BIT) && !counted) {
      counted = true;
      frames.push(performance.now());
      queueMicrotask(() => { counted = false; });
    }
  };
  return {
    begin() { frames = []; },
    finish() {
      const stats = summarizeFrames(frames);
      frames = null;
      if (!stats) throw new Error('未采集到有效的场景绘制，请重试。');
      return {...stats, buffer: `${gl.drawingBufferWidth}×${gl.drawingBufferHeight}`};
    },
    restore() { gl.clear = originalClear; },
  };
}

async function holdKey(frame, key, ms, signal) {
  const child = frame.contentWindow;
  const viewer = child.document.getElementById('drive-viewer');
  const send = type => viewer.dispatchEvent(new child.KeyboardEvent(type, {key, bubbles: true, cancelable: true}));
  send('keydown');
  try {
    await wait(ms, signal);
  } finally {
    send('keyup');
  }
}

async function exerciseG1(frame, session) {
  const signal = session.controller.signal;
  const doc = () => frame.contentDocument;
  const find = id => doc().getElementById(id);
  await waitFor(() => doc().body?.dataset.ready === 'true' || find('retry')?.hidden === false,
    90000, 'G1 场景加载超时。请确认网络后重试。', signal);
  if (doc().body.dataset.ready !== 'true') throw new Error('G1 场景加载失败，本次没有性能分数。');
  const canvas = doc().querySelector('#drive-viewer canvas');
  const frames = observeFrames(canvas);
  const results = [];
  const measure = async (index, play) => {
    progress.textContent = `${index + 1} / 3 · ${scenes[index]}`;
    await play(() => frames.begin());
    results.push(frames.finish());
  };
  const width = frame.contentWindow.innerWidth;
  const height = frame.contentWindow.innerHeight;
  const pixelRatio = frame.contentWindow.devicePixelRatio;
  const fullScreen = document.fullscreenElement === run;
  const script = doc().querySelector('script[src^="app.js"]');
  const version = script ? new URL(script.src).searchParams.get('v') : null;
  const handleResize = () => {
    if (width !== frame.contentWindow.innerWidth || height !== frame.contentWindow.innerHeight) {
      cancelRun('测试过程中画面尺寸变了。请固定竖屏后再测。');
    }
  };
  frame.contentWindow.addEventListener('resize', handleResize);
  canvas.addEventListener('webglcontextlost', () => cancelRun('三维画面连接中断，本次没有性能分数。'), {once: true});
  try {
    find('source-manual').click();
    find('drive-start').click();
    await wait(600, signal);
    const moving = () => find('motion-label').textContent === '正在迈步';
    const move = async (first, second, record) => {
      const motion = (async () => {
        await holdKey(frame, first, 2900, signal);
        await holdKey(frame, second, 2600, signal);
      })();
      const check = waitFor(moving, 1400, 'G1 没有开始移动，本次没有性能分数。', signal).then(record);
      await Promise.all([motion, check]);
    };
    await measure(0, begin => move('w', 's', begin));
    await wait(650, signal);
    await measure(1, begin => move('q', 'e', begin));
    await wait(500, signal);
    find('drive-reset').click();
    find('drive-start').click();
    await measure(2, async begin => {
      const mode = doc().querySelector('[data-drive-mode="performance"]');
      mode.click();
      await waitFor(() => mode.getAttribute('aria-pressed') === 'true',
        1800, '未能进入动作表演，本次没有性能分数。', signal);
      const dance = doc().querySelector('[data-performance-action="robotdance"]');
      await waitFor(() => dance && !dance.disabled,
        1800, '机械舞快捷键不可用。请在 Chrome 无痕窗口重试。', signal);
      dance.click();
      await waitFor(() => find('motion-label').textContent === '机械舞',
        1800, 'G1 没有开始表演，本次没有性能分数。', signal);
      begin();
      await wait(3700, signal);
    });
    return {results, width, height, pixelRatio, fullScreen, version};
  } finally {
    frame.contentWindow.removeEventListener('resize', handleResize);
    frames.restore();
  }
}

function showReport(data) {
  const {results, width, height, pixelRatio, fullScreen, version} = data;
  const grade = scoreRun(results);
  const portrait = height > width;
  const verdict = !portrait ? '横屏结果 · 竖屏交付请重新测试' : grade.passed ? '达到竖屏性能参考线' : '未达到性能参考线';
  const platform = byId('platform').value || '系统版本未填';
  const browser = navigator.userAgent.match(/(?:Chrome|EdgA|Edg)\/[\d.]+/g)?.join(' · ') || '浏览器版本未识别';
  const buffers = results.map(row => row.buffer).join(' / ');
  const env = `${byId('model').value.trim() || '未填写型号'} · ${platform} · ${browser} · ${width}×${height} CSS px · DPR ${pixelRatio} · ${fullScreen ? '浏览器全屏' : '浏览器视口'}\n三维绘制像素（走路 / 转向 / 表演） ${buffers}\n游戏版本 ${version || '未标记'}`;
  byId('score').textContent = grade.score;
  byId('verdict').textContent = verdict;
  byId('verdict').dataset.passed = String(grade.passed && portrait);
  byId('environment').textContent = env;
  const rows = results.map(({fps, hitches, longest}, index) => [scenes[index], fps.toFixed(1), String(hitches), `${Math.round(longest)} ms`]);
  byId('rows').replaceChildren(...rows.map(columns => {
    const row = document.createElement('tr');
    columns.forEach((content, index) => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      if (index === 0) cell.scope = 'row';
      cell.textContent = content;
      row.append(cell);
    });
    return row;
  }));
  byId('report-text').value = `G1 展厅屏幕验收 ${grade.score}/100 · ${verdict}\n${env}\n${rows.map(([label, fps, hitches, longest]) => `${label} ${fps} FPS，卡顿 ${hitches} 次，最长 ${longest}`).join('\n')}\n手柄映射与震动：本次未测`;
  byId('report-text').hidden = true;
  byId('copy-status').textContent = '也可以直接拍摄这张结果卡。';
  report.hidden = false;
  report.scrollIntoView({block: 'nearest'});
}

function cancelRun(reason) {
  if (!activeRun) return;
  activeRun.reason = reason;
  activeRun.controller.abort();
}

start.addEventListener('click', async () => {
  if (activeRun) return;
  const session = {controller: new AbortController(), reason: ''};
  activeRun = session;
  start.disabled = true;
  notice.hidden = true;
  report.hidden = true;
  run.hidden = false;
  progress.textContent = '正在加载 G1，加载时间不计入分数';
  const frame = document.createElement('iframe');
  frame.title = 'G1 驾驶画面';
  try {
    if (run.requestFullscreen && document.fullscreenEnabled && !document.fullscreenElement) {
      try { await run.requestFullscreen(); } catch { /* Continue at the available viewport size. */ }
    }
    frame.src = '../drive/';
    run.prepend(frame);
    const result = await exerciseG1(frame, session);
    showReport(result);
  } catch (error) {
    notice.textContent = session.reason || error.message || '测试中断，请重试。';
    notice.hidden = false;
  } finally {
    session.controller.abort();
    frame.remove();
    if (document.fullscreenElement === run) {
      try { await document.exitFullscreen(); } catch { /* The browser may exit on its own. */ }
    }
    run.hidden = true;
    start.disabled = false;
    activeRun = null;
  }
});
byId('cancel').addEventListener('click', () => cancelRun('本次测试已结束，点击开始可重新测试。'));
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelRun('测试时页面切到了后台。请保持本页前台显示，再重测。');
});
byId('copy').addEventListener('click', async () => {
  const text = byId('report-text');
  try {
    await navigator.clipboard.writeText(text.value);
    byId('copy-status').textContent = '结果已复制。';
  } catch {
    text.hidden = false;
    text.focus();
    text.select();
    byId('copy-status').textContent = '长按选中的文本并复制，或拍照回传。';
  }
});
