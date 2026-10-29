import * as THREE from 'three';

/** Render-only sway. Clear before pose/analysis so effects cannot change the verdict. */
export class WarningFeedback {
  private readonly pivot=new THREE.Group();
  private readonly parent:THREE.Object3D;
  private readonly footBox=new THREE.Box3();
  private transformed=false;
  constructor(private readonly model:THREE.Object3D,private readonly feet:THREE.Object3D[]=[],private readonly groundY=0){
    this.parent=model.parent!;
    this.pivot.name='teaching-warning-sway';
    this.parent.add(this.pivot);this.pivot.add(model);
  }
  clearTransform():void {
    if(!this.transformed)return;
    this.pivot.quaternion.identity();this.pivot.position.set(0,0,0);this.pivot.updateMatrixWorld(true);this.transformed=false;
  }
  render(time:number,unbalanced:boolean,reducedMotion:boolean):void {
    this.clearTransform();
    if(unbalanced&&!reducedMotion){
      this.transformed=true;
      this.pivot.rotation.set(Math.sin(time*5)*.004,0,Math.sin(time*4.1)*.006);
      this.pivot.updateMatrixWorld(true);
      // Display-only correction: the tiny warning tilt must not sink a support sole.
      let lowest=Infinity;
      for(const foot of this.feet)lowest=Math.min(lowest,this.footBox.setFromObject(foot).min.y);
      if(lowest<this.groundY){
        const origin=this.parent.worldToLocal(new THREE.Vector3(0,0,0));
        const raised=this.parent.worldToLocal(new THREE.Vector3(0,this.groundY-lowest+.001,0));
        this.pivot.position.add(raised.sub(origin));this.pivot.updateMatrixWorld(true);
      }
    }
  }
  /** Display-only tilt around the contact plane; never retained during safety reads. */
  renderFall(direction:THREE.Vector3,anchor:THREE.Vector3,progress:number,reducedMotion:boolean):void {
    this.clearTransform();
    if(reducedMotion)return;
    this.transformed=true;
    const d=direction.clone().setY(0).normalize();
    if(d.lengthSq()<1e-8)d.set(1,0,0);
    const axis=new THREE.Vector3(d.z,0,-d.x);
    const t=THREE.MathUtils.clamp(progress,0,1),angle=THREE.MathUtils.degToRad(15)*t*t*(3-2*t);
    const worldRotation=new THREE.Quaternion().setFromAxisAngle(axis,angle);
    const parentRotation=this.parent.getWorldQuaternion(new THREE.Quaternion());
    this.pivot.quaternion.copy(parentRotation).invert().multiply(worldRotation).multiply(parentRotation);
    const localAnchor=this.parent.worldToLocal(anchor.clone());
    this.pivot.position.copy(localAnchor).sub(localAnchor.clone().applyQuaternion(this.pivot.quaternion));
    this.pivot.updateMatrixWorld(true);
    let lowest=Infinity;
    for(const foot of this.feet)lowest=Math.min(lowest,this.footBox.setFromObject(foot).min.y);
    if(lowest<this.groundY){
      const a=this.parent.worldToLocal(new THREE.Vector3()),b=this.parent.worldToLocal(new THREE.Vector3(0,this.groundY-lowest+.001,0));
      this.pivot.position.add(b.sub(a));this.pivot.updateMatrixWorld(true);
    }
  }
  dispose():void {this.clearTransform();this.parent.add(this.model);this.pivot.removeFromParent();}
}
