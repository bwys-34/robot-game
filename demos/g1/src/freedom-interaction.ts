import * as THREE from 'three';
import type { RobotMapping } from './robot-mapping';
import type { G1InteractionConfig, PartControl } from './interaction-config';

export interface PickResult { linkName:string; jointName?:string; correct:boolean; control?:PartControl; }
export interface DragHandlers {
  enabled?:()=>boolean;
  resolveControl?:(linkName:string,defaultControl:PartControl|undefined)=>PartControl|undefined;
  onStart:(part:PickResult)=>void;
  /** Total offset from pointerdown; the owner adds its captured start angle. */
  onMove:(part:PickResult,offsetDegrees:number)=>void;
  onEnd:()=>void;
  onCaptureChange:(active:boolean)=>void;
}
interface Gesture { id:number;x:number;y:number;time:number;part?:PickResult;dragging:boolean;moved:boolean; }

/** Part manipulation owns its gesture; the remaining surface is available for orbit. */
export class FreedomInteraction {
  private readonly raycaster=new THREE.Raycaster();
  private readonly surfaceMeshes:THREE.Mesh[];
  private gesture:Gesture|null=null;

  constructor(
    private readonly canvas:HTMLCanvasElement,private readonly camera:THREE.Camera,
    private readonly mapping:RobotMapping,private readonly config:G1InteractionConfig,
    private readonly onPick:(result:PickResult)=>void,private readonly drag?:DragHandlers,
  ){
    this.surfaceMeshes=[...mapping.meshesByLink.values()].flat();
    canvas.addEventListener('pointerdown',this.pointerDown,true);
    canvas.addEventListener('pointermove',this.pointerMove,true);
    canvas.addEventListener('pointerup',this.pointerUp,true);
    canvas.addEventListener('pointercancel',this.pointerCancel,true);
    canvas.addEventListener('lostpointercapture',this.pointerCancel,true);
  }

  resolveControl(linkName:string):PartControl|undefined {
    const joint=this.mapping.linkToJoint.get(linkName)?.name;
    const control=this.config.partControls.find(control=>this.mapping.joints.has(control.jointName)&&
      (control.aliases?.includes(linkName)||control.jointName===joint));
    return this.drag?.resolveControl?this.drag.resolveControl(linkName,control):control;
  }

  dispose():void {
    this.finish();
    this.canvas.removeEventListener('pointerdown',this.pointerDown,true);
    this.canvas.removeEventListener('pointermove',this.pointerMove,true);
    this.canvas.removeEventListener('pointerup',this.pointerUp,true);
    this.canvas.removeEventListener('pointercancel',this.pointerCancel,true);
    this.canvas.removeEventListener('lostpointercapture',this.pointerCancel,true);
  }

  private pick(x:number,y:number):PickResult|undefined {
    const rect=this.canvas.getBoundingClientRect();
    this.camera.updateMatrixWorld();
    this.raycaster.setFromCamera(new THREE.Vector2((x-rect.left)/rect.width*2-1,-(y-rect.top)/rect.height*2+1),this.camera);
    // Fixed shells occlude joints and may explain a fixed part to the visitor.
    const hit=this.raycaster.intersectObjects(this.surfaceMeshes,false)[0];
    if(!hit)return;
    const linkName=String(hit.object.userData.linkName),control=this.resolveControl(linkName);
    const jointName=control?.jointName??this.mapping.linkToJoint.get(linkName)?.name;
    return {linkName,jointName,control,correct:jointName===this.config.targetJointName};
  }

  private reserve(event:PointerEvent):void {event.preventDefault();event.stopImmediatePropagation();}

  private pointerDown=(event:PointerEvent):void=>{
    if(this.gesture||event.button!==0||!event.isPrimary){this.finish();return;}
    const part=this.drag?.enabled?.()===false?undefined:this.pick(event.clientX,event.clientY);
    this.gesture={id:event.pointerId,x:event.clientX,y:event.clientY,time:performance.now(),part,dragging:false,moved:false};
    if(part?.control&&this.drag){
      this.reserve(event);
      this.drag.onCaptureChange(true);
      this.canvas.setPointerCapture?.(event.pointerId);
      this.canvas.style.cursor='grabbing';
    }
  };

  private pointerMove=(event:PointerEvent):void=>{
    const gesture=this.gesture;
    if(!gesture||event.pointerId!==gesture.id)return;
    const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
    if(Math.hypot(dx,dy)>=this.config.click.maximumDistancePixels)gesture.moved=true;
    if(!gesture.part?.control||!this.drag)return;
    this.reserve(event);
    if(!gesture.moved)return;
    if(!gesture.dragging){gesture.dragging=true;this.drag.onStart(gesture.part);}
    const rect=this.canvas.getBoundingClientRect(),control=gesture.part.control;
    const fraction=control.dragAxis==='y'?-dy/rect.height:dx/rect.width;
    this.drag.onMove(gesture.part,fraction*control.dragSensitivity);
  };

  private pointerUp=(event:PointerEvent):void=>{
    const gesture=this.gesture;
    if(!gesture||event.pointerId!==gesture.id)return;
    if(gesture.part?.control&&this.drag)this.reserve(event);
    const isClick=!gesture.moved&&!gesture.dragging&&
      Math.hypot(event.clientX-gesture.x,event.clientY-gesture.y)<this.config.click.maximumDistancePixels&&
      performance.now()-gesture.time<this.config.click.maximumDurationMilliseconds;
    this.finish();
    if(isClick&&gesture.part)this.onPick(gesture.part);
  };

  private pointerCancel=(event:PointerEvent):void=>{if(this.gesture?.id===event.pointerId)this.finish();};

  private finish():void {
    const gesture=this.gesture;this.gesture=null;
    if(!gesture?.part?.control||!this.drag)return;
    if(gesture.dragging)this.drag.onEnd();
    this.drag.onCaptureChange(false);
    if(this.canvas.hasPointerCapture?.(gesture.id))this.canvas.releasePointerCapture(gesture.id);
    this.canvas.style.cursor='';
  }
}
