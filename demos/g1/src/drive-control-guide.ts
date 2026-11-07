import type {DriveCommand,DriveMode} from './drive-config';
import type {DrivePadProfile} from './drive-pad-layout';
export interface ControlCard {id:string;keys:string;title:string;copy:string;command:Partial<DriveCommand>;}
export function controlGuide(profile:DrivePadProfile,mode:DriveMode){
 const android=profile==='exhibition-android',prefix=android?'LB':'LT';
 const cards:ControlCard[]=[
  {id:'A',keys:android?'LB + A':'RT + A',title:'恢复行走',copy:'站稳后接管摇杆',command:{mode:'locomotion'}},
  {id:'B',keys:`${prefix} + B`,title:'阻尼模式',copy:'有关节阻力，不主动支撑',command:{mode:'damp'}},
  {id:'X',keys:`${prefix} + X`,title:'起身复位',copy:'倒地后恢复站立',command:{recover:true}},
  {id:'Y',keys:`${prefix} + Y`,title:'零力矩',copy:'电机不出力，不保持站姿',command:{mode:'zero'}},
  {id:'stand',keys:android?'点击卡片':'LT + ↑',title:'锁定站立',copy:'原地站稳，停止行走',command:{mode:'stand'}},
  {id:'debug',keys:android?'LB + RB':'LT + RT',title:'关节实验',copy:android?'先阻尼，再双肩键按住 0.8 秒':'先阻尼，双扳机按住至 LT 满 2 秒',command:{mode:'debug'}},
 ];
 const entries:Record<DriveMode,string>={
  locomotion:android?'LB + A 行走；左杆移动、右杆转向。低速用屏幕按钮，LB 连按两次切高速。':'RT + A 行走；左杆移动、右杆转向。LT 连按两次低速，LB 连按两次高速。',
  stand:android?'用上方锁定站立或卡片切换；摇杆不再移动模型，LB + A 恢复行走。':'LT + 十字键 ↑ 锁定站立（LT 需按满 2 秒）；RT + A 恢复行走。菜单键单击切站立 / 行走。',
  damp:`${prefix} + B：关节有阻力，但不主动支撑；网页以慢倒示意。${prefix} + X 起身。${android?'LB + RB 按住 0.8 秒':'LT + RT 按住至 LT 满 2 秒'}进入关节实验。`,
  zero:`${prefix} + Y：电机不出力，不维持站姿；网页以快倒示意。${prefix} + X 起身。${android?'LB + RB 按住 0.8 秒':'LT + RT 按住至 LT 满 2 秒'}进入关节实验。`,
  performance:android?'RB + A/B/X/Y 播放四种网页舞蹈；十字键左右选其他动作，A 播放。':'RB + A/B/X/Y 播放四种网页舞蹈；视图键 + A 握手、+ Y 挥手。LT + ← 蹲坐，LT + A 屈膝示意。',
  debug:`虚拟吊架支撑 · 暂停运动控制。十字键左右选关节，左杆上下调角度，A 确认；${android?'X':'LT + A 或 X'}看诊断示范，Y 复位。${prefix} + B 退出。`,
 };
 return {cards,copy:entries[mode],heading:android?'展厅安卓 · LB / RB 替代操作':'电脑标准 · LT / RT 完整操作',hint:android?'按已测通道操作；LT / RT 不绑定':'组合键可同时按住；LT 需满 2 秒，RT + A 直接按'};
}
