import * as THREE from 'three';
import {DRIVE_COURT_OBSTACLES,DRIVE_SPACES} from './drive-config';
import type {DriveState} from './drive-state';
import {COURSE_CONFIG} from './drive-course';

/** Authored courtyard: static geometry and canvas atlases, no additional downloads. */
export class DriveCampusVisual {
  readonly group=new THREE.Group();
  revision=0;
  private readonly target:THREE.Mesh;
  private readonly spectators:THREE.Group[]=[];
  private readonly backdrop=new THREE.Group();
  private readonly parkingBay=new THREE.Group();
  private readonly cube=new THREE.BoxGeometry(1,1,1);
  private readonly materials=new Map<number,THREE.MeshStandardMaterial>();
  private previous='';
  constructor(){
    this.group.name='campus-courtyard';
    const c=DRIVE_SPACES.courtyard;
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(c.maxX-c.minX,c.maxZ-c.minZ),new THREE.MeshStandardMaterial({map:this.paving(),roughness:.95,color:0xffffff}));
    floor.rotation.x=-Math.PI/2;floor.position.set((c.minX+c.maxX)/2,-.002,(c.minZ+c.maxZ)/2);this.group.add(floor);
    // Boundaries are low enough to keep the chase camera and both play zones readable.
    this.box(-3.8,.14,7,.12,.28,8.4,0x728577);this.box(9.2,.14,7,.12,.28,8.4,0x728577);
    this.box(2.7,.14,11.2,13,.28,.12,0x728577);
    for(const o of DRIVE_COURT_OBSTACLES){
      const x=o.x+o.width/2,z=o.z+o.depth/2;
      if(o.id==='庭院隔墙'){
        this.box(x,.48,z,o.width,.96,o.depth,0xc9d4c5);this.box(x,.99,z,o.width,.06,.23,0xf1eee2);
      }else if(o.id==='训练锥桶'){
        this.box(x,.025,z,.22,.05,.22,0x384c49);
        const cone=new THREE.Mesh(new THREE.ConeGeometry(.105,.42,12),this.material(0xd48743));cone.position.set(x,.25,z);this.group.add(cone);
        const band=new THREE.Mesh(new THREE.CylinderGeometry(.045,.063,.07,12),this.material(0xfff3df));band.position.set(x,.25,z);this.group.add(band);
      }else if(o.id==='考场门柱'){
        this.box(x,.62,z,o.width,1.24,o.depth,0x32685c);this.box(x,1.27,z,.22,.06,.22,0xdbc17f);
        for(const y of [.3,.6,.9])this.box(x,y,z,.165,.09,.165,0xf0eee1);
      }else if(o.id==='舞台背景'){
        this.box(x,.9,z,o.width,1.8,o.depth,0x33594f,this.backdrop);
        this.box(x,1.84,z,o.width+.1,.08,.3,0xb79d68,this.backdrop);
        const title=this.label('G1 · 广场舞台','HANGZHOU ROBOT SCHOOL',3.8,.95);title.position.set(x,1.16,z-.13);title.rotation.y=Math.PI;this.backdrop.add(title);
        for(const sx of [4.25,8.35])this.box(sx,.75,9.96,.10,1.5,.08,0xcab67d,this.backdrop);
      }else if(o.id==='观众座椅'){
        this.box(x,.33,z,o.width,.12,o.depth,0xa28761);this.box(x,.6,z-.22,o.width,.48,.1,0xa28761);
        for(const sx of [x-.25,x+.25])this.box(sx,.15,z,.06,.3,.42,0x53635b);
        const visitor=this.visitor(x,z);this.spectators.push(visitor);this.group.add(visitor);
      }else if(o.id==='庭院花池'){
        this.box(x,.22,z,o.width,.44,o.depth,0xbfc9b7);this.box(x,.46,z,o.width-.12,.05,o.depth-.12,0x596b46);
        const bushMaterial=this.material(0x6d8c59),bushGeometry=new THREE.IcosahedronGeometry(.36,1);
        for(let i=0;i<8;i++){const bush=new THREE.Mesh(bushGeometry,bushMaterial);bush.position.set(x,.63,o.z+.36+i*.57);bush.scale.set(.75,.8,1);this.group.add(bush);}
      }
    }
    this.group.add(this.backdrop);
    // Flat inlaid performance surface deliberately shares the ground height.
    this.flatRect(6.3,8.25,4.7,3.45,0x56766b,.001);
    this.outline(6.3,8.25,4.4,3.2,0xdbd0a7,.016);
    for(const x of [-.53,.53])this.flatRect(x,0,.035,1.3,0xf6f0d9,.017,this.parkingBay);
    this.flatRect(0,-.63,1.06,.06,0xd3ae63,.019,this.parkingBay);
    this.flatRect(0,.63,1.06,.035,0xf6f0d9,.017,this.parkingBay);
    const parkingLabel=this.label('P','倒车停稳',.55,.45);parkingLabel.rotation.x=-Math.PI/2;parkingLabel.position.set(0,.022,0);this.parkingBay.add(parkingLabel);
    const direction=new THREE.ArrowHelper(new THREE.Vector3(0,0,1),new THREE.Vector3(0,.028,.34),.51,0x8b6735,.18,.16);
    this.parkingBay.add(direction);this.group.add(this.parkingBay);
    for(let x=-1.23;x<.06;x+=.19)this.flatRect(x,9.2,.10,.03,0xa8b6a3,.012);
    this.outline(-1.25,6.6,3.25,4.2,0xc0cebc,.014);
    for(let z=4.3;z<10.6;z+=.72)this.flatRect(2.12,z,.035,.28,0xf2eedc,.014);
    this.floorLabel('01  驾驶考场','CONTROL / PRECISION',-1.05,3.65,2.85,.55);
    this.floorLabel('02  广场舞台','PREPARE / PERFORM',6.3,4.3,2.9,.55);
    this.floorLabel('杭州机器人学校','每一次练习，都是进步',6.3,9.4,3.15,.65);
    this.floorLabel('庭院入口 ↓','驾驶考场 / 广场舞台',0,2.75,1.9,.4);
    this.floorLabel('广场舞台 ↓','准备好节目，再出发',6.8,2.75,1.9,.4);
    for(const [x,z]of [[-.85,5.55],[-1.65,6.65]]){const circle=new THREE.Mesh(new THREE.RingGeometry(.28,.3,24),new THREE.MeshBasicMaterial({color:0xe4c893,side:THREE.DoubleSide}));circle.rotation.x=-Math.PI/2;circle.position.set(x,.012,z);this.group.add(circle);}
    this.target=new THREE.Mesh(new THREE.RingGeometry(.94,1,48),new THREE.MeshBasicMaterial({color:0xe4bc5c,side:THREE.DoubleSide,transparent:true,opacity:.9,depthWrite:false}));
    this.target.rotation.x=-Math.PI/2;this.target.position.y=.025;this.target.visible=false;this.group.add(this.target);
  }
  private material(color:number):THREE.MeshStandardMaterial{
    let m=this.materials.get(color);if(!m){m=new THREE.MeshStandardMaterial({color,roughness:.85});this.materials.set(color,m);}return m;
  }
  private box(x:number,y:number,z:number,w:number,h:number,d:number,color:number,parent:THREE.Group=this.group):THREE.Mesh{
    const m=new THREE.Mesh(this.cube,this.material(color));m.position.set(x,y,z);m.scale.set(w,h,d);parent.add(m);return m;
  }
  private flatRect(x:number,z:number,w:number,d:number,color:number,y:number,parent:THREE.Group=this.group):void{
    const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({color}));m.rotation.x=-Math.PI/2;m.position.set(x,y,z);parent.add(m);
  }
  private outline(x:number,z:number,w:number,d:number,color:number,y:number):void{
    for(const sz of [z-d/2,z+d/2])this.flatRect(x,sz,w,.035,color,y);
    for(const sx of [x-w/2,x+w/2])this.flatRect(sx,z,.035,d,color,y);
  }
  private label(title:string,caption:string,w:number,h:number):THREE.Mesh{
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;
    const ctx=canvas.getContext('2d')!;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#f7f0d9';
    ctx.font='500 76px "Microsoft YaHei", sans-serif';ctx.fillText(title,512,95,980);ctx.fillStyle='#d1cfad';ctx.font='30px "Microsoft YaHei", sans-serif';ctx.fillText(caption,512,191,980);
    const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide}));
  }
  private floorLabel(title:string,caption:string,x:number,z:number,w:number,h:number):void{
    const m=this.label(title,caption,w,h);m.rotation.x=-Math.PI/2;m.position.set(x,.022,z);this.group.add(m);
  }
  private paving():THREE.CanvasTexture{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;const c=canvas.getContext('2d')!;
    c.fillStyle='#b5bdae';c.fillRect(0,0,1024,1024);
    // Deterministic small variations keep the paving quiet and repeatable.
    for(let y=0;y<16;y++)for(let x=0;x<16;x++){const v=183+(x*7+y*13)%14;c.fillStyle=`rgb(${v},${v+5},${v-9})`;c.fillRect(x*64+1,y*64+1,62,62);}
    const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;return t;
  }
  private visitor(x:number,z:number):THREE.Group{
    const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=0;
    this.box(0,.68,0,.23,.44,.2,0xb39c74,g);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.115,12,8),this.material(0xe4cdb1));head.position.y=1.03;g.add(head);
    for(const side of [-1,1]){this.box(side*.1,.22,.16,.065,.35,.08,0x53685e,g);const arm=this.box(side*.19,.72,.02,.065,.35,.075,0xb39c74,g);arm.name='applause';}
    return g;
  }
  update(state:DriveState,camera:THREE.Vector3):void{
    const active=state.experience==='course'||state.experience==='show';
    const task=state.experience==='course'?state.course:state.show;
    const layout=state.experience==='course'?state.course.layout:COURSE_CONFIG;
    this.parkingBay.position.set(layout.parking.x,0,layout.parking.z);this.parkingBay.rotation.y=layout.heading;
    const visible=active&&task.step!=='complete'&&!state.hoistContext;
    this.target.visible=visible;if(visible){this.target.position.set(state.target.x,.025,state.target.z);this.target.scale.setScalar(state.target.radius);}
    // Backboard behind the robot must not block a chase camera standing outside the yard.
    this.backdrop.visible=camera.y<4.2&&(camera.z-10.15)*(state.z-10.15)>0;
    const completed=state.experience==='show'&&state.show.step==='complete';
    const phase=completed?1:state.experience==='show'&&state.show.step==='perform'&&Boolean(state.gesture)?.45:0;
    for(const visitor of this.spectators)for(const arm of visitor.children.filter(c=>c.name==='applause'))arm.rotation.z=(arm.position.x>0?-1:1)*phase;
    const key=`${visible}:${state.target.x}:${state.target.z}:${state.target.radius}:${this.backdrop.visible}:${phase}:${layout.heading}`;
    if(key!==this.previous){this.previous=key;this.revision++;}
  }
}
