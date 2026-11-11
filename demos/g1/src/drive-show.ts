import {DRIVE_CONFIG,type DriveMode} from './drive-config';
import {validAction,type DriveActionId} from './drive-actions';
import {HOIST_CONFIG,type HoistPhase} from './drive-hoist';

export const SHOW_CONFIG={
  hoistRoute:[{x:0,z:1.35,radius:.3},{x:6.8,z:1.35,radius:.3}],
  route:[{x:6.8,z:1.4,radius:.32},{x:6.8,z:3.8,radius:.32},{x:6.3,z:6.4,radius:.35}],
  stage:{x:6.3,z:8.25,radius:.55},audience:{x:6.3,z:5.8},heading:Math.PI,
  headingTolerance:15*Math.PI/180,settledSpeed:.045,settledAngular:.12,positionHold:1,
} as const;
export type ShowStep='hoist'|'program'|'release'|'route'|'position'|'perform'|'complete';
interface Observation {
  running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;
  x:number;z:number;yaw:number;distance:number;speed:number;angular:number;
  needsNeutral:boolean;gesture:DriveActionId|null;falls:number;seconds:number;
  hoist:{phase:HoistPhase;supported:boolean;locked:boolean};
}
const steps:ShowStep[]=['hoist','program','release','route','position','perform','complete'];
const difference=(a:number,b:number)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveShow {
  step:ShowStep='hoist';hoistRouteIndex=0;routeIndex=0;actionIndex=0;progress=0;hold=0;elapsed=0;headingError=0;notice='';
  program:readonly DriveActionId[]=[];
  retryMessage='';positionError=0;positionHeadingError=0;
  result:Readonly<{score:number;falls:number;elapsed:number;program:readonly DriveActionId[]}>|null=null;
  breakdown={preparation:0,route:0,positioning:0,performance:0,care:15};
  private lastX=DRIVE_CONFIG.spawn.x;private lastZ=DRIVE_CONFIG.spawn.z;private lastDistance=0;
  private lastPhase:HoistPhase='detached';private travelled=0;private armed=false;
  private candidate:DriveActionId|null=null;
  private positionValid=false;
  get index():number{return steps.indexOf(this.step);}
  get target():{x:number;z:number;radius:number}{return this.step==='hoist'&&this.hoistRouteIndex<SHOW_CONFIG.hoistRoute.length?SHOW_CONFIG.hoistRoute[this.hoistRouteIndex]:this.index<3?HOIST_CONFIG:this.step==='route'?SHOW_CONFIG.route[this.routeIndex]:SHOW_CONFIG.stage;}
  get score():number{return this.result?.score??Object.values(this.breakdown).reduce((a,b)=>a+b,0);}
  reset():void{
    this.step='hoist';this.hoistRouteIndex=this.routeIndex=this.actionIndex=this.progress=this.hold=this.elapsed=this.headingError=this.travelled=0;
    this.lastX=DRIVE_CONFIG.spawn.x;this.lastZ=DRIVE_CONFIG.spawn.z;this.lastDistance=0;this.lastPhase='detached';this.armed=this.positionValid=false;this.candidate=null;this.program=[];this.result=null;this.notice='';
    this.breakdown={preparation:0,route:0,positioning:0,performance:0,care:15};
    this.retryMessage='';this.positionError=this.positionHeadingError=0;
  }
  suspend(reason?:'pause'):void{
    if(this.candidate)this.retryMessage=reason==='pause'?'本段因暂停未计入成绩，继续后请重演。':'本段中断，未计入成绩，请重演。';
    this.candidate=null;if(this.step!=='complete')this.hold=this.progress=0;
  }
  private ready(s:Observation):boolean{return s.experience==='show'&&s.running&&!s.paused&&s.body==='upright'&&!s.needsNeutral;}
  private settled(s:Observation):boolean{return s.speed<SHOW_CONFIG.settledSpeed&&Math.abs(s.angular)<SHOW_CONFIG.settledAngular;}
  private inside(s:Observation):boolean{return Math.hypot(s.x-SHOW_CONFIG.stage.x,s.z-SHOW_CONFIG.stage.z)<=SHOW_CONFIG.stage.radius;}
  private facing(s:Observation):boolean{return Math.abs(difference(SHOW_CONFIG.heading,s.yaw))<=SHOW_CONFIG.headingTolerance;}
  private performing(s:Observation):boolean{return this.ready(s)&&s.mode==='performance'&&!s.hoist.locked&&this.inside(s)&&this.facing(s)&&this.settled(s);}
  private next(step:ShowStep,notice:string):void{this.step=step;this.hold=this.progress=this.travelled=0;this.armed=false;this.candidate=null;this.notice=notice;}
  saveProgram(actions:readonly unknown[],s:Observation):boolean{
    if(!['program','release'].includes(this.step)||!this.ready(s)||s.mode!=='debug'||!s.hoist.supported||actions.length<3||!actions.every(validAction))return false;
    this.program=Object.freeze(actions.slice(0,3) as DriveActionId[]);this.breakdown.preparation=10;
    this.next('release','✓ 三段节目已确认 · 恢复站立，姿势稳定后解挂');return true;
  }
  update(delta:number,s:Observation):void{
    if(!Number.isFinite(delta)||delta<=0)return;
    const dt=Math.min(.1,delta),distance=s.distance-this.lastDistance;
    const relocated=Math.hypot(s.x-this.lastX,s.z-this.lastZ)>Math.max(0,distance)+.015||distance<-.001||distance>DRIVE_CONFIG.fastSpeed*dt+.015;
    this.lastX=s.x;this.lastZ=s.z;this.lastDistance=s.distance;
    const previousPhase=this.lastPhase;this.lastPhase=s.hoist.phase;
    if(s.experience!=='show'||this.step==='complete')return;
    this.headingError=difference(SHOW_CONFIG.heading,s.yaw);
    if(relocated){this.travelled=0;this.armed=this.positionValid=false;this.suspend();if(this.step==='perform')this.next('position','位置发生变化 · 回到舞台，重新停稳朝向观众');}
    if(!s.running||s.paused){if(distance>.001){this.travelled=0;this.armed=this.positionValid=false;}this.suspend();return;}
    this.elapsed=s.seconds;this.breakdown.care=Math.max(0,15-s.falls*8);
    if(this.index>=3&&previousPhase==='attaching'&&s.hoist.phase==='supported'&&s.body==='upright'){
      this.program=[];this.routeIndex=this.actionIndex=0;this.positionValid=false;
      this.retryMessage='';
      this.breakdown.preparation=this.breakdown.route=this.breakdown.positioning=this.breakdown.performance=0;
      this.next('program','已重新挂接 · 重新确认三段节目，再解挂并沿路线登台');return;
    }
    if(this.step==='hoist'){
      if(previousPhase==='attaching'&&s.hoist.phase==='supported'&&s.body==='upright')this.next('program','✓ 吊带支撑有效 · 切阻尼 / 零力矩后进入调试，保存前三个 RB 节目');
      else if(relocated){this.travelled=0;this.armed=false;}
      else if(this.ready(s)&&s.mode==='locomotion'&&!s.gesture&&this.hoistRouteIndex<SHOW_CONFIG.hoistRoute.length){
        const target=this.target,remaining=Math.hypot(s.x-target.x,s.z-target.z);
        if(remaining>target.radius+.06)this.armed=true;this.travelled+=Math.max(0,distance);
        if(this.armed&&remaining<=target.radius&&this.travelled>=.25){this.hoistRouteIndex++;this.travelled=0;this.armed=false;}
      }
      return;
    }
    if(this.step==='program'||this.step==='release'){
      if(this.step==='release'&&previousPhase==='releasing'&&s.hoist.phase==='detached'&&s.mode==='stand'&&s.body==='upright'){
        this.breakdown.preparation=20;this.next('route','✓ 已安全解挂 · 恢复行走，沿路标前往舞台');
      }else if(s.hoist.phase==='detached'){
        this.program=[];this.breakdown.preparation=0;this.next('hoist','吊带支撑已离开 · 重新挂接并确认节目');
      }
      return;
    }
    if(relocated)return;
    if(!this.inside(s)||s.hoist.locked)this.positionValid=false;
    if(this.step==='perform'&&(!this.inside(s)||!this.facing(s)||s.body!=='upright'||s.hoist.locked))this.next('position','回到舞台并面向观众 · 已完成的节目保留');
    if(!this.ready(s)||s.hoist.locked){if(distance>.001){this.travelled=0;this.armed=this.positionValid=false;}this.suspend();return;}
    if(this.step==='perform'){
      if(this.candidate&&(s.gesture!==this.candidate||!this.performing(s)))this.candidate=null;
      this.progress=(this.actionIndex+(this.candidate?.5:0))/3;return;
    }
    const target=this.target,remaining=Math.hypot(s.x-target.x,s.z-target.z);
    if(s.mode==='locomotion'&&!s.gesture){if(remaining>target.radius+.06)this.armed=true;this.travelled+=Math.max(0,distance);}
    const reached=this.positionValid||(this.armed&&remaining<=target.radius&&this.travelled>=.25);
    if(this.step==='route'){
      if(!reached||s.mode!=='locomotion'||s.gesture)return;
      this.routeIndex++;this.breakdown.route=Math.round(this.routeIndex/SHOW_CONFIG.route.length*20);
      if(this.routeIndex===SHOW_CONFIG.route.length)this.next('position','✓ 到达舞台前 · 驶入中心，面向观众并停稳');
      else {this.travelled=0;this.armed=false;this.notice='✓ 路标通过 · 继续沿下一枚路标前进';}
    }else if(this.step==='position'){
      this.hold=reached&&this.settled(s)&&this.facing(s)&&!s.gesture&&['locomotion','stand','performance'].includes(s.mode)?this.hold+dt:0;
      this.progress=Math.min(1,this.hold/SHOW_CONFIG.positionHold);
      if(this.progress>=1){this.positionValid=true;this.positionError=remaining;this.positionHeadingError=this.headingError;this.breakdown.positioning=15;this.next('perform','✓ 舞台就位 · 切动作表演，依次完整播放三段节目');}
    }
  }
  startAction(action:DriveActionId,s:Observation):void{
    if(this.step!=='perform')return;
    this.candidate=this.performing(s)&&action===this.program[this.actionIndex]?action:null;
    this.retryMessage=this.candidate?'':action!==this.program[this.actionIndex]?'动作顺序不符，未计入成绩。请重演当前节目。':'未达到演出条件。请面向观众停稳，切到动作表演后重演。';
  }
  finishAction(action:DriveActionId,s:Observation):void{
    if(this.candidate!==action||this.step!=='perform'||s.gesture!==action||!this.performing(s))return;
    this.candidate=null;this.actionIndex++;this.breakdown.performance=this.actionIndex*10;this.progress=this.actionIndex/3;
    if(this.actionIndex===3){
      this.result=Object.freeze({score:this.score,falls:s.falls,elapsed:s.seconds,program:Object.freeze([...this.program])});
      this.next('complete','演出成功！三段节目全部完成，观众向你鼓掌');this.progress=1;
    }else this.notice=`✓ 第 ${this.actionIndex} 段完成 · 继续下一段节目`;
  }
}
