import {DRIVE_CONFIG,DRIVE_COURT_OBSTACLES,type DriveMode} from './drive-config';
import type {DriveActionId} from './drive-actions';

const [leftGatePost,rightGatePost]=DRIVE_COURT_OBSTACLES.filter(o=>o.id==='考场门柱').sort((a,b)=>a.x-b.x);
/** Authored museum driving exercise. Coordinates are metres, angles radians. */
export const COURSE_CONFIG={
  entry:{x:0,z:3.65,radius:.32},
  approach:{x:-1.7,z:4.1,radius:.32},
  slalom:[{x:-2.2,z:5.15,radius:.3},{x:-2.2,z:6.1,radius:.12},{x:-.35,z:6.1,radius:.3},{x:-.35,z:7.2,radius:.12},{x:-2.2,z:7.35,radius:.3}],
  gate:[{x:-1.3,z:8.1,radius:.25},{x:-1.3,z:9.2,radius:.25}],
  gatePassage:{z:leftGatePost.z+leftGatePost.depth/2,minX:leftGatePost.x+leftGatePost.width+DRIVE_CONFIG.radius,maxX:rightGatePost.x-DRIVE_CONFIG.radius},
  side:{x:0,z:9.2,radius:.24},sideHeading:Math.PI,minimumSide:.7,
  reverse:{x:.9,z:9.2,radius:.3},parking:{x:.9,z:10.3,radius:.36},heading:Math.PI,
  headingTolerance:15*Math.PI/180,settledSpeed:.045,settledAngular:.12,
  stagingHold:.6,parkingHold:1,minimumReverse:.45,
} as const;
export const COURSE_LEVELS=['practice','exam','advanced'] as const;
export type CourseLevel=typeof COURSE_LEVELS[number];
const advanced={...COURSE_CONFIG,approach:{x:-.8,z:4.25,radius:.32},reverse:{x:-.82,z:9.85,radius:.30},parking:{x:.55,z:9.85,radius:.31},heading:-Math.PI/2};
export type CourseStep='approach'|'slalom'|'gate'|'side'|'reverse'|'park'|'complete';
interface Observation {
  running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;
  x:number;z:number;yaw:number;distance:number;speed:number;angular:number;
  needsNeutral:boolean;gesture:DriveActionId|null;falls:number;seconds:number;
}
const steps:CourseStep[]=['approach','slalom','gate','side','reverse','park','complete'];
const difference=(a:number,b:number)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveCourse {
  step:CourseStep='approach';waypointIndex=0;progress=0;hold=0;elapsed=0;headingError=0;reverseDistance=0;
  parkingError=Infinity;notice='';
  level:CourseLevel='practice';
  skillNotice='';skillDistance=0;
  result:Readonly<{score:number;falls:number;elapsed:number;parkingError:number;headingError:number;level:CourseLevel}>|null=null;
  breakdown={route:0,parking:0,heading:0,care:20};
  private lastX=DRIVE_CONFIG.spawn.x;private lastZ=DRIVE_CONFIG.spawn.z;private lastDistance=0;
  private travelled=0;private armed=false;private passed=0;private gateCrossed=false;
  get index():number{return steps.indexOf(this.step);}
  get layout(){return this.level==='advanced'?advanced:COURSE_CONFIG;}
  get requiredHeading():number{return this.step==='side'?this.layout.sideHeading:this.layout.heading;}
  get headingCue():string{return this.requiredHeading===Math.PI?'面向展厅':'面向左侧考场（看车位前方箭头）';}
  get target():{x:number;z:number;radius:number}{
    const c=this.layout;
    return this.step==='approach'?(this.waypointIndex===0?c.entry:c.approach):this.step==='slalom'?c.slalom[this.waypointIndex]:this.step==='gate'?c.gate[this.waypointIndex]:this.step==='side'?c.side:this.step==='reverse'?c.reverse:c.parking;
  }
  get score():number{return this.result?.score??Object.values(this.breakdown).reduce((a,b)=>a+b,0);}
  reset():void{
    this.step='approach';this.waypointIndex=this.progress=this.hold=this.elapsed=this.headingError=this.reverseDistance=this.travelled=this.passed=0;
    this.lastX=DRIVE_CONFIG.spawn.x;this.lastZ=DRIVE_CONFIG.spawn.z;this.lastDistance=0;this.armed=this.gateCrossed=false;this.parkingError=Infinity;this.notice='';this.result=null;
    this.breakdown={route:0,parking:0,heading:0,care:20};this.skillDistance=0;this.skillNotice='';
  }
  suspend():void{if(this.step!=='complete')this.hold=this.progress=0;}
  private next(step:CourseStep,notice:string):void{this.step=step;this.waypointIndex=0;this.hold=this.progress=this.travelled=this.skillDistance=0;this.armed=this.gateCrossed=false;this.notice=notice;this.skillNotice='';}
  private credit(n:number):void{this.breakdown.route=Math.round((this.passed+=n)/(3+COURSE_CONFIG.slalom.length+COURSE_CONFIG.gate.length)*40);}
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
    if(relocated){this.travelled=this.reverseDistance=this.skillDistance=0;this.armed=false;this.retryGate();this.suspend();return;}
    if(!s.running||s.paused){if(distance>.001){this.travelled=this.reverseDistance=this.skillDistance=0;this.armed=false;this.retryGate();}this.suspend();return;}
    this.elapsed=s.seconds;this.breakdown.care=Math.max(0,20-8*s.falls);
    const driving=s.body==='upright'&&!s.needsNeutral&&s.mode==='locomotion'&&!s.gesture;
    if(!driving){if(distance>.001){this.travelled=this.reverseDistance=this.skillDistance=0;this.armed=false;this.retryGate();}this.suspend();return;}
    if(this.step==='gate'&&this.waypointIndex===1){
      const passage=COURSE_CONFIG.gatePassage;
      if(previousZ<passage.z&&s.z>=passage.z){
        const crossingX=previousX+dx*(passage.z-previousZ)/dz;
        if(crossingX<passage.minX||crossingX>passage.maxX){this.retryGate();return;}
        this.gateCrossed=true;
      }else if(previousZ>=passage.z&&s.z<passage.z)this.gateCrossed=false;
    }
    const target=this.target,remaining=Math.hypot(s.x-target.x,s.z-target.z);
    if(remaining>target.radius+.06)this.armed=true;
    this.travelled+=Math.max(0,distance);
    const settled=s.speed<COURSE_CONFIG.settledSpeed&&Math.abs(s.angular)<COURSE_CONFIG.settledAngular;
    const facing=Math.abs(this.headingError)<=COURSE_CONFIG.headingTolerance;
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
    if(this.step==='approach'||this.step==='slalom'||this.step==='gate'){
      if(!reached||(this.step==='gate'&&this.waypointIndex===1&&!this.gateCrossed))return;
      this.credit(1);
      if(this.step==='approach'&&this.waypointIndex===1)this.next('slalom','✓ 到达起点 · 依次穿过绕桩路标');
      else if(this.step==='slalom'&&this.waypointIndex===COURSE_CONFIG.slalom.length-1)this.next('gate','✓ 绕桩通过 · 对准门口，慢速穿过窄门');
      else if(this.step==='gate'&&this.waypointIndex===COURSE_CONFIG.gate.length-1)this.next('side','✓ 窄门通过 · 面向展厅，横移到侧移圈');
      else {this.waypointIndex++;this.travelled=this.skillDistance=this.progress=0;this.armed=false;this.notice='✓ 路标通过 · 继续驶向下一枚';}
    }else if(this.step==='side'){
      const lateral=facing&&Math.abs(s.z-target.z)<=.38&&dx>=Math.hypot(dx,dz)*.86;
      this.skillDistance=Math.max(0,this.skillDistance+(dx<0||lateral?dx:0));
      this.hold=reached&&settled&&facing&&this.skillDistance>=c.minimumSide?this.hold+dt:0;
      this.progress=Math.min(1,this.skillDistance/c.minimumSide)*.65+Math.min(1,this.hold/.55)*.35;
      this.skillNotice=reached&&this.skillDistance<c.minimumSide?'有效侧移不足 · 回到门后，面向展厅再横移。':'';
      if(this.hold>=.55){this.credit(1);this.next('reverse','✓ 侧移通过 · 到倒车准备圈');}
    }else if(this.step==='reverse'){
      this.hold=reached&&settled&&facing?this.hold+dt:0;this.progress=Math.min(1,this.hold/COURSE_CONFIG.stagingHold);
      if(this.progress>=1){this.reverseDistance=0;this.next('park','✓ 倒车准备就绪 · 保持朝向，向后倒入车位');}
    }else if(this.step==='park'){
      // Project actual movement onto the robot's backward axis; forward travel cancels it.
      if(facing)this.reverseDistance=Math.max(0,this.reverseDistance-dx*Math.sin(s.yaw)-dz*Math.cos(s.yaw));
      this.hold=reached&&settled&&facing&&this.reverseDistance>=COURSE_CONFIG.minimumReverse?this.hold+dt:0;
      this.progress=Math.min(1,this.hold/COURSE_CONFIG.parkingHold);
      if(this.progress>=1){
        this.parkingError=remaining;this.breakdown.parking=Math.round(25-8*Math.min(1,remaining/target.radius));
        this.breakdown.heading=Math.round(15-5*Math.abs(this.headingError)/COURSE_CONFIG.headingTolerance);
        this.result=Object.freeze({score:this.score,falls:s.falls,elapsed:s.seconds,parkingError:remaining,headingError:this.headingError,level:this.level});
        this.next('complete','驾考完成！绕桩、穿门、倒车入库全部通过');this.progress=1;
      }
    }
  }
}
