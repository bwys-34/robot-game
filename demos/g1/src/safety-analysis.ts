import * as THREE from 'three';
import type { RobotMapping } from './robot-mapping';
import { analyzeBalance, convexHull, footprintForLinks, linkCenterOfMass, type BalanceResult } from './balance-analysis';
import { boxesByLink, CollisionDetector, type CollisionPairResult } from './collision-analysis';
import type { G1InteractionConfig } from './interaction-config';
import { PoseChain } from './pose-chain';

export interface SafetySnapshot {
  balance:BalanceResult;
  collisions:CollisionPairResult[];
  com:THREE.Vector3;
  supportMode:'double'|'single'|'none';
  contactPlaneY:number;
  severity:'normal'|'caution'|'danger';
  overlapCollision?:CollisionPairResult;
}
export interface SafetyRange { min:number; max:number; }
export interface SafetyScan { support:SafetyRange; collision:SafetyRange; combined:SafetyRange; samples:number; }

function contiguousRange(samples:Array<{angle:number;safe:boolean}>,anchor=0):SafetyRange {
  const sorted=[...samples].sort((a,b)=>a.angle-b.angle);
  const index=sorted.findIndex(sample=>Math.abs(sample.angle-anchor)<1e-6);
  if(index<0||!sorted[index].safe)return {min:anchor,max:anchor};
  let start=index,end=index;
  while(start>0&&sorted[start-1].safe)start--;
  while(end<sorted.length-1&&sorted[end+1].safe)end++;
  return {min:sorted[start].angle,max:sorted[end].angle};
}

export class SafetyAnalyzer {
  readonly model:THREE.Object3D;
  readonly mapping:RobotMapping;
  readonly pose:PoseChain;
  readonly config:G1InteractionConfig;
  readonly collisions:CollisionDetector;
  readonly groundY=0;
  scan:SafetyScan;
  last:SafetySnapshot;

  constructor(model:THREE.Object3D,mapping:RobotMapping,pose:PoseChain,config:G1InteractionConfig){
    this.model=model;this.mapping=mapping;this.pose=pose;this.config=config;
    this.collisions=new CollisionDetector(mapping,config.safety);
    this.last=this.evaluateRaw();
    this.scan=this.scanRanges();
  }

  evaluate():SafetySnapshot { this.last=this.evaluateRaw(); return this.last; }

  scanRanges():SafetyScan {
    const knee=this.pose.joints.get(this.config.jointNames.leftKnee)!;
    const step=this.config.safety.scanStepDegrees;
    if(!Number.isFinite(step)||step<=0)throw new Error('Invalid safety scan step');
    const samples:number[]=[];
    for(let angle=knee.lower;angle<knee.upper;angle+=step)samples.push(angle);
    samples.push(knee.upper);
    samples.push(0);
    const results=samples.map(angle=>this.pose.preview(angle,()=>({angle,result:this.evaluateRaw()})));
    const support=results.map(({angle,result})=>({angle,safe:result.balance.state!=='outside'}));
    const collision=results.map(({angle,result})=>({angle,safe:!result.overlapCollision}));
    const supportRange=contiguousRange(support);
    const collisionRange=contiguousRange(collision);
    const combined={min:Math.max(supportRange.min,collisionRange.min),max:Math.min(supportRange.max,collisionRange.max)};
    if(combined.min>combined.max){combined.min=0;combined.max=0;}
    this.model.updateMatrixWorld(true);
    this.last=this.evaluateRaw();
    return {support:supportRange,collision:collisionRange,combined,samples:samples.length};
  }

  private evaluateRaw():SafetySnapshot {
    this.model.updateMatrixWorld(true);
    const mass=linkCenterOfMass(this.model,[...this.mapping.links.values()]);
    const footNames=[this.config.jointNames.movingFoot,this.config.jointNames.supportFoot];
    const feet=footNames.map(name=>({name,object:this.mapping.links.get(name)})).filter(item=>item.object) as Array<{name:string;object:THREE.Object3D}>;
    const boxes=boxesByLink(new Map(feet.map(item=>[item.name,this.mapping.meshesByLink.get(item.name)??[]])));
    const contacting=feet.filter(item=>Math.abs(boxes.get(item.name)!.min.y-this.groundY)<=this.config.safety.footContactHeightMeters);
    const supportLinks=contacting;
    const contactPlaneY=contacting.length?Math.max(this.groundY,Math.min(...contacting.map(item=>boxes.get(item.name)!.min.y))):this.groundY;
    const points=supportLinks.flatMap(item=>footprintForLinks([item.object],this.groundY,this.config.safety.footContactHeightMeters));
    const polygon=convexHull(points);
    const balance=analyzeBalance({
      projection:{x:mass.center.x,z:mass.center.z},polygon,margin:this.config.safety.supportMarginMeters,
      approximate:mass.approximate||contacting.length===0,
    });
    const collisions=this.collisions.evaluate();
    const overlapCollision=collisions.find(result=>result.state==='overlap');
    const severity=balance.state==='outside'||overlapCollision?'danger':balance.state==='near'||collisions.some(pair=>pair.state==='near')?'caution':'normal';
    return {balance,collisions,com:mass.center,supportMode:contacting.length===2?'double':contacting.length===1?'single':'none',contactPlaneY,severity,overlapCollision};
  }
}
