import {performanceAction,type PerformanceAngles,type PerformanceTempo} from './performance-library';
export interface PerformanceSegment {angles:PerformanceAngles;duration:number;actionIndex:number;actionId:string;phase:'action'|'closing';}
export function buildPerformanceTimeline(ids:readonly string[],tempo:PerformanceTempo):PerformanceSegment[] {
  if(!ids.length||ids.length>4)throw new Error('Choose one to four actions');
  const factor=tempo==='lively'?.78:1.15;
  const frames:PerformanceSegment[]=ids.flatMap((id,actionIndex)=>performanceAction(id).frames.map(frame=>({...frame,duration:frame.duration*factor,actionIndex,actionId:id,phase:'action' as const})));
  // A continuous performance has one closing segment; no per-clip neutral reset.
  frames.push({angles:{},duration:1.15,actionIndex:ids.length-1,actionId:ids[ids.length-1],phase:'closing'});
  return frames;
}

/** Time-based, monotone Hermite curves share joint velocity across passing poses.
 * Tangents are compiled once; turns/holds stop, but ordinary waypoints do not.
 * Each channel stays within its authored endpoints (no spline limit overshoot). */
export class PerformanceClock {
  private index=0;private elapsed=0;private completed=0;private paused=false;
  private readonly keys:string[];
  private readonly values:number[][];
  private readonly velocities:number[][];
  private readonly current:Record<string,number>;
  private readonly total:number;
  readonly frames:readonly PerformanceSegment[];
  constructor(frames:readonly PerformanceSegment[],initial:PerformanceAngles){
    if(!frames.length||Object.values(initial).some(v=>!Number.isFinite(v))||frames.some(frame=>!Number.isFinite(frame.duration)||frame.duration<=0||Object.values(frame.angles).some(v=>!Number.isFinite(v))))throw new Error('Invalid performance timeline');
    this.frames=frames;
    this.total=frames.reduce((sum,frame)=>sum+frame.duration,0);
    this.keys=[...new Set([Object.keys(initial),...frames.map(frame=>Object.keys(frame.angles))].flat())];
    this.values=[initial,...frames.map(frame=>frame.angles)].map(pose=>this.keys.map(key=>pose[key]??0));
    this.current=Object.fromEntries(this.keys.map((key,j)=>[key,this.values[0][j]]));
    this.velocities=this.values.map(()=>this.keys.map(()=>0));
    for(let i=1;i<this.values.length-1;i++){
      const before=frames[i-1].duration,after=frames[i].duration;
      for(let j=0;j<this.keys.length;j++){
        const incoming=(this.values[i][j]-this.values[i-1][j])/before;
        const outgoing=(this.values[i+1][j]-this.values[i][j])/after;
        if(incoming*outgoing<=0)continue; // deliberate hold or reversal
        const w1=2*after+before,w2=after+2*before;
        this.velocities[i][j]=(w1+w2)/(w1/incoming+w2/outgoing);
      }
    }
  }
  get angles():PerformanceAngles{return this.current;}
  get finished():boolean{return this.index>=this.frames.length;}
  get frame():PerformanceSegment{return this.frames[Math.min(this.index,this.frames.length-1)];}
  get progress():number {return this.finished?1:(this.completed+this.elapsed)/this.total;}
  pause():void{this.paused=true;}resume():void{this.paused=false;}
  update(delta:number):boolean {
    if(this.paused||this.finished||!Number.isFinite(delta)||delta<=0)return false;
    let remaining=delta;
    while(remaining>1e-10&&!this.finished){
      const frame=this.frames[this.index],step=Math.min(remaining,frame.duration-this.elapsed);this.elapsed+=step;remaining-=step;
      if(this.elapsed>=frame.duration-1e-10){this.completed+=frame.duration;this.index++;this.elapsed=0;}
    }
    if(this.finished){
      const last=this.values[this.values.length-1];
      for(let j=0;j<this.keys.length;j++)this.current[this.keys[j]]=last[j];
    }else{
      const i=this.index,h=this.frames[i].duration,t=this.elapsed/h,t2=t*t,t3=t2*t;
      const h00=2*t3-3*t2+1,h10=t3-2*t2+t,h01=-2*t3+3*t2,h11=t3-t2;
      for(let j=0;j<this.keys.length;j++)this.current[this.keys[j]]=
        h00*this.values[i][j]+h10*h*this.velocities[i][j]+h01*this.values[i+1][j]+h11*h*this.velocities[i+1][j];
    }
    return true;
  }
}
