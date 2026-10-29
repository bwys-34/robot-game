import * as THREE from 'three';
import { PoseChain } from './pose-chain';
import { challengeAngles, type MotionChallenge } from './motion-challenges';

/** A few lines and joint dots, rather than a second copy of the high-poly robot. */
export class TargetPoseView {
  readonly group=new THREE.Group();
  private lineMaterial=new THREE.LineDashedMaterial({color:0x9c702f,dashSize:.018,gapSize:.012,transparent:true,opacity:.75,depthTest:false,depthWrite:false});
  private dotMaterial=new THREE.MeshBasicMaterial({color:0xbc8d42,transparent:true,opacity:.7,depthTest:false,depthWrite:false});
  private dotGeometry=new THREE.SphereGeometry(.012,8,6);
  constructor(private readonly scene:THREE.Scene,private readonly pose:PoseChain){
    this.group.name='training_target_pose';this.group.visible=false;scene.add(this.group);
  }
  show(task:MotionChallenge):void {
    this.clear();
    this.pose.previewPose(challengeAngles(task),()=>{
      const used=new Set(task.joints.map(joint=>joint.name));
      const paths:string[][]=[];
      if([...used].some(name=>name.startsWith('waist_')))paths.push(['pelvis','waist_yaw_joint','torso_link','head_link']);
      for(const side of ['left','right']){
        if([...used].some(name=>name.startsWith(side+'_')&&/shoulder|elbow|wrist/.test(name)))paths.push([`${side}_shoulder_pitch_joint`,`${side}_elbow_joint`,`${side}_wrist_roll_joint`,`${side}_rubber_hand`]);
        if([...used].some(name=>name.startsWith(side+'_')&&/hip|knee|ankle/.test(name)))paths.push([`${side}_hip_pitch_joint`,`${side}_knee_joint`,`${side}_ankle_pitch_joint`,`${side}_ankle_roll_link`]);
      }
      for(const path of paths){
        const points=path.map(name=>this.pose.model.getObjectByName(name)?.getWorldPosition(new THREE.Vector3())).filter((point):point is THREE.Vector3=>Boolean(point));
        if(points.length<2)continue;
        const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),this.lineMaterial);line.computeLineDistances();line.renderOrder=6;this.group.add(line);
      }
      for(const joint of task.joints){
        const node=this.pose.model.getObjectByName(joint.name);if(!node)continue;
        const dot=new THREE.Mesh(this.dotGeometry,this.dotMaterial);node.getWorldPosition(dot.position);dot.renderOrder=6;this.group.add(dot);
      }
      // A limb's centerline cannot explain wrist roll; add a small palm orientation glyph.
      for(const joint of task.joints.filter(joint=>joint.name.includes('wrist'))){
        const hand=this.pose.model.getObjectByName(`${joint.name.split('_')[0]}_rubber_hand`);if(!hand)continue;
        const center=new THREE.Box3().setFromObject(hand).getCenter(new THREE.Vector3());
        const orientation=hand.getWorldQuaternion(new THREE.Quaternion());
        const local=[new THREE.Vector3(0,-.055,0),new THREE.Vector3(0,.055,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,.065)];
        const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(local.map(point=>point.applyQuaternion(orientation).add(center))),this.lineMaterial);
        line.computeLineDistances();line.renderOrder=6;this.group.add(line);
      }
    });
    this.group.visible=true;
  }
  hide():void{this.group.visible=false;}
  private clear():void{
    for(const child of [...this.group.children]){
      if((child as THREE.Line).isLine)(child as THREE.Line).geometry.dispose();
      this.group.remove(child);
    }
  }
  dispose():void{this.clear();this.group.removeFromParent();this.dotGeometry.dispose();this.lineMaterial.dispose();this.dotMaterial.dispose();}
}
