import type { PoseError } from './pose-trainer';

/** Physical language shared by micro-adjust controls and submitted-pose advice. */
export function jointActions(name:string):{increase:string;decrease:string} {
  if(name.includes('elbow'))return {increase:'弯起一点',decrease:'伸直一点'};
  if(name.includes('shoulder_pitch'))return {increase:'向后放一点',decrease:'向前抬一点'};
  if(name.includes('shoulder_roll'))return name.startsWith('left_')
    ?{increase:'向外打开一点',decrease:'向内收一点'}:{increase:'向内收一点',decrease:'向外打开一点'};
  if(name.includes('hip_pitch'))return {increase:'向后收腿一点',decrease:'向前抬腿一点'};
  if(name.includes('knee'))return {increase:'膝盖再弯一点',decrease:'膝盖伸直一点'};
  if(name.includes('ankle_pitch'))return {increase:'脚尖压低一点',decrease:'脚尖抬高一点'};
  if(name.includes('waist_pitch'))return {increase:'上身前倾一点',decrease:'上身挺直一点'};
  if(name.includes('waist_yaw'))return {increase:'上身向左转一点',decrease:'上身向右转一点'};
  return {increase:'正向转一点',decrease:'反向转一点'};
}

export function adjustmentAdvice(error:PoseError):string {
  const side=error.name.startsWith('left_')?'左':error.name.startsWith('right_')?'右':'';
  const part=error.name.includes('elbow')?`${side}小臂`:error.name.includes('shoulder')?`${side}手臂`
    :error.name.includes('hip')?`${side}大腿`:error.name.includes('knee')?`${side}膝盖`
    :error.name.includes('ankle')?`${side}脚掌`:error.name.includes('wrist')?`${side}手腕`:'上身';
  if(error.target===0&&Math.abs(error.actual)>error.tolerance)return `先把${part}转回自然姿态，其他部位暂时保持。`;
  const actions=jointActions(error.name),action=error.target>error.actual?actions.increase:actions.decrease;
  return `让${part}${action}，其他部位先保持。`;
}
