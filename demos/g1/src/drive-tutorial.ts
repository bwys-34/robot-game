import type {DriveMode} from './drive-config';
import type {DriveActionId} from './drive-actions';
import type {DrivePadProfile} from './drive-pad-layout';

export const TUTORIAL_STEPS=['walk','turn','stand','damp','recover','perform','complete'] as const;
export type TutorialStep=typeof TUTORIAL_STEPS[number];
interface Observation {running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;distance:number;yaw:number;needsNeutral:boolean;gesture:DriveActionId|null;}
export class DriveTutorial {
  index=0;progress=0;
  private amount=0;private lastDistance=0;private lastYaw=Math.PI;
  get step():TutorialStep{return TUTORIAL_STEPS[this.index];}
  get score():number{return this.step==='complete'?100:Math.round(this.index/6*100);}
  reset():void{this.index=0;this.progress=this.amount=this.lastDistance=0;this.lastYaw=Math.PI;}
  private next():void{this.index=Math.min(6,this.index+1);this.amount=0;this.progress=this.index===6?1:0;}
  update(dt:number,s:Observation):void{
    const distance=Math.max(0,s.distance-this.lastDistance),turn=Math.abs(Math.atan2(Math.sin(s.yaw-this.lastYaw),Math.cos(s.yaw-this.lastYaw)));
    this.lastDistance=s.distance;this.lastYaw=s.yaw;
    if(!s.running||s.paused||s.experience!=='mission'||this.step==='complete')return;
    const upright=s.body==='upright'&&!s.needsNeutral;
    switch(this.step){
      case 'walk':if(upright&&s.mode==='locomotion')this.amount+=Math.min(distance,.09);this.progress=Math.min(1,this.amount/.8);break;
      case 'turn':if(upright&&s.mode==='locomotion')this.amount+=Math.min(turn,.2);this.progress=Math.min(1,this.amount/(Math.PI/4));break;
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
    walk:{title:'让 G1 迈出第一步',instruction:'轻推左摇杆，走出 0.8 米。前进、后退或侧移都可以。',keys:key('L 左摇杆','WASD / 屏幕方向键'),knowledge:'摇杆控制移动方向；松开后，机器人会减速站稳。',focus:'walk',button:'按住下方方向键',command:null},
    turn:{title:'换个方向看看',instruction:'松开左摇杆，推动右摇杆，让身体转过约 45°。',keys:key('R 右摇杆 ← / →','Q / E · 或屏幕左转 / 右转'),knowledge:'转向改变身体朝向，随后“前进”也会沿新的方向行走。',focus:'turn',button:'按住下方转向键',command:null},
    stand:{title:'站稳，准备切换模式',instruction:'切到“锁定站立”，观察摇杆不再带动行走。',keys:key(android?'点上方「锁定站立」':'LT + ↑','点击「锁定站立」'),knowledge:'站立模式仍主动控制关节，以维持姿态。'+hold,focus:'stand',button:'切换锁定站立',command:{mode:'stand'}},
    damp:{title:'关节有阻力，还能站住吗？',instruction:'切换“阻尼”，观察机器人失去主动支撑后缓慢倒下。',keys:key(`${prefix} + B`,'点击「阻尼模式」'),knowledge:'阻尼提供运动阻力，不负责主动站稳；零力矩更放松。倒地为网页示意。'+hold,focus:'damp',button:'体验阻尼',command:{mode:'damp'}},
    recover:{title:'现在，由你扶它起来',instruction:body==='falling'?'等模型落地，再按起身组合键。':body==='recovering'?'正在收拢四肢、恢复支撑，请稍候…':'按起身组合键，观察机器人恢复站立。',keys:key(`${prefix} + X`,'点击「起身复位」'),knowledge:'倒地后不能直接行走，先恢复支撑，再松开摇杆重新接管。'+hold,focus:'recover',button:body==='recovering'?'正在起身…':'起身复位',command:{recover:true}},
    perform:{title:'用一段表演，完成初体验',instruction:mode!=='performance'?'先切到“动作表演”，再用 RB + 彩色键选择一段舞蹈。':'试试 RB + A / B / X / Y，等整段动作演完。',keys:key('RB + A / B / X / Y','点下方任一舞蹈卡片'),knowledge:'走路、站立与表演使用不同控制方式；全身动作依靠多个关节协同。',focus:'perform',button:mode!=='performance'?'进入动作表演':'试试左右律动',command:mode!=='performance'?{mode:'performance'}:{actionTrigger:'dance'}},
    complete:{title:'你已经会驾驶 G1 了',instruction:'移动、模式切换、倒地恢复和表演，全部亲手完成。',keys:'6 / 6 · 入门完成',knowledge:'继续探索其他动作，或切回自由体验。所有动作均为网页模拟，不连接实机。',focus:'complete',button:'继续自由体验',command:null},
  };
  return entries[t.step];
}
