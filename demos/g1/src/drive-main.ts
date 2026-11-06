import {DriveScene} from './drive-scene';
import {DriveState} from './drive-state';
import {DriveInput,DriveActivationInput} from './drive-input';
import {DrivePanel,element,type DriveSource} from './drive-panel';
import {EMPTY_DRIVE_COMMAND,type DriveCommand} from './drive-config';

const state=new DriveState(),input=new DriveInput(),activation=new DriveActivationInput(),panel=new DrivePanel();
let scene:DriveScene|undefined,source:DriveSource='pad',loaded=false,waiting=false;
let inputStatus='paused',copy='按 A 开始接待 · 松开按键与摇杆后接管；也可点击开始。';
let signature='',selected='',last=0,uiElapsed=0,fullscreenEntered=false;
const pads=()=>{try{return [...navigator.getGamepads()].filter((p):p is Gamepad=>Boolean(p?.connected));}catch{return [];}};
const render=()=>panel.render(state,{source,input:inputStatus,copy,loaded,waiting,armed:input.active});
function suspend(message='窗口已暂停 · 回到此页后按 A 或点击继续接待',status='paused'){
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
  suspend('切换完成 · 点击开始接待');source=next;
  element('source-pad').setAttribute('aria-pressed',String(next==='pad'));element('source-manual').setAttribute('aria-pressed',String(next==='manual'));
  element('device-select').hidden=next!=='pad';
  element('left-stick-label').textContent=next==='pad'?'左摇杆 · 移动':'WASD · 移动';
  element('right-stick-label').textContent=next==='pad'?'右摇杆 · 转向':'Q / E · 转身';
  element('right-stick-copy').textContent=next==='pad'?'左右转身 / 上下调视角':'方向键也可转身 / 调视角';
  for(const [id,pad,manual] of [['wave-key','A','1'],['invite-key','X','2'],['stop-key','B','Esc'],['pause-key','≡','P']])element(id).textContent=next==='pad'?pad:manual;
  element('pause-key').setAttribute('aria-label',next==='pad'?'菜单键，三横线图标':'P 键');
  element('pause-key-copy').textContent=next==='pad'?'站立 / 行走':'暂停 / 继续';
  element('touch-controls').hidden=next!=='manual';element('show-touch').setAttribute('aria-expanded',String(next==='manual'));document.body.dataset.touch=String(next==='manual');
  copy=next==='pad'?'按 A 开始 / 继续接待 · 松开全部按键与摇杆后接管。':'WASD 移动 · Q/E 转身 · 1 挥手 · 2 邀请，或按住下方屏幕方向键。';render();
}
function pause(){
  if(waiting){suspend('已取消等待 · 点击开始可重新连接');return;}
  if(state.paused){start();return;}
  state.suspend();panel.clear();inputStatus='paused';copy=source==='pad'?'已暂停 · 按 A 继续，松开按键与摇杆后接管':'已暂停 · 按 P 或点击继续接待';render();
}
element('drive-start').addEventListener('click',start);element('drive-pause').addEventListener('click',pause);
element('drive-reset').addEventListener('click',()=>{
  suspend('任务已重置 · 按 A 或点击开始接待');state.reset();scene?.reset();render();
});
element('source-pad').addEventListener('click',()=>chooseSource('pad'));
element('source-manual').addEventListener('click',()=>chooseSource('manual'));
element('device-select').addEventListener('change',event=>{selected=(event.target as HTMLSelectElement).value;suspend('已选择设备 · 点击开始接待');});
element('camera-toggle').addEventListener('click',()=>{scene?.toggleCamera();updateCameraLabel();});
element('retry').addEventListener('click',()=>location.reload());
function updateCameraLabel(){const button=element('camera-toggle'),value=String(Boolean(scene?.overview));if(button.dataset.overview===value)return;button.dataset.overview=value;button.innerHTML=scene?.overview?'返回跟随 <kbd>Y</kbd>':'切换全景 <kbd>Y</kbd>';}
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
window.addEventListener('blur',()=>suspend());document.addEventListener('visibilitychange',()=>{if(document.hidden)suspend('页面已切到后台 · 回到此页后按 A 或点击继续接待');});
window.addEventListener('pagehide',()=>suspend());

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
      if(!input.arm(pad)){waiting=false;inputStatus='unsupported';copy='当前设备没有标准映射 · 请使用独立 Edge，或切换键盘 / 触屏。';}
      else {waiting=false;inputStatus='neutral';copy='已找到手柄 · 松开双摇杆与按键，准备接管。';}
    }
  }
  if(source==='pad'&&input.active){
    const frame=input.read(available,document.hasFocus(),state.mode);
    if(frame.ready){
      if(inputStatus==='neutral')state.start();
      for(const key of ['wave','invite','stop','pause','camera'] as const)frame.command[key] ||= command[key];
      for(const key of ['mode','actionStep','actionSelect','actionTrigger','speedMode','recover','toggleStand','stepping','diagnose'] as const)if(command[key]!==undefined)(frame.command as unknown as Record<string,unknown>)[key]=command[key];
      frame.command.cycleMode ||= command.cycleMode;
      frame.command.actionStep=command.actionStep??frame.command.actionStep;
      frame.command.actionSelect=command.actionSelect??frame.command.actionSelect;
      command=frame.command;
      inputStatus=state.paused?'paused':'ready';copy=state.paused?'网页已暂停 · 松开 B，按 A 继续，再松开按键与摇杆':'飞智沙漠狐 · 左摇杆移动，右摇杆转身；单独按下并松开 RB 切模式';
    }else if(frame.status==='neutral'){inputStatus='neutral';copy='请松开双摇杆、肩键、扳机和全部按键，回中后自动接管。';command={...EMPTY_DRIVE_COMMAND};}
    else suspend(frame.status==='disconnected'?'手柄已断开 · 重新连接后松开按键，再按 A 继续':'输入已暂停 · 按 A 或点击继续接待',frame.status);
  }
  if(command.stop&&waiting){suspend('已取消等待');command={...EMPTY_DRIVE_COMMAND};}
  if(command.camera){scene?.toggleCamera();updateCameraLabel();}
  state.update(dt,command);
  if(state.paused&&inputStatus==='ready')inputStatus='paused';
  else if(!state.paused&&state.running&&(source==='manual'||input.active)&&inputStatus==='paused')inputStatus='ready';
  if(scene&&loaded){const completed=scene.update(dt,state,command.look);if(completed)state.finishGesture(completed);scene.render(dt,state.running&&!state.paused);updateCameraLabel();}
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
