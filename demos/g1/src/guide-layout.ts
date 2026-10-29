import * as THREE from 'three';

/** Fit the entire guide circle (including model tilt/scale) above a world ground plane. */
export function guideRadiusAboveGround(matrix:THREE.Matrix4,center:THREE.Vector3,axis:THREE.Vector3,preferredRadius:number,groundY:number,clearance:number):number {
  const origin=center.clone().applyMatrix4(matrix);
  const neutral=new THREE.Vector3(0,-1,0);
  const tangent=new THREE.Vector3().crossVectors(axis,neutral).normalize();
  const verticalA=center.clone().add(neutral).applyMatrix4(matrix).y-origin.y;
  const verticalB=center.clone().add(tangent).applyMatrix4(matrix).y-origin.y;
  const verticalRadius=Math.hypot(verticalA,verticalB);
  if(origin.y<=groundY+clearance)return 0;
  return Math.min(preferredRadius,(origin.y-groundY-clearance)/Math.max(verticalRadius,1e-9));
}
