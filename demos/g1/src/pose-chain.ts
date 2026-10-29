import * as THREE from 'three';
import type { G1InteractionConfig } from './interaction-config';
import { G1_INTERACTION_CONFIG } from './interaction-config';
import type { MotionSource } from './game-manager';

interface JointState {
  node: THREE.Object3D;
  base: THREE.Quaternion;
  axis: THREE.Vector3;
  lower: number;
  upper: number;
  angle: number;
}
interface PoseSnapshot { angles:Map<string,number>;root:THREE.Vector3;drop:number; }
interface PoseSegment { from:PoseSnapshot;to:PoseSnapshot;duration:number;elapsed:number;chainAngles?:[number,number]; }

/** Keeps the URDF installation rotations and applies teaching motion downstream. */
export class PoseChain {
  readonly model: THREE.Object3D;
  readonly config: G1InteractionConfig;
  readonly joints = new Map<string,JointState>();
  readonly root: THREE.Object3D;
  readonly rootBase: THREE.Vector3;
  readonly supportFoot: THREE.Object3D;
  readonly supportAnchor: THREE.Vector3;
  readonly movingFoot:THREE.Object3D;
  readonly movingFootBaseHeight:number;
  pelvisDrop = 0;
  targetAngle = 0;
  private animation: {from:number;to:number;elapsed:number;duration:number} | null = null;
  private playing=false;
  private playDirection=1;
  private goals=new Map<string,number>();
  private segments:PoseSegment[]=[];
  private source:MotionSource='idle';
  private teachingBaseline:PoseSnapshot|null=null;
  private teachingReturnSource:MotionSource='idle';
  get motionSource():MotionSource { return this.source; }

  constructor(model: THREE.Object3D, config: G1InteractionConfig = G1_INTERACTION_CONFIG) {
    this.model=model;
    this.config=config;
    model.traverse(node => {
      if (!node.name.endsWith('_joint') || !Array.isArray(node.userData.axis)) return;
      const {axis,lower,upper}=node.userData;
      if (!Number.isFinite(lower)||!Number.isFinite(upper)) return;
      this.joints.set(node.name,{
        node,base:node.quaternion.clone(),axis:new THREE.Vector3(axis[0],axis[2],-axis[1]).normalize(),
        lower:THREE.MathUtils.radToDeg(lower),upper:THREE.MathUtils.radToDeg(upper),angle:0,
      });
    });
    const root=model.getObjectByName(config.jointNames.root);
    if(!root) throw new Error(`Missing root link: ${config.jointNames.root}`);
    this.root=root;
    this.rootBase=root.position.clone();
    const supportFoot=model.getObjectByName(config.jointNames.supportFoot);
    if(!supportFoot)throw new Error('Missing configured support foot');
    this.supportFoot=supportFoot;
    const movingFoot=model.getObjectByName(config.jointNames.movingFoot);
    if(!movingFoot)throw new Error('Missing configured moving foot');
    this.movingFoot=movingFoot;
    model.updateMatrixWorld(true);
    this.supportAnchor=supportFoot.getWorldPosition(new THREE.Vector3());
    this.movingFootBaseHeight=movingFoot.getWorldPosition(new THREE.Vector3()).y;
    for(const name of [config.jointNames.leftHipPitch,config.jointNames.leftKnee,config.jointNames.leftAnklePitch,config.jointNames.rightHipPitch,config.jointNames.rightKnee,config.jointNames.rightAnklePitch]) {
      if(!this.joints.has(name)) throw new Error(`Missing configured joint: ${name}`);
    }
  }

  getAngle(name: string): number { return this.joints.get(name)?.angle ?? 0; }

  getInteractionRange(name:string):{min:number;max:number} {
    const state=this.joints.get(name);
    if(!state)throw new Error(`Unknown joint: ${name}`);
    const requested=this.config.interactionLimits[name];
    const min=Math.max(state.lower,requested?.min??state.lower),max=Math.min(state.upper,requested?.max??state.upper);
    if(min>max)throw new Error(`Empty interaction range: ${name}`);
    return {min,max};
  }

  /** UI bounds intersect URDF; warning analysis never authorizes or blocks motion. */
  setControlledJoint(name:string,degrees:number):number {
    const state=this.joints.get(name);
    if(!state||!Number.isFinite(degrees))return state?.angle??0;
    // Preserve other independent servo goals when receiving another input.
    this.playing=false;this.animation=null;this.segments=[];
    this.source='manual';this.teachingBaseline=null;
    const range=this.getInteractionRange(name);
    const target=THREE.MathUtils.clamp(degrees,range.min,range.max);
    this.goals.set(name,target);
    return target;
  }

  getRequestedAngle(name:string):number {return this.goals.get(name)??this.getAngle(name);}

  /** Samples an authored full-body target without changing the live servo or timeline. */
  previewPose<T>(angles:Readonly<Record<string,number>>,read:()=>T):T {
    const previous=this.capture();
    try{
      for(const [name] of this.joints){
        const range=this.getInteractionRange(name),value=angles[name]??0;
        this.setJointAngle(name,THREE.MathUtils.clamp(value,range.min,range.max));
      }
      this.root.position.copy(this.rootBase);this.maintainSupportAnchor();
      return read();
    }finally{this.restore(previous);}
  }

  /** Keeps the configured support foot in place while a visitor builds a training pose. */
  maintainSupportAnchor():void {
    this.model.updateMatrixWorld(true);
    const current=this.supportFoot.getWorldPosition(new THREE.Vector3());
    const parent=this.root.parent!;
    this.root.position.add(parent.worldToLocal(this.supportAnchor.clone()).sub(parent.worldToLocal(current)));
    this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y);
    this.model.updateMatrixWorld(true);
  }

  /** A smooth full-pose example with a visible hold and a return to neutral. */
  demonstratePose(angles:Readonly<Record<string,number>>):void {
    this.pause();this.source='teaching';
    const from=this.capture();
    const target=this.previewPose(angles,()=>this.capture());
    const standing=this.previewPose({},()=>this.capture());
    this.segments=[{from,to:target,duration:1.1,elapsed:0},{from:target,to:target,duration:1.2,elapsed:0},{from:target,to:standing,duration:1,elapsed:0}];
  }

  /** A small one-axis explanation, returning to the captured angle. */
  demonstrateJoint(name:string):void {
    const baseline=this.teachingBaseline??this.capture();
    const returnSource=this.teachingBaseline?this.teachingReturnSource:this.source;
    this.pause();
    this.source='teaching';this.teachingBaseline=baseline;this.teachingReturnSource=returnSource;
    const from=this.capture(),range=this.getInteractionRange(name),angle=baseline.angles.get(name)!;
    const to={...baseline,angles:new Map(baseline.angles)};
    to.angles.set(name,THREE.MathUtils.clamp(angle+(range.max-angle>=6?6:-6),range.min,range.max));
    this.segments=[{from,to,duration:.3,elapsed:0},{from:to,to,duration:.35,elapsed:0},{from:to,to:baseline,duration:.45,elapsed:0}];
  }

  /** Transition from the entire current pose, then perform and finish a coordinated action. */
  demonstrateChain(kneeDegrees:number):void {
    this.pause();
    this.source='chain';
    const from=this.capture();
    let standing:PoseSnapshot,peak:PoseSnapshot;
    try{
      this.applyChain(0);standing=this.capture();
      this.applyChain(kneeDegrees);peak=this.capture();
    }finally{this.restore(from);}
    this.segments=[
      {from,to:standing!,duration:.8,elapsed:0},
      {from:standing!,to:peak!,duration:1.2,elapsed:0,chainAngles:[0,kneeDegrees]},
      {from:peak!,to:peak!,duration:.5,elapsed:0,chainAngles:[kneeDegrees,kneeDegrees]},
      {from:peak!,to:standing!,duration:1.2,elapsed:0,chainAngles:[kneeDegrees,0]},
    ];
  }

  setAngle(degrees: number): number {
    const knee=this.config.jointNames.leftKnee;
    const state=this.joints.get(knee);
    if(!state||!Number.isFinite(degrees)) return 0;
    this.pause();
    this.applyChain(THREE.MathUtils.clamp(degrees,state.lower,state.upper));
    this.targetAngle=state.angle;
    return state.angle;
  }

  transitionTo(degrees: number, duration=this.config.motion.transitionSeconds): void {
    this.pause();
    const state=this.joints.get(this.config.jointNames.leftKnee)!;
    const to=THREE.MathUtils.clamp(degrees,state.lower,state.upper);
    this.playing=false;
    this.animation={from:state.angle,to,elapsed:0,duration:Math.max(.01,duration)};
    this.targetAngle=to;
  }

  play():void {
    this.pause();
    this.animation=null;
    this.playDirection=this.getAngle(this.config.jointNames.leftKnee)>=this.targetAngle?-1:1;
    this.playing=true;
  }

  pause():void {
    this.playing=false;this.animation=null;this.goals.clear();this.segments=[];
    // A stopped manual pose can still be unbalanced; selecting another control
    // must not grant it the exemption reserved for authored teaching motion.
    if(this.source!=='manual')this.source='idle';
    this.teachingBaseline=null;
  }

  update(deltaSeconds: number): boolean {
    if(!Number.isFinite(deltaSeconds)||deltaSeconds<=0)return false;
    if(this.segments.length){
      let remaining=deltaSeconds;
      while(this.segments.length&&remaining>0){
        const segment=this.segments[0],step=Math.min(remaining,segment.duration-segment.elapsed);
        segment.elapsed+=step;remaining-=step;
        const t=segment.elapsed/segment.duration,eased=t*t*(3-2*t);
        if(segment.chainAngles)this.applyChain(THREE.MathUtils.lerp(segment.chainAngles[0],segment.chainAngles[1],eased));
        else {
          for(const [name,angle] of segment.to.angles)this.setJointAngle(name,THREE.MathUtils.lerp(segment.from.angles.get(name)!,angle,eased));
          this.root.position.lerpVectors(segment.from.root,segment.to.root,eased);
          this.pelvisDrop=THREE.MathUtils.lerp(segment.from.drop,segment.to.drop,eased);
        }
        if(t>=1)this.segments.shift();
      }
      if(!this.segments.length){this.source=this.source==='teaching'?this.teachingReturnSource:'idle';this.teachingBaseline=null;}
      this.model.updateMatrixWorld(true);return true;
    }
    if(this.goals.size){
      const alpha=1-Math.exp(-deltaSeconds/this.config.servoSeconds);
      for(const [name,target] of this.goals){
        let next=THREE.MathUtils.lerp(this.getAngle(name),target,alpha);
        if(Math.abs(next-target)<.001){next=target;this.goals.delete(name);}
        this.setJointAngle(name,next);
      }
      this.model.updateMatrixWorld(true);return true;
    }
    if(this.animation){
      const animation=this.animation;
      animation.elapsed=Math.min(animation.elapsed+Math.max(0,deltaSeconds),animation.duration);
      const t=animation.elapsed/animation.duration;
      const eased=t*t*(3-2*t);
      this.applyChain(THREE.MathUtils.lerp(animation.from,animation.to,eased));
      if(t>=1) this.animation=null;
      return true;
    }
    if(!this.playing)return false;
    if(Math.abs(this.targetAngle)<.001)this.targetAngle=this.config.motion.automaticTargetDegrees;
    const lower=Math.min(0,this.targetAngle),upper=Math.max(0,this.targetAngle),span=upper-lower;
    let phase=this.playDirection>0?this.getAngle(this.config.jointNames.leftKnee)-lower:2*span-(this.getAngle(this.config.jointNames.leftKnee)-lower);
    phase=(phase+30*deltaSeconds)%(2*span);
    this.playDirection=phase<span?1:-1;
    this.applyChain(lower+(phase<=span?phase:2*span-phase));
    return true;
  }

  get animating(): boolean { return this.animation!==null||this.playing||this.goals.size>0||this.segments.length>0; }

  reset(): void {
    this.pause();
    this.source='idle';
    for(const [name] of this.joints)this.setJointAngle(name,0);
    this.applyChain(0);
    this.targetAngle=0;
  }

  /** Temporarily evaluates one angle and restores the previous pose synchronously. */
  preview<T>(degrees:number,read:()=>T):T {
    const previous=this.capture();
    const target=this.targetAngle;
    try{this.applyChain(degrees);return read();}
    finally{this.restore(previous);this.targetAngle=target;}
  }

  private capture():PoseSnapshot {return {angles:new Map([...this.joints].map(([name,state])=>[name,state.angle])),root:this.root.position.clone(),drop:this.pelvisDrop};}
  private restore(pose:PoseSnapshot):void {
    for(const [name,angle] of pose.angles)this.setJointAngle(name,angle);
    this.root.position.copy(pose.root);this.pelvisDrop=pose.drop;this.model.updateMatrixWorld(true);
  }

  private setJointAngle(name:string,degrees:number):void {
    const state=this.joints.get(name);
    if(!state)return;
    state.angle=THREE.MathUtils.clamp(degrees,state.lower,state.upper);
    const delta=new THREE.Quaternion().setFromAxisAngle(state.axis,THREE.MathUtils.degToRad(state.angle));
    state.node.quaternion.copy(state.base).multiply(delta);
  }

  private applyChain(kneeDegrees:number):void {
    const {jointNames,motion}=this.config;
    this.root.position.copy(this.rootBase);
    this.setJointAngle(jointNames.leftHipPitch,kneeDegrees*motion.hipCompensationRatio);
    this.setJointAngle(jointNames.leftKnee,kneeDegrees);
    this.setJointAngle(jointNames.leftAnklePitch,kneeDegrees*motion.ankleCompensationRatio);
    const footRise=this.movingFoot.getWorldPosition(new THREE.Vector3()).y-this.movingFootBaseHeight;
    const desiredDrop=THREE.MathUtils.clamp(footRise,0,motion.maximumPelvisDropMeters);
    const ankleRatio=motion.supportAnklePitchDegrees/motion.supportKneeDegrees;
    const hipRatio=-1-ankleRatio;
    const footPosition=new THREE.Vector3();
    const supportAt=(angle:number):number=>{
      this.setJointAngle(jointNames.rightHipPitch,angle*hipRatio);
      this.setJointAngle(jointNames.rightKnee,angle);
      this.setJointAngle(jointNames.rightAnklePitch,angle*ankleRatio);
      // Only the support foot's ancestor path changed in this solve iteration.
      // getWorldPosition refreshes that path; the whole tree is updated once below.
      return this.supportFoot.getWorldPosition(footPosition).y-this.supportAnchor.y;
    };
    let lower=0,upper=motion.supportKneeDegrees;
    for(let iteration=0;iteration<10;iteration++){
      const middle=(lower+upper)/2;
      if(supportAt(middle)<desiredDrop)lower=middle;else upper=middle;
    }
    supportAt(desiredDrop===0?0:lower);
    const anchorLocal=this.root.parent!.worldToLocal(this.supportAnchor.clone());
    const currentLocal=this.root.parent!.worldToLocal(footPosition.clone());
    this.root.position.add(anchorLocal.sub(currentLocal));
    this.pelvisDrop=Math.max(0,this.rootBase.y-this.root.position.y);
    this.model.updateMatrixWorld(true);
  }
}
