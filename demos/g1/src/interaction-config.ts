export interface CollisionPairConfig {
  id: string;
  first: string;
  second: string;
  label: string;
  marginMeters?:number;
}

export interface PartControl {
  jointName:string;
  label:string;
  dragAxis:'x'|'y';
  /** Degrees per full viewer height/width. Up/right means a positive angle. */
  dragSensitivity:number;
  aliases?:string[];
}

export interface DiscoveryChainConfig {
  id:string;
  label:string;
  joints:{name:string;label:string;link:string}[];
  links:string[];
  presets:{id:string;label:string;kneeDegrees:number}[];
}

export interface G1InteractionConfig {
  targetJointName: string;
  targetLinkName: string;
  jointNames: {
    leftHipPitch: string;
    leftKnee: string;
    leftAnklePitch: string;
    rightHipPitch: string;
    rightKnee: string;
    rightAnklePitch: string;
    supportFoot: string;
    movingFoot:string;
    root: string;
  };
  motion: {
    ankleCompensationRatio: number;
    hipCompensationRatio: number;
    supportKneeDegrees: number;
    supportAnklePitchDegrees: number;
    maximumPelvisDropMeters: number;
    automaticTargetDegrees: number;
    transitionSeconds: number;
  };
  safety: {
    supportMarginMeters: number;
    footContactHeightMeters: number;
    collisionMarginMeters: number;
    scanStepDegrees: number;
    updateIntervalSeconds: number;
    collisionPairs: CollisionPairConfig[];
    collisionProxyScale: Record<string,[number,number,number]>;
  };
  click: { maximumDistancePixels: number; maximumDurationMilliseconds: number };
  discoveryChain:DiscoveryChainConfig;
  servoSeconds:number;
  fallDelaySeconds:number;
  partControls:PartControl[];
  /** Teaching UI bounds in URDF degrees; always intersect with mechanical limits. */
  interactionLimits:Record<string,{min:number;max:number}>;
}

/** Teaching-only defaults for the currently bundled 29-DOF official sample. */
export const G1_INTERACTION_CONFIG: G1InteractionConfig = {
  targetJointName: 'left_knee_joint',
  targetLinkName: 'left_knee_link',
  jointNames: {
    leftHipPitch: 'left_hip_pitch_joint',
    leftKnee: 'left_knee_joint',
    leftAnklePitch: 'left_ankle_pitch_joint',
    rightHipPitch: 'right_hip_pitch_joint',
    rightKnee: 'right_knee_joint',
    rightAnklePitch: 'right_ankle_pitch_joint',
    supportFoot: 'right_ankle_roll_link',
    movingFoot: 'left_ankle_roll_link',
    root: 'pelvis',
  },
  motion: {
    ankleCompensationRatio: -0.6,
    hipCompensationRatio: -0.4,
    supportKneeDegrees: 80,
    supportAnklePitchDegrees: -40,
    maximumPelvisDropMeters: 0.08,
    automaticTargetDegrees: 45,
    transitionSeconds: 1.15,
  },
  safety: {
    supportMarginMeters: 0.018,
    footContactHeightMeters: 0.008,
    collisionMarginMeters: 0.025,
    scanStepDegrees: 5,
    updateIntervalSeconds: 0.1,
    collisionPairs: [
      { id:'lower-legs', first:'left_knee_link', second:'right_knee_link', label:'左右小腿' },
      { id:'feet', first:'left_ankle_roll_link', second:'right_ankle_roll_link', label:'左右脚部' },
      { id:'left-thigh-knee', first:'left_hip_yaw_link', second:'left_knee_link', label:'左大腿与膝下结构',marginMeters:.01 },
      { id:'right-thigh-knee', first:'right_hip_yaw_link', second:'right_knee_link', label:'右大腿与膝下结构',marginMeters:.01 },
      ...(['left','right'] as const).flatMap(side=>{
        const label=side==='left'?'左':'右';
        return [
          {id:`${side}-forearm-torso`,first:`${side}_elbow_link`,second:'torso_link',label:`${label}小臂与躯干`,marginMeters:.012},
          {id:`${side}-wrist-torso`,first:`${side}_wrist_pitch_link`,second:'torso_link',label:`${label}腕部与躯干`,marginMeters:.012},
          {id:`${side}-thigh-torso`,first:`${side}_hip_yaw_link`,second:'torso_link',label:`${label}大腿与躯干`,marginMeters:.01},
          ...(['left','right'] as const).flatMap(leg=>[
            {id:`${side}-upper-${leg}-thigh`,first:`${side}_shoulder_yaw_link`,second:`${leg}_hip_yaw_link`,label:`${label}大臂与${leg==='left'?'左':'右'}大腿`,marginMeters:.012},
            {id:`${side}-forearm-${leg}-thigh`,first:`${side}_elbow_link`,second:`${leg}_hip_yaw_link`,label:`${label}小臂与${leg==='left'?'左':'右'}大腿`,marginMeters:.012},
          ]),
        ];
      }),
    ],
    // Crop shared joint housings from adjacent segment proxies, not the raw meshes.
    collisionProxyScale: {
      left_hip_yaw_link:[.85,.45,.85],right_hip_yaw_link:[.85,.45,.85],
      left_knee_link:[.9,.6,.9],right_knee_link:[.9,.6,.9],
      left_ankle_roll_link:[1,.9,1],right_ankle_roll_link:[1,.9,1],
      torso_link:[.9,.92,.9],
      left_shoulder_yaw_link:[.88,.88,.88],right_shoulder_yaw_link:[.88,.88,.88],
      left_elbow_link:[.92,.9,.9],right_elbow_link:[.92,.9,.9],
      left_wrist_pitch_link:[.92,.9,.9],right_wrist_pitch_link:[.92,.9,.9],
    },
  },
  click: { maximumDistancePixels:5, maximumDurationMilliseconds:300 },
  servoSeconds:.12,
  fallDelaySeconds:.5,
  discoveryChain:{
    id:'left-leg',label:'左腿 · 髋—膝—踝',
    joints:[
      {name:'left_hip_pitch_joint',label:'髋 · 前后摆',link:'left_hip_yaw_link'},
      {name:'left_knee_joint',label:'膝 · 屈伸',link:'left_knee_link'},
      {name:'left_ankle_pitch_joint',label:'踝 · 俯仰',link:'left_ankle_roll_link'},
    ],
    links:['left_hip_pitch_link','left_hip_roll_link','left_hip_yaw_link','left_knee_link','left_ankle_pitch_link','left_ankle_roll_link'],
    presets:[{id:'shallow',label:'轻屈膝 · 30°',kneeDegrees:30},{id:'crouch',label:'协同下蹲 · 45°',kneeDegrees:45}],
  },
  interactionLimits:Object.fromEntries((['left','right'] as const).flatMap(side=>[
    [`${side}_shoulder_pitch_joint`,{min:-90,max:90}],
    [`${side}_shoulder_roll_joint`,side==='left'?{min:0,max:100}:{min:-100,max:0}],
    [`${side}_shoulder_yaw_joint`,{min:-80,max:80}],
    // This sample's elbow mechanical maximum is ~120°, not 150°.
    [`${side}_elbow_joint`,{min:0,max:120}],
  ])),
  partControls: [
    ...(['left','right'] as const).flatMap(side=>([
      ['hip_pitch','髋 · 前后摆',220,[`${side}_hip_yaw_link`,`${side}_hip_roll_link`]],
      ['knee','膝 · 独立屈伸',260,[]],
      ['ankle_pitch','踝 · 俯仰',140,[`${side}_ankle_roll_link`]],
    ] as const).map(([part,label,dragSensitivity,aliases]):PartControl=>({
      jointName:`${side}_${part}_joint`,label:`${side==='left'?'左':'右'}${label}`,dragAxis:'y',dragSensitivity,aliases:[...aliases],
    }))),
    {jointName:'waist_yaw_joint',label:'腰部 · 左右转动',dragAxis:'x',dragSensitivity:220},
    {jointName:'waist_roll_joint',label:'腰部 · 左右侧倾',dragAxis:'x',dragSensitivity:100},
    {jointName:'waist_pitch_joint',label:'腰部 · 前后俯仰',dragAxis:'y',dragSensitivity:100},
    ...(['left','right'] as const).flatMap(side=>([
      ['shoulder_pitch','肩部前后摆','y'],['shoulder_roll','肩部侧摆','x'],['shoulder_yaw','肩部转动','x'],
      ['elbow','肘部屈伸','y'],['wrist_roll','手腕滚转','x'],['wrist_pitch','手腕俯仰','y'],['wrist_yaw','手腕转动','x'],
    ] as const).map(([part,label,dragAxis]):PartControl=>({
      jointName:`${side}_${part}_joint`,label:`${side==='left'?'左':'右'}${label}`,dragAxis,dragSensitivity:220,
      ...(part==='wrist_yaw'?{aliases:[`${side}_rubber_hand`]}:{}),
    }))),
  ],
};
