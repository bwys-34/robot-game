import * as THREE from 'three';
import {RECEPTION_CONFIG} from './drive-reception';
import {DRIVE_CONFIG} from './drive-config';
import type {DriveState} from './drive-state';

/** Fixed geometry, no per-frame texture creation or physics. */
export class DriveReceptionVisual {
  readonly group=new THREE.Group();
  revision=0;
  private time=0;private last='';
  private readonly rings:THREE.Mesh[]=[];
  private readonly badges:THREE.Sprite[]=[];
  private readonly goal:THREE.Mesh;
  private readonly facing=new THREE.ArrowHelper(new THREE.Vector3(0,0,-1),new THREE.Vector3(),.6,0x4c8660,.17,.12);
  private readonly response=new THREE.Group();
  private readonly arm=new THREE.Group();
  private readonly direction=new THREE.Vector3();
  constructor(){
    const c=RECEPTION_CONFIG,o=c.obstacle;
    const plinth=new THREE.Mesh(new THREE.BoxGeometry(o.width,.45,o.depth),new THREE.MeshStandardMaterial({color:0xb5bc99,roughness:.85}));
    plinth.position.set(o.x+o.width/2,.225,o.z+o.depth/2);
    const cap=new THREE.Mesh(new THREE.BoxGeometry(o.width,.025,o.depth),new THREE.MeshStandardMaterial({color:0xe7dcae,roughness:.8}));cap.position.copy(plinth.position).setY(.463);
    const display=new THREE.Mesh(new THREE.TorusGeometry(.17,.045,8,24),new THREE.MeshStandardMaterial({color:0xc2a05a,roughness:.5,metalness:.2}));display.position.copy(plinth.position).setY(.70);display.rotation.y=Math.PI/4;
    this.group.add(plinth,cap,display);
    for(const [i,p]of c.route.entries()){
      const ring=this.ring(p.radius,0xbe9c4e);ring.position.set(p.x,.012,p.z);this.rings.push(ring);this.group.add(ring);
      const badge=this.badge(String(i+1));badge.position.set(p.x,.28,p.z);this.badges.push(badge);this.group.add(badge);
    }
    this.goal=this.ring(c.parking.radius,0xc6a14b);this.goal.position.set(c.parking.x,.014,c.parking.z);this.group.add(this.goal);
    const label=this.badge('接待');label.scale.set(.48,.27,1);label.position.set(c.parking.x,.065,c.parking.z);this.group.add(label);
    // The route follows the clear corridor, rather than drawing through the obstacle.
    const points=[DRIVE_CONFIG.spawn,...c.route,c.parking].map(p=>new THREE.Vector3(p.x,.008,p.z));
    const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineDashedMaterial({color:0xb5a16b,dashSize:.08,gapSize:.08,transparent:true,opacity:.55}));line.computeLineDistances();this.group.add(line,this.facing);
    const sleeve=new THREE.Mesh(new THREE.CylinderGeometry(.037,.045,.34,8),new THREE.MeshStandardMaterial({color:0xc4a67b,roughness:.95}));sleeve.position.y=.17;this.arm.add(sleeve);
    const hand=new THREE.Mesh(new THREE.SphereGeometry(.045,8,6),new THREE.MeshStandardMaterial({color:0xead9b8}));hand.position.y=.37;this.arm.add(hand);this.arm.position.set(-.13,.78,0);this.arm.rotation.z=.4;
    this.response.add(this.arm);this.response.position.set(c.visitor.x,0,c.visitor.z);this.group.add(this.response);
    this.group.visible=false;
  }
  private ring(radius:number,color:number):THREE.Mesh{
    const mesh=new THREE.Mesh(new THREE.RingGeometry(radius,radius+.035,40),new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,transparent:true,opacity:.8,depthWrite:false}));mesh.rotation.x=-Math.PI/2;return mesh;
  }
  private badge(text:string):THREE.Sprite{
    const canvas=document.createElement('canvas');canvas.width=192;canvas.height=96;
    const ctx=canvas.getContext('2d')!;ctx.fillStyle='#eee6c9';ctx.fillRect(4,4,184,88);ctx.strokeStyle='#baa063';ctx.lineWidth=3;ctx.strokeRect(4,4,184,88);ctx.fillStyle='#755d2e';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 43px "Microsoft YaHei",sans-serif';ctx.fillText(text,96,50);
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false}));sprite.scale.set(.32,.16,1);return sprite;
  }
  update(dt:number,s:DriveState,reduced:boolean):void{
    const active=s.experience==='reception',r=s.reception;this.group.visible=active;
    if(active&&s.running&&!s.paused&&!reduced)this.time+=dt;
    const key=`${active}:${r.step}:${r.routeIndex}:${s.x}:${s.z}:${s.yaw}:${this.time}`;
    if(key!==this.last){this.revision++;this.last=key;}
    if(!active)return;
    this.rings.forEach((ring,i)=>{
      const current=r.step==='route'&&i===r.routeIndex,done=i<r.routeIndex;
      const material=ring.material as THREE.MeshBasicMaterial;material.color.setHex(done?0x57916c:0xbe9c4e);material.opacity=current?.75+Math.sin(this.time*2)*.15:done?.4:.3;
      this.badges[i].visible=!done;
    });
    const done=r.step==='complete',material=this.goal.material as THREE.MeshBasicMaterial;
    material.color.setHex(done||r.step==='greet'?0x479262:0xc6a14b);material.opacity=r.routeComplete?.8:.28;
    this.facing.visible=['face','greet','complete'].includes(r.step);
    this.facing.position.set(s.x,.035,s.z);this.facing.setDirection(this.direction.set(Math.sin(s.yaw),0,Math.cos(s.yaw)));
    this.response.visible=done;this.arm.rotation.z=.5+(reduced?0:Math.sin(this.time*4)*.25);
  }
}
