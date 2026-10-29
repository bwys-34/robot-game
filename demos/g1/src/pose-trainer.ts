import { TRAINING_RULES, type MotionChallenge } from './motion-challenges';

export interface PoseError {name:string;target:number;actual:number;error:number;tolerance:number;}
export interface PoseScore {score:number;matched:boolean;errors:PoseError[];adjustment:PoseError|null;}
export type TrainingStatus='ready'|'preview'|'playing'|'review'|'complete';

/** Scores measured angles, never servo goals; other joints should remain at rest. */
export function scorePose(task:MotionChallenge,angles:Readonly<Record<string,number>>):PoseScore {
  const targets=new Map(task.joints.map(joint=>[joint.name,joint]));
  const errors:PoseError[]=task.joints.map(joint=>{
    const actual=angles[joint.name];
    return {name:joint.name,target:joint.degrees,actual,error:Number.isFinite(actual)?Math.abs(actual-joint.degrees):Infinity,tolerance:joint.tolerance};
  });
  const restErrors=Object.entries(angles).filter(([name])=>!targets.has(name)).map(([name,actual])=>({
    name,target:0,actual,error:Number.isFinite(actual)?Math.abs(actual):Infinity,tolerance:TRAINING_RULES.neutralToleranceDegrees,
  }));
  const penalties=errors.map(item=>Math.min(1,item.error/TRAINING_RULES.errorSpanDegrees));
  const penalty=.6*penalties.reduce((sum,value)=>sum+value,0)/Math.max(1,errors.length)+.4*Math.max(0,...penalties);
  // A twisted, unrelated joint must not be diluted by the many resting joints.
  const restPenalty=Math.max(0,...restErrors.map(item=>Math.max(0,item.error-item.tolerance)/TRAINING_RULES.errorSpanDegrees));
  const rawScore=Math.max(0,100*(1-penalty-restPenalty));
  const all=[...errors,...restErrors];
  const adjustment=[...all].sort((a,b)=>b.error/b.tolerance-a.error/a.tolerance)[0]??null;
  return {score:Math.round(rawScore),matched:errors.length>0&&Math.round(rawScore)>=TRAINING_RULES.minimumScore,errors,adjustment};
}

/** One session's training state; persistence and DOM are kept outside this module. */
export class PoseTrainer {
  private index=0;
  private currentStatus:TrainingStatus='ready';
  private visitorInput=false;
  private hints=0;
  private results:Record<string,number>={};
  private currentResult=0;
  private currentScore:PoseScore={score:0,matched:false,errors:[],adjustment:null};
  constructor(readonly tasks:readonly MotionChallenge[],records:Record<string,number>={}){
    if(!tasks.length)throw new Error('Training requires at least one task');
    for(const task of tasks){const value=records[task.id];if(Number.isInteger(value)&&value>=0&&value<=100)this.results[task.id]=value;}
  }
  get task():MotionChallenge{return this.tasks[this.index];}
  get taskIndex():number{return this.index;}
  get status():TrainingStatus{return this.currentStatus;}
  get hintLevel():number{return this.hints;}
  get canSubmit():boolean{return this.currentStatus==='playing'&&this.visitorInput;}
  get accuracy():PoseScore{return this.currentScore;}
  get bestScore():number{return this.results[this.task.id]??0;}
  get resultScore():number{return this.currentResult;}
  get completedCount():number{return Object.values(this.results).filter(score=>score>=TRAINING_RULES.minimumScore).length;}
  get records():Record<string,number>{return {...this.results};}
  get totalScore():number{return Object.values(this.results).reduce((sum,value)=>sum+value,0);}
  select(id:string):void{
    const index=this.tasks.findIndex(task=>task.id===id);if(index<0)throw new Error(`Unknown task: ${id}`);
    this.index=index;this.reset('ready');
  }
  start():void{this.reset('playing');}
  preview():void{this.reset('preview');}
  finishPreview():void{if(this.currentStatus==='preview')this.reset('ready');}
  markInput():void{if(this.currentStatus==='playing')this.visitorInput=true;}
  revealHint():void{if(this.currentStatus!=='preview')this.hints=Math.min(2,this.hints+1);}
  resume():void{if(this.currentStatus==='review'){this.currentStatus='playing';this.visitorInput=false;this.currentResult=0;}}
  private reset(status:TrainingStatus):void{
    this.currentStatus=status;this.visitorInput=false;this.currentResult=0;this.hints=0;
    this.currentScore={score:0,matched:false,errors:[],adjustment:null};
  }
  submit(angles:Readonly<Record<string,number>>,options:{manual:boolean;settled:boolean;blocked?:boolean}):boolean{
    if(!this.canSubmit||!options.manual||!options.settled)return false;
    this.currentScore=scorePose(this.task,angles);
    if(options.blocked)this.currentScore={...this.currentScore,score:Math.min(TRAINING_RULES.minimumScore-1,Math.max(0,this.currentScore.score-TRAINING_RULES.collisionPenalty)),matched:false};
    this.currentResult=this.currentScore.score;
    this.results[this.task.id]=Math.max(this.bestScore,this.currentResult);
    this.currentStatus=this.currentScore.matched?'complete':'review';return true;
  }
}
