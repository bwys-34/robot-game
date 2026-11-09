export interface HapticEffect {duration:number;startDelay:number;strongMagnitude:number;weakMagnitude:number;}
interface Actuator {
  playEffect:(type:string,options:HapticEffect)=>Promise<string>;
  reset?:()=>Promise<unknown>;
}
interface HapticPad {connected:boolean;index?:number;id?:string;vibrationActuator?:Actuator|null;}
const TEST_EFFECT:HapticEffect={duration:300,startDelay:0,strongMagnitude:.55,weakMagnitude:.35};
export const FALL_EFFECT:HapticEffect={duration:800,startDelay:0,strongMagnitude:.8,weakMagnitude:.45};
export const MODE_EFFECT:HapticEffect={duration:100,startDelay:0,strongMagnitude:.18,weakMagnitude:.12};
export type HapticStatus='no-device'|'unsupported'|'busy'|'completed'|'interrupted'|'error'|'timeout';
export interface HapticResult {status:HapticStatus;message:string;}
export function hapticCapability(pad:HapticPad|null|undefined):'ready'|'no-device'|'unsupported'{
  if(!pad?.connected)return 'no-device';
  return typeof pad.vibrationActuator?.playEffect==='function'?'ready':'unsupported';
}
/** Bounded output shared by the explicit hardware test and landing feedback. */
export class HapticTest {
  private cancel:(()=>void)|null=null;
  constructor(private readonly timeoutMs=1500){}
  stop():void{this.cancel?.();}
  async run(pad:HapticPad|null|undefined,effect:HapticEffect=TEST_EFFECT):Promise<HapticResult>{
    if(this.cancel)return {status:'busy',message:'正在测试，请稍候。'};
    const capability=hapticCapability(pad);
    if(capability==='no-device')return {status:'no-device',message:'尚未读到手柄，请点击页面并按 A 唤醒。'};
    if(capability==='unsupported')return {status:'unsupported',message:'已读到手柄，但当前连接没有提供震动接口。'};
    const actuator=pad!.vibrationActuator!;
    return new Promise(resolve=>{
      let finished=false;
      const reset=()=>{try{void actuator.reset?.()?.catch(()=>{});}catch{}};
      const finish=(status:HapticStatus,message:string)=>{
        if(finished)return;finished=true;clearTimeout(timer);this.cancel=null;
        if(status!=='completed')reset();resolve({status,message});
      };
      const timer=setTimeout(()=>finish('timeout','驱动没有返回结果，请检查手柄连接后重试。'),this.timeoutMs);
      this.cancel=()=>finish('interrupted','测试已停止，可以重新测试。');
      try{
        Promise.resolve(actuator.playEffect('dual-rumble',effect))
          .then(result=>result==='complete'?finish('completed','指令已完成。你是否感觉到手柄震动？'):finish('interrupted','指令被中断，保持页面在前台后重试。'))
          .catch(()=>finish('error','浏览器或驱动未接受震动指令，请尝试 USB 连接后重试。'));
      }catch{finish('error','震动指令发送失败，请检查浏览器和连接方式。');}
    });
  }
}

/** Observe body transitions even when disabled, so missed landings never replay. */
export class DriveFallHaptics {
  enabled=true;
  private readonly output=new HapticTest();
  private lastBody='';private lastMode='';private device='';
  setEnabled(enabled:boolean):void{this.enabled=enabled;if(!enabled)this.interrupt();}
  interrupt():void{this.output.stop();}
  update(state:{body:string;running:boolean;paused:boolean;mode?:string},pad:HapticPad|null|undefined,controlling:boolean):void{
    const previousBody=this.lastBody;
    let landed=previousBody==='falling'&&state.body==='fallen',modeChanged=Boolean(this.lastMode&&state.mode&&this.lastMode!==state.mode);
    this.lastBody=state.body;this.lastMode=state.mode??'';
    const device=pad?.connected?`${pad.index??0}:${pad.id??''}`:'';
    if(device!==this.device){this.interrupt();this.device=device;landed=modeChanged=false;}
    if(!this.enabled||!controlling||!state.running||state.paused||!pad?.connected||state.body==='recovering'){
      this.interrupt();return;
    }
    if(state.body==='upright'&&previousBody!=='upright')this.interrupt();
    if(hapticCapability(pad)!=='ready')return;
    if(landed){this.output.stop();void this.output.run(pad,FALL_EFFECT);}
    else if(modeChanged&&state.body!=='fallen')void this.output.run(pad,MODE_EFFECT);
  }
}
