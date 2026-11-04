export type PerformanceAngles=Readonly<Record<string,number>>;
export type PerformanceTempo='calm'|'lively';
export type PerformanceTag='greet'|'invite'|'left'|'right'|'show'|'close'|'upper'|'lower';
export interface PerformanceFrame {angles:PerformanceAngles;duration:number;}
export interface PerformanceAction {
  id:string;title:string;group:string;description:string;tags:readonly PerformanceTag[];
  links:string[];frames:readonly PerformanceFrame[];
}
export interface PerformanceScene {actionId:string;cue:string;}
export interface PerformanceScript {title:string;tempo:PerformanceTempo;steps:readonly PerformanceScene[];}
export interface PerformanceTask {id:string;title:string;brief:string;rule:string;slots:number;script?:PerformanceScript;}

const leg=(angle:number):Record<string,number>=>Object.fromEntries(['left','right'].flatMap(side=>[
  [`${side}_hip_pitch_joint`,-angle/2],[`${side}_knee_joint`,angle],[`${side}_ankle_pitch_joint`,-angle/2],
]));
const arm=(side:'left'|'right',pitch:number,roll:number,elbow:number,wrist=0):Record<string,number>=>({
  [`${side}_shoulder_pitch_joint`]:pitch,[`${side}_shoulder_roll_joint`]:roll*(side==='left'?1:-1),
  [`${side}_elbow_joint`]:elbow,[`${side}_wrist_roll_joint`]:wrist,
});
const body=(changes:Record<string,number>={}):PerformanceAngles=>({...leg(6),...arm('left',-8,10,12),...arm('right',-8,10,12),...changes});
const linksFor=(chains:readonly string[])=>chains.flatMap(chain=>chain==='waist'?['torso_link']:chain.endsWith('arm')?
  [`${chain.split('-')[0]}_shoulder_yaw_link`,`${chain.split('-')[0]}_elbow_link`,`${chain.split('-')[0]}_wrist_pitch_link`]:
  [`${chain.split('-')[0]}_hip_yaw_link`,`${chain.split('-')[0]}_knee_link`,`${chain.split('-')[0]}_ankle_roll_link`]);
function clip(id:string,title:string,group:string,tags:PerformanceTag[],description:string,chains:string[],poses:PerformanceAngles[]):PerformanceAction {
  return {id,title,group,tags,description,links:linksFor(chains),frames:poses.map((angles,index)=>{
    const previous=poses[index-1];
    const hold=previous&&Object.keys(angles).length===Object.keys(previous).length&&Object.entries(angles).every(([key,value])=>previous[key]===value);
    return {angles,duration:hold?.24:index===0?.85:index===poses.length-1?.65:.46};
  })};
}
const waveA=body({...arm('right',-75,65,60,-18)}),waveB=body({...arm('right',-75,80,68,18)});
const welcome=body({...arm('left',-12,68,20),...arm('right',-12,68,20)});
const invite=body({...arm('left',-32,42,35,25),waist_yaw_joint:10});
const bow=body({...leg(10),waist_pitch_joint:18,...arm('left',-5,12,24),...arm('right',-5,12,24)});
const guide=(side:'left'|'right')=>body({...arm(side,-38,48,18,20),waist_yaw_joint:side==='left'?14:-14});
const offer=body({...arm('left',-50,18,45,30),...arm('right',-50,18,45,-30)});
const raise=body({...arm('left',-85,45,55),...arm('right',-85,45,55)});
const sway=(direction:number)=>body({...arm('left',-30,48+direction*12,45),...arm('right',-30,48-direction*12,45),waist_yaw_joint:direction*12});
const punch=(side:'left'|'right')=>body({...arm('left',-58,20,70),...arm('right',-58,20,70),...arm(side,-68,22,18),waist_yaw_joint:side==='left'?8:-8});
const halfWelcome=body({...arm('left',-20,30,35),...arm('right',-20,30,35)});
const lowWave=body({...arm('right',-45,35,50)});
const present=(side:'left'|'right',yaw:number)=>body({...arm(side,-42,52,32,side==='left'?20:-20),waist_yaw_joint:yaw});
const lift=(roll:number,elbow:number)=>body({...arm('left',-85,roll,elbow),...arm('right',-85,roll,elbow)});
const pulse=(bend:number,spread:number)=>body({...leg(bend),...arm('left',-35,spread,40),...arm('right',-35,spread,40)});

/** Authored teaching choreography for the bundled fixed-hand sample, never hardware commands. */
export const PERFORMANCE_ACTIONS:readonly PerformanceAction[]=[
  clip('wave','挥手招呼','招呼与接待',['greet','upper'],'抬臂后连续左右挥手，再降低手臂接住下一段动作。',['right-arm'],[lowWave,waveA,waveB,waveA,waveB,waveA,waveB,waveA,waveB,lowWave]),
  clip('welcome','双臂迎宾','招呼与接待',['greet','upper'],'双臂展开、转向两侧致意，再以欢迎姿势面向游客。',['left-arm','right-arm','waist'],[halfWelcome,welcome,welcome,{...welcome,waist_yaw_joint:10},welcome,{...welcome,waist_yaw_joint:-10},welcome,halfWelcome,welcome,halfWelcome]),
  clip('invite','单臂邀请','招呼与接待',['invite','upper'],'伸臂邀请、转身示意，手腕和肘部接力引导游客。',['left-arm','waist'],[halfWelcome,invite,invite,present('left',16),guide('left'),invite,present('left',8),guide('left'),invite,halfWelcome]),
  clip('bow','礼貌鞠躬','招呼与接待',['close','upper','lower'],'先展开双臂致谢，再收臂鞠躬、起身回礼。',['left-arm','right-arm','waist','left-leg','right-leg'],[halfWelcome,welcome,halfWelcome,body({...leg(8),waist_pitch_joint:8}),bow,bow,body({...leg(8),waist_pitch_joint:10}),halfWelcome,welcome,halfWelcome]),
  clip('guide-left','左侧指引','介绍与展示',['left','invite','show','upper'],'伸臂指引左侧，改变介绍角度，再回身面向游客。',['left-arm','waist'],[halfWelcome,guide('left'),guide('left'),present('left',20),invite,guide('left'),present('left',8),invite,guide('left'),halfWelcome]),
  clip('guide-right','右侧指引','介绍与展示',['right','invite','show','upper'],'伸臂指引右侧，改变介绍角度，再回身面向游客。',['right-arm','waist'],[halfWelcome,guide('right'),guide('right'),present('right',-20),present('right',-8),guide('right'),present('right',-16),present('right',-8),guide('right'),halfWelcome]),
  clip('offer','双手呈递','介绍与展示',['show','upper'],'双手托起展品，左右展示，再送向游客。',['left-arm','right-arm','waist'],[halfWelcome,offer,offer,{...offer,waist_yaw_joint:12},offer,{...offer,waist_yaw_joint:-12},offer,halfWelcome,offer,halfWelcome]),
  clip('turn','转身展示','介绍与展示',['show','upper'],'双脚留在原地，腰带动上身，双臂轮流向两侧介绍。',['left-arm','right-arm','waist'],[halfWelcome,present('left',12),present('left',24),welcome,present('right',-12),present('right',-24),welcome,present('left',12),present('right',-12),halfWelcome]),
  clip('raise','双臂上举','节奏与表演',['upper'],'双臂上举、外展、收肘，再次伸展，形成完整上肢乐句。',['left-arm','right-arm'],[halfWelcome,raise,lift(55,65),raise,lift(40,40),raise,lift(55,65),raise,welcome,halfWelcome]),
  clip('sway','左右摆臂','节奏与表演',['upper'],'左右摆臂穿插腰部转向，最后展开双臂接下一拍。',['left-arm','right-arm','waist'],[sway(-1),sway(1),sway(-1),sway(1),welcome,sway(-1),sway(1),sway(-1),sway(1),halfWelcome]),
  clip('pulse','屈膝律动','节奏与表演',['lower','upper'],'深浅屈膝交替，髋膝踝与双臂同拍配合。',['left-leg','right-leg','left-arm','right-arm'],[pulse(12,30),pulse(30,45),pulse(12,30),pulse(24,40),pulse(10,55),pulse(30,45),pulse(12,30),pulse(24,40),pulse(10,55),pulse(6,30)]),
  clip('punch','交替出拳','节奏与表演',['upper'],'左右出拳接力，穿插收肘和展开，腰部配合转向。',['left-arm','right-arm','waist'],[halfWelcome,punch('left'),punch('right'),punch('left'),punch('right'),welcome,punch('right'),punch('left'),punch('right'),halfWelcome]),
  clip('salute','抬手致意','招呼与接待',['greet','upper'],'抬起右臂致意，转向两侧回应游客，再展开回礼。',['right-arm','waist'],[lowWave,waveA,{...waveA,waist_yaw_joint:-10},waveA,{...waveA,waist_yaw_joint:10},waveA,waveB,waveA,welcome,halfWelcome]),
  clip('open-close','开合手臂','节奏与表演',['upper'],'双肘收拢与双臂展开交替，最后高举双手回应观众。',['left-arm','right-arm'],[halfWelcome,offer,welcome,offer,welcome,raise,welcome,offer,welcome,halfWelcome]),
  clip('diagonal','对角呼应','节奏与表演',['upper','lower'],'左右手臂轮流展开，腿部轻屈配合高低变化。',['left-arm','right-arm','left-leg','right-leg','waist'],[halfWelcome,present('left',12),pulse(18,40),present('right',-12),pulse(10,35),present('left',16),pulse(24,45),present('right',-16),welcome,halfWelcome]),
  clip('finale','展开谢幕','招呼与接待',['close','upper','lower'],'双臂举起向观众致谢，展开双手后鞠躬回礼。',['left-arm','right-arm','waist','left-leg','right-leg'],[halfWelcome,raise,welcome,waveA,waveB,welcome,halfWelcome,bow,bow,halfWelcome]),
];

export const PERFORMANCE_TASKS:readonly PerformanceTask[]=[
  {id:'reception',title:'01 / 迎宾小剧场',brief:'欢迎光临！从第一声招呼到最后的邀请，接待一批新游客。',rule:'剧本已排好，点播放即可欣赏；点选任意一段，也能换成你的动作。',slots:6,script:{title:'欢迎光临',tempo:'calm',steps:[
    {actionId:'wave',cue:'开场 · 招手问候'},
    {actionId:'welcome',cue:'欢迎 · 向两侧致意'},
    {actionId:'turn',cue:'介绍 · 环顾展厅'},
    {actionId:'offer',cue:'展示 · 呈上展品'},
    {actionId:'invite',cue:'邀请 · 请往这边走'},
    {actionId:'bow',cue:'收尾 · 礼貌回礼'},
  ]}},
  {id:'guide',title:'02 / 展馆小讲解',brief:'跟着 G1 看展品：先迎接，再指引、展示，最后邀请参观。',rule:'剧本已排好；左右以机器人自身为准。可替换动作，试试你的讲解方式。',slots:6,script:{title:'跟着 G1 逛展厅',tempo:'calm',steps:[
    {actionId:'salute',cue:'开场 · 向游客致意'},
    {actionId:'guide-left',cue:'指引 · 看左侧展品'},
    {actionId:'offer',cue:'展示 · 请看这件展品'},
    {actionId:'turn',cue:'展开 · 多角度介绍'},
    {actionId:'invite',cue:'邀请 · 继续向前参观'},
    {actionId:'bow',cue:'收尾 · 感谢聆听'},
  ]}},
  {id:'dance',title:'03 / 机器人律动秀',brief:'手臂开合、左右呼应、屈膝同拍，一起看 G1 的小舞台。',rule:'剧本已配好活泼节奏；可替换动作，让高低与左右的变化更丰富。',slots:6,script:{title:'G1 律动小舞台',tempo:'lively',steps:[
    {actionId:'raise',cue:'开场 · 抬臂亮相'},
    {actionId:'sway',cue:'展开 · 左右律动'},
    {actionId:'open-close',cue:'展开 · 双臂开合'},
    {actionId:'pulse',cue:'高潮 · 全身同拍'},
    {actionId:'diagonal',cue:'高潮 · 对角呼应'},
    {actionId:'finale',cue:'谢幕 · 向观众致谢'},
  ]}},
  {id:'free',title:'自由 / 我的机器人秀',brief:'想演得更丰富？自由编排最多八段动作。',rule:'任选一至八步，六步约半分钟，动作越多演出越长。',slots:8},
];
export function performanceAction(id:string):PerformanceAction {
  const action=PERFORMANCE_ACTIONS.find(item=>item.id===id);if(!action)throw new Error(`Unknown performance action: ${id}`);return action;
}
