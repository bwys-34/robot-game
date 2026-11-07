import {DriveScene} from './drive-scene';
import {DriveState,type DriveExperience} from './drive-state';
import {DriveInput,DriveActivationInput} from './drive-input';
import {DrivePanel,element,type DriveSource} from './drive-panel';
import {EMPTY_DRIVE_COMMAND,type DriveCommand} from './drive-config';
import type {DrivePadProfile} from './drive-pad-layout';
import {DriveAudio,type DriveAudioStatus} from './drive-audio';

let layout:DrivePadProfile='standard';try{if(localStorage.getItem('g1-drive-layout-v1')==='exhibition-android')layout='exhibition-android';}catch{}
const state=new DriveState({experience:'free'}),input=new DriveInput(undefined,layout),activation=new DriveActivationInput(layout),panel=new DrivePanel();
const audio=new DriveAudio(updateAudioButton);
function updateAudioButton(status:DriveAudioStatus){
  const button=element<HTMLButtonElement>('sound-toggle');
  const labels={off:'开启音效',on:'音效已开',pending:'音效开启中…',resume:'恢复音效',unavailable:'音效不可用'};
  button.textContent=labels[status];button.dataset.sound=status;button.setAttribute('aria-pressed',String(status==='on'));
  button.disabled=status==='pending'||status==='unavailable';
  button.title=status==='on'?'点击静音 · 落脚与操作提示音为网页合成示意':'点击开启落脚与操作提示音 · 不影响手柄连接';
}
element('sound-toggle').addEventListener('click',()=>{void audio.toggle();});
let scene:DriveScene|undefined,source:DriveSource='pad',loaded=false,waiting=false;
let inputStatus='paused',copy='按 A 开始体验 · 松开按键与摇杆后接管；也可点击开始。';
let signature='',selected='',last=0,uiElapsed=0,fullscreenEntered=false;
const pads=()=>{try{return [...navigator.getGamepads()].filter((p):p is Gamepad=>Boolean(p?.connected));}catch{return [];}};
const render=()=>panel.render(state,{source,input:inputStatus,copy,loaded,waiting,armed:input.active,layout});
function suspend(message='窗口已暂停 · 回到此页后按 A 或点击继续',status='paused'){
  waiting=false;activation.block();input.suspend();panel.clear();state.suspend(message);inputStatus=status;copy=message;render();
}
function start(){
  if(!loaded)return;
  panel.clear();
  element('drive-viewer').focus({preventScroll:true});
  if(source==='manual'){waiting=false;inputStatus='ready';copy='WASD 移动 · Q/E 转身 · M 模式 · [ / ] 选动作 · 1 执行 · P 暂停';state.start();render();return;}
  input.suspend();waiting=true;inputStatus='waiting';copy='正在等待手柄 · 按 A 唤醒，然后松开全部按键与摇杆。';render();
}
function chooseSource(next:DriveSource){
  suspend('切换完成 · 点击开始体验');source=next;
  element('source-pad').setAttribute('aria-pressed',String(next==='pad'));element('source-manual').setAttribute('aria-pressed',String(next==='manual'));
  element('device-controls').hidden=next!=='pad';
  element('left-stick-label').textContent=next==='pad'?'左摇杆 · 移动':'WASD · 移动';
  element('right-stick-label').textContent=next==='pad'?'右摇杆 · 转向':'Q / E · 转身';
  element('right-stick-copy').textContent=next==='pad'?'左右转身 / 上下调视角':'方向键也可转身 / 调视角';
  for(const [id,pad,manual] of [['wave-key','A','1'],['invite-key','X','2'],['stop-key','B','Esc'],['pause-key','≡','P']])element(id).textContent=next==='pad'?pad:manual;
  element('pause-key').setAttribute('aria-label',next==='pad'?'菜单键，三横线图标':'P 键');
  element('pause-key-copy').textContent=next==='pad'?'站立 / 行走':'暂停 / 继续';
  element('touch-controls').hidden=next!=='manual';element('show-touch').setAttribute('aria-expanded',String(next==='manual'));document.body.dataset.touch=String(next==='manual');
  copy=next==='pad'?'按 A 开始 / 继续 · 松开全部按键与摇杆后接管。':'WASD 移动 · Q/E 转身 · 1 挥手 · 2 邀请，或按住下方屏幕方向键。';render();
}
function pause(){
  if(waiting){suspend('已取消等待 · 点击开始可重新连接');return;}
  if(state.paused){start();return;}
  state.suspend();panel.clear();inputStatus='paused';copy=source==='pad'?'已暂停 · 按 A 继续，松开按键与摇杆后接管':'已暂停 · 按 P 或点击继续接待';render();
}
element('drive-start').addEventListener('click',start);element('drive-pause').addEventListener('click',pause);
for(const button of document.querySelectorAll<HTMLButtonElement>('button[data-experience]'))button.addEventListener('click',()=>{
  const next=button.dataset.experience as DriveExperience;if(next===state.experience)return;
  suspend();state.setExperience(next);scene?.reset();copy=state.message;render();
});
element('drive-reset').addEventListener('click',()=>{
  suspend('任务已重置 · 按 A 或点击开始接待');state.reset();scene?.reset();render();
});
element('source-pad').addEventListener('click',()=>chooseSource('pad'));
element('source-manual').addEventListener('click',()=>chooseSource('manual'));
element('device-select').addEventListener('change',event=>{selected=(event.target as HTMLSelectElement).value;suspend('已选择设备 · 点击开始接待');});
element<HTMLSelectElement>('pad-layout').value=layout;
element('pad-layout').addEventListener('change',event=>{
  suspend('布局已切换 · 松开双摇杆和按键，按 A 或点击继续接待');
  layout=(event.target as HTMLSelectElement).value==='exhibition-android'?'exhibition-android':'standard';input.setProfile(layout);activation.setProfile(layout);
  try{localStorage.setItem('g1-drive-layout-v1',layout);}catch{}render();
});
element('camera-toggle').addEventListener('click',()=>{scene?.toggleCamera();updateCameraLabel();});
element('retry').addEventListener('click',()=>location.reload());
function updateCameraLabel(){const button=element('camera-toggle'),value=String(Boolean(scene?.overview)),debug=String(state.mode==='debug');if(button.dataset.overview===value&&button.dataset.lab===debug)return;button.dataset.overview=value;button.dataset.lab=debug;button.innerHTML=(scene?.overview?'返回跟随':'切换全景')+(state.mode==='debug'?'':' <kbd>Y</kbd>');}
async function fullscreen(){
  try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch{copy='浏览器未允许全屏，可使用浏览器菜单进入全屏。';render();}
}
element('fullscreen').addEventListener('click',fullscreen);element('fullscreen-reenter').addEventListener('click',fullscreen);
document.addEventListener('fullscreenchange',()=>{
  const on=Boolean(document.fullscreenElement);if(on)fullscreenEntered=true;
  element('fullscreen').textContent=on?'退出全屏 ↙':'全屏 ↗';element('fullscreen').setAttribute('aria-pressed',String(on));
  element('fullscreen-reenter').hidden=on||!fullscreenEntered;scene?.resize();
});
window.addEventListener('blur',()=>{audio.interrupt();suspend();});document.addEventListener('visibilitychange',()=>{if(document.hidden){audio.interrupt();suspend('页面已切到后台 · 回到此页后按 A 或点击继续接待');}});
window.addEventListener('pagehide',()=>{audio.interrupt();suspend();});

function refreshDevices(available:Gamepad[]){
  const next=available.map(p=>`${p.index}:${p.id}:${p.mapping}`).join('|');if(next===signature)return;signature=next;
  const select=element<HTMLSelectElement>('device-select');
  select.replaceChildren(...available.map(p=>new Option(`${p.index+1} · ${p.id}`,String(p.index))));
  if(!available.length)select.add(new Option('未读到手柄 · 按 A 唤醒',''));
  if(available.some(p=>String(p.index)===selected))select.value=selected;
  else {const preferred=available.find(p=>DriveInput.supported(p)&&/045e.*02e0|Xbox|STANDARD GAMEPAD/i.test(p.id))??available.find(p=>DriveInput.supported(p))??available[0];selected=preferred?String(preferred.index):'';select.value=selected;}
}
function tick(now:number){
  requestAnimationFrame(tick);
  if(last&&now-last<1000/61)return;
  const dt=last?Math.min(.1,(now-last)/1000):1/60;last=now;
  if(document.hidden)return;
  const available=pads();uiElapsed+=dt;if(uiElapsed>=.1)refreshDevices(available);
  const chosen=available.find(p=>String(p.index)===selected)??available.find(p=>DriveInput.supported(p))??available[0];
  if(activation.read(chosen?[chosen]:[],document.hasFocus(),loaded&&source==='pad'&&!waiting&&inputStatus!=='neutral'&&(!state.running||state.paused))){
    selected=String(chosen!.index);start();
  }
  let command:DriveCommand=panel.read(source==='manual');
  if(waiting&&source==='pad'){
    const pad=chosen;
    if(pad){
      if(!input.arm(pad)){waiting=false;inputStatus='unsupported';copy=layout==='exhibition-android'?'设备与展厅实测映射不符 · 需 Xbox Wireless Controller、4 轴 / 16 按钮；可切回标准布局或按键检测。':'当前设备没有标准映射 · 请切换已测布局，或使用键盘 / 触屏。';}
      else {waiting=false;inputStatus='neutral';copy='已找到手柄 · 松开双摇杆与按键，准备接管。';}
    }
  }
  if(source==='pad'&&input.active){
    const frame=input.read(available,document.hasFocus(),state.mode);
    if(frame.ready){
      if(inputStatus==='neutral')state.start();
      for(const key of ['wave','invite','stop','pause','camera'] as const)frame.command[key] ||= command[key];
      for(const key of ['mode','actionStep','actionSelect','actionTrigger','speedMode','recover','toggleStand','stepping','diagnose','labSelect','labStep','labAdjust','labConfirm','labReset'] as const)if(command[key]!==undefined)(frame.command as unknown as Record<string,unknown>)[key]=command[key];
      frame.command.cycleMode ||= command.cycleMode;
      frame.command.actionStep=command.actionStep??frame.command.actionStep;
      frame.command.actionSelect=command.actionSelect??frame.command.actionSelect;
      command=frame.command;
      inputStatus=state.paused?'paused':'ready';copy=state.paused?'网页已暂停 · 松开 B，按 A 继续，再松开按键与摇杆':state.mode==='debug'?'关节实验 · 左杆调角度，十字键选关节；A 确认，X 示范，Y 复位。':layout==='standard'?'RT + A 行走；LT 与 B / Y / X 组合，LT 需按满 2 秒。':'展厅安卓 · 左杆移动，右杆转身；LB 切状态，RB + 彩色键跳舞。';
      if(frame.triggers){
        const {left,right,holdProgress}=frame.triggers;
        const hold=left>.5?(holdProgress<1?` · LT 确认 ${(holdProgress*2).toFixed(1)} / 2 秒`:' · LT 组合已就绪'):'';
        copy=`LT ${Math.round(left*100)}% · RT ${Math.round(right*100)}%${hold} · ${copy}`;
      }
    }else if(frame.status==='neutral'){inputStatus='neutral';copy='请松开双摇杆、肩键、扳机和全部按键，回中后自动接管。';command={...EMPTY_DRIVE_COMMAND};}
    else suspend(frame.status==='disconnected'?'手柄已断开 · 重新连接后松开按键，再按 A 继续':frame.status==='unsupported'?'输入与所选映射不符 · 请先检查按键布局或进入按键检测':'输入已暂停 · 按 A 或点击继续接待',frame.status);
  }
  if(command.stop&&waiting){suspend('已取消等待');command={...EMPTY_DRIVE_COMMAND};}
  if(command.camera){scene?.toggleCamera();updateCameraLabel();}
  state.update(dt,command);
  if(state.paused&&inputStatus==='ready')inputStatus='paused';
  else if(!state.paused&&state.running&&(source==='manual'||input.active)&&inputStatus==='paused')inputStatus='ready';
  if(scene&&loaded){const driving=state.mode==='locomotion'&&[command.forward,command.strafe,command.turn].some(v=>Math.abs(v)>.05);const completed=scene.update(dt,state,command.look,driving);if(completed)state.finishGesture(completed);scene.render(dt,state.running&&!state.paused);updateCameraLabel();}
  audio.update(state,scene?.rig?.footfalls??[],scene?.rig?.actionSounds);
  if(uiElapsed>=.1){render();uiElapsed=0;}
}
async function init(){
  try{
    scene=new DriveScene(element('drive-viewer'));
    scene.renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();suspend('画面连接中断 · 请重新加载页面');loaded=false;element('loading-copy').textContent='画面需要重新加载';element('loading').hidden=false;element('retry').hidden=false;render();});
    await scene.load();scene.update(1/60,state,0);scene.render(1/60,false);
    loaded=true;element('loading').hidden=true;document.body.dataset.ready='true';render();requestAnimationFrame(tick);
  }catch(error){console.error('G1 driving:',error);element('loading-copy').textContent='模型暂时无法显示，请重试';element('retry').hidden=false;copy='请确认浏览器支持 WebGL，并通过本地预览地址打开。';render();}
}
init();
