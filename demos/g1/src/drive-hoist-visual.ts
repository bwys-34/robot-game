import * as THREE from 'three';
import {HOIST_CONFIG} from './drive-hoist';
import type {DriveState} from './drive-state';
import type {DriveRig} from './drive-rig';

/** Cached primitive geometry; two taut straps express authored support, not rope physics. */
export class DriveHoistVisual {
  readonly group=new THREE.Group();
  private readonly signal=new THREE.MeshBasicMaterial({color:0xc69a3a});
  private readonly strapMaterial=new THREE.MeshStandardMaterial({color:0x467c65,roughness:.8});
  private readonly cables:THREE.Mesh[]=[];
  private readonly harness=new THREE.Group();
  private readonly spreader=new THREE.Mesh(new THREE.BoxGeometry(.46,.045,.055),this.strapMaterial);
  private readonly ground:THREE.Mesh;
  private readonly ends=[new THREE.Vector3(),new THREE.Vector3()];
  private readonly top=new THREE.Vector3();private readonly direction=new THREE.Vector3();
  private readonly up=new THREE.Vector3(0,1,0);
  private readonly shoulderNodes:Array<THREE.Object3D|undefined>=[];
  private robot:DriveRig|null=null;
  revision=0;private signature='';
  constructor(){
    this.group.name='hoist-station';this.group.position.set(HOIST_CONFIG.x,0,HOIST_CONFIG.z);
    const frame=new THREE.MeshStandardMaterial({color:0xc99938,roughness:.65,metalness:.3});
    const dark=new THREE.MeshStandardMaterial({color:0x344348,roughness:.65});
    const bar=(w:number,h:number,d:number,x:number,y:number,z:number,material=frame)=>{
      const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);this.group.add(m);return m;
    };
    for(const post of HOIST_CONFIG.posts){const x=post.x+post.width/2-HOIST_CONFIG.x,z=post.z+post.depth/2-HOIST_CONFIG.z;
      bar(post.width,1.96,post.depth,x,.98,z);bar(.19,.025,.28,x,.0125,z);bar(.12,.08,.12,x,1.4,z,dark);
    }
    bar(1.72,.12,.14,0,1.99,-.3);bar(.20,.16,.28,0,1.87,-.25,dark);
    bar(.12,.055,.5,0,1.92,-.03);
    const reel=new THREE.Mesh(new THREE.CylinderGeometry(.065,.065,.15,12),dark);reel.rotation.z=Math.PI/2;reel.position.set(0,1.83,0);this.group.add(reel);
    this.spreader.position.set(0,1.64,0);this.group.add(this.spreader);
    const centerCable=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,.14,6),dark);centerCable.position.set(0,1.73,0);this.group.add(centerCable);
    const lamp=new THREE.Mesh(new THREE.SphereGeometry(.035,10,8),this.signal);lamp.position.set(.18,1.96,-.20);this.group.add(lamp);
    this.ground=new THREE.Mesh(new THREE.RingGeometry(HOIST_CONFIG.radius,HOIST_CONFIG.radius+.045,48),this.signal);this.ground.rotation.x=-Math.PI/2;this.ground.position.y=.012;this.group.add(this.ground);
    const disk=new THREE.Mesh(new THREE.CircleGeometry(HOIST_CONFIG.radius,32),new THREE.MeshBasicMaterial({color:0xc9b36d,transparent:true,opacity:.10,depthWrite:false}));disk.rotation.x=-Math.PI/2;disk.position.y=.008;this.group.add(disk);
    // H is a ground marker. The HTML instructions stay outside the model view.
    for(const x of [-.095,.095])bar(.022,.004,.23,x,.014,0,dark);bar(.19,.004,.022,0,.014,0,dark);
    for(let i=0;i<2;i++){
      const cable=new THREE.Mesh(new THREE.CylinderGeometry(.011,.011,1,8),this.strapMaterial);cable.name=`hoist-strap-${i}`;this.cables.push(cable);this.group.add(cable);
      const clip=new THREE.Mesh(new THREE.TorusGeometry(.026,.007,6,12),this.signal);this.harness.add(clip);
    }
    const belt=new THREE.Mesh(new THREE.TorusGeometry(1,.065,6,24),this.strapMaterial);belt.rotation.x=Math.PI/2;belt.scale.set(.14,.10,.14);belt.position.y=-.055;this.harness.add(belt);
    this.group.add(this.harness);this.group.visible=false;
  }
  update(state:DriveState,rig:DriveRig|null):void{
    this.group.visible=state.hoistAvailable;if(!this.group.visible)return;
    if(rig!==this.robot){this.robot=rig;this.shoulderNodes.length=0;for(const side of ['left','right'])this.shoulderNodes.push(rig?.model.getObjectByName(`${side}_shoulder_pitch_link`));}
    const h=state.hoist,connected=h.locked;
    const color=h.supported?0x3f916b:h.ready?0x73975d:0xc69a3a;
    this.signal.color.setHex(color);this.strapMaterial.color.setHex(h.supported?0x3d8863:0xb6a16a);
    this.harness.visible=connected;
    this.spreader.rotation.y=connected?state.yaw:0;
    this.group.updateMatrixWorld(true);
    const signature=`${h.phase}:${color}:${state.mode}`;if(signature!==this.signature){this.signature=signature;this.revision++;}
    for(let i=0;i<2;i++){
      const end=this.ends[i],cable=this.cables[i];
      if(connected&&this.shoulderNodes[i]){
        this.shoulderNodes[i]!.getWorldPosition(end);end.x-=HOIST_CONFIG.x;end.z-=HOIST_CONFIG.z;end.y-=.025;
      }else end.set(i===0?.12:-.12,1.46,-.015);
      const side=i===0?1:-1,yaw=connected?state.yaw:0;
      this.top.set(side*.2*Math.cos(yaw),1.62,-side*.2*Math.sin(yaw));
      // On first connection, the loose hook travels down to its shoulder anchor.
      if(h.phase==='attaching')end.lerp(this.top,.55*(1-h.progress));
      const length=this.direction.copy(end).sub(this.top).length();cable.position.copy(this.top).add(end).multiplyScalar(.5);
      cable.scale.set(1,length,1);cable.quaternion.setFromUnitVectors(this.up,this.direction.normalize());
      const clip=this.harness.children[i];clip.position.copy(end); // The belt is child 2.
    }
    // Put the belt halfway between the shoulder anchors, with its horizontal
    // orientation following the robot rather than the stationary crane frame.
    const belt=this.harness.children[2];belt.position.copy(this.ends[0]).add(this.ends[1]).multiplyScalar(.5);belt.position.y-=.055;
    belt.rotation.set(Math.PI/2,0,-state.yaw);
  }
}
