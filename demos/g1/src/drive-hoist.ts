import type {DriveCommand,DriveMode,DriveObstacle} from './drive-config';

/** Authored exhibition support, not a rigid-body/rope simulation or hardware procedure. */
export const HOIST_CONFIG={
  x:-1.25,z:-1.5,radius:.34,validRadius:.48,
  settleSeconds:.8,attachSeconds:1.15,releaseSeconds:.75,standingSeconds:.5,lift:.055,
  maxSpeed:.035,maxAngular:.08,
  posts:[
    {id:'吊架左立柱',x:-2.08,z:-1.85,width:.10,depth:.10},
    {id:'吊架右立柱',x:-.52,z:-1.85,width:.10,depth:.10},
  ] as readonly DriveObstacle[],
};
interface HoistRobot {x:number;z:number;speed:number;angular:number;body:string;mode:DriveMode;gesture:unknown;running:boolean;paused:boolean;}
export type HoistPhase='detached'|'attaching'|'supported'|'releasing';
export type HoistEvent='attached'|'released'|'lost'|null;
const smooth=(t:number)=>t*t*(3-2*t);
export class DriveHoist {
  phase:HoistPhase='detached';progress=0;hold=0;standing=0;distance=Infinity;
  readonly observed=new Set<'damp'|'zero'>();
  completed=false;
  get locked():boolean{return this.phase!=='detached';}
  get supported():boolean{return this.phase==='supported'||this.phase==='releasing';}
  get ready():boolean{return this.hold>=HOIST_CONFIG.settleSeconds;}
  get lift():number{return HOIST_CONFIG.lift*(this.phase==='supported'?1:this.phase==='attaching'?smooth(this.progress):this.phase==='releasing'?1-smooth(this.progress):0);}
  reset():void {this.phase='detached';this.progress=this.hold=this.standing=this.observeTime=0;this.observing=null;this.distance=Infinity;this.observed.clear();this.completed=false;}
  update(delta:number,state:HoistRobot,command:DriveCommand):HoistEvent {
    this.distance=Math.hypot(state.x-HOIST_CONFIG.x,state.z-HOIST_CONFIG.z);
    if(!state.running||state.paused){this.hold=0;return null;}
    const dt=Math.max(0,Math.min(.1,delta));
    if(this.locked&&(this.distance>HOIST_CONFIG.validRadius||state.body!=='upright')){
      this.phase='detached';this.progress=this.hold=this.standing=0;return 'lost';
    }
    if(this.phase==='attaching'||this.phase==='releasing'){
      const releasing=this.phase==='releasing';
      this.progress=Math.min(1,this.progress+dt/(releasing?HOIST_CONFIG.releaseSeconds:HOIST_CONFIG.attachSeconds));
      if(this.progress>=1){
        this.phase=releasing?'detached':'supported';this.progress=0;this.hold=this.standing=0;
        if(releasing){this.completed=this.observed.size===2;return 'released';}return 'attached';
      }
      return null;
    }
    if(this.phase==='supported'){
      this.standing=state.mode==='stand'?this.standing+dt:0;
      // A deliberate observation lasts longer than one mode-button tap.
      if(state.mode==='damp'||state.mode==='zero'){
        if(this.observing===state.mode)this.observeTime+=dt;else{this.observing=state.mode;this.observeTime=dt;}
        if(this.observeTime>=.6)this.observed.add(state.mode);
      }else {this.observing=null;this.observeTime=0;}
      return null;
    }
    const still=[command.forward,command.strafe,command.turn].every(v=>Math.abs(v)<.03);
    const active=state.mode==='locomotion'||state.mode==='stand';
    const ready=this.distance<=HOIST_CONFIG.radius&&state.speed<HOIST_CONFIG.maxSpeed&&Math.abs(state.angular)<HOIST_CONFIG.maxAngular&&still&&active&&state.body==='upright'&&!state.gesture;
    this.hold=ready?Math.min(HOIST_CONFIG.settleSeconds,this.hold+dt):0;return null;
  }
  private observing:'damp'|'zero'|null=null;private observeTime=0;
  request(state:HoistRobot):{accepted:boolean;message:string}{
    if(!state.running||state.paused)return {accepted:false,message:'先开始 / 继续体验，再操作吊架。'};
    if(this.phase==='attaching'||this.phase==='releasing')return {accepted:false,message:'吊带正在调整，请等待动作完成。'};
    if(this.phase==='supported'){
      if(state.mode!=='stand'||this.standing<HOIST_CONFIG.standingSeconds)return {accepted:false,message:'先恢复锁定站立，等姿势稳定后再解挂。'};
      this.phase='releasing';this.progress=0;return {accepted:true,message:'缓慢落脚 · 双脚接地后解开吊带，再恢复行走。'};
    }
    if(!this.ready||this.distance>HOIST_CONFIG.radius||state.speed>=HOIST_CONFIG.maxSpeed||Math.abs(state.angular)>=HOIST_CONFIG.maxAngular||state.body!=='upright'||state.gesture||!['locomotion','stand'].includes(state.mode))return {accepted:false,message:'驶入 H 圈、松开摇杆停稳，提示就绪后按 A 确认挂接。'};
    this.phase='attaching';this.progress=0;this.observed.clear();this.completed=false;
    return {accepted:true,message:'连接双吊带并缓慢收紧 · 完成挂接后才能提供支撑。'};
  }
}
