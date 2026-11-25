const byId = id => document.getElementById(id);
const run = byId('run');
const notice = byId('notice');
const report = byId('report');
const copyText = byId('report-text');
let active;

function element(tag, text) {
  const node = document.createElement(tag);
  node.textContent = text;
  return node;
}

function renderProfile(profile, endurance) {
  const {label, buffer, rows, passed} = profile;
  const title = `${label} · ${passed ? '达到参考线' : '未达到参考线'}`;
  const article = document.createElement('article');
  article.append(element('h3', title), element('p', `实际 WebGL 绘制 ${buffer} px`));
  const wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  wrap.tabIndex = 0;
  wrap.setAttribute('role', 'region');
  wrap.setAttribute('aria-label', `${label}结果表`);
  const table = document.createElement('table');
  const head = table.createTHead().insertRow();
  const columns = ['场景', '平均 FPS', 'P95 (ms)', '卡顿 / 最长', '结果'];
  if (endurance) columns.splice(2, 0, '最低段 FPS');
  for (const column of columns) {
    const cell = element('th', column);
    cell.scope = 'col';
    head.append(cell);
  }
  const body = table.createTBody();
  const text = [`${title} · 绘制 ${buffer} px`];
  for (const row of rows) {
    const tr = body.insertRow();
    const cell = element('th', row.label);
    cell.scope = 'row';
    tr.append(cell);
    const hitches = `${row.hitches} 次 / ${Math.round(row.longest)} ms`;
    const values = [row.fps.toFixed(1), row.p95.toFixed(1), hitches, row.passed ? '通过' : '未通过'];
    if (endurance) values.splice(1, 0, row.worstFps.toFixed(1));
    for (const value of values) tr.append(element('td', value));
    const worst = endurance ? `，最低段 ${row.worstFps.toFixed(1)} FPS` : '';
    text.push(`${row.label} · ${row.fps.toFixed(1)} FPS${worst}，P95 ${row.p95.toFixed(1)} ms，卡顿 / 最长 ${hitches}，峰值绘制 ${row.calls} 次 / ${row.triangles} 三角面，${row.passed ? '通过' : '未通过'}`);
  }
  wrap.append(table);
  article.append(wrap);
  return {article, text: text.join('\n')};
}

function showResult(data, session) {
  const {results, width, height, pixelRatio, map, date, gpu} = data;
  const portrait = height > width;
  const software = /swiftshader|llvmpipe|software rasterizer/i.test(gpu);
  let verdict = '新版地图与余量压力均达到参考线';
  if (session.endurance) verdict = results[0].passed ? '持续压力达到参考线' : '持续压力未达到参考线';
  else if (!results[0].passed) verdict = '新版地图未达到参考线';
  else if (!results[1].passed) verdict = '新版地图达到参考线，余量压力未达到参考线';
  if (!portrait) verdict = '当前为横屏，竖屏交付请重测';
  else if (software) verdict = '浏览器正在使用软件渲染，请核对硬件加速后重测';
  const details = [
    `${session.model} · ${session.platform} · ${navigator.userAgent.match(/(?:Chrome|EdgA|Edg)\/[\d.]+/g)?.join(' · ') || '浏览器版本未识别'}`,
    `${width}×${height} CSS px · DPR ${pixelRatio.toFixed(2)} · ${session.fullscreen ? '浏览器全屏' : '浏览器视口'}`,
    `场景 ${date} (${map}) · ${gpu || '图形设备未公开'}`,
  ];
  byId('verdict').textContent = verdict;
  byId('verdict').dataset.passed = String(portrait && !software && results.every(result => result.passed));
  byId('environment').textContent = details.join('\n');
  const profiles = results.map(result => renderProfile(result, session.endurance));
  byId('profiles').replaceChildren(...profiles.map(profile => profile.article));
  copyText.value = [`G1 新地图屏幕采购压测 · ${verdict}`, ...details, ...profiles.map(profile => profile.text), '手柄本次未测'].join('\n');
  copyText.hidden = true;
  byId('copy-status').textContent = '也可以拍照回传。';
  report.hidden = false;
  report.scrollIntoView({block: 'start'});
}

function closeTest() {
  const session = active;
  active = null;
  clearTimeout(session.watchdog);
  session.frame.remove();
  if (document.fullscreenElement === run) document.exitFullscreen().catch(() => {});
  run.hidden = true;
  document.body.classList.remove('running');
}

function cancel(message) {
  if (!active) return;
  closeTest();
  notice.textContent = message;
  notice.hidden = false;
}

byId('setup').addEventListener('submit', async event => {
  event.preventDefault();
  if (active) return;
  report.hidden = true;
  notice.hidden = true;
  run.hidden = false;
  document.body.classList.add('running');
  byId('progress').textContent = '正在加载写实地图';
  const frame = document.createElement('iframe');
  frame.title = '写实地图压测画面';
  const session = active = {
    frame, endurance: event.submitter?.value === 'endurance',
    model: byId('model').value.trim() || '型号未填写',
    platform: byId('platform').value || '系统版本未填写',
  };
  if (run.requestFullscreen && document.fullscreenEnabled) {
    try { await run.requestFullscreen(); } catch { /* Use and report the available viewport. */ }
  }
  if (active !== session) return;
  session.fullscreen = document.fullscreenElement === run;
  frame.onload = () => frame.contentWindow.postMessage({type: 'start', endurance: session.endurance}, location.origin);
  frame.src = 'scene.html?v=1';
  session.watchdog = setTimeout(() => cancel('写实地图加载超时，请检查网络后重试。'), 90_000);
  run.prepend(frame);
});

addEventListener('message', event => {
  if (!active || event.origin !== location.origin || event.source !== active.frame.contentWindow) return;
  const data = event.data;
  if (data.type === 'progress') {
    clearTimeout(active.watchdog);
    active.watchdog = setTimeout(() => cancel('画面长时间未响应，请重试并记录卡顿现象。'), 30_000);
    byId('progress').textContent = data.label;
  } else if (data.type === 'result') {
    const session = active;
    closeTest();
    showResult(data, session);
  } else if (data.type === 'failed') cancel(data.message);
});

document.addEventListener('fullscreenchange', () => {
  if (active?.fullscreen && document.fullscreenElement !== run) cancel('已退出全屏，保持测试页面全屏后可重测。');
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancel('测试已切换到后台，请保持页面在前台后重测。');
});
byId('cancel').addEventListener('click', () => cancel('本次测试已结束，可以重新开始。'));
byId('copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyText.value);
    byId('copy-status').textContent = '已复制，可以发回测试结果。';
  } catch {
    copyText.hidden = false;
    copyText.focus();
    copyText.select();
    byId('copy-status').textContent = '请复制选中的文字，或拍照回传。';
  }
});
