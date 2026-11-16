(() => {
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const canonical='https://bwys-34.github.io/robot-QR-code/robots.html?id=33';
  const icon=type=>{
    const shapes={body:'<rect x="15" y="14" width="34" height="36" rx="6"/><path d="M24 4v10m16-10v10M4 24h11m-11 16h11m34-16h11M49 40h11M24 50v10m16-10v10"/><rect x="25" y="25" width="14" height="14" rx="2"/>',industry:'<path d="M8 54h48V24L40 34V18L24 28V10H12v44M17 42h6m10 0h6m7 0h5"/>',route:'<circle cx="13" cy="15" r="6"/><circle cx="50" cy="50" r="6"/><path d="M19 15h21a11 11 0 0 1 0 22H25a10 10 0 0 0 0 20h7M32 50l7 7-7 7"/>'};
    return `<svg viewBox="0 0 64 68" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${shapes[type]}</svg>`;
  };
  function renderNavigator(record){
    return `<article class="standard-record" data-record-id="${esc(record.id)}" aria-labelledby="standard-title">
      <section class="record-hero">
        <div class="record-hero-top"><span><i aria-hidden="true"></i> ROBOT PORTRAIT / 机器人档案</span><span>NO.${esc(record.number.padStart(3,'0'))}</span></div>
        <div class="record-hero-copy"><div class="record-hero-heading"><p class="record-maker">NAVIAI / ${esc(record.company)}</p><h1 id="standard-title">Navigator <span>2<span class="record-dot">.</span></span></h1><p class="record-model">NAVIAI-i2</p></div><div class="record-hero-intro"><h2>从人形，<br>走向真实的应用。</h2><p class="record-lead">沿着硬件、制造与应用三条线索，<br>认识档案中的 Navigator 2。</p><button class="demo-button dark" data-section="standard-overview">认识这台机器人 <span aria-hidden="true">↘</span></button></div></div>
        <figure class="record-hero-image"><div class="record-photo-top"><span>ARCHIVE IMAGE</span><span>档案原始照片</span></div><button data-photo-open aria-label="放大查看 Navigator 2 完整档案原照"><img src="${esc(record.photo)}" width="618" height="1174" alt="Navigator 2 完整档案原照，保留原标识和水印" fetchpriority="high"><span class="record-photo-expand" aria-hidden="true">↗</span></button><figcaption><span>NAVIGATOR 2 / NO.${esc(record.number)}</span><span>查看完整原照 ↗</span></figcaption></figure>
        <dl class="record-identity"><div><dt>来自</dt><dd>${esc(record.country)}</dd></div><div><dt>档案年份</dt><dd>${esc(record.year)}</dd></div><div><dt>公司 / 团队</dt><dd>${esc(record.company)}</dd></div></dl>
      </section>
      <nav class="record-chapters" aria-label="档案章节"><button data-section="standard-overview"><small>01</small> 概览</button><button data-section="standard-technology"><small>02</small> 技术与应用</button><button data-section="standard-document"><small>03</small> 完整资料</button><button data-start-quiz>试试识图挑战 <span aria-hidden="true">↗</span></button></nav>
      <section class="record-overview record-section" id="standard-overview"><div class="record-section-label"><span>01 / MEET THE ROBOT</span><span>先认识，再深入</span></div><div class="record-intro-grid"><h2>让技术，<br><span>走进生产现场。</span></h2><div><p>Navigator 2（NAVIAI-i2）来自浙江人形机器人创新中心。展厅档案以全栈自研、多行业应用和制造场景为线索，记录它的探索方向。</p><p class="record-muted">从服装智造到汽车装配，再到导览与零售，读懂一台机器人，也是在认识它与工作场景的关系。</p></div></div>
      <div class="record-features"><article>${icon('body')}<p class="demo-kicker">01 — HARDWARE</p><h3>从硬件开始。</h3><p>档案记录了全栈自研的硬件体系，以及对供应链可控性的关注。</p></article><article>${icon('industry')}<p class="demo-kicker">02 — MANUFACTURING</p><h3>在制造中应用。</h3><p>服装智造与汽车装配，是原始资料重点描述的制造场景。</p></article><article>${icon('route')}<p class="demo-kicker">03 — APPLICATION</p><h3>面向更多行业。</h3><p>应用记录也延伸至导览与零售，呈现多行业探索方向。</p></article></div></section>
      <section class="record-applications record-section" id="standard-technology"><div class="record-section-label"><span>02 / FROM CAPABILITY TO CONTEXT</span><span>技术与应用场景</span></div><div class="record-application-layout"><div class="record-application-copy"><p class="demo-kicker">WHERE IT WORKS</p><h2>在不同场景里，<br>找到自己的位置。</h2><p class="record-muted">展厅信息表收录的五类应用方向。</p><div class="record-tech-note"><span>TECHNICAL ROUTE</span><h3>全栈自研 · 多行业应用</h3><p>关注硬件体系与具体作业场景之间的连接。</p></div></div><ol class="record-use-list">${[['工业制造','INDUSTRIAL MANUFACTURING'],['汽车装配','AUTOMOTIVE ASSEMBLY'],['服装智造','APPAREL MANUFACTURING'],['导览','GUIDED TOURS'],['零售','RETAIL']].map(([cn,en],i)=>`<li><span>0${i+1}</span><div><h3>${cn}</h3><small>${en}</small></div><span aria-hidden="true">↗</span></li>`).join('')}</ol></div><div class="record-balance"><div><p class="demo-kicker">STRENGTHS / 档案中的优势</p><h3>自研体系与多行业经验。</h3><p>资料强调全栈自研、供应链可控，以及服装和汽车制造领域的应用验证。</p></div><div><p class="demo-kicker">OPEN QUESTIONS / 持续观察的边界</p><h3>量产之后，还要看长期表现。</h3><p>原始档案同时提出，量产质量的一致性仍需长期验证。</p></div></div></section>
      <section class="record-document" id="standard-document"><div class="record-document-copy"><div class="record-section-label"><span>03 / THE ORIGINAL RECORD</span></div><h2>每一次了解，<br>都能回到原始记录。</h2><p class="record-muted">概览依据展厅信息表整理。切换查看基本信息，<br>或展开原文，了解资料的完整表述。</p><div class="standard-tabs" role="tablist" aria-label="Navigator 2 档案资料"><button role="tab" id="standard-tab-info" aria-controls="standard-info" aria-selected="true" tabindex="0">基本信息</button><button role="tab" id="standard-tab-source" aria-controls="standard-source" aria-selected="false" tabindex="-1">完整原文</button></div><div role="tabpanel" id="standard-info" aria-labelledby="standard-tab-info"><dl class="record-data">${[['展品编号',record.number],['机器人型号',record.name],['开发公司 / 团队',record.company],['国家 / 地区',record.country],['档案年份',record.year]].map(([label,value])=>`<div><dt>${label}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><p class="record-document-note">年份沿用展厅信息表。</p></div><div role="tabpanel" id="standard-source" aria-labelledby="standard-tab-source" hidden>${[['intro','机器人简介'],['tech','技术路线'],['use','应用场景'],['prosCons','优势与边界']].map(([field,label],i)=>`<details ${i===0?'open':''}><summary>${label}<span aria-hidden="true">＋</span></summary><p data-original="${field}">${esc(record[field])}</p></details>`).join('')}<p class="record-document-note">原始资料按信息表保留，交付规模等表述属于原文记录。</p></div></div><aside class="record-file-card"><div><span>ARCHIVE INDEX</span><span>NO.${esc(record.number.padStart(3,'0'))}</span></div><span class="record-file-number" aria-hidden="true">${esc(record.number.padStart(3,'0'))}<i>.</i></span><p>NAVIGATOR 2</p><h3>档案中的每一台，<br>都值得认真认识。</h3><dl><div><dt>公司 / 团队</dt><dd>${esc(record.company)}</dd></div><div><dt>国家 / 地区</dt><dd>${esc(record.country)}</dd></div><div><dt>档案年份</dt><dd>${esc(record.year)}</dd></div></dl></aside></section>
      <section class="record-keep record-section"><div><p class="demo-kicker">KEEP YOUR DISCOVERY</p><h2>把这份好奇，<br>带到下一次探索。</h2><p class="record-muted">扫码留存这台机器人的固定档案。</p><div class="record-keep-actions"><button class="demo-button dark" data-copy-standard>复制档案链接 <span aria-hidden="true">↗</span></button><a class="text-link" href="assets/archive/qr/33.png" download="Navigator2-档案二维码.png">保存二维码 ↓</a></div><p id="standard-copy-status" role="status"></p></div><a class="record-qr" href="${canonical}" data-canonical target="_blank" rel="noopener" aria-label="打开 Navigator 2 固定档案"><img src="assets/archive/qr/33.png" width="156" height="156" alt="Navigator 2 固定档案二维码"><span>NAVIGATOR 2 / NO.${esc(record.number)}</span></a></section>
      <section class="record-continue"><div><p class="demo-kicker">OBSERVE. REMEMBER. DISCOVER.</p><h2>下次遇见它，<br>你会认出来吗？</h2><p>换一种方式认识机器人，来一次 10 题识图挑战。</p><button class="demo-button light" data-start-quiz>开始识图挑战 <span aria-hidden="true">↗</span></button></div><div class="record-next"><p class="demo-kicker">NEXT DISCOVERY / 继续探索</p><button data-route="#robot/143"><span><small>NO.137 / UNITREE ROBOTICS</small><b>走进 G1 的世界。</b><small>阅读档案 · 探索三维互动</small></span><img src="assets/archive/g1-full.png" width="1100" height="1450" loading="lazy" alt="G1 样机全身示意"><span class="next-arrow" aria-hidden="true">↗</span></button><button class="record-more" data-back-list>继续浏览全部机器人 <span aria-hidden="true">→</span></button></div></section>
      <dialog id="standard-photo-dialog" aria-labelledby="standard-photo-title"><div class="record-photo-toolbar"><p id="standard-photo-title">Navigator 2 / 档案完整原照</p><button class="demo-button dark" data-photo-close>关闭 ×</button></div><img src="${esc(record.photo)}" width="618" height="1174" alt="Navigator 2 完整档案原照"></dialog>
    </article>`;
  }
  // Split only at top-level separators: application lists often contain parentheses.
  function segments(value, separators){
    let depth=0,start=0;const parts=[];const text=String(value||'').trim();
    for(let i=0;i<text.length;i++){
      if('（([{【'.includes(text[i]))depth++;
      if('）)]}】'.includes(text[i]))depth=Math.max(0,depth-1);
      if(!depth&&separators.includes(text[i])){const part=text.slice(start,i).trim();if(part)parts.push(part);start=i+1;}
    }
    const last=text.slice(start).trim();if(last)parts.push(last);return parts;
  }
  const clean=value=>String(value||'').replace(/[✅⚠️]/gu,'').trim();
  function excerpt(value,limit=100){
    const text=clean(value);if(!text)return '暂未收录';if(text.length<=limit)return text;
    const first=segments(text,'。；\n')[0];return first.length<=limit?first:text.slice(0,limit)+'…';
  }
  function assessment(value){
    const text=clean(value);
    const split=text.match(/^([\s\S]*?)(?:缺点[：:是]?|劣势[：:是]?|不足[：:])([\s\S]+)$/);
    if(split&&split[1].trim())return {strength:split[1].replace(/^(?:优点|优势)[：:是]?/,'').trim(),limit:split[2].trim()};
    const warning=String(value||'').indexOf('⚠');
    if(warning>=0)return {strength:clean(String(value).slice(0,warning)),limit:clean(String(value).slice(warning))};
    return {original:text||'暂未收录'};
  }
  function render(record){
    if(record.id==='33')return renderNavigator(record);
    const canonical='https://bwys-34.github.io/robot-QR-code/robots.html?id='+encodeURIComponent(record.id);
    const name=esc(record.name),number=esc(String(record.number).padStart(3,'0'));
    const qr='assets/archive/qr/'+encodeURIComponent(record.id)+'.png';
    const technical=segments(clean(record.tech),'。；\n');
    // Keep every technical clause; group rather than discard the longer records.
    const blocks=technical.length>3?[technical[0],technical[1],technical.slice(2).join('；')]:technical;
    const uses=segments(record.use,'、；;\n').map(s=>s.replace(/[。；]+$/,'')).filter(Boolean);
    const balance=assessment(record.prosCons);
    const index=window.DEMO_RECORDS.findIndex(r=>r.id===record.id);
    const next=window.DEMO_RECORDS[(index+1)%window.DEMO_RECORDS.length];
    const prev=window.DEMO_RECORDS[(index+window.DEMO_RECORDS.length-1)%window.DEMO_RECORDS.length];
    const facts=[['展品编号',record.number],['机器人型号',record.name],['开发公司 / 团队',record.company],['国家 / 地区',record.country],['档案年份',record.year]];
    return `<article class="standard-record general-record" data-record-id="${esc(record.id)}" aria-labelledby="standard-title">
      <section class="record-hero">
        <div class="record-hero-top"><span><i aria-hidden="true"></i> ROBOT PORTRAIT / 机器人档案</span><span>NO.${number}</span></div>
        <div class="record-hero-copy"><div class="record-hero-heading"><p class="record-maker">${esc(record.company||'暂未收录')}</p><h1 id="standard-title" class="${record.name.length>13?'record-long-name':''}">${name}</h1><p class="record-model">${esc(record.country)} · ${esc(record.year)} / NO.${number}</p></div><div class="record-hero-intro"><h2>从外形，<br>读懂它的故事。</h2><p class="record-lead">${esc(excerpt(record.intro,90))}</p><button class="demo-button dark" data-section="standard-overview">认识这台机器人 <span aria-hidden="true">↘</span></button></div></div>
        <figure class="record-hero-image"><div class="record-photo-top"><span>ARCHIVE IMAGE</span><span>档案原始照片</span></div><button data-photo-open aria-label="放大查看 ${name} 完整档案原照"><img src="${esc(record.photo)}" alt="${name} 完整档案原照" fetchpriority="high"><span class="record-photo-expand" aria-hidden="true">↗</span></button><figcaption><span>NO.${number} / ${esc(record.year)}</span><span>查看完整原照 ↗</span></figcaption></figure>
        <dl class="record-identity">${[['来自',record.country],['档案年份',record.year],['公司 / 团队',record.company]].map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v||'暂未收录')}</dd></div>`).join('')}</dl>
      </section>
      <nav class="record-chapters" aria-label="档案章节"><button data-section="standard-overview"><small>01</small> 概览</button><button data-section="standard-technology"><small>02</small> 技术与应用</button><button data-section="standard-document"><small>03</small> 完整资料</button><button data-start-quiz>试试识图挑战 <span aria-hidden="true">↗</span></button></nav>
      <section class="record-overview record-section" id="standard-overview"><div class="record-section-label"><span>01 / MEET THE ROBOT</span><span>先认识，再深入</span></div><div class="record-intro-grid"><h2>认识 ${name}<span class="record-dot">.</span><br><span>从这份记录开始。</span></h2><div><p>${esc(record.intro||'暂未收录')}</p><p class="record-muted">以上为展厅档案中的介绍。沿着技术与应用继续阅读，也可以在下方查看完整原文。</p></div></div>
      <div class="record-features" style="--feature-count:${Math.max(1,blocks.length)}">${(blocks.length?blocks:['暂未收录']).map((text,i)=>`<article>${icon(['body','industry','route'][i]||'body')}<p class="demo-kicker">0${i+1} / TECHNICAL NOTES</p><h3>技术线索 ${String(i+1).padStart(2,'0')}</h3><p>${esc(text)}</p></article>`).join('')}</div></section>
      <section class="record-applications record-section" id="standard-technology"><div class="record-section-label"><span>02 / FROM CAPABILITY TO CONTEXT</span><span>技术与应用场景</span></div><div class="record-application-layout"><div class="record-application-copy"><p class="demo-kicker">WHERE IT WORKS</p><h2>沿着技术，<br>走进应用场景。</h2><p class="record-muted">展厅档案收录的应用方向。</p><div class="record-tech-note"><span>TECHNICAL ROUTE / 技术路线</span><p>${esc(record.tech||'暂未收录')}</p></div></div><ol class="record-use-list">${(uses.length?uses:['暂未收录']).map((text,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><h3>${esc(text)}</h3></div></li>`).join('')}</ol></div>
      <div class="record-balance ${balance.original?'record-balance-original':''}">${balance.original?`<div><p class="demo-kicker">PERSPECTIVE / 优势与边界</p><p>${esc(balance.original)}</p></div>`:`<div><p class="demo-kicker">STRENGTHS / 档案中的优势</p><p>${esc(balance.strength)}</p></div><div><p class="demo-kicker">OPEN QUESTIONS / 持续观察的边界</p><p>${esc(balance.limit)}</p></div>`}</div></section>
      <section class="record-document" id="standard-document"><div class="record-document-copy"><div class="record-section-label"><span>03 / THE ORIGINAL RECORD</span></div><h2>每一次了解，<br>都能回到原始记录。</h2><p class="record-muted">资料沿用展厅信息表，保留原始表述与档案年份。</p><div class="standard-tabs" role="tablist" aria-label="${name} 档案资料"><button role="tab" id="standard-tab-info" aria-controls="standard-info" aria-selected="true" tabindex="0">基本信息</button><button role="tab" id="standard-tab-source" aria-controls="standard-source" aria-selected="false" tabindex="-1">完整原文</button></div><div role="tabpanel" id="standard-info" aria-labelledby="standard-tab-info"><dl class="record-data">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v||'暂未收录')}</dd></div>`).join('')}</dl><p class="record-document-note">年份沿用展厅信息表。</p></div><div role="tabpanel" id="standard-source" aria-labelledby="standard-tab-source" hidden>${[['intro','机器人简介'],['tech','技术路线'],['use','应用场景'],['prosCons','优势与边界']].map(([field,label],i)=>`<details ${i===0?'open':''}><summary>${label}<span aria-hidden="true">＋</span></summary><p data-original="${field}">${esc(record[field]||'')}</p>${record[field]?'':'<p class="record-muted">暂未收录</p>'}</details>`).join('')}<p class="record-document-note">规格、价格与应用进展等沿用原文记录。</p></div></div><aside class="record-file-card"><div><span>ARCHIVE INDEX</span><span>NO.${number}</span></div><span class="record-file-number" aria-hidden="true">${number}<i>.</i></span><p>${name}</p><h3>档案中的每一台，<br>都值得认真认识。</h3><dl>${[['公司 / 团队',record.company],['国家 / 地区',record.country],['档案年份',record.year]].map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v||'暂未收录')}</dd></div>`).join('')}</dl></aside></section>
      <section class="record-keep record-section"><div><p class="demo-kicker">KEEP YOUR DISCOVERY</p><h2>把这份好奇，<br>带到下一次探索。</h2><p class="record-muted">扫码留存这台机器人的固定档案。</p><div class="record-keep-actions"><button class="demo-button dark" data-copy-standard>复制档案链接 <span aria-hidden="true">↗</span></button><a class="text-link" href="${qr}" download="${name}-档案二维码.png">保存二维码 ↓</a></div><p id="standard-copy-status" role="status"></p></div><a class="record-qr" href="${canonical}" data-canonical target="_blank" rel="noopener" aria-label="打开 ${name} 固定档案"><img src="${qr}" width="156" height="156" alt="${name} 固定档案二维码"><span>${name} / NO.${number}</span></a></section>
      <section class="record-continue"><div><p class="demo-kicker">OBSERVE. REMEMBER. DISCOVER.</p><h2>下次遇见它，<br>你会认出来吗？</h2><p>换一种方式认识机器人，来一次 10 题识图挑战。</p><button class="demo-button light" data-start-quiz>开始识图挑战 <span aria-hidden="true">↗</span></button><button class="record-g1-link" data-route="#robot/143">走进 G1 专题与三维互动 ↗</button></div><div class="record-next"><p class="demo-kicker">NEXT DISCOVERY / 下一份档案</p><button data-next-record data-route="#robot/${esc(next.id)}"><span><small>NO.${esc(String(next.number).padStart(3,'0'))} / ${esc(next.country)}</small><b>${esc(next.name)}</b><small>${esc(next.company)}</small></span><img src="${esc(next.photo)}" loading="lazy" alt="${esc(next.name)} 完整档案原照"><span class="next-arrow" aria-hidden="true">↗</span></button><div class="record-adjacent"><button data-route="#robot/${esc(prev.id)}">← 上一份档案</button><button data-back-list>返回全部档案 →</button></div></div></section>
      <dialog id="standard-photo-dialog" aria-labelledby="standard-photo-title"><div class="record-photo-toolbar"><p id="standard-photo-title">${name} / 档案完整原照</p><button class="demo-button dark" data-photo-close>关闭 ×</button></div><img src="${esc(record.photo)}" alt="${name} 完整档案原照"></dialog>
    </article>`;
  }
  function wire(container){
    const canonical=container.querySelector('[data-canonical]').href;
    const record=window.DEMO_RECORDS.find(r=>r.id===container.dataset.recordId);
    container.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>container.querySelector('#'+button.dataset.section).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})));
    const tabs=Array.from(container.querySelectorAll('[role=tab]'));
    function select(tab,focus=false){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;container.querySelector('#'+t.getAttribute('aria-controls')).hidden=t!==tab;});if(focus)tab.focus();}
    tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next===undefined)return;event.preventDefault();select(tabs[next],true);});});
    const dialog=container.querySelector('#standard-photo-dialog');
    const opener=container.querySelector('[data-photo-open]'),closer=container.querySelector('[data-photo-close]');
    const nativeDialog=typeof dialog.showModal==='function'&&typeof dialog.close==='function';
    let backdrop;
    const keydown=event=>{if(event.key==='Escape'){event.preventDefault();closePhoto();}if(event.key==='Tab'){event.preventDefault();closer.focus();}};
    function restore(){document.body.classList.remove('photo-is-open');backdrop?.remove();document.removeEventListener('keydown',keydown);if(opener.isConnected)opener.focus({preventScroll:true});}
    // Browser back/hash navigation can remove an open dialog without firing close.
    const lifecycle=new MutationObserver(()=>{if(!container.isConnected){lifecycle.disconnect();restore();}});
    lifecycle.observe(document.getElementById('main'),{childList:true});
    function closePhoto(){if(nativeDialog)dialog.close();else{dialog.removeAttribute('open');restore();}}
    opener.addEventListener('click',()=>{
      document.body.classList.add('photo-is-open');
      if(nativeDialog)dialog.showModal();
      else{dialog.classList.add('standard-photo-fallback');dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');backdrop=document.createElement('div');backdrop.className='standard-photo-backdrop';container.append(backdrop);backdrop.addEventListener('click',closePhoto);dialog.setAttribute('open','');document.addEventListener('keydown',keydown);closer.focus();}
    });
    closer.addEventListener('click',closePhoto);
    dialog.addEventListener('close',restore);
    dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closePhoto();}});
    container.querySelector('[data-copy-standard]').addEventListener('click',async()=>{const status=container.querySelector('#standard-copy-status');try{await navigator.clipboard.writeText(canonical);status.textContent=`已复制 ${record.name} 固定档案链接。`;}catch{status.textContent=`${record.name}：可长按或右键此链接复制：`;const link=document.createElement('a');link.href=canonical;link.textContent=canonical;status.append(link);}});
  }
  window.StandardArchive={render,wire};
})();
