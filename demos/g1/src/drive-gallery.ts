import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRIVE_CONFIG,DRIVE_SPACES,DRIVE_PARTITIONS} from './drive-config';

const WALLS=['gallery-back','gallery-front','gallery-left','gallery-right','gallery-ceiling','lab-back','lab-front','lab-right','lab-ceiling'] as const;
type Wall=typeof WALLS[number];
type Visibility=Record<Wall,boolean>;

/** Hide camera-facing shells, including all tall walls in the map-like overview. */
export function galleryVisibility(camera:{x:number;y:number;z:number},out={} as Visibility,target?:{x:number;z:number}):Visibility{
  const room=DRIVE_SPACES.gallery,interior=camera.y<3.35;
  out['gallery-back']=interior&&camera.z>room.minZ+.12;
  out['gallery-front']=interior&&camera.z<room.maxZ-.12;
  out['gallery-left']=interior&&camera.x>room.minX+.12;
  out['gallery-right']=interior&&(target?((camera.x-room.maxX)*(target.x-room.maxX)>0):camera.x<room.maxX-.12);
  out['gallery-ceiling']=camera.y<2.85;
  out['lab-back']=interior&&camera.z>DRIVE_SPACES.lab.minZ+.12;
  out['lab-front']=interior&&camera.z<DRIVE_SPACES.lab.maxZ-.12;
  out['lab-right']=interior&&camera.x<DRIVE_SPACES.lab.maxX-.12;
  out['lab-ceiling']=camera.y<2.85;
  return out;
}

/** Static lighting is baked once in Blender; no shadow maps or per-frame meshes. */
export class DriveGallery{
  readonly group=new THREE.Group();
  revision=0;
  private readonly fallback:THREE.Mesh;
  private readonly fallbackObstacles=new THREE.Group();
  private readonly walls=new Map<Wall,THREE.Object3D>();
  private readonly visibility={} as Visibility;
  constructor(){
    this.group.name='modern-gallery';
    this.fallback=new THREE.Mesh(new THREE.PlaneGeometry(24,24),new THREE.MeshBasicMaterial({color:0xe2e4dc,toneMapped:false}));
    this.fallback.rotation.x=-Math.PI/2;this.fallback.position.y=-.012;this.group.add(this.fallback);
    const porcelain=new THREE.MeshStandardMaterial({color:0xe1e5d9,roughness:.8});
    for(const o of DRIVE_CONFIG.obstacles.filter((o,i)=>i<2||o.id==='实验室设备柜')){
      const height=o.id==='实验室设备柜'?1.1:.57;
      const plinth=new THREE.Mesh(new THREE.BoxGeometry(o.width,height,o.depth),porcelain);plinth.position.set(o.x+o.width/2,height/2,o.z+o.depth/2);this.fallbackObstacles.add(plinth);
    }
    for(const o of DRIVE_PARTITIONS){const wall=new THREE.Mesh(new THREE.BoxGeometry(o.width,.25,o.depth),porcelain);wall.position.set(o.x+o.width/2,.125,o.z+o.depth/2);this.fallbackObstacles.add(wall);}
    const room=DRIVE_CONFIG.room,w=room.maxX-room.minX,d=room.maxZ-room.minZ;
    for(const z of [room.minZ,room.maxZ]){const wall=new THREE.Mesh(new THREE.BoxGeometry(w,.2,.06),porcelain);wall.position.set((room.minX+room.maxX)/2,.1,z);this.fallbackObstacles.add(wall);}
    for(const x of [room.minX,room.maxX]){const wall=new THREE.Mesh(new THREE.BoxGeometry(.06,.2,d),porcelain);wall.position.set(x,.1,(room.minZ+room.maxZ)/2);this.fallbackObstacles.add(wall);}
    this.group.add(this.fallbackObstacles);
  }
  async load(maxAnisotropy=2):Promise<void>{
    try{
      const [{scene},floorMap]=await Promise.all([
        new GLTFLoader().loadAsync('../assets/gallery/modern-gallery.glb'),
        new THREE.TextureLoader().loadAsync('../assets/gallery/modern-gallery-floor.jpg'),
      ]);
      floorMap.colorSpace=THREE.SRGBColorSpace;floorMap.anisotropy=Math.min(4,maxAnisotropy);
      const room={...DRIVE_CONFIG.room,maxZ:DRIVE_SPACES.gallery.maxZ};
      const floor=new THREE.Mesh(new THREE.PlaneGeometry(room.maxX-room.minX,room.maxZ-room.minZ),new THREE.MeshBasicMaterial({map:floorMap,toneMapped:false}));
      floor.name='gallery-baked-floor';floor.rotation.x=-Math.PI/2;floor.position.set((room.minX+room.maxX)/2,.0005,(room.minZ+room.maxZ)/2);
      scene.add(floor);
      const bakedSlab=scene.getObjectByName('gallery-floor');if(bakedSlab)bakedSlab.visible=false;
      const labSlab=scene.getObjectByName('lab-floor');if(labSlab)labSlab.visible=false;
      scene.traverse(object=>{
        if(!(object instanceof THREE.Mesh))return;
        // The JPEG atlas already includes Blender's display transform.
        for(const material of Array.isArray(object.material)?object.material:[object.material]){
          material.toneMapped=false;
          if(material instanceof THREE.MeshBasicMaterial)material.color.setScalar(1.18);
          const map=(material as THREE.MeshBasicMaterial).map;
          if(map)map.anisotropy=Math.min(4,maxAnisotropy);
        }
      });
      this.group.add(scene);this.fallback.visible=false;this.fallbackObstacles.visible=false;
      for(const name of WALLS){const object=scene.getObjectByName(name);if(object)this.walls.set(name,object);}
      const g=DRIVE_SPACES.gallery,l=DRIVE_SPACES.lab,d=DRIVE_SPACES.door;
      this.addSign('gallery-back',DRIVE_SPACES.name,'机器人探索展厅','HANGZHOU ROBOT SCHOOL / GALLERY',0,1.58,g.minZ+.10,0,2.8,.8);
      this.addSign('gallery-front',DRIVE_SPACES.name,'在这里，发现机器人的可能','EXPLORE · LEARN · PLAY',0,1.58,g.maxZ-.10,Math.PI,2.8,.8);
      this.addSign('gallery-left','EXPLORE','发现关节的奥秘','OBSERVE / TRY / DISCOVER',g.minX+.15,1.65,-.6,Math.PI/2,1.9,.9);
      this.addSign('gallery-right','ROBOT LAB','工业实验室 →','HOIST / SUPPORT / PROGRAM',d.x-.105,2.78,(d.minZ+d.maxZ)/2,-Math.PI/2,1.8,.48);
      this.addSign('lab-back','ROBOT LAB','杭州机器人学校 · 调试实验室','SUPPORT / EXPERIMENT / DISCOVER',6.5,1.95,l.minZ+.10,0,3.0,.9);
      this.addSign('lab-right','吊挂 · 调试','先挂接，再切换模式','H / SUPPORT STATION',l.maxX-.12,1.7,-.65,-Math.PI/2,2.2,1.0);
      this.addFloorSign('gallery-wayfinding','工业实验室 →',1.1,.95,0,1.75);
      this.addFloorSign('lab-wayfinding','← 机器人展厅',4.8,1.85,0,1.75);
      this.addFloorSign('gallery-identity','杭州机器人学校',-.3,2.1,0,2.8);
      this.revision++;
    }catch(error){
      // A missing decorative asset must not prevent the existing robot game loading.
      console.warn('展厅场景暂未载入，使用简化地面。',error);
    }
  }
  private addFloorSign(name:string,label:string,x:number,z:number,rotation:number,width:number):void{
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=160;const ctx=canvas.getContext('2d');if(!ctx)return;
    ctx.fillStyle=name.startsWith('lab')?'#e3b858':'#47665b';ctx.font='500 74px "Microsoft YaHei",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,512,80,1000);
    const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,width*160/1024),new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false,toneMapped:false}));
    mesh.name=name;mesh.rotation.set(-Math.PI/2,0,rotation);mesh.position.set(x,.008,z);this.group.add(mesh);
  }
  private addSign(wall:Wall,title:string,subtitle:string,caption:string,x:number,y:number,z:number,rotation:number,width=2.6,height=1.3):void{
    const parent=this.walls.get(wall);if(!parent)return;
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;
    const ctx=canvas.getContext('2d');if(!ctx)return;
    ctx.fillStyle=title===DRIVE_SPACES.name?'#234d40':'#f3f1e7';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font=`500 ${title===DRIVE_SPACES.name?90:72}px "Microsoft YaHei","Segoe UI",sans-serif`;ctx.fillText(title,512,138,960);
    ctx.font='46px "Microsoft YaHei",sans-serif';ctx.fillText(subtitle,512,258,940);
    ctx.globalAlpha=.7;ctx.font='22px "Segoe UI",sans-serif';ctx.fillText(caption,512,366,940);
    const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false,toneMapped:false}));
    mesh.name='gallery-sign-'+wall;mesh.position.set(x,y,z);mesh.rotation.y=rotation;parent.add(mesh);
  }
  update(camera:THREE.Vector3,target?:THREE.Vector3):void{
    galleryVisibility(camera,this.visibility,target);
    for(const name of WALLS){
      const wall=this.walls.get(name);
      // Courtyard facade with actual door openings replaces the old solid front shells.
      const visible=name==='gallery-front'||name==='lab-front'?false:this.visibility[name];
      if(wall&&wall.visible!==visible){wall.visible=visible;this.revision++;}
    }
  }
}
