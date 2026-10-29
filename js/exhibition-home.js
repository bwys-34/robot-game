/* Confirmed exhibit homepage. Game state and events stay in exhibition-app.js. */
(function (global) {
  'use strict';
  const paths={
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    cube:'<path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z"/><path d="m3 8 9 5 9-5M12 13v8M7 5.8l9 5"/>',
    archive:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M9 13h6M9 16h4"/>',
    scan:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M3 12h18"/>',
    rotate:'<path d="M19 7a8 8 0 1 0 1 9M19 3v5h-5"/>',
    hand:'<path d="M8 13V5a2 2 0 0 1 4 0v7-8a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v8c0 5-4 7-7 7s-4-1-6-4l-4-5a2 2 0 0 1 3-2l2 2Z"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'
  };
  const icon=name=>'<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+paths[name]+'</svg>';
  function render(options){
    return `<section class="integrated-home exhibition-home" aria-label="选择机器人探索体验">
      <div class="entry-hero welcome-copy"><div class="entry-chip"><i aria-hidden="true"></i>欢迎来到机器人研究所</div><p class="entry-eyebrow">THE ROBOT OBSERVATION LAB</p><h1>下一位机器人专家<span>，</span><br>从这里出发。</h1><svg class="entry-spark" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M44 0h12l-1 31 22-22 9 9-23 22 31-1v12l-31-1 23 22-9 9-22-22 1 31H44l1-31-22 22-9-9 23-22-31 1V39l31 1-23-22 9-9 22 22Z"/></svg><p class="entry-lead">认出它，了解它，再亲手让它动起来。</p><div class="entry-meta"><span><b>150</b> 台档案</span><span><b>3</b> 种探索方式</span></div></div>
      <div class="entry-section-bar"><span>CHOOSE YOUR EXPLORATION</span><span>选一种方式，开始你的探索 ↓</span></div>
      <div class="entry-actions welcome-actions">
        <form class="entry-quiz challenge-panel" id="name-form" novalidate><p class="entry-label">${icon('scan')}<span>01 / 观察识别</span></p><h2>你的观察力，准备好了吗？</h2><p class="entry-desc">看照片，认机器人。<br>完成 10 道随机挑战，发现更多机器人朋友。</p><button class="entry-cta primary start-button" type="submit">开始识图挑战 ${icon('arrow')}</button>
          <details class="entry-nickname"><summary>直接开始 · 昵称选填 · 没有倒计时</summary><div class="entry-nickname-content"><label for="player-name">留下你的挑战昵称 <span>选填 · 最多 12 个字</span></label><input id="player-name" name="nickname" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="不填也可以，你就是小小观察员" aria-describedby="name-error"><div class="entry-names" aria-label="快速选择昵称"><button type="button" data-nickname="小小工程师">小小工程师</button><button type="button" data-nickname="闪电队长">闪电队长</button><button type="button" data-nickname="未来博士">未来博士</button></div><p id="name-error" role="alert"></p><button class="entry-nickname-start" type="submit">开始挑战 →</button></div></details>
          <button type="button" class="entry-last" id="last-round" ${options.lastRound?'':'disabled'}>${options.lastRound?'回看上一局错题 ↗':'完成后可回看错题'}</button><figure class="entry-photo welcome-photos"><img src="photos/3.jpg" alt="机器人档案中的真实机器人照片"><figcaption>LOOK CLOSELY / ROBOT ARCHIVE</figcaption></figure>
        </form>
        <article class="entry-g1"><span class="entry-new">全新互动 / NEW</span><div class="entry-model-stage" aria-hidden="true"><div class="entry-big-g1">G1</div><div class="entry-orbit"></div><div class="entry-floor"></div><img class="entry-model" src="images/g1-home-preview.webp" alt="" width="800" height="1100"><div class="entry-rotate">${icon('rotate')}360° EXPLORE</div></div><div class="entry-g1-copy"><p class="entry-label">${icon('cube')}<span>02 / 动作探索</span></p><h2>让机器人<br>在你手中动起来。</h2><p class="entry-desc">走近宇树 <b>G1</b>，亲手摆姿，<br>发现每个自由度的作用。</p><div class="entry-features"><div>${icon('rotate')}<span>转动观察</span></div><div>${icon('hand')}<span>寻找自由度</span></div><div>${icon('target')}<span>12 个动作挑战</span></div></div><a class="entry-cta" id="g1-entry" href="demos/g1/">进入 G1 三维互动 ${icon('arrow')}</a><p class="entry-fine">自由探索 · 手动摆姿 · 提交后评分</p></div></article>
        <button class="entry-archive welcome-archive" id="archive-entry" type="button"><span class="entry-label">${icon('archive')}<span>03 / 知识档案</span></span><span class="entry-archive-title">机器人档案馆</span><span class="entry-desc">150 台机器人，了解它们的来历、技术与应用。</span><span class="entry-archive-arrow">${icon('arrow')}</span><span class="entry-archive-icon">${icon('archive')}</span></button>
      </div>
      <div class="entry-bottom"><div><span class="entry-step">01</span><span><b>用眼睛发现</b><small>识别外形，认识机器人</small></span></div><div><span class="entry-step">02</span><span><b>用双手探索</b><small>观察动作，感受自由度</small></span></div><div><span class="entry-step">03</span><span><b>带着新知识离开</b><small>每次尝试，都有新发现</small></span></div></div>
    </section>`;
  }
  global.ExhibitionHome={render};
})(typeof window!=='undefined'?window:this);
