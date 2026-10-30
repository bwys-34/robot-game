import * as THREE from 'three';
import { MOTION_CHALLENGES, challengeAngles } from './motion-challenges';
import { PoseTrainer } from './pose-trainer';
import { PoseChain } from './pose-chain';
import { TargetPoseView } from './target-pose-view';
import { resolveTrainingControl } from './training-drag';
import type { PartControl } from './interaction-config';
import { adjustmentAdvice, jointActions } from './training-feedback';
import { jointDragHandle, jointDragDirection } from './joint-drag';

// Old automatic/live-answer scores belong to different rules and are not migrated.
const STORAGE_KEY='g1-motion-training-best-v2';
interface TrainingPanelOptions {
  pose:PoseChain;scene:THREE.Scene;camera:THREE.Camera;viewer:HTMLElement;labels:Record<string,string>;controls:readonly PartControl[];
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
  private guidePosition=new THREE.Vector3();
  private guideDirection=new THREE.Vector2(0,-1);
  get active():boolean{return this.isActive;}
  constructor(private readonly options:TrainingPanelOptions){
    let records:Record<string,number>={};
    try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)??'{}');if(data&&typeof data==='object'&&!Array.isArray(data))records=data;}catch{/* Session scoring still works when storage is unavailable. */}
    this.state=new PoseTrainer(MOTION_CHALLENGES,records);this.target=new TargetPoseView(options.scene,options.pose);
    const listen=(id:string,event:string,callback:EventListener)=>{const node=this.$(id);node.addEventListener(event,callback);this.events.push(()=>node.removeEventListener(event,callback));};
    for(const [index,task] of MOTION_CHALLENGES.entries()){
      const level=task.joints.length===1?'入门':task.joints.length<=3?'进阶':'协同';
      const option=document.createElement('option');option.value=task.id;option.textContent=`${String(index+1).padStart(2,'0')} / ${task.title} · ${level}`;this.$('training-task').append(option);
      if(index<3){
        const card=document.createElement('button');card.type='button';card.className='training-task-card';card.dataset.task=task.id;
        const badge=document.createElement('span'),title=document.createElement('b'),detail=document.createElement('small');
        badge.textContent=`0${index+1} / ${level}`;title.textContent=task.title;detail.textContent=`${task.joints.length} 个调节部位`;
        card.append(badge,title,detail);card.addEventListener('click',()=>this.select(task.id));this.$('training-task-cards').append(card);
      }
    }
    listen('enter-training','click',()=>this.enter());listen('leave-training','click',()=>this.leave());
    listen('training-task','change',()=>this.select((this.$('training-task') as HTMLSelectElement).value));
    listen('training-start','click',()=>{
      if(this.state.status==='review'){this.state.resume();this.options.onChanged();this.render();}else this.start();
    });
    listen('training-preview','click',()=>this.preview());listen('training-reset','click',()=>this.start());
    listen('training-submit','click',()=>this.submit());
    listen('training-adjust','click',()=>{
      const error=this.state.accuracy.adjustment;if(!error)return;
      this.state.resume();this.setSelected(error.name);this.options.onChoose(error.name);this.options.onChanged();this.lastRender='';this.render();
    });
    for(const [id,sign] of [['training-less',-1],['training-more',1]] as const)listen(id,'click',()=>{
      if(this.state.status!=='playing')return;
      this.options.onMove(this.selectedJoint,this.options.pose.getRequestedAngle(this.selectedJoint)+sign*3);
    });
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
    this.$('pose-game').dataset.intro=String(task.id==='first-lift');
    for(const card of this.$('training-task-cards').querySelectorAll<HTMLButtonElement>('button'))card.setAttribute('aria-pressed',String(card.dataset.task===task.id));
    this.$('training-joints').replaceChildren();this.buttons.clear();
    for(const goal of task.joints){
      const button=document.createElement('button');button.type='button';button.className='training-axis';button.dataset.joint=goal.name;
      const label=document.createElement('b'),direction=document.createElement('span');label.textContent=goal.label;
      const control=this.options.controls.find(item=>item.jointName===goal.name);
      direction.textContent=jointActions(goal.name).increase.replace('一点','');button.append(label,direction);
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
    const adjustable=this.options.controls.some(control=>control.jointName===name)&&
      (this.state.task.joints.some(goal=>goal.name===name)||this.state.accuracy.adjustment?.name===name);
    if(!adjustable)return;this.selectedJoint=name;
    for(const [joint,button] of this.buttons)button.setAttribute('aria-pressed',String(joint===name));
    const control=this.options.controls.find(item=>item.jointName===name);
    const actions=jointActions(name);
    this.$('training-drag-label').textContent=`当前：${this.options.labels[name]??name}。拖动亮起的部位，或用下方按钮微调。`;
    this.$('training-less').textContent=actions.decrease;this.$('training-more').textContent=actions.increase;
    this.guideDirection.copy(jointDragDirection(this.options.pose,this.options.camera,name,control?.dragAxis??'y'));
    this.$('training-drag-arrow').style.transform=`rotate(${Math.atan2(this.guideDirection.y,this.guideDirection.x)}rad)`;
  }
  resolveControl(link:string,control:PartControl|undefined):PartControl|undefined{
    const task=this.state.task,error=this.state.accuracy.adjustment;
    const effective=error?.name===this.selectedJoint&&!task.joints.some(goal=>goal.name===error.name)
      ?{...task,joints:[...task.joints,{name:error.name,label:'恢复自然姿态',degrees:0,tolerance:error.tolerance}]}:task;
    return resolveTrainingControl(effective,this.selectedJoint,link,control,this.options.controls);
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
    if(this.state.status==='review'&&this.state.accuracy.adjustment){this.setSelected(this.state.accuracy.adjustment.name);this.options.onChoose(this.state.accuracy.adjustment.name);}
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
    const guide=this.$('training-drag-cue'),handle=jointDragHandle(this.options.pose,this.selectedJoint);
    if(this.state.status==='playing'&&handle){
      this.options.camera.updateMatrixWorld();handle.getWorldPosition(this.guidePosition).project(this.options.camera);
      const point=this.guidePosition;
      guide.hidden=point.z< -1||point.z>1||Math.abs(point.x)>.82||Math.abs(point.y)>.72;
      if(!guide.hidden){guide.style.left=`${(point.x*.5+.5)*this.options.viewer.clientWidth}px`;guide.style.top=`${(-point.y*.5+.5)*this.options.viewer.clientHeight}px`;}
    }else guide.hidden=true;
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
    const intro=this.state.task.id==='first-lift';
    const message=status==='ready'?(intro?'从这里开始：只需抬起亮起的小臂。想先看看？点击观看示范。':'先看示范，或直接开始。摆好后由你提交。'):status==='preview'?'留意手、脚怎样移动。示范结束后，换你来。':status==='complete'?(intro?'第一颗星到手！你已经用一个关节让小臂动起来了。':'动作达成！换个动作继续探索。'):status==='review'?'已经找到调整方向了。点击“调整这个部位”，保留姿态继续试。':!this.state.canSubmit?(intro?'按住亮起的小臂拖一下，让手抬到身前。':'点选要调整的部位，按住亮起的肢体拖动。'):!ready?'动作正在跟随你，停稳后就可以提交。':'觉得摆好了吗？点击提交，看看这次做得怎样。';
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
    const adjust=this.$('training-adjust') as HTMLButtonElement;
    adjust.hidden=status!=='review'||!this.state.accuracy.adjustment;
    if(adjust.hidden)adjust.textContent='调整这个部位 →';
    else if(this.state.accuracy.adjustment)adjust.textContent=`调整${this.options.labels[this.state.accuracy.adjustment.name]??'这个部位'} →`;
    for(const id of ['training-less','training-more'])(this.$(id) as HTMLButtonElement).disabled=status!=='playing';
    for(const button of this.buttons.values())button.disabled=status!=='playing';
    for(const step of this.$('training-route').querySelectorAll<HTMLElement>('[data-phase]'))step.dataset.active=String(step.dataset.phase===(review?'submit':status==='playing'?'pose':'observe'));
    const hint=this.$('training-hint') as HTMLButtonElement;hint.disabled=status==='preview';
    hint.textContent=this.state.hintLevel===0?'需要一点提示？':this.state.hintLevel===1?'再看一眼目标轮廓':this.targetVisible?'收起目标轮廓':'显示目标轮廓';
    hint.setAttribute('aria-expanded',String(this.state.hintLevel>0));
    const copy=this.$('training-hint-copy');copy.hidden=this.state.hintLevel===0;copy.textContent=this.state.task.hints[Math.max(0,this.state.hintLevel-1)];
    const grade=score>=98?'精准复刻':score>=90?'动作熟练':score>=80?'动作达成':score>=60?'接近目标':'再试一次';
    const adjustment=this.state.accuracy.adjustment;
    const advice=adjustment?adjustmentAdvice(adjustment):'试着记住动作的轮廓，再调整各个部位。';
    const feedback=this.lastBlocked?`部位出现重叠，本次已扣分；先收回相碰的部位。${advice}`:score>=98?'各个部位配合得很到位！':advice;
    this.$('training-review').hidden=!review;this.$('training-review').textContent=review?`${grade} · ${feedback} ${this.state.hintLevel?'借助提示完成':'独立尝试完成'}。`:'';
    this.$('training-result').hidden=status!=='complete';this.$('training-result-score').textContent=`${score} 分`;
    this.$('training-result-title').textContent=grade;this.$('training-result-detail').textContent=`${this.state.task.title} · 已掌握 ${this.state.completedCount} / ${MOTION_CHALLENGES.length}`;
    this.$('training-stars').textContent=review?(score>=98?'★★★':score>=90?'★★☆':score>=80?'★☆☆':'☆☆☆'):'☆☆☆';
    this.$('training-stars').setAttribute('aria-label',review?`获得 ${score>=98?3:score>=90?2:score>=80?1:0} 颗星`:'提交后获得星星');
  }
  dispose():void{for(const remove of this.events)remove();this.target.dispose();}
}
