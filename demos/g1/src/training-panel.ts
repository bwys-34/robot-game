import * as THREE from 'three';
import { MOTION_CHALLENGES, challengeAngles } from './motion-challenges';
import { PoseTrainer } from './pose-trainer';
import { PoseChain } from './pose-chain';
import { TargetPoseView } from './target-pose-view';
import { resolveTrainingControl } from './training-drag';
import type { PartControl } from './interaction-config';

// Old automatic/live-answer scores belong to different rules and are not migrated.
const STORAGE_KEY='g1-motion-training-best-v2';
interface TrainingPanelOptions {
  pose:PoseChain;scene:THREE.Scene;labels:Record<string,string>;controls:readonly PartControl[];
  onEnter:()=>void;onExit:()=>void;onPoseReset:()=>void;
  onChoose:(name:string)=>void;onMove:(name:string,degrees:number)=>void;onChanged:()=>void;
  conditions:()=>{blocked:boolean;dragging:boolean};
}
export class TrainingPanel {
  private readonly $=(id:string)=>document.getElementById(id)!;
  readonly state:PoseTrainer;
  private target:TargetPoseView;
  private isActive=false;
  private selectedJoint='';
  private targetVisible=false;
  private lastBlocked=false;
  private lastRender='';
  private buttons=new Map<string,HTMLButtonElement>();
  private events:Array<()=>void>=[];
  get active():boolean{return this.isActive;}
  constructor(private readonly options:TrainingPanelOptions){
    let records:Record<string,number>={};
    try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)??'{}');if(data&&typeof data==='object'&&!Array.isArray(data))records=data;}catch{/* Session scoring still works when storage is unavailable. */}
    this.state=new PoseTrainer(MOTION_CHALLENGES,records);this.target=new TargetPoseView(options.scene,options.pose);
    const listen=(id:string,event:string,callback:EventListener)=>{const node=this.$(id);node.addEventListener(event,callback);this.events.push(()=>node.removeEventListener(event,callback));};
    for(const [index,task] of MOTION_CHALLENGES.entries()){
      const option=document.createElement('option');option.value=task.id;option.textContent=`${String(index+1).padStart(2,'0')} / ${task.title}`;this.$('training-task').append(option);
    }
    listen('enter-training','click',()=>this.enter());listen('leave-training','click',()=>this.leave());
    listen('training-task','change',()=>this.select((this.$('training-task') as HTMLSelectElement).value));
    listen('training-start','click',()=>{
      if(this.state.status==='review'){this.state.resume();this.options.onChanged();this.render();}else this.start();
    });
    listen('training-preview','click',()=>this.preview());listen('training-reset','click',()=>this.start());
    listen('training-submit','click',()=>this.submit());
    listen('training-next','click',()=>this.select(MOTION_CHALLENGES[(this.state.taskIndex+1)%MOTION_CHALLENGES.length].id));
    listen('training-hint','click',()=>{
      if(this.state.hintLevel<2){this.state.revealHint();if(this.state.hintLevel===2)this.showTarget(true);}
      else this.showTarget(!this.targetVisible);
      this.lastRender='';this.render();
    });
    this.renderRecords();
  }
  enter():void{
    if(this.isActive)return;this.isActive=true;this.state.select(this.state.task.id);this.options.onEnter();this.buildTask();this.options.onChanged();
  }
  leave():void{
    if(!this.isActive)return;this.isActive=false;this.state.select(this.state.task.id);this.showTarget(false);this.options.onExit();this.options.onChanged();
  }
  private select(id:string):void{this.state.select(id);this.options.onPoseReset();this.buildTask();this.options.onChanged();}
  private showTarget(show:boolean):void{
    this.targetVisible=show;if(show)this.target.show(this.state.task);else this.target.hide();this.$('training-legend').hidden=!show;
  }
  private buildTask():void{
    const task=this.state.task;this.showTarget(false);this.lastBlocked=false;
    (this.$('training-task') as HTMLSelectElement).value=task.id;
    this.$('training-description').textContent=task.description;
    this.$('training-number').textContent=`MOTION ${String(this.state.taskIndex+1).padStart(2,'0')} / ${String(MOTION_CHALLENGES.length).padStart(2,'0')}`;
    this.$('training-joints').replaceChildren();this.buttons.clear();
    for(const goal of task.joints){
      const button=document.createElement('button');button.type='button';button.className='training-axis';button.dataset.joint=goal.name;
      const label=document.createElement('b'),direction=document.createElement('span');label.textContent=goal.label;
      const control=this.options.controls.find(item=>item.jointName===goal.name);
      direction.textContent=control?.dragAxis==='x'?'↔ 左右拖动':'↕ 上下拖动';button.append(label,direction);
      button.addEventListener('click',()=>{if(this.state.status!=='playing')return;this.setSelected(goal.name);this.options.onChoose(goal.name);});
      button.addEventListener('keydown',event=>{
        if(this.state.status!=='playing'||!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;
        event.preventDefault();this.setSelected(goal.name);
        this.options.onMove(goal.name,this.options.pose.getRequestedAngle(goal.name)+(['ArrowUp','ArrowRight'].includes(event.key)?2:-2));
      });
      this.$('training-joints').append(button);this.buttons.set(goal.name,button);
    }
    this.setSelected(task.focusJoint);this.options.onChoose(this.selectedJoint);this.lastRender='';this.render();
  }
  setSelected(name:string):void{
    if(!this.buttons.has(name))return;this.selectedJoint=name;
    for(const [joint,button] of this.buttons)button.setAttribute('aria-pressed',String(joint===name));
    const control=this.options.controls.find(item=>item.jointName===name);
    this.$('training-drag-label').textContent=`已选择 ${this.options.labels[name]??name} · 按住对应肢体${control?.dragAxis==='x'?'左右':'上下'}拖动`;
  }
  resolveControl(link:string,control:PartControl|undefined):PartControl|undefined{
    return resolveTrainingControl(this.state.task,this.selectedJoint,link,control,this.options.controls);
  }
  markInput():void{this.state.markInput();}
  start():void{
    this.options.onPoseReset();this.state.start();this.lastBlocked=false;this.showTarget(false);this.setSelected(this.selectedJoint);this.options.onChoose(this.selectedJoint);this.options.onChanged();this.lastRender='';this.render();
  }
  private preview():void{
    this.state.preview();this.showTarget(false);this.options.pose.demonstratePose(challengeAngles(this.state.task));this.options.onChanged();this.render();
  }
  private settled():boolean{
    const pose=this.options.pose;
    return !pose.animating&&[...pose.joints.keys()].every(name=>Math.abs(pose.getAngle(name)-pose.getRequestedAngle(name))<.1);
  }
  private submit():void{
    const conditions=this.options.conditions();if(conditions.dragging)return;
    const pose=this.options.pose,angles=Object.fromEntries([...pose.joints.keys()].map(name=>[name,pose.getAngle(name)]));
    if(!this.state.submit(angles,{manual:pose.motionSource==='manual',settled:this.settled(),blocked:conditions.blocked}))return;
    this.lastBlocked=conditions.blocked;
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(this.state.records));}catch{/* Best scores remain available in this session. */}
    this.renderRecords();this.options.onChanged();this.lastRender='';this.render();
    if(this.state.status==='complete'){
      const card=this.$('pose-game');card.classList.remove('is-complete');void card.offsetWidth;card.classList.add('is-complete');
    }
  }
  suspend():void{this.lastRender='';}
  update(_delta:number,_blocked:boolean):void{
    if(!this.isActive)return;
    if(this.state.status==='preview'&&!this.options.pose.animating){this.state.finishPreview();this.options.onChanged();}
    this.render();
  }
  private renderRecords():void{
    this.$('training-total').textContent=`已掌握 ${this.state.completedCount} / ${MOTION_CHALLENGES.length}`;
    this.$('training-records').textContent=`本机累计 ${this.state.totalScore} / ${MOTION_CHALLENGES.length*100} 分 · 每关只计最高分`;
    this.$('training-entry-progress').textContent=`${MOTION_CHALLENGES.length} 个动作 · 已掌握 ${this.state.completedCount}`;
  }
  private render():void{
    const status=this.state.status,review=status==='review'||status==='complete',score=this.state.resultScore;
    const ready=this.state.canSubmit&&this.settled();
    const message=status==='ready'?'先记住动作，再用自己的双手复刻。也可以直接开始挑战。':status==='preview'?'观察各个部位怎样配合。示范结束后，由你亲手完成。':status==='complete'?'动作达成！重练刷新纪录，或换一个动作继续探索。':status==='review'?'成绩已揭晓。继续调整当前姿态，再提交一次试试。':!this.state.canSubmit?'选择一个自由度，按住模型对应肢体拖动。':!ready?'动作正在跟随你的操作，稍等它停稳后再提交。':'摆好了吗？点击提交，揭晓这次的动作精准度。';
    const key=JSON.stringify([status,score,ready,message,this.state.hintLevel,this.targetVisible,this.lastBlocked,this.state.bestScore]);
    if(key===this.lastRender)return;this.lastRender=key;
    const card=this.$('pose-game');card.dataset.status=status;card.style.setProperty('--score',String(review?score:0));
    this.$('training-score').textContent=review?String(score):'—';this.$('training-score-label').textContent=review?'本次动作精准度':'提交后揭晓';
    this.$('training-best').textContent=this.state.bestScore?`本关最佳 ${this.state.bestScore} 分`:'本关最佳 · 等你创造';
    this.$('training-status').textContent=message;
    const start=this.$('training-start') as HTMLButtonElement;
    start.textContent=status==='review'?'继续调整 ↗':status==='complete'?'重新挑战 ↗':status==='playing'?'从头再来':'开始摆姿 ↗';start.disabled=status==='preview';
    (this.$('training-preview') as HTMLButtonElement).disabled=status==='preview';
    const submit=this.$('training-submit') as HTMLButtonElement;submit.hidden=status!=='playing';submit.disabled=!ready;
    this.$('training-next').hidden=!review;this.$('training-reset').hidden=status!=='playing';
    for(const button of this.buttons.values())button.disabled=status!=='playing';
    for(const step of this.$('training-route').querySelectorAll<HTMLElement>('[data-phase]'))step.dataset.active=String(step.dataset.phase===(review?'submit':status==='playing'?'pose':'observe'));
    const hint=this.$('training-hint') as HTMLButtonElement;hint.disabled=status==='preview';
    hint.textContent=this.state.hintLevel===0?'需要一点提示？':this.state.hintLevel===1?'再看一眼目标轮廓':this.targetVisible?'收起目标轮廓':'显示目标轮廓';
    hint.setAttribute('aria-expanded',String(this.state.hintLevel>0));
    const copy=this.$('training-hint-copy');copy.hidden=this.state.hintLevel===0;copy.textContent=this.state.task.hints[Math.max(0,this.state.hintLevel-1)];
    const grade=score>=98?'精准复刻':score>=90?'动作熟练':score>=80?'动作达成':score>=60?'接近目标':'再试一次';
    const adjustment=this.state.accuracy.adjustment;
    const feedback=this.lastBlocked?'部位出现重叠，本次已扣分；调整后再提交。':score>=98?'各个部位配合得很到位！':adjustment?`可以再观察「${this.options.labels[adjustment.name]??'其他部位'}」的方向与弯曲程度。`:'试着记住动作的轮廓，再调整各个部位。';
    this.$('training-review').hidden=!review;this.$('training-review').textContent=review?`${grade} · ${feedback} ${this.state.hintLevel?'借助提示完成':'独立尝试完成'}。`:'';
    this.$('training-result').hidden=status!=='complete';this.$('training-result-score').textContent=`${score} 分`;
    this.$('training-result-title').textContent=grade;this.$('training-result-detail').textContent=`${this.state.task.title} · 已掌握 ${this.state.completedCount} / ${MOTION_CHALLENGES.length}`;
  }
  dispose():void{for(const remove of this.events)remove();this.target.dispose();}
}
