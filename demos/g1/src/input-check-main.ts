import {snapshotPad,padSignature,InputCapture,type PadSnapshot,type CaptureRecord} from './input-feedback';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const TARGETS=[
 ['dpad-up','方向键 ↑','↑'],['dpad-down','方向键 ↓','↓'],['dpad-left','方向键 ←','←'],['dpad-right','方向键 →','→'],
 ['a','A 键','A'],['b','B 键','B'],['x','X 键','X'],['y','Y 键','Y'],
 ['lb','LB 左肩键','LB'],['lt','LT 左扳机','LT'],['rb','RB 右肩键','RB'],['rt','RT 右扳机','RT'],
 ['view','视图键 双框','▣'],['menu','菜单键 ≡','≡'],['left-press','左摇杆按下','L↓'],['right-press','右摇杆按下','R↓'],
 ['left-up','左摇杆 ↑','L↑'],['left-down','左摇杆 ↓','L↓'],['left-left','左摇杆 ←','L←'],['left-right','左摇杆 →','L→'],
 ['right-up','右摇杆 ↑','R↑'],['right-down','右摇杆 ↓','R↓'],['right-left','右摇杆 ←','R←'],['right-right','右摇杆 →','R→'],
] as const;
const STORE='g1-input-feedback-v1';
let selected='',current:PadSnapshot|null=null,rest:PadSnapshot|null=null,capture:InputCapture|null=null,target='',records:CaptureRecord[]=[],lastTick=0,lastSignature='',buttonPage=0,axisPage=0,deviceSignature='';
const notice=(s:string)=>{$('notice').textContent=s;};
const text=(id:string,value:string)=>{const e=$(id);if(e.textContent!==value)e.textContent=value;};
const num=(v:number|null)=>v===null?'无效':v.toFixed(3);
const title=(id:string)=>TARGETS.find(t=>t[0]===id)?.[1]??id;
const summary=(r:CaptureRecord)=>[...r.buttons.map(b=>`按钮 ${b.index}（${num(b.min)} → ${num(b.max)}）`),...r.axes.map(a=>`轴 ${a.index}（变化 ${a.minDelta.toFixed(3)} ～ ${a.maxDelta.toFixed(3)}）`),...new Set(r.keys.filter(k=>k.pressed).map(k=>`键盘 ${k.code||k.key}`))].join(' · ')||'未观察到变化';
function persist(){try{localStorage.setItem(STORE,JSON.stringify({version:1,records}));}catch{text('storage-note','本设备无法保存记录，请及时复制或下载报告。');}}
try{const saved=JSON.parse(localStorage.getItem(STORE)??'null');if(saved?.version===1&&Array.isArray(saved.records))records=saved.records.filter((r:CaptureRecord)=>TARGETS.some(t=>t[0]===r.target)&&Array.isArray(r.axes)&&Array.isArray(r.buttons)&&Array.isArray(r.keys)&&r.axes.every(a=>Number.isFinite(a.index)&&Number.isFinite(a.minDelta)&&Number.isFinite(a.maxDelta))&&r.buttons.every(b=>Number.isFinite(b.index)&&(b.min===null||Number.isFinite(b.min))&&(b.max===null||Number.isFinite(b.max)))).slice(-100);}catch{/* A damaged local report starts empty. */}
for(let i=0;i<TARGETS.length;i+=4){const row=document.createElement('div');row.className='target-group';for(const [id,label]of TARGETS.slice(i,i+4)){const b=document.createElement('button');b.textContent=label;b.dataset.target=id;b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>begin(id));row.append(b);}$('targets').append(row);}
function refreshProgress(){text('progress',`已保存 ${new Set(records.map(r=>r.target)).size} / 24 项`);for(const b of document.querySelectorAll<HTMLButtonElement>('[data-target]')){b.dataset.saved=String(records.some(r=>r.target===b.dataset.target));b.setAttribute('aria-pressed',String(b.dataset.target===target));}const last=records[records.length-1];text('last-saved',last?`${title(last.target)} → ${summary(last)}`:'暂无记录');}
function getPads():Gamepad[]{try{return typeof navigator.getGamepads==='function'?[...navigator.getGamepads()].filter((p):p is Gamepad=>Boolean(p?.connected)):[];}catch{return [];}}
function rememberDraft(){if(capture&&!capture.interrupted&&capture.finish(performance.now()).hasInput)save(false);}
function begin(id:string){
 rememberDraft();target=id;$('save').setAttribute('disabled','');
 const base=current?rest&&padSignature(rest)===padSignature(current)?rest:null:null;
 if(current&&!base){capture=null;notice('请先松开手柄，点击「记录静止状态」，再选择检测项目。');refreshProgress();return;}
 capture=new InputCapture(id,base,performance.now());
 const t=TARGETS.find(t=>t[0]===id)!;text('target-title',t[1]);text('target-icon',t[2]);text('target-copy',id.includes('press')?'将摇杆垂直按下再松开，然后点「保存这项」。':id.includes('left-')||id.includes('right-')?'把对应摇杆推到这个方向，再回中，然后点「保存这项」。':'按下这个实体按键再松开，然后点「保存这项」。');
 text('capture-result','正在等待这项输入…');text('capture-note',base?'按键编号从 0 开始；记录包含静止值，多个通道变化会一起保留。':'尚未读到 Gamepad：仍会记录浏览器键盘事件，请先试按方向键。');
 $('repeat').removeAttribute('disabled');notice('检测中 · 请只操作选中的实体控件；切换项目时会保留已有变化。');refreshProgress();
}
function save(announce=true){
 if(!capture)return;const report=capture.finish(performance.now());if(!report.hasInput){if(announce)notice('还没有收到这项输入，请按实体按键或推动摇杆。');return;}
 records=records.filter(r=>!(r.target===report.target&&((!r.baseline&&!report.baseline)||(r.baseline&&report.baseline&&padSignature(r.baseline)===padSignature(report.baseline)))));records.push(report);persist();refreshProgress();capture=null;$('save').setAttribute('disabled','');if(announce)notice(`已保存「${title(report.target)}」。可点下一项，或选择任意控件继续。`);
}
$('save').addEventListener('click',()=>save());$('repeat').addEventListener('click',()=>{capture=null;if(target)begin(target);});
$('next').addEventListener('click',()=>{rememberDraft();const i=TARGETS.findIndex(t=>t[0]===target);begin(TARGETS[(i+1)%TARGETS.length][0]);});
$('baseline').addEventListener('click',()=>{
 capture=null;rest=current?structuredSnapshot(current):null;
 if(rest){const held=rest.buttons.map((b,i)=>b.pressed||(b.value??0)>.5?i:null).filter(i=>i!==null);notice(held.length?`静止状态已记录：按钮 ${held.join('、')} 仍有输入，已保留在报告中，请确认没有碰手柄。`:'静止状态已记录，请选择要检测的项目。');text('rest-note',`静止基线已记录 · ${rest.axes.length} 轴 / ${rest.buttons.length} 按钮${held.length?' · 有按钮持续输入':''}`);}else notice('浏览器尚未列出手柄。可先按键唤醒；也可选项目检测键盘事件。');
 $('save').setAttribute('disabled','');
});
function structuredSnapshot(p:PadSnapshot):PadSnapshot{return JSON.parse(JSON.stringify(p));}
$('device').addEventListener('change',()=>{capture?.interrupt('手动切换设备');capture=null;rest=null;selected=($<HTMLSelectElement>('device')).value;buttonPage=axisPage=0;lastSignature='';notice('已切换设备，请先松开控件并重新记录静止状态。');});
function interrupt(reason:string){if(capture){capture.interrupt(reason);const r=capture.finish(performance.now());if(r.hasInput){records.push(r);persist();refreshProgress();}capture=null;text('capture-note',reason+'；已停止当前记录，请重新选择项目。');}$('save').setAttribute('disabled','');}
addEventListener('blur',()=>interrupt('页面失去焦点'));document.addEventListener('visibilitychange',()=>{if(document.hidden)interrupt('页面进入后台');});
for(const pressed of [true,false])addEventListener(pressed?'keydown':'keyup',event=>{
 const e=event as KeyboardEvent;if((e.target as HTMLElement)?.matches('input,textarea,select')||e.ctrlKey||e.metaKey)return;
 text('keyboard',`${e.code||'无 code'} / ${e.key} · ${pressed?'按下':'松开'}`);capture?.key(e.code||e.key,e.key,pressed,performance.now());
 if(capture&&['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();
});
function renderChannels(){
 const signature=current?JSON.stringify([padSignature(current),buttonPage,axisPage]):'none';
 if(signature!==lastSignature){
  lastSignature=signature;$('buttons').replaceChildren();$('axes').replaceChildren();
  current?.buttons.slice(buttonPage*18,buttonPage*18+18).forEach((_b,j)=>{const e=document.createElement('div');e.className='raw-button';e.dataset.index=String(buttonPage*18+j);const b=document.createElement('b'),s=document.createElement('small');b.textContent=`按钮 ${buttonPage*18+j}`;e.append(b,s);$('buttons').append(e);});
  current?.axes.slice(axisPage*9,axisPage*9+9).forEach((_a,j)=>{const e=document.createElement('div');e.className='raw-axis';e.dataset.index=String(axisPage*9+j);const row=document.createElement('div'),label=document.createElement('span'),value=document.createElement('span'),track=document.createElement('div'),dot=document.createElement('i');label.textContent=`轴 ${axisPage*9+j}`;row.append(label,value);track.className='axis-track';track.append(dot);e.append(row,track);$('axes').append(e);});
 }
 for(const e of document.querySelectorAll<HTMLElement>('.raw-button')){const b=current!.buttons[Number(e.dataset.index)];e.dataset.active=String(b.pressed||(b.value??0)>.5);e.querySelector('small')!.textContent=num(b.value);}
 for(const e of document.querySelectorAll<HTMLElement>('.raw-axis')){const i=Number(e.dataset.index),a=current!.axes[i],base=rest?.axes[i];e.querySelector('div>span:last-child')!.textContent=num(a);e.dataset.active=String(a!==null&&base!==null&&base!==undefined&&Math.abs(a-base)>=.12);e.querySelector('i')!.style.left=`${(Math.max(-1,Math.min(1,a??0))+1)*50}%`;}
 for(const [kind,count,size,page]of [['buttons',current?.buttons.length??0,18,buttonPage],['axes',current?.axes.length??0,9,axisPage]] as const){$(`${kind}-prev`).toggleAttribute('disabled',page===0);$(`${kind}-next`).toggleAttribute('disabled',(page+1)*size>=count);text(kind==='buttons'?'button-page':'axis-page',count?`${page+1} / ${Math.ceil(count/size)}`:'');}
 text('button-count',String(current?.buttons.length??0));text('axis-count',String(current?.axes.length??0));
}
for(const kind of ['buttons','axes'])for(const direction of ['prev','next'])$(`${kind}-${direction}`).addEventListener('click',()=>{const delta=direction==='next'?1:-1;if(kind==='buttons')buttonPage+=delta;else axisPage+=delta;lastSignature='';});
function tick(now:number){
 requestAnimationFrame(tick);if(now-lastTick<33||document.hidden)return;lastTick=now;
 const pads=getPads(),select=$<HTMLSelectElement>('device'),signature=JSON.stringify(pads.map(p=>[p.id,p.index,p.mapping,p.axes.length,p.buttons.length]));
 if(signature!==deviceSignature){deviceSignature=signature;select.replaceChildren();for(const p of pads){const option=document.createElement('option');option.value=String(p.index);option.textContent=`${p.index+1} · ${p.id}`;select.append(option);}if(!pads.length){const o=document.createElement('option');o.value='';o.textContent='未发现手柄 · 点页面后按一下实体按键';select.append(o);}if(!pads.some(p=>String(p.index)===selected))selected=pads[0]?String(pads[0].index):'';select.value=selected;}
 const p=pads.find(p=>String(p.index)===selected);current=p?snapshotPad(p):null;
 if(rest&&(!current||padSignature(rest)!==padSignature(current))){rest=null;text('rest-note','设备或布局已变化，请松开控件重新记录静止状态。');}
 buttonPage=Math.min(buttonPage,Math.max(0,Math.ceil((current?.buttons.length??0)/18)-1));axisPage=Math.min(axisPage,Math.max(0,Math.ceil((current?.axes.length??0)/9)-1));
 if(capture&&!capture.observe(current,now)){interrupt('设备断开或布局变化');}
 text('connection',current?'手柄已读到':typeof navigator.getGamepads==='function'?'等待手柄 / 可测键盘':'此浏览器未提供 Gamepad');$('connection').dataset.ready=String(Boolean(current));
 text('device-meta',current?`mapping: ${current.mapping||'空（原始布局）'} · ${current.axes.length} 轴 · ${current.buttons.length} 按钮`:'点一下页面，再按实体按键；没有 Gamepad 时仍可观察键盘事件。');
 const active=current?.buttons.map((b,i)=>b.pressed||(b.value??0)>.5?i:null).filter(i=>i!==null)??[];
 text('live-title',active.length?`当前按下：按钮 ${active.join('、')}`:current?'手柄已连接 · 等待操作':'等待手柄，或试按方向键');
 if(capture){const r=capture.finish(now);text('capture-result',r.hasInput?summary(r):'正在等待这项输入…');$('save').toggleAttribute('disabled',!r.hasInput);}
 renderChannels();
}
function makeReport(){return {schema:'g1-input-feedback',version:1,generatedAt:new Date().toISOString(),connectionMethod:$<HTMLSelectElement>('transport').value,
 environment:{userAgent:navigator.userAgent,language:navigator.language,secureContext:isSecureContext,gamepadApi:typeof navigator.getGamepads==='function',viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},screen:{width:screen.width,height:screen.height},hardwareConcurrency:navigator.hardwareConcurrency},
 currentDevice:current,restingBaseline:rest,records,unsaved:capture?.finish(performance.now())??null,notes:['原始通道观测，不代表已完成校准。','键盘事件不能仅凭网页确定其物理来源。','未加载三维模型，检测页表现不能代替游戏帧率。']};}
const reportText=()=>JSON.stringify(makeReport(),null,2);
function showReport(){const dialog=$<HTMLDialogElement>('report-dialog');$<HTMLTextAreaElement>('report-text').value=reportText();if(!dialog.open)dialog.showModal();}
$('view-report').addEventListener('click',showReport);$('close-report').addEventListener('click',()=>$<HTMLDialogElement>('report-dialog').close());
$('copy-report').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(reportText());notice('报告已复制，可粘贴发给我。');}catch{showReport();const area=$<HTMLTextAreaElement>('report-text');area.focus();area.select();notice('自动复制不可用，请在报告框中长按复制。');}});
$('download').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([reportText()],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`g1-input-feedback-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);notice('已生成 JSON 报告，请从浏览器下载目录发送文件。');});
$('clear').addEventListener('click',()=>{if(!confirm('清空本设备已保存的检测记录？建议先下载报告。'))return;records=[];capture=null;persist();refreshProgress();text('capture-result','记录已清空，请重新选择项目。');notice('已清空记录，原游戏键位不受影响。');});
$('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{notice('浏览器未允许全屏，可继续正常检测。');}});
text('environment',`${innerWidth} × ${innerHeight} · DPR ${devicePixelRatio} · ${/Android/.test(navigator.userAgent)?'Android':navigator.platform}`);
refreshProgress();requestAnimationFrame(tick);
