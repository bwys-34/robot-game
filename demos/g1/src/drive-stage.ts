import type {DriveCommand,DriveMode,DriveObstacle} from './drive-config';

/** Virtual handling sequence only; locked standing is the user's chosen game rule. */
export const STAGE_CONFIG={
  center:{x:6.3,z:8.25,radius:.55},height:.32,width:4.7,depth:3.45,
  pickup:{x:6.3,z:5.30,radius:.34},approachRadius:.95,
  exit:{x:6.3,z:7.12,radius:.32},
  stepWidth:1.8,stepDepth:.36,steps:2,settleSeconds:.65,carrySeconds:3.4,
} as const;
const C=STAGE_CONFIG;
export const STAGE_OBSTACLES:readonly DriveObstacle[]=[
  {id:'舞台台阶',x:C.center.x-C.width/2,z:C.center.z-C.depth/2,width:C.width,depth:C.depth},
  {id:'舞台台阶',x:C.center.x-C.stepWidth/2,z:C.center.z-C.depth/2-C.stepDepth*C.steps,width:C.stepWidth,depth:C.stepDepth*C.steps},
];
interface Carrier {x:number;z:number;yaw:number;mode:DriveMode;body:string;running:boolean;paused:boolean;needsNeutral:boolean;gesture:string|null;speed:number;angular:number;hoist:{locked:boolean};}
const ease=(t:number)=>t*t*(3-2*t);
export class DriveStageTransport {
  phase:'ground'|'boarding'|'onstage'|'unboarding'='ground';
  progress=0;hold=0;restored=false;
  private from={x:0,z:0,yaw:0};
  get carrying():boolean{return this.phase==='boarding'||this.phase==='unboarding';}
  get onstage():boolean{return this.phase==='onstage';}
  atTransferPoint(s:Pick<Carrier,'x'|'z'>):boolean{
    const p=this.onstage?C.exit:C.pickup;return Math.hypot(s.x-p.x,s.z-p.z)<=p.radius;
  }
  get height():number{
    if(this.phase==='onstage')return C.height;
    if(!this.carrying)return 0;
    const t=this.progress,u=ease(Math.max(0,Math.min(1,(t-.18)/.64)));
    return (this.phase==='boarding'?u:1-u)*C.height+.22*Math.sin(Math.PI*t);
  }
  nearby(s:Pick<Carrier,'x'|'z'>):boolean{return this.onstage||this.carrying||Math.hypot(s.x-C.pickup.x,s.z-C.pickup.z)<C.approachRadius;}
  reset():void{this.phase='ground';this.progress=this.hold=0;this.restored=false;}
  update(dt:number,s:Carrier):boolean{
    if(!s.running||s.paused)return false;
    if(this.carrying){
      this.progress=Math.min(1,this.progress+Math.min(.1,dt)/C.carrySeconds);
      const u=ease(Math.max(0,Math.min(1,(this.progress-.18)/.64))),to=this.phase==='boarding'?C.center:C.pickup;
      s.x=this.from.x+(to.x-this.from.x)*u;s.z=this.from.z+(to.z-this.from.z)*u;
      const delta=Math.atan2(Math.sin(Math.PI-this.from.yaw),Math.cos(Math.PI-this.from.yaw));s.yaw=this.from.yaw+delta*ease(this.progress);
      if(this.progress===1){this.phase=this.phase==='boarding'?'onstage':'ground';this.hold=0;this.restored=false;return true;}
      return false;
    }
    const atPickup=this.atTransferPoint(s);
    this.hold=atPickup&&s.mode==='stand'&&s.body==='upright'&&!s.gesture&&!s.needsNeutral&&s.speed<.035&&Math.abs(s.angular)<.08?Math.min(C.settleSeconds,this.hold+dt):0;
    if(this.onstage&&['locomotion','performance'].includes(s.mode))this.restored=true;
    return false;
  }
  request(s:Carrier,c:DriveCommand):string{
    if(this.carrying)return '人工搬运中 · 请等待落脚，暂时不能切模式或驾驶。';
    if(s.mode!=='stand')return '先切换锁定站立，再确认人工搬运。';
    if(s.body!=='upright'||s.hoist.locked||s.gesture||s.needsNeutral)return '先恢复站姿、结束动作并解除吊挂，再搬运。';
    if([c.forward,c.strafe,c.turn].some(v=>Math.abs(v)>.02))return '先松开摇杆，停稳后再确认人工搬运。';
    if(this.hold<C.settleSeconds)return this.onstage?'走到台阶旁的下台光圈，锁定站立并停稳后可搬下台。':'停入台前搬运圈，锁定站立并停稳后再按 A。';
    this.from={x:s.x,z:s.z,yaw:s.yaw};this.phase=this.onstage?'unboarding':'boarding';this.progress=0;this.restored=false;
    return '工作人员正在搬运 G1 · 落脚后切回行走或动作表演。';
  }
}
