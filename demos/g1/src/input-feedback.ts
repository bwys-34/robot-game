export interface RawPadLike {id:string;index:number;mapping:string;connected:boolean;axes:readonly number[];buttons:readonly {pressed:boolean;value:number}[];}
export interface PadSnapshot {id:string;index:number;mapping:string;connected:boolean;axes:(number|null)[];buttons:{pressed:boolean;value:number|null}[];}
const finite=(value:number)=>Number.isFinite(value)?value:null;
export function snapshotPad(pad:RawPadLike):PadSnapshot {
  return {id:pad.id,index:pad.index,mapping:pad.mapping,connected:pad.connected,axes:Array.from(pad.axes,finite),buttons:Array.from(pad.buttons,b=>({pressed:Boolean(b.pressed),value:finite(b.value)}))};
}
export function padSignature(pad:PadSnapshot):string {return JSON.stringify([pad.id,pad.index,pad.mapping,pad.axes.length,pad.buttons.length]);}
export interface AxisObservation {index:number;min:number;max:number;minDelta:number;maxDelta:number;}
export interface ButtonObservation {index:number;min:number|null;max:number|null;pressedSeen:boolean;}
export interface KeyObservation {code:string;key:string;pressed:boolean;atMs:number;}
export interface CaptureRecord {target:string;startedAtMs:number;durationMs:number;baseline:PadSnapshot|null;last:PadSnapshot|null;axes:AxisObservation[];buttons:ButtonObservation[];keys:KeyObservation[];interrupted:string|null;hasInput:boolean;samples:number;noResponse?:boolean;}
export function photoRows(targets:readonly (readonly string[])[],records:readonly CaptureRecord[],device:PadSnapshot|null){
 return targets.map(([target,label])=>{
  const matches=(r:CaptureRecord)=>!device||!r.baseline||padSignature(r.baseline)===padSignature(device);
  const candidates=records.filter(r=>r.target===target),record=candidates.filter(matches).pop();
  if(!record)return {target,label,state:candidates.length?'other-device':'untested',detail:candidates.length?'其他设备记录 · 需重测':'未记录'};
  const detail=[...record.buttons.map(b=>`钮${b.index} ${b.min?.toFixed(2)??'?'}→${b.max?.toFixed(2)??'?'}`),...record.axes.map(a=>`轴${a.index} Δ${a.minDelta.toFixed(2)}～${a.maxDelta.toFixed(2)}`),...new Set(record.keys.filter(k=>k.pressed).map(k=>`键 ${k.code||k.key}`))].join(' / ');
  return {target,label,state:record.interrupted?'interrupted':record.noResponse?'no-response':record.hasInput?'observed':'untested',detail:record.interrupted?`中断需重测 · ${detail}`:record.noResponse?'已操作，无响应':detail||'未记录'};
 });
}

/** Records observations only. It never converts a channel into a robot command. */
export class InputCapture {
  private axes=new Map<number,AxisObservation>();
  private buttons=new Map<number,ButtonObservation>();
  private keys:KeyObservation[]=[];
  private heldKeys=new Set<string>();
  private last:PadSnapshot|null;
  interrupted:string|null=null;
  private samples=0;
  constructor(readonly target:string,readonly baseline:PadSnapshot|null,readonly startedAtMs:number){this.last=baseline;}
  interrupt(reason:string):void{this.interrupted??=reason;}
  observe(pad:PadSnapshot|null,_now:number):boolean {
    if(this.interrupted)return false;
    if(this.baseline&&(!pad?.connected||padSignature(pad)!==padSignature(this.baseline))){this.interrupt('设备断开或布局发生变化');return false;}
    if(!this.baseline){if(pad){this.interrupt('检测中出现新设备，请重新记录');return false;}return true;}
    if(!pad)return false;
    this.last=pad;this.samples++;
    pad.axes.forEach((value,index)=>{
      const base=this.baseline!.axes[index];if(value===null||base===null)return;
      const delta=value-base,previous=this.axes.get(index);
      if(Math.abs(delta)<.12&&!previous)return;
      this.axes.set(index,{index,min:Math.min(previous?.min??base,value),max:Math.max(previous?.max??base,value),minDelta:Math.min(previous?.minDelta??0,delta),maxDelta:Math.max(previous?.maxDelta??0,delta)});
    });
    pad.buttons.forEach((button,index)=>{
      const base=this.baseline!.buttons[index],previous=this.buttons.get(index);
      const changed=button.pressed!==base.pressed||(button.value!==null&&base.value!==null&&Math.abs(button.value-base.value)>=.12);
      if(!changed&&!previous)return;
      const values=[previous?.min,previous?.max,base.value,button.value].filter((v):v is number=>typeof v==='number');
      this.buttons.set(index,{index,min:values.length?Math.min(...values):null,max:values.length?Math.max(...values):null,pressedSeen:Boolean(previous?.pressedSeen||button.pressed)});
    });
    return true;
  }
  key(code:string,key:string,pressed:boolean,now:number):void {
    if(this.interrupted||this.heldKeys.has(code)===pressed)return;
    if(pressed)this.heldKeys.add(code);else this.heldKeys.delete(code);
    if(this.keys.length<256)this.keys.push({code,key,pressed,atMs:Math.max(0,now-this.startedAtMs)});
  }
  finish(now:number):CaptureRecord {
    return {target:this.target,startedAtMs:this.startedAtMs,durationMs:Math.max(0,now-this.startedAtMs),baseline:this.baseline,last:this.last,
      axes:[...this.axes.values()].sort((a,b)=>a.index-b.index),buttons:[...this.buttons.values()].sort((a,b)=>a.index-b.index),keys:[...this.keys],
      interrupted:this.interrupted,hasInput:Boolean(this.axes.size||this.buttons.size||this.keys.length),samples:this.samples};
  }
  markNoResponse(now:number):CaptureRecord|null {
    const record=this.finish(now);return record.hasInput||record.interrupted?null:{...record,noResponse:true};
  }
}
