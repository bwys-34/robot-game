import * as THREE from 'three';
import type { BalanceResult } from './balance-analysis';

const COLORS={balanced:0x327a66,near:0xb27632,outside:0xb44b43};

export class BalanceVisualizer {
  private readonly group=new THREE.Group();
  private readonly areaMaterial=new THREE.MeshBasicMaterial({color:COLORS.balanced,transparent:true,opacity:.1,depthWrite:false,side:THREE.DoubleSide});
  private readonly lineMaterial=new THREE.LineBasicMaterial({color:COLORS.balanced,transparent:true,opacity:.8});
  private readonly projection=new THREE.Mesh(new THREE.CircleGeometry(.012,20),new THREE.MeshBasicMaterial({color:COLORS.balanced,depthTest:true,depthWrite:false,side:THREE.DoubleSide}));
  private readonly center=new THREE.Mesh(new THREE.SphereGeometry(.01,12,8),new THREE.MeshBasicMaterial({color:0x273c38,depthTest:true}));
  private area:THREE.Mesh|null=null;
  private outline:THREE.LineLoop|null=null;
  private readonly comLine=new THREE.Line(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(6),3)),this.lineMaterial);
  private lastKey='';
  private displayGroundY=0;

  constructor(private readonly scene:THREE.Scene,private readonly groundY=0){
    this.group.name='g1-balance-overlay';this.group.visible=false;scene.add(this.group);
    this.group.add(this.projection,this.center,this.comLine);
    this.comLine.renderOrder=8;
    this.projection.rotation.x=-Math.PI/2;
    this.projection.renderOrder=9;this.center.renderOrder=9;
  }

  update(result:BalanceResult,center:THREE.Vector3,contactPlaneY=this.groundY):void {
    this.group.visible=true;
    // Follow only contacting soles; a lifted foot never raises the support plane.
    this.displayGroundY=Math.max(this.groundY,contactPlaneY);
    const color=COLORS[result.state];
    this.projection.position.set(result.projection.x,this.displayGroundY+.005,result.projection.z);
    this.center.position.copy(center);
    (this.projection.material as THREE.MeshBasicMaterial).color.setHex(color);
    this.lineMaterial.color.setHex(color);
    const key=this.displayGroundY.toFixed(4)+':'+result.state+':'+result.polygon.map(point=>`${point.x.toFixed(3)},${point.z.toFixed(3)}`).join(';');
    if(key!==this.lastKey){this.lastKey=key;this.updatePolygon(result,color);}
    const positions=this.comLine.geometry.attributes.position;
    positions.setXYZ(0,result.projection.x,this.displayGroundY+.005,result.projection.z);
    positions.setXYZ(1,center.x,center.y,center.z);positions.needsUpdate=true;
    this.comLine.geometry.computeBoundingSphere();
  }

  clear():void { this.group.visible=false; }

  dispose():void {
    this.scene.remove(this.group);
    this.area?.geometry.dispose();this.outline?.geometry.dispose();this.comLine?.geometry.dispose();
    this.areaMaterial.dispose();this.lineMaterial.dispose();
    this.projection.geometry.dispose();this.center.geometry.dispose();
    (this.projection.material as THREE.Material).dispose();(this.center.material as THREE.Material).dispose();
  }

  private updatePolygon(result:BalanceResult,color:number):void {
    if(this.area){this.group.remove(this.area);this.area.geometry.dispose();}
    if(this.outline){this.group.remove(this.outline);this.outline.geometry.dispose();}
    if(result.polygon.length<3){this.area=null;this.outline=null;return;}
    this.areaMaterial.color.setHex(color);this.lineMaterial.color.setHex(color);
    const shape=new THREE.Shape();shape.moveTo(result.polygon[0].x,result.polygon[0].z);
    for(let i=1;i<result.polygon.length;i++)shape.lineTo(result.polygon[i].x,result.polygon[i].z);
    shape.closePath();
    this.area=new THREE.Mesh(new THREE.ShapeGeometry(shape),this.areaMaterial);
    this.area.rotation.x=Math.PI/2;this.area.position.y=this.displayGroundY+.003;this.area.renderOrder=7;this.group.add(this.area);
    const points=result.polygon.map(point=>new THREE.Vector3(point.x,this.displayGroundY+.004,point.z));
    this.outline=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points),this.lineMaterial);
    this.outline.renderOrder=8;this.group.add(this.outline);
  }
}
