export interface PoseGoalJoint {
  name:string;
  label:string;
  degrees:number;
  tolerance:number;
}
export interface MotionChallenge {
  id:string;
  title:string;
  description:string;
  focusJoint:string;
  joints:PoseGoalJoint[];
  hints:readonly [string,string];
}

const goal=(name:string,label:string,degrees:number):PoseGoalJoint=>({name,label,degrees,tolerance:12});
/** URDF degrees for this sample. These are exhibit poses, not real robot commands. */
export const MOTION_CHALLENGES:readonly MotionChallenge[]=[
  {id:'first-lift',title:'抬起小臂',description:'第一步，只动一个部位：按住亮起的右小臂，把手抬到身前，像准备接住一件小礼物。',focusJoint:'right_elbow_joint',hints:['上臂保持自然下垂，只弯曲右肘，让小臂向身前抬起。','手掌靠近腰部上方即可，不用举过头顶；打开轮廓可以比一比。'],joints:[
    goal('right_elbow_joint','右小臂 · 弯曲',60),
  ]},
  {id:'wave',title:'挥手招呼',description:'把右手举到头旁，向刚进展厅的游客打个招呼。',focusJoint:'right_elbow_joint',hints:['先把右臂向前抬，再向外打开，最后弯曲右肘。','让右手高过肩膀，手肘保持弯曲；可以打开轮廓比一比。'],joints:[
    goal('right_shoulder_pitch_joint','右肩前后摆',-80),goal('right_shoulder_roll_joint','右肩侧摆',-80),goal('right_elbow_joint','右肘屈伸',60),
  ]},
  {id:'welcome',title:'双臂迎宾',description:'展开双臂，为游客送上一个大大的欢迎。',focusJoint:'left_shoulder_roll_joint',hints:['左右肩向两侧打开，再让双肘微微弯曲。','两只手要拉开距离，左右尽量对称，不用朝前抬臂。'],joints:[
    goal('left_shoulder_roll_joint','左肩侧摆',85),goal('left_elbow_joint','左肘屈伸',20),
    goal('right_shoulder_roll_joint','右肩侧摆',-85),goal('right_elbow_joint','右肘屈伸',20),
  ]},
  {id:'offer',title:'向前递物',description:'假想手中有一件小礼物，把它递给面前的游客。',focusJoint:'left_elbow_joint',hints:['双肩向前抬，双肘同时弯曲，双手保持在身体前方。','手掌应靠近胸前高度，两边手臂姿态相似。'],joints:[
    goal('left_shoulder_pitch_joint','左肩前后摆',-65),goal('left_elbow_joint','左肘屈伸',50),
    goal('right_shoulder_pitch_joint','右肩前后摆',-65),goal('right_elbow_joint','右肘屈伸',50),
  ]},
  {id:'crouch',title:'屈膝准备',description:'让 G1 轻轻蹲下，摆出准备起身的姿态。',focusJoint:'left_knee_joint',hints:['双膝屈曲，髋与踝向相反方向补偿；左右一起调整。','这是轻蹲，双脚尽量放平，髋和踝的变化比膝更小。'],joints:[
    goal('left_hip_pitch_joint','左髋前后摆',-15),goal('left_knee_joint','左膝屈伸',30),goal('left_ankle_pitch_joint','左踝俯仰',-15),
    goal('right_hip_pitch_joint','右髋前后摆',-15),goal('right_knee_joint','右膝屈伸',30),goal('right_ankle_pitch_joint','右踝俯仰',-15),
  ]},
  {id:'step',title:'抬脚跨步',description:'右腿支撑，左脚离地，准备向前迈出一步。',focusJoint:'left_knee_joint',hints:['先让左大腿向前抬，再弯左膝，最后调整左脚踝。','只调整左腿；用脚踝补偿，让抬起的脚不向下绷直。'],joints:[
    goal('left_hip_pitch_joint','左髋前后摆',-30),goal('left_knee_joint','左膝屈伸',60),goal('left_ankle_pitch_joint','左踝俯仰',-30),
  ]},
  {id:'salute',title:'举手致意',description:'抬起右臂，让右手升到头旁，向游客致意。',focusJoint:'right_elbow_joint',hints:['右肩向前抬，稍微向外打开，再调整右肘，让手升到头旁。','右臂不用像挥手时打开得那么远，观察手掌的高度。'],joints:[
    goal('right_shoulder_pitch_joint','右肩前后摆',-90),goal('right_shoulder_roll_joint','右肩侧摆',-25),goal('right_elbow_joint','右肘屈伸',20),
  ]},
  {id:'cheer',title:'双手加油',description:'双手举高，摆出庆祝挑战成功的姿态。',focusJoint:'left_shoulder_pitch_joint',hints:['双臂向前举起，再向左右打开，双肘保持弯曲。','让两只手都高过肩膀，像举手欢呼，左右对称。'],joints:[
    goal('left_shoulder_pitch_joint','左肩前后摆',-90),goal('left_shoulder_roll_joint','左肩侧摆',50),goal('left_elbow_joint','左肘屈伸',60),
    goal('right_shoulder_pitch_joint','右肩前后摆',-90),goal('right_shoulder_roll_joint','右肩侧摆',-50),goal('right_elbow_joint','右肘屈伸',60),
  ]},
  {id:'point',title:'伸手指路',description:'伸出左臂，为游客指向前方的展区。',focusJoint:'left_shoulder_pitch_joint',hints:['把左臂向前抬，稍向外打开，左肘只留一点弯曲。','左手向前伸远一些；右臂保持原位。'],joints:[
    goal('left_shoulder_pitch_joint','左肩前后摆',-30),goal('left_shoulder_roll_joint','左肩侧摆',20),goal('left_elbow_joint','左肘屈伸',10),
  ]},
  {id:'bow',title:'礼貌鞠躬',description:'用腰部带动上身向前倾，做一个礼貌的鞠躬。',focusJoint:'waist_pitch_joint',hints:['选择腰部前后俯仰，上身向前倾，双肘稍稍弯起。','腿保持原位，让动作主要来自腰部，不要屈膝下蹲。'],joints:[
    goal('waist_pitch_joint','腰部前后俯仰',25),goal('left_elbow_joint','左肘屈伸',25),goal('right_elbow_joint','右肘屈伸',25),
  ]},
  {id:'turn',title:'转身介绍',description:'上身转向一侧，抬起左手，介绍身旁的展品。',focusJoint:'waist_yaw_joint',hints:['先转动腰部，再抬左臂、弯左肘。双脚不用转动。','左手保持在身体前方，上身朝一侧转，避免只扭手腕。'],joints:[
    goal('waist_yaw_joint','腰部左右转动',35),goal('left_shoulder_pitch_joint','左肩前后摆',-40),goal('left_elbow_joint','左肘屈伸',45),
  ]},
  {id:'guard',title:'双臂准备',description:'双肘弯起、双手抬到身前，摆出专注的准备姿态。',focusJoint:'right_elbow_joint',hints:['双肩向前抬并稍微向外打开，双肘明显弯起。','两只手应靠近肩前，双臂不要贴进躯干。'],joints:[
    goal('left_shoulder_pitch_joint','左肩前后摆',-85),goal('left_shoulder_roll_joint','左肩侧摆',20),goal('left_elbow_joint','左肘屈伸',75),
    goal('right_shoulder_pitch_joint','右肩前后摆',-85),goal('right_shoulder_roll_joint','右肩侧摆',-20),goal('right_elbow_joint','右肘屈伸',75),
  ]},
  {id:'palm',title:'翻掌展示',description:'抬起左臂，转动手腕，把手掌展示给游客。',focusJoint:'left_wrist_roll_joint',hints:['先抬左肩、弯左肘，让手在胸前；再选择手腕滚转。','手臂负责把手送到前方，手腕负责改变掌面的朝向。'],joints:[
    goal('left_shoulder_pitch_joint','左肩前后摆',-60),goal('left_elbow_joint','左肘屈伸',60),goal('left_wrist_roll_joint','左手腕滚转',60),
  ]},
];

export const TRAINING_RULES={minimumScore:80,errorSpanDegrees:60,neutralToleranceDegrees:8,collisionPenalty:25} as const;
export function challengeAngles(task:MotionChallenge):Record<string,number>{return Object.fromEntries(task.joints.map(joint=>[joint.name,joint.degrees]));}
