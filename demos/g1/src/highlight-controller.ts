import * as THREE from 'three';
import type { RobotMapping } from './robot-mapping';

interface HighlightedMaterial { mesh:THREE.Mesh; original:THREE.Material|THREE.Material[]; replacement:THREE.Material|THREE.Material[]; }

/** Owns temporary display materials and always restores the model's original references. */
export class HighlightController {
  private readonly mapping:RobotMapping;
  private readonly originals:HighlightedMaterial[]=[];
  private pulseMeshes:THREE.Mesh[]=[];
  private time=0;
  private baseIntensity=new Map<THREE.Material,number>();
  private activeKey='';

  constructor(mapping:RobotMapping){this.mapping=mapping;}

  highlightLink(linkName:string,color=0x73d8a6):void { this.apply(new Map([[linkName,color]])); }

  highlightChain(linkNames:string[],primaryLink:string,color=0x327a66,warnings:string[]=[]):void {
    const colors=new Map<string,number>();
    for(const link of linkNames)colors.set(link,link===primaryLink?color:0x447f6d);
    for(const link of warnings)colors.set(link,0xb35c32);
    this.apply(colors);
  }

  update(deltaSeconds:number,reducedMotion=false):void {
    this.time+=Math.min(Math.max(deltaSeconds,0),.05);
    const pulse=reducedMotion?0.7:.52+.26*(.5+.5*Math.sin(this.time*Math.PI*2*1.1));
    for(const mesh of this.pulseMeshes){
      const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material];
      for(const material of materials){
        const base=this.baseIntensity.get(material);
        if(base!==undefined&&(material as THREE.MeshStandardMaterial).emissive)(material as THREE.MeshStandardMaterial).emissiveIntensity=base*pulse;
      }
    }
  }

  clear():void {
    for(const {mesh,original,replacement} of this.originals){
      mesh.material=original;
      for(const material of Array.isArray(replacement)?replacement:[replacement])material.dispose();
    }
    this.originals.length=0;this.pulseMeshes=[];this.baseIntensity.clear();this.activeKey='';
  }

  private apply(links:Map<string,number>):void {
    const key=[...links].map(([name,color])=>`${name}:${color}`).join('|');
    if(key===this.activeKey)return;
    this.clear();
    this.activeKey=key;
    for(const [linkName,color] of links){
      for(const mesh of this.mapping.meshesByLink.get(linkName)??[]){
        const original=mesh.material;
        const source=Array.isArray(original)?original:[original];
        const replacement=source.map(material=>{
          const clone=material.clone();
          const lit=clone as THREE.MeshStandardMaterial;
          if(lit.emissive){lit.color.lerp(new THREE.Color(color),.35);lit.emissive.setHex(color);const base=.45;lit.emissiveIntensity=base;this.baseIntensity.set(lit,base);}
          else if('color' in lit)(lit as THREE.MeshStandardMaterial).color.lerp(new THREE.Color(color),.32);
          return clone;
        });
        mesh.material=Array.isArray(original)?replacement:replacement[0];
        this.originals.push({mesh,original,replacement:Array.isArray(original)?replacement:replacement[0]});
        this.pulseMeshes.push(mesh);
      }
    }
  }
}
