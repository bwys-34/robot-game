import type {DriveActionId} from './drive-actions';
import type {DebugJointId} from './drive-debug-lab';
export const DRIVE_LT_HOLD_MS=2000;
export type DriveMode='locomotion'|'stand'|'damp'|'zero'|'performance'|'debug';
export type DriveSpeed='slow'|'fast';
export const passiveMode=(mode:DriveMode)=>mode==='damp'||mode==='zero'||mode==='debug';
// Authored teaching gait, in degrees/metres. These are not a hardware policy.
export const DRIVE_GAIT_CONFIG={
  shoulderRest:-8,shoulderRoll:8,elbowRest:18,armResponse:.085,
  strideGain:260,maxSwing:20,sideSwing:7,turnSwing:6,steppingSwing:10,
  elbowFollow:.4,lateralRoll:4,
};
export const DRIVE_MODES=[
  {id:'locomotion',title:'行走',hint:'主动保持平衡 · 摇杆驾驶',copy:'左摇杆移动，右摇杆转身；松开摇杆后双脚站稳，可切换低速 / 高速。'},
  {id:'stand',title:'锁定站立',hint:'保持站姿 · 原地互动',copy:'关节主动维持站姿，摇杆不再驱动行走；仍可挥手、握手等原地互动。'},
  {id:'damp',title:'阻尼',hint:'关节有阻力 · 不主动站稳',copy:'像给关节带上刹车，有阻力但不主动站稳。网页以慢慢倒地示意；LB + X 起身。'},
  {id:'zero',title:'零力矩',hint:'电机不出力 · 不维持站姿',copy:'电机不出力，关节放松，也不维持站姿。网页以较快倒地示意；LB + X 起身。'},
  {id:'performance',title:'动作表演',hint:'原地协同动作 · RB + 彩色键跳舞',copy:'按住 RB，再按 A / B / X / Y 播放四种舞蹈。松开摇杆站稳后再表演；其他动作仍可从菜单选择。'},
  {id:'debug',title:'调试实验',hint:'吊架支撑 · 关节实验与舞蹈键位',copy:'自由体验中先挂接，切阻尼或零力矩，再进入调试；可校准关节、更换 RB 舞蹈键位。网页教学扩展，不连接实机。'},
] as const;
export interface DriveObstacle {id:string;x:number;z:number;width:number;depth:number;}
export const DRIVE_SPACES={
  name:'杭州机器人学校',
  gallery:{minX:-3.8,maxX:3.2,minZ:-3.55,maxZ:2.8},
  lab:{minX:3.2,maxX:9.2,minZ:-3.55,maxZ:2.8},
  door:{x:3.2,minZ:.35,maxZ:2.35,height:2.5},
  courtyard:{minX:-3.8,maxX:9.2,minZ:2.8,maxZ:11.2},
};
const {gallery,lab,door}=DRIVE_SPACES;
export const DRIVE_PARTITIONS:readonly DriveObstacle[]=[
  {id:'实验室隔墙',x:door.x-.08,z:gallery.minZ,width:.16,depth:door.minZ-gallery.minZ},
  {id:'实验室隔墙',x:door.x-.08,z:door.maxZ,width:.16,depth:gallery.maxZ-door.maxZ},
];
/** The openings match the visible low facade; course props remain solid in free play. */
export const DRIVE_COURT_OBSTACLES:readonly DriveObstacle[]=[
  {id:'庭院隔墙',x:-3.8,z:2.72,width:2.65,depth:.16},
  {id:'庭院隔墙',x:1.15,z:2.72,width:4.45,depth:.16},
  {id:'庭院隔墙',x:8,z:2.72,width:1.2,depth:.16},
  {id:'训练锥桶',x:-1.36,z:5.44,width:.22,depth:.22},
  {id:'训练锥桶',x:-1.36,z:6.54,width:.22,depth:.22},
  {id:'考场门柱',x:-2.10,z:8.52,width:.16,depth:.16},
  {id:'考场门柱',x:-.66,z:8.52,width:.16,depth:.16},
  {id:'舞台背景',x:4.1,z:10.15,width:4.4,depth:.22},
  {id:'观众座椅',x:4.05,z:5.15,width:.8,depth:.65},
  {id:'观众座椅',x:7.75,z:5.15,width:.8,depth:.65},
  {id:'庭院花池',x:2.7,z:5.3,width:.7,depth:4.8},
];
export const DRIVE_CONFIG={
  room:{minX:gallery.minX,maxX:lab.maxX,minZ:gallery.minZ,maxZ:DRIVE_SPACES.courtyard.maxZ},
  radius:.28,slowSpeed:.24,fastSpeed:.82,turnSpeed:1.4,accelerationSeconds:.18,
  spawn:{x:0,z:0,yaw:Math.PI},
  welcome:{x:0,z:-1.55,radius:.5},visitor:{x:0,z:-3.05},
  destination:{x:1.3,z:-.65,radius:.55},exhibit:{x:2.35,z:-.65},
  obstacles:[
    {id:'展台边缘',x:1.97,z:-1.15,width:.76,depth:1},
    {id:'左侧展台',x:-2.73,z:-1.15,width:.76,depth:1},
    {id:'游客位置',x:-.23,z:-3.28,width:.46,depth:.46},
    ...DRIVE_PARTITIONS,
    {id:'实验室设备柜',x:4.35,z:-3.55,width:3.9,depth:.48},
    ...DRIVE_COURT_OBSTACLES,
  ] as DriveObstacle[],
};
export interface DriveCommand {forward:number;strafe:number;turn:number;look:number;stop:boolean;wave:boolean;invite:boolean;camera:boolean;pause:boolean;mode?:DriveMode;cycleMode?:boolean;actionStep?:number;actionSelect?:DriveActionId;actionTrigger?:DriveActionId;toggleStand?:boolean;stepping?:boolean;recover?:boolean;speedMode?:DriveSpeed;diagnose?:boolean;labSelect?:DebugJointId;labStep?:number;labAdjust?:number;labConfirm?:boolean;labReset?:boolean;hoistAction?:boolean;}
export const EMPTY_DRIVE_COMMAND:DriveCommand={forward:0,strafe:0,turn:0,look:0,stop:false,wave:false,invite:false,camera:false,pause:false};
