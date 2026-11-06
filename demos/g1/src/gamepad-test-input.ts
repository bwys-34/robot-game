export interface TestPad {
  id:string;index:number;mapping:string;connected:boolean;
  axes:readonly number[];buttons:readonly {pressed:boolean;value:number}[];
}
export type InputStatus='paused'|'disconnected'|'neutral'|'ready'|'invalid';
export interface TestInputFrame {
  status:InputStatus;x:number;y:number;jointDegrees:number;orbitRadians:number;reset:boolean;front:boolean;
}

/** This raw profile is the layout observed on the Windows Bluetooth test device,
 * not a claim that every Dune Fox connection mode has the same mapping. */
export function supportsTestPad(pad:TestPad):boolean {
  if(!pad.connected||pad.axes.length<2||pad.buttons.length<2)return false;
  return pad.mapping==='standard'||(pad.mapping===''&&
    pad.id==='Xbox Bluetooth Gamepad (Vendor: 045e Product: 02e0)'&&pad.axes.length===10&&pad.buttons.length===11);
}

/** Pure input processing; never changes the robot, DOM, or native gamepad state. */
export class GamepadTestInput {
  private device:{id:string;index:number}|null=null;
  private neutralSeen=false;
  private previous=[false,false];
  private status:InputStatus='paused';
  readonly deadzone=.16;
  get active():boolean{return this.device!==null;}
  arm(pad:TestPad):boolean {
    this.suspend();
    if(!supportsTestPad(pad))return false;
    this.device={id:pad.id,index:pad.index};this.status='neutral';return true;
  }
  suspend(status:InputStatus='paused'):void {
    this.device=null;this.neutralSeen=false;this.previous=[false,false];this.status=status;
  }
  update(pads:readonly (TestPad|null)[],delta:number,focused:boolean):TestInputFrame {
    const result:TestInputFrame={status:this.status,x:0,y:0,jointDegrees:0,orbitRadians:0,reset:false,front:false};
    if(!this.device)return result;
    const stop=(status:InputStatus)=>{this.suspend(status);return {...result,status};};
    if(!focused)return stop('paused');
    const pad=pads.find(p=>p?.connected&&p.index===this.device!.index&&p.id===this.device!.id);
    if(!pad)return stop('disconnected');
    if(!supportsTestPad(pad)||!pad.axes.slice(0,2).every(v=>Number.isFinite(v)&&Math.abs(v)<=1.05))return stop('invalid');
    result.x=Math.max(-1,Math.min(1,pad.axes[0]));result.y=Math.max(-1,Math.min(1,pad.axes[1]));
    const buttons=[0,1].map(index=>pad.buttons[index].pressed||pad.buttons[index].value>.5);
    if(!this.neutralSeen){
      this.previous=buttons;
      if(Math.abs(result.x)>this.deadzone||Math.abs(result.y)>this.deadzone||buttons.some(Boolean))return {...result,status:'neutral'};
      this.neutralSeen=true;
    }
    this.status='ready';result.status='ready';
    const filtered=(value:number)=>Math.abs(value)<=this.deadzone?0:Math.sign(value)*(Math.abs(value)-this.deadzone)/(1-this.deadzone);
    const dt=Number.isFinite(delta)?Math.max(0,Math.min(.05,delta)):0;
    result.jointDegrees=-filtered(result.y)*45*dt||0;
    result.orbitRadians=filtered(result.x)*1.2*dt;
    result.reset=buttons[0]&&!this.previous[0];result.front=buttons[1]&&!this.previous[1];
    this.previous=buttons;return result;
  }
}
