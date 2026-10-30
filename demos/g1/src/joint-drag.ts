import * as THREE from 'three';
import type { PoseChain } from './pose-chain';

export function jointDragHandle(pose:PoseChain,name:string):THREE.Object3D|undefined {
  const side=name.startsWith('left_')?'left':'right';
  const link=/shoulder|elbow|wrist/.test(name)?`${side}_rubber_hand`
    :/hip|knee|ankle/.test(name)?`${side}_ankle_roll_link`:'head_link';
  return pose.model.getObjectByName(link);
}

/** Sample once at gesture start. No inverse solver or per-frame full-pose scan. */
export function jointDragDirection(pose:PoseChain,camera:THREE.Camera,name:string,fallback:'x'|'y'):THREE.Vector2 {
  const handle=jointDragHandle(pose,name),defaultDirection=new THREE.Vector2(fallback==='x'?1:0,fallback==='y'?-1:0);
  if(!handle||name.includes('wrist'))return defaultDirection;
  camera.updateMatrixWorld(true);
  const angles=Object.fromEntries([...pose.joints.keys()].map(name=>[name,pose.getAngle(name)]));
  const range=pose.getInteractionRange(name),angle=angles[name];
  const sample=(value:number)=>pose.previewPose({...angles,[name]:THREE.MathUtils.clamp(value,range.min,range.max)},()=>handle.getWorldPosition(new THREE.Vector3()).project(camera));
  const a=sample(angle-12),b=sample(angle+12);
  const direction=new THREE.Vector2(b.x-a.x,a.y-b.y);
  // Rotation directly into the camera is visually ambiguous; keep a stable fallback.
  return direction.lengthSq()>1e-6?direction.normalize():defaultDirection;
}
