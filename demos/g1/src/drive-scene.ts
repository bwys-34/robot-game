import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {RenderBudget} from './render-budget';
import {DRIVE_CONFIG} from './drive-config';
import {DriveRig} from './drive-rig';
import {OrbitGestureGuard} from './orbit-gesture-guard';
import {DriveHoistVisual} from './drive-hoist-visual';
import {DriveReceptionVisual} from './drive-reception-visual';
import {DriveGallery} from './drive-gallery';
import {DriveCampusVisual} from './drive-campus-visual';
import {TUTORIAL_ROUTE} from './drive-tutorial';
import type {DriveState,DriveGesture} from './drive-state';

/** A small exhibition, one robot mesh, no real-time shadow maps or physics engine. */
export class DriveScene {
  readonly scene=new THREE.Scene();
  readonly camera=new THREE.PerspectiveCamera(46,1,.03,100);
  readonly renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  readonly controls:OrbitControls;
  rig:DriveRig|null=null;
  overview=false;
  private explicitOverview=false;
  private readonly orbitPointers=new Map<number,{x:number;y:number}>();
  private elevation=0;
  private readonly budget=new RenderBudget();
  private readonly marker:THREE.Mesh;
  private readonly pointer:THREE.Mesh;
  private readonly targetBadge:THREE.Sprite;
  private readonly targetBadges:Record<'A'|'B',THREE.CanvasTexture>;
  private readonly routeLine=new THREE.Line(new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(new Float32Array(6),3)),new THREE.LineBasicMaterial({color:0xbba25f,transparent:true,opacity:.55}));
  private readonly headingArrow=new THREE.ArrowHelper(new THREE.Vector3(0,0,-1),new THREE.Vector3(),.68,0x4f8968,.20,.15);
  private readonly headingDirection=new THREE.Vector3();
  private readonly shadow:THREE.Mesh;
  private readonly debugSupport=new THREE.Group();
  private readonly hoist=new DriveHoistVisual();
  private readonly reception=new DriveReceptionVisual();
  private readonly gallery=new DriveGallery();
  private readonly campus=new DriveCampusVisual();
  private readonly debugMarker=new THREE.Mesh(new THREE.SphereGeometry(.055,12,8),new THREE.MeshBasicMaterial({color:0xd1aa4c,transparent:true,opacity:.65,depthTest:false}));
  private readonly focus=new THREE.Vector3(0,.7,0);
  private readonly cameraTarget=new THREE.Vector3();
  private readonly drawnCamera=new THREE.Vector3(Infinity,Infinity,Infinity);
  private readonly drawnRotation=new THREE.Quaternion();
  private readonly pose:number[]=[];
  private dirty=true;
  private readonly reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  private time=0;
  constructor(private readonly host:HTMLElement){
    this.scene.background=new THREE.Color('#e0e3dc');
    this.scene.fog=new THREE.Fog('#e0e3dc',35,60);
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.13;
    host.append(this.renderer.domElement);
    this.renderer.domElement.setAttribute('aria-hidden','true');
    this.camera.position.set(.35,2.55,3.5);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.addEventListener('change',()=>{this.dirty=true;});
    this.controls.target.copy(this.focus);this.controls.enableDamping=true;
    this.controls.dampingFactor=.09;this.controls.enablePan=false;
    this.controls.minDistance=1.8;this.controls.maxDistance=65;
    this.controls.minPolarAngle=.18;this.controls.maxPolarAngle=Math.PI*.46;
    this.controls.rotateSpeed=.65;
    this.controls.enabled=false;this.controls.update();
    // Arm OrbitControls early enough to receive pointerdown, but only a real
    // drag/pinch leaves follow mode. A focus tap must not latch the camera.
    const orbitCanvas=this.renderer.domElement;
    orbitCanvas.addEventListener('pointerdown',event=>{
      this.orbitPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});this.controls.enabled=true;
      if(this.orbitPointers.size>1)this.overview=true;
    },{capture:true});
    orbitCanvas.addEventListener('pointermove',event=>{
      const start=this.orbitPointers.get(event.pointerId);
      if(start&&Math.hypot(event.clientX-start.x,event.clientY-start.y)>=5)this.overview=true;
    },{capture:true});
    const finishOrbit=(event:PointerEvent)=>{this.orbitPointers.delete(event.pointerId);if(!this.orbitPointers.size){this.controls.enabled=this.overview;if(!this.overview)this.clearOrbitDamping();}};
    for(const name of ['pointerup','pointercancel','lostpointercapture'])orbitCanvas.addEventListener(name,finishOrbit as EventListener,{capture:true});
    new OrbitGestureGuard(orbitCanvas,this.controls);
    this.scene.add(new THREE.HemisphereLight(0xf9fbf4,0x89938a,1.8));
    const key=new THREE.DirectionalLight(0xfff3dd,2.4);key.position.set(3,6,4);this.scene.add(key);
    const fill=new THREE.DirectionalLight(0xdce9e5,.85);fill.position.set(-4,3,-3);this.scene.add(fill);
    const pmrem=new THREE.PMREMGenerator(this.renderer),environment=new RoomEnvironment();
    this.scene.environment=pmrem.fromScene(environment,.04).texture;environment.dispose();pmrem.dispose();
    this.scene.add(this.gallery.group,this.campus.group);
    const visitor=new THREE.Group(),coat=new THREE.MeshStandardMaterial({color:'#c4a67b',roughness:.95});
    const body=new THREE.Mesh(new THREE.CylinderGeometry(.12,.18,.57,12),coat);body.position.y=.59;
    const head=new THREE.Mesh(new THREE.SphereGeometry(.115,16,12),new THREE.MeshStandardMaterial({color:'#ead9b8'}));head.position.y=1.02;
    visitor.add(body,head);
    for(const x of [-.075,.075]){const leg=new THREE.Mesh(new THREE.CylinderGeometry(.042,.045,.31,8),new THREE.MeshStandardMaterial({color:'#65766a'}));leg.position.set(x,.155,0);visitor.add(leg);}
    visitor.position.set(DRIVE_CONFIG.visitor.x,0,DRIVE_CONFIG.visitor.z);this.scene.add(visitor);
    this.marker=new THREE.Mesh(new THREE.RingGeometry(.40,.49,48),new THREE.MeshBasicMaterial({color:'#c69a3a',side:THREE.DoubleSide,transparent:true,opacity:.8,depthWrite:false}));
    this.marker.rotation.x=-Math.PI/2;this.marker.position.y=.006;this.scene.add(this.marker);
    const disk=new THREE.Mesh(new THREE.CircleGeometry(.4,40),new THREE.MeshBasicMaterial({color:'#eac765',transparent:true,opacity:.18,depthWrite:false}));disk.position.z=.001;this.marker.add(disk);
    this.pointer=new THREE.Mesh(new THREE.ConeGeometry(.09,.19,3),new THREE.MeshStandardMaterial({color:'#bd913b'}));this.scene.add(this.pointer);
    this.targetBadges={A:this.makeTargetBadge('A'),B:this.makeTargetBadge('B')};
    this.targetBadge=new THREE.Sprite(new THREE.SpriteMaterial({map:this.targetBadges.A,transparent:true,depthWrite:false}));
    this.targetBadge.scale.set(.38,.38,1);this.scene.add(this.targetBadge,this.routeLine,this.headingArrow);
    const canvas=document.createElement('canvas');canvas.width=canvas.height=64;
    const ctx=canvas.getContext('2d')!,gradient=ctx.createRadialGradient(32,32,0,32,32,32);
    gradient.addColorStop(0,'rgba(35,43,37,.30)');gradient.addColorStop(1,'rgba(35,43,37,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
    this.shadow=new THREE.Mesh(new THREE.PlaneGeometry(.95,.75),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false}));
    this.shadow.rotation.x=-Math.PI/2;this.shadow.position.y=.002;this.scene.add(this.shadow);
    const supportPoints=[[-.62,0,0],[-.62,1.72,0],[-.62,1.72,0],[.62,1.72,0],[.62,1.72,0],[.62,0,0],[0,1.72,0],[0,1.27,0]].map(p=>new THREE.Vector3(...p as [number,number,number]));
    this.debugSupport.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(supportPoints),new THREE.LineBasicMaterial({color:0x769d8a,transparent:true,opacity:.65})));
    this.debugSupport.visible=false;this.debugMarker.visible=false;this.scene.add(this.debugSupport,this.debugMarker,this.hoist.group,this.reception.group);
    new ResizeObserver(()=>this.resize()).observe(host);this.resize();
  }
  async load():Promise<void>{
    const [gltf]=await Promise.all([new GLTFLoader().loadAsync('../assets/g1-sample.glb'),this.gallery.load(this.renderer.capabilities.getMaxAnisotropy())]);
    this.rig=new DriveRig(gltf.scene);this.scene.add(this.rig.group);
  }
  private makeTargetBadge(label:string):THREE.CanvasTexture{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=128;
    const ctx=canvas.getContext('2d')!;ctx.fillStyle='#f2e9cd';ctx.beginPath();ctx.arc(64,64,55,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#b5913c';ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#72581d';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 72px sans-serif';ctx.fillText(label,64,69);
    return new THREE.CanvasTexture(canvas);
  }
  resize():void{
    this.dirty=true;
    const width=Math.max(1,this.host.clientWidth),height=Math.max(1,this.host.clientHeight);
    this.camera.aspect=width/height;this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(this.budget.resize(width,height,devicePixelRatio));this.renderer.setSize(width,height);
  }
  toggleCamera(value=!this.overview,reframe=true):void{
    this.clearOrbitDamping();
    this.explicitOverview=value;this.overview=value;this.controls.enabled=value;
    if(value&&reframe){
      const room=DRIVE_CONFIG.room,x=(room.minX+room.maxX)/2,z=(room.minZ+room.maxZ)/2;
      const distance=Math.max((room.maxX-room.minX)/this.camera.aspect,room.maxZ-room.minZ)*1.18;
      this.controls.target.set(x,.2,z);this.camera.position.set(x+distance*.18,distance*.83,z+distance*.76);
    }
    else this.controls.target.copy(this.focus);
    this.controls.update();
  }
  private clearOrbitDamping():void{
    // OrbitControls retains angular velocity while disabled. Consume it without
    // moving the visible camera, otherwise it resurfaces on the next mode switch.
    const position=this.camera.position.clone(),rotation=this.camera.quaternion.clone(),damping=this.controls.enableDamping;
    this.controls.enableDamping=false;this.controls.update();this.controls.enableDamping=damping;
    this.camera.position.copy(position);this.camera.quaternion.copy(rotation);
  }
  reset():void{this.rig?.reset();this.toggleCamera(false);this.elevation=0;this.dirty=true;}
  update(dt:number,state:DriveState,look:number,driving=false):DriveGesture|null{
    const completed=this.rig?.update(dt,state)??null;
    this.hoist.update(state,this.rig);
    this.reception.update(dt,state,this.reduced);
    this.debugSupport.visible=state.mode==='debug'&&!state.hoistAvailable;this.debugMarker.visible=state.mode==='debug'&&state.debugTab==='joints'&&state.body==='upright';
    this.debugSupport.position.set(state.x,0,state.z);this.debugSupport.rotation.y=state.yaw;
    if(this.debugMarker.visible){
      this.rig?.joints.get(state.lab.spec.joint)?.node.getWorldPosition(this.debugMarker.position);
      (this.debugMarker.material as THREE.MeshBasicMaterial).color.setHex(state.lab.completed.has(state.lab.selected)?0x3e9e72:0xd1aa4c);
    }
    if(state.running&&!state.paused)this.time+=dt;
    const groundMarker=state.experience==='mission'&&state.stage==='turn'?TUTORIAL_ROUTE.arrival:state.target;
    this.marker.position.x=groundMarker.x;this.marker.position.z=groundMarker.z;
    const hoistNavigating=state.hoistContext&&!state.hoist.locked;
    const receptionNavigating=state.experience==='reception'&&state.reception.step!=='complete';
    const challengeNavigating=state.experience==='course'&&state.course.step!=='complete'||state.experience==='show'&&state.show.step!=='complete';
    const navigating=state.experience==='mission'&&state.tutorial.navigating||hoistNavigating||receptionNavigating||challengeNavigating;
    this.marker.visible=navigating&&!hoistNavigating&&!receptionNavigating&&!challengeNavigating;
    if(this.marker.visible){
      // The inner edge is the actual acceptance radius, not an unrelated visual circle.
      this.marker.scale.setScalar(groundMarker.radius/.4);
      (this.marker.material as THREE.MeshBasicMaterial).color.setHex(state.tutorial.hold>0?0x498e66:0xc69a3a);
      (this.marker.material as THREE.MeshBasicMaterial).opacity=this.reduced?.85:.75+Math.sin(this.time*2.5)*.1;
    }
    const destination=state.target;
    this.pointer.rotation.z=Math.PI;this.pointer.visible=navigating&&(state.experience!=='course'||state.course.level!=='advanced');
    if(this.pointer.visible)this.pointer.position.set(destination.x,1.48+(this.reduced?0:Math.sin(this.time*2)*.035),destination.z);
    this.targetBadge.visible=navigating&&!hoistNavigating&&!receptionNavigating&&!challengeNavigating;
    if(this.targetBadge.visible){
      const material=this.targetBadge.material as THREE.SpriteMaterial;
      material.map=this.targetBadges[state.tutorial.target.label];
      this.targetBadge.position.set(destination.x,1.77,destination.z);
    }
    this.routeLine.visible=navigating&&!receptionNavigating&&state.targetDistance>.7&&(state.experience!=='course'||state.course.level==='practice');
    if(this.routeLine.visible){
      const positions=this.routeLine.geometry.getAttribute('position') as THREE.BufferAttribute;
      const dx=(destination.x-state.x)/state.targetDistance,dz=(destination.z-state.z)/state.targetDistance;
      positions.setXYZ(0,state.x+dx*.4,.025,state.z+dz*.4);
      positions.setXYZ(1,destination.x-dx*destination.radius,.025,destination.z-dz*destination.radius);positions.needsUpdate=true;
      // Moving vertices invalidate the lazily cached bound used by frustum culling.
      this.routeLine.frustumCulled=false;
    }
    this.headingArrow.visible=navigating&&state.body==='upright';
    if(this.headingArrow.visible){
      this.headingArrow.position.set(state.x,.04,state.z);
      this.headingArrow.setDirection(this.headingDirection.set(Math.sin(state.yaw),0,Math.cos(state.yaw)));
    }
    this.shadow.position.set(state.x,.002,state.z);this.shadow.rotation.z=-state.yaw;
    const bodyCenter=state.body==='fallen'?.27:state.body==='falling'?.72-.4*state.bodyProgress:state.body==='recovering'?.27+.45*state.bodyProgress:.72;
    const focusY=state.hoistContext?1:state.gesture==='backflip'?1.02:bodyCenter;
    this.focus.set(state.x,focusY,state.z);
    if(navigating){const lead=Math.min(.22,.8/Math.max(.01,state.targetDistance));this.focus.x+=(destination.x-state.x)*lead;this.focus.z+=(destination.z-state.z)*lead;}
    if(this.overview&&!this.explicitOverview&&!this.orbitPointers.size&&state.running&&!state.paused&&(driving||state.speed>.018||Math.abs(state.angular)>.065||Math.abs(look)>.05))this.toggleCamera(false);
    if(!this.overview){
      this.elevation=THREE.MathUtils.clamp(this.elevation+look*dt*.7,-.25,.75);
      const debug=state.mode==='debug',heading=state.yaw+(debug?Math.PI*.75:state.hoistContext&&state.hoist.locked?Math.PI*.18:0);
      const distance=(state.hoistContext?state.hoist.locked?3.05:3.7:debug?2.3:state.gesture==='backflip'?4.1:navigating?3.7:3.4)*Math.max(1,.72/this.camera.aspect);
      const target=this.cameraTarget.set(state.x-Math.sin(heading)*distance,(state.hoistContext?2:debug?1.55:2.35)+this.elevation,state.z-Math.cos(heading)*distance);
      this.camera.position.lerp(target,1-Math.exp(-dt/.35));
      this.controls.target.lerp(this.focus,1-Math.exp(-dt/.14));
      this.camera.lookAt(this.controls.target);
    }else this.controls.update();
    this.campus.update(state,this.camera);
    return completed;
  }
  render(dt:number,active:boolean):void{
    this.gallery.update(this.camera.position,this.controls.target);
    const ratio=this.budget.observe(dt,active);if(ratio!==null){this.renderer.setPixelRatio(ratio);this.renderer.setSize(this.host.clientWidth,this.host.clientHeight);this.dirty=true;}
    // Keep polling input at frame speed, but do not redraw an unchanged exhibit.
    // Joint/camera changes, orbit damping, marker animation and resizing wake it.
    let index=0;
    const track=(value:number)=>{if(!Number.isFinite(this.pose[index])||Math.abs(this.pose[index]-value)>1e-6){this.pose[index]=value;this.dirty=true;}index++;};
    if(this.rig){
      const {group,body,model,joints}=this.rig;
      for(const value of [group.position.x,group.position.z,group.rotation.y,model.position.y,body.position.y,body.quaternion.x,body.quaternion.y,body.quaternion.z,body.quaternion.w])track(value);
      for(const joint of joints.values())track(joint.angle);
    }
    track(Number(this.debugSupport.visible));track(Number(this.debugMarker.visible));
    track(this.reception.revision);
    track(this.gallery.revision);
    track(this.campus.revision);
    track(Number(this.hoist.group.visible));if(this.hoist.group.visible){track(this.hoist.revision);for(const child of this.hoist.group.children){if(child.name.startsWith('hoist-strap-')){track(child.position.x);track(child.position.y);track(child.position.z);track(child.scale.y);track(child.quaternion.x);track(child.quaternion.y);track(child.quaternion.z);track(child.quaternion.w);}}}
    if(this.debugMarker.visible){track(this.debugMarker.position.x);track(this.debugMarker.position.y);track(this.debugMarker.position.z);track((this.debugMarker.material as THREE.MeshBasicMaterial).color.getHex());}
    track(Number(this.marker.visible));track(Number(this.pointer.visible));
    if(this.marker.visible){track(this.marker.position.x);track(this.marker.position.z);track(this.marker.scale.x);track(this.pointer.position.y);track((this.marker.material as THREE.MeshBasicMaterial).color.getHex());track((this.marker.material as THREE.MeshBasicMaterial).opacity);track(Number(this.targetBadge.material.map===this.targetBadges.B));}
    if(this.camera.position.distanceToSquared(this.drawnCamera)>1e-9||1-Math.abs(this.camera.quaternion.dot(this.drawnRotation))>1e-10)this.dirty=true;
    if(!this.dirty)return;
    this.renderer.render(this.scene,this.camera);
    this.drawnCamera.copy(this.camera.position);this.drawnRotation.copy(this.camera.quaternion);this.dirty=false;
  }
}
