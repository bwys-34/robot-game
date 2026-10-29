import * as THREE from 'three';
import type { RobotMapping } from './robot-mapping';
import type { CollisionPairResult } from './collision-analysis';

function affectedBy(link:THREE.Object3D|undefined,joint:THREE.Object3D|undefined):boolean {
  if(!joint)return false;
  for(let node=link;node;node=node.parent??undefined)if(node===joint)return true;
  return false;
}

/** Prefer actual overlaps, then the collision influenced by the selected joint. */
export function chooseWarningLink(pairs:CollisionPairResult[],mapping:RobotMapping,activeJoint:string):string|undefined {
  const joint=mapping.joints.get(activeJoint);
  const ranked=pairs.filter(pair=>pair.state!=='clear').map(pair=>{
    const first=affectedBy(mapping.links.get(pair.first),joint),second=affectedBy(mapping.links.get(pair.second),joint);
    return {link:second&&!first?pair.second:pair.first,score:(pair.state==='overlap'?100:0)+(first||second?10:0)};
  }).sort((a,b)=>b.score-a.score);
  return ranked[0]?.link;
}

/** Use this link's own meshes, so children (hands, fingers) do not move the anchor. */
export function warningAnchorPoint(mapping:RobotMapping,linkName:string):THREE.Vector3 {
  const box=new THREE.Box3();
  for(const mesh of mapping.meshesByLink.get(linkName)??[]){
    mesh.updateWorldMatrix(true,false);
    if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
    box.union(mesh.geometry.boundingBox!.clone().applyMatrix4(mesh.matrixWorld));
  }
  if(box.isEmpty())return mapping.links.get(linkName)?.getWorldPosition(new THREE.Vector3())??new THREE.Vector3();
  return new THREE.Vector3((box.min.x+box.max.x)/2,box.max.y+.012,(box.min.z+box.max.z)/2);
}

/** Pixel position is relative to the viewer. Off-screen/behind-camera labels hide. */
export function projectWarningAnchor(point:THREE.Vector3,camera:THREE.Camera,width:number,height:number,labelWidth:number,labelHeight:number):{x:number;y:number}|null {
  camera.updateMatrixWorld();
  const screen=point.clone().project(camera);
  if(!Number.isFinite(screen.x)||screen.z< -1||screen.z>1||Math.abs(screen.x)>1||Math.abs(screen.y)>1)return null;
  const half=Math.min(labelWidth/2,Math.max(0,width/2-12));
  const x=THREE.MathUtils.clamp((screen.x*.5+.5)*width,half+12,width-half-12);
  const y=THREE.MathUtils.clamp((-screen.y*.5+.5)*height-12,Math.min(height-12,labelHeight+12),height-12);
  return {x,y};
}
