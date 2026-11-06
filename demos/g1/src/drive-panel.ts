import {EMPTY_DRIVE_COMMAND,DRIVE_MODES,passiveMode,type DriveCommand,type DriveMode,type DriveSpeed} from './drive-config';
import {DRIVE_ACTIONS,PERFORMANCE_SHORTCUTS,actionInfo,type DriveActionId} from './drive-actions';
import type {DriveState} from './drive-state';
import type {DrivePadProfile} from './drive-pad-layout';
export const element=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
export type DriveSource='pad'|'manual';
export interface DriveStatus {source:DriveSource;input:string;copy:string;loaded:boolean;waiting:boolean;armed:boolean;layout?:DrivePadProfile;}
const tasks={
  arrival:['01 / 03','一起迎接新游客','把 G1 开到迎宾点，松开摇杆，稳稳停在金色圆圈里。'],
  greeting:['02 / 03','给游客一个招呼','面向前方的游客，按 A 挥手。看一看肩和肘怎样协同。'],
  guide:['03 / 03','带游客看看展品','走向右侧圆圈，转向金色展品，按 X 发出邀请。'],
  complete:['03 / 03','你是今天的接待员！','也可以继续自由驾驶，或重新挑战，试试更少碰到边界。'],
};
/** DOM feedback runs at 10Hz; continuous inputs stay independent of its refresh. */
export class DrivePanel {
  private held=new Set<string>();
  private keys=new Set<string>();
  private pending:Partial<DriveCommand>={};
  constructor(){
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-mode]'))button.addEventListener('click',()=>{this.pending.mode=button.dataset.driveMode as DriveMode;});
    element('recover-body').addEventListener('click',()=>{this.pending.recover=true;});
    element('step-toggle').addEventListener('click',()=>{if(this.stepping)this.pending.mode='stand';else this.pending.stepping=true;});
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-speed]'))button.addEventListener('click',()=>{this.pending.speedMode=button.dataset.driveSpeed as DriveSpeed;});
    const shortcuts=element('performance-shortcuts');
    for(const shortcut of PERFORMANCE_SHORTCUTS){
      const button=document.createElement('button');button.dataset.performanceAction=shortcut.action;
      button.innerHTML=`<kbd>RB + ${shortcut.key}</kbd><span>${shortcut.title}</span>`;
      button.addEventListener('click',()=>{this.pending.actionTrigger=shortcut.action;});shortcuts.append(button);
    }
    const select=element<HTMLSelectElement>('action-select');
    for(const group of [...new Set(DRIVE_ACTIONS.map(a=>a.group))]){const optionGroup=document.createElement('optgroup');optionGroup.label=group;for(const a of DRIVE_ACTIONS.filter(a=>a.group===group))optionGroup.append(new Option(a.title,a.id));select.append(optionGroup);}
    select.addEventListener('change',()=>{this.pending.actionSelect=select.value as DriveActionId;});
    for(const step of [-1,1])element(step<0?'action-prev':'action-next').addEventListener('click',()=>{this.pending.actionStep=step;});
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-hold]')){
      const release=()=>this.held.delete(button.dataset.hold!);
      button.addEventListener('pointerdown',event=>{event.preventDefault();button.setPointerCapture(event.pointerId);this.held.add(button.dataset.hold!);});
      for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,release);
    }
    const actions:Record<string,keyof DriveCommand>={'action-wave':'wave','action-menu-play':'wave','action-invite':'invite','emergency-stop':'stop'};
    for(const [id,action] of Object.entries(actions))element(id).addEventListener('click',()=>{this.pending[action]=true as never;});
    const allowed=new Set(['w','s','a','d','q','e','arrowleft','arrowright','arrowup','arrowdown',' ','1','2','c','p','escape','m','[',']','r']);
    document.addEventListener('keydown',event=>{
      const target=event.target as HTMLElement;
      if(target.closest('input,select,textarea,[contenteditable=true]'))return;
      if(event.key===' '&&target.closest('button,a'))return;
      const key=event.key.toLowerCase();if(!allowed.has(key))return;
      event.preventDefault();this.keys.add(key);if(event.repeat)return;
      if(key==='m')this.pending.cycleMode=true;
      if(key==='r')this.pending.recover=true;
      if(key==='['||key===']')this.pending.actionStep=key==='['?-1:1;
      const action:Record<string,keyof DriveCommand>={' ':'wave','1':'wave','2':'invite','c':'camera','p':'pause','escape':'stop'};
      if(action[key])this.pending[action[key]]=true as never;
    });
    document.addEventListener('keyup',event=>this.keys.delete(event.key.toLowerCase()));
    element('show-touch').addEventListener('click',()=>{
      const control=element('touch-controls');control.hidden=!control.hidden;
      element('show-touch').setAttribute('aria-expanded',String(!control.hidden));document.body.dataset.touch=String(!control.hidden);this.held.clear();
    });
  }
  private stepping=false;
  clear():void{this.held.clear();this.keys.clear();this.pending={};}
  read(manual:boolean):DriveCommand{
    const command={...EMPTY_DRIVE_COMMAND,...this.pending};this.pending={};
    if(!manual)return command;
    const down=(key:string,button:string)=>this.keys.has(key)||this.held.has(button);
    command.forward=Number(down('w','forward'))-Number(down('s','back'));
    command.strafe=Number(down('d','right'))-Number(down('a','left'));
    command.turn=Number(down('q','turn-left')||this.keys.has('arrowleft'))-Number(down('e','turn-right')||this.keys.has('arrowright'));
    command.look=Number(this.keys.has('arrowup'))-Number(this.keys.has('arrowdown'));
    return command;
  }
  render(state:DriveState,status:DriveStatus):void{
    const observed=status.source==='pad'&&status.layout==='exhibition-android';
    const input=status.input;document.body.dataset.input=input;document.body.dataset.stage=state.stage;
    document.body.dataset.mode=state.mode;document.body.dataset.action=state.selectedAction;
    document.body.dataset.body=state.body;document.body.dataset.stepping=String(state.stepping);document.body.dataset.speed=state.speedMode;
    this.stepping=state.stepping;
    const speedNames={slow:'低速',fast:'高速'};
    element('speed-status').textContent=`当前：${speedNames[state.speedMode]}`;
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-speed]')){
      const mode=button.dataset.driveSpeed as DriveSpeed;
      button.setAttribute('aria-pressed',String(mode===state.speedMode));
      button.disabled=!state.running||state.paused||state.body!=='upright'||passiveMode(state.mode);
      button.querySelector('small')!.textContent=status.source==='manual'||observed&&mode==='slow'?'点击切换':{slow:'LT 连按 2 次',fast:'LB 连按 2 次'}[mode];
      button.title=status.source==='manual'||observed&&mode==='slow'?'点击切换速度档':mode==='slow'?'LT 左后扳机快速按下并松开两次':'LB 左肩键快速按下并松开两次';
    }
    element('speed-help').textContent=!state.running?'默认低速 · 开始接待后可切换高低速。':
      state.paused?'已暂停 · 继续接待后可调速。':state.body!=='upright'||passiveMode(state.mode)?'先起身恢复站立，再切行走体验速度。':state.mode!=='locomotion'?'速度档已记住 · 切回行走模式后生效。':
      `${{slow:'低速适合靠近目标',fast:'高速适合快速移动'}[state.speedMode]} · ${status.source==='pad'?'摇杆推得越远，走得越快':'点击上方按钮切档'}。速度为网页模拟。`;
    element('step-toggle').setAttribute('aria-pressed',String(state.stepping));element('step-toggle').textContent=state.stepping?'停止踏步':'持续踏步';
    element<HTMLButtonElement>('step-toggle').disabled=!state.running||state.paused||state.body!=='upright'||passiveMode(state.mode)||Boolean(state.gesture);
    const recover=element<HTMLButtonElement>('recover-body');recover.disabled=!state.running||state.paused||state.body!=='fallen';recover.textContent=state.body==='recovering'?'正在起身…':'起身复位';
    const bodyText={upright:passiveMode(state.mode)?'待启动':state.stepping?'持续踏步':DRIVE_MODES.find(m=>m.id===state.mode)!.title,falling:'失去支撑',fallen:'已倒地',recovering:'起身复位'}[state.body];
    element('robot-state').textContent=bodyText;
    for(const b of document.querySelectorAll<HTMLButtonElement>('[data-drive-mode]')){b.setAttribute('aria-pressed',String(b.dataset.driveMode===state.mode));b.disabled=!status.loaded;}
    const modeInfo=DRIVE_MODES.find(m=>m.id===state.mode)!;
    element('mode-title').textContent=`${modeInfo.title} · ${modeInfo.hint}`;
    element('mode-copy').textContent=modeInfo.copy;
    if(observed&&(state.mode==='damp'||state.mode==='zero'))element('mode-copy').textContent=(state.mode==='damp'?'关节有阻力，但不主动支撑，网页以较慢倒地示意。':'电机不出力，不维持站姿，网页以较快倒地示意。')+'请点“起身复位”恢复站立。';
    element('pause-key').textContent=observed?'触屏':status.source==='pad'?'≡':'P';element('pause-key-copy').textContent=observed?'切换上方模式':status.source==='pad'?'站立 / 行走':'暂停 / 继续';
    element('pause-key').setAttribute('aria-label',observed?'菜单键未读到，请点击模式按钮':status.source==='pad'?'菜单键，三横线图标':'P 键');
    element('performance-shortcuts').hidden=state.mode!=='performance';
    element('normal-gestures').hidden=state.mode==='performance';
    element('action-menu-play').hidden=state.mode!=='performance';
    element('action-menu-play').textContent=status.source==='pad'?'A ▶':'播放 ▶';
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-performance-action]')){
      button.disabled=!state.running||state.paused||Boolean(state.gesture)||state.needsNeutral||state.body!=='upright';
      button.setAttribute('aria-pressed',String(state.gesture===button.dataset.performanceAction));
    }
    element('mode-shortcuts').textContent=status.source==='pad'?(state.mode==='performance'?
      '按住 RB + A 律动 / B 机械舞 / X 双臂摆舞 / Y 加油舞。B 单独按为暂停。\n单独按下并松开 RB 切模式；十字键左右选其他动作，A 播放。\n暂停按 A 继续；LT 按住 0.6 秒，再点 B 阻尼 / Y 零力矩 / X 起身。':
      'LT 左后扳机，LB 左肩键；RT / RB 在右侧 · 单独按下并松开 RB 切模式。\n十字键左右选动作，A 播放；双击菜单键 ≡ 持续踏步。\nLT 按住 0.6 秒，再点 B 阻尼 / Y 零力矩 / X 起身。\n视图键（双框）+ A 握手 / Y 挥手 / X 转身挥手；LT + RT 调试。'):
      'WASD 移动 · Q / E 转身 · M 切模式 · [ / ] 选动作 · 1 或空格播放。\n表演模式可直接点击四个舞蹈按钮；P 暂停 / 继续，R 起身。';
    if(observed)element('mode-shortcuts').textContent=(state.mode==='performance'?'按住 RB + A 律动 / B 机械舞 / X 双臂摆舞 / Y 加油舞。\n':'')+'展厅安卓实测：A 播放 / 继续，B 暂停，X 邀请，Y 相机。\n单独按下并松开 RB 切模式；十字键左右选动作；双击 LB 高速。\nLT / RT、菜单与视图键未读到：低速、起身及模式请点屏幕按钮。';
    element('pad-layout').title=observed?'按展厅照片中的通道转换；未测试的按键不绑定':'标准浏览器布局，电脑保持原控制';
    const action=actionInfo(state.selectedAction),select=element<HTMLSelectElement>('action-select');
    if(select.value!==state.selectedAction)select.value=state.selectedAction;
    element('selected-action-title').textContent=action.title;element('action-description').textContent=action.description;
    document.body.dataset.motion=state.paused?'paused':state.body!=='upright'?state.body:state.gesture??(state.speed>.02?'walking':'idle');
    element('connection-label').textContent=status.source==='manual'?'键盘 / 触屏':input==='ready'?'手柄已接通':input==='waiting'?'正在等待手柄':'手柄输入已暂停';
    element('connection-label').parentElement!.dataset.ready=String(input==='ready');
    element('input-status').textContent=status.copy;
    const start=element<HTMLButtonElement>('drive-start');start.disabled=!status.loaded||status.waiting||(!state.paused&&state.running&&input==='ready');
    const startKey=status.source==='pad'?'A':'↗';
    start.innerHTML=status.waiting?'等待连接… <span>◌</span>':state.paused?`继续接待 <span>${startKey}</span>`:state.running?'驾驶中 <span>↗</span>':`开始接待 <span>${startKey}</span>`;
    const pause=element<HTMLButtonElement>('drive-pause');pause.disabled=!status.loaded||(!state.running&&!status.waiting);pause.textContent=status.waiting?'取消':state.paused?'继续':'暂停';
    for(const id of ['action-wave','action-menu-play','action-invite'])element<HTMLButtonElement>(id).disabled=!state.running||state.paused||Boolean(state.gesture)||passiveMode(state.mode)||state.body!=='upright'||state.needsNeutral;
    element<HTMLButtonElement>('emergency-stop').disabled=!state.running&&!status.waiting;
    const [step,title,description]=tasks[state.stage];element('mission-step').textContent=step;element('mission-title').textContent=title;element('mission-description').textContent=description;
    const stageIndex=['arrival','greeting','guide','complete'].indexOf(state.stage);
    ['arrival','greeting','guide'].forEach((stage,i)=>element(`route-${stage}`).dataset.state=i<stageIndex?'done':i===stageIndex?'current':'');
    element('target-label').textContent=state.stage==='guide'?'距离展台接待点':'距离迎宾点';
    element('target-distance').innerHTML=`${state.targetDistance.toFixed(1)} <small>m</small>`;
    const facing=Math.abs(state.facingError)<Math.PI/5;
    element('facing-label').textContent=state.stage==='arrival'?'停稳后解锁下一步':facing?'朝向正确 ✓':`还需向${state.facingError>0?'左':'右'}转`;
    element('arrival-progress').textContent=state.targetDistance>state.target.radius?'向金色圆圈出发 ↗':state.speed>.055?'松开摇杆，停稳一下':state.stage==='arrival'?`停稳中 ${Math.min(100,Math.round(state.arriveHold/.5*100))}%`:state.gesture?'正在和游客互动…':state.stage==='greeting'?'按 A · 挥手招呼':'按 X · 邀请指引';
    element('drive-message').textContent=state.message;element('drive-message').dataset.warning=String(Boolean(state.contact)||state.body==='fallen'||state.body==='falling');
    if(state.body!=='upright')element('arrival-progress').textContent=state.body==='recovering'?'正在恢复支撑…':'点击起身复位继续任务';
    element('drive-result').hidden=state.stage!=='complete';element('result-stars').textContent='★'.repeat(state.stars)+'☆'.repeat(3-state.stars);
    element('result-score').innerHTML=`${state.score} <small>分</small>`;
    element('speed').textContent=state.speed.toFixed(2);element('motion-label').textContent=state.paused?'已暂停':state.body!=='upright'?bodyText:state.gesture?actionInfo(state.gesture).title:state.speed>.02||Math.abs(state.angular)>.1?'正在迈步':state.running?bodyText:'等待出发';
    element('distance-travelled').textContent=`${state.distance.toFixed(1)} m`;
    element('fall-count').textContent=String(state.falls);
    element('elapsed').textContent=`${String(Math.floor(state.seconds/60)).padStart(2,'0')}:${String(Math.floor(state.seconds%60)).padStart(2,'0')}`;
    const map=document.getElementById('map-robot')!;
    map.setAttribute('transform',`translate(${90+state.x*24.5} ${94+state.z*24.5}) rotate(${180-state.yaw*180/Math.PI})`);
    // Position is part of the visitor's map telemetry, also useful in browser QA.
    map.dataset.x=String(state.x);map.dataset.z=String(state.z);map.dataset.yaw=String(state.yaw);
    const target=document.getElementById('map-target')!;target.setAttribute('cx',String(90+state.target.x*24.5));target.setAttribute('cy',String(94+state.target.z*24.5));
    target.setAttribute('visibility',state.stage==='complete'?'hidden':'visible');
  }
}
