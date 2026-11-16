(() => {
  'use strict';
  const records=window.DEMO_RECORDS;
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arrow='<span aria-hidden="true">↗</span>';
  function photoCard(r){return `<button class="catalog-card" data-record="${escape(r.id)}"><span class="catalog-image"><img src="${escape(r.photo)}" alt="${escape(r.name)} 完整档案照片" loading="lazy">${r.id==='143'?'<span class="record-tag">G1 专题 · 三维互动</span>':''}</span><span class="catalog-meta"><small>NO.${escape(r.number)} / ${escape(r.year)}</small><b>${escape(r.name)}</b><span>${escape(r.company)}</span></span>${arrow}</button>`;}
  ExhibitionHome.render=({lastRound})=>`<section class="demo-home"><div class="home-stage"><div class="stage-copy"><p class="demo-kicker">THE ROBOT ARCHIVE / 机器人档案馆</p><h1>每一台机器人，<br>都有自己的故事<span>。</span></h1><p class="stage-intro">从外形认识它，沿着档案了解它。<br>带着好奇，发现机器人世界。</p><button id="archive-entry" class="demo-button dark">走进全部 ${records.length} 份档案 ${arrow}</button></div><div class="stage-exhibit"><span class="stage-word" aria-hidden="true">MEET<br>G1.</span><img src="assets/archive/g1-full.png" width="1100" height="1450" alt="G1 样机模型全身示意"><button data-route="#robot/143" class="exhibit-caption"><span><small>本期探索 / NO.137</small><b>G1 · 宇树科技</b><small>样机模型示意</small></span>${arrow}</button></div></div><div class="home-paths"><form id="name-form" novalidate><p class="demo-kicker">01 / LOOK CLOSELY</p><h2>看过了，认得出吗？</h2><p>10 道随机识图题，把新认识变成你的发现。</p><button class="demo-button light start-button" type="submit">开始识图挑战 ${arrow}</button><details class="optional-name"><summary>留下你的挑战昵称（选填）</summary><label for="player-name">观察员昵称</label><input id="player-name" maxlength="12" placeholder="不填也可以，你就是小小观察员"><p id="name-error" role="alert"></p></details><button id="last-round" type="button" ${lastRound?'':'disabled'}>${lastRound?'回看上一局错题 ↗':'完成一局后，可在这里回看错题'}</button></form><article class="path-archive"><p class="demo-kicker">02 / A CLOSER LOOK</p><h2>先认识，再亲手探索。</h2><p>走进 G1 专题，了解身体、感知与运动，<br>再进入它的三维互动。</p><button data-route="#robot/143" class="demo-button outline">打开 G1 新档案 ${arrow}</button><a href="demos/g1/" class="text-link" id="g1-entry" target="_blank" rel="noopener" aria-label="进入 G1 三维互动，在新页面打开">直接进入 G1 三维互动 ↗</a><span class="path-mark" aria-hidden="true">G1</span></article></div><div class="collection-heading"><div><p class="demo-kicker">MORE TO DISCOVER</p><h2>下一位，你想认识谁？</h2></div><button data-route="#archive" class="text-link">浏览全部档案 ${arrow}</button></div><div class="catalog-grid home-records">${records.slice(0,4).map(photoCard).join('')}</div></section>`;
  const previousHome=ExhibitionHome.render;
  const standardEntry=home=>`<section class="standard-example-entry ${home?'home-standard-entry':''}" aria-label="Navigator 2 档案精选"><div><small>ARCHIVE SELECTION / 档案精选 · NO.023</small><h2>Navigator 2，走向真实应用。</h2><p>用一张完整原照，从技术到场景，认识它的故事。</p></div><button class="demo-button outline" data-route="#robot/33">认识 Navigator 2 ${arrow}</button></section>`;
  ExhibitionHome.render=options=>previousHome(options).replace('<div class="collection-heading">',standardEntry(true)+'<div class="collection-heading">');
  RobotArchive.create=({enter,navigate,start})=>{
    let query='',year='',page=1;
    const main=document.getElementById('main');
    const years=[...new Set(records.map(r=>r.year))].sort((a,b)=>b-a);
    document.title='机器人档案馆 · 发现与挑战';
    document.getElementById('nav-quiz').addEventListener('click',()=>{if(main.dataset.screen!=='quiz') start();else main.querySelector('h1')?.focus();});
    document.addEventListener('click',event=>{
      if(event.target.closest('.demo-skip')){event.preventDefault();main.tabIndex=-1;main.focus();return;}
      const target=event.target.closest('[data-route],[data-record],[data-start-quiz],[data-back-list]');
      if(!target)return;
      if(target.hasAttribute('data-start-quiz'))return start();
      if(target.hasAttribute('data-back-list'))return navigate('#archive');
      if(target.dataset.record)return navigate('#robot/'+target.dataset.record);
      if(target.dataset.route)navigate(target.dataset.route);
    });
    const observer=new MutationObserver(()=>{
      const screen=main.dataset.screen;
      document.getElementById('nav-quiz').setAttribute('aria-current',['quiz','result','review'].includes(screen)?'page':'false');
    });
    observer.observe(main,{attributes:true,attributeFilter:['data-screen']});
    function matching(){
      const term=query.trim().toLocaleLowerCase();
      return records.filter(r=>(!year||r.year===year)&&(!term||[r.name,r.company,r.country,r.year].some(x=>String(x).toLocaleLowerCase().includes(term))||(/^\d+$/.test(term)&&Number(r.number)===Number(term))));
    }
    function updateGrid(){
      const filtered=matching(),pages=Math.max(1,Math.ceil(filtered.length/12));
      page=Math.min(pages,Math.max(1,page));
      document.getElementById('catalog-results').textContent=`${filtered.length} 份档案 · 第 ${page} / ${pages} 页`;
      document.getElementById('catalog-grid').innerHTML=filtered.length?filtered.slice((page-1)*12,page*12).map(photoCard).join(''):'<p class="catalog-empty">没有找到符合条件的机器人。试试型号、公司或展品编号。</p>';
      document.getElementById('catalog-prev').disabled=page===1;
      document.getElementById('catalog-next').disabled=page===pages;
      document.getElementById('catalog-page').textContent=`${page} / ${pages}`;
    }
    function list(focus=true){
      enter(`<section class="demo-catalog"><div class="catalog-heading"><div><p class="demo-kicker">THE COLLECTION / 全部档案</p><h1>在这里，认识未来<span>。</span></h1><p>${records.length} 份机器人档案，从外形到技术，找到让你好奇的那一台。</p></div><button class="demo-button dark" data-start-quiz>开始识图挑战 ${arrow}</button></div><button class="catalog-feature" data-record="143"><img src="assets/archive/g1-full.png" alt="G1 样机全身示意"><span><small>本期专题 / NO.137 · 样机模型示意</small><b>G1，走近人形机器人的可能。</b><span>阅读档案 · 探索三维互动</span></span>${arrow}</button><div class="catalog-controls"><label class="search-field"><span>查找机器人</span><input id="archive-search" type="search" value="${escape(query)}" placeholder="型号、公司、国家或展品编号"></label><label class="year-field"><span>档案年份</span><select id="archive-year"><option value="">全部年份</option>${years.map(y=>`<option ${year===y?'selected':''}>${escape(y)}</option>`).join('')}</select></label><p id="catalog-results" role="status"></p></div><div class="catalog-grid" id="catalog-grid"></div><nav class="catalog-pagination" aria-label="档案分页"><button id="catalog-prev" class="demo-button outline">← 上一页</button><span id="catalog-page"></span><button id="catalog-next" class="demo-button outline">下一页 →</button></nav></section>`,'archive',focus);
      main.querySelector('.catalog-feature').insertAdjacentHTML('afterend',standardEntry(false));
      document.getElementById('archive-search').addEventListener('input',event=>{query=event.target.value;page=1;updateGrid();});
      document.getElementById('archive-year').addEventListener('change',event=>{year=event.target.value;page=1;updateGrid();});
      ['prev','next'].forEach(direction=>document.getElementById('catalog-'+direction).addEventListener('click',()=>{page+=direction==='next'?1:-1;updateGrid();document.querySelector('.catalog-controls').scrollIntoView({block:'start'});}));
      updateGrid();
    }
    function detail(no){
      const record=records.find(r=>r.id===no);
      if(!record)return navigate('#archive',true);
      const toolbar=`<div class="detail-toolbar"><button data-back-list>← 返回档案列表</button><span>档案 / ${escape(record.name)} / NO.${escape(record.number)}</span><button data-start-quiz>试试识图挑战 ${arrow}</button></div>`;
      if(no==='143'){
        enter(toolbar+'<g1-record></g1-record><section class="detail-next"><div><p class="demo-kicker">CONTINUE YOUR DISCOVERY</p><h2>认识之后，来一次观察挑战。</h2><p>原有的 10 道随机识图题，成绩与错题回顾，继续陪你探索。</p></div><button class="demo-button dark" data-start-quiz>开始识图挑战 '+arrow+'</button><button class="text-link" data-back-list>继续浏览其他机器人 →</button></section>','robot');
      }else{
        enter(toolbar+StandardArchive.render(record),'robot');
        StandardArchive.wire(main.querySelector('.standard-record'));
      }
    }
    return {list,detail};
  };
})();
