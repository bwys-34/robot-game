(function (global) {
  'use strict';
  function select(robots, { query = '', year = '', page = 1, pageSize = 8 } = {}) {
    const term = String(query).trim().toLocaleLowerCase();
    const size = Math.max(1, Math.floor(Number(pageSize) || 8));
    const matches = robots.filter(r => (!year || String(r.year) === String(year)) &&
      (!term || [r.model, r.brand, r.country, r.year].some(value => String(value).toLocaleLowerCase().includes(term)) ||
        (/^\d+$/.test(term) && Number(term) === Number(r.no))));
    matches.sort((a, b) => a.year - b.year || Number(a.no) - Number(b.no));
    const pages = Math.max(1, Math.ceil(matches.length / size));
    const current = Math.min(pages, Math.max(1, Math.floor(Number(page) || 1)));
    return { items: matches.slice((current - 1) * size, current * size), total: matches.length, pages, page: current };
  }

  function create({ robots, details, photos, enter, navigate, start }) {
    const state = { query: '', year: '', page: 1 };
    const byNo = new Map(robots.map(r => [r.no, r]));
    const content = new Map(details.map(r => [r.no, r]));
    const photo = new Map(photos.map(file => [file.replace(/\.[^.]+$/, ''), file]));
    const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const $ = id => document.getElementById(id);
    const years = [...new Set(robots.map(r => r.year))].sort((a,b)=>a-b);
    let lastRobot = null;
    function wirePhotos() {
      document.querySelectorAll('.archive-photo img, .detail-photo img').forEach(img => {
        const failed = () => { img.hidden = true; img.nextElementSibling.hidden = false; };
        img.addEventListener('error', failed, { once:true });
        if (img.complete && !img.naturalWidth) failed();
      });
    }
    function image(r) { return `<img src="photos/${esc(photo.get(r.no))}" alt="${esc(r.model)} 机器人完整照片"><span class="archive-photo-error" hidden>照片暂时无法显示</span>`; }
    function list(focus = true) {
      const result = select(robots, state);
      state.page = result.page;
      enter(`<section class="archive-screen">
        <div class="archive-heading"><div><p class="eyebrow">ROBOT ARCHIVE / 观察与发现</p><h1>机器人档案馆<span>150 台，等你认识。</span></h1></div><button class="primary" id="archive-start">开始识图挑战 <span aria-hidden="true">→</span></button></div>
        <form id="archive-search-form" class="archive-tools" role="search"><div class="archive-search-field"><label class="sr-only" for="archive-search">搜索机器人编号、型号、公司、国家或年份</label><input id="archive-search" type="search" value="${esc(state.query)}" placeholder="搜索编号、型号、公司、国家或年份" autocomplete="off"><button class="primary" type="submit">查找</button></div><label class="year-filter">推出年份<select id="archive-year"> <option value="">全部年份</option>${years.map(year=>`<option value="${year}" ${String(year)===state.year?'selected':''}>${year} 年</option>`).join('')}</select></label><button class="secondary" id="archive-clear" type="button">重置</button><p class="archive-found" role="status">找到 <b>${result.total}</b> 台机器人</p></form>
        <div class="archive-grid">${result.items.map(r=>`<button class="archive-card" data-robot="${esc(r.no)}" aria-label="查看 ${esc(r.model)} 的档案"><div class="archive-card-top"><span>档案 ${esc(r.no.padStart(3,'0'))}</span><b>${r.year}</b></div><div class="archive-photo">${image(r)}</div><div class="archive-card-info"><h2>${esc(r.model)}</h2><p>${esc(r.brand)}</p><div><span>${esc(r.country)}</span><span class="archive-card-link">查看档案 ↗</span></div></div></button>`).join('')}</div>
        ${!result.total?'<div class="archive-empty" id="archive-empty"><span aria-hidden="true">?</span><h2>还没有找到这位机器人</h2><p>换一个名称、公司或编号试试，也可以点击“重置”查看全部档案。</p></div>':''}
        <div class="archive-bottom"><p>按推出年份排列 <span>· 点击照片卡片，查看完整资料</span></p><nav class="archive-pagination" aria-label="档案翻页"><button class="secondary" id="archive-prev" ${state.page===1?'disabled':''}>← 上一页</button><span id="archive-page" aria-live="polite">${state.page} / ${result.pages}</span><button class="secondary" id="archive-next" ${state.page===result.pages?'disabled':''}>下一页 →</button></nav></div>
      </section>`, 'archive', focus);
      $('archive-search-form').addEventListener('submit', event => { event.preventDefault(); state.query = $('archive-search').value; state.year = $('archive-year').value; state.page = 1; lastRobot = null; list(false); $('archive-search').focus({preventScroll:true}); });
      $('archive-year').addEventListener('change', () => { state.year = $('archive-year').value; state.query = $('archive-search').value; state.page = 1; lastRobot = null; list(false); $('archive-year').focus({preventScroll:true}); });
      $('archive-clear').addEventListener('click', () => { Object.assign(state, {query:'',year:'',page:1}); lastRobot = null; list(false); $('archive-search').focus({preventScroll:true}); });
      for (const [id, delta] of [['archive-prev',-1],['archive-next',1]]) $(id).addEventListener('click',()=>{ state.page+=delta; lastRobot=null; list(false); $(id).focus({preventScroll:true}); });
      document.querySelectorAll('[data-robot]').forEach(button => button.addEventListener('click',()=>{ lastRobot=button.dataset.robot; navigate('#robot/'+lastRobot); }));
      $('archive-start').addEventListener('click', start);
      wirePhotos();
      if (lastRobot && focus) document.querySelector(`[data-robot="${lastRobot}"]`)?.focus({preventScroll:true});
    }
    function detail(no) {
      const r = byNo.get(no);
      if (!r) { navigate('#archive', true); return; }
      const d = content.get(no) || {};
      enter(`<section class="robot-detail" data-robot="${esc(no)}"><div class="detail-top"><button class="secondary" id="archive-back">← 返回档案馆</button><p class="eyebrow">ROBOT ARCHIVE / 档案 ${esc(no.padStart(3,'0'))}</p><button class="primary" id="archive-start">开始识图挑战 <span aria-hidden="true">→</span></button></div>
        <div class="detail-layout"><figure class="detail-figure"><div class="detail-photo">${image(r)}</div><figcaption><span>观察它的头部、手臂与身体轮廓</span><b>${esc(no.padStart(3,'0'))} / 150</b></figcaption></figure><div class="detail-info"><p class="eyebrow">MEET THE MACHINE / 认识这位机器人</p><h1>${esc(r.model)}</h1><p class="detail-company">${esc(r.brand)}</p><dl class="detail-facts"><div><dt>推出年份</dt><dd>${r.year}</dd></div><div><dt>国家 / 地区</dt><dd>${esc(r.country)}</dd></div></dl>
        <div class="detail-tabs" role="tablist" aria-label="档案资料">${[['intro','认识它'],['tech','技术路线'],['use','应用场景'],['prosCons','优势与边界']].map(([key,label],i)=>`<button type="button" role="tab" data-tab="${key}" id="tab-${key}" aria-controls="detail-content" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}">${label}</button>`).join('')}</div><div id="detail-content" class="detail-content" role="tabpanel" aria-labelledby="tab-intro" tabindex="0"></div><p class="detail-source">资料来自展厅机器人信息表。不同代际与配置可能存在差异，具体能力以厂商最新公开信息为准。</p></div></div></section>`, 'robot');
      function tab(key, focusTab = false) {
        document.querySelectorAll('[data-tab]').forEach(button=>{ const active=button.dataset.tab===key; button.setAttribute('aria-selected', String(active)); button.tabIndex=active?0:-1; });
        $('detail-content').textContent=d[key]?.trim() || '这部分资料暂未收录，欢迎先看看其他档案信息。';
        $('detail-content').setAttribute('aria-labelledby','tab-'+key);
        $('detail-content').scrollTop=0;
        if(focusTab) $('tab-'+key).focus({preventScroll:true});
      }
      const tabs = [...document.querySelectorAll('[data-tab]')];
      tabs.forEach((button, index)=>{
        button.addEventListener('click',()=>tab(button.dataset.tab));
        button.addEventListener('keydown', event=>{ let next; if(event.key==='ArrowRight')next=(index+1)%tabs.length; if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length; if(event.key==='Home')next=0; if(event.key==='End')next=tabs.length-1; if(next!==undefined){ event.preventDefault(); tab(tabs[next].dataset.tab,true); } });
      });
      tab('intro');
      $('archive-back').addEventListener('click',()=>navigate('#archive'));
      $('archive-start').addEventListener('click',start);
      wirePhotos();
    }
    return { list, detail };
  }
  const Archive = { select, create };
  if (typeof module !== 'undefined' && module.exports) module.exports = Archive;
  global.RobotArchive = Archive;
})(typeof window !== 'undefined' ? window : this);
