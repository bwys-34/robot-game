import {PERFORMANCE_TASKS,performanceAction,type PerformanceTask,type PerformanceTempo} from './performance-library';
export interface PerformanceResult {score:number|null;title:string;advice:string;stars:number;}
export type PerformanceStatus='editing'|'playing'|'preview'|'paused'|'result';

export function evaluatePerformance(taskId:string,ids:readonly string[],tempo:PerformanceTempo):PerformanceResult {
  const actions=ids.map(performanceAction),has=(tag:string)=>actions.some(action=>(action.tags as readonly string[]).includes(tag));
  if(taskId==='free')return {score:null,title:has('upper')&&has('lower')?'全身协同小导演':'我的 G1 首映礼',advice:'你的作品完成了！可以换一个节奏，看看同一段动作会有什么不同。',stars:3};
  let score=0,advice='';const first=actions[0],last=actions[actions.length-1],greet=first?.tags.includes('greet'),close=last?.tags.includes('close');
  if(taskId==='reception'){
    score=20*Number(has('greet'))+20*Number(has('invite'))+20*Number(has('close'));
    score+=20*Number(greet)+20*Number(close);
    advice=!has('greet')?'加入挥手或双臂迎宾，先和游客打个招呼。':!has('invite')?'再加一个邀请或侧向指引，让游客知道往哪里走。':!has('close')?'最后加一个礼貌鞠躬，为接待画上句号。':!greet?'调整顺序：先把招呼动作放在开场。':!close?'调整顺序：把鞠躬放在最后。':'欢迎、邀请、结束一气呵成，接待小能手就是你！';
  }else if(taskId==='guide'){
    const index=ids.indexOf('guide-left'),showIndex=actions.findIndex((action,i)=>i!==index&&action.tags.includes('show'));
    score=20*Number(has('greet'))+20*Number(index>=0)+20*Number(showIndex>=0);
    score+=10*Number(greet)+10*Number(index>0&&index<ids.length-1)+20*Number(close);
    advice=index<0?'展品在机器人自身的左侧，把指引动作换成“左侧指引”。':!has('greet')?'先加一个招呼，让游客知道讲解开始了。':showIndex<0?'再加双手呈递或转身展示，给展品一个展示环节。':!greet?'调整顺序：把欢迎动作放到开场。':!close?'最后加上礼貌鞠躬，完成这次讲解。':'方向正确，介绍完整！你让每一条运动链都有了任务。';
  }else if(taskId==='dance'){
    const rhythm=ids.includes('pulse');
    score=30*Number(has('upper'))+30*Number(rhythm)+20*Number(new Set(ids).size>=3)+20*Number(tempo==='lively');
    advice=!rhythm?'加入“屈膝律动”，让下肢也跟上表演。':new Set(ids).size<3?'试试至少三种动作，让这段表演更丰富。':tempo!=='lively'?'把节奏切到“活泼”，让动作跟上这次任务的节拍。':'手臂与双腿接力配合，你完成了一场有节奏的机器人秀！';
  }else throw new Error(`Unknown performance task: ${taskId}`);
  return {score,title:score>=90?'精彩完成':score>=80?'任务达成':'再排一次，会更棒',advice,stars:score>=90?3:score>=80?2:1};
}

/** Editing and semantic scoring are independent of rendering and display frame rate. */
export class PerformanceGame {
  task:PerformanceTask=PERFORMANCE_TASKS[0];steps:string[]=[];selected=0;tempo:PerformanceTempo='calm';
  status:PerformanceStatus='editing';result:PerformanceResult|null=null;private previewing=false;
  get busy():boolean{return ['playing','preview','paused'].includes(this.status);}
  get canPlay():boolean{return !this.busy&&(this.task.id==='free'?this.steps.length>0:this.steps.length===this.task.slots);}
  selectTask(id:string):void {if(this.busy)return;const task=PERFORMANCE_TASKS.find(item=>item.id===id);if(!task)throw new Error('Unknown task');this.task=task;this.steps=[];this.selected=0;this.status='editing';this.result=null;this.tempo=task.id==='dance'?'lively':'calm';}
  select(index:number):void {if(!this.busy)this.selected=Math.max(0,Math.min(this.task.slots-1,this.steps.length,Math.floor(index)));}
  choose(id:string):void {performanceAction(id);if(this.busy)return;this.steps[this.selected]=id;this.invalidate();}
  move(direction:-1|1):void {if(this.busy)return;const next=this.selected+direction;if(!this.steps[this.selected]||!this.steps[next])return;[this.steps[this.selected],this.steps[next]]=[this.steps[next],this.steps[this.selected]];this.selected=next;this.invalidate();}
  remove():void {if(this.busy)return;this.steps.splice(this.selected,1);this.selected=Math.min(this.selected,this.steps.length,this.task.slots-1);this.invalidate();}
  setTempo(tempo:PerformanceTempo):void {if(!this.busy){this.tempo=tempo;this.invalidate();}}
  begin(preview:boolean):boolean {if(this.busy||(!preview&&!this.canPlay)||preview&&!this.steps[this.selected])return false;this.previewing=preview;this.result=null;this.status=preview?'preview':'playing';return true;}
  pause():void {if(this.status==='playing'||this.status==='preview')this.status='paused';}
  resume():void {if(this.status==='paused')this.status=this.previewing?'preview':'playing';}
  stop():void {this.status='editing';this.result=null;}
  complete():void {if(!['playing','preview'].includes(this.status))return;if(this.previewing){this.status='editing';return;}this.result=evaluatePerformance(this.task.id,this.steps,this.tempo);this.status='result';}
  private invalidate():void {this.result=null;this.status='editing';}
}
