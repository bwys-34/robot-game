import {STAGE_CONFIG as C} from './drive-stage';
import {DriveFeedback} from './drive-feedback';
import type {DriveState} from './drive-state';
import type {DriveCommand} from './drive-config';
import type {DriveStatus} from './drive-panel';

/** A compact contextual card in the existing console, outside the 3D viewport. */
export class DriveStagePanel {
  private readonly f=new DriveFeedback();
  private primary:Partial<DriveCommand>={};
  constructor(send:(c:Partial<DriveCommand>)=>void){
    document.getElementById('stage-primary')!.addEventListener('click',()=>send(this.primary));
    document.getElementById('stage-perform')!.addEventListener('click',()=>send({mode:'performance'}));
  }
  render(s:DriveState,status:DriveStatus):void{
    const n=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T,f=this.f,t=s.stageTransport;
    const visible=s.experience==='free'&&s.stageContext&&s.mode!=='debug';
    f.property(n('stage-transport-panel'),'hidden',!visible);f.attribute(document.body,'data-stage-context',String(visible));
    f.attribute(document.body,'data-stage-transport',t.phase);
    if(!visible)return;
    const ready=s.running&&!s.paused&&s.body==='upright'&&!s.needsNeutral&&!s.gesture&&!t.carrying&&!s.canceling;
    const standing=s.mode==='stand',settled=t.hold>=C.settleSeconds,atExit=t.onstage&&t.atTransferPoint(s),walkToExit=t.onstage&&!atExit;
    const desktop=status.source==='pad'&&status.layout!=='exhibition-android';
    f.property(n('stage-panel-title'),'textContent',t.carrying?'工作人员正在搬运':atExit?'台阶旁 · 下台停靠':t.onstage?'站上舞台，准备开演':'台前停靠 · 人工搬运');
    f.property(n('stage-panel-copy'),'textContent',t.carrying?'保持锁定站姿，等待工作人员放稳。':t.onstage?'要下台，切行走进入台阶旁的青色光圈 → 锁定站立 → A 确认搬下。':`停入金圈 → ${desktop?'START（≡）或点按钮':'点按钮'}锁定站立 → 松杆停稳 → A 确认上台。`);
    f.property(n('stage-panel-status'),'textContent',t.carrying?`搬运 ${Math.round(t.progress*100)}% · 暂停可冻结过程`:walkToExit?'下台点在台阶旁 · 先行走进入青色光圈':!standing?t.onstage?'已进入下台光圈 · 请锁定站立':'先锁定站立，台阶不能直接跨过':settled?'已停稳 · 可以确认搬运':`在${t.onstage?'下台光圈':'台前金圈'}停稳 ${t.hold.toFixed(1)} / ${C.settleSeconds} 秒`);
    this.primary=walkToExit?{mode:'locomotion'}:standing?{stageAction:true}:{mode:'stand'};
    f.property(n('stage-primary'),'textContent',t.carrying?'搬运中…':walkToExit?'行走前往下台光圈':standing?`A 确认 · 搬${t.onstage?'下':'上'}台`:'锁定站立');
    f.property(n<HTMLButtonElement>('stage-primary'),'disabled',!ready||!walkToExit&&standing&&!settled);
    f.property(n('stage-perform'),'hidden',!t.onstage);f.property(n<HTMLButtonElement>('stage-perform'),'disabled',!ready||s.mode==='performance');
    f.property(n('stage-perform'),'textContent',t.restored?'进入动作表演':'恢复控制 · 动作表演');
    f.property(n('stage-directions'),'hidden',t.carrying||s.mode!=='locomotion');
    for(const b of n('stage-directions').querySelectorAll<HTMLButtonElement>('button'))f.property(b,'disabled',!ready);
  }
}
