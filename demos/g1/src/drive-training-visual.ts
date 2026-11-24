import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {TRAINING_GATES,TRAINING_OBSTACLES,trainingLayout} from './drive-training-layout';

/** All pillars share the authored geometry; collisions use the same base footprints. */
export class DriveTrainingVisual {
 readonly group=new THREE.Group();revision=0;
 private fallback=new THREE.Group();
 private readonly pillars=new THREE.Group();
 private detailed=false;
 private gateMarkers:THREE.Mesh[]=[];
 private previous='';
 constructor(){
  this.group.name='training-yard';
  const pillars=TRAINING_OBSTACLES.filter(o=>o.id!=='转角护墙');
  const body=new THREE.BoxGeometry(.36,1.40,.36),foot=new THREE.BoxGeometry(.42,.06,.42);
  const green=new THREE.MeshStandardMaterial({color:0x466b5b,roughness:.55}),cream=new THREE.MeshStandardMaterial({color:0xe7e1c8,roughness:.65});
  for(const [geometry,material,y]of [[body,green,.75],[foot,green,.03],[new THREE.BoxGeometry(.38,.10,.38),cream,1.10],[new THREE.BoxGeometry(.38,.10,.38),cream,.40]] as const){
   const mesh=new THREE.InstancedMesh(geometry,material,pillars.length);
   pillars.forEach((o,i)=>mesh.setMatrixAt(i,new THREE.Matrix4().compose(new THREE.Vector3(o.x+o.width/2,y,o.z+o.depth/2),new THREE.Quaternion(),new THREE.Vector3(o.width/.42,1,o.depth/.42))));this.fallback.add(mesh);
  }
  this.group.add(this.fallback,this.pillars);
  new GLTFLoader().load('../assets/training/pillar.glb',gltf=>{
   if(!this.detailed)this.installPillars(gltf.scene,'ND-pillar-instances','loaded');
  },undefined,()=>{if(!this.detailed)this.group.userData.asset='fallback';});
  for(const o of TRAINING_OBSTACLES.filter(o=>o.id==='转角护墙')){
   const wall=new THREE.Mesh(new THREE.BoxGeometry(o.width,.78,o.depth),new THREE.MeshStandardMaterial({color:0xbcc8b5,roughness:.9}));wall.position.set(o.x+o.width/2,.39,o.z+o.depth/2);this.group.add(wall);
  }
  TRAINING_GATES.forEach((g,i)=>{
   this.line(g.x,g.z,g.width,.045,0xe5d9aa);
   const marker=this.tag(`${['练习','考核','进阶'][i]}  ${g.width.toFixed(2)}m`,1.5,.32);marker.position.set(g.x,.018,14.45);this.group.add(marker);this.gateMarkers.push(marker);
  });
  const layout=trainingLayout('practice'),b=layout.docking;
  for(const x of [b.minX,b.maxX])this.line(x,(b.minZ+b.maxZ)/2,.035,b.maxZ-b.minZ,0xf2ebd1);
  for(const z of [b.minZ,b.maxZ])this.line((b.minX+b.maxX)/2,z,b.maxX-b.minX,.035,0xf2ebd1);
  const stop=this.tag('停靠 →',1,.38);stop.position.set(layout.parking.x,.02,layout.parking.z);this.group.add(stop);
  const zones=[['S形柱阵',-4.8,3.5,3],['窄道 / 三档',0,13.6,2.6],['直角弯',4.7,18.1,1.8],['侧移 → 停靠',8.2,18.45,3]] as const;
  for(const [name,x,z,width] of zones){const tag=this.tag(name,width,.38);tag.position.set(x,.018,z);this.group.add(tag);}
  for(const p of layout.slalom)this.line(p.x,p.z,.55,.035,0xc0a56d);
  for(let x=6.45;x<7.6;x+=.2)this.line(x,17.3,.10,.035,0xc0a56d);
 }
 installNearfield(template:THREE.Object3D):void{
  this.detailed=true;
  this.installPillars(template,'nearfield-pillar-instances','nearfield');
 }
 private installPillars(template:THREE.Object3D,name:string,asset:string):void{
  for(const old of this.pillars.children)if(old instanceof THREE.InstancedMesh)old.dispose();
  this.pillars.clear();
  template.updateWorldMatrix(true,true);
  const local=template.matrixWorld.clone().invert();
  const fixtures=TRAINING_OBSTACLES.filter(o=>o.id!=='转角护墙');
  template.traverse(node=>{
   if(!(node instanceof THREE.Mesh))return;
   const basis=new THREE.Matrix4().multiplyMatrices(local,node.matrixWorld);
   const mesh=new THREE.InstancedMesh(node.geometry,node.material,fixtures.length);
   fixtures.forEach((o,i)=>mesh.setMatrixAt(i,new THREE.Matrix4().compose(new THREE.Vector3(o.x+o.width/2,0,o.z+o.depth/2),new THREE.Quaternion(),new THREE.Vector3(o.width/.42,1,o.depth/.42)).multiply(basis)));
   mesh.name=name;this.pillars.add(mesh);
  });
  this.fallback.visible=false;this.group.userData.asset=asset;this.revision++;
 }
 private line(x:number,z:number,w:number,d:number,color:number):void{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({color}));m.rotation.x=-Math.PI/2;m.position.set(x,.012,z);this.group.add(m);}
 private tag(copy:string,w:number,h:number):THREE.Mesh{
  const canvas=document.createElement('canvas');canvas.width=768;canvas.height=128;const c=canvas.getContext('2d')!;
  c.fillStyle='#476355';c.font='600 64px Microsoft YaHei, sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(copy,384,64);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));mesh.rotation.x=-Math.PI/2;return mesh;
 }
 update(level:string):void{if(level===this.previous)return;this.previous=level;this.gateMarkers.forEach((m,i)=>{(m.material as THREE.MeshBasicMaterial).opacity=TRAINING_GATES[i].level===level?1:.45;});this.revision++;}
}
