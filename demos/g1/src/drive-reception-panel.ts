import {DriveFeedback} from './drive-feedback';
import {RECEPTION_CONFIG} from './drive-reception';
import type {DriveState} from './drive-state';
import type {DriveStatus} from './drive-panel';
import type {DriveCommand} from './drive-config';
import {actionInfo} from './drive-actions';
import {roundTime} from './drive-review';

const steps=['route','park','face','greet'] as const;
export class DriveReceptionPanel {
  private readonly f=new DriveFeedback();
  private current?:DriveState;
  private primary:Partial<DriveCommand>={mode:'locomotion'};
  private nodes=new Map<string,HTMLElement>();
  private node<T extends HTMLElement=HTMLElement>(id:string):T{let n=this.nodes.get(id);if(!n){n=document.getElementById(id)!;this.nodes.set(id,n);}return n as T;}
  constructor(send:(c:Partial<DriveCommand>)=>void){
    this.node('reception-primary').addEventListener('click',()=>send(this.primary));
    this.node('reception-hint').addEventListener('click',()=>{if(this.current?.running&&!this.current.paused)this.current.reception.hint();});
    this.node('reception-wave').addEventListener('click',()=>send({actionSelect:'wave',actionTrigger:'wave'}));
    this.node('reception-bow').addEventListener('click',()=>send({actionSelect:'bow',actionTrigger:'bow'}));
    this.node('reception-speed').addEventListener('click',()=>send({speedMode:this.current?.speedMode==='slow'?'fast':'slow'}));
  }
  render(s:DriveState,status:DriveStatus):void{
    this.current=s;const f=this.f,n=this.node.bind(this),r=s.reception,active=s.experience==='reception';
    f.property(n('reception-panel'),'hidden',!active);f.attribute(document.body,'data-reception-step',active?r.step:'');
    if(!active)return;
    const index=r.step==='complete'?4:steps.indexOf(r.step),enabled=s.running&&!s.paused,fallen=s.body==='fallen',recovering=s.body==='recovering'||s.body==='falling';
    const titles={route:'绕过展台，去迎接游客',park:'把 G1 停进接待圈',face:'让机器人面向游客',greet:'站稳，打个招呼',complete:'接待完成，做得不错！'};
    f.property(n('reception-title'),'textContent',titles[r.step]);
    f.property(n('reception-step'),'textContent',index===4?'完成':`0${index+1} / 04`);
    for(let i=0;i<4;i++)f.attribute(n(`reception-route-${i}`),'data-state',i<index?'done':i===index?'current':'');
    const distance=Math.hypot(s.x-RECEPTION_CONFIG.parking.x,s.z-RECEPTION_CONFIG.parking.z);
    const degrees=Math.abs(r.headingError)*180/Math.PI;
    const copies={
      route:`先通过展台右侧的两枚金色路标，再前往游客面前。当前路标 ${r.routeIndex+1} / 2。`,
      park:'进入金色接待圈，提前松杆，让机器人稳稳停下来。',
      face:'用右摇杆原地转向，让地面箭头朝向游客，再松杆保持。',
      greet:s.mode==='stand'?'挥手或鞠躬都可以。等整段动作做完，看看游客的回应。':'位置、方向都对了！先锁定站立，再向游客挥手或鞠躬。',
      complete:'从驾驶、停车到站立互动，你完成了一次展厅接待。想试试更精准的停车吗？',
    };
    f.property(n('reception-description'),'textContent',fallen?'碰撞或失去支撑让机器人倒下了。起身后继续，已经通过的路标会保留。':recovering?s.body==='falling'?'等待落地，然后起身重试。':'正在起身，马上就能继续接待。':copies[r.step]);
    const needsWalk=['route','park','face'].includes(r.step)&&s.mode!=='locomotion';
    this.primary=fallen?{recover:true}:s.mode==='debug'?{mode:'damp'}:needsWalk?{mode:'locomotion'}:r.step==='greet'&&s.mode!=='stand'?{mode:'stand'}:r.step==='greet'?{wave:true}:{mode:'locomotion'};
    const manual=status.source==='manual',android=status.layout==='exhibition-android';
    const selected=actionInfo(s.selectedAction).title;
    const primary=fallen?'起身，继续挑战':recovering?'恢复支撑中…':s.mode==='debug'?'退出调试，准备起身':needsWalk?'恢复行走':r.step==='greet'?s.mode==='stand'?`A · ${selected}`:'锁定站立，准备招呼':'左杆移动 · 右杆转向';
    f.property(n('reception-primary'),'textContent',manual&&primary.startsWith('A ·')?primary.replace('A ·','1 ·'):primary);
    f.property(n<HTMLButtonElement>('reception-primary'),'disabled',!enabled||recovering||index===4||Boolean(s.gesture)||!fallen&&!needsWalk&&!['greet'].includes(r.step)&&s.mode!=='debug');
    const live=!enabled?'按 A 或点击开始，接过接待任务':fallen||recovering?'起身后继续，保留绕行进度':s.gesture?`正在${actionInfo(s.gesture).title} · 请等完整结束`:needsWalk?'当前模式不能驾驶 · 先恢复行走':r.notice|| (r.step==='route'?`距路标 ${s.targetDistance.toFixed(1)} m · 注意右侧展台`:r.step==='park'?distance<=RECEPTION_CONFIG.parking.radius?`圈内停稳 ${r.hold.toFixed(1)} / 0.9 秒`:`距接待圈 ${distance.toFixed(1)} m`:r.step==='face'?degrees<=15?'方向正确 · 松杆保持':`${r.headingError>0?'向左转':'向右转'} · 看向游客`:r.step==='greet'?s.mode==='stand'?['wave','bow'].includes(s.selectedAction)?`已就位 · 按 ${manual?'1':'A'} 招呼，也可点下方动作`:'当前不是接待动作 · 请选择挥手或鞠躬':android||manual?'点下方「锁定站立」，再打招呼':'菜单键 ≡ 切站立，或点击下方按钮':'游客：你好，G1！');
    f.property(n('reception-live'),'textContent',live);f.attribute(n('reception-live'),'data-success',String(Boolean(r.notice)||index===4));
    f.attribute(n('reception-progress'),'style',`transform:scaleX(${r.progress})`);
    f.attribute(n('reception-progress').parentElement!,'aria-valuenow',String(Math.round(r.progress*100)));
    f.property(n('reception-keys'),'textContent',manual?'WASD 移动 · Q / E 转身 · 1 招呼 · R 起身':`${android?'安卓 LB + A':'电脑 RT + A'} 恢复行走 · ${android?'点按钮锁定站立':'≡ 站立 / 行走'} · A 招呼 · ${android?'LB':'LT'} + X 起身${android?'':'（LT 按满 2 秒）'}`);
    const hints={route:r.routeIndex===0?'朝右前方的金色路标走，再沿展台右侧到第二枚路标；别直冲中央展台。':'继续沿展台右侧前进，到后方第二枚路标，再向游客靠近。',park:'金圈靠近游客，在展台后方；到圈中央附近就松杆，转向也要停下来。',face:`${degrees<=15?'已经对准，松开右摇杆保持一会儿。':`轻推右摇杆${r.headingError>0?'向左':'向右'}，让箭头朝向游客。`}`,greet:'先锁定站立，再选挥手或鞠躬；A 执行当前选择，其他舞蹈不会完成接待。',complete:''};
    f.property(n('reception-hint-copy'),'hidden',r.hints===0||index===4);f.property(n('reception-hint-copy'),'textContent',hints[r.step]);
    f.property(n('reception-hint'),'textContent',r.hints?`再看提示 · 已用 ${r.hints} 次`:'需要一点提示？');
    f.property(n<HTMLButtonElement>('reception-hint'),'disabled',!enabled||index===4);
    f.property(n('reception-scorecard'),'hidden',index!==4);
    f.property(n('reception-play-controls'),'hidden',index===4);
    f.property(n('reception-score'),'textContent',String(r.score));f.property(n('reception-stars'),'textContent','★'.repeat(s.stars)+'☆'.repeat(3-s.stars));
    const result=r.result??{elapsed:r.elapsed,falls:s.falls,hints:r.hints};
    f.property(n('reception-result-copy'),'textContent',`用时 ${roundTime(result.elapsed)} · 倒地 ${result.falls} 次 · 提示 ${result.hints} 次`);
    for(const [key,value]of Object.entries(r.breakdown))f.property(n(`reception-score-${key}`),'textContent',String(value));
    f.property(n('reception-knowledge'),'textContent',r.step==='route'?'先观察路线，再控制身体。移动与转向要配合，展台不会给机器人让路。':r.step==='park'?'松杆不等于立刻停止：减速和站稳，也需要关节协同。':r.step==='face'?'身体朝向和行走方向不同；转向后，前进会沿新的朝向移动。':r.step==='greet'?'站立仍需要电机主动维持支撑；手臂互动与行走使用不同控制方式。':'停车 20 + 朝向 20 + 稳健 20 + 招呼 30 + 独立完成 10。每次倒地扣稳健 8 分，每次提示扣独立 2 分，各项最低 0 分。');
    f.property(n('reception-speed'),'textContent',s.speedMode==='slow'?'低速 · 点此切高速':'高速 · 点此切低速');
    f.property(n<HTMLButtonElement>('reception-speed'),'disabled',!enabled||s.body!=='upright');
    for(const id of ['reception-wave','reception-bow'])f.property(n<HTMLButtonElement>(id),'disabled',!enabled||s.body!=='upright'||s.mode!=='stand'||Boolean(s.gesture));
    for(const button of n('reception-directions').querySelectorAll<HTMLButtonElement>('button'))f.property(button,'disabled',!enabled||s.body!=='upright'||s.mode!=='locomotion'||Boolean(s.gesture));
  }
}
