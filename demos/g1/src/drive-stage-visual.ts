import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DrivePerson} from './drive-people';
import {STAGE_CONFIG as C} from './drive-stage';
import type {DriveState} from './drive-state';

/** Blender-authored four-material prop with an immediate same-size fallback. */
export class DriveStageVisual {
  readonly group=new THREE.Group();
  revision=0;
  private readonly fallback=new THREE.Group();
  private readonly platform=new THREE.Group();
  private readonly people:DrivePerson[]=[];
  private readonly crew=new THREE.Group();
  private readonly ring:THREE.Mesh;
  private readonly exitRing:THREE.Group;
  private previous='';
  private readonly cube=new THREE.BoxGeometry(1,1,1);
  private readonly coat=new THREE.MeshStandardMaterial({color:0xb49b71,roughness:.85});
  constructor(){
    this.group.name='raised-stage-and-transport';
    const platform=this.platform;platform.position.set(C.center.x,0,C.center.z);this.group.add(platform);
    const mat=new THREE.MeshStandardMaterial({color:0x405d50,roughness:.95}),edge=new THREE.MeshBasicMaterial({color:0xc3a66c});
    const box=(x:number,y:number,z:number,w:number,h:number,d:number,m:THREE.Material)=>{const mesh=new THREE.Mesh(this.cube,m);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);this.fallback.add(mesh);};
    box(0,C.height/2,0,C.width,C.height,C.depth,mat);
    for(let i=0;i<C.steps;i++){const h=C.height*(i+1)/(C.steps+1),z=-C.depth/2-(C.steps-i-.5)*C.stepDepth;box(0,h/2,z,C.stepWidth,h,C.stepDepth,mat);box(0,h+.002,z-C.stepDepth*.45,C.stepWidth,.006,.028,edge);}
    platform.add(this.fallback);
    new GLTFLoader().load('../assets/stage/stage.glb',gltf=>{
      gltf.scene.traverse(node=>{const mesh=node as THREE.Mesh;if(mesh.isMesh)for(const m of Array.isArray(mesh.material)?mesh.material:[mesh.material])m.toneMapped=false;});
      platform.add(gltf.scene);this.fallback.visible=false;this.revision++;
    },undefined,()=>{this.fallback.visible=true;this.revision++;});
    this.ring=new THREE.Mesh(new THREE.RingGeometry(C.pickup.radius-.025,C.pickup.radius,40),new THREE.MeshBasicMaterial({color:0xd9b166,side:THREE.DoubleSide}));
    this.ring.rotation.x=-Math.PI/2;this.ring.position.set(C.pickup.x,.018,C.pickup.z);this.group.add(this.ring);
    // Separate upper-deck marker: never project it onto the ground or the steps.
    this.exitRing=new THREE.Group();this.exitRing.name='stage-exit-circle';this.exitRing.position.set(C.exit.x,C.height+.018,C.exit.z);
    const exitMat=new THREE.MeshBasicMaterial({color:0x50cdb8,side:THREE.DoubleSide,toneMapped:false});
    for(const [inner,outer]of [[C.exit.radius-.035,C.exit.radius],[C.exit.radius+.065,C.exit.radius+.078]]){
      const ring=new THREE.Mesh(new THREE.RingGeometry(inner,outer,40),exitMat);ring.rotation.x=-Math.PI/2;this.exitRing.add(ring);
    }
    this.exitRing.visible=false;this.group.add(this.exitRing);
    for(const side of [-1,1]){
      const person=new THREE.Group();person.position.x=side*.42;
      const torso=new THREE.Mesh(this.cube,this.coat);torso.position.y=.78;torso.scale.set(.24,.47,.22);person.add(torso);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.105,10,8),new THREE.MeshStandardMaterial({color:0xdcc4a4,roughness:1}));head.position.y=1.13;person.add(head);
      for(const foot of [-1,1]){const leg=new THREE.Mesh(this.cube,mat);leg.position.set(foot*.075,.3,0);leg.scale.set(.08,.55,.10);person.add(leg);}
      const arm=new THREE.Mesh(this.cube,this.coat);arm.position.set(-side*.16,.78,.06);arm.rotation.z=side*.9;arm.scale.set(.08,.32,.09);person.add(arm);this.crew.add(person);
    }
    this.crew.visible=false;this.group.add(this.crew);
  }
  installNearfield(model:THREE.Group):void{
    this.people.push(new DrivePerson(model,'A','stage-crew-left',0x566655),new DrivePerson(model,'B','stage-crew-right',0x8b7259));
    for(const person of this.people){person.group.visible=false;this.group.add(person.group);}
    const deck=model.getObjectByName('NF_StageDeck')!;
    deck.traverse(node=>{
      if(!(node instanceof THREE.Mesh)||Array.isArray(node.material))return;
      // Separate the woven tread from the substrate without changing step height in play.
      const material=node.material;
      if(material.name.startsWith('NF Stage'))node.position.y+=.001;
      const units=material.name.startsWith('NF Elastomer')?-4:material.name.startsWith('NF Satin anodised')?-2:0;
      if(units){material.polygonOffset=true;material.polygonOffsetFactor=0;material.polygonOffsetUnits=units;}
    });
    this.platform.visible=false;this.group.add(deck);this.revision++;
  }
  update(s:DriveState):void{
    const carrying=s.stageTransport.carrying;
    for(const [i,person] of this.people.entries()){
      person.group.visible=carrying;
      if(carrying)person.carry(s,i===0?-1:1);
    }
    this.crew.visible=carrying&&!this.people.length;
    if(this.crew.visible)this.crew.position.set(s.x,Math.max(0,s.supportHeight-.17),s.z);
    this.ring.visible=!s.stageTransport.onstage&&!s.stageTransport.carrying;
    this.exitRing.visible=s.stageTransport.onstage;
    const key=`${carrying}:${carrying?s.stageTransport.progress:0}:${s.x.toFixed(4)}:${s.z.toFixed(4)}:${s.supportHeight.toFixed(4)}:${this.ring.visible}:${this.exitRing.visible}`;
    if(key!==this.previous){this.previous=key;this.revision++;}
  }
}
