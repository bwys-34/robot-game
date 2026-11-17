import type {DriveState} from './drive-state';
import type {DriveStatus} from './drive-panel';
import type {DriveCommand} from './drive-config';
import {actionInfo} from './drive-actions';
import {DriveFeedback} from './drive-feedback';
import {roundReview,roundTime} from './drive-review';

const courseTitles=['驶出展厅，到考场报到','连续转向，绕过六根立柱','对准窄道，慢慢穿过','绕过护墙，完成直角弯','保持朝向，精准侧移','正向驶入停靠框，松杆停稳','驾驶考核完成'];
const showTitles=['前往实验室，挂接准备','配置节目，保存三段动作','恢复站立，安全解挂','绕过引导柱，前往舞台','锁定站立，人工搬上台','面向观众，后退到表演位','轮到 G1 登场了','演出圆满完成'];
const courseCopies=[
  '先穿过展厅正前方的庭院出口，再沿金圈到左侧考场起点。',
  '每段先转向下一个路标，再向前走。纯侧移或倒着经过路标不计。',
  '走向当前档位的门前金圈，从两柱中间实际穿过；绕到门后不计。',
  '沿三个路标完成直角弯。靠近护墙先减速，留出转向空间。',
  '面向展厅，保持身体朝向，沿横向标线侧移至少 0.70 米并停稳。',
  '经过入口标记，按箭头正向停入框内。身体完整入框，朝向对准后停稳 1 秒。',
  '已完成六柱绕行、窄道、直角弯、精准侧移和正向停靠。',
];
const showCopies=[
  '沿金圈穿过右侧门，前往实验室 H 圈。停稳后按 A（键盘 H）挂接。',
  '切阻尼或零力矩，再进入调试的「舞蹈键位」。前三个 RB 键位是本次节目；保存确认。',
  '节目已确认。恢复站立，等双脚稳定后按 A（键盘 H）解挂，再恢复行走。',
  '沿金圈走出实验室，穿过庭院到达舞台。已保存的节目会随你一起带过去。',
  '台阶不能直接跨过。停入台前金圈，切锁定站立；松杆停稳后按 A，由工作人员搬上台。',
  '切回行走，在准备点面向观众停稳，再后退约 0.75 米到表演位，松杆站稳 1 秒。',
  '切到动作表演，按节目顺序完成三段。每段结束后再按下一键，观众等着你！',
  '从吊架准备到舞台演出，你完成了整场节目。点重来可以换一套动作再演。',
];

export class DriveChallengePanel {
  private readonly f=new DriveFeedback();
  private current?:DriveState;
  private primary:Partial<DriveCommand>|null=null;
  private hintShown=false;
  private experience='';
  constructor(private readonly send:(command:Partial<DriveCommand>)=>void){
    this.node('challenge-primary').addEventListener('click',()=>{if(this.primary)this.send(this.primary);});
    this.node('challenge-speed').addEventListener('click',()=>{if(this.current)this.send({speedMode:this.current.speedMode==='slow'?'fast':'slow'});});
    this.node('challenge-hint').addEventListener('click',()=>{this.hintShown=!this.hintShown;});
    for(let i=0;i<3;i++)this.node(`show-action-${i}`).addEventListener('click',()=>{const action=this.current?.show.program[i];if(action)this.send({actionTrigger:action});});
  }
  private node<T extends HTMLElement=HTMLElement>(id:string):T{return document.getElementById(id) as T;}
  render(s:DriveState,status:DriveStatus):void{
    this.current=s;const f=this.f,n=<T extends HTMLElement=HTMLElement>(id:string)=>this.node<T>(id);
    const active=s.experience==='course'||s.experience==='show';f.property(n('challenge-panel'),'hidden',!active);
    f.attribute(document.body,'data-course-step',s.course.step);f.attribute(document.body,'data-show-step',s.show.step);
    f.attribute(document.body,'data-course-waypoint',String(s.course.waypointIndex));f.attribute(document.body,'data-show-action',String(s.show.actionIndex));
    f.attribute(document.body,'data-show-position-phase',s.show.positionPhase);
    if(!active)return;
    if(this.experience!==s.experience){this.experience=s.experience;this.hintShown=false;}
    const course=s.experience==='course',task=course?s.course:s.show,complete=task.step==='complete',i=task.index;
    const practice=course&&s.course.level==='practice',exam=course&&!practice;
    const level=n<HTMLSelectElement>('course-level');
    f.property(level,'hidden',!course);f.property(level,'value',s.course.level);
    f.attribute(document.body,'data-course-level',s.course.level);
    f.attribute(document.body,'data-course-heading',String(s.course.requiredHeading));
    const compact=!course&&(s.hoistContext||s.mode==='debug');
    const running=s.running&&!s.paused,ready=running&&s.body==='upright'&&!s.needsNeutral&&!s.gesture&&!s.stageTransport.carrying;
    f.attribute(n('challenge-panel'),'data-compact',String(compact));
    f.property(n('challenge-eyebrow'),'textContent',course?'DRIVING ACADEMY / 平地驾驶考场':'CAMPUS LIVE / 广场舞台挑战');
    f.property(n('challenge-title'),'textContent',(course?courseTitles:showTitles)[i]);
    f.property(n('challenge-step'),'textContent',complete?'完成':`${String(i+1).padStart(2,'0')} / ${course?'06':'07'}`);
    const examCopies=['通过考场起点。切换档位会重新开始。','转向后前进，连续绕过六根立柱。','选择当前档位的窄门，从柱间实际穿过。','沿三个路标完成直角弯。','面向展厅，侧移到标记后停稳。','经过入口，按箭头正向停入框内。',courseCopies[6]];
    f.property(n('challenge-description'),'textContent',(course?(exam?examCopies:courseCopies):showCopies)[i]);
    const labels=course?['入场','绕柱','窄道','直角弯','侧移','停靠']:['挂接','节目','解挂','绕行','搬运','后退就位','演出'];
    f.html(n('challenge-route'),labels.map((label,index)=>`<span data-state="${complete||index<i?'done':index===i?'current':''}"><b>${complete||index<i?'✓':String(index+1).padStart(2,'0')}</b>${label}</span>`).join(''));
    const turning=course?task.step==='park':task.step==='position';
    const tolerance=course?s.course.layout.headingTolerance*180/Math.PI:15;
    const angle=Math.round(Math.abs(task.headingError)*180/Math.PI),distance=s.targetDistance;
    const live=complete?'任务完成 · 成绩已记录':s.stageTransport.carrying?`人工搬运中 ${Math.round(s.stageTransport.progress*100)}% · 等待双脚落台`:s.canceling?'正在结束表演 · 本段未计入成绩':!course&&s.show.retryMessage?s.show.retryMessage:!running?'按开始接管，再跟随金圈出发':s.body==='fallen'?s.fallCause==='collision'?`碰到${s.contact} · 起身后可继续`:'起身后继续，已完成的步骤保留':s.body!=='upright'?'正在恢复支撑，请稍候':s.gesture?`正在${actionInfo(s.gesture).title}${status.layout==='standard'?' · 双击 START（≡）结束':' · 等整段结束'}`:
      !course&&task.step==='board'?(s.mode!=='stand'?'先切锁定站立，再按 A 确认人工搬运':s.stageTransport.hold<.65?'台前金圈内松杆停稳，等待搬运准备':'已停稳 · 按 A 请工作人员搬上台'):
      course&&s.course.skillNotice?s.course.skillNotice:
      !course&&task.step==='position'?s.mode!=='locomotion'&&s.show.reverseDistance<.6?'先切回行走，再面向观众后退就位':s.show.positionPhase==='prepare'?distance>.18?'回到台前准备点':angle>15?'面向观众，松杆准备后退':'方向正确，松杆停稳准备':s.show.reverseDistance<.6?`面向观众，左杆向后拉 · 有效后退 ${s.show.reverseDistance.toFixed(2)} / 0.60 m`:distance>.18?'微调到表演位中心':angle>15?'面向观众，调整朝向':`松杆停稳 ${task.hold.toFixed(1)} / 1.0 秒`:
      exam&&turning?distance>s.target.radius?'前往当前标记':angle>tolerance?'朝向未对准 · 参照地面箭头':'朝向正确 · 松杆停稳':
      turning?distance>s.target.radius?`正向驶向停靠框 · 距目标 ${distance.toFixed(1)} m`:angle>tolerance?`${task.headingError>0?'向左转':'向右转'} ${angle}° · ${s.course.headingCue}`: `保持方向，松杆停稳 ${task.hold.toFixed(1)} / 1.0 秒`:
      course&&task.step==='side'?(exam?'面向展厅，侧移后停稳':`保持面向展厅 · 有效侧移 ${s.course.skillDistance.toFixed(2)} / 0.70 m`):
      !course&&task.step==='perform'?`第 ${s.show.actionIndex+1} / 3 段 · ${s.show.program[s.show.actionIndex]?actionInfo(s.show.program[s.show.actionIndex]).title:''}`:
      course&&task.step==='slalom'?`绕柱路标 ${s.course.waypointIndex+1} / ${s.course.layout.slalom.length}${practice?` · 距目标 ${distance.toFixed(1)} m`:''}`:
      exam?'通过当前标记':
      !course&&task.step==='program'?'挂接有效 → 切阻尼 → 进入调试 → 保存节目':!course&&task.step==='release'?'恢复站立 → 等待稳定 → A 解挂':`距当前路标 ${distance.toFixed(1)} m · 左杆移动，右杆转向`;
    f.property(n('challenge-live'),'textContent',live);
    f.attribute(n('challenge-meter'),'style',`transform:scaleX(${complete?1:task.progress})`);
    f.attribute(n('challenge-meter').parentElement!,'aria-valuenow',String(Math.round(task.progress*100)));
    this.primary=null;let primary='左杆移动 · 右杆转向';
    if(s.body==='fallen'){this.primary={recover:true};primary='起身，继续挑战';}
    else if(s.body!=='upright')primary='恢复支撑中…';
    else if(s.stageTransport.carrying)primary='工作人员搬运中…';
    else if(!course&&task.step==='board'){
      this.primary=s.mode==='stand'?{stageAction:true}:{mode:'stand'};primary=s.mode==='stand'?'A 确认 · 人工搬上台':'切换锁定站立';
    }else if(!course&&task.step==='position'&&s.stageTransport.onstage&&s.mode!=='locomotion'&&s.show.reverseDistance<.6){this.primary={mode:'locomotion'};primary='恢复行走 · 后退就位';}
    else if(!course&&task.step==='perform'){
      if(s.mode!=='performance'){this.primary={mode:'performance'};primary='切到动作表演';}else primary='依次完成下方三段节目';
    }else if(!complete&&!compact&&s.mode!=='locomotion'){
      this.primary={mode:s.mode==='debug'?'damp':'locomotion'};primary=s.mode==='debug'?'退出调试，恢复支撑':'恢复行走';
    }
    f.property(n('challenge-primary'),'textContent',primary);
    f.property(n<HTMLButtonElement>('challenge-primary'),'disabled',!running||!this.primary||Boolean(s.gesture)||Boolean(this.primary?.stageAction&&s.stageTransport.hold<.65));
    f.property(n('challenge-speed'),'textContent',s.speedMode==='slow'?'低速 · 点此切高速':'高速 · 点此切低速');
    f.property(n<HTMLButtonElement>('challenge-speed'),'disabled',!ready||s.mode!=='locomotion');
    for(const button of n('challenge-directions').querySelectorAll<HTMLButtonElement>('button'))f.property(button,'disabled',!ready||s.mode!=='locomotion');
    const showActions=!course&&s.show.program.length===3&&['position','perform'].includes(s.show.step);
    f.property(n('show-program'),'hidden',!showActions||complete);
    const slotKeys=['A','B','X'];
    for(let k=0;k<3;k++){
      const button=n<HTMLButtonElement>(`show-action-${k}`),action=s.show.program[k];
      f.property(button,'textContent',`${slotKeys[k]} · ${action?actionInfo(action).title:'等待配节目'}${k<s.show.actionIndex?' ✓':''}`);
      f.attribute(button,'data-state',k<s.show.actionIndex?'done':k===s.show.actionIndex?'current':'');
      f.property(button,'disabled',!ready||s.mode!=='performance'||s.show.step!=='perform');
    }
    const standingKey=status.source==='pad'&&status.layout!=='exhibition-android'?'单击 START（≡）或点击锁定站立':'点击锁定站立';
    const hints=course?task.step==='park'?'先到入口金圈，再沿箭头向前走入停靠框。身体完整入框后松杆停稳。':task.step==='side'?'面向展厅，轻推左杆向右；键盘按 D。保持朝向，进入侧移圈后松杆。':'依次前进绕过立柱、穿窄道和直角弯；转弯前先松杆，再调整方向。':task.index<3?'沿金圈从右侧门进实验室。挂接后切阻尼，再进入调试；「舞蹈键位」中点保存确认前三段。':task.step==='board'?`到台前金圈松杆，${standingKey}；停稳后按 A。网页演示人工搬运。`:task.step==='position'?'切回行走，在准备点面向观众停稳。保持朝向，左杆后拉或按 S，后退到表演位再松杆。':'RB + A / B / X 依次表演。电脑双击 START（≡）可结束，本段不计完成分。';
    f.property(n('challenge-hint-copy'),'hidden',!this.hintShown||complete||exam);f.property(n('challenge-hint-copy'),'textContent',hints);
    f.property(n('challenge-hint'),'hidden',exam);
    f.property(n('challenge-hint'),'textContent',this.hintShown?'收起提示':'看操作提示');
    f.property(n('challenge-keys'),'textContent',status.source==='manual'?'WASD 移动 · Q / E 转身 · S 倒车 · R 起身 · P 暂停':'左杆移动 / 后拉倒车 · 右杆转身 · A 开始 / 继续 · B 暂停');
    f.property(n('challenge-controls'),'hidden',complete);
    f.property(n('challenge-result'),'hidden',!complete);
    f.property(n('challenge-score'),'textContent',String(task.score));
    f.property(n('challenge-stars'),'textContent','★'.repeat(s.stars)+'☆'.repeat(3-s.stars));
    f.property(n('challenge-result-copy'),'textContent',`用时 ${roundTime(s.seconds)} · 倒地 ${task.result?.falls??s.falls} 次`);
    f.property(n('challenge-knowledge'),'hidden',complete);
    if(complete)for(const [key,value] of Object.entries(roundReview(s)))f.property(n(`challenge-review-${key}`),'textContent',value);
    const breakdown=course?s.course.breakdown:s.show.breakdown;
    const names:Record<string,string>={route:'路线',parking:'停车',heading:'朝向',care:'稳健',preparation:'准备',positioning:'就位',performance:'演出'};
    f.property(n('challenge-breakdown'),'textContent',Object.entries(breakdown).map(([key,value])=>`${names[key]} ${value}`).join(' · '));
    f.property(n('challenge-knowledge'),'textContent',course?'路线 40 · 停车 25 · 朝向 15 · 稳健 20。倒地每次扣稳健 8 分，最低为 0；不比速度。':'准备 20 · 路线 20 · 就位 15 · 演出 30 · 稳健 15。倒地每次扣稳健 8 分，最低为 0。');
  }
}
