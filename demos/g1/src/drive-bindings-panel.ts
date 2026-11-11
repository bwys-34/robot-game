import {DRIVE_ACTIONS,PERFORMANCE_SHORTCUTS,actionInfo,type DriveActionId} from './drive-actions';
import type {DriveBindings} from './drive-bindings';
import type {DriveState} from './drive-state';

/** A separate page inside the existing debug console; no modal over the model. */
export class DriveBindingsPanel {
  private state?:DriveState;
  private revision=-1;
  private dirty=false;
  private readonly selects:HTMLSelectElement[]=[];
  private readonly previews:HTMLButtonElement[]=[];
  private readonly status=document.getElementById('bindings-status')!;
  constructor(private readonly bindings:DriveBindings){
    const grid=document.getElementById('bindings-grid')!;
    for(const slot of PERFORMANCE_SHORTCUTS){
      const row=document.createElement('div');row.className='binding-slot';
      const label=document.createElement('label');label.htmlFor=`binding-${slot.key}`;label.textContent=`RB + ${slot.key}`;
      const select=document.createElement('select');select.id=label.htmlFor;select.setAttribute('aria-label',`${label.textContent} 对应的舞蹈或动作`);
      for(const action of DRIVE_ACTIONS)select.append(new Option(action.title,action.id));
      select.addEventListener('change',()=>{this.dirty=true;this.state?.stopPreview();this.status.textContent='有未保存的更改 · 预览后点「保存键位」生效。';});
      const preview=document.createElement('button');preview.textContent='预览';preview.setAttribute('aria-label',`预览 ${label.textContent} 的动作`);
      preview.addEventListener('click',()=>{if(this.editable()){this.state!.previewDance(select.value as DriveActionId);this.status.textContent=`${actionInfo(select.value as DriveActionId).title} · 吊挂上肢预览；完整动作在解挂后播放。`;}});
      row.append(label,select,preview);grid.append(row);this.selects.push(select);this.previews.push(preview);
    }
    for(const tab of document.querySelectorAll<HTMLButtonElement>('[data-debug-tab]'))tab.addEventListener('click',()=>{
      if(!this.editable())return;
      this.state!.stopPreview();this.state!.debugTab=tab.dataset.debugTab as 'joints'|'bindings';
    });
    document.getElementById('bindings-save')!.addEventListener('click',()=>{
      if(!this.editable())return;
      const saved=this.bindings.save(this.selects.map(s=>s.value));this.dirty=false;
      const program=this.state!.saveShowProgram(this.bindings.snapshot());
      this.status.textContent=program?'三段节目已确认 · 恢复站立、解挂后沿路标登台。':saved?'已保存到本机 · 恢复站立、解挂后，用 RB 组合键试试新动作。':'本次使用已生效，但浏览器未允许保存；刷新后可能恢复默认。';
    });
    document.getElementById('bindings-default')!.addEventListener('click',()=>{
      if(!this.editable())return;
      this.state!.stopPreview();const saved=this.bindings.restore();this.dirty=false;
      const program=this.state!.show.step==='release'&&this.state!.saveShowProgram(this.bindings.snapshot());
      this.status.textContent=program?'已恢复默认键位，并同步三段舞台节目 · 恢复站立、解挂后出发。':saved?'已恢复并保存四个默认舞蹈键位。':'本次已恢复默认；浏览器未允许保存。';
    });
    document.getElementById('bindings-exit')!.addEventListener('click',()=>{if(this.editable())this.state!.setMode('stand');});
  }
  private editable():boolean {const s=this.state;return Boolean(s?.mode==='debug'&&s.running&&!s.paused&&s.body==='upright'&&!s.needsNeutral);}
  render(state:DriveState):void {
    this.state=state;const debug=state.mode==='debug',binding=state.debugTab==='bindings';
    document.getElementById('lab-joint-content')!.hidden=binding;
    document.getElementById('bindings-content')!.hidden=!binding;
    document.getElementById('lab-progress')!.hidden=binding;
    for(const tab of document.querySelectorAll<HTMLButtonElement>('[data-debug-tab]')){tab.setAttribute('aria-pressed',String(tab.dataset.debugTab===state.debugTab));tab.disabled=!this.editable();}
    if(this.revision!==this.bindings.revision){this.selects.forEach((s,i)=>{s.value=this.bindings.actionAt(i);});this.revision=this.bindings.revision;this.dirty=false;}
    const blocked=!this.editable();
    for(const select of this.selects)select.disabled=blocked;
    for(const button of this.previews){button.disabled=blocked||!state.hoist.supported;button.textContent=state.debugPreview&&this.selects[this.previews.indexOf(button)].value===state.debugPreview?'重播':'预览';}
    (document.getElementById('bindings-save') as HTMLButtonElement).disabled=blocked||(!this.dirty&&!(state.experience==='show'&&state.show.step==='program'&&state.hoist.supported));
    for(const id of ['bindings-default','bindings-exit'])(document.getElementById(id) as HTMLButtonElement).disabled=blocked;
    if(debug&&binding&&!state.hoist.supported)this.status.textContent='请在自由体验中驶入吊架、确认挂接后配置与预览。';
  }
}
