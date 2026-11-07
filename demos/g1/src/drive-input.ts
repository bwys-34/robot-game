import {EMPTY_DRIVE_COMMAND,DRIVE_LT_HOLD_MS,type DriveCommand,type DriveMode} from './drive-config';
import {PERFORMANCE_SHORTCUTS} from './drive-actions';
import {MODE_SHORTCUTS} from './drive-shortcuts';
import type {TestPad} from './gamepad-test-input';
import {normalizeDrivePad,type DrivePadProfile} from './drive-pad-layout';
export interface DriveInputFrame {ready:boolean;status:'paused'|'neutral'|'ready'|'disconnected'|'unsupported';command:DriveCommand;triggers?:{left:number;right:number;holdProgress:number};}
/** Bind only browser-verified standard layouts; raw Bluetooth channel counts vary. */
export class DriveInput {
  private device:{id:string;index:number}|null=null;
  private neutral=false;
  private buttons:boolean[]=[];
  private downAt=new Map<number,number>();
  private tapAt=new Map<number,number>();
  private used=new Set<number>();
  private startAt:number|null=null;
  private consumed=new Set<number>();
  private triggerKeys=new Set<number>();
  private locomotionChord=false;
  constructor(private readonly clock:()=>number=()=>performance.now(),private profile:DrivePadProfile='standard'){}
  setProfile(profile:DrivePadProfile):void {this.suspend();this.profile=profile;}
  get active():boolean{return this.device!==null;}
  static supported(pad:TestPad):boolean{return pad.connected&&pad.mapping==='standard'&&pad.axes.length>=4&&pad.buttons.length>=10;}
  arm(pad:TestPad):boolean {
    this.suspend();if(!normalizeDrivePad(pad,this.profile))return false;
    this.device={id:pad.id,index:pad.index};return true;
  }
  suspend():void {this.device=null;this.neutral=false;this.buttons=[];this.downAt.clear();this.tapAt.clear();this.used.clear();this.consumed.clear();this.triggerKeys.clear();this.locomotionChord=false;this.startAt=null;}
  read(pads:readonly (TestPad|null)[],focused:boolean,mode:DriveMode='locomotion'):DriveInputFrame {
    const result:DriveInputFrame={ready:false,status:'paused',command:{...EMPTY_DRIVE_COMMAND}};
    if(!this.device)return result;
    const stop=(status:DriveInputFrame['status'])=>{this.suspend();return {...result,status};};
    if(!focused)return stop('paused');
    const raw=pads.find(p=>p?.connected&&p.id===this.device!.id&&p.index===this.device!.index);
    if(!raw)return stop('disconnected');
    const pad=normalizeDrivePad(raw,this.profile);if(!pad)return stop('unsupported');
    if(!DriveInput.supported(pad)||!pad.axes.slice(0,4).every(v=>Number.isFinite(v)&&Math.abs(v)<=1.05))return stop('unsupported');
    const held=pad.buttons.map(b=>b.pressed||b.value>.5);
    if(!this.neutral){
      this.buttons=held;
      if(pad.axes.slice(0,4).some(v=>Math.abs(v)>.16)||held.some(Boolean))return {...result,status:'neutral'};
      this.neutral=true;
    }
    const axis=(i:number)=>{const v=Math.max(-1,Math.min(1,pad.axes[i]));return Math.abs(v)<.16?0:Math.sign(v)*(Math.abs(v)-.16)/.84;};
    const press=(i:number)=>Boolean(held[i]&&!this.buttons[i]);
    result.ready=true;result.status='ready';
    const now=this.clock();
    for(const i of [0,1,2,3]){if(!held[i])this.consumed.delete(i);else if(held[4]||held[5]||held[6]||held[7]||held[8])this.consumed.add(i);}
    for(const i of [4,5,6,7])if(press(i)){this.downAt.set(i,now);this.used.delete(i);}
    const modifier=Boolean(held[4]||held[5]||held[6]||held[7]||held[8]);
    result.command={forward:-axis(1)||0,strafe:axis(0),turn:-axis(2)||0,look:-axis(3)||0,
      wave:!modifier&&!this.consumed.has(0)&&press(0),stop:!modifier&&!this.consumed.has(1)&&Boolean(held[1]),invite:!modifier&&!this.consumed.has(2)&&press(2),camera:!modifier&&!this.consumed.has(3)&&press(3),pause:false,
      cycleMode:false,actionStep:modifier?0:Number(press(15))-Number(press(14))};
    const c=result.command,longLT=held[6]&&now-(this.downAt.get(6)??now)>=DRIVE_LT_HOLD_MS;
    if(this.profile==='standard'){
      const value=(index:number)=>Math.max(0,Math.min(1,pad.buttons[index]?.value??0));
      result.triggers={left:value(6),right:value(7),holdProgress:held[6]?Math.min(1,(now-(this.downAt.get(6)??now))/DRIVE_LT_HOLD_MS):0};
    }
    if(held[4]&&([0,1,2,3,5,6,7,8,9].some(i=>held[i])))this.used.add(4);
    if(held[5]&&([0,1,2,3,4,6,7,8,9].some(i=>held[i])))this.used.add(5);
    if(held[4]&&!held[5]&&!held[6]&&!held[7]&&!held[8]){
      const shortcut=MODE_SHORTCUTS.find(s=>press(s.button));if(shortcut)Object.assign(c,shortcut.command);
    }
    if(held[5]&&!held[4]&&!held[6]&&!held[7]&&!held[8]&&['locomotion','stand','performance'].includes(mode)){
      const shortcut=PERFORMANCE_SHORTCUTS.find(s=>press(s.button));if(shortcut)c.actionTrigger=shortcut.action;
    }
    if(!held[5]&&this.buttons[5]&&!this.used.has(5)&&!modifier)c.cycleMode=true;
    if(held[6]&&(held[7]||[0,1,2,3,12,14].some(i=>held[i])))this.used.add(6);
    // A button held before the LT timer expires remains a pending chord. Fire
    // once when ready, rather than losing its rising edge during the hold.
    const ltKeys=[1,3,2,12,14,0],heldKeys=ltKeys.filter(i=>held[i]);
    for(const key of ltKeys)if(!held[6]||!held[key])this.triggerKeys.delete(key);
    if(held[6]&&held[7])for(const key of heldKeys)this.triggerKeys.add(key);
    if(longLT&&!held[7]&&heldKeys.length===1){
      const key=heldKeys[0];
      if(!this.triggerKeys.has(key)){
        this.triggerKeys.add(key);
        if(key===1)c.mode='damp';else if(key===3)c.mode='zero';else if(key===2)c.recover=true;
        else if(key===12)c.mode='stand';else if(key===14)c.actionTrigger='sit';
        else if(key===0){if(mode==='debug')c.diagnose=true;else c.actionTrigger='sit';}
      }
    }
    if(held[7]&&held[0]&&!this.locomotionChord&&!held[6]&&!held[4]&&!held[5]&&!held[8])c.mode='locomotion';
    this.locomotionChord=Boolean(held[7]&&held[0]);
    if(held[6]&&held[7]&&(press(6)||press(7)))this.used.add(7);
    if(longLT&&held[7]&&!this.used.has(99)){c.mode='debug';this.used.add(99);}
    if(!held[6]||!held[7])this.used.delete(99);
    // Android has no readable triggers: a deliberate double-shoulder hold is
    // the exhibition substitute. It consumes both releases and speed taps.
    const androidDebug=this.profile==='exhibition-android'&&held[4]&&held[5];
    if(androidDebug&&now-Math.max(this.downAt.get(4)??now,this.downAt.get(5)??now)>=800&&!this.used.has(98)){
      c.mode='debug';this.used.add(98);
    }
    if(!held[4]||!held[5])this.used.delete(98);
    if(held[8]){if(press(0))c.actionTrigger='handshake';else if(press(3))c.actionTrigger='wave';else if(press(2))c.actionTrigger='turnwave';}
    if(mode==='debug'){
      c.actionStep=0;c.wave=c.invite=c.camera=false;c.actionTrigger=undefined;
      if(!modifier){c.labStep=Number(press(15))-Number(press(14));c.labConfirm=press(0);c.diagnose=press(2);c.labReset=press(3);}
      // Shoulder/trigger chords must not also move the selected joint.
      if(modifier)c.forward=c.strafe=0;
    }
    // A short released tap counts, a held modifier/chord does not. Long presses
    // must never leave a stale first tap that changes speed on the next use.
    for(const i of [4,6])if(!held[i]&&this.buttons[i]){
      const duration=now-(this.downAt.get(i)??now),prior=this.tapAt.get(i);
      if(duration<350&&!this.used.has(i)){if(prior!==undefined&&now-prior<330){c.speedMode=i===6?'slow':'fast';this.tapAt.delete(i);}else this.tapAt.set(i,now);}
      else this.tapAt.delete(i);this.downAt.delete(i);
    }
    if(modifier)this.startAt=null;
    else if(press(9)){if(this.startAt!==null&&now-this.startAt<330){c.stepping=true;this.startAt=null;}else this.startAt=now;}
    if(this.startAt!==null&&now-this.startAt>=330){c.toggleStand=true;this.startAt=null;}
    // Positive UI 'turn' means turn to the robot's left. Right stick right is negative yaw.
    this.buttons=held;return result;
  }
}

/** A starts a new input session; its held state is never reused as an action. */
export class DriveActivationInput {
  private held=new Set<string>();
  private blocked=false;
  constructor(private profile:DrivePadProfile='standard'){}
  setProfile(profile:DrivePadProfile):void {this.profile=profile;this.held.clear();this.block();}
  block():void{this.blocked=true;}
  read(pads:readonly (TestPad|null)[],focused:boolean,enabled:boolean):boolean{
    const supported=pads.map(p=>p?normalizeDrivePad(p,this.profile):null).filter((p):p is TestPad=>Boolean(p));
    if(!focused)this.block();
    if(focused&&supported.length&&supported.every(p=>p.buttons.every(b=>!b.pressed&&b.value<=.5)))this.blocked=false;
    const next=new Set<string>();let activate=false;
    for(const pad of supported){
      const key=`${pad.index}:${pad.id}`,down=pad.buttons[0].pressed||pad.buttons[0].value>.5;
      if(down)next.add(key);
      if(enabled&&focused&&!this.blocked&&down&&!this.held.has(key)&&pad.buttons.slice(1).every(b=>!b.pressed&&b.value<=.5))activate=true;
    }
    this.held=next;return activate;
  }
}
