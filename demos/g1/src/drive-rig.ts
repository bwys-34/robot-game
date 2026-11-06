import * as THREE from 'three';
import {G1_INTERACTION_CONFIG} from './interaction-config';
import {PerformanceClock} from './performance-player';
import {driveActionFrames} from './drive-actions';
import {BODY_CLIPS,isBodyClip,sampleBodyClip,smooth,type BodyClip} from './drive-body-motion';
import type {DriveMode} from './drive-config';
import {angleDifference,type DriveGesture} from './drive-state';
interface RigJoint {node:THREE.Object3D;base:THREE.Quaternion;axis:THREE.Vector3;min:number;max:number;angle:number;}
interface RigDrive {x:number;z:number;yaw:number;vx:number;vz:number;speed:number;angular:number;gesture:DriveGesture|null;paused:boolean;mode?:DriveMode;body?:'upright'|'falling'|'fallen'|'recovering';bodyProgress?:number;fallDirection?:number;stepping?:boolean;}
interface Foot {
  side:'left'|'right';ankle:THREE.Object3D;link:THREE.Object3D;corners:THREE.Vector3[];rest:THREE.Vector3;
  target:THREE.Vector3;from:THREE.Vector3;to:THREE.Vector3;elapsed:number;duration:number;swing:boolean;yaw:number;fromYaw:number;toYaw:number;
}

/** Runtime-only kinematic teaching gait. Planted ankle targets live in world space;
 * the damped leg solve follows the bundled URDF axes. No hardware policy/physics. */
export class DriveRig {
  readonly group=new THREE.Group();
  readonly body=new THREE.Group();
  readonly joints=new Map<string,RigJoint>();
  private readonly feet:Foot[]=[];
  private nextFoot=0;
  private action:PerformanceClock|null=null;
  private activeGesture:DriveGesture|null=null;
  private readonly point=new THREE.Vector3();
  private initialized=false;
  private danceTime=0;
  private danceDepth=0;
  private clipTime=0;
  private activeBodyClip:BodyClip|null=null;
  private bodyStage='upright';
  private readonly shell:Array<{node:THREE.Object3D;corners:THREE.Vector3[]}>=[];
  private transitionAngles:Record<string,number>={};
  private readonly transitionRotation=new THREE.Quaternion();
  private readonly transitionPosition=new THREE.Vector3();
  constructor(readonly model:THREE.Object3D){
    model.rotation.y=-Math.PI/2;this.body.position.y=.65;model.position.y=-.65;this.body.add(model);this.group.add(this.body);this.group.name='G1_driving_carrier';
    model.traverse(node=>{
      const mesh=node as THREE.Mesh;if(mesh.isMesh){if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();const b=mesh.geometry.boundingBox!;const corners:THREE.Vector3[]=[];for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z])corners.push(new THREE.Vector3(x,y,z));this.shell.push({node,corners});}
      if(!node.name.endsWith('_joint')||!Array.isArray(node.userData.axis))return;
      const {axis,lower,upper}=node.userData;if(!Number.isFinite(lower)||!Number.isFinite(upper))return;
      const ui=G1_INTERACTION_CONFIG.interactionLimits[node.name];
      let min=Math.max(THREE.MathUtils.radToDeg(lower),ui?.min??-Infinity),max=Math.min(THREE.MathUtils.radToDeg(upper),ui?.max??Infinity);
      if(/hip_pitch/.test(node.name)){min=Math.max(min,-40);max=Math.min(max,35);}
      if(/hip_roll/.test(node.name)){min=Math.max(min,-18);max=Math.min(max,18);}
      if(/hip_yaw/.test(node.name)){min=Math.max(min,-25);max=Math.min(max,25);}
      if(/knee/.test(node.name)){min=Math.max(min,0);max=Math.min(max,75);}
      this.joints.set(node.name,{node,base:node.quaternion.clone(),axis:new THREE.Vector3(axis[0],axis[2],-axis[1]).normalize(),min,max,angle:0});
    });
    this.group.updateMatrixWorld(true);
    for(const side of ['left','right'] as const){
      const ankle=model.getObjectByName(`${side}_ankle_pitch_joint`)!,link=model.getObjectByName(`${side}_ankle_roll_link`)!;
      if(!ankle||!link)throw new Error('G1 driving model is missing leg joints');
      const localBox=new THREE.Box3(),inverse=link.matrixWorld.clone().invert();
      link.traverse(node=>{const mesh=node as THREE.Mesh;if(!mesh.isMesh)return;if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();localBox.union(mesh.geometry.boundingBox!.clone().applyMatrix4(inverse.clone().multiply(mesh.matrixWorld)));});
      const corners:THREE.Vector3[]=[];
      for(const x of [localBox.min.x,localBox.max.x])for(const y of [localBox.min.y,localBox.max.y])for(const z of [localBox.min.z,localBox.max.z])corners.push(new THREE.Vector3(x,y,z));
      const rest=ankle.getWorldPosition(new THREE.Vector3());
      this.feet.push({side,ankle,link,corners,rest,target:rest.clone(),from:rest.clone(),to:rest.clone(),elapsed:0,duration:.28,swing:false,yaw:0,fromYaw:0,toYaw:0});
      this.set(`${side}_hip_pitch_joint`,-7);this.set(`${side}_knee_joint`,14);this.set(`${side}_ankle_pitch_joint`,-7);
    }
    model.position.y=-.658;
  }
  reset():void {
    this.initialized=false;this.action=null;this.activeGesture=null;this.nextFoot=0;this.danceDepth=this.danceTime=0;
    this.bodyStage='upright';this.activeBodyClip=null;this.clipTime=0;this.body.quaternion.identity();this.body.position.set(0,.65,0);
    for(const [name] of this.joints)this.set(name,0);
    for(const f of this.feet){f.swing=false;this.set(`${f.side}_hip_pitch_joint`,-7);this.set(`${f.side}_knee_joint`,14);this.set(`${f.side}_ankle_pitch_joint`,-7);}
    this.model.position.y=-.658;this.group.updateMatrixWorld(true);
  }
  private set(name:string,value:number):void {
    const j=this.joints.get(name);if(!j)return;j.angle=THREE.MathUtils.clamp(value,j.min,j.max);
    j.node.quaternion.copy(j.base).multiply(new THREE.Quaternion().setFromAxisAngle(j.axis,THREE.MathUtils.degToRad(j.angle)));
  }
  private nominal(foot:Foot):THREE.Vector3 {return this.group.localToWorld(foot.rest.clone()).setY(foot.rest.y);}
  update(delta:number,state:RigDrive):DriveGesture|null {
    if(state.paused)return null;
    const dt=Math.max(0,Math.min(.05,Number.isFinite(delta)?delta:0));
    this.group.position.set(state.x,0,state.z);this.group.rotation.y=state.yaw;
    const bodyStage=state.body??'upright';
    if(bodyStage!=='upright'){
      this.updateFallen(bodyStage,state);this.bodyStage=bodyStage;return null;
    }
    if(this.bodyStage!=='upright'){this.bodyStage='upright';this.body.quaternion.identity();this.body.position.set(0,.65,0);this.model.position.y=-.656;this.initialized=false;}
    if(isBodyClip(state.gesture))return this.updateBodyClip(dt,state.gesture,state);
    if(this.activeBodyClip){this.activeBodyClip=null;this.initialized=false;}
    this.body.quaternion.identity();this.body.position.set(0,.65,0);
    if(state.gesture!==this.activeGesture){this.action=null;this.activeGesture=null;}
    this.danceTime=state.gesture==='dance'?this.danceTime+dt:0;
    const danceTarget=state.gesture==='dance'?.012+.018*(1-Math.cos(this.danceTime*5)):0;
    this.danceDepth=THREE.MathUtils.lerp(this.danceDepth,danceTarget,1-Math.exp(-dt/.14));
    this.model.position.y=-.656-this.danceDepth;this.group.updateWorldMatrix(true,false);
    if(!this.initialized){for(const f of this.feet){f.target.copy(this.nominal(f));f.yaw=state.yaw;f.swing=false;}this.initialized=true;}
    const moving=state.speed>.018||Math.abs(state.angular)>.065;
    const swinging=this.feet.some(f=>f.swing);
    if(!swinging){
      const scores=this.feet.map(f=>{const target=this.nominal(f);return target.distanceTo(f.target)+Math.abs(angleDifference(state.yaw,f.yaw))*.16;});
      let chosen=moving||state.stepping?this.nextFoot:scores[0]>=scores[1]?0:1;
      if(scores[1-chosen]>scores[chosen]+.12)chosen=1-chosen;
      if(scores[chosen]>(moving?.055:.004)||(state.stepping&&!state.gesture)){
        const f=this.feet[chosen];f.from.copy(f.target);f.to.copy(this.nominal(f));
        const sideSpeed=Math.abs(state.vx*Math.cos(state.yaw)-state.vz*Math.sin(state.yaw));
        f.duration=state.stepping&&!moving?.38:sideSpeed>.2||Math.abs(state.angular)>.6?.19:.28;
        const anticipation=f.duration*.5;
        f.to.x+=state.vx*anticipation;f.to.z+=state.vz*anticipation;f.fromYaw=f.yaw;f.toYaw=state.yaw;
        f.elapsed=0;f.swing=true;this.nextFoot=1-chosen;
      }
    }
    for(const foot of this.feet){
      if(foot.swing){
        foot.elapsed+=dt;const t=Math.min(1,foot.elapsed/foot.duration),ease=t*t*(3-2*t);
        foot.target.lerpVectors(foot.from,foot.to,ease);foot.target.y+=Math.sin(Math.PI*t)*.055;
        foot.yaw=foot.fromYaw+angleDifference(foot.toYaw,foot.fromYaw)*ease;
        if(t>=1){foot.swing=false;foot.target.copy(foot.to);foot.yaw=foot.toYaw;}
      }
      this.solveLeg(foot,state.yaw);
    }
    if(state.gesture&&state.gesture!==this.activeGesture){
      const initial=Object.fromEntries([...this.joints].filter(([n])=>!/^((left|right)_(hip|knee|ankle))/.test(n)).map(([n,j])=>[n,j.angle]));
      const frames=driveActionFrames(state.gesture).map(f=>({...f,actionId:state.gesture!,actionIndex:0,phase:'action' as const}));
      this.action=new PerformanceClock(frames,initial);this.activeGesture=state.gesture;
    }
    let completed:DriveGesture|null=null;
    if(this.action){
      this.action.update(dt);for(const [name,value] of Object.entries(this.action.angles))this.set(name,value);
      if(state.gesture==='turnwave')this.body.rotation.y=Math.sin(Math.PI*this.action.progress)*Math.PI*.48;
      if(this.action.finished){completed=this.activeGesture;this.action=null;this.activeGesture=null;}
    }else{
      const motion=Math.min(1,state.speed/.5),stride=this.feet[0].target.z-this.feet[1].target.z;
      for(const [name,joint] of this.joints){
        if(/^((left|right)_(hip|knee|ankle))/.test(name))continue;
        const side=name.startsWith('left')?1:-1;
        const damping=state.mode==='damp';
        const target=name.includes('shoulder_pitch')?(damping?0:-8+stride*30*side*motion):name.includes('shoulder_roll')?side*(damping?3:8):name.includes('elbow')?(damping?3:15):0;
        this.set(name,THREE.MathUtils.lerp(joint.angle,target,1-Math.exp(-dt/(damping?.45:.16))));
      }
    }
    this.group.updateMatrixWorld(true);
    // Foot boxes are cached once. Lift the visual root by any small residual IK
    // penetration; a swing foot can never pull the floor through the other foot.
    const minimum=Math.min(...this.soleHeights());this.model.position.y-=minimum;
    this.group.updateMatrixWorld(true);
    return completed;
  }
  private captureTransition():void{
    this.transitionAngles=Object.fromEntries([...this.joints].map(([n,j])=>[n,j.angle]));
    this.transitionRotation.copy(this.body.quaternion);this.transitionPosition.copy(this.body.position);
  }
  private standingAngle(name:string):number{
    return /hip_pitch|ankle_pitch/.test(name)?-8:/knee/.test(name)?16:/shoulder_pitch/.test(name)?-8:/shoulder_roll/.test(name)?(name.startsWith('left')?8:-8):/elbow/.test(name)?15:0;
  }
  private updateFallen(stage:string,state:RigDrive):void{
    if(this.bodyStage!==stage&&stage!=='fallen')this.captureTransition();
    this.action=null;this.activeGesture=null;this.activeBodyClip=null;this.initialized=false;
    const t=stage==='fallen'?1:smooth(state.bodyProgress??0),recovering=stage==='recovering';
    for(const [name]of this.joints){
      const relaxed=/hip_pitch/.test(name)?-18:/knee/.test(name)?36:/ankle_pitch/.test(name)?-18:/shoulder_roll/.test(name)?(name.startsWith('left')?6:-6):0;
      this.set(name,THREE.MathUtils.lerp(this.transitionAngles[name]??0,recovering?this.standingAngle(name):relaxed,t));
    }
    const direction=state.fallDirection??0;
    const target=recovering?new THREE.Quaternion():new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.cos(direction)*1.48,0,-Math.sin(direction)*1.48));
    this.body.quaternion.slerpQuaternions(this.transitionRotation,target,t);
    this.body.position.lerpVectors(this.transitionPosition,new THREE.Vector3(0,.65,0),t);this.model.position.y=-.656;
    this.group.updateMatrixWorld(true);
    // Full-shell contact is needed on the ground: soles alone miss head/torso.
    const floor=this.shellMinimum();this.body.position.y+=Math.max(0,.003-floor);
    if(!recovering)this.body.position.y-=Math.max(0,floor-.003)*t;
    this.group.updateMatrixWorld(true);
  }
  private updateBodyClip(dt:number,id:BodyClip,state:RigDrive):DriveGesture|null{
    if(this.activeBodyClip!==id){this.activeBodyClip=id;this.clipTime=0;this.action=null;this.activeGesture=null;this.captureTransition();}
    this.clipTime=Math.min(BODY_CLIPS[id],this.clipTime+dt);const p=sampleBodyClip(id,this.clipTime),entry=smooth(this.clipTime/.35);
    for(const [name]of this.joints){
      const angle=/knee/.test(name)?p.knee:/hip_pitch|ankle_pitch/.test(name)?-p.knee*.5:/shoulder_pitch/.test(name)?p.arm:this.standingAngle(name);
      this.set(name,THREE.MathUtils.lerp(this.transitionAngles[name]??angle,angle,entry));
    }
    this.body.position.set(0,.65+p.height,0);this.body.rotation.set(p.pitch,0,0);this.model.position.y=-.656;
    this.group.updateMatrixWorld(true);
    if(p.height>0)this.body.position.y+=Math.max(0,.003-this.shellMinimum());
    else this.body.position.y-=Math.min(...this.soleHeights());
    this.group.updateMatrixWorld(true);this.initialized=false;
    if(this.clipTime>=BODY_CLIPS[id]){this.body.quaternion.identity();this.activeBodyClip=null;return id;}return null;
  }
  private shellMinimum():number{
    let minimum=Infinity;for(const {node,corners}of this.shell)for(const v of corners)minimum=Math.min(minimum,this.point.copy(v).applyMatrix4(node.matrixWorld).y);return minimum;
  }
  private solveLeg(foot:Foot,yaw:number):void {
    const names=[`${foot.side}_hip_pitch_joint`,`${foot.side}_hip_roll_joint`,`${foot.side}_knee_joint`];
    this.set(`${foot.side}_hip_yaw_joint`,THREE.MathUtils.radToDeg(angleDifference(foot.yaw,yaw)));
    const base=new THREE.Vector3(),error=new THREE.Vector3(),columns:THREE.Vector3[]=[];
    for(let iteration=0;iteration<4;iteration++){
      foot.ankle.getWorldPosition(base);error.copy(foot.target).sub(base);if(error.lengthSq()<.000001)break;
      columns.length=0;
      for(const name of names){const j=this.joints.get(name)!,angle=j.angle;
        // At an upper bound a forward difference is clamped to zero. Use the
        // available inward direction so a saturated joint can recover again.
        const increment=angle+.5<=j.max ? .5 : -.5;this.set(name,angle+increment);const actual=j.angle-angle;
        const col=foot.ankle.getWorldPosition(new THREE.Vector3()).sub(base).multiplyScalar(1/THREE.MathUtils.degToRad(actual));columns.push(col);this.set(name,angle);
      }
      const [a,b,c]=columns,jacobian=new THREE.Matrix3().set(a.x,b.x,c.x,a.y,b.y,c.y,a.z,b.z,c.z),transpose=jacobian.clone().transpose();
      const normal=transpose.clone().multiply(jacobian);for(const i of [0,4,8])normal.elements[i]+=.0008;
      const step=error.applyMatrix3(transpose).applyMatrix3(normal.invert());
      for(let i=0;i<3;i++){const j=this.joints.get(names[i])!;this.set(names[i],j.angle+THREE.MathUtils.radToDeg(THREE.MathUtils.clamp(step.getComponent(i),-.18,.18)));}
    }
    this.set(`${foot.side}_ankle_pitch_joint`,-this.joints.get(names[0])!.angle-this.joints.get(names[2])!.angle);
    this.set(`${foot.side}_ankle_roll_joint`,-this.joints.get(names[1])!.angle);
  }
  soleHeights():number[] {return this.feet.map(f=>Math.min(...f.corners.map(v=>this.point.copy(v).applyMatrix4(f.link.matrixWorld).y)));}
  footPositions():THREE.Vector3[] {return this.feet.map(f=>f.ankle.getWorldPosition(new THREE.Vector3()));}
}
