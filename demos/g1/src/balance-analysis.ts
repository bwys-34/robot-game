import * as THREE from 'three';

export interface GroundPoint { x:number; z:number; }
export interface BalanceResult {
  state: 'balanced'|'near'|'outside';
  projection: THREE.Vector3;
  polygon: GroundPoint[];
  marginMeters: number;
  approximate: boolean;
}

function cross(o:GroundPoint,a:GroundPoint,b:GroundPoint):number { return (a.x-o.x)*(b.z-o.z)-(a.z-o.z)*(b.x-o.x); }

export function convexHull(points:GroundPoint[]):GroundPoint[] {
  const sorted=[...points].sort((a,b)=>a.x-b.x||a.z-b.z);
  if(sorted.length<=1)return sorted;
  const lower:GroundPoint[]=[];
  for(const point of sorted){while(lower.length>=2&&cross(lower[lower.length-2],lower[lower.length-1],point)<=0)lower.pop();lower.push(point);}
  const upper:GroundPoint[]=[];
  for(let i=sorted.length-1;i>=0;i--){const point=sorted[i];while(upper.length>=2&&cross(upper[upper.length-2],upper[upper.length-1],point)<=0)upper.pop();upper.push(point);}
  lower.pop(); upper.pop(); return lower.concat(upper);
}

export function pointInPolygon(point:GroundPoint,polygon:GroundPoint[]):boolean {
  if(polygon.length<3)return false;
  let sign=0;
  for(let i=0;i<polygon.length;i++){
    const value=cross(polygon[i],polygon[(i+1)%polygon.length],point);
    if(Math.abs(value)<1e-8)continue;
    if(!sign)sign=value>0?1:-1;
    else if((value>0?1:-1)!==sign)return false;
  }
  return true;
}

function segmentDistance(point:GroundPoint,a:GroundPoint,b:GroundPoint):number {
  const dx=b.x-a.x,dz=b.z-a.z;
  const t=Math.max(0,Math.min(1,((point.x-a.x)*dx+(point.z-a.z)*dz)/(dx*dx+dz*dz||1)));
  return Math.hypot(point.x-(a.x+t*dx),point.z-(a.z+t*dz));
}

export function distanceToPolygon(point:GroundPoint,polygon:GroundPoint[]):number {
  if(!polygon.length)return Infinity;
  let distance=Infinity;
  for(let i=0;i<polygon.length;i++)distance=Math.min(distance,segmentDistance(point,polygon[i],polygon[(i+1)%polygon.length]));
  return distance;
}

export function analyzeBalance({projection,polygon,margin,approximate=false}:{projection:{x:number;z:number};polygon:GroundPoint[];margin:number;approximate?:boolean}):BalanceResult {
  const point={x:projection.x,z:projection.z};
  const inside=pointInPolygon(point,polygon);
  const distance=distanceToPolygon(point,polygon);
  return {
    state:inside ? (distance<=margin?'near':'balanced') : 'outside',
    projection:new THREE.Vector3(projection.x,0,projection.z), polygon, marginMeters:distance, approximate,
  };
}

export function linkCenterOfMass(model:THREE.Object3D, links:THREE.Object3D[]):{center:THREE.Vector3;approximate:boolean;mass:number} {
  const total=new THREE.Vector3(); let totalMass=0; let approximate=false;
  for(const link of links){
    const mass=Number(link.userData.mass);
    const local=Array.isArray(link.userData.centerOfMass) ? new THREE.Vector3().fromArray(link.userData.centerOfMass) : null;
    if(Number.isFinite(mass)){
      if(mass>0&&local){total.add(link.localToWorld(local.clone()).multiplyScalar(mass));totalMass+=mass;}
      else if(mass>0)approximate=true;
    } else approximate=true;
  }
  if(!totalMass||approximate){const box=new THREE.Box3().setFromObject(model);return {center:box.getCenter(new THREE.Vector3()),approximate:true,mass:0};}
  return {center:total.multiplyScalar(1/totalMass),approximate:false,mass:totalMass};
}

export function footprintForLinks(links:THREE.Object3D[],groundY:number,contactHeight=.045):GroundPoint[] {
  const points:GroundPoint[]=[];
  for(const link of links){const box=new THREE.Box3().setFromObject(link); if(box.isEmpty())continue;
    if(box.min.y>groundY+contactHeight)continue;
    // Four ground-facing corners keep the support outline inexpensive and stable.
    for(const x of [box.min.x,box.max.x]) for(const z of [box.min.z,box.max.z]) points.push({x,z});
  }
  return convexHull(points);
}
