import {HOIST_CONFIG} from './drive-hoist';
import {DriveFeedback} from './drive-feedback';
import type {DriveState} from './drive-state';
import type {DriveCommand} from './drive-config';
import type {DriveStatus} from './drive-panel';

export class DriveHoistPanel {
  private readonly feedback=new DriveFeedback();
  private readonly nodes=new Map<string,HTMLElement>();
  private primaryCommand:Partial<DriveCommand>={hoistAction:true};
  private node<T extends HTMLElement=HTMLElement>(id:string):T{let n=this.nodes.get(id);if(!n){n=document.getElementById(id)!;this.nodes.set(id,n);}return n as T;}
  constructor(send:(c:Partial<DriveCommand>)=>void){
    this.node('hoist-primary').addEventListener('click',()=>send(this.primaryCommand));
    this.node('hoist-debug').addEventListener('click',()=>send({mode:'debug'}));
    this.node('hoist-walk').addEventListener('click',()=>send({mode:'locomotion'}));
    for(const mode of ['damp','zero','stand'] as const)this.node(`hoist-${mode}`).addEventListener('click',()=>send({mode}));
  }
  render(state:DriveState,status:DriveStatus):void{
    const f=this.feedback,n=this.node.bind(this),h=state.hoist,active=state.hoistContext,debug=state.mode==='debug';
    f.property(n('hoist-panel'),'hidden',!active||debug);f.attribute(document.body,'data-hoist',active?h.phase:'');
    if(!active)return;
    const manual=status.source==='manual',android=status.layout==='exhibition-android',enabled=state.running&&!state.paused;
    const stage=h.completed?4:h.phase==='releasing'?3:h.supported?h.observed.size===2?3:2:h.locked||h.ready?1:0;
    const titles=['驶入吊挂位','停稳，连接吊带','比较两种放松模式','站稳、落脚、解挂','完成！带着新发现出发'];
    f.property(n('hoist-title'),'textContent',titles[stage]);
    f.property(n('hoist-step'),'textContent',h.completed?'完成':`${Math.min(4,stage+1)} / 4`);
    f.property(n('hoist-support'),'textContent',h.supported?'支撑有效':h.phase==='attaching'?'连接中 · 暂无保护':'未挂接 · 无保护');
    f.attribute(n('hoist-support'),'data-supported',String(h.supported));
    let copy=h.completed?'你已比较阻尼与零力矩，并在恢复站立后解挂。切回行走，继续探索。':h.phase==='attaching'?'双吊带正在连接并收紧，完成后机器人会轻轻离地。':h.phase==='releasing'?'先让双脚落地，再解开吊带。请等指示变为“未挂接”后离开。':h.supported?state.mode==='stand'?'关节主动恢复站姿。你可以比较两种模式，或落脚解挂。':state.mode==='damp'?'吊带承重，关节有阻力、缓慢放松；它不会主动保持站姿。':'吊带承重，关节更快放松；电机不出力，脚掌不再主动保持水平。':h.ready?'位置正确，已经停稳。按 A 或点下方按钮确认挂接。':h.distance<=HOIST_CONFIG.radius?'已经进入 H 圈：松开移动和转向，停稳约 1 秒。':`驾驶到门架下的金色 H 圈 · 距离 ${Number.isFinite(h.distance)?h.distance.toFixed(1):state.targetDistance.toFixed(1)} m。`;
    if(state.body==='falling'||state.body==='fallen'||state.body==='recovering')copy=state.body==='fallen'?'未建立吊带支撑就切了被动模式。先起身复位，再回 H 圈挂接。':state.body==='falling'?'没有支撑，模型正在倒地。落地后可起身重试。':'正在恢复站立，请稍候。';
    f.property(n('hoist-description'),'textContent',copy);
    f.property(n('hoist-knowledge'),'textContent','挂接 → 切阻尼 / 零力矩 → 进入调试，配置舞蹈键位。网页吊带为教学示意。');
    const key=manual?'H':'A';
    this.primaryCommand=state.body==='fallen'?{recover:true}:{hoistAction:true};
    const label=state.body==='fallen'?`${key} 起身重试`:h.phase==='attaching'?'正在收紧吊带…':h.phase==='releasing'?'正在落脚解挂…':h.supported?state.mode==='stand'?`${key} 落脚解挂`:`${key} 恢复站立`:`${key} 确认挂接`;
    f.property(n('hoist-primary'),'textContent',label);
    f.property(n<HTMLButtonElement>('hoist-primary'),'disabled',!enabled||state.body!=='upright'&&state.body!=='fallen'||h.phase==='attaching'||h.phase==='releasing'||(!h.locked&&state.body!=='fallen'&&!h.ready)||h.supported&&state.mode==='stand'&&h.standing<HOIST_CONFIG.standingSeconds);
    f.property(n<HTMLButtonElement>('hoist-walk'),'disabled',!enabled||h.locked||state.body!=='upright');
    f.property(n('hoist-keys'),'textContent',manual?'WASD / 屏幕方向键移动 · Q / E 转身 · H 挂接 / 恢复 / 解挂':`${android?'展厅 LB':'电脑 LT（按满 2 秒）'} + B 阻尼 · + Y 零力矩 · A 挂接 / 恢复 / 解挂`);
    for(const mode of ['damp','zero','stand'] as const){
      f.property(n<HTMLButtonElement>(`hoist-${mode}`),'disabled',!enabled||h.phase!=='supported');
      f.property(n(`hoist-${mode}-key`),'textContent',manual?'点击切换':mode==='stand'?'A 恢复':`${android?'LB':'LT'} + ${mode==='damp'?'B':'Y'}`);
      f.attribute(n(`hoist-${mode}`),'data-observed',String(mode!=='stand'&&h.observed.has(mode)));
      f.attribute(n(`hoist-${mode}`),'aria-pressed',String(state.mode===mode));
    }
    f.property(n<HTMLButtonElement>('hoist-debug'),'disabled',!enabled||!h.supported||!['damp','zero'].includes(state.mode));
    f.property(n('hoist-debug'),'textContent',manual?'进入调试 / 配舞蹈 ↗':`${android?'LB + RB':'LT + RT'} 调试 / 配舞蹈`);
    const progress=h.phase==='attaching'||h.phase==='releasing'?h.progress:h.ready||h.supported?1:h.hold/HOIST_CONFIG.settleSeconds;
    f.attribute(n('hoist-progress'),'style',`transform:scaleX(${progress})`);
    f.attribute(n('hoist-progress').parentElement!,'aria-valuenow',String(Math.round(progress*100)));
    for(let i=0;i<4;i++)f.attribute(n(`hoist-route-${i}`),'data-state',i<stage?'done':i===stage?'current':'');
    // All buttons are visible without expanding a secondary touch panel.
    for(const button of n('hoist-directions').querySelectorAll<HTMLButtonElement>('button'))f.property(button,'disabled',!enabled||h.locked||state.mode!=='locomotion'||state.body!=='upright');
  }
}
