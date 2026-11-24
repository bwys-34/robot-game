import * as THREE from 'three';
import {STAGE_CONFIG as stage} from './drive-stage';
import type {DriveState} from './drive-state';

const UP = new THREE.Vector3(0, 1, 0);
const FORWARD = new THREE.Vector3(0, 0, 1);
const smooth = (t:number) => t*t*(3-2*t);

export function crewFloor(x:number,z:number):number {
  const dx=Math.abs(x-stage.center.x), front=stage.center.z-stage.depth/2;
  if(dx<=stage.width/2&&z>=front&&z<=stage.center.z+stage.depth/2)return stage.height;
  if(dx>stage.stepWidth/2||z>=front)return 0;
  for(let i=1;i<=stage.steps;i++){
    if(z>=front-i*stage.stepDepth)return stage.height*(stage.steps-i+1)/(stage.steps+1);
  }
  return 0;
}

export function crewStride(progress:number,leg:number,direction:number):{offset:number;lift:number} {
  if(progress<=.18||progress>=.82)return {offset:0,lift:0};
  const phase=(progress-.18)/.64;
  const intensity=smooth(Math.min(1,phase*5,(1-phase)*5));
  const swing=phase*Math.PI*4+leg*Math.PI;
  return {offset:Math.cos(swing)*.15*intensity*direction,lift:Math.max(0,Math.sin(swing))*.12*intensity};
}

function cloth(color:number):THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({color,roughness:.87});
}

function softShape(profile:number[][]):THREE.LatheGeometry {
  return new THREE.LatheGeometry(profile.map(([radius,height])=>new THREE.Vector2(radius,height)),16);
}

const jacket=softShape([[0,-.032],[.128,-.027],[.156,.025],[.16,.19],[.182,.33],[.19,.39],[.166,.43],[.095,.46],[0,.46]]);
const upperSleeve=softShape([[.038,-.14],[.065,.04],[.063,.31],[.05,.9],[.045,1]]);
const lowerSleeve=softShape([[.049,0],[.052,.18],[.038,.86],[.036,1]]);
const thigh=softShape([[.075,0],[.086,.13],[.082,.38],[.057,1]]);
const shin=softShape([[.058,0],[.062,.23],[.046,.84],[.04,1]]);
const round=new THREE.SphereGeometry(1,16,12);
const seam=new THREE.CylinderGeometry(1,1,1,10);
const trousers=cloth(0x343e48),boots=cloth(0x262c2b),sole=cloth(0x3e4140),zipper=cloth(0x424b47);
const badge=cloth(0xd7cdb7);
const soleShadow=new THREE.PlaneGeometry(.27,.36).rotateX(-Math.PI/2);
const softContact=new THREE.MeshBasicMaterial({color:0x302f26,transparent:true,depthWrite:false,opacity:.28});
function contactMaterial(){
  if(!softContact.map){
    const canvas=document.createElement('canvas');canvas.width=canvas.height=32;
    const ctx=canvas.getContext('2d')!,fade=ctx.createRadialGradient(16,16,2,16,16,16);
    fade.addColorStop(0,'#fff');fade.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle=fade;ctx.fillRect(0,0,32,32);softContact.map=new THREE.CanvasTexture(canvas);
  }
  return softContact;
}

/** Lazily instanced articulated bodies using the sculpted heads and hands from the existing scene. */
export class DrivePerson {
  readonly group=new THREE.Group();
  private readonly body=new THREE.Group();
  private readonly shoulders=[new THREE.Vector3(-.16,.39,0),new THREE.Vector3(.16,.39,0)];
  private readonly hips=[new THREE.Vector3(-.086,0,0),new THREE.Vector3(.086,0,0)];
  private readonly arms:ReturnType<DrivePerson['arm']>[];
  private readonly legs:ReturnType<DrivePerson['leg']>[];
  private readonly start=new THREE.Vector3();
  private readonly middle=new THREE.Vector3();
  private readonly end=new THREE.Vector3();
  private readonly bend=new THREE.Vector3();
  private readonly delta=new THREE.Vector3();
  private readonly local=new THREE.Vector3();
  private readonly head=new THREE.Group();

  constructor(model:THREE.Object3D,style:'A'|'B',name:string,color:number){
    this.group.name=name;
    const shirt=cloth(color);
    const torso=new THREE.Mesh(jacket,shirt);torso.scale.z=.63;this.body.add(torso);
    const waist=new THREE.Mesh(round,trousers);waist.position.y=-.035;waist.scale.set(.159,.085,.095);this.body.add(waist);
    for(const shoulder of this.shoulders){
      const cap=new THREE.Mesh(round,shirt);cap.position.copy(shoulder);cap.scale.set(.068,.074,.073);this.body.add(cap);
    }
    const fastening=new THREE.Mesh(seam,zipper);fastening.scale.set(.004,.34,.004);fastening.position.set(0,.219,.106);this.body.add(fastening);
    const collar=new THREE.Mesh(round,shirt);collar.scale.set(.081,.027,.075);collar.position.set(0,.425,.009);this.body.add(collar);
    const patch=new THREE.Mesh(new THREE.BoxGeometry(.054,.028,.008),badge);patch.position.set(-.088,.342,.103);this.body.add(patch);
    model.getObjectByName(`NF_Spectator${style}`)!.traverse(node=>{
      if(!(node instanceof THREE.Mesh)||!/^NF (Skin|Eye|Hair)/.test(node.material.name))return;
      this.head.add(new THREE.Mesh(node.geometry,node.material));
    });
    this.head.position.set(0,-.525,.003);this.body.add(this.head);this.group.add(this.body);
    this.arms=[this.arm(model,style,'L',shirt),this.arm(model,style,'R',shirt)];
    this.legs=[this.leg(),this.leg()];
    this.greet(0,0);
  }

  private arm(model:THREE.Object3D,style:string,name:string,shirt:THREE.Material){
    const upper=new THREE.Mesh(upperSleeve,shirt),lower=new THREE.Mesh(lowerSleeve,shirt);
    const joint=new THREE.Mesh(round,shirt);joint.scale.set(.049,.049,.049);
    const hand=new THREE.Group(),source=model.getObjectByName(`NF_Spectator${style}Arm${name}`)!;
    source.traverse(node=>{
      if(!(node instanceof THREE.Mesh))return;
      const {geometry,material}=node;geometry.computeBoundingBox();
      const bounds=geometry.boundingBox!,wrist=bounds.getCenter(new THREE.Vector3());
      wrist.z=bounds.min.z+.014;wrist.x=name==='L'?bounds.min.x+.014:bounds.max.x-.014;
      const mesh=new THREE.Mesh(geometry,material);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(name==='L'?.55:-.55,0,.83).normalize(),FORWARD);
      mesh.position.copy(wrist).applyQuaternion(mesh.quaternion).negate();hand.add(mesh);
    });
    this.group.add(upper,lower,joint,hand);
    return {upper,lower,joint,hand};
  }

  private leg(){
    const upper=new THREE.Mesh(thigh,trousers),lower=new THREE.Mesh(shin,trousers);
    const joint=new THREE.Mesh(round,trousers);joint.scale.set(.057,.057,.057);
    const shoe=new THREE.Group(),leather=new THREE.Mesh(round,boots),outsole=new THREE.Mesh(round,sole);
    leather.scale.set(.066,.047,.126);leather.position.set(0,-.023,.046);
    outsole.scale.set(.068,.015,.127);outsole.position.set(0,-.061,.048);
    const contact=new THREE.Mesh(soleShadow,contactMaterial());
    shoe.add(leather,outsole);this.group.add(upper,lower,joint,shoe,contact);
    return {upper,lower,joint,shoe,contact};
  }

  private link(mesh:THREE.Mesh,a:THREE.Vector3,b:THREE.Vector3){
    const direction=this.delta.copy(b).sub(a);
    mesh.position.copy(a);mesh.scale.y=direction.length();
    mesh.quaternion.setFromUnitVectors(UP,direction.normalize());
  }

  private elbowOrKnee(preference:THREE.Vector3,a:number,b:number){
    const axis=this.middle.copy(this.end).sub(this.start);
    const distance=Math.max(.001,axis.length());axis.multiplyScalar(1/distance);
    const along=Math.min(a,(distance*distance+a*a-b*b)/(2*distance));
    preference.addScaledVector(axis,-preference.dot(axis)).normalize();
    axis.multiplyScalar(along).add(this.start).addScaledVector(preference,Math.sqrt(Math.max(0,a*a-along*along)));
  }

  private reach(i:number,x:number,y:number,z:number,wave=false,palm?:number){
    const {upper,lower,joint,hand}=this.arms[i];
    this.start.copy(this.shoulders[i]).applyQuaternion(this.body.quaternion).add(this.body.position);
    this.end.set(x,y,z);
    this.elbowOrKnee(this.bend.set(i===0?-.65:.65,-.7,-.20),.29,.265);
    this.link(upper,this.start,this.middle);this.link(lower,this.middle,this.end);joint.position.copy(this.middle);
    hand.position.copy(this.end);hand.quaternion.setFromUnitVectors(FORWARD,this.delta.copy(this.end).sub(this.middle).normalize());
    if(wave)hand.rotateZ(.45);
    if(palm!==undefined)hand.rotation.set(0,palm,Math.PI,'YXZ');
  }

  private foot(i:number,x:number,y:number,z:number,lift=0){
    const {upper,lower,joint,shoe,contact}=this.legs[i];
    this.start.copy(this.hips[i]).applyQuaternion(this.body.quaternion).add(this.body.position);
    this.end.set(x,y+lift+.076,z);
    this.elbowOrKnee(this.bend.set(0,0,1),.40,.39);
    this.link(upper,this.start,this.middle);this.link(lower,this.middle,this.end);joint.position.copy(this.middle);shoe.position.copy(this.end);
    contact.position.set(x,y+.0015,z+.045);contact.scale.setScalar(1+lift*1.2);
  }

  greet(time:number,weight:number){
    this.body.position.set(0,.835,0);this.body.rotation.set(.025,0,0);
    this.head.rotation.y=.095;this.foot(0,-.10,0,.025);this.foot(1,.11,0,-.055);
    this.reach(0,-.20,.735,.028);
    this.reach(1,.20+weight*(.105+Math.sin(time*5.8)*.065),.75+weight*.65,.04+weight*.10,weight>0);
  }

  carry(s:DriveState,side:number){
    const progress=s.stageTransport.progress, direction=s.stageTransport.phase==='boarding'?1:-1;
    const yaw=(direction===1?0:Math.PI)-side*direction*.88;
    this.group.rotation.y=yaw;
    this.group.position.set(s.x+side*.49,0,s.z);
    const floor=crewFloor(this.group.position.x,s.z);
    const effort=Math.sin(progress*Math.PI), crouch=.055+.065*(1-effort);
    this.body.position.set(0,floor+.835-crouch,.048);
    this.body.rotation.set(.13,0,0);this.head.rotation.y=-side*direction*.19;
    for(const leg of [0,1]){
      const stride=crewStride(progress,leg,1);
      const x=leg===0?-.102:.102,z=stride.offset+(leg===0?.055:-.055);
      this.local.set(x,0,z).applyAxisAngle(UP,yaw).add(this.group.position);
      this.foot(leg,x,crewFloor(this.local.x,this.local.z),z,stride.lift);
    }
    for(const arm of [0,1]){
      const forward=(arm===0?-1:1)*side*direction*.113;
      this.local.set(-side*.255,.733+s.supportHeight,forward).applyAxisAngle(UP,-yaw);
      this.reach(arm,this.local.x,this.local.y,this.local.z,false,-side*Math.PI/2-yaw);
    }
  }
}
