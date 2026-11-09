import {EMPTY_DRIVE_COMMAND,DRIVE_MODES,passiveMode,type DriveCommand,type DriveMode,type DriveSpeed} from './drive-config';
import {DRIVE_ACTIONS,PERFORMANCE_SHORTCUTS,actionInfo,type DriveActionId} from './drive-actions';
import type {DriveState} from './drive-state';
import type {DrivePadProfile} from './drive-pad-layout';
import {DriveFeedback} from './drive-feedback';
import {DriveTouch} from './drive-touch';
import {controlGuide} from './drive-control-guide';
import {DEBUG_JOINTS,type DebugJointId} from './drive-debug-lab';
import {tutorialGuide,TUTORIAL_TASK_COUNT,TUTORIAL_ROUTE} from './drive-tutorial';
import {DriveBindingsPanel} from './drive-bindings-panel';
import type {DriveBindings} from './drive-bindings';
import {DriveHoistPanel} from './drive-hoist-panel';
export const element=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
export type DriveSource='pad'|'manual';
export interface DriveStatus {source:DriveSource;input:string;copy:string;loaded:boolean;waiting:boolean;armed:boolean;layout?:DrivePadProfile;}
/** DOM feedback runs at 10Hz; continuous inputs stay independent of its refresh. */
export class DrivePanel {
  private readonly feedback=new DriveFeedback();
  private readonly nodes=new Map<string,HTMLElement>();
  private node<T extends HTMLElement=HTMLElement>(id:string):T {
    let node=this.nodes.get(id);if(!node){node=element(id);this.nodes.set(id,node);}return node as T;
  }
  private held=new DriveTouch();
  private keys=new Set<string>();
  private pending:Partial<DriveCommand>={};
  private guideProfile='';
  private tutorialCommand:Partial<DriveCommand>|null=null;
  private readonly hoistPanel=new DriveHoistPanel(command=>Object.assign(this.pending,command));
  private current?:DriveState;
  private readonly bindingsPanel:DriveBindingsPanel;
  constructor(private readonly bindings:DriveBindings){
    this.bindingsPanel=new DriveBindingsPanel(bindings);
    element('hoist-toggle').addEventListener('click',()=>{if(this.current){this.current.showHoist(!this.current.hoistContext);this.clear();}});
    element('tutorial-action').addEventListener('click',()=>{
      if(this.tutorialCommand)Object.assign(this.pending,this.tutorialCommand);
      else document.querySelector<HTMLButtonElement>('button[data-experience="free"]')!.click();
    });
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-mode]'))button.addEventListener('click',()=>{this.pending.mode=button.dataset.driveMode as DriveMode;});
    element('recover-body').addEventListener('click',()=>{this.pending.recover=true;});
    element('step-toggle').addEventListener('click',()=>{if(this.stepping)this.pending.mode='stand';else this.pending.stepping=true;});
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-speed]'))button.addEventListener('click',()=>{this.pending.speedMode=button.dataset.driveSpeed as DriveSpeed;});
    const shortcuts=element('performance-shortcuts');
    for(const shortcut of PERFORMANCE_SHORTCUTS){
      const button=document.createElement('button');button.dataset.performanceSlot=String(shortcut.button);button.dataset.performanceAction=this.bindings.actionAt(shortcut.button);
      button.innerHTML=`<kbd>RB + ${shortcut.key}</kbd><span>${shortcut.title}</span>`;
      button.addEventListener('click',()=>{this.pending.actionTrigger=this.bindings.actionAt(shortcut.button);});shortcuts.append(button);
    }
    for(const shortcut of controlGuide('standard','locomotion').cards){
      const button=document.createElement('button');button.dataset.modeShortcut=shortcut.id;
      button.innerHTML=`<kbd>${shortcut.keys}</kbd><b>${shortcut.title}</b><small>${shortcut.copy}</small>`;
      button.addEventListener('click',()=>Object.assign(this.pending,shortcut.command));element('mode-cards').append(button);
    }
    for(const spec of DEBUG_JOINTS){
      const button=document.createElement('button');button.dataset.labJoint=spec.id;button.textContent=spec.title;
      button.addEventListener('click',()=>{this.pending.labSelect=spec.id as DebugJointId;});element('lab-joints').append(button);
    }
    for(const [id,command]of Object.entries({
      'lab-confirm':{labConfirm:true},'lab-demo':{diagnose:true},'lab-reset':{labReset:true},'lab-exit':{mode:'damp'},
    }))element(id).addEventListener('click',()=>Object.assign(this.pending,command));
    const select=element<HTMLSelectElement>('action-select');
    for(const group of [...new Set(DRIVE_ACTIONS.map(a=>a.group))]){const optionGroup=document.createElement('optgroup');optionGroup.label=group;for(const a of DRIVE_ACTIONS.filter(a=>a.group===group))optionGroup.append(new Option(a.title,a.id));select.append(optionGroup);}
    select.addEventListener('change',()=>{this.pending.actionSelect=select.value as DriveActionId;});
    for(const step of [-1,1])element(step<0?'action-prev':'action-next').addEventListener('click',()=>{this.pending.actionStep=step;});
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-hold]')){
      button.addEventListener('pointerdown',event=>{if(event.button!==0)return;event.preventDefault();button.setPointerCapture(event.pointerId);this.held.press(event.pointerId,button.dataset.hold!);});
      for(const name of ['pointerup','pointercancel','lostpointercapture'] as const)button.addEventListener(name,event=>this.held.release(event.pointerId));
      button.addEventListener('contextmenu',event=>event.preventDefault());
    }
    const actions:Record<string,keyof DriveCommand>={'action-wave':'wave','action-menu-play':'wave','action-invite':'invite','emergency-stop':'stop'};
    for(const [id,action] of Object.entries(actions))element(id).addEventListener('click',()=>{this.pending[action]=true as never;});
    const allowed=new Set(['w','s','a','d','q','e','arrowleft','arrowright','arrowup','arrowdown',' ','1','2','c','p','escape','m','[',']','r','h']);
    document.addEventListener('keydown',event=>{
      const target=event.target as HTMLElement;
      if(target.closest('input,select,textarea,[contenteditable=true]'))return;
      if(event.key===' '&&target.closest('button,a'))return;
      const key=event.key.toLowerCase();if(!allowed.has(key))return;
      event.preventDefault();this.keys.add(key);if(event.repeat)return;
      if(key==='m')this.pending.cycleMode=true;
      if(key==='r')this.pending.recover=true;
      if(key==='h')this.pending.hoistAction=true;
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
    command.labAdjust=this.held.has('lab-increase')?1:this.held.has('lab-decrease')?-1:undefined;
    if(!manual){
      command.forward=Number(this.held.has('forward'))-Number(this.held.has('back'));
      command.strafe=Number(this.held.has('right'))-Number(this.held.has('left'));
      command.turn=Number(this.held.has('turn-left'))-Number(this.held.has('turn-right'));return command;
    }
    const down=(key:string,button:string)=>this.keys.has(key)||this.held.has(button);
    command.forward=Number(down('w','forward'))-Number(down('s','back'));
    command.strafe=Number(down('d','right'))-Number(down('a','left'));
    command.turn=Number(down('q','turn-left')||this.keys.has('arrowleft'))-Number(down('e','turn-right')||this.keys.has('arrowright'));
    command.look=Number(this.keys.has('arrowup'))-Number(this.keys.has('arrowdown'));
    return command;
  }
  render(state:DriveState,status:DriveStatus):void{
    this.current=state;
    const feedback=this.feedback,element=<T extends HTMLElement=HTMLElement>(id:string)=>this.node<T>(id);
    const observed=status.source==='pad'&&status.layout==='exhibition-android';
    const guide=controlGuide(observed?'exhibition-android':'standard',state.mode),debug=state.mode==='debug';
    if(this.guideProfile!==(observed?'android':status.source)){
      this.guideProfile=observed?'android':status.source;
      for(const card of guide.cards){
        const button=document.querySelector<HTMLButtonElement>(`[data-mode-shortcut="${card.id}"]`)!;
        feedback.property(button.querySelector('kbd')!,'textContent',status.source==='manual'?'点击':card.keys);
        feedback.property(button.querySelector('small')!,'textContent',card.copy);
      }
    }
    feedback.property(element('control-profile-title'),'textContent',status.source==='manual'?'触屏 / 键盘 · 点卡片操作':guide.heading);
    feedback.property(element('control-profile-hint'),'textContent',status.source==='manual'?'卡片与手柄使用同一套状态切换':guide.hint);
    feedback.property(element('mode-modifier-label'),'textContent',observed?'LB':'LT / RT');
    feedback.property(document.querySelector<HTMLElement>('.control-columns')!,'hidden',debug||state.hoistContext);
    feedback.property(element('lab-panel'),'hidden',!debug);
    if(debug){
      const lab=state.lab;
      feedback.property(element('lab-progress'),'textContent',`${lab.completed.size} / 3`);
      feedback.property(element('lab-goal'),'textContent',`${lab.spec.goal}°`);
      feedback.property(element('lab-command'),'textContent',`${lab.target.toFixed(1)}°`);
      feedback.property(element('lab-angle'),'textContent',`${lab.angle.toFixed(1)}°`);
      feedback.property(element('lab-error'),'textContent',`${lab.error.toFixed(1)}°`);
      feedback.property(element('lab-feedback'),'textContent',state.body!=='upright'?'虚拟吊架正在扶起模型，请稍候…':state.needsNeutral?'请先松开摇杆和按键，再开始关节实验。':lab.feedback);
      feedback.property(element('lab-knowledge'),'textContent',lab.spec.copy);
      feedback.property(element('lab-help'),'textContent',status.source==='manual'?'W / S 或按住 − / + 调节 · 松开停稳后点确认':'十字键左右选关节 · 左杆上 / 下调节 · A 确认 · X 诊断示范 · Y 复位');
      for(const [id,pad,manual]of [['lab-confirm','A 确认校准','1 确认校准'],['lab-demo','X 诊断示范','2 诊断示范'],['lab-reset','Y 关节复位','关节复位']])feedback.property(element(id),'textContent',status.source==='manual'?manual:pad);
      for(const button of document.querySelectorAll<HTMLButtonElement>('[data-lab-joint]')){
        feedback.attribute(button,'aria-pressed',String(button.dataset.labJoint===lab.selected));
        feedback.attribute(button,'data-complete',String(lab.completed.has(button.dataset.labJoint as DebugJointId)));
      }
      for(const button of document.querySelectorAll<HTMLButtonElement>('#lab-joint-content button'))feedback.property(button,'disabled',!state.running||state.paused||state.body!=='upright'||state.needsNeutral);
    }
    feedback.attribute(document.body,'data-experience',state.experience);
    feedback.attribute(element('source-manual'),'aria-pressed',String(status.source==='manual'));
    feedback.attribute(element('source-pad'),'aria-pressed',String(status.source==='pad'));
    feedback.property(document.querySelector<HTMLElement>('.mission-card')!,'hidden',state.experience!=='mission');
    for(const button of document.querySelectorAll<HTMLButtonElement>('button[data-experience]')){feedback.attribute(button,'aria-pressed',String(button.dataset.experience===state.experience));feedback.property(button,'disabled',!status.loaded);}
    const input=status.input;feedback.attribute(document.body,'data-input',input);feedback.attribute(document.body,'data-stage',state.stage);
    feedback.attribute(document.body,'data-mode',state.mode);feedback.attribute(document.body,'data-action',state.selectedAction);
    feedback.attribute(document.body,'data-body',state.body);feedback.attribute(document.body,'data-stepping',String(state.stepping));feedback.attribute(document.body,'data-speed',state.speedMode);
    this.stepping=state.stepping;
    const speedNames={slow:'低速',fast:'高速'};
    feedback.property(element('speed-status'),'textContent',`当前：${speedNames[state.speedMode]}`);
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-drive-speed]')){
      const mode=button.dataset.driveSpeed as DriveSpeed;
      feedback.attribute(button,'aria-pressed',String(mode===state.speedMode));
      feedback.property(button,'disabled',!state.running||state.paused||state.body!=='upright'||passiveMode(state.mode));
      feedback.property(button.querySelector('small')!,'textContent',status.source==='manual'||observed&&mode==='slow'?'点击切换':{slow:'LT 连按 2 次',fast:'LB 连按 2 次'}[mode]);
      feedback.property(button,'title',status.source==='manual'||observed&&mode==='slow'?'点击切换速度档':mode==='slow'?'LT 左后扳机快速按下并松开两次':'LB 左肩键快速按下并松开两次');
    }
    feedback.property(element('speed-help'),'textContent',!state.running?'默认低速 · 开始体验后可切换高低速。':
      state.paused?'已暂停 · 继续后可调速。':state.body!=='upright'||passiveMode(state.mode)?'先起身恢复站立，再切行走体验速度。':state.mode!=='locomotion'?'速度档已记住 · 切回行走模式后生效。':
      `${{slow:'低速适合靠近目标',fast:'高速适合快速移动'}[state.speedMode]} · ${status.source==='pad'?'摇杆推得越远，走得越快':'点击上方按钮切档'}。速度为网页模拟。`);
    feedback.attribute(element('step-toggle'),'aria-pressed',String(state.stepping));feedback.property(element('step-toggle'),'textContent',state.stepping?'停止踏步':'持续踏步');
    feedback.property(element<HTMLButtonElement>('step-toggle'),'disabled',!state.running||state.paused||state.body!=='upright'||passiveMode(state.mode)||Boolean(state.gesture));
    const recover=element<HTMLButtonElement>('recover-body');feedback.property(recover,'disabled',!state.running||state.paused||state.body!=='fallen');feedback.property(recover,'textContent',state.body==='recovering'?'正在起身…':'起身复位');
    const bodyText={upright:debug?'吊架关节实验':state.hoist.supported?'吊带支撑中':state.hoist.locked?'调整吊带中':passiveMode(state.mode)?'待启动':state.stepping?'持续踏步':DRIVE_MODES.find(m=>m.id===state.mode)!.title,falling:'失去支撑',fallen:'已倒地',recovering:debug?'吊架扶起中':'起身复位'}[state.body];
    feedback.property(element('robot-state'),'textContent',bodyText);
    for(const b of document.querySelectorAll<HTMLButtonElement>('[data-drive-mode]')){feedback.attribute(b,'aria-pressed',String(b.dataset.driveMode===state.mode));feedback.property(b,'disabled',!status.loaded);}
    const modeInfo=DRIVE_MODES.find(m=>m.id===state.mode)!;
    feedback.property(element('mode-title'),'textContent',`${modeInfo.title} · ${modeInfo.hint}`);
    feedback.property(element('mode-copy'),'textContent',state.hoistContext?(state.hoist.supported?state.mode==='damp'?'吊带承重，关节带阻力放松；不主动维持站立。可切零力矩作比较，按 A 恢复站立。':state.mode==='zero'?'吊带承重，关节快速放松；脚掌不主动保持水平。按 A 恢复站立，稳定后再解挂。':state.mode==='debug'?'门架持续支撑；在调试工作台做关节实验或更换舞蹈键位。保存后恢复站立、解挂再表演。':'吊带已连接，不能行走或表演。按 A 落脚解挂，再恢复行走。':'只有确认挂接才有支撑。先驶入 H 圈并停稳，再按 A；未挂接切阻尼 / 零力矩仍会倒地。'):guide.copy);
    feedback.property(element('pause-key'),'textContent',observed?'触屏':status.source==='pad'?'≡':'P');feedback.property(element('pause-key-copy'),'textContent',observed?'切换上方模式':status.source==='pad'?'站立 / 行走':'暂停 / 继续');
    feedback.attribute(element('pause-key'),'aria-label',observed?'菜单键未读到，请点击模式按钮':status.source==='pad'?'菜单键，三横线图标':'P 键');
    feedback.property(element('performance-shortcuts'),'hidden',false);
    feedback.property(element('normal-gestures'),'hidden',false);
    feedback.property(element('action-menu-play'),'hidden',state.mode!=='performance');
    feedback.property(element('action-menu-play'),'textContent',status.source==='pad'?'A ▶':'播放 ▶');
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-performance-action]')){
      feedback.property(button,'disabled',!state.running||state.paused||Boolean(state.gesture)||state.needsNeutral||state.body!=='upright'||passiveMode(state.mode));
      feedback.attribute(button,'aria-pressed',String(state.gesture===button.dataset.performanceAction));
    }
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-mode-shortcut]')){
      const shortcut=guide.cards.find(s=>s.id===button.dataset.modeShortcut)!;
      feedback.property(button,'disabled',!state.running||state.paused||(shortcut.command.recover?state.body!=='fallen':shortcut.command.mode==='debug'?!['damp','zero'].includes(state.mode):['locomotion','stand'].includes(shortcut.command.mode??'')&&state.body!=='upright'));
      feedback.attribute(button,'aria-pressed',String(shortcut.command.recover?state.body==='recovering':state.mode===shortcut.command.mode));
    }
    feedback.property(element('mode-shortcuts'),'textContent',status.source==='manual'?'卡片均可直接点击 · P 暂停 / 继续，R 起身。':
      observed?'A 继续、B 暂停；低速点屏幕。LB / RB 为展厅替代映射。':'LT 组合可同时按住至满 2 秒；RT + A 行走。RB 舞蹈为网页扩展，A 继续、B 暂停。');
    feedback.property(element('pad-layout'),'title',observed?'按展厅照片中的通道转换；未测试的按键不绑定':'标准浏览器布局，电脑保持原控制');
    const action=actionInfo(state.selectedAction),select=element<HTMLSelectElement>('action-select');
    if(select.value!==state.selectedAction)select.value=state.selectedAction;
    feedback.property(element('selected-action-title'),'textContent',action.title);feedback.property(element('action-description'),'textContent',action.description);
    feedback.attribute(document.body,'data-motion',state.paused?'paused':state.body!=='upright'?state.body:state.gesture??(state.speed>.02?'walking':'idle'));
    feedback.property(element('connection-label'),'textContent',status.source==='manual'?'键盘 / 触屏':input==='ready'?'手柄已接通':input==='waiting'?'正在等待手柄':'手柄输入已暂停');
    feedback.attribute(element('connection-label').parentElement!,'data-ready',String(input==='ready'));
    feedback.property(element('input-status'),'textContent',debug&&state.debugTab==='bindings'?'点下方动作菜单更换 → 预览 → 保存；恢复站立并解挂后，用 RB + 彩色键表演。':debug&&status.source==='manual'&&state.running&&!state.paused?'关节实验 · W / S 调节，1 确认、2 示范；也可按住屏幕 − / +。':state.hoistContext&&state.running&&!state.paused&&!debug?status.source==='manual'?'WASD 移动 · Q / E 转身 · H 挂接 / 恢复 / 解挂 · P 暂停':'左杆移动 · 右杆转身 · A 挂接 / 恢复 / 解挂 · B 暂停':status.copy);
    const start=element<HTMLButtonElement>('drive-start');feedback.property(start,'disabled',!status.loaded||status.waiting||(!state.paused&&state.running&&input==='ready'));
    const startKey=status.source==='pad'?'A':'↗';
    const session=state.experience==='mission'?'任务':'体验';
    feedback.html(start,status.waiting?'等待连接… <span>◌</span>':state.paused?`继续${session} <span>${startKey}</span>`:state.running?'驾驶中 <span>↗</span>':`开始${session} <span>${startKey}</span>`);
    const pause=element<HTMLButtonElement>('drive-pause');feedback.property(pause,'disabled',!status.loaded||(!state.running&&!status.waiting));feedback.property(pause,'textContent',status.waiting?'取消':state.paused?'继续':'暂停');
    for(const id of ['action-wave','action-menu-play','action-invite'])feedback.property(element<HTMLButtonElement>(id),'disabled',!state.running||state.paused||Boolean(state.gesture)||passiveMode(state.mode)||state.body!=='upright'||state.needsNeutral);
    feedback.property(element<HTMLButtonElement>('emergency-stop'),'disabled',!state.running&&!status.waiting);
    const tutorial=state.tutorial,lesson=tutorialGuide(tutorial,observed?'exhibition-android':'standard',status.source==='manual',state.body,state.mode);
    feedback.property(element('mission-step'),'textContent',`${String(Math.min(TUTORIAL_TASK_COUNT,tutorial.index+1)).padStart(2,'0')} / ${String(TUTORIAL_TASK_COUNT).padStart(2,'0')}`);
    feedback.property(element('mission-title'),'textContent',lesson.title);
    const needsRecovery=state.body!=='upright'&&!['damp','recover'].includes(state.stage);
    const needsWalking=tutorial.navigating&&!needsRecovery&&state.mode!=='locomotion';
    const instruction=needsRecovery?'当前已失去支撑，先起身恢复。已完成的步骤会保留。':needsWalking?state.mode==='debug'?'先退出关节实验，再起身恢复支撑，继续前往目标。':'当前模式不能驾驶。先恢复行走，再继续前往目标。':lesson.instruction;
    feedback.property(element('mission-description'),'textContent',instruction);
    const progress=Math.round(tutorial.progress*100);
    const recoveryLesson=tutorialGuide({step:'recover'},observed?'exhibition-android':'standard',status.source==='manual',state.body,state.mode);
    feedback.property(element('tutorial-key'),'textContent',needsRecovery?recoveryLesson.keys:lesson.keys);
    feedback.property(element('tutorial-knowledge'),'textContent',lesson.knowledge);
    feedback.attribute(element('tutorial-progress'),'style',`transform:scaleX(${progress/100})`);
    feedback.attribute(element('tutorial-progress').parentElement!,'aria-valuenow',String(progress));
    const arrival=state.stage==='walk'||state.stage==='park';
    const holdSeconds=state.stage==='walk'?TUTORIAL_ROUTE.arrivalSeconds:TUTORIAL_ROUTE.parkingSeconds;
    const remaining=state.targetDistance>state.target.radius?`距 ${tutorial.target.label} 点 ${state.targetDistance.toFixed(1)} m · 驶入金圈`:tutorial.hold>0?`停稳确认 ${Math.min(holdSeconds,tutorial.hold).toFixed(1)} / ${holdSeconds.toFixed(1)} s`:'已进入目标圈 · 松杆停车';
    const heading=Math.abs(tutorial.headingError)*180/Math.PI;
    const routeProgress=arrival?remaining:state.stage==='turn'?heading<=12?'方向正确 · 松杆保持':`${tutorial.headingError>0?'向左转':'向右转'} · 还差 ${Math.round(heading)}°`:`操作进度 ${progress}%`;
    feedback.property(element('arrival-progress'),'textContent',state.paused||!state.running?'按 A 或点击开始，跟着提示试一试':needsRecovery?'起身后继续当前步骤':needsWalking?'点「恢复行走」，松开摇杆后继续':state.gesture?'正在表演 · 等动作完整结束':tutorial.notice|| (state.stage==='complete'?'全部完成 · 可以自由探索了':routeProgress));
    feedback.attribute(element('arrival-progress'),'data-success',String(Boolean(tutorial.notice)));
    this.tutorialCommand=(needsRecovery?recoveryLesson.command:needsWalking?{mode:state.mode==='debug'?'damp':'locomotion'}:lesson.command) as Partial<DriveCommand>|null;
    feedback.property(element<HTMLButtonElement>('tutorial-action'),'hidden',!this.tutorialCommand&&state.stage!=='complete');
    feedback.property(element('tutorial-action'),'textContent',needsRecovery?recoveryLesson.button:needsWalking?state.mode==='debug'?'退出实验，恢复支撑':'恢复行走':lesson.button);
    feedback.property(element<HTMLButtonElement>('tutorial-action'),'disabled',state.stage!=='complete'&&(!state.running||state.paused||Boolean(state.gesture)||(state.stage==='recover'||needsRecovery)&&state.body!=='fallen'));
    const chapter=tutorial.index<3?0:tutorial.index<6?1:2;
    ['arrival','greeting','guide'].forEach((stage,i)=>feedback.attribute(element(`route-${stage}`),'data-state',state.stage==='complete'||i<chapter?'done':i===chapter?'current':''));
    feedback.attribute(document.body,'data-tutorial',state.experience==='mission'?(needsRecovery?'recover':lesson.focus):'');
    feedback.property(element('drive-message'),'textContent',state.message);feedback.attribute(element('drive-message'),'data-warning',String(Boolean(state.contact)||state.body==='fallen'||state.body==='falling'));
    feedback.property(element('drive-result'),'hidden',state.experience!=='mission'||state.stage!=='complete');feedback.property(element('result-stars'),'textContent','★'.repeat(state.stars)+'☆'.repeat(3-state.stars));
    feedback.html(element('result-score'),`${state.score} <small>分</small>`);
    feedback.property(element('speed'),'textContent',state.speed.toFixed(2));feedback.property(element('motion-label'),'textContent',state.paused?'已暂停':state.body!=='upright'?bodyText:state.gesture?actionInfo(state.gesture).title:state.speed>.02||Math.abs(state.angular)>.1?'正在迈步':state.running?bodyText:'等待出发');
    feedback.property(element('distance-travelled'),'textContent',`${state.distance.toFixed(1)} m`);
    feedback.property(element('fall-count'),'textContent',String(state.falls));
    feedback.property(element('elapsed'),'textContent',`${String(Math.floor(state.seconds/60)).padStart(2,'0')}:${String(Math.floor(state.seconds%60)).padStart(2,'0')}`);
    const map=document.getElementById('map-robot')!;
    feedback.attribute(map,'transform',`translate(${90+state.x*24.5} ${94+state.z*24.5}) rotate(${180-state.yaw*180/Math.PI})`);
    // Position is part of the visitor's map telemetry, also useful in browser QA.
    feedback.attribute(map,'data-x',String(state.x));feedback.attribute(map,'data-z',String(state.z));feedback.attribute(map,'data-yaw',String(state.yaw));
    const target=document.getElementById('map-target')!;feedback.attribute(target,'cx',String(90+state.target.x*24.5));feedback.attribute(target,'cy',String(94+state.target.z*24.5));
    feedback.attribute(target,'r',String(state.target.radius*24.5));
    feedback.attribute(target,'visibility',state.experience==='mission'&&tutorial.navigating?'visible':'hidden');
    feedback.property(element('hoist-toggle'),'hidden',!state.hoistAvailable||debug);
    feedback.attribute(element('hoist-toggle'),'aria-pressed',String(state.hoistContext));
    feedback.property(element('hoist-toggle'),'textContent',state.hoist.locked?'吊架支撑中':state.hoistContext?'返回驾驶操作':'吊架操作 ↗');
    feedback.property(element<HTMLButtonElement>('hoist-toggle'),'disabled',state.hoist.locked);
    for(const button of document.querySelectorAll<HTMLButtonElement>('[data-performance-slot]')){
      const action=this.bindings.actionAt(Number(button.dataset.performanceSlot));
      feedback.attribute(button,'data-performance-action',action);
      feedback.property(button.querySelector('span')!,'textContent',actionInfo(action).title);
    }
    this.hoistPanel.render(state,status);
    this.bindingsPanel.render(state);
  }
}
