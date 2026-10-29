import type { PartControl } from './interaction-config';
import type { MotionChallenge } from './motion-challenges';

function region(name:string):string|undefined {
  if(/waist|torso|pelvis/.test(name))return 'body';
  const side=/^(left|right)_/.exec(name)?.[1];
  if(!side)return;
  if(/shoulder|elbow|wrist|rubber_hand/.test(name))return `${side}-arm`;
  if(/hip|knee|ankle/.test(name))return `${side}-leg`;
}

/** A shoulder's hidden axes remain reachable by dragging any shell on that arm. */
export function resolveTrainingControl(
  task:MotionChallenge,selectedJoint:string,linkName:string,defaultControl:PartControl|undefined,controls:readonly PartControl[],
):PartControl|undefined {
  const part=region(linkName);if(!part)return;
  const allowed=new Set(task.joints.map(goal=>goal.name));
  if(allowed.has(selectedJoint)&&region(selectedJoint)===part)return controls.find(control=>control.jointName===selectedJoint);
  if(defaultControl&&allowed.has(defaultControl.jointName))return defaultControl;
  return controls.find(control=>allowed.has(control.jointName)&&region(control.jointName)===part);
}
