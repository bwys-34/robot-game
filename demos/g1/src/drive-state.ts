import {DRIVE_CONFIG,DRIVE_MODES,passiveMode,type DriveCommand,type DriveObstacle,type DriveMode,type DriveSpeed} from './drive-config';
import {DRIVE_ACTIONS,validAction,actionInfo,driveActionFrames,type DriveActionId} from './drive-actions';
import {DriveDebugLab} from './drive-debug-lab';
import {DriveTutorial,type TutorialStep} from './drive-tutorial';
import {DriveHoist,HOIST_CONFIG} from './drive-hoist';
import {DriveReception,RECEPTION_CONFIG} from './drive-reception';
import {DriveCourse} from './drive-course';
import {DriveShow} from './drive-show';
export type DriveStage=TutorialStep;
export type DriveGesture=DriveActionId;
export type DriveExperience='free'|'mission'|'reception'|'course'|'show';
export interface DriveImpact {readonly x:number;readonly z:number;readonly obstacle:string;readonly step:string;}
export const angleDifference=(a:number,b:number):number=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export class DriveState {
  readonly lab=new DriveDebugLab();
  readonly tutorial=new DriveTutorial();
  readonly hoist=new DriveHoist();
  readonly reception=new DriveReception();
  readonly course=new DriveCourse();
  readonly show=new DriveShow();
  hoistConsole=false;
  debugTab:'joints'|'bindings'='joints';
  debugPreview:DriveActionId|null=null;
  previewRevision=0;
  private previewSeconds=0;
  get hoistAvailable():boolean{return this.experience==='free'||this.experience==='show';}
  get hoistContext():boolean{return this.hoistAvailable&&(this.hoistConsole||this.hoist.locked||(this.hoist.nearby&&(this.experience!=='show'||this.show.index<3)));}
  showHoist(show:boolean):void {this.hoistConsole=show&&this.hoistAvailable;}
  previewDance(action:DriveActionId):void {
    if(!validAction(action)||this.mode!=='debug'||!this.hoist.supported||!this.running||this.paused||this.body!=='upright'||this.needsNeutral)return;
    this.debugPreview=action;this.previewRevision++;this.previewSeconds=driveActionFrames(action).reduce((sum,f)=>sum+f.duration,0);
    this.message='吊挂上肢预览 · 完整全身动作请保存后站稳、解挂，再表演。';
  }
  stopPreview():void {this.debugPreview=null;this.previewSeconds=0;}
  saveShowProgram(actions:readonly unknown[]):boolean {
    const saved=this.show.saveProgram(actions,this);
    if(saved){this.stopPreview();this.message='三段舞台节目已确认 · 恢复站立并解挂，再沿路标登台。';this.updateScore();}
    return saved;
  }
  x=DRIVE_CONFIG.spawn.x;z=DRIVE_CONFIG.spawn.z;yaw=DRIVE_CONFIG.spawn.yaw;
  vx=0;vz=0;angular=0;speed=0;distance=0;seconds=0;
  impactCount=0;
  readonly impacts:DriveImpact[]=[];
  get roundComplete():boolean {
    switch(this.experience){
      case 'mission':return this.stage==='complete';
      case 'course':return this.course.step==='complete';
      case 'show':return this.show.step==='complete';
      case 'reception':return this.reception.step==='complete';
      default:return false;
    }
  }
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
  private readonly hoistObstacles:readonly DriveObstacle[];
  private readonly receptionObstacles:readonly DriveObstacle[];
  private get activeObstacles():readonly DriveObstacle[]{return this.hoistAvailable?this.hoistObstacles:this.experience==='reception'?this.receptionObstacles:this.obstacles;}
  experience:DriveExperience;
  constructor(options:{obstacles?:readonly DriveObstacle[];experience?:DriveExperience}={}){this.obstacles=options.obstacles??DRIVE_CONFIG.obstacles;this.hoistObstacles=[...this.obstacles,...HOIST_CONFIG.posts];this.receptionObstacles=[...this.obstacles,RECEPTION_CONFIG.obstacle];this.experience=options.experience??'mission';}
  setExperience(experience:DriveExperience):void{
    if(experience===this.experience)return;
    this.reset();this.experience=experience;
    this.suspend(experience==='course'?'驾考场准备好了 · 按 A 开始，沿路标前往室外起点。':experience==='show'?'舞台挑战准备好了 · 按 A 开始，先到实验室挂接吊带。':experience==='reception'?'接待挑战准备好了 · 按 A 开始，先沿金色路标绕开展台。':experience==='mission'?'操作入门准备好了 · 按 A 开始，先驾驶到 A 点并停稳。':'自由体验 · 按 A 开始，先试试移动与 LB / RB 组合键。');
  }
  get target():{x:number;z:number;radius:number}{return this.hoistContext?HOIST_CONFIG:this.experience==='course'?this.course.target:this.experience==='show'?this.show.target:this.experience==='reception'?this.reception.target:this.experience==='mission'?this.tutorial.target:DRIVE_CONFIG.welcome;}
  get targetDistance():number{return Math.hypot(this.x-this.target.x,this.z-this.target.z);}
  get facingError():number {
    const point=DRIVE_CONFIG.visitor;
    return angleDifference(Math.atan2(point.x-this.x,point.z-this.z),this.yaw);
  }
  start():void {
    this.running=true;this.paused=false;
    if(passiveMode(this.mode)&&this.mode!=='debug'&&this.body==='upright'&&!this.hoist.supported)this.beginFall();
    if(this.hoistContext){this.message=this.hoist.supported?'吊带支撑有效 · 可切阻尼 / 零力矩，恢复站立后按 A 解挂。':'驶入 H 圈并停稳 · 按 A 确认挂接；只进入圈内没有保护。';return;}
    this.message=this.mode==='locomotion'?(this.experience==='course'?'驾考开始 · 沿路标绕桩、穿门，再倒车入库；不比速度。':this.experience==='show'?'舞台挑战开始 · 先到实验室挂接、编排三段节目，再登台表演。':this.experience==='reception'?'接待挑战开始 · 沿金色路标绕行，再停车、转向、站稳招呼。':this.experience==='free'?'自由驾驶开始了 · 左杆移动，右杆转身；站稳后试试 RB + 彩色键。':'跟随下方入门提示操作；每完成一步，会自动点亮下一步。'):DRIVE_MODES.find(m=>m.id===this.mode)!.copy;
  }
  suspend(message='已暂停 · 点击继续后再操控'):void {this.paused=true;this.stop();this.course.suspend();this.show.suspend('pause');this.message=message;}
  stop():void {this.vx=this.vz=this.angular=this.speed=0;}
  setMode(mode:DriveMode):void {
    if(!DRIVE_MODES.some(m=>m.id===mode)||(mode===this.mode&&!(this.body==='recovering'&&passiveMode(mode))))return;
    if(this.experience==='reception'&&mode==='debug'){this.message='这一关先完成接待 · 吊架与舞蹈键位可在自由体验中探索。';return;}
    if(this.experience==='course'&&mode==='debug'){this.message='驾考中先完成路线 · 吊架调试可在自由体验或舞台挑战中探索。';return;}
    if(this.hoistAvailable){
      if(this.hoist.phase==='attaching'||this.hoist.phase==='releasing'){this.message='正在调整吊带 · 完成后再切换模式。';return;}
      if(this.hoist.supported&&['locomotion','performance'].includes(mode)){this.message='吊带已连接 · 先恢复站立并按 A 解挂，再驾驶或表演。';return;}
      if(mode==='debug'&&!this.hoist.supported){this.message='调试需要吊带支撑 · 先起身、驶入 H 圈并确认挂接。';return;}
    }
    if(mode==='debug'&&!passiveMode(this.mode)){this.message='先切换阻尼或零力矩，再用下方「关节实验」卡片或对应组合键进入。';return;}
    if(this.mode==='debug'&&!['debug','damp','zero'].includes(mode)&&!(this.hoistAvailable&&this.hoist.supported&&mode==='stand')){this.message='调试由虚拟吊架支撑 · 先退出到阻尼，再起身恢复行走。';return;}
    if(this.body!=='upright'&&!passiveMode(mode)){this.message='模型已失去支撑 · 请先起身复位，不能直接切回行走。';return;}
    const vx=this.vx,vz=this.vz;
    this.stopPreview();this.show.suspend();this.debugTab='joints';this.stop();this.mode=mode;this.gesture=null;this.arriveHold=0;this.needsNeutral=true;
    this.stepping=false;
    if(mode==='debug'){
      this.lab.reset();if(!this.hoist.supported){this.body='recovering';this.bodyProgress=0;}
    }else if(passiveMode(mode)&&this.running&&(this.body==='upright'||this.body==='recovering')&&!this.hoist.supported)this.beginFall(vx,vz);
    this.message=this.hoist.supported?mode==='stand'?'主动恢复站姿 · 姿势稳定后按 A 解挂。':mode==='damp'?'吊带承重 · 关节带阻力缓慢放松，不会主动站立。':mode==='zero'?'吊带承重 · 关节更快放松，脚离地，不会维持站姿。':DRIVE_MODES.find(m=>m.id===mode)!.copy:DRIVE_MODES.find(m=>m.id===mode)!.copy;
  }
  private beginFall(vx=0,vz=0):void{
    this.fallCause='mode';
    this.body='falling';this.bodyProgress=0;this.fallDuration=this.mode==='zero'?.68:1.25;this.falls++;
    this.fallDirection=Math.hypot(vx,vz)>.04?Math.atan2(vx,vz)-this.yaw:0;
  }
  private collide():void{
    if(this.body!=='upright')return;
    if(this.experience!=='free'&&!this.roundComplete){
      const step=this.experience==='course'?this.course.step:this.experience==='show'?this.show.step:this.experience==='reception'?this.reception.step:this.stage;
      this.impactCount++;this.impacts.push({x:this.x,z:this.z,obstacle:this.contact,step});
      if(this.impacts.length>3)this.impacts.shift();
    }
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
    this.distance=this.seconds=this.arriveHold=this.score=this.stars=this.touches=0;this.tutorial.reset();this.reception.reset();this.course.reset();this.show.reset();this.gesture=null;this.contact='';this.running=false;this.paused=false;this.contactBefore=false;
    this.impactCount=this.impacts.length=0;
    this.message=this.experience==='course'?'新的驾考准备好了 · 绕桩、穿窄门，保持朝向倒车入库。':this.experience==='show'?'新的舞台挑战准备好了 · 挂接编排、沿路登台、完整表演。':this.experience==='reception'?'新的接待挑战准备好了 · 通过路标，停稳后向游客打招呼。':this.experience==='free'?'自由体验准备好了 · 先试试移动与 LB / RB 组合键。':'新的操作入门准备好了。';
    this.mode='locomotion';this.selectedAction='wave';this.needsNeutral=false;
    this.lab.reset();this.hoist.reset();this.hoistConsole=false;this.debugTab='joints';this.stopPreview();
    this.body='upright';this.bodyProgress=0;this.falls=0;this.speedMode='slow';this.stepping=false;
    this.fallCause='mode';this.impactX=this.impactZ=0;this.recoil=null;
  }
  update(delta:number,command:DriveCommand):void {
    if(!Number.isFinite(delta)||delta<=0||![command.forward,command.strafe,command.turn,command.look].every(Number.isFinite))return;
    if(this.hoistAvailable){
      const event=this.hoist.update(delta,this,command);
      if(event==='lost'&&this.running&&!this.paused&&this.body==='upright'&&passiveMode(this.mode)){if(this.mode==='debug')this.mode='damp';this.beginFall();}
      if(event==='attached')this.message='双吊带已收紧 · 支撑有效！试着切换阻尼，再切零力矩。';
      if(event==='released'){if(this.experience==='show')this.hoistConsole=false;this.needsNeutral=true;this.message=this.hoist.completed?'吊挂体验完成！你已比较两种模式，恢复站立并顺利解挂。':'双脚接地、吊带已解开 · 切回行走，松开摇杆后离开。';}
    }
    // Device adapters already distinguish A from modified action shortcuts.
    // Route the unmodified action after updating proximity and parking readiness.
    if(this.hoistContext&&this.mode!=='debug'&&command.wave&&!command.actionTrigger)command={...command,hoistAction:true,wave:false};
    this.updateState(delta,command);
    if(this.running&&!this.paused&&!this.roundComplete)this.seconds+=Math.min(delta,.1);
    this.tutorial.update(Math.min(.1,delta),this);
    this.reception.update(delta,this);this.course.update(delta,this);this.show.update(delta,this);this.updateScore();
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
    if(command.hoistAction&&this.hoistAvailable){
      if(this.body==='fallen'){this.recover();return;}
      if(this.hoist.phase==='supported'&&this.mode!=='stand'){this.setMode('stand');return;}
      // Require centered sticks for both attachment and deliberate release.
      if([command.forward,command.strafe,command.turn].some(v=>Math.abs(v)>.03)){this.message='先松开摇杆并停稳，再操作吊带。';return;}
      const result=this.hoist.request(this);this.message=result.message;
      if(result.accepted){this.stop();this.gesture=null;this.stepping=false;this.mode='stand';this.needsNeutral=true;}
      return;
    }
    if(command.recover)this.recover();
    if(command.speedMode)this.speedMode=command.speedMode;
    if(command.toggleStand)this.setMode(this.mode==='locomotion'?'stand':'locomotion');
    if(command.stepping&&this.body==='upright'&&!passiveMode(this.mode)&&!this.hoist.locked){this.setMode('locomotion');this.stepping=true;this.message='持续踏步 · 双脚交替抬落；单击菜单键（≡）回到站立。';}
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
      if(this.debugPreview){this.previewSeconds-=Math.min(delta,.1);if(this.previewSeconds<=0)this.stopPreview();return;}
      if(this.debugTab==='bindings')return;
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
    const norm=Math.max(1,Math.hypot(command.forward,command.strafe));
    const speed=this.speedMode==='fast'?DRIVE_CONFIG.fastSpeed:DRIVE_CONFIG.slowSpeed;
    const driving=this.mode==='locomotion'&&!this.gesture&&this.body==='upright'&&!this.hoist.locked;
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
    for(const obstacle of this.activeObstacles){
      const px=axis==='x'?next:x,pz=axis==='z'?next:z;
      if(px>obstacle.x-radius&&px<obstacle.x+obstacle.width+radius&&pz>obstacle.z-radius&&pz<obstacle.z+obstacle.depth+radius){
        this.contact=obstacle.id;next=axis==='x'?this.x:this.z;
        this.impactX=axis==='x'?(this.x<obstacle.x+obstacle.width/2?-1:1):0;this.impactZ=axis==='z'?(this.z<obstacle.z+obstacle.depth/2?-1:1):0;
      }
    }
    return next;
  }
  private beginGesture(gesture:DriveGesture):void {
    if(this.hoist.locked){this.message='吊带连接期间不能表演 · 恢复站立并解挂后再试。';return;}
    if(passiveMode(this.mode)||this.body!=='upright'){this.message='当前没有站立支撑 · 先起身复位，再执行动作。';return;}
    if(gesture==='backflip'||gesture==='jump'){
      const {room}=DRIVE_CONFIG,clearance=.95;
      const nearWall=this.x<room.minX+clearance||this.x>room.maxX-clearance||this.z<room.minZ+clearance||this.z>room.maxZ-clearance;
      const nearObject=this.activeObstacles.some(o=>this.x>o.x-clearance&&this.x<o.x+o.width+clearance&&this.z>o.z-clearance&&this.z<o.z+o.depth+clearance);
      if(nearWall||nearObject){this.message='这里空间不足 · 请先走到空旷的展厅中央再做特技。';return;}
    }
    if(this.speed>.07||Math.abs(this.angular)>.2){this.message='先松开摇杆，站稳后再做动作。';return;}
    this.gesture=gesture;this.reception.startAction(gesture,this);this.show.startAction(gesture,this);this.message=actionInfo(gesture).description;
  }
  finishGesture(gesture:DriveGesture):void {
    if(this.gesture!==gesture)return;
    this.tutorial.finishAction(gesture,this);
    this.reception.finishAction(gesture,this);
    this.show.finishAction(gesture,this);
    this.gesture=null;
    this.updateScore();
    if(this.stage==='complete')this.message='操作入门完成！你已经学会移动、切换模式、起身和表演。';
    if(this.experience==='reception'&&this.reception.step==='complete')this.message='接待成功！你让 G1 绕开展台、停稳转向，并向游客打了招呼。';
    if(this.experience==='show'&&this.show.step==='complete')this.message='演出成功！三段节目全部完成，观众向你鼓掌。';
  }
  private updateScore():void{
    const challenge=this.experience==='course'?this.course:this.experience==='show'?this.show:this.experience==='reception'?this.reception:null;
    this.score=challenge?challenge.score:this.experience==='mission'?this.tutorial.score:0;
    this.stars=challenge?(challenge.step==='complete'?this.score>=85?3:this.score>=65?2:1:0):this.experience==='mission'&&this.stage==='complete'?3:0;
  }
}
