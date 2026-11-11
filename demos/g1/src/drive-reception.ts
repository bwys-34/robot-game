import {DRIVE_CONFIG,type DriveMode} from './drive-config';
import type {DriveActionId} from './drive-actions';

/** Metres / radians. Museum navigation exercise, not a real robot control policy. */
export const RECEPTION_CONFIG={
  route:[{x:1.25,z:-.5,radius:.32},{x:1.25,z:-1.95,radius:.32}],
  parking:{x:.55,z:-2.25,radius:.38},
  obstacle:{id:'接待展台',x:-.34,z:-1.4,width:.68,depth:.6},
  visitor:DRIVE_CONFIG.visitor,
  parkingHold:.9,facingHold:.7,headingTolerance:15*Math.PI/180,
  settledSpeed:.045,settledAngular:.12,
} as const;
export type ReceptionStep='route'|'park'|'face'|'greet'|'complete';
interface Observation {
  running:boolean;paused:boolean;experience:string;mode:DriveMode;body:string;
  x:number;z:number;yaw:number;distance:number;speed:number;angular:number;
  needsNeutral:boolean;gesture:DriveActionId|null;falls:number;seconds:number;
}
const difference=(a:number,b:number)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveReception {
  step:ReceptionStep='route';routeIndex=0;progress=0;hold=0;hints=0;elapsed=0;
  parkingError=Infinity;headingError=0;notice='';
  result:{falls:number;elapsed:number;hints:number}|null=null;
  breakdown={parking:0,facing:0,care:20,greeting:0,independent:10};
  private lastX=DRIVE_CONFIG.spawn.x;private lastZ=DRIVE_CONFIG.spawn.z;private lastDistance=0;
  private travelled=0;private noticeTime=0;private candidate:DriveActionId|null=null;
  get routeComplete():boolean{return this.routeIndex>=RECEPTION_CONFIG.route.length;}
  get target():{x:number;z:number;radius:number}{return this.step==='route'?RECEPTION_CONFIG.route[this.routeIndex]:this.step==='face'?{...RECEPTION_CONFIG.visitor,radius:.12}:RECEPTION_CONFIG.parking;}
  get score():number{return Object.values(this.breakdown).reduce((a,b)=>a+b,0);}
  hint():void{if(this.step!=='complete')this.hints++;}
  reset():void{
    this.step='route';this.routeIndex=this.progress=this.hold=this.hints=this.elapsed=this.travelled=this.noticeTime=0;
    this.lastX=DRIVE_CONFIG.spawn.x;this.lastZ=DRIVE_CONFIG.spawn.z;this.lastDistance=0;this.parkingError=Infinity;this.headingError=0;this.notice='';this.candidate=null;this.result=null;
    this.breakdown={parking:0,facing:0,care:20,greeting:0,independent:10};
  }
  private ready(s:Observation):boolean{return s.experience==='reception'&&s.running&&!s.paused&&s.body==='upright'&&!s.needsNeutral;}
  private settled(s:Observation):boolean{return s.speed<RECEPTION_CONFIG.settledSpeed&&Math.abs(s.angular)<RECEPTION_CONFIG.settledAngular;}
  private inside(s:Observation):boolean{return Math.hypot(s.x-RECEPTION_CONFIG.parking.x,s.z-RECEPTION_CONFIG.parking.z)<=RECEPTION_CONFIG.parking.radius;}
  private facing(s:Observation):boolean{return Math.abs(difference(Math.atan2(RECEPTION_CONFIG.visitor.x-s.x,RECEPTION_CONFIG.visitor.z-s.z),s.yaw))<=RECEPTION_CONFIG.headingTolerance;}
  private next(step:ReceptionStep,notice:string):void{this.step=step;this.hold=this.progress=this.travelled=0;this.notice=notice;this.noticeTime=2.3;this.candidate=null;}
  update(delta:number,s:Observation):void{
    const dt=Math.max(0,Math.min(.1,delta)),distance=Math.max(0,s.distance-this.lastDistance);
    const relocated=Math.hypot(s.x-this.lastX,s.z-this.lastZ)>distance+.015;
    this.lastX=s.x;this.lastZ=s.z;this.lastDistance=s.distance;
    this.headingError=difference(Math.atan2(RECEPTION_CONFIG.visitor.x-s.x,RECEPTION_CONFIG.visitor.z-s.z),s.yaw);
    if(s.experience!=='reception'||this.step==='complete')return;
    if(!s.running||s.paused){this.hold=this.progress=0;this.candidate=null;return;}
    this.elapsed=s.seconds;
    this.breakdown.care=Math.max(0,20-s.falls*8);this.breakdown.independent=Math.max(0,10-this.hints*2);
    this.noticeTime=Math.max(0,this.noticeTime-dt);if(!this.noticeTime)this.notice='';
    if(relocated){this.travelled=this.hold=this.progress=0;this.candidate=null;}
    const ready=this.ready(s),settled=this.settled(s),inside=this.inside(s);
    if(this.routeComplete&&['face','greet'].includes(this.step)&&(!inside||relocated))this.next('park','离开了接待区 · 回到圈内停稳，路线进度保留');
    else if(this.step==='greet'&&!this.facing(s))this.next('face','朝向偏离了游客 · 调整方向后继续');
    if(!ready){this.hold=this.progress=0;this.candidate=null;return;}
    if(this.candidate&&(s.gesture!==this.candidate||!inside||!settled||!this.facing(s)||s.mode!=='stand'))this.candidate=null;
    if(this.step==='route'||this.step==='park'){
      if(s.mode==='locomotion'&&!s.gesture&&!relocated)this.travelled+=Math.min(distance,.09);
      const target=this.target,remaining=Math.hypot(s.x-target.x,s.z-target.z);
      const reached=!relocated&&!s.gesture&&s.mode==='locomotion'&&remaining<=target.radius&&this.travelled>=.25;
      this.hold=reached&&settled?this.hold+dt:0;
      this.progress=this.step==='route'?reached?1:0:Math.min(1,this.hold/RECEPTION_CONFIG.parkingHold);
      if(this.progress>=1){
        if(this.step==='route'){
          this.routeIndex++;if(this.routeComplete)this.next('park','✓ 绕行完成！驶入游客面前的接待圈');
          else this.next('route','✓ 通过第一枚路标 · 沿展台右侧继续前进');
        }else{
          this.parkingError=remaining;this.breakdown.parking=Math.round(20-8*Math.min(1,remaining/target.radius));
          this.next('face','✓ 停车成功 · 原地转向游客');
        }
      }
    }else if(this.step==='face'){
      this.hold=inside&&settled&&!s.gesture&&this.facing(s)&&['locomotion','stand'].includes(s.mode)?this.hold+dt:0;
      this.progress=Math.min(1,this.hold/RECEPTION_CONFIG.facingHold);
      if(this.progress>=1){this.breakdown.facing=Math.round(20-6*Math.abs(this.headingError)/RECEPTION_CONFIG.headingTolerance);this.next('greet','✓ 游客看见你了 · 锁定站立，挥手或鞠躬');}
    }else if(this.step==='greet')this.progress=this.candidate?.6:0;
  }
  startAction(action:DriveActionId,s:Observation):void{
    this.candidate=this.step==='greet'&&this.ready(s)&&s.mode==='stand'&&this.inside(s)&&this.facing(s)&&this.settled(s)&&['wave','bow'].includes(action)?action:null;
  }
  finishAction(action:DriveActionId,s:Observation):void{
    if(this.candidate!==action||this.step!=='greet'||!this.ready(s)||s.mode!=='stand'||s.gesture!==action||!this.inside(s)||!this.facing(s)||!this.settled(s))return;
    this.result={falls:s.falls,elapsed:this.elapsed,hints:this.hints};
    this.breakdown.greeting=30;this.next('complete','接待成功！游客向你致意');this.progress=1;
  }
}
