export type PerformanceAngles=Readonly<Record<string,number>>;
export type PerformanceTempo='calm'|'lively';
export type PerformanceTag='greet'|'invite'|'left'|'right'|'show'|'close'|'upper'|'lower';
export interface PerformanceFrame {angles:PerformanceAngles;duration:number;}
export interface PerformanceAction {
  id:string;title:string;group:string;description:string;tags:readonly PerformanceTag[];
  links:string[];frames:readonly PerformanceFrame[];
}
export interface PerformanceTask {id:string;title:string;brief:string;rule:string;slots:number;}

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
    return {angles,duration:hold?.24:index===0?.85:index===poses.length-1?.65:.5};
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

/** Authored teaching choreography for the bundled fixed-hand sample, never hardware commands. */
export const PERFORMANCE_ACTIONS:readonly PerformanceAction[]=[
  clip('wave','挥手招呼','招呼与接待',['greet','upper'],'肩抬起手臂，肘腕接力摆动，向游客打招呼。',['right-arm'],[body({...arm('right',-45,35,50)}),waveA,waveB,waveA]),
  clip('welcome','双臂迎宾','招呼与接待',['greet','upper'],'双肩展开，双肘与手腕一起调整，打开欢迎的姿态。',['left-arm','right-arm'],[body({...arm('left',-20,30,35),...arm('right',-20,30,35)}),welcome,welcome]),
  clip('invite','单臂邀请','招呼与接待',['invite','upper'],'腰部转向一侧，肩、肘、腕一起伸出邀请。',['left-arm','waist'],[body({...arm('left',-25,25,45)}),invite,invite]),
  clip('bow','礼貌鞠躬','招呼与接待',['close','upper','lower'],'双臂收拢，腰部前倾，双腿轻屈配合致意。',['waist','left-leg','right-leg'],[body({...arm('left',-5,12,24),...arm('right',-5,12,24)}),bow,bow]),
  clip('guide-left','左侧指引','介绍与展示',['left','invite','show','upper'],'以机器人自身左侧为方向，腰与左臂共同介绍展品。',['left-arm','waist'],[body({...arm('left',-32,24,38)}),guide('left'),guide('left')]),
  clip('guide-right','右侧指引','介绍与展示',['right','invite','show','upper'],'以机器人自身右侧为方向，腰与右臂共同介绍展品。',['right-arm','waist'],[body({...arm('right',-32,24,38)}),guide('right'),guide('right')]),
  clip('offer','双手呈递','介绍与展示',['show','upper'],'双臂把想象中的展品送到身前；固定手不做抓握。',['left-arm','right-arm'],[body({...arm('left',-25,18,40),...arm('right',-25,18,40)}),offer,offer]),
  clip('turn','转身展示','介绍与展示',['show','upper'],'双脚留在原地，腰部带动上身，手臂随之展开。',['left-arm','right-arm','waist'],[body({...arm('left',-30,38,35),...arm('right',-20,25,25)}),body({...arm('left',-30,55,25),...arm('right',-20,30,25),waist_yaw_joint:24}),body({...arm('left',-30,55,25),waist_yaw_joint:12})]),
  clip('raise','双臂上举','节奏与表演',['upper'],'肩、肘协同上举，再用小幅伸展接住节拍。',['left-arm','right-arm'],[body({...arm('left',-55,30,55),...arm('right',-55,30,55)}),raise,body({...arm('left',-85,55,65),...arm('right',-85,55,65)}),raise]),
  clip('sway','左右摆臂','节奏与表演',['upper'],'腰部与双臂左右呼应，双脚不移动。',['left-arm','right-arm','waist'],[sway(-1),sway(1),sway(-1),sway(1)]),
  clip('pulse','屈膝律动','节奏与表演',['lower','upper'],'双腿髋膝踝一起屈伸，双臂随节奏展开。',['left-leg','right-leg','left-arm','right-arm'],[
    body({...leg(12),...arm('left',-25,30,35),...arm('right',-25,30,35)}),body({...leg(30),...arm('left',-40,45,45),...arm('right',-40,45,45)}),body({...leg(12),...arm('left',-25,30,35),...arm('right',-25,30,35)}),body({...leg(24),...arm('left',-35,40,40),...arm('right',-35,40,40)})]),
  clip('punch','交替出拳','节奏与表演',['upper'],'一侧伸臂、另一侧收肘，腰部小幅配合，固定手保持原形。',['left-arm','right-arm','waist'],[body({...arm('left',-58,20,70),...arm('right',-58,20,70)}),punch('left'),punch('right'),punch('left')]),
];

export const PERFORMANCE_TASKS:readonly PerformanceTask[]=[
  {id:'reception',title:'01 / 我是迎宾员',brief:'游客来了！欢迎他们，邀请参观，再礼貌结束。',rule:'三步：招呼 → 邀请 → 鞠躬。欢迎和邀请都可以选不同动作。',slots:3},
  {id:'guide',title:'02 / 我是展馆讲解员',brief:'欢迎游客，介绍机器人左侧的展品，最后礼貌结束。',rule:'四步：先招呼，再左侧指引与展示，最后鞠躬。左右以机器人自身为准。',slots:4},
  {id:'dance',title:'03 / 我是机器人编舞师',brief:'用手臂和屈膝，编一段活泼的小表演。',rule:'四步：至少三种动作，包含上肢和屈膝律动，选择“活泼”节奏。',slots:4},
  {id:'free',title:'自由 / 我的机器人秀',brief:'给 G1 编一段自己的表演，不设唯一答案。',rule:'任选一至四步，可换顺序和节奏。完成后领取作品称号。',slots:4},
];
export function performanceAction(id:string):PerformanceAction {
  const action=PERFORMANCE_ACTIONS.find(item=>item.id===id);if(!action)throw new Error(`Unknown performance action: ${id}`);return action;
}
