import type {DriveCommand} from './drive-config';
export const DEBUG_JOINTS=[
  {id:'elbow',title:'右肘 · 弯曲',joint:'right_elbow_joint',rest:15,min:5,max:105,goal:70,direction:1,copy:'电机把前臂转到目标角度，位置误差越小，校准越准确。'},
  {id:'shoulder',title:'右肩 · 抬臂',joint:'right_shoulder_pitch_joint',rest:-8,min:-75,max:10,goal:-50,direction:-1,copy:'肩部绕横轴前后摆。左杆向上抬臂，负角度只是模型坐标的约定。'},
  {id:'waist',title:'腰部 · 转动',joint:'waist_yaw_joint',rest:0,min:-25,max:25,goal:18,direction:1,copy:'下身固定时，腰部让上身转向。这里独立控制一个旋转自由度。'},
] as const;
export type DebugJointId=typeof DEBUG_JOINTS[number]['id'];
/** Exhibition-only position-control exercise, unrelated to real motor telemetry. */
export class DriveDebugLab {
  selected:DebugJointId='elbow';
  target:number=15;settled=0;
  private readonly positions:Record<DebugJointId,number>={elbow:15,shoulder:-8,waist:0};
  readonly completed=new Set<DebugJointId>();
  feedback='把实际角度调到金色目标附近，松杆停稳，再按 A 确认。';
  get spec(){return DEBUG_JOINTS.find(j=>j.id===this.selected)!;}
  get angle(){return this.positions[this.selected];}
  angleForJoint(name:string):number|undefined{const spec=DEBUG_JOINTS.find(j=>j.joint===name);return spec?this.positions[spec.id]:undefined;}
  get error(){return Math.abs(this.angle-this.spec.goal);}
  select(id:DebugJointId):void{
    if(!DEBUG_JOINTS.some(j=>j.id===id))return;
    this.selected=id;this.resetPose();
  }
  step(direction:number):void{const i=DEBUG_JOINTS.findIndex(j=>j.id===this.selected);this.select(DEBUG_JOINTS[(i+Math.sign(direction)+DEBUG_JOINTS.length)%DEBUG_JOINTS.length].id);}
  resetPose():void{this.target=this.spec.rest;this.settled=0;this.demonstrating=false;this.feedback='推左杆调节，松开后等待电机跟上，再确认目标。';}
  reset():void{this.completed.clear();this.selected='elbow';for(const spec of DEBUG_JOINTS)this.positions[spec.id]=spec.rest;this.resetPose();}
  diagnose():void{this.target=this.spec.goal;this.settled=0;this.feedback='正在演示诊断姿态 · 示范不计分，请复位后自己尝试。';this.demonstrating=true;}
  private demonstrating=false;
  update(delta:number,command:DriveCommand):void{
    if(!Number.isFinite(delta)||delta<=0)return;
    const dt=Math.min(.1,delta),drive=command.labAdjust??command.forward;
    if(!Number.isFinite(drive))return;
    if(command.labSelect)this.select(command.labSelect);
    if(command.labStep)this.step(command.labStep);
    if(command.labReset){this.resetPose();this.demonstrating=false;}
    if(Math.abs(drive)>.02){
      this.target=Math.max(this.spec.min,Math.min(this.spec.max,this.target+drive*this.spec.direction*38*dt));
      this.demonstrating=false;this.feedback='观察实际角度怎样跟上指令，接近目标后松开摇杆。';
    }
    const alpha=1-Math.exp(-dt/.13);
    for(const spec of DEBUG_JOINTS)this.positions[spec.id]+=((spec.id===this.selected?this.target:spec.rest)-this.positions[spec.id])*alpha;
    this.settled=Math.abs(drive)<.02&&Math.abs(this.target-this.angle)<1?this.settled+dt:0;
    if(command.labConfirm||command.wave)this.confirm();
  }
  confirm():void{
    if(this.demonstrating){this.feedback='这是诊断示范 · 请按复位，再手动调节后确认。';return;}
    if(this.settled<.4){this.feedback='先松开摇杆，等实际角度稳定，再确认一次。';return;}
    if(this.error>4){this.feedback=`还差约 ${Math.round(this.error)}° · ${this.spec.title}需要再调一点，可以继续尝试。`;return;}
    this.completed.add(this.selected);
    this.feedback=this.completed.size===DEBUG_JOINTS.length?'三个关节校准完成！你已体验指令、伺服跟随与位置误差。':'校准成功！换一个关节，看看不同自由度的作用。';
  }
}
