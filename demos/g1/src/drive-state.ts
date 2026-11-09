import {DRIVE_CONFIG,DRIVE_MODES,passiveMode,type DriveCommand,type DriveObstacle,type DriveMode,type DriveSpeed} from './drive-config';
import {DRIVE_ACTIONS,validAction,actionInfo,type DriveActionId} from './drive-actions';
import {DriveDebugLab} from './drive-debug-lab';
import {DriveTutorial,type TutorialStep} from './drive-tutorial';
export type DriveStage=TutorialStep;
export type DriveGesture=DriveActionId;
export type DriveExperience='free'|'mission';
export const angleDifference=(a:number,b:number):number=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveState {
  readonly lab=new DriveDebugLab();
  readonly tutorial=new DriveTutorial();
  x=DRIVE_CONFIG.spawn.x;z=DRIVE_CONFIG.spawn.z;yaw=DRIVE_CONFIG.spawn.yaw;
  vx=0;vz=0;angular=0;speed=0;distance=0;seconds=0;
  get stage():DriveStage{return this.tutorial.step;}
  gesture:DriveGesture|null=null;
  running=false;paused=false;contact='';message='准备好了吗？接过手柄，成为 G1 的驾驶员。';
  score=0;stars=0;arriveHold=0;private touches=0;private contactBefore=false;
  mode:DriveMode='locomotion';selectedAction:DriveActionId='wave';needsNeutral=false;
  speedMode:DriveSpeed='slow';stepping=false;
  body:'upright'|'falling'|'fallen'|'recovering'='upright';bodyProgress=0;fallDuration=1.2;fallDirection=0;falls=0;
  fallCause:'mode'|'collision'='mode';
  private impactX=0;private impactZ=0;
  private recoil:{x:number;z:number;nx:number;nz:number}|null=null;
  private readonly obstacles:readonly DriveObstacle[];
  experience:DriveExperience;
  constructor(options:{obstacles?:readonly DriveObstacle[];experience?:DriveExperience}={}){this.obstacles=options.obstacles??DRIVE_CONFIG.obstacles;this.experience=options.experience??'mission';}
  setExperience(experience:DriveExperience):void{
    if(experience===this.experience)return;
    this.reset();this.experience=experience;
    this.suspend(experience==='mission'?'操作入门准备好了 · 按 A 开始，跟随六步提示亲自试一试。':'自由体验 · 按 A 开始，先试试移动与 LB / RB 组合键。');
  }
  get target():{x:number;z:number;radius:number}{return DRIVE_CONFIG.welcome;}
  get targetDistance():number{return Math.hypot(this.x-this.target.x,this.z-this.target.z);}
  get facingError():number {
    const point=DRIVE_CONFIG.visitor;
    return angleDifference(Math.atan2(point.x-this.x,point.z-this.z),this.yaw);
  }
  start():void {
    this.running=true;this.paused=false;
    if(passiveMode(this.mode)&&this.mode!=='debug'&&this.body==='upright')this.beginFall();
    this.message=this.mode==='locomotion'?(this.experience==='free'?'自由驾驶开始了 · 左杆移动，右杆转身；站稳后试试 RB + 彩色键。':'跟随下方入门提示操作；每完成一步，会自动点亮下一步。'):DRIVE_MODES.find(m=>m.id===this.mode)!.copy;
  }
  suspend(message='已暂停 · 点击继续后再操控'):void {this.paused=true;this.stop();this.message=message;}
  stop():void {this.vx=this.vz=this.angular=this.speed=0;}
  setMode(mode:DriveMode):void {
    if(!DRIVE_MODES.some(m=>m.id===mode)||(mode===this.mode&&!(this.body==='recovering'&&passiveMode(mode))))return;
    if(mode==='debug'&&!passiveMode(this.mode)){this.message='先切换阻尼或零力矩，再用下方「关节实验」卡片或对应组合键进入。';return;}
    if(this.mode==='debug'&&!['debug','damp','zero'].includes(mode)){this.message='调试由虚拟吊架支撑 · 先退出到阻尼，再起身恢复行走。';return;}
    if(this.body!=='upright'&&!passiveMode(mode)){this.message='模型已失去支撑 · 请先起身复位，不能直接切回行走。';return;}
    const vx=this.vx,vz=this.vz;
    this.stop();this.mode=mode;this.gesture=null;this.arriveHold=0;this.needsNeutral=true;
    this.stepping=false;
    if(mode==='debug'){
      this.lab.reset();this.body='recovering';this.bodyProgress=0;
    }else if(passiveMode(mode)&&this.running&&(this.body==='upright'||this.body==='recovering'))this.beginFall(vx,vz);
    this.message=DRIVE_MODES.find(m=>m.id===mode)!.copy;
  }
  private beginFall(vx=0,vz=0):void{
    this.fallCause='mode';
    this.body='falling';this.bodyProgress=0;this.fallDuration=this.mode==='zero'?.68:1.25;this.falls++;
    this.fallDirection=Math.hypot(vx,vz)>.04?Math.atan2(vx,vz)-this.yaw:0;
  }
  private collide():void{
    if(this.body!=='upright')return;
    const length=Math.hypot(this.impactX,this.impactZ)||1,nx=this.impactX/length,nz=this.impactZ/length;
    this.beginFall(nx,nz);this.fallCause='collision';this.fallDuration=.55;
    this.fallDirection=Math.atan2(nx,nz)-this.yaw;
    // Recoil into the free side before the shell tilts; recovery keeps this clearance.
    this.recoil={x:this.x,z:this.z,nx,nz};
    this.stop();this.gesture=null;this.stepping=false;this.needsNeutral=true;
    this.message=`碰到${this.contact}，失去平衡 · 等落地后起身，再松开摇杆继续。`;
  }
  recover():void {
    if(this.body!=='fallen'){this.message=this.body==='falling'?'等待模型落地后再起身。':'当前无需起身复位。';return;}
    this.stop();this.gesture=null;this.body='recovering';this.bodyProgress=0;this.stepping=false;
    this.message='起身复位中 · 收拢四肢、恢复支撑，完成后请松开摇杆。';
  }
  selectAction(action:DriveActionId):void {if(validAction(action)){this.selectedAction=action;if(!this.gesture&&this.body==='upright')this.message=`已选择${actionInfo(action).title} · 站稳后按 A 演示。`;}}
  reset():void {
    this.x=DRIVE_CONFIG.spawn.x;this.z=DRIVE_CONFIG.spawn.z;this.yaw=DRIVE_CONFIG.spawn.yaw;this.stop();
    this.distance=this.seconds=this.arriveHold=this.score=this.stars=this.touches=0;this.tutorial.reset();this.gesture=null;this.contact='';this.running=false;this.paused=false;this.contactBefore=false;
    this.message=this.experience==='free'?'自由体验准备好了 · 先试试移动与 LB / RB 组合键。':'新的操作入门准备好了。';
    this.mode='locomotion';this.selectedAction='wave';this.needsNeutral=false;
    this.lab.reset();
    this.body='upright';this.bodyProgress=0;this.falls=0;this.speedMode='slow';this.stepping=false;
    this.fallCause='mode';this.impactX=this.impactZ=0;this.recoil=null;
  }
  update(delta:number,command:DriveCommand):void {
    if(!Number.isFinite(delta)||delta<=0)return;
    this.updateState(delta,command);
    this.tutorial.update(Math.min(.1,delta),this);
    this.score=this.experience==='mission'?this.tutorial.score:0;this.stars=this.stage==='complete'?3:0;
  }
  private updateState(delta:number,command:DriveCommand):void {
    if(!Number.isFinite(delta)||delta<=0||![command.forward,command.strafe,command.turn,command.look].every(Number.isFinite))return;
    if(command.stop&&this.running){this.suspend('网页已暂停 · 松开 B，按 A 继续；松开按键与摇杆后再出发。');return;}
    if(command.mode){this.setMode(command.mode);return;}
    if(command.cycleMode){const modes:DriveMode[]=['locomotion','stand','performance'];this.setMode(modes[(modes.indexOf(this.mode)+1)%modes.length]);return;}
    if(command.actionSelect)this.selectAction(command.actionSelect);
    if(command.actionStep){const i=DRIVE_ACTIONS.findIndex(a=>a.id===this.selectedAction);this.selectAction(DRIVE_ACTIONS[(i+Math.sign(command.actionStep)+DRIVE_ACTIONS.length)%DRIVE_ACTIONS.length].id);}
    if(command.pause&&this.running){if(this.paused)this.start();else this.suspend();return;}
    if(command.toggleStand&&this.paused&&this.running){this.start();return;}
    if(!this.running||this.paused)return;
    if(command.recover)this.recover();
    if(command.speedMode)this.speedMode=command.speedMode;
    if(command.toggleStand)this.setMode(this.mode==='locomotion'?'stand':'locomotion');
    if(command.stepping&&this.body==='upright'&&!passiveMode(this.mode)){this.setMode('locomotion');this.stepping=true;this.message='持续踏步 · 双脚交替抬落；单击菜单键（≡）回到站立。';}
    if(command.diagnose&&this.mode!=='debug')this.message='请先从阻尼或零力矩进入调试实验。';
    if(this.body!=='upright'){
      this.stop();
      if(this.body==='falling'){
        this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,delta)/this.fallDuration);
        if(this.fallCause==='collision'&&this.recoil){const r=this.bodyProgress*(2-this.bodyProgress)*.18;this.x=this.recoil.x+this.recoil.nx*r;this.z=this.recoil.z+this.recoil.nz*r;}
        if(this.bodyProgress>=1){this.body='fallen';this.message=this.fallCause==='collision'?`碰撞倒地 · ${this.contact}。请起身复位，再恢复行走。`:'模型已倒地 · 用下方「起身复位」卡片或对应组合键恢复支撑。';}
      }
      else if(this.body==='recovering'){this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,delta)/2.1);if(this.bodyProgress>=1){this.body='upright';if(this.mode!=='debug')this.mode='stand';this.needsNeutral=true;this.message=this.mode==='debug'?'虚拟吊架已就绪 · 松开摇杆，开始关节实验。':'已站稳 · 松开按键后，用恢复行走卡片接管。';}}
      return;
    }
    if(this.needsNeutral){
      const centered=[command.forward,command.strafe,command.turn,command.look].every(v=>Math.abs(v)<.02)&&!command.wave&&!command.invite;
      if(centered)this.needsNeutral=false;else{this.message='模式已切换 · 先松开摇杆和动作键，再开始操作。';return;}
    }
    if(this.mode==='debug'){
      this.stop();this.gesture=null;
      if(command.diagnose||command.invite)this.lab.diagnose();
      this.lab.update(delta,command);this.message=this.lab.feedback;return;
    }
    const elapsed=Math.min(delta,.1);
    // Fixed small substeps keep obstacle handling and arrival dwell independent of refresh rate.
    const count=Math.max(1,Math.ceil(elapsed/(1/120))),dt=elapsed/count;
    this.contact='';
    for(let i=0;i<count;i++){this.integrate(dt,command);if(this.contact){this.collide();break;}}
    if(this.contact&&!this.contactBefore)this.touches++;
    this.contactBefore=Boolean(this.contact);
    if(this.body!=='upright')return;
    if(this.gesture)return;
    if(command.actionTrigger){this.selectAction(command.actionTrigger);this.beginGesture(command.actionTrigger);}
    else if(command.wave)this.beginGesture(this.selectedAction);else if(command.invite)this.beginGesture('invite');
  }
  private integrate(dt:number,command:DriveCommand):void {
    this.seconds+=dt;
    const norm=Math.max(1,Math.hypot(command.forward,command.strafe));
    const speed=this.speedMode==='fast'?DRIVE_CONFIG.fastSpeed:DRIVE_CONFIG.slowSpeed;
    const driving=this.mode==='locomotion'&&!this.gesture&&this.body==='upright';
    const forward=driving?command.forward/norm*speed:0,side=driving?command.strafe/norm*speed:0;
    const alpha=1-Math.exp(-dt/DRIVE_CONFIG.accelerationSeconds);
    this.angular+=(Math.max(-1,Math.min(1,command.turn))*DRIVE_CONFIG.turnSpeed*(driving?1:0)-this.angular)*alpha;
    this.yaw=angleDifference(this.yaw+this.angular*dt,0);
    const vx=Math.sin(this.yaw)*forward-Math.cos(this.yaw)*side;
    const vz=Math.cos(this.yaw)*forward+Math.sin(this.yaw)*side;
    this.vx+=(vx-this.vx)*alpha;this.vz+=(vz-this.vz)*alpha;
    const x=this.x,z=this.z;
    this.x=this.moveAxis(this.x+this.vx*dt,this.z,'x');
    this.z=this.moveAxis(this.x,this.z+this.vz*dt,'z');
    this.speed=Math.hypot(this.x-x,this.z-z)/dt;this.distance+=this.speed*dt;
    const settled=this.speed<.055&&Math.abs(this.angular)<.14;
    this.arriveHold=settled&&this.targetDistance<=this.target.radius?this.arriveHold+dt:0;
  }
  private moveAxis(x:number,z:number,axis:'x'|'z'):number {
    const {room,radius}=DRIVE_CONFIG,value=axis==='x'?x:z;
    let next=Math.max((axis==='x'?room.minX:room.minZ)+radius,Math.min((axis==='x'?room.maxX:room.maxZ)-radius,value));
    if(next!==value){this.contact='展厅墙面';this.impactX=axis==='x'?Math.sign(next-value):0;this.impactZ=axis==='z'?Math.sign(next-value):0;}
    for(const obstacle of this.obstacles){
      const px=axis==='x'?next:x,pz=axis==='z'?next:z;
      if(px>obstacle.x-radius&&px<obstacle.x+obstacle.width+radius&&pz>obstacle.z-radius&&pz<obstacle.z+obstacle.depth+radius){
        this.contact=obstacle.id;next=axis==='x'?this.x:this.z;
        this.impactX=axis==='x'?(this.x<obstacle.x+obstacle.width/2?-1:1):0;this.impactZ=axis==='z'?(this.z<obstacle.z+obstacle.depth/2?-1:1):0;
      }
    }
    return next;
  }
  private beginGesture(gesture:DriveGesture):void {
    if(passiveMode(this.mode)||this.body!=='upright'){this.message='当前没有站立支撑 · 先起身复位，再执行动作。';return;}
    if(gesture==='backflip'||gesture==='jump'){
      const {room}=DRIVE_CONFIG,clearance=.95;
      const nearWall=this.x<room.minX+clearance||this.x>room.maxX-clearance||this.z<room.minZ+clearance||this.z>room.maxZ-clearance;
      const nearObject=this.obstacles.some(o=>this.x>o.x-clearance&&this.x<o.x+o.width+clearance&&this.z>o.z-clearance&&this.z<o.z+o.depth+clearance);
      if(nearWall||nearObject){this.message='这里空间不足 · 请先走到空旷的展厅中央再做特技。';return;}
    }
    if(this.speed>.07||Math.abs(this.angular)>.2){this.message='先松开摇杆，站稳后再做动作。';return;}
    this.gesture=gesture;this.message=actionInfo(gesture).description;
  }
  finishGesture(gesture:DriveGesture):void {
    if(this.gesture!==gesture)return;
    this.tutorial.finishAction(gesture,this);
    this.gesture=null;
    this.score=this.experience==='mission'?this.tutorial.score:0;this.stars=this.stage==='complete'?3:0;
    if(this.stage==='complete')this.message='操作入门完成！你已经学会移动、切换模式、起身和表演。';
  }
}
