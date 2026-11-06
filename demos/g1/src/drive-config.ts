import type {DriveActionId} from './drive-actions';
export type DriveMode='locomotion'|'stand'|'damp'|'zero'|'performance'|'debug';
export type DriveSpeed='slow'|'fast';
export const passiveMode=(mode:DriveMode)=>mode==='damp'||mode==='zero'||mode==='debug';
export const DRIVE_MODES=[
  {id:'locomotion',title:'行走',hint:'主动保持平衡 · 摇杆驾驶',copy:'左摇杆移动，右摇杆转身；松开摇杆后双脚站稳，可切换低速 / 高速。'},
  {id:'stand',title:'锁定站立',hint:'保持站姿 · 原地互动',copy:'关节主动维持站姿，摇杆不再驱动行走；仍可挥手、握手等原地互动。'},
  {id:'damp',title:'阻尼',hint:'关节有阻力 · 不主动站稳',copy:'可理解为“关节带刹车”：摆动受阻，但不主动支撑。网页以较慢倒地示意；LT 按住后点 X 起身。'},
  {id:'zero',title:'零力矩',hint:'电机不出力 · 不维持站姿',copy:'可理解为“关节放松”：撤去电机主动出力。网页以更快倒地示意，与阻尼的阻力感不同；LT + X 起身。'},
  {id:'performance',title:'动作表演',hint:'原地协同动作 · RB + 彩色键跳舞',copy:'按住 RB，再按 A / B / X / Y 播放四种舞蹈。松开摇杆站稳后再表演；其他动作仍可从菜单选择。'},
  {id:'debug',title:'调试示意',hint:'展示开发状态 · 暂停运动控制',copy:'从阻尼或零力矩进入，停止运动控制。网页仅展示状态，不连接实机或运行调试程序。'},
] as const;
export interface DriveObstacle {id:string;x:number;z:number;width:number;depth:number;}
export const DRIVE_CONFIG={
  room:{minX:-3.2,maxX:3.2,minZ:-3.55,maxZ:2.1},
  radius:.28,slowSpeed:.24,fastSpeed:.82,turnSpeed:1.4,accelerationSeconds:.18,
  spawn:{x:0,z:0,yaw:Math.PI},
  welcome:{x:0,z:-1.55,radius:.5},visitor:{x:0,z:-3.05},
  destination:{x:1.3,z:-.65,radius:.55},exhibit:{x:2.35,z:-.65},
  obstacles:[
    {id:'展台边缘',x:1.97,z:-1.15,width:.76,depth:1},
    {id:'左侧展台',x:-2.73,z:-1.15,width:.76,depth:1},
    {id:'游客位置',x:-.23,z:-3.28,width:.46,depth:.46},
  ] as DriveObstacle[],
};
export interface DriveCommand {forward:number;strafe:number;turn:number;look:number;stop:boolean;wave:boolean;invite:boolean;camera:boolean;pause:boolean;mode?:DriveMode;cycleMode?:boolean;actionStep?:number;actionSelect?:DriveActionId;actionTrigger?:DriveActionId;toggleStand?:boolean;stepping?:boolean;recover?:boolean;speedMode?:DriveSpeed;diagnose?:boolean;}
export const EMPTY_DRIVE_COMMAND:DriveCommand={forward:0,strafe:0,turn:0,look:0,stop:false,wave:false,invite:false,camera:false,pause:false};
