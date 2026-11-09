import type {DriveMode} from './drive-config';
import type {DriveActionId} from './drive-actions';
import type {DrivePadProfile} from './drive-pad-layout';
import {DRIVE_CONFIG} from './drive-config';

export const TUTORIAL_STEPS=['walk','turn','park','stand','damp','recover','perform','complete'] as const;
export const TUTORIAL_TASK_COUNT=TUTORIAL_STEPS.length-1;
export type TutorialStep=typeof TUTORIAL_STEPS[number];
export const TUTORIAL_ROUTE={
  arrival:{...DRIVE_CONFIG.welcome,radius:.38,label:'A'},
  parking:{...DRIVE_CONFIG.destination,radius:.32,label:'B'},
  arrivalSeconds:.85,parkingSeconds:1.1,headingSeconds:.65,headingTolerance:12*Math.PI/180,
} as const;
interface Observation {running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;distance:number;yaw:number;needsNeutral:boolean;gesture:DriveActionId|null;x:number;z:number;speed:number;angular:number;}
const difference=(a:number,b:number)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveTutorial {
  index=0;progress=0;hold=0;notice='';headingError=0;
  private amount=0;private lastDistance=0;private lastYaw=DRIVE_CONFIG.spawn.yaw;
  private lastX=DRIVE_CONFIG.spawn.x;private lastZ=DRIVE_CONFIG.spawn.z;private noticeSeconds=0;
  get step():TutorialStep{return TUTORIAL_STEPS[this.index];}
  get target(){return this.step==='walk'?TUTORIAL_ROUTE.arrival:TUTORIAL_ROUTE.parking;}
  get navigating():boolean{return ['walk','turn','park'].includes(this.step);}
  get score():number{return this.step==='complete'?100:Math.round(this.index/TUTORIAL_TASK_COUNT*100);}
  reset():void{this.index=0;this.progress=this.amount=this.lastDistance=this.hold=this.headingError=this.noticeSeconds=0;this.notice='';this.lastYaw=DRIVE_CONFIG.spawn.yaw;this.lastX=DRIVE_CONFIG.spawn.x;this.lastZ=DRIVE_CONFIG.spawn.z;}
  private next():void{
    const messages:Partial<Record<TutorialStep,string>>={walk:'✓ A 点到达！接下来对准 B 点',turn:'✓ 朝向正确！现在驶向 B 点',park:'✓ B 点停稳！开始学习模式切换',perform:`✓ ${TUTORIAL_TASK_COUNT} 项任务全部完成！`};
    this.notice=messages[this.step]??'✓ 完成，继续下一项';this.noticeSeconds=2.2;
    this.index=Math.min(TUTORIAL_TASK_COUNT,this.index+1);this.amount=this.hold=0;this.progress=this.step==='complete'?1:0;
  }
  update(dt:number,s:Observation):void{
    dt=Math.max(0,Math.min(.1,dt));
    const distance=Math.max(0,s.distance-this.lastDistance),turn=Math.abs(difference(s.yaw,this.lastYaw));
    const relocated=Math.hypot(s.x-this.lastX,s.z-this.lastZ)>distance+.015;
    this.lastDistance=s.distance;this.lastYaw=s.yaw;this.lastX=s.x;this.lastZ=s.z;
    this.headingError=difference(Math.atan2(this.target.x-s.x,this.target.z-s.z),s.yaw);
    if(!s.running||s.paused||s.experience!=='mission'||this.step==='complete'){this.hold=0;return;}
    if(this.noticeSeconds>0){this.noticeSeconds-=dt;if(this.noticeSeconds<=0)this.notice='';}
    if(relocated){this.amount=this.hold=this.progress=0;}
    const upright=s.body==='upright'&&!s.needsNeutral;
    const driving=upright&&s.mode==='locomotion'&&!s.gesture;
    const settled=s.speed<.055&&Math.abs(s.angular)<.14;
    switch(this.step){
      case 'walk':case 'park':{
        if(driving&&!relocated)this.amount+=Math.min(distance,.09);
        const remaining=Math.hypot(s.x-this.target.x,s.z-this.target.z),inside=remaining<=this.target.radius;
        const duration=this.step==='walk'?TUTORIAL_ROUTE.arrivalSeconds:TUTORIAL_ROUTE.parkingSeconds;
        this.hold=driving&&settled&&inside&&this.amount>=.25?this.hold+dt:0;
        const routeLength=this.step==='walk'?Math.hypot(TUTORIAL_ROUTE.arrival.x,TUTORIAL_ROUTE.arrival.z):Math.hypot(TUTORIAL_ROUTE.parking.x-TUTORIAL_ROUTE.arrival.x,TUTORIAL_ROUTE.parking.z-TUTORIAL_ROUTE.arrival.z);
        this.progress=this.amount<.25?0:Math.min(.7,Math.max(0,1-remaining/routeLength)*.7)+Math.min(1,this.hold/duration)*.3;
        if(this.hold>=duration)this.progress=1;
        break;
      }
      case 'turn':
        if(driving)this.amount+=Math.min(turn,.2);
        this.hold=driving&&settled&&Math.abs(this.headingError)<=TUTORIAL_ROUTE.headingTolerance&&this.amount>=.2?this.hold+dt:0;
        this.progress=Math.min(.7,Math.max(0,1-Math.abs(this.headingError)/Math.PI)*.7)+Math.min(1,this.hold/TUTORIAL_ROUTE.headingSeconds)*.3;
        if(this.hold>=TUTORIAL_ROUTE.headingSeconds)this.progress=1;
        break;
      case 'stand':this.amount=upright&&s.mode==='stand'?this.amount+dt:0;this.progress=Math.min(1,this.amount/.6);break;
      case 'damp':this.progress=s.mode==='damp'?(s.body==='fallen'?1:s.body==='falling'?.45:.1):0;break;
      case 'recover':this.progress=s.body==='upright'&&s.mode==='stand'?1:s.body==='recovering'?.5:0;break;
      case 'perform':this.progress=s.mode==='performance'?(s.gesture?.includes('dance')?.6:.2):0;break;
    }
    if(this.progress>=1)this.next();
  }
  finishAction(action:DriveActionId,s:Observation):void{
    if(s.running&&!s.paused&&s.experience==='mission'&&this.step==='perform'&&s.mode==='performance'&&action.includes('dance'))this.next();
  }
}

export function tutorialGuide(t:Pick<DriveTutorial,'step'>,profile:DrivePadProfile,manual:boolean,body:string,mode:DriveMode){
  const android=profile==='exhibition-android',prefix=android?'LB':'LT';
  const key=(pad:string,touch:string)=>manual?touch:pad;
  const hold=!manual&&!android?'LT 组合需按住满 2 秒。':'';
  const entries={
    walk:{title:'第一站 · 到 A 点报到',instruction:'驶入金色 A 圈，松开摇杆停稳。路过不算，需要停留约 1 秒。',keys:key('L 左摇杆 · 移动 / 松开停车','WASD / 触屏方向键 · 松开停车'),knowledge:'先看目的地，再轻推摇杆；机器人减速需要距离，提前松杆更容易停准。',focus:'walk',button:'按住下方方向键',command:null},
    turn:{title:'看准方向 · 对准 B 点',instruction:'原地转向，让地面朝向箭头对准 B 圈，再松开摇杆。',keys:key('R 右摇杆 ← / →','Q / E · 或屏幕左转 / 右转'),knowledge:'转向是改变身体朝向；要对准实际目标，而不是只转过固定角度。',focus:'turn',button:'按住下方转向键',command:null},
    park:{title:'第二站 · 在 B 点精准停车',instruction:'沿箭头驶向 B 圈，进入圈内后松杆停稳约 1 秒。注意避开展台。',keys:key('L 移动 + R 修正方向','WASD 移动 · Q / E 转向'),knowledge:'移动与转向配合才能到达指定位置；小幅修正和提前减速，比一直推满更准确。',focus:'park',button:'按住下方方向键',command:null},
    stand:{title:'站稳，准备切换模式',instruction:'切到“锁定站立”，观察摇杆不再带动行走。',keys:key(android?'点上方「锁定站立」':'LT + ↑','点击「锁定站立」'),knowledge:'站立模式仍主动控制关节，以维持姿态。'+hold,focus:'stand',button:'切换锁定站立',command:{mode:'stand'}},
    damp:{title:'关节有阻力，还能站住吗？',instruction:'切换“阻尼”，观察机器人失去主动支撑后缓慢倒下。',keys:key(`${prefix} + B`,'点击「阻尼模式」'),knowledge:'阻尼提供运动阻力，不负责主动站稳；零力矩更放松。倒地为网页示意。'+hold,focus:'damp',button:'体验阻尼',command:{mode:'damp'}},
    recover:{title:'现在，由你扶它起来',instruction:body==='falling'?'等模型落地，再按起身组合键。':body==='recovering'?'正在收拢四肢、恢复支撑，请稍候…':'按起身组合键，观察机器人恢复站立。',keys:key(`${prefix} + X`,'点击「起身复位」'),knowledge:'倒地后不能直接行走，先恢复支撑，再松开摇杆重新接管。'+hold,focus:'recover',button:body==='recovering'?'正在起身…':'起身复位',command:{recover:true}},
    perform:{title:'用一段表演，完成初体验',instruction:mode!=='performance'?'先切到“动作表演”，再用 RB + 彩色键选择一段舞蹈。':'试试 RB + A / B / X / Y，等整段动作演完。',keys:key('RB + A / B / X / Y','点下方任一舞蹈卡片'),knowledge:'走路、站立与表演使用不同控制方式；全身动作依靠多个关节协同。',focus:'perform',button:mode!=='performance'?'进入动作表演':'试试左右律动',command:mode!=='performance'?{mode:'performance'}:{actionTrigger:'dance'}},
    complete:{title:'你已经会驾驶 G1 了',instruction:'两站到达、对准停车、模式切换、起身和表演，全部亲手完成。',keys:`${TUTORIAL_TASK_COUNT} / ${TUTORIAL_TASK_COUNT} · 入门完成`,knowledge:'继续探索其他动作，或切回自由体验。所有动作均为网页模拟，不连接实机。',focus:'complete',button:'继续自由体验',command:null},
  };
  return entries[t.step];
}
