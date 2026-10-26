(function () {
  'use strict';
  const Game = ExhibitionGame;
  const $ = id => document.getElementById(id);
  const key = 'robot-game-exhibition-v1';
  const theme = new URLSearchParams(location.search).get('theme');
  const themes = {
    garden: { title: '机器人<br>探险乐园', subtitle: '睁大眼睛，发现未来的好朋友。', label: 'HELLO, FUTURE FRIENDS', chip: '小小观察家，集合！', cta: '出发，认识机器人', club: 'ROBOT EXPLORERS CLUB', footer: '每一次认真观察，都藏着一个新发现。', hero: '143', side: '26', badge: '未来朋友<br>等待发现', signup: '先给自己取个探险昵称' },
    orbit: { title: '星际任务<br>即刻启动', subtitle: '识别机器人，解锁你的未来探索力。', label: 'MISSION / ROBOT IDENTIFICATION', chip: '下一位星际观察员，就是你', cta: '启动识别任务', club: 'FUTURE MISSION CONTROL', footer: '好奇心已就位，下一站：机器人世界。', hero: '26', side: '143', badge: 'MISSION<br>READY', signup: '输入你的任务代号' },
    lab: { title: '下一位<br>机器人专家', subtitle: '你认识它们吗？用眼睛发现科技的秘密。', label: 'THE ROBOT OBSERVATION LAB', chip: '欢迎来到机器人研究所', cta: '开启我的研究任务', club: 'OBSERVE / DISCOVER / LEARN', footer: '带着好奇心来，带着新知识走。', hero: '3', side: '143', badge: '观察<br>发现<br>认识', signup: '登记你的研究员昵称' }
  };
  const direction = Object.prototype.hasOwnProperty.call(themes, theme) ? theme : 'lab';
  const config = themes[direction];
  document.body.className = direction;
  document.title = config.title.replace('<br>', '') + ' · 机器人识图挑战';
  $('brand-sub').textContent = config.club;
  $('footer-message').textContent = config.footer;
  let saved;
  try { saved = Game.restore(localStorage.getItem(key)); } catch { saved = Game.freshState(); $('storage-note').hidden = false; }
  let round = null, prepared = null, options = [], questionIndex = 0, questionStart = null, locked = false, timer = null, elapsed = 0, reviewIndex = 0;
  const main = $('main');
  const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const robot = no => ROBOTS.find(r => r.no === no);
  const nameOf = r => esc(r.model);
  const formatSeconds = ms => (ms / 1000).toFixed(1);
  function updateCount() { document.querySelectorAll('[data-total]').forEach(el => el.textContent = Game.totalParticipants(saved).toLocaleString('en-US')); }
  function persist() { try { localStorage.setItem(key, JSON.stringify(saved)); } catch { $('storage-note').hidden = false; } }
  function enter(markup, screen, focus = true) {
    clearInterval(timer); timer = null;
    main.dataset.screen = screen;
    document.body.classList.toggle('archive-active', screen === 'archive' || screen === 'robot');
    main.innerHTML = markup;
    window.scrollTo(0, 0);
    $('nav-home').setAttribute('aria-current', screen === 'home' ? 'page' : 'false');
    $('nav-archive').setAttribute('aria-current', ['archive','robot'].includes(screen) ? 'page' : 'false');
    updateCount();
    if (focus) { const heading = main.querySelector('h1'); if (heading) {heading.tabIndex = -1;heading.focus({preventScroll:true});} }
  }
  function prepare() {
    const order = Quiz.buildOrder(PHOTO_LIST, ROBOTS);
    prepared = Quiz.pickRound(order.order, order.photoFiles, 10);
    prepared.photoFiles.forEach(file => { const img = new Image(); img.src = 'photos/' + file; });
  }
  function home(focus = true) {
    round = null;
    const featured = [config.hero, config.side, '26', '3'].filter((no,i,all)=>all.indexOf(no)===i).slice(0,3);
    enter(`<section class="exhibition-home">
      <div class="welcome-copy"><span class="intro-chip"><i aria-hidden="true"></i>${config.chip}</span><p class="eyebrow">${config.label}</p><h1>${config.title}<span class="welcome-star" aria-hidden="true">✳</span></h1><p class="welcome-lead">${config.subtitle}</p><div class="welcome-spec"><span><b>150</b> 台机器人</span><span><b>10</b> 道随机挑战</span><span>没有倒计时 · 慢慢观察</span></div></div>
      <div class="welcome-photos" aria-label="机器人照片展示">${featured.map((no,i)=>{const r=robot(no);return `<figure class="welcome-card"><div><img src="photos/${no}.jpg" alt="${nameOf(r)} 机器人完整照片"></div><figcaption><span><b>${nameOf(r)}</b><small>${esc(r.brand)}</small></span><span>0${i+1}</span></figcaption></figure>`;}).join('')}<p class="welcome-photo-note">真实机器人照片 <span>LOOK CLOSELY / 每一位都独一无二</span></p></div>
      <div class="welcome-actions"><form class="challenge-panel" id="name-form" novalidate><span class="section-number">01 / 看照片，认机器人</span><h2>你的观察力，<br>准备好了吗？</h2><p class="challenge-description">选出正确型号，完成你的 10 道挑战。</p><button class="primary start-button" type="submit">开始挑战 <span aria-hidden="true">→</span></button><p class="start-hint">无需填写信息，点击即可开始</p><div class="welcome-name"><label for="player-name">留下你的挑战昵称 <span>选填 · 最多 12 个字</span></label><input id="player-name" name="nickname" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="不填也可以，你就是小小观察员" aria-describedby="name-error"><div class="welcome-names" aria-label="快速选择昵称"><button type="button" data-nickname="小小工程师">小小工程师</button><button type="button" data-nickname="闪电队长">闪电队长</button><button type="button" data-nickname="未来博士">未来博士</button></div><p id="name-error" class="welcome-error" role="alert"></p></div><button type="button" class="welcome-last" id="last-round" ${saved.lastRound?'':'disabled'}>${saved.lastRound?'回看上一局错题 ↗':'完成挑战后，可在这里回看错题'}</button></form>
      <button class="welcome-archive" id="archive-entry"><span class="section-number">02 / 先认识，再挑战</span><span class="welcome-archive-title">机器人档案馆 <span aria-hidden="true">↗</span></span><span class="welcome-archive-description">150 台机器人 · 了解它们的技术与应用</span></button></div>
    </section>`, 'home', focus);
    $('name-form').addEventListener('submit', event => { event.preventDefault(); try { start(Game.normalizeName($('player-name').value.trim() || '小小观察员')); } catch (e) { $('name-error').textContent = e.message; $('player-name').setAttribute('aria-invalid','true'); $('player-name').focus(); } });
    $('player-name').addEventListener('input',()=>{ $('name-error').textContent=''; $('player-name').removeAttribute('aria-invalid'); document.querySelectorAll('[data-nickname]').forEach(b=>b.classList.toggle('picked',b.dataset.nickname===$('player-name').value)); });
    document.querySelectorAll('[data-nickname]').forEach(b=>b.addEventListener('click',()=>{ $('player-name').value=b.dataset.nickname; $('player-name').dispatchEvent(new Event('input')); }));
    $('last-round').addEventListener('click',()=>{reviewIndex=0;review();});
    $('archive-entry').addEventListener('click',()=>navigate('#archive'));
    prepare();
  }
  function start(name) {
    history.pushState(null, '', '#quiz');
    if (!prepared) prepare();
    round = { id: globalThis.crypto?.randomUUID?.() || Date.now() + '-' + Math.random().toString(36).slice(2), name, answers: [] };
    round.order = prepared.order; round.photoFiles = prepared.photoFiles; prepared = null;
    questionIndex = 0; elapsed = 0;
    showQuestion();
  }
  function photoMarkup(file, alt, id = '') {
    return `<div class="question-image"><span class="photo-corner" aria-hidden="true"></span><img ${id ? `id="${id}"` : ''} src="photos/${esc(file)}" alt="${esc(alt)}"><p class="photo-error" hidden>这张照片暂时打不开，请返回首页重新开始。</p></div>`;
  }
  function wirePhoto() {
    const img = main.querySelector('.question-image img');
    const ready = () => { if (main.dataset.screen !== 'quiz') return; questionStart = dialog.hasAttribute('open') ? null : performance.now(); main.querySelectorAll('.answer').forEach(b=>b.disabled=false); $('feedback').textContent = '仔细看看它的外形，选一个答案吧。'; };
    img.addEventListener('error', () => { img.hidden = true; img.nextElementSibling.hidden = false; if (main.dataset.screen==='quiz') {questionStart=null;main.querySelectorAll('.answer').forEach(b=>b.disabled=true);$('feedback').textContent='照片加载失败，本题不会计分。请返回首页重试。';} });
    if (img.complete && img.naturalWidth > 0) ready(); else img.addEventListener('load', ready, {once:true});
  }
  function showQuestion() {
    locked = false; questionStart = null;
    const target = round.order[questionIndex];
    options = Quiz.makeOptions(target, ROBOTS, 3);
    enter(`<section class="quiz-screen"><div class="round-top"><button class="secondary compact" id="exit-round">返回首页</button><div class="round-player">观察员 <b>${esc(round.name)}</b></div><div class="timer"><span>答题用时</span><b id="timer">${formatSeconds(elapsed)}</b><span>秒</span></div></div>
      <div class="question-top"><div><p class="eyebrow">ROBOT IDENTIFICATION</p><h1>你认识这位机器人吗？</h1></div><div class="question-number"><b>${String(questionIndex + 1).padStart(2,'0')}</b><span> / 10</span></div></div>
      <div class="progress" aria-label="答题进度">${Array.from({length:10},(_,i)=>`<span class="${i<questionIndex?'done':i===questionIndex?'current':''}"></span>`).join('')}</div>
      <div class="question-layout"><figure class="question-photo">${photoMarkup(round.photoFiles[questionIndex], '待识别的机器人照片', 'question-photo')}<figcaption>认真观察，再选出它的型号 <span>LOOK CLOSELY ↗</span></figcaption></figure>
        <div class="answer-panel"><p class="answer-prompt">这张照片里的机器人是？</p><div class="answers">${options.map((o,i)=>`<button class="answer" data-option="${i}" disabled><span class="answer-letter">${'ABCD'[i]}</span><span class="answer-name"><b>${nameOf(o)}</b><small>${esc(o.brand)}</small></span><span class="answer-mark" aria-hidden="true"></span></button>`).join('')}</div><p id="feedback" class="feedback" role="status" aria-live="polite">照片准备中…</p><button class="primary" id="next-question" disabled>${questionIndex===9?'查看我的成绩':'下一题'} <span aria-hidden="true">→</span></button></div></div>
    </section>`, 'quiz');
    $('exit-round').addEventListener('click', () => navigate('#home'));
    main.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>answer(Number(b.dataset.option))));
    $('next-question').addEventListener('click', () => { if (!locked) return; questionIndex++; if (questionIndex===10) finish();else showQuestion(); });
    wirePhoto();
    timer = setInterval(()=>{if($('timer'))$('timer').textContent=formatSeconds(elapsed + (questionStart !== null && !locked ? performance.now()-questionStart : 0));},100);
  }
  function answer(index) {
    if (locked || questionStart === null) return;
    locked = true;
    const previousAnswerTime = round.answers.reduce((sum,a)=>sum+a.elapsedMs,0);
    const questionElapsed = elapsed - previousAnswerTime + performance.now()-questionStart;
    elapsed = previousAnswerTime + questionElapsed; questionStart = null;
    const question = round.order[questionIndex], selected = options[index];
    round.answers.push({ question: {...question}, selected: {...selected}, photo: round.photoFiles[questionIndex], elapsedMs: questionElapsed });
    main.querySelectorAll('.answer').forEach((b,i)=>{ b.disabled=true; const correct=options[i].no===question.no; b.classList.toggle('correct',correct); b.classList.toggle('wrong',i===index&&!correct); if(correct) b.querySelector('.answer-mark').textContent='✓ 正确'; else if(i===index)b.querySelector('.answer-mark').textContent='× 你选的'; });
    $('feedback').textContent = selected.no===question.no ? '答对啦！你的观察真仔细。' : `又认识一位新朋友！正确答案是 ${question.model}。`;
    $('next-question').disabled = false;
  }
  function finish() {
    const snapshot = { id:round.id, name:round.name, answers:round.answers };
    saved = Game.completeRound(saved, snapshot); persist(); round=null;
    result();
  }
  function result() {
    const last = saved.lastRound; if (!last) return home();
    history.replaceState(null, '', '#result');
    const score = last.result;
    const mistakes = Game.wrongAnswers(last);
    const title = score.correct===10?'机器人识别大师！':score.correct>=7?'你是出色的观察员！':'每一次发现，都很了不起！';
    enter(`<section class="result-screen"><div class="result-welcome"><p class="eyebrow">MISSION COMPLETE / 挑战完成</p><h1><span>${esc(last.name)}</span>，${title}</h1><p>今天，你又向未来靠近了一步。</p></div>
      <div class="result-layout"><div class="score-medal"><div class="medal-orbit" aria-hidden="true"></div><div class="medal-star" aria-hidden="true">✳</div><span>本次答对</span><p><b>${score.correct}</b><small> / 10</small></p><strong>${score.correct===10?'满分达成':'探索不停步'}</strong></div>
      <div class="result-details"><div class="surpassed"><span>这一次，你超越了</span><p><b>${score.surpassed.toLocaleString('en-US')}</b> <span>位挑战者</span></p></div><div class="result-stats"><div><span>答题用时</span><b>${formatSeconds(score.elapsedMs)}<small> 秒</small></b></div><div><span>正确率</span><b>${score.correct*10}<small> %</small></b></div><div><span>累计参与</span><b>${score.total.toLocaleString('en-US')}<small> 人次</small></b></div></div></div></div>
      <div class="result-actions"><button class="primary" id="review-result">${mistakes.length?`回看这局的 ${mistakes.length} 道错题`:'满分！查看本局回顾'} <span aria-hidden="true">↗</span></button><button class="secondary" id="play-again">下一位 / 再玩一次 <span aria-hidden="true">→</span></button></div>
    </section>`, 'result');
    $('review-result').addEventListener('click',()=>{reviewIndex=0;review();});
    $('play-again').addEventListener('click',()=>navigate('#home'));
  }
  function review() {
    const last = saved.lastRound; if(!last)return home();
    history.replaceState(null, '', '#review');
    const mistakes = Game.wrongAnswers(last);
    if (!mistakes.length) {
      enter(`<section class="empty-review"><span class="empty-symbol" aria-hidden="true">✓</span><p class="eyebrow">PERFECT OBSERVATION</p><h1>${esc(last.name)}，这局没有错题！</h1><p>10 位机器人朋友，你全部认对啦。</p><div class="actions"><button class="primary" id="back-result">返回成绩</button><button class="secondary" id="review-home">下一位挑战者</button></div></section>`, 'review');
    } else if (direction === 'lab') {
      const columns = mistakes.length <= 5 ? mistakes.length : Math.ceil(mistakes.length / 2);
      const cards = mistakes.map((a, i) => {
        const original = last.answers.indexOf(a) + 1;
        return `<article class="mistake-card" aria-label="原挑战第 ${original} 题的错题回顾">
          <header class="mistake-card-heading"><span class="mistake-order">${String(i + 1).padStart(2,'0')}</span><span>原挑战 · 第 ${original} 题</span></header>
          <div class="mistake-photo"><img src="photos/${esc(a.photo)}" alt="${nameOf(a.question)} 机器人完整照片"><p class="mistake-photo-error" hidden>照片暂时无法显示</p></div>
          <div class="mistake-answers"><p class="mistake-selected"><span>× 你选了</span><b>${nameOf(a.selected)}</b></p><div class="mistake-correct"><span>✓ 正确答案</span><h2>${nameOf(a.question)}</h2><small>${esc(a.question.brand)}</small></div></div>
        </article>`;
      }).join('');
      enter(`<section class="review-overview" data-count="${mistakes.length}" style="--review-columns:${columns};--review-rows:${mistakes.length > 5 ? 2 : 1}">
        <div class="review-overview-heading"><div><p class="eyebrow">OBSERVATION ARCHIVE / 上一局错题总览</p><h1>${esc(last.name)}的错题发现墙</h1><p class="review-overview-intro">把这些机器人朋友，再认识一次。</p></div><p class="review-overview-count"><b>${mistakes.length}</b><span>道错题<br>全部在这里</span></p></div>
        <div class="mistakes-grid" aria-label="本局全部错题">${cards}</div>
        <div class="review-overview-actions"><button class="secondary" id="back-result">← 返回成绩</button><p>看看外形，记住它们的名字。<br>每一次回顾，都是新的发现。</p><button class="primary" id="review-home">下一位挑战者 <span aria-hidden="true">→</span></button></div>
      </section>`, 'review');
      main.querySelectorAll('.mistake-photo img').forEach(img => {
        const failed = () => { img.hidden = true; img.nextElementSibling.hidden = false; };
        img.addEventListener('error', failed, { once: true });
        if (img.complete && !img.naturalWidth) failed();
      });
    } else {
      const a = mistakes[reviewIndex], q = a.question;
      const original = last.answers.findIndex(x=>x===a)+1;
      enter(`<section class="review-screen"><div class="question-top"><div><p class="eyebrow">LEARN IT AGAIN / 上一局错题回放</p><h1>${esc(last.name)}，再认识它一次</h1></div><div class="question-number"><b>${reviewIndex+1}</b><span> / ${mistakes.length} 道错题</span></div></div><div class="review-layout"><figure class="question-photo">${photoMarkup(a.photo, q.model+' 机器人全貌')}<figcaption>原挑战 · 第 ${original} 题 <span>完整照片</span></figcaption></figure><div class="review-answer"><span class="section-number">记住这位新朋友</span><h2>${nameOf(q)}</h2><p class="robot-brand">${esc(q.brand)}</p><div class="robot-facts"><span>${esc(q.country||'')} · ${esc(q.year||'')} 年</span></div><div class="answer-comparison"><div class="previous-choice"><span>× 当时你选了</span><b>${nameOf(a.selected)}</b><small>${esc(a.selected.brand)}</small></div><div class="right-choice"><span>✓ 正确答案</span><b>${nameOf(q)}</b><small>${esc(q.brand)}</small></div></div><p class="review-tip">看看它的头部、手臂和身体轮廓，<br>下次遇见它，一定会更熟悉。</p></div></div><div class="review-controls"><button class="secondary" id="back-result">返回成绩</button><div class="pager"><button class="secondary" id="prev-mistake" ${reviewIndex===0?'disabled':''}>← 上一道</button><span>${reviewIndex+1} / ${mistakes.length}</span><button class="primary" id="next-mistake">${reviewIndex===mistakes.length-1?'回放完成':'下一道 →'}</button></div><button class="quiet" id="review-home">回首页</button></div></section>`, 'review');
      wirePhoto();
      $('prev-mistake').addEventListener('click',()=>{if(reviewIndex>0){reviewIndex--;review();}});
      $('next-mistake').addEventListener('click',()=>{if(reviewIndex< mistakes.length-1){reviewIndex++;review();}else result();});
    }
    $('back-result').addEventListener('click',result);
    $('review-home').addEventListener('click',()=>navigate('#home'));
  }
  let exitRoute = '#home';
  function renderRoute(route, focus = true) {
    if (route === '#archive') archive.list(focus);
    else if (route.startsWith('#robot/')) archive.detail(route.slice(7));
    else if (route === '#review' && saved.lastRound) review();
    else if (route === '#result' && saved.lastRound) result();
    else { history.replaceState(null, '', '#home'); home(focus); }
  }
  function navigate(route, replace = false) {
    if (round) {
      if (questionStart !== null && !locked) { elapsed += performance.now()-questionStart; questionStart=null; }
      exitRoute = route;
      $('confirm-exit').textContent = route === '#archive' || route.startsWith('#robot/') ? '前往档案馆' : '返回首页';
      openExitDialog();
      return;
    }
    if (location.hash !== route) history[replace ? 'replaceState' : 'pushState'](null, '', route);
    renderRoute(route);
  }
  const dialog=$('exit-dialog');
  const nativeDialog = typeof dialog.showModal === 'function' && typeof dialog.close === 'function';
  let exitBackdrop, exitReturnFocus;
  if (!nativeDialog) {
    dialog.classList.add('dialog-fallback');
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.querySelector('h2').id = 'exit-heading';
    dialog.setAttribute('aria-labelledby', 'exit-heading');
    exitBackdrop = document.createElement('div');
    exitBackdrop.className = 'exit-backdrop';
    exitBackdrop.hidden = true;
    exitBackdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(exitBackdrop);
    document.addEventListener('keydown', event => {
      if (!dialog.hasAttribute('open')) return;
      if (event.key === 'Escape') { event.preventDefault(); closeExitDialog(); }
      if (event.key === 'Tab') {
        event.preventDefault();
        const next = document.activeElement === $('continue-round') ? $('confirm-exit') : $('continue-round');
        next.focus();
      }
    });
  }
  function openExitDialog() {
    if (dialog.hasAttribute('open')) return;
    if (nativeDialog) return dialog.showModal();
    exitReturnFocus = document.activeElement;
    exitBackdrop.hidden = false;
    dialog.setAttribute('open', '');
    $('continue-round').focus();
  }
  function closeExitDialog() {
    if (nativeDialog) return dialog.close();
    dialog.removeAttribute('open');
    exitBackdrop.hidden = true;
    if (exitReturnFocus && exitReturnFocus.isConnected) exitReturnFocus.focus();
    resumeRound();
  }
  function resumeRound() { if(round&&!locked&&questionStart===null&&main.querySelector('.question-image img')?.naturalWidth>0) questionStart=performance.now(); }
  $('continue-round').addEventListener('click',closeExitDialog);
  dialog.addEventListener('close',resumeRound);
  $('confirm-exit').addEventListener('click',()=>{round=null;closeExitDialog();navigate(exitRoute);});
  $('nav-home').addEventListener('click',()=>navigate('#home'));
  $('nav-archive').addEventListener('click',()=>navigate('#archive'));
  $('brand-home').addEventListener('click',event=>{event.preventDefault();navigate('#home');});
  window.addEventListener('hashchange',()=>{
    const route = location.hash;
    if (round) { history.replaceState(null, '', '#quiz'); navigate(route); }
    else renderRoute(route);
  });
  $('fullscreen').addEventListener('click',async()=>{
    try { if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen(); } catch { $('fullscreen').textContent='请按 F11 进入全屏'; }
  });
  document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'退出全屏 ⛶':'全屏体验 ⛶';});
  window.addEventListener('beforeunload', event=>{if(round){event.preventDefault();event.returnValue='';}});
  const archive = RobotArchive.create({robots:ROBOTS, details:ARCHIVE_DETAILS, photos:PHOTO_LIST, enter, navigate, start:()=>start('小小观察员')});
  renderRoute(location.hash, false);
})();
