import {DRIVE_CONFIG,DRIVE_MODES,passiveMode,type DriveCommand,type DriveObstacle,type DriveMode,type DriveSpeed} from './drive-config';
import {DRIVE_ACTIONS,validAction,actionInfo,type DriveActionId} from './drive-actions';
export type DriveStage='arrival'|'greeting'|'guide'|'complete';
export type DriveGesture=DriveActionId;
export type DriveExperience='free'|'mission';
export const angleDifference=(a:number,b:number):number=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveState {
  x=DRIVE_CONFIG.spawn.x;z=DRIVE_CONFIG.spawn.z;yaw=DRIVE_CONFIG.spawn.yaw;
  vx=0;vz=0;angular=0;speed=0;distance=0;seconds=0;
  stage:DriveStage='arrival';gesture:DriveGesture|null=null;
  running=false;paused=false;contact='';message='准备好了吗？接过手柄，成为 G1 的驾驶员。';
  score=0;stars=0;arriveHold=0;private touches=0;private contactBefore=false;
  mode:DriveMode='locomotion';selectedAction:DriveActionId='wave';needsNeutral=false;
  speedMode:DriveSpeed='slow';stepping=false;
  body:'upright'|'falling'|'fallen'|'recovering'='upright';bodyProgress=0;fallDuration=1.2;fallDirection=0;falls=0;
  private readonly obstacles:readonly DriveObstacle[];
  experience:DriveExperience;
  constructor(options:{obstacles?:readonly DriveObstacle[];experience?:DriveExperience}={}){this.obstacles=options.obstacles??DRIVE_CONFIG.obstacles;this.experience=options.experience??'mission';}
  setExperience(experience:DriveExperience):void{
    if(experience===this.experience)return;
    this.reset();this.experience=experience;
    this.suspend(experience==='mission'?'接待小任务准备好了 · 按 A 开始，再走向金色圆圈。':'自由体验 · 按 A 开始，先试试移动与 LB / RB 组合键。');
  }
  get target():{x:number;z:number;radius:number}{return this.stage==='guide'||this.stage==='complete'?DRIVE_CONFIG.destination:DRIVE_CONFIG.welcome;}
  get targetDistance():number{return Math.hypot(this.x-this.target.x,this.z-this.target.z);}
  get facingError():number {
    const point=this.stage==='guide'||this.stage==='complete'?DRIVE_CONFIG.exhibit:DRIVE_CONFIG.visitor;
    return angleDifference(Math.atan2(point.x-this.x,point.z-this.z),this.yaw);
  }
  start():void {
    this.running=true;this.paused=false;
    if(passiveMode(this.mode)&&this.body==='upright')this.beginFall();
    this.message=this.mode==='locomotion'?(this.experience==='free'?'自由驾驶开始了 · 左杆移动，右杆转身；站稳后试试 RB + 彩色键。':{arrival:'轻推左摇杆，走向地面亮起的迎宾点。',greeting:'面向前方游客，选择挥手招呼，站稳后按 A。',guide:'走向右侧金色圆圈，朝向展品，按 X 邀请游客。',complete:'任务完成了，也可以继续自由驾驶。'}[this.stage]):DRIVE_MODES.find(m=>m.id===this.mode)!.copy;
  }
  suspend(message='已暂停 · 点击继续后再操控'):void {this.paused=true;this.stop();this.message=message;}
  stop():void {this.vx=this.vz=this.angular=this.speed=0;}
  setMode(mode:DriveMode):void {
    if(!DRIVE_MODES.some(m=>m.id===mode)||(mode===this.mode&&!(this.body==='recovering'&&passiveMode(mode))))return;
    if(mode==='debug'&&!passiveMode(this.mode)){this.message='先进入阻尼或零力矩，再按住 LT + RT 进入调试示意。';return;}
    if(this.body!=='upright'&&!passiveMode(mode)){this.message='模型已失去支撑 · 请先起身复位，不能直接切回行走。';return;}
    const vx=this.vx,vz=this.vz;
    this.stop();this.mode=mode;this.gesture=null;this.arriveHold=0;this.needsNeutral=true;
    this.stepping=false;
    if(passiveMode(mode)&&this.running&&(this.body==='upright'||this.body==='recovering'))this.beginFall(vx,vz);
    this.message=DRIVE_MODES.find(m=>m.id===mode)!.copy;
  }
  private beginFall(vx=0,vz=0):void{
    this.body='falling';this.bodyProgress=0;this.fallDuration=this.mode==='zero'?.68:1.25;this.falls++;
    this.fallDirection=Math.hypot(vx,vz)>.04?Math.atan2(vx,vz)-this.yaw:0;
  }
  recover():void {
    if(this.body!=='fallen'){this.message=this.body==='falling'?'等待模型落地后再起身。':'当前无需起身复位。';return;}
    this.stop();this.gesture=null;this.body='recovering';this.bodyProgress=0;this.stepping=false;
    this.message='起身复位中 · 收拢四肢、恢复支撑，完成后请松开摇杆。';
  }
  selectAction(action:DriveActionId):void {if(validAction(action)){this.selectedAction=action;if(!this.gesture&&this.body==='upright')this.message=`已选择${actionInfo(action).title} · 站稳后按 A 演示。`;}}
  reset():void {
    this.x=DRIVE_CONFIG.spawn.x;this.z=DRIVE_CONFIG.spawn.z;this.yaw=DRIVE_CONFIG.spawn.yaw;this.stop();
    this.distance=this.seconds=this.arriveHold=this.score=this.stars=this.touches=0;this.stage='arrival';this.gesture=null;this.contact='';this.running=false;this.paused=false;this.contactBefore=false;
    this.message=this.experience==='free'?'自由体验准备好了 · 先试试移动与 LB / RB 组合键。':'新的接待任务准备好了。';
    this.mode='locomotion';this.selectedAction='wave';this.needsNeutral=false;
    this.body='upright';this.bodyProgress=0;this.falls=0;this.speedMode='slow';this.stepping=false;
  }
  update(delta:number,command:DriveCommand):void {
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
    if(command.diagnose)this.message=this.mode==='debug'?'调试状态已确认 · 网页不驱动实机，起身复位后继续。':'请先从阻尼或零力矩进入调试示意。';
    if(this.body!=='upright'){
      this.stop();
      if(this.body==='falling'){this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,delta)/this.fallDuration);if(this.bodyProgress>=1){this.body='fallen';this.message='模型已倒地 · 按住 LB 再按 X，或点击「起身复位」。';}}
      else if(this.body==='recovering'){this.bodyProgress=Math.min(1,this.bodyProgress+Math.min(.1,delta)/2.1);if(this.bodyProgress>=1){this.body='upright';this.mode='stand';this.needsNeutral=true;this.message='已站稳 · 松开按键后，用 LB + A 恢复行走。';}}
      return;
    }
    if(this.needsNeutral){
      const centered=[command.forward,command.strafe,command.turn,command.look].every(v=>Math.abs(v)<.02)&&!command.wave&&!command.invite;
      if(centered)this.needsNeutral=false;else{this.message='模式已切换 · 先松开摇杆和动作键，再开始操作。';return;}
    }
    const elapsed=Math.min(delta,.1);
    // Fixed small substeps keep obstacle handling and arrival dwell independent of refresh rate.
    const count=Math.max(1,Math.ceil(elapsed/(1/120))),dt=elapsed/count;
    this.contact='';
    for(let i=0;i<count;i++)this.integrate(dt,command);
    if(this.contact&&!this.contactBefore)this.touches++;
    this.contactBefore=Boolean(this.contact);
    if(this.contact)this.message=`靠近${this.contact}了 · 试试侧移，或向后退一点。`;
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
    if(this.experience==='mission'&&this.stage==='arrival'&&this.mode==='locomotion'&&this.arriveHold>=.5){this.stage='greeting';this.score=30;this.selectedAction='wave';this.message='到站！面向前方游客，按 A 挥手打个招呼。';}
  }
  private moveAxis(x:number,z:number,axis:'x'|'z'):number {
    const {room,radius}=DRIVE_CONFIG,value=axis==='x'?x:z;
    let next=Math.max((axis==='x'?room.minX:room.minZ)+radius,Math.min((axis==='x'?room.maxX:room.maxZ)-radius,value));
    if(next!==value)this.contact='体验区边界';
    for(const obstacle of this.obstacles){
      const px=axis==='x'?next:x,pz=axis==='z'?next:z;
      if(px>obstacle.x-radius&&px<obstacle.x+obstacle.width+radius&&pz>obstacle.z-radius&&pz<obstacle.z+obstacle.depth+radius){
        this.contact=obstacle.id;next=axis==='x'?this.x:this.z;
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
    if(this.experience==='mission'&&((this.stage==='greeting'&&gesture==='wave')||(this.stage==='guide'&&gesture==='invite'))){
      if(this.targetDistance>this.target.radius){this.message='先走进亮起的目标区域，再和游客互动。';return;}
      if(Math.abs(this.facingError)>Math.PI/5){this.message='转向亮起的游客或展台，再按动作键。';return;}
      if(this.arriveHold<.35){this.message='再站稳一下，就能完成接待动作。';return;}
    }
    this.gesture=gesture;this.message=actionInfo(gesture).description;
  }
  finishGesture(gesture:DriveGesture):void {
    if(this.gesture!==gesture)return;
    this.gesture=null;
    if(this.experience!=='mission')return;
    if(this.stage==='greeting'&&gesture==='wave'&&this.targetDistance<=this.target.radius&&Math.abs(this.facingError)<=Math.PI/5){
      this.stage='guide';this.score=60;this.arriveHold=0;this.message='招呼打好了！走向右侧展台，朝向展品，按 X 邀请游客。';
    }else if(this.stage==='guide'&&gesture==='invite'&&this.targetDistance<=this.target.radius&&Math.abs(this.facingError)<=Math.PI/5){
      this.stage='complete';this.score=90+Math.max(0,10-this.touches*2);this.stars=this.score>=98?3:this.score>=92?2:1;
      this.message='接待成功！你让移动、转向和手臂动作配合起来了。';
    }
  }
}
