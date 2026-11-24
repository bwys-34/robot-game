import * as THREE from 'three';
import {DRIVE_SPACES} from './drive-config';

export const SITE_WALLS=['gallery-back','gallery-left','gallery-right','lab-back','lab-right'] as const;
type SiteWall=typeof SITE_WALLS[number];
type Surface=SiteWall|'exterior'|'planter';
export type TrainingSite=Map<Surface,THREE.Object3D>;
interface Bounds {minX:number;maxX:number;minY:number;maxY:number;minZ:number;maxZ:number;}

export function readTrainingSite(model:THREE.Group):TrainingSite{
  const parts:TrainingSite=new Map();
  for(const key of [...SITE_WALLS,'exterior','planter'] as const){
    const part=model.getObjectByName('site-'+key);
    if(!part?.children.length)throw new Error(`Missing training-ground part: ${key}`);
    parts.set(key,part);
  }
  return parts;
}

// The export batches by material, not by room. Keep only surfaces that fit the live floor plan.
export function siteSurface(material:string,b:Bounds):Surface|undefined{
  const {gallery:g,lab:l,door,courtyard:c}=DRIVE_SPACES;
  const near=(min:number,max:number,value:number,tolerance:number)=>min>=value-tolerance&&max<=value+tolerance;
  if(material.startsWith('Surround'))return 'exterior';
  const outside=b.maxX<=c.minX+.01||b.minX>=c.maxX-.01||b.minZ>=c.maxZ-.01;
  if(outside&&/^(Yard ·|West \/|Bed \/|Mineral paint)/.test(material))return 'exterior';
  if(b.maxX<=c.minX+.8&&/^(Young olive \/|Tree \/)/.test(material))return 'exterior';
  if(/^(Foliage|Planting substrate)/.test(material)&&b.minX>=2.70&&b.maxX<=3.40&&b.minZ>=5.26&&b.maxZ<=10.1)return 'planter';
  if(!/^(Mineral paint|Wall panel|Low iron|Opal diffuser|Brushed warm alloy|Thermally treated ash|Graphite|Satin anodised)/.test(material))return;
  if(b.maxY<.05||b.minX<g.minX-.18||b.maxX>l.maxX+.18||b.minZ<g.minZ-.20||b.maxZ>g.maxZ+.03)return;
  if(near(b.minZ,b.maxZ,g.minZ,.18)){
    if(b.maxX<=g.maxX+.025)return 'gallery-back';
    if(b.minX>=l.minX-.025)return 'lab-back';
  }
  if(near(b.minX,b.maxX,g.minX,.16))return 'gallery-left';
  if(near(b.minX,b.maxX,l.maxX,.16))return 'lab-right';
  if(near(b.minX,b.maxX,door.x,.105)&&
    (b.maxZ<=door.minZ+.012||b.minZ>=door.maxZ-.012||b.minY>=door.height-.01))return 'gallery-right';
}

export function buildTrainingSite(model:THREE.Group):Map<Surface,THREE.Group>{
  const grounds=model.getObjectByName('Visitor_grounds');
  if(!grounds)throw new Error('Missing Visitor_grounds');
  model.updateMatrixWorld(true);
  const groups=new Map<Surface,THREE.Group>();
  const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
  grounds.traverse(mesh=>{
    if(!(mesh instanceof THREE.Mesh)||Array.isArray(mesh.material))return;
    const {geometry,material}=mesh,index=geometry.index,pos=geometry.getAttribute('position');
    const buckets=new Map<Surface,number[]>();
    for(let i=0,count=index?.count??pos.count;i<count;i+=3){
      const ia=index?index.getX(i):i,ib=index?index.getX(i+1):i+1,ic=index?index.getX(i+2):i+2;
      a.fromBufferAttribute(pos,ia).applyMatrix4(mesh.matrixWorld);
      b.fromBufferAttribute(pos,ib).applyMatrix4(mesh.matrixWorld);
      c.fromBufferAttribute(pos,ic).applyMatrix4(mesh.matrixWorld);
      const key=siteSurface(material.name,{
        minX:Math.min(a.x,b.x,c.x),maxX:Math.max(a.x,b.x,c.x),minY:Math.min(a.y,b.y,c.y),maxY:Math.max(a.y,b.y,c.y),
        minZ:Math.min(a.z,b.z,c.z),maxZ:Math.max(a.z,b.z,c.z),
      });
      if(!key)continue;
      let bucket=buckets.get(key);if(!bucket)buckets.set(key,bucket=[]);bucket.push(ia,ib,ic);
    }
    for(const [key,indices] of buckets){
      const part=new THREE.BufferGeometry();
      const remap=new Map<number,number>(),used:number[]=[];
      part.setIndex(indices.map(original=>{
        let mapped=remap.get(original);
        if(mapped===undefined){remap.set(original,mapped=used.length);used.push(original);}
        return mapped;
      }));
      for(const [name,attr] of Object.entries(geometry.attributes)){
        const array=new Float32Array(used.length*attr.itemSize);
        used.forEach((vertex,i)=>{for(let k=0;k<attr.itemSize;k++)array[i*attr.itemSize+k]=attr.getComponent(vertex,k);});
        part.setAttribute(name,new THREE.BufferAttribute(array,attr.itemSize));
      }
      const surface=new THREE.Mesh(part,material);surface.applyMatrix4(mesh.matrixWorld);
      let group=groups.get(key);if(!group){group=new THREE.Group();group.name='site-'+key;groups.set(key,group);}
      group.add(surface);
    }
  });
  if(!groups.has('gallery-back')||!groups.has('lab-back'))throw new Error('Missing training-ground walls');
  return groups;
}
