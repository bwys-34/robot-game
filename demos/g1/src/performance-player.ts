import {performanceAction,type PerformanceAngles,type PerformanceTempo} from './performance-library';
export interface PerformanceSegment {angles:PerformanceAngles;duration:number;actionIndex:number;actionId:string;phase:'action'|'closing';}
function blendPose(from:PerformanceAngles,to:PerformanceAngles,fraction:number):PerformanceAngles {
  return Object.fromEntries([...new Set([...Object.keys(from),...Object.keys(to)])].map(key=>[key,(from[key]??0)+((to[key]??0)-(from[key]??0))*fraction]));
}
export function buildPerformanceTimeline(ids:readonly string[],tempo:PerformanceTempo):PerformanceSegment[] {
  if(!ids.length||ids.length>8)throw new Error('Choose one to eight actions');
  const authored=ids.flatMap((id,actionIndex)=>performanceAction(id).frames.map(frame=>({...frame,actionIndex,actionId:id,phase:'action' as const})));
  const factor=tempo==='lively'?.9:1;
  const frames:PerformanceSegment[]=authored.map(frame=>({...frame,duration:frame.duration*factor}));
  // Solo clips keep their preparation/return. In a show, spend that same time
  // travelling between expressive poses instead of stopping on a shared rest pose.
  for(let i=1;i<frames.length-2;i++){
    if(frames[i].actionIndex===frames[i+1].actionIndex)continue;
    const from=frames[i-1].angles,to=frames[i+2].angles;
    const duration=frames[i].duration+frames[i+1].duration+frames[i+2].duration;
    const distance=Math.max(...[...new Set([...Object.keys(from),...Object.keys(to)])].map(key=>Math.abs((from[key]??0)-(to[key]??0))));
    if(distance>1e-6){
      frames[i]={...frames[i],angles:blendPose(from,to,frames[i].duration/duration)};
      frames[i+1]={...frames[i+1],angles:blendPose(from,to,(frames[i].duration+frames[i+1].duration)/duration)};
    }else{
      // Repeating the same gesture still needs a small release, not a duplicate hold.
      frames[i+1]={...frames[i+1],angles:blendPose(frames[i].angles,to,frames[i+1].duration/(frames[i+1].duration+frames[i+2].duration))};
    }
  }
  // A continuous performance has one closing segment; no per-clip neutral reset.
  frames.push({angles:{},duration:1.15*factor,actionIndex:ids.length-1,actionId:ids[ids.length-1],phase:'closing'});
  return frames;
}
export function performanceDuration(ids:readonly string[],tempo:PerformanceTempo):number {
  return ids.length?buildPerformanceTimeline(ids,tempo).reduce((sum,frame)=>sum+frame.duration,0):0;
}

/** Quintic Hermite curves join position, velocity and acceleration at every pose.
 * Zero knot acceleration softens reversals; passing poses retain shared velocity.
 * Slope bounds keep every channel within its endpoints without runtime clamping. */
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
        const harmonic=(w1+w2)/(w1/incoming+w2/outgoing);
        // For a quintic with zero endpoint acceleration, endpoint speeds summing
        // to <= 2.5 * secant keep its Bernstein control points monotone.
        this.velocities[i][j]=Math.sign(harmonic)*Math.min(Math.abs(harmonic),1.2*Math.min(Math.abs(incoming),Math.abs(outgoing)));
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
      const i=this.index,h=this.frames[i].duration,t=this.elapsed/h,t2=t*t,t3=t2*t,t4=t3*t,t5=t4*t;
      const h00=1-10*t3+15*t4-6*t5,h10=t-6*t3+8*t4-3*t5,h01=10*t3-15*t4+6*t5,h11=-4*t3+7*t4-3*t5;
      for(let j=0;j<this.keys.length;j++)this.current[this.keys[j]]=
        h00*this.values[i][j]+h10*h*this.velocities[i][j]+h01*this.values[i+1][j]+h11*h*this.velocities[i+1][j];
    }
    return true;
  }
}
