import {PERFORMANCE_ACTIONS,type PerformanceFrame} from './performance-library';
import {buildPerformanceTimeline} from './performance-player';

export const DRIVE_ACTIONS=[
  {id:'wave',title:'挥手招呼',group:'接待互动',description:'抬起右手，连续挥动前臂欢迎游客。'},
  {id:'handshake',title:'伸手握手',group:'接待互动',description:'右臂前伸，手腕朝向游客，轻轻上下回应。'},
  {id:'invite',title:'邀请指引',group:'接待互动',description:'伸臂示意，请游客一起认识右侧展品。'},
  {id:'bow',title:'礼貌鞠躬',group:'接待互动',description:'收臂、弯腰致意，再平顺回到站姿。'},
  {id:'clap',title:'拍手鼓掌',group:'动作表演',description:'双臂抬到胸前，双手靠近、分开，轻拍三次。'},
  {id:'raise',title:'双臂上举',group:'动作表演',description:'双臂向上展开，再屈肘收回。'},
  {id:'stretch',title:'舒展双臂',group:'动作表演',description:'双手展开，向两侧游客打个招呼。'},
  {id:'dance',title:'左右律动',group:'动作表演',description:'手臂、腰部和屈膝配合的简短律动。'},
  {id:'robotdance',title:'机械舞',group:'快捷舞蹈',description:'双臂交替屈伸，配合腰部小幅转动，展示机械舞节奏。'},
  {id:'armdance',title:'双臂摆舞',group:'快捷舞蹈',description:'双臂向两侧展开，再交替抬起，配合腰部左右轻摆。'},
  {id:'cheerdance',title:'加油舞',group:'快捷舞蹈',description:'双手从胸前举起，左右交替加油，最后一起收回。'},
  {id:'turnwave',title:'转身挥手',group:'接待互动',description:'站定后向侧面转身，挥手回应，再回到原朝向。'},
  {id:'sit',title:'屈膝蹲坐',group:'全身动作',description:'屈膝降低身体，短暂停留后站起；是网页蹲坐演示。'},
  {id:'jump',title:'原地跳跃',group:'虚拟特技',description:'蓄力、蹬地、腾空，再屈膝缓冲落地。仅为网页动画。'},
  {id:'backflip',title:'后空翻',group:'虚拟特技',description:'屈膝蓄力、腾空后翻一周、落地缓冲。仅为网页特技，不代表实机能力。'},
] as const;
export type DriveActionId=typeof DRIVE_ACTIONS[number]['id'];
export const PERFORMANCE_SHORTCUTS=[
  {button:0,key:'A',action:'dance',title:'律动'},
  {button:1,key:'B',action:'robotdance',title:'机械舞'},
  {button:2,key:'X',action:'armdance',title:'双臂摆舞'},
  {button:3,key:'Y',action:'cheerdance',title:'加油舞'},
] as const;
export const actionInfo=(id:DriveActionId)=>DRIVE_ACTIONS.find(a=>a.id===id)!;
export const validAction=(id:unknown):id is DriveActionId=>DRIVE_ACTIONS.some(a=>a.id===id);

const resting={left_shoulder_pitch_joint:-8,left_shoulder_roll_joint:8,left_elbow_joint:15,right_shoulder_pitch_joint:-8,right_shoulder_roll_joint:-8,right_elbow_joint:15,waist_yaw_joint:0,waist_pitch_joint:0,waist_roll_joint:0};
const pose=(changes:Record<string,number>,duration=.45):PerformanceFrame=>({angles:{...resting,...changes},duration});
/** Authored museum clips. Similar action names do not imply Unitree firmware trajectories. */
export function driveActionFrames(id:DriveActionId):PerformanceFrame[]{
  if(id==='robotdance'){
    const left={left_shoulder_pitch_joint:-35,left_shoulder_roll_joint:25,left_elbow_joint:80,right_shoulder_pitch_joint:-12,right_elbow_joint:30,waist_yaw_joint:12};
    const right={right_shoulder_pitch_joint:-35,right_shoulder_roll_joint:-25,right_elbow_joint:80,left_shoulder_pitch_joint:-12,left_elbow_joint:30,waist_yaw_joint:-12};
    return [pose({},.45),pose(left,.55),pose(right,.55),pose(left,.55),pose(right,.55),pose(left,.55),pose(right,.55),pose({},.8)];
  }
  if(id==='armdance'){
    const open={left_shoulder_pitch_joint:-20,left_shoulder_roll_joint:50,left_elbow_joint:35,right_shoulder_pitch_joint:-20,right_shoulder_roll_joint:-50,right_elbow_joint:35};
    const left={...open,left_shoulder_pitch_joint:-65,left_elbow_joint:60,waist_roll_joint:5};
    const right={...open,right_shoulder_pitch_joint:-65,right_elbow_joint:60,waist_roll_joint:-5};
    return [pose({},.45),pose(open,.6),pose(left,.65),pose(right,.65),pose(left,.65),pose(right,.65),pose(open,.6),pose({},.8)];
  }
  if(id==='cheerdance'){
    const ready={left_shoulder_pitch_joint:-45,left_shoulder_roll_joint:20,left_elbow_joint:85,right_shoulder_pitch_joint:-45,right_shoulder_roll_joint:-20,right_elbow_joint:85};
    const left={...ready,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:6};
    const right={...ready,right_shoulder_pitch_joint:-120,right_elbow_joint:35,waist_yaw_joint:-6};
    return [pose({},.45),pose(ready,.6),pose(left,.6),pose(right,.6),pose(left,.6),pose(right,.6),pose({...left,...right,left_shoulder_pitch_joint:-120,left_elbow_joint:35,waist_yaw_joint:0},.7),pose(ready,.6),pose({},.8)];
  }
  if(id==='backflip'||id==='jump'||id==='sit')return [pose({},.4),pose({left_shoulder_pitch_joint:-45,right_shoulder_pitch_joint:-45},.7),pose({},.8)];
  if(id==='turnwave')return driveActionFrames('wave');
  if(id==='handshake'){
    const reach={right_shoulder_pitch_joint:-42,right_shoulder_roll_joint:-12,right_elbow_joint:38,right_wrist_roll_joint:-25};
    return [pose({},.45),pose(reach,.7),pose({...reach,right_shoulder_pitch_joint:-48},.38),pose({...reach,right_shoulder_pitch_joint:-38},.38),pose({...reach,right_shoulder_pitch_joint:-48},.38),pose(reach,.38),pose({},.8)];
  }
  if(id==='clap'){
    const open={left_shoulder_pitch_joint:-50,left_shoulder_roll_joint:25,left_shoulder_yaw_joint:-10,left_elbow_joint:40,left_wrist_roll_joint:-60,right_shoulder_pitch_joint:-50,right_shoulder_roll_joint:-25,right_shoulder_yaw_joint:10,right_elbow_joint:40,right_wrist_roll_joint:60};
    const close={...open,left_shoulder_roll_joint:10,right_shoulder_roll_joint:-10};
    return [pose({},.45),pose(open,.7),pose(close,.36),pose(open,.36),pose(close,.36),pose(open,.36),pose(close,.36),pose(open,.4),pose({},.8)];
  }
  const libraryId=id==='stretch'?'welcome':id==='dance'?'sway':id;
  if(!PERFORMANCE_ACTIONS.some(a=>a.id===libraryId))throw new Error(`Missing drive action ${id}`);
  return buildPerformanceTimeline([libraryId],'lively').map(f=>({...f,angles:Object.fromEntries(Object.entries(f.angles).filter(([name])=>!/^((left|right)_(hip|knee|ankle))/.test(name)))}));
}
