import type {DriveActionId} from './drive-actions';
import {BODY_CLIPS,BODY_CLIP_TIMING,isBodyClip} from './drive-body-motion';

export type DriveActionSoundCue='servo'|'swoosh'|'clap'|'kick'|'snare'|'hat'|'bell'|'landing';
export interface DriveActionSoundEvent {cue:DriveActionSoundCue;action:DriveActionId;pitch?:number;strength?:number;}
export interface DriveActionSoundMarker extends DriveActionSoundEvent {at:number;}

/** Original short sound design tied to authored poses; no independent music timer. */
export function buildDriveActionSoundtrack(action:DriveActionId,durations:readonly number[]):DriveActionSoundMarker[]{
  const track:DriveActionSoundMarker[]=[],ends:number[]=[];let total=0;
  for(const duration of durations){total+=duration;ends.push(total);}
  const add=(at:number,cue:DriveActionSoundCue,pitch?:number,strength=.65)=>track.push({at,cue,action,pitch,strength});
  const end=(i:number)=>ends[Math.min(i,ends.length-1)]??0;
  if(action==='jump'||action==='backflip'){
    const flight=BODY_CLIP_TIMING.flight[action];
    add(0,'servo',150);add(BODY_CLIP_TIMING.takeoff,'swoosh',action==='backflip'?800:1200,.9);
    if(action==='backflip')add(BODY_CLIP_TIMING.takeoff+flight*.48,'swoosh',1600,.7);
    add(BODY_CLIP_TIMING.takeoff+flight,'landing',70,1);add(BODY_CLIPS[action]-.16,'bell',523,.4);
  }else if(action==='sit'){
    add(0,'servo',180);add(BODY_CLIP_TIMING.sitDown,'servo',120,.4);add(BODY_CLIP_TIMING.sitRise,'servo',240);add(BODY_CLIPS.sit-.12,'bell',440,.35);
  }else if(action==='clap'){
    add(0,'servo',240,.35);for(const i of [2,4,6])add(end(i),'clap',undefined,.9);
  }else if(['dance','robotdance','armdance','cheerdance'].includes(action)){
    add(0,action==='armdance'?'bell':'kick',action==='armdance'?523:undefined,.55);
    // The same boundaries that move the arms carry the downbeats. Offbeats are
    // fractions of each segment, so future timing edits also retime percussion.
    for(let i=0;i<durations.length-1;i++){
      const start=i?ends[i-1]:0;
      if(action==='dance'){add(end(i),i%2?'snare':'kick');add(start+durations[i]*.5,'hat',undefined,.4);}
      else if(action==='robotdance'){add(end(i),'servo',i%2?320:190,.8);if(i%2===0)add(end(i),'kick',undefined,.55);}
      else if(action==='armdance'){add(end(i),'bell',[523,659,587,784][i%4],.6);add(start+durations[i]*.5,'hat',undefined,.35);}
      else{add(end(i),i%2?'clap':'kick',undefined,.65);if(i%2)add(end(i),'bell',[523,659,784][Math.floor(i/2)%3],.55);}
    }
    add(total-.08,'bell',784,.4);
  }else if(action==='wave'||action==='turnwave'){
    add(0,'bell',660,.5);for(let i=1;i<durations.length-2;i++)add(end(i),'servo',i%2?310:420,.38);
    if(action==='turnwave')add(end(0),'swoosh',700,.35);
  }else if(action==='handshake'){
    add(0,'servo',220,.5);add(end(1),'bell',523,.45);for(const i of [2,3,4,5])add(end(i),'servo',i%2?190:260,.35);
  }else if(action==='bow'){
    add(0,'bell',523,.45);add(end(2),'servo',160,.4);add(end(4),'bell',392,.4);add(end(6),'servo',220,.45);add(total-.18,'bell',659,.5);
  }else if(action==='raise'||action==='stretch'){
    add(0,'servo',240,.35);add(end(0),'swoosh',1100,.5);add(end(1),'bell',action==='raise'?784:659,.5);add(end(4),'swoosh',800,.45);add(total-.12,'bell',523,.35);
  }else{ // invitation: extend, present, then gently return
    add(0,'servo',220,.4);add(end(0),'swoosh',900,.45);add(end(1),'bell',587,.5);add(end(5),'servo',260,.35);add(total-.12,'bell',659,.4);
  }
  return track.sort((a,b)=>a.at-b.at);
}

/** Consume events against the pose clock. Pausing that clock pauses its sounds. */
export class DriveActionSoundClock {
  readonly duration:number;
  private readonly markers:DriveActionSoundMarker[];
  private index=0;
  private previous=-1e-8;
  private readonly events:DriveActionSoundEvent[]=[];
  constructor(action:DriveActionId,durations:readonly number[]){
    this.duration=isBodyClip(action)?BODY_CLIPS[action]:durations.reduce((a,b)=>a+b,0);
    this.markers=buildDriveActionSoundtrack(action,durations);
  }
  advanceTo(seconds:number):readonly DriveActionSoundEvent[]{
    this.events.length=0;
    if(!Number.isFinite(seconds)||seconds<this.previous)return this.events;
    const now=Math.min(this.duration,seconds);
    while(this.index<this.markers.length&&this.markers[this.index].at<=now+1e-8){
      const marker=this.markers[this.index++];
      // Drop stale effects rather than catch up with a burst after a frame stall.
      if(marker.at>this.previous&&now-marker.at<=.14)this.events.push(marker);
    }
    this.previous=now;return this.events;
  }
}
