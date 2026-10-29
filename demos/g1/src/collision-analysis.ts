import * as THREE from 'three';
import { OBB } from 'three/examples/jsm/math/OBB.js';
import type { CollisionPairConfig,G1InteractionConfig } from './interaction-config';
import type { RobotMapping } from './robot-mapping';

export interface CollisionPairResult extends CollisionPairConfig { state:'clear'|'near'|'overlap'; distance:number; }

export function boxClearance(a:THREE.Box3,b:THREE.Box3):number {
  if(a.intersectsBox(b)){
    return -Math.min(a.max.x-b.min.x,b.max.x-a.min.x,a.max.y-b.min.y,b.max.y-a.min.y,a.max.z-b.min.z,b.max.z-a.min.z);
  }
  const x=Math.max(a.min.x-b.max.x,b.min.x-a.max.x,0);
  const y=Math.max(a.min.y-b.max.y,b.min.y-a.max.y,0);
  const z=Math.max(a.min.z-b.max.z,b.min.z-a.max.z,0);
  return Math.hypot(x,y,z);
}

export function checkCollisionPair(first:THREE.Box3,second:THREE.Box3,margin:number,baselineClearance?:number):Pick<CollisionPairResult,'state'|'distance'> {
  const clearance=boxClearance(first,second);
  const distance=Math.max(0,clearance);
  if(baselineClearance!==undefined&&baselineClearance<0){
    // URDF visual bounds often meet at a joint. Only report newly increased overlap.
    const addedPenetration=baselineClearance-clearance;
    return {distance,state:addedPenetration>margin?'overlap':addedPenetration>margin*.3?'near':'clear'};
  }
  return {distance,state:clearance<0?'overlap':clearance<=margin?'near':'clear'};
}

export function checkCollisionPairs(boxes:Map<string,THREE.Box3>,pairs:CollisionPairConfig[],margin:number,baseline=new Map<string,number>()):CollisionPairResult[] {
  return pairs.map(pair=>{
    const first=boxes.get(pair.first),second=boxes.get(pair.second);
    if(!first||!second)return {...pair,state:'clear',distance:Infinity};
    return {...pair,...checkCollisionPair(first,second,margin,baseline.get(pair.id))};
  });
}

export function boxesByLink(meshesByLink:Map<string,THREE.Object3D[]>):Map<string,THREE.Box3> {
  const boxes=new Map<string,THREE.Box3>();
  for(const [name,objects] of meshesByLink){const box=new THREE.Box3(); for(const object of objects)box.expandByObject(object); if(!box.isEmpty())boxes.set(name,box);}
  return boxes;
}

interface CollisionProxy { link:THREE.Object3D;local:OBB;world:OBB; }

export class CollisionDetector {
  private readonly proxies=new Map<string,CollisionProxy>();
  private readonly safety:G1InteractionConfig['safety'];
  private readonly expanded=new OBB();

  constructor(mapping:RobotMapping,safety:G1InteractionConfig['safety']){
    this.safety=safety;
    // Index only configured key pairs (legs + torso/arms), never all model pairs.
    mapping.links.forEach(link=>link.updateWorldMatrix(true,false));
    const names=new Set(safety.collisionPairs.flatMap(pair=>[pair.first,pair.second]));
    for(const name of names){
      const link=mapping.links.get(name);
      if(!link)throw new Error(`Missing collision link: ${name}`);
      const box=new THREE.Box3(),inverse=link.matrixWorld.clone().invert();
      for(const mesh of mapping.meshesByLink.get(name)??[]){
        if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
        box.union(mesh.geometry.boundingBox!.clone().applyMatrix4(inverse.clone().multiply(mesh.matrixWorld)));
      }
      if(box.isEmpty())throw new Error(`Missing collision geometry: ${name}`);
      const local=new OBB().fromBox3(box);
      local.halfSize.multiply(new THREE.Vector3(...(safety.collisionProxyScale[name]??[1,1,1])));
      this.proxies.set(name,{link,local,world:new OBB()});
    }
  }

  evaluate():CollisionPairResult[]{
    for(const proxy of this.proxies.values()){
      proxy.world.copy(proxy.local).applyMatrix4(proxy.link.matrixWorld);
      // Three r160 OBB.applyMatrix4 changes orientation/size, but only translates its center.
      proxy.world.center.copy(proxy.local.center).applyMatrix4(proxy.link.matrixWorld);
    }
    return this.safety.collisionPairs.map(pair=>{
      const first=this.proxies.get(pair.first)!.world,second=this.proxies.get(pair.second)!.world;
      if(first.intersectsOBB(second))return {...pair,state:'overlap',distance:0};
      this.expanded.copy(first);this.expanded.halfSize.addScalar(pair.marginMeters??this.safety.collisionMarginMeters);
      return {...pair,state:this.expanded.intersectsOBB(second)?'near':'clear',distance:NaN};
    });
  }
}
