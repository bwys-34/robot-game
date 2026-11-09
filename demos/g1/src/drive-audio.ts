import type {DriveState} from './drive-state';
import type {DriveFootfall} from './drive-rig';
import type {DriveActionSoundEvent} from './drive-action-audio';
import {TUTORIAL_STEPS} from './drive-tutorial';

export type DriveSoundCue='footstep'|'ready'|'pause'|'mode'|'speed'|'action'|'success'|'warning';
export interface DriveFeedbackSoundEvent {cue:DriveSoundCue;side?:'left'|'right';strength?:number;}
export type DriveSoundEvent=DriveFeedbackSoundEvent|DriveActionSoundEvent;
type SoundState=Pick<DriveState,'running'|'paused'|'mode'|'speedMode'|'body'|'stage'|'experience'|'gesture'|'contact'>;
const stages:readonly string[]=TUTORIAL_STEPS;

/** Observe state edges even while muted; old events are never replayed on unmute. */
export class DriveSoundTracker {
  private previous:SoundState|undefined;
  private readonly events:DriveFeedbackSoundEvent[]=[];
  update(state:SoundState,landings:readonly DriveFootfall[]):readonly DriveFeedbackSoundEvent[]{
    this.events.length=0;
    const before=this.previous,active=state.running&&!state.paused;
    if(before){
      let cue:DriveSoundCue|undefined;
      if(active&&state.body==='falling'&&before.body!=='falling')cue='warning';
      else if(active&&state.experience==='mission'&&before.experience==='mission'&&stages.indexOf(state.stage)>stages.indexOf(before.stage))cue='success';
      else if(active&&(!before.running||before.paused||before.body==='recovering'&&state.body==='upright'))cue='ready';
      else if(before.running&&!before.paused&&!active)cue='pause';
      else if(state.mode!==before.mode)cue='mode';
      else if(active&&state.speedMode!==before.speedMode)cue='speed';
      else if(active&&state.gesture&&state.gesture!==before.gesture)cue='action';
      else if(active&&state.contact&&state.contact!==before.contact)cue='warning';
      if(cue)this.events.push({cue});
    }
    if(active&&state.body==='upright')for(const landing of landings)this.events.push({cue:'footstep',...landing});
    if(!this.previous)this.previous={...state};else Object.assign(this.previous,state);
    return this.events;
  }
}

const NOTES:Record<Exclude<DriveSoundCue,'footstep'>,readonly number[]>={
  ready:[440,660],pause:[440,330],mode:[392,523],speed:[523,784],
  action:[523,659],success:[523,659,784],warning:[220,165],
};

export type DriveAudioProfile='original'|'clear'|'minimal';
/** Midrange cues for small exhibition speakers; keep the diagnostic reference unchanged. */
const CLEAR_AUDIO={master:.72,volume:2.7,duration:1.45,minimumDuration:.13,hold:.55};

/** Bounded soft saturation also handles simultaneous footsteps, action and UI cues. */
export function createDriveAudioOutput(context:BaseAudioContext,destination:AudioNode,profile:DriveAudioProfile='clear'):GainNode{
  const gain=context.createGain(),limiter=context.createWaveShaper();
  gain.gain.value=profile==='minimal'?.6:CLEAR_AUDIO.master;
  const curve=new Float32Array(2049);
  for(let i=0;i<curve.length;i++)curve[i]=.8*Math.tanh((i/(curve.length-1)*2-1)*1.5);
  limiter.curve=curve;
  gain.connect(limiter);limiter.connect(destination);
  return gain;
}

/** Small original synthesized cues: no downloads, music loop or per-frame audio. */
export class DriveSoundBank {
  private readonly noise:AudioBuffer;
  private readonly voices=new Map<AudioScheduledSourceNode,{nodes:AudioNode[];performance:boolean}>();
  private lastWarning=-Infinity;
  private lastAction=-Infinity;
  private lastStep=-Infinity;
  constructor(private readonly context:BaseAudioContext,private readonly output:AudioNode,private readonly profile:DriveAudioProfile='original'){
    this.noise=context.createBuffer(1,Math.ceil(context.sampleRate*.24),context.sampleRate);
    const data=this.noise.getChannelData(0);let seed=1947;
    for(let i=0;i<data.length;i++){seed=(Math.imul(seed,1664525)+1013904223)|0;data[i]=(seed>>>0)/2147483648-1;}
  }
  get activeVoices():number{return this.voices.size;}
  play(event:DriveSoundEvent):void{
    if(this.profile==='minimal'){this.playMinimal(event);return;}
    if('action' in event){this.playAction(event);return;}
    const now=this.context.currentTime;
    if(event.cue==='warning'){if(now-this.lastWarning<.8)return;this.lastWarning=now;}
    if(event.cue==='footstep'){
      const strength=Math.max(.2,Math.min(1,event.strength??.5));
      const noise=this.context.createBufferSource(),filter=this.context.createBiquadFilter();
      noise.buffer=this.noise;filter.type='lowpass';filter.frequency.value=event.side==='left'?1050:1150;
      noise.connect(filter);this.envelope(noise,filter,now,.085,.18*strength,[filter]);
      this.tone(event.side==='left'?125:135,now,.07,.22*strength,55);
      return;
    }
    const duration=this.profile==='clear'?.21:event.cue==='warning'?.13:.095;
    NOTES[event.cue].forEach((frequency,i)=>this.tone(frequency,now+i*(duration*.85),duration,event.cue==='warning'?.11:.085));
  }
  private playMinimal(event:DriveSoundEvent):void{
    const now=this.context.currentTime;
    if('action'in event){
      // A quiet accent, not a drum track or continuous motor simulation.
      if(!['bell','clap','landing'].includes(event.cue)||now-this.lastAction<1.1)return;
      this.lastAction=now;this.tone(event.cue==='landing'?520:660,now,.16,.105,undefined,true);return;
    }
    if(event.cue==='footstep'){
      if(now-this.lastStep<.32)return;this.lastStep=now;
      const source=this.context.createBufferSource(),filter=this.context.createBiquadFilter();source.buffer=this.noise;
      filter.type='lowpass';filter.frequency.value=900;source.connect(filter);
      this.envelope(source,filter,now,.065,.045*Math.min(1,event.strength??.5),[filter]);return;
    }
    if(event.cue==='warning'){if(now-this.lastWarning<1.5)return;this.lastWarning=now;}
    const notes=event.cue==='ready'||event.cue==='success'?[587,784]:event.cue==='warning'?[523]:[659];
    notes.forEach((note,i)=>this.tone(note,now+i*.14,.18,event.cue==='success'?.16:.14));
  }
  private playAction(event:DriveActionSoundEvent):void{
    const now=this.context.currentTime,strength=Math.max(.2,Math.min(1,event.strength??.65));
    switch(event.cue){
      case 'servo':this.tone(event.pitch??190,now,.15,.10*strength,(event.pitch??190)*1.35,true,'triangle');break;
      case 'swoosh':this.burst('bandpass',event.pitch??900,(event.pitch??900)*2.4,now,.22,.20*strength);break;
      case 'clap':this.burst('highpass',1000,1400,now,.10,.48*strength);this.burst('bandpass',1800,1200,now+.014,.065,.22*strength);break;
      case 'kick':this.tone(145,now,.15,.30*strength,48,true);break;
      case 'snare':this.burst('highpass',900,1300,now,.12,.27*strength);this.tone(145,now,.075,.10*strength,85,true);break;
      case 'hat':this.burst('highpass',6500,8000,now,.06,.28*strength);break;
      case 'bell':this.tone(event.pitch??659,now,.20,.11*strength,event.pitch??659,true);this.tone((event.pitch??659)*2,now,.12,.025*strength,(event.pitch??659)*2,true);break;
      case 'landing':this.burst('lowpass',600,240,now,.18,.45*strength);this.tone(115,now,.18,.32*strength,44,true);break;
    }
  }
  private burst(type:BiquadFilterType,frequency:number,end:number,when:number,duration:number,volume:number):void{
    const source=this.context.createBufferSource(),filter=this.context.createBiquadFilter();source.buffer=this.noise;
    if(this.profile==='clear'){frequency=Math.min(2200,Math.max(500,frequency));end=Math.min(2600,Math.max(500,end));}
    filter.type=type;filter.Q.value=.7;filter.frequency.setValueAtTime(frequency,when);filter.frequency.exponentialRampToValueAtTime(end,when+duration);
    source.connect(filter);this.envelope(source,filter,when,duration,volume,[filter],true);
  }
  private tone(frequency:number,when:number,duration:number,volume:number,end=frequency,performance=false,type:OscillatorType='sine'):void{
    if(this.profile==='clear'){
      // Raise bass-only cues into the midrange for the exhibition speaker profile.
      const audible=(value:number)=>Math.min(3200,Math.max(420,value<300?value*4:value));
      frequency=audible(frequency);end=audible(end);if(type==='sine')type='triangle';
    }
    const source=this.context.createOscillator();source.type=type;source.frequency.setValueAtTime(frequency,when);
    source.frequency.exponentialRampToValueAtTime(end,when+duration);
    this.envelope(source,source,when,duration,volume,[],performance);
  }
  private envelope(source:AudioScheduledSourceNode,input:AudioNode,when:number,duration:number,volume:number,extra:AudioNode[],performance=false):void{
    // Drop excess effects, never accumulate a queue during stalls/repeated input.
    if(this.voices.size>=16){source.disconnect();for(const node of extra)node.disconnect();return;}
    if(this.profile==='clear'){duration=Math.max(CLEAR_AUDIO.minimumDuration,duration*CLEAR_AUDIO.duration);volume*=CLEAR_AUDIO.volume;}
    const gain=this.context.createGain();gain.gain.setValueAtTime(0,when);
    gain.gain.linearRampToValueAtTime(volume,when+(this.profile==='clear'?.012:.004));
    if(this.profile==='clear')gain.gain.setValueAtTime(volume,when+duration*CLEAR_AUDIO.hold);
    if(this.profile==='minimal')gain.gain.setValueAtTime(volume,when+duration*.4);
    gain.gain.exponentialRampToValueAtTime(.0001,when+duration);
    input.connect(gain);gain.connect(this.output);this.voices.set(source,{nodes:[source,gain,...extra],performance});
    source.onended=()=>{this.release(source);};source.start(when);source.stop(when+duration+.008);
  }
  private release(source:AudioScheduledSourceNode):void{
    const voice=this.voices.get(source);if(!voice)return;this.voices.delete(source);
    source.onended=null;for(const node of voice.nodes)node.disconnect();
  }
  stop():void{
    for(const source of this.voices.keys()){try{source.stop();}catch{}this.release(source);}
  }
  stopPerformance():void{
    for(const [source,voice] of this.voices)if(voice.performance){try{source.stop();}catch{}this.release(source);}
  }
}

export type DriveAudioStatus='off'|'on'|'pending'|'resume'|'unavailable';
/** Browser permission/lifecycle stays outside gameplay and does not gate driving. */
export class DriveAudio {
  private context:AudioContext|undefined;
  private output:GainNode|undefined;
  private bank:DriveSoundBank|undefined;
  private readonly tracker=new DriveSoundTracker();
  private wanted=false;
  private interrupted=false;
  private pending=false;
  private failed=false;
  private generation=0;
  private wasActive=false;
  private previousGesture:SoundState['gesture']=null;
  private previousMode:SoundState['mode']|undefined;
  constructor(private readonly changed:(status:DriveAudioStatus)=>void){}
  get status():DriveAudioStatus{
    return this.failed?'unavailable':this.pending?'pending':!this.wanted?'off':this.interrupted||this.context?.state!=='running'?'resume':'on';
  }
  async toggle():Promise<void>{
    if(this.pending)return;
    if(this.status==='on'){this.disable();return;}
    const generation=++this.generation;this.wanted=true;this.pending=true;this.changed(this.status);
    try{
      if(!this.context){
        const Constructor=globalThis.AudioContext??(globalThis as unknown as {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
        if(!Constructor)throw new Error('Web Audio unavailable');
        this.context=new Constructor();this.output=createDriveAudioOutput(this.context,this.context.destination,'minimal');
        this.bank=new DriveSoundBank(this.context,this.output,'minimal');
        this.context.addEventListener('statechange',()=>this.changed(this.status));
      }
      // Called directly by a real click/tap, never by gamepad polling.
      this.failed=false;this.interrupted=false;
      let timer:ReturnType<typeof setTimeout>|undefined;
      let resumed=false;
      try{resumed=await Promise.race([
        this.context.resume().then(()=>true),
        new Promise<boolean>(resolve=>{timer=setTimeout(()=>resolve(false),1800);}),
      ]);}finally{clearTimeout(timer);}
      if(generation!==this.generation)return;
      this.interrupted=!resumed||this.context.state!=='running';
      if(!this.interrupted)this.bank!.play({cue:'ready'});
    }catch{this.failed=!this.bank;this.interrupted=true;if(this.failed)this.wanted=false;}
    finally{if(generation===this.generation){this.pending=false;this.changed(this.status);}}
  }
  private disable():void{
    ++this.generation;this.wanted=false;this.pending=false;this.bank?.stop();
    void this.context?.suspend().catch(()=>{});this.changed(this.status);
  }
  interrupt():void{
    ++this.generation;this.pending=false;this.interrupted=this.wanted;this.bank?.stop();
    void this.context?.suspend().catch(()=>{});this.changed(this.status);
  }
  update(state:SoundState,landings:readonly DriveFootfall[],actionSounds?:readonly DriveActionSoundEvent[]):void{
    const events=this.tracker.update(state,landings),active=state.running&&!state.paused;
    if(this.wasActive&&!active)this.bank?.stop();this.wasActive=active;
    if((state.gesture&&this.previousGesture!==state.gesture)||(this.previousMode!==undefined&&this.previousMode!==state.mode)||!active||state.body!=='upright')this.bank?.stopPerformance();
    this.previousGesture=state.gesture;this.previousMode=state.mode;
    if(this.status!=='on')return;
    try{
      for(const event of events)if(event.cue!=='action'||actionSounds===undefined)this.bank?.play(event);
      if(active&&state.body==='upright')for(const event of actionSounds??[])this.bank?.play(event);
    }catch{this.failed=true;this.bank?.stop();this.changed(this.status);}
  }
}
