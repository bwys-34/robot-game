import {DRIVE_CONFIG,type DriveMode} from './drive-config';
import type {DriveActionId} from './drive-actions';
import {TRAINING_LEVELS,trainingLayout,type TrainingLevel} from './drive-training-layout';

/** Authored museum driving exercise. Coordinates are metres, angles radians. */
export const COURSE_CONFIG=trainingLayout('practice');
export const COURSE_LEVELS=TRAINING_LEVELS;
export type CourseLevel=TrainingLevel;
const layouts={practice:COURSE_CONFIG,exam:trainingLayout('exam'),advanced:trainingLayout('advanced')};
export type CourseStep='approach'|'slalom'|'gate'|'corner'|'side'|'park'|'complete';
interface Observation {
  running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;
  x:number;z:number;yaw:number;distance:number;speed:number;angular:number;
  needsNeutral:boolean;gesture:DriveActionId|null;falls:number;seconds:number;
}
const steps:CourseStep[]=['approach','slalom','gate','corner','side','park','complete'];
const difference=(a:number,b:number)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveCourse {
  step:CourseStep='approach';waypointIndex=0;progress=0;hold=0;elapsed=0;headingError=0;
  parkingError=Infinity;notice='';
  level:CourseLevel='practice';
  skillNotice='';skillDistance=0;
  result:Readonly<{score:number;falls:number;elapsed:number;parkingError:number;headingError:number;level:CourseLevel}>|null=null;
  breakdown={route:0,parking:0,heading:0,care:20};
  private lastX=DRIVE_CONFIG.spawn.x;private lastZ=DRIVE_CONFIG.spawn.z;private lastDistance=0;
  private travelled=0;private armed=false;private passed=0;private gateCrossed=false;
  get index():number{return steps.indexOf(this.step);}
  get layout(){return layouts[this.level];}
  get requiredHeading():number{return this.step==='side'?this.layout.sideHeading:this.layout.heading;}
  get headingCue():string{return this.requiredHeading===Math.PI?'面向展厅':'沿停靠框箭头向右';}
  get target():{x:number;z:number;radius:number}{
    const c=this.layout;
    return this.step==='approach'?(this.waypointIndex===0?c.entry:c.approach):this.step==='slalom'?c.slalom[this.waypointIndex]:this.step==='gate'?c.gate[this.waypointIndex]:this.step==='corner'?c.corner[this.waypointIndex]:this.step==='side'?c.side:this.step==='park'&&this.waypointIndex===0?c.dockEntry:c.parking;
  }
  get score():number{return this.result?.score??Object.values(this.breakdown).reduce((a,b)=>a+b,0);}
  reset():void{
    this.step='approach';this.waypointIndex=this.progress=this.hold=this.elapsed=this.headingError=this.travelled=this.passed=0;
    this.lastX=DRIVE_CONFIG.spawn.x;this.lastZ=DRIVE_CONFIG.spawn.z;this.lastDistance=0;this.armed=this.gateCrossed=false;this.parkingError=Infinity;this.notice='';this.result=null;
    this.breakdown={route:0,parking:0,heading:0,care:20};this.skillDistance=0;this.skillNotice='';
  }
  suspend():void{if(this.step!=='complete')this.hold=this.progress=0;}
  private next(step:CourseStep,notice:string):void{this.step=step;this.waypointIndex=0;this.hold=this.progress=this.travelled=this.skillDistance=0;this.armed=this.gateCrossed=false;this.notice=notice;this.skillNotice='';}
  private credit(n:number):void{this.breakdown.route=Math.round((this.passed+=n)/(3+this.layout.slalom.length+this.layout.gate.length+this.layout.corner.length)*40);}
  private retryGate():void{
    if(this.step!=='gate'||this.waypointIndex!==1)return;
    this.credit(-1);
    this.next('gate','请回到门前路标 · 对准两根门柱之间，从正面穿过窄门');
    this.skillNotice='绕过门柱不计 · 返回门前标记，从两柱中间穿过。';
  }
  update(delta:number,s:Observation):void{
    if(!Number.isFinite(delta)||delta<=0)return;
    const previousX=this.lastX,previousZ=this.lastZ;
    const dt=Math.min(.1,delta),dx=s.x-previousX,dz=s.z-previousZ,distance=s.distance-this.lastDistance;
    const relocated=Math.hypot(dx,dz)>Math.max(0,distance)+.015||distance<-.001||distance>DRIVE_CONFIG.fastSpeed*dt+.015;
    this.lastX=s.x;this.lastZ=s.z;this.lastDistance=s.distance;
    if(s.experience!=='course'||this.step==='complete')return;
    const c=this.layout;
    this.headingError=difference(this.requiredHeading,s.yaw);
    if(relocated){this.travelled=this.skillDistance=0;this.armed=this.gateCrossed=false;this.retryGate();this.suspend();return;}
    if(!s.running||s.paused){if(distance>.001){this.travelled=this.skillDistance=0;this.armed=this.gateCrossed=false;this.retryGate();}this.suspend();return;}
    this.elapsed=s.seconds;this.breakdown.care=Math.max(0,20-8*s.falls);
    const driving=s.body==='upright'&&!s.needsNeutral&&s.mode==='locomotion'&&!s.gesture;
    if(!driving){if(distance>.001){this.travelled=this.skillDistance=0;this.armed=this.gateCrossed=false;this.retryGate();}this.suspend();return;}
    if(this.step==='gate'&&this.waypointIndex===1){
      const passage=c.gatePassage;
      if(previousZ<passage.z&&s.z>=passage.z){
        const crossingX=previousX+dx*(passage.z-previousZ)/dz;
        if(crossingX<passage.minX||crossingX>passage.maxX){this.retryGate();return;}
        this.gateCrossed=true;
      }else if(previousZ>=passage.z&&s.z<passage.z)this.gateCrossed=false;
    }
    const target=this.target,remaining=Math.hypot(s.x-target.x,s.z-target.z);
    if(remaining>target.radius+.06)this.armed=true;
    this.travelled+=Math.max(0,distance);
    if(this.step==='park'&&this.waypointIndex===1){
      const b=c.docking,r=DRIVE_CONFIG.radius,length=Math.hypot(dx,dz),forward=dx*Math.sin(s.yaw)+dz*Math.cos(s.yaw),aligned=Math.abs(this.headingError)<=c.headingTolerance;
      if(dx<0)this.skillDistance=Math.max(0,this.skillDistance+dx);
      else if(aligned&&forward>=length*.9)this.skillDistance+=dx;
      this.skillDistance=Math.min(this.skillDistance,Math.max(0,s.x-c.dockEntry.x));
      if(previousX<b.minX&&s.x>=b.minX){const z=previousZ+dz*(b.minX-previousX)/dx;this.gateCrossed=aligned&&forward>=length*.9&&z>=b.minZ+r&&z<=b.maxZ-r;}
      if(s.x<b.minX||s.x+r>b.maxX||s.z-r<b.minZ||s.z+r>b.maxZ){this.gateCrossed=false;if(s.x>=b.minX)this.skillDistance=0;}
    }
    const settled=s.speed<c.settledSpeed&&Math.abs(s.angular)<c.settledAngular;
    const facing=Math.abs(this.headingError)<=c.headingTolerance;
    const reached=this.armed&&remaining<=target.radius&&this.travelled>=.25;
    if(this.step==='slalom'){
      const previous=this.waypointIndex?c.slalom[this.waypointIndex-1]:c.approach;
      const legX=target.x-previous.x,legZ=target.z-previous.z,length=Math.hypot(legX,legZ);
      const along=(dx*legX+dz*legZ)/length;
      const forward=dx*Math.sin(s.yaw)+dz*Math.cos(s.yaw);
      const facingLeg=Math.abs(difference(Math.atan2(legX,legZ),s.yaw))<=Math.PI/3;
      this.skillDistance=Math.max(0,this.skillDistance+(along<0||facingLeg&&forward>=Math.hypot(dx,dz)*.82?along:0));
      const needed=length*.56;
      this.progress=Math.min(1,this.skillDistance/needed);
      this.skillNotice=reached&&this.skillDistance<needed?'前进距离不足 · 返回上一标记，转向后用前进通过。':'';
      if(this.skillDistance<needed)return;
    }
    if(this.step==='approach'||this.step==='slalom'||this.step==='gate'||this.step==='corner'){
      if(!reached||(this.step==='gate'&&this.waypointIndex===1&&!this.gateCrossed))return;
      this.credit(1);
      if(this.step==='approach'&&this.waypointIndex===1)this.next('slalom','✓ 到达起点 · 依次穿过绕桩路标');
      else if(this.step==='slalom'&&this.waypointIndex===c.slalom.length-1)this.next('gate',`✓ 六柱绕行通过 · 前往 ${c.gateWidth.toFixed(2)} 米窄道`);
      else if(this.step==='gate'&&this.waypointIndex===c.gate.length-1)this.next('corner','✓ 窄道通过 · 绕过护墙，完成直角转弯');
      else if(this.step==='corner'&&this.waypointIndex===c.corner.length-1)this.next('side','✓ 直角弯通过 · 面向展厅，横移到侧移圈');
      else {this.waypointIndex++;this.travelled=this.skillDistance=this.progress=0;this.armed=false;this.notice='✓ 路标通过 · 继续驶向下一枚';}
    }else if(this.step==='side'){
      const lateral=facing&&Math.abs(s.z-target.z)<=.38&&dx>=Math.hypot(dx,dz)*.86;
      this.skillDistance=Math.max(0,this.skillDistance+(dx<0||lateral?dx:0));
      this.hold=reached&&settled&&facing&&this.skillDistance>=c.minimumSide?this.hold+dt:0;
      this.progress=Math.min(1,this.skillDistance/c.minimumSide)*.65+Math.min(1,this.hold/.55)*.35;
      this.skillNotice=reached&&this.skillDistance<c.minimumSide?'有效侧移不足 · 回到门后，面向展厅再横移。':'';
      if(this.hold>=.55){this.credit(1);this.next('park','✓ 侧移通过 · 从入口正向驶入停靠框');}
    }else if(this.step==='park'){
      if(this.waypointIndex===0){if(reached){this.waypointIndex=1;this.travelled=0;this.armed=this.gateCrossed=false;this.notice='✓ 入口通过 · 按箭头向前停入框内';}return;}
      const b=c.docking,r=DRIVE_CONFIG.radius,inside=s.x-r>=b.minX&&s.x+r<=b.maxX&&s.z-r>=b.minZ&&s.z+r<=b.maxZ;
      const forwardEnough=this.skillDistance>=.8;
      this.skillNotice=reached&&(!this.gateCrossed||!forwardEnough)?'请返回入口，按箭头向前驶入；横移入框不计。':'';
      this.hold=reached&&inside&&this.gateCrossed&&forwardEnough&&settled&&facing?this.hold+dt:0;
      this.progress=Math.min(1,this.hold/c.parkingHold);
      if(this.progress>=1){
        this.parkingError=remaining;this.breakdown.parking=Math.round(25-8*Math.min(1,remaining/target.radius));
        this.breakdown.heading=Math.round(15-5*Math.abs(this.headingError)/c.headingTolerance);
        this.result=Object.freeze({score:this.score,falls:s.falls,elapsed:s.seconds,parkingError:remaining,headingError:this.headingError,level:this.level});
        this.next('complete','驾考完成！绕柱、窄道、直角弯、侧移和精准停靠全部通过');this.progress=1;
      }
    }
  }
}
