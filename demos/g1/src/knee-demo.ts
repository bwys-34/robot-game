import * as THREE from 'three';
import { buildRobotMapping, type LinkRecord, type RobotMapping } from './robot-mapping';
import { G1_INTERACTION_CONFIG, type G1InteractionConfig, type PartControl } from './interaction-config';
import { PoseChain } from './pose-chain';
import { HighlightController } from './highlight-controller';
import { FreedomInteraction, type PickResult } from './freedom-interaction';
import { SafetyAnalyzer, type SafetySnapshot } from './safety-analysis';
import { BalanceVisualizer } from './balance-visualizer';
import { WarningFeedback } from './warning-feedback';
import { chooseWarningLink, warningAnchorPoint, projectWarningAnchor } from './warning-anchor';
import { guideRadiusAboveGround } from './guide-layout';
import { GameManager } from './game-manager';
import { TrainingPanel } from './training-panel';
import { jointDragDirection } from './joint-drag';
import { MOTION_CHALLENGES } from './motion-challenges';

interface DemoOptions {
  model:THREE.Object3D;
  camera:THREE.Camera;
  scene:THREE.Scene;
  viewer:HTMLElement;
  canvas:HTMLCanvasElement;
  records?:LinkRecord[];
  config?:G1InteractionConfig;
  onSelect:(position:THREE.Vector3,jointName:string)=>void;
  onChain:()=>void;
  onTraining:()=>void;
  onGestureCapture:(active:boolean)=>void;
}

const LINK_LABELS:Record<string,string>={
  pelvis:'骨盆',left_hip_yaw_link:'左大腿',left_knee_link:'左小腿',left_ankle_pitch_link:'左脚踝',left_ankle_roll_link:'左脚',
  right_hip_yaw_link:'右大腿',right_knee_link:'右小腿',right_ankle_pitch_link:'右脚踝',right_ankle_roll_link:'右脚',
  torso_link:'躯干',head_link:'头部',left_shoulder_pitch_link:'左肩',left_elbow_link:'左肘',right_shoulder_pitch_link:'右肩',right_elbow_link:'右肘',
};
const PART_LABELS:Record<string,string>={hip_pitch:'髋俯仰关节',hip_roll:'髋侧摆关节',hip_yaw:'髋旋转关节',knee:'膝关节',ankle_pitch:'踝俯仰关节',ankle_roll:'踝侧摆关节',shoulder_pitch:'肩俯仰关节',shoulder_roll:'肩侧摆关节',shoulder_yaw:'肩旋转关节',elbow:'肘关节',wrist_roll:'腕滚转关节',wrist_pitch:'腕俯仰关节',wrist_yaw:'腕旋转关节'};
function partLabel(linkName:string):string {
  if(LINK_LABELS[linkName])return LINK_LABELS[linkName];
  const match=/^(left|right)_(.+)_link$/.exec(linkName);
  if(!match)return linkName==='pelvis_contour_link'?'骨盆外壳':'机器人部位';
  return `${match[1]==='left'?'左':'右'}${PART_LABELS[match[2]]??'部位'}`;
}

export function createKneeDemo(options:DemoOptions):{update(delta:number,time:number):boolean;dispose():void} {
  const {model,camera,scene,viewer,canvas,onSelect}=options;
  const config=options.config??G1_INTERACTION_CONFIG;
  const chain=config.discoveryChain;
  const game=new GameManager(chain.joints.map(joint=>joint.name),config.fallDelaySeconds);
  const elements=new Map<string,HTMLElement>();
  const $=(id:string)=>{let element=elements.get(id);if(!element){element=document.getElementById(id)!;elements.set(id,element);}return element;};
  const setText=(id:string,value:string)=>{const element=$(id);if(element.textContent!==value)element.textContent=value;};
  const mapping:RobotMapping=buildRobotMapping(model,options.records??[]);
  const warningView=new WarningFeedback(model,[config.jointNames.movingFoot,config.jointNames.supportFoot].map(name=>mapping.links.get(name)!));
  const pose=new PoseChain(model,config);
  const safety=new SafetyAnalyzer(model,mapping,pose,config);
  const highlight=new HighlightController(mapping);
  const balanceView=new BalanceVisualizer(scene,0);
  const slider=$('knee-angle') as HTMLInputElement;
  const play=$('play-knee') as HTMLButtonElement;
  const reset=$('reset-knee') as HTMLButtonElement;
  const selectButton=$('select-knee') as HTMLButtonElement;
  const hotspot=$('knee-hotspot') as HTMLButtonElement;
  const hint=$('hint-knee') as HTMLButtonElement;
  const highlightLink=$('highlight-link') as HTMLButtonElement;
  const highlightChain=$('highlight-chain') as HTMLButtonElement;
  const jointSelect=$('joint-select') as HTMLSelectElement;
  const presetSelect=$('chain-preset') as HTMLSelectElement;
  const replay=$('replay-joint') as HTMLButtonElement;
  for(const preset of chain.presets){const option=document.createElement('option');option.value=preset.id;option.textContent=preset.label;presetSelect.append(option);}
  presetSelect.value=chain.presets[chain.presets.length-1].id;
  for(const [index,task] of chain.joints.entries()){
    const node=document.createElement('span');node.dataset.joint=task.name;
    const number=document.createElement('b');number.textContent=String(index+1).padStart(2,'0');
    const label=document.createElement('span');label.textContent=task.label;
    node.append(number,label);$('discovery-parts').append(node);
  }
  const available=config.partControls.filter(control=>pose.joints.has(control.jointName));
  for(const control of available){const option=document.createElement('option');option.value=control.jointName;option.textContent=control.label;jointSelect.append(option);}
  let activeControl:PartControl=available.find(control=>control.jointName===config.targetJointName)!;
  jointSelect.value=activeControl.jointName;
  let dragStartAngle=0,unbalanced=false,isDragging=false;
  let fallElapsed=0;
  const fallDirection=new THREE.Vector3(),fallAnchor=new THREE.Vector3();
  let hintJoint=chain.joints[0];
  let uiBoundary:'下限'|'上限'|null=null,warningLink:string|undefined,warningVisible=false;
  const warningPosition=new THREE.Vector3();
  const isKnee=()=>activeControl.jointName===config.targetJointName;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  $('joint-controls').removeAttribute('inert');
  const joint=model.getObjectByName(config.targetJointName)!;
  let selected=false,showHint=false,chainMode=false,lastAngle=NaN,lastSafetyTime=-Infinity,feedbackUntil=0,feedback='',safetyDirty=true;
  let discoveryFeedbackUntil=0;
  let training:TrainingPanel|undefined;
  let lastGameUi='';

  function syncGame(force=false):void {
    // Task copy depends on semantic state, never on every fractional servo angle.
    const key=[game.phase,game.mode,game.fallen,game.experience,game.discovered.size,pose.motionSource,selected,
      training?.active,training?.state.taskIndex,training?.state.status].join('|');
    if(!force&&key===lastGameUi)return;
    lastGameUi=key;
    const gameNode=$('discovery-game');gameNode.dataset.phase=game.phase;
    viewer.dataset.mode=game.mode;viewer.dataset.fallen=String(game.fallen);
    document.body.dataset.experience=game.experience;
    viewer.dataset.motion=pose.motionSource;
    const observing=game.experience==='observe',canPlay=observing||game.unlocked,trainingActive=training?.active??false;
    document.body.dataset.training=String(trainingActive);
    $('mode-observe').setAttribute('aria-pressed',String(observing));
    $('mode-challenge').setAttribute('aria-pressed',String(!observing));
    gameNode.hidden=observing||trainingActive;$('observe-guide').hidden=!observing;
    $('pose-game').hidden=!trainingActive;$('training-controls').hidden=!trainingActive;
    if(!trainingActive){$('training-legend').hidden=true;$('training-drag-cue').hidden=true;}
    $('joint-controls').hidden=trainingActive;
    if(!trainingActive)$('training-result').hidden=true;
    $('discovery-progress').textContent=`${game.discovered.size} / ${chain.joints.length}`;
    for(const node of $('discovery-parts').children){const element=node as HTMLElement;element.dataset.found=String(game.discovered.has(element.dataset.joint!));}
    const stages={scan:['01 · 找到独立自由度','在模型上点击左髋、左膝、左踝，看看每个部位能怎样动。'],unlocked:['02 · 看它们一起配合','左腿运动链已解锁！点击“演示整条链”，观察髋、膝、踝如何配合。'],challenge:['03 · 试试失衡的边界','单独拖动左髋向前摆，观察质心。越界持续半秒会失去平衡，复位即可重试。'],complete:['探索完成 · 你发现了协同的意义','同一个自由度，单独动和配合动会有什么不同？复位后可以继续比较。']} as const;
    const [title,instruction]=stages[game.phase];
    $('game-stage').textContent=title;$('game-instruction').textContent=instruction;
    $('chain-progress').textContent=game.unlocked?'左腿运动链 · 已解锁 ✓':'左腿运动链 · 待解锁';
    $('interaction-mode').textContent=game.mode==='chain'?'运动链演示':pose.motionSource==='teaching'?'独立动作演示':'单关节观察';
    for(const node of document.querySelectorAll<HTMLElement>('.game-route [data-step]'))node.dataset.active=String(node.dataset.step===(game.phase==='complete'?'challenge':game.phase));
    const step=game.phase==='scan'?1:game.phase==='unlocked'?2:3;
    $('stage-step').textContent=observing?'自由观察 · 点选任意部位':`发现挑战 · 0${step} / 03`;
    $('stage-instruction').textContent=observing?'一个自由度，会带来怎样的动作？':game.phase==='scan'?'点一点左腿，发现它的独立动作':game.phase==='unlocked'?'自由度找齐了，看它们一起配合':game.phase==='challenge'?'试着摆动左髋，观察失衡边界':'你发现了：动作需要相互配合';
    $('stage-task-detail').textContent=pose.motionSource==='teaching'?'正在演示独立动作 · 随后回到原姿态':game.mode==='chain'?'髋—膝—踝正在配合 · 对侧腿参与支撑':observing?'点选部位看动作，按住部位可拖动':game.phase==='scan'?`已发现 ${game.discovered.size} / ${chain.joints.length} 个案例 · 每点中一处，G1 都会动给你看`:game.phase==='unlocked'?'点击下方“演示整条链”，比较独立与协同':game.phase==='challenge'?'主动拖动越界半秒会倾斜 · 复位即可再试':'复位保留进度，重新探索可从头再来';
    if(trainingActive){
      $('stage-step').textContent=`动作训练 · ${String(training!.state.taskIndex+1).padStart(2,'0')} / ${MOTION_CHALLENGES.length}`;
      $('stage-instruction').textContent=training!.state.task.title;
      $('stage-task-detail').textContent=training!.state.status==='preview'?'先观察各个部位如何配合 · 示范不计分':training!.state.status==='complete'?'动作达成！挑战下一关，或重练刷新纪录':training!.state.status==='review'?'成绩已揭晓 · 继续调整或换个动作':training!.state.status==='playing'?'亲手拖动对应肢体 · 摆好后点击提交':'先看动作，再自己试 · 需要时可点提示';
    }
    play.disabled=!canPlay||game.fallen;
    replay.disabled=!selected||game.fallen||game.mode==='chain';
    presetSelect.disabled=!canPlay||game.fallen||game.mode==='chain';
    play.textContent=game.mode==='chain'?'停止演示':canPlay?'演示整条链':`找到 ${chain.joints.length-game.discovered.size} 处后解锁`;
    play.setAttribute('aria-pressed',String(game.mode==='chain'));
    slider.disabled=game.fallen||!selected;jointSelect.disabled=game.fallen;
    highlightChain.disabled=!selected||game.fallen;
    $('fall-notice').hidden=!game.fallen;
  }

  const formatAngle=(value:number)=>`${Math.round(value)}°`;
  const formatRange=(range:{min:number;max:number})=>range.min>range.max?'无连续参考区间':`${formatAngle(range.min)} 至 ${formatAngle(range.max)}`;
  const bounds=pose.joints.get(config.targetJointName)!;
  slider.min=String(bounds.lower);slider.max=String(bounds.upper);slider.step='any';
  $('lower-limit').textContent=formatAngle(bounds.lower);$('upper-limit').textContent=formatAngle(bounds.upper);
  $('range-mechanical').textContent=formatRange({min:bounds.lower,max:bounds.upper});
  $('range-support').textContent=formatRange(safety.scan.support);
  $('range-collision').textContent=formatRange(safety.scan.combined);
  $('range-combined').textContent=formatRange({min:bounds.lower,max:bounds.upper});

  const arc=new THREE.Group();
  arc.name='knee_angle_guide';arc.position.copy(joint.position);arc.quaternion.copy(pose.joints.get(config.targetJointName)!.base);arc.visible=false;joint.parent!.add(arc);
  const maximumRadius=.13,tipExtension=.025;
  let radius=maximumRadius;
  const neutral=new THREE.Vector3(0,-1,0),offset=new THREE.Vector3(0,0,-.082),axis=pose.joints.get(config.targetJointName)!.axis;
  const point=(degrees:number,length=radius)=>neutral.clone().applyAxisAngle(axis,THREE.MathUtils.degToRad(degrees)).multiplyScalar(length).add(offset);
  const limitsPoints=Array.from({length:81},(_,index)=>point(bounds.lower+(bounds.upper-bounds.lower)*index/80));
  const limits=new THREE.Line(new THREE.BufferGeometry().setFromPoints(limitsPoints),new THREE.LineDashedMaterial({color:0x48725d,dashSize:.009,gapSize:.006,transparent:true,opacity:.6,depthTest:true,depthWrite:false}));limits.computeLineDistances();arc.add(limits);
  const zeroRay=new THREE.Line(new THREE.BufferGeometry().setFromPoints([offset,point(0,radius+tipExtension)]),new THREE.LineBasicMaterial({color:0x176c59,depthTest:true,depthWrite:false}));arc.add(zeroRay);
  const ray=new THREE.Line(new THREE.BufferGeometry().setFromPoints([offset,point(0,radius+tipExtension)]),new THREE.LineBasicMaterial({color:0xb06537,depthTest:true,depthWrite:false}));arc.add(ray);
  const fillPositions=new Float32Array(48*9),fillGeometry=new THREE.BufferGeometry();fillGeometry.setAttribute('position',new THREE.BufferAttribute(fillPositions,3));
  arc.add(new THREE.Mesh(fillGeometry,new THREE.MeshBasicMaterial({color:0x176c59,transparent:true,opacity:.14,side:THREE.DoubleSide,depthTest:true,depthWrite:false})));
  const pivot=new THREE.Mesh(new THREE.TorusGeometry(.027,.003,8,36),new THREE.MeshBasicMaterial({color:0x176c59,depthTest:true,depthWrite:false}));pivot.position.copy(offset);arc.add(pivot);
  const tip=new THREE.Mesh(new THREE.SphereGeometry(.005,8,8),new THREE.MeshBasicMaterial({color:0xb06537,depthTest:true,depthWrite:false}));arc.add(tip);
  arc.traverse(object=>{object.renderOrder=8;});

  const feedbackFor=(result:PickResult):void=>{
    if(game.fallen)return;
    if(result.control){
      selectControl(result.control);
      if(training?.active){setFeedback('选中自由度后，按住对应肢体拖动。摆好后再提交评分。');sync();return;}
      const discovery=game.discover(result.control.jointName);
      if(discovery.unlockedNow){
        $('discovery-game').classList.remove('is-unlocking');void $('discovery-game').offsetWidth;$('discovery-game').classList.add('is-unlocking');
        setFeedback('三个独立自由度找齐了！运动链已解锁，试试“演示整条链”。');
      }else if(discovery.added)setFeedback(`发现了${result.control.label}！再找找另外的部位。`);
      demonstrateSelected(discovery.added);
      const focusLink=chain.joints.find(task=>task.name===activeControl.jointName)?.link??result.linkName;
      onSelect(mapping.links.get(focusLink)!.getWorldPosition(new THREE.Vector3()),activeControl.jointName);
      syncGame();return;
    }
    setFeedback(result.linkName==='head_link'?'这版 G1 头部固定，没有独立颈关节。试着拖动躯干，或选择腰部转动。':`你点到${partLabel(result.linkName)}了。试试左脚、腰部或双臂；拖动空白处可以旋转视角。`);
  };
  const picker=new FreedomInteraction(canvas,camera,mapping,config,feedbackFor,{
    direction:part=>training?.active?jointDragDirection(pose,camera,part.control!.jointName,part.control!.dragAxis)
      :new THREE.Vector2(part.control!.dragAxis==='x'?1:0,part.control!.dragAxis==='y'?-1:0),
    resolveControl:(link,control)=>training?.active?training.resolveControl(link,control):control,
    enabled:()=>!game.fallen&&(!training?.active||training.state.status==='playing'),
    onCaptureChange:active=>{
      if(active){warningView.clearTransform();if(game.mode==='chain')pose.pause();game.cancelChain();chainMode=false;safetyDirty=true;sync();}
      options.onGestureCapture(active);
    },
    onStart:part=>{
      warningView.clearTransform();if(!training?.active)pose.pause();
      selectControl(part.control!);dragStartAngle=pose.getAngle(activeControl.jointName);isDragging=true;
      viewer.dataset.dragging='true';
    },
    onMove:(_part,offsetDegrees)=>moveTo(dragStartAngle+offsetDegrees),
    onEnd:()=>{isDragging=false;delete viewer.dataset.dragging;safetyDirty=true;},
  });

  function setFeedback(message:string):void {feedback=message;feedbackUntil=performance.now()+2200;$('joint-status').textContent=message;}

  function demonstrateSelected(discovered=false):void {
    // This intentional teaching gesture remains available under reduced motion;
    // ambient pulses, camera travel and warning sway respect that preference.
    pose.demonstrateJoint(activeControl.jointName);game.update(0,false,'teaching');
    const descriptions:Record<string,string>={left_hip_pitch_joint:'髋让整条腿前后摆动',left_knee_joint:'膝弯曲，小腿跟着运动',left_ankle_pitch_joint:'踝转动，改变脚掌的朝向'};
    $('feedback-kicker').textContent=discovered?'发现一个自由度':game.experience==='observe'?'独立动作观察':'再看一次独立动作';
    $('feedback-part').textContent=activeControl.label;
    $('feedback-description').textContent=descriptions[activeControl.jointName]??'观察这个转轴如何带动下游部件';
    const toast=$('discovery-feedback');toast.hidden=false;toast.classList.remove('is-entering');void toast.offsetWidth;toast.classList.add('is-entering');
    discoveryFeedbackUntil=performance.now()+2400;safetyDirty=true;refreshSafety(true);sync();
  }

  function selectControl(control:PartControl):void {
    if(game.fallen)return;
    warningView.clearTransform();if(pose.motionSource!=='teaching'&&!training?.active)pose.pause();game.cancelChain();chainMode=false;uiBoundary=null;activeControl=control;jointSelect.value=control.jointName;
    if(training?.active)training.setSelected(control.jointName);
    const current=pose.joints.get(control.jointName)!;
    const range=pose.getInteractionRange(control.jointName);
    slider.min=String(range.min);slider.max=String(range.max);
    $('lower-limit').textContent=formatAngle(range.min);$('upper-limit').textContent=formatAngle(range.max);
    $('range-mode').textContent=`${config.interactionLimits[control.jointName]?'交互限位':'机械限位'} · 零位 0°`;
    $('range-mechanical').textContent=formatRange({min:current.lower,max:current.upper});
    $('range-combined').textContent=formatRange(range);
    $('caption-label').textContent=`${control.label} · 模型角度`;
    $('active-part-label').textContent=control.label;
    highlightLink.textContent='当前部位';
    highlightLink.setAttribute('aria-pressed','true');highlightChain.setAttribute('aria-pressed','false');
    activate();
    setFeedback(`${control.label}已选中。${control.dragAxis==='y'?'上下':'左右'}拖动部位，或用滑块调整。`);
  }

  function activate():void {
    warningView.clearTransform();
    selected=true;
    $('safety-panel').closest('.observation-panel')!.classList.add('is-teaching');
    arc.visible=isKnee();
    $('joint-caption').removeAttribute('hidden');
    $('safety-panel').removeAttribute('hidden');
    selectButton.setAttribute('aria-pressed','true');
    selectButton.innerHTML='退出摆姿 <span aria-hidden="true">×</span>';
    [slider,play,reset,highlightLink,highlightChain].forEach(control=>control.disabled=false);
    hint.hidden=false;
    hotspot.classList.add('is-active');
    syncGame(true);
    safetyDirty=true;lastAngle=NaN;sync();refreshSafety(true);
  }

  function deactivate():void {
    warningView.clearTransform();unbalanced=false;uiBoundary=null;warningVisible=false;viewer.dataset.warning='normal';$('imbalance-edge').hidden=true;$('pose-warning').hidden=true;
    selected=false;showHint=false;feedbackUntil=0;pose.reset();game.resetPose();fallElapsed=0;highlight.clear();arc.visible=false;balanceView.clear();
    $('safety-panel').closest('.observation-panel')!.classList.remove('is-teaching');
    $('joint-caption').setAttribute('hidden','');$('safety-panel').setAttribute('hidden','');
    selectButton.setAttribute('aria-pressed','false');
    selectButton.innerHTML='开始探索 <span aria-hidden="true">↗</span>';
    [slider,play,reset,highlightLink,highlightChain].forEach(control=>control.disabled=true);
    hint.hidden=false;
    hotspot.classList.remove('is-active');sync();
  }

  function sync():void {
    const angle=pose.getAngle(activeControl.jointName),activeBounds=pose.joints.get(activeControl.jointName)!;
    const requested=String(pose.getRequestedAngle(activeControl.jointName)),displayAngle=formatAngle(angle);
    if(slider.value!==requested)slider.value=requested;
    if(slider.getAttribute('aria-valuetext')!==displayAngle)slider.setAttribute('aria-valuetext',displayAngle);
    setText('angle-value',displayAngle);setText('stage-angle',displayAngle);
    setText('chain-readout',`左髋 ${formatAngle(pose.getAngle(config.jointNames.leftHipPitch))} · 左膝 ${formatAngle(pose.getAngle(config.jointNames.leftKnee))} · 左踝 ${formatAngle(pose.getAngle(config.jointNames.leftAnklePitch))} · 骨盆 ↓${(pose.pelvisDrop*100).toFixed(1)} cm`);
    syncGame();
    if(game.fallen){setText('joint-status','失去平衡！点击“全身复位”后可以继续。');return;}
    if(performance.now()<feedbackUntil){setText('joint-status',feedback);return;}
    if(pose.motionSource==='teaching'){setText('joint-status','独立动作演示：缓慢转动、稍作停留，再回到原姿态。');return;}
    if(!selected)setText('joint-status','拖动左脚、腰部或手臂，试着给 G1 摆个姿势。');
    else if(safety.last.balance.state==='outside')setText('joint-status',game.experience==='observe'?'质心在简化支撑范围外，可以继续观察或复位。':'失衡了！试着收回动作，让质心回到支撑范围。');
    else if(uiBoundary)setText('joint-status',`${activeControl.label}已到交互${uiBoundary}，试着换个方向。`);
    else if(safety.last.overlapCollision)setText('joint-status',`${safety.last.overlapCollision.label}代理盒重叠。试着收回动作。`);
    else if(angle>=activeBounds.upper-.01)setText('joint-status','已到 URDF 模型机械上限。');
    else if(angle<=activeBounds.lower+.01)setText('joint-status','已到 URDF 模型机械下限。');
    else if(game.mode==='chain')setText('joint-status','髋—膝—踝正在配合，对侧腿支撑。拖动可切回单关节。');
    else if(Math.abs(angle)<.01)setText('joint-status','已恢复模型零位。');
    else setText('joint-status','拖部位摆姿势，拖空白转视角；警告不会拦住你。');
  }

  function updateArc(angle:number):void {
    arc.updateWorldMatrix(true,false);
    const extent=guideRadiusAboveGround(arc.matrixWorld,offset,axis,maximumRadius+tipExtension,0,.018);
    radius=Math.max(0,extent-tipExtension);
    arc.visible=selected&&isKnee()&&radius>.03;
    for(let index=0;index<81;index++)limits.geometry.attributes.position.setXYZ(index,...point(bounds.lower+(bounds.upper-bounds.lower)*index/80).toArray());
    limits.geometry.attributes.position.needsUpdate=true;limits.computeLineDistances();
    zeroRay.geometry.attributes.position.setXYZ(1,...point(0,radius+tipExtension).toArray());zeroRay.geometry.attributes.position.needsUpdate=true;
    ray.geometry.attributes.position.setXYZ(1,...point(angle,radius+tipExtension).toArray());ray.geometry.attributes.position.needsUpdate=true;
    tip.position.copy(point(angle,radius+tipExtension));
    for(let index=0;index<48;index++){
      const a=point(angle*index/48),b=point(angle*(index+1)/48);
      fillPositions.set([...offset.toArray(),...a.toArray(),...b.toArray()],index*9);
    }
    fillGeometry.attributes.position.needsUpdate=true;
  }

  function refreshSafety(force=false):void {
    const now=performance.now();
    if(!force&&now-lastSafetyTime<config.safety.updateIntervalSeconds*1000)return;
    lastSafetyTime=now;
    warningView.clearTransform();
    const snapshot:SafetySnapshot=safety.evaluate();
    unbalanced=snapshot.balance.state==='outside';
    const teaching=pose.motionSource==='teaching';
    viewer.dataset.warning=teaching?'teaching':snapshot.severity;
    $('imbalance-edge').hidden=teaching||snapshot.severity!=='danger'||Boolean(training?.active&&!snapshot.overlapCollision);
    const warning=$('pose-warning');
    const warnings=snapshot.collisions.filter(pair=>pair.state!=='clear');
    const overlaps=warnings.filter(pair=>pair.state==='overlap');
    warningVisible=(!teaching&&snapshot.severity!=='normal')||uiBoundary!==null;
    warningLink=undefined;warningPosition.copy(snapshot.com);
    warning.dataset.state=snapshot.severity==='danger'?'danger':'caution';
    if(overlaps.length){
      warningLink=chooseWarningLink(overlaps,mapping,activeControl.jointName);
      const pair=overlaps.find(pair=>pair.first===warningLink||pair.second===warningLink)!;
      setText('pose-warning',`${pair.label}可能相碰，试着收回动作`);
    }else if(uiBoundary){
      warningLink=mapping.jointToLink.get(activeControl.jointName)?.name;
      setText('pose-warning',`${activeControl.label}已到交互${uiBoundary}`);
    }else if(unbalanced)setText('pose-warning',training?.active?'支撑投影越界 · 本关只评姿态匹配':'失衡了！试着把动作收回来');
    else if(warnings.length){
      warningLink=chooseWarningLink(warnings,mapping,activeControl.jointName);
      const pair=warnings.find(pair=>pair.first===warningLink||pair.second===warningLink)!;
      setText('pose-warning',`${pair.label}接近，试着换个姿势`);
    }else setText('pose-warning','质心接近支撑边界，继续试试看');
    const states={balanced:['平衡','位于支撑范围内'],near:['接近边界','质心靠近支撑范围边缘'],outside:['失衡警告','质心投影超出简化支撑范围']} as const;
    const [state,detail]=states[snapshot.balance.state];
    const stateNode=$('balance-state');setText('balance-state',teaching?'教学动作 · 仅观察':state);stateNode.dataset.state=snapshot.balance.state;
    setText('balance-detail',teaching?`单轴动作可能改变脚底接触，支撑为几何近似；本段不触发倾倒。${detail}`:`${detail} · ${snapshot.supportMode==='double'?'双脚':snapshot.supportMode==='single'?'单脚':'未接地'} · 支撑近似${snapshot.balance.approximate?' / 质心近似':''}`);
    $('analysis-details').dataset.state=teaching?'teaching':snapshot.severity;
    setText('com-coordinates',`CoM 投影 · X ${snapshot.balance.projection.x.toFixed(2)} / Z ${snapshot.balance.projection.z.toFixed(2)} m`);
    const collisionNode=$('collision-status');
    collisionNode.dataset.state=warnings.some(pair=>pair.state==='overlap')?'overlap':warnings.length?'near':'clear';
    setText('collision-status',warnings.length?`接近 / 重叠：${warnings.map(pair=>pair.label).join('、')}`:`${config.safety.collisionPairs.length} 组关键部位未发现接近`);
    const warningLinks=[...new Set(warnings.flatMap(pair=>[pair.first,pair.second]))];
    const activeLink=chain.joints.find(task=>task.name===activeControl.jointName)?.link??mapping.jointToLink.get(activeControl.jointName)?.name??config.targetLinkName;
    const trainingLinks=training?.active?[activeControl].flatMap(goal=>{
      const link=mapping.jointToLink.get(goal.jointName)?.name;
      const side=goal.jointName.split('_')[0];
      return [link,...(/shoulder|elbow/.test(goal.jointName)?[`${side}_elbow_link`,`${side}_wrist_pitch_link`,`${side}_rubber_hand`]:[])].filter((name):name is string=>Boolean(name));
    }):[];
    highlight.highlightChain(trainingLinks.length?trainingLinks:chainMode?chain.links:[activeLink],activeLink,0x327a66,warningLinks);
    highlight.update(0,reducedMotion.matches);
    balanceView.update(snapshot.balance,snapshot.com,snapshot.contactPlaneY);
    const points=[...snapshot.balance.polygon,{x:snapshot.com.x,z:snapshot.com.z}];
    const minX=Math.min(...points.map(point=>point.x)),maxX=Math.max(...points.map(point=>point.x));
    const minZ=Math.min(...points.map(point=>point.z)),maxZ=Math.max(...points.map(point=>point.z));
    const scale=Math.min(154/Math.max(maxZ-minZ,.1),45/Math.max(maxX-minX,.1));
    const mapPoint=(point:{x:number;z:number})=>[90+(point.z-(minZ+maxZ)/2)*scale,32-(point.x-(minX+maxX)/2)*scale];
    $('balance-map-outline').setAttribute('d',snapshot.balance.polygon.length<3?'':snapshot.balance.polygon.map((point,index)=>`${index?'L':'M'}${mapPoint(point).join(' ')}`).join(' ')+' Z');
    const projected=mapPoint(snapshot.com);$('balance-map-point').setAttribute('cx',String(projected[0]));$('balance-map-point').setAttribute('cy',String(projected[1]));
    $('balance-map').dataset.state=snapshot.balance.state;
    safetyDirty=false;
    sync();
  }

  selectButton.addEventListener('click',()=>{if(selected)deactivate();else selectControl(activeControl);});
  jointSelect.addEventListener('change',()=>{const control=available.find(item=>item.jointName===jointSelect.value);if(control)selectControl(control);});
  replay.addEventListener('click',()=>{if(selected&&!game.fallen)demonstrateSelected();});
  for(const mode of ['observe','challenge'] as const)$(`mode-${mode}`).addEventListener('click',()=>{
    if(game.experience===mode){training?.leave();return;}
    training?.leave();
    game.setExperience(mode);resetPose();showHint=false;selectControl(activeControl);
    $('discovery-feedback').hidden=true;discoveryFeedbackUntil=0;
    setFeedback(mode==='observe'?'自由观察：点部位看独立动作，或直接演示整条左腿链。':'发现挑战：点击左髋、左膝、左踝，每找到一处都会立即演示。');
    options.onChain();sync();
  });
  hotspot.addEventListener('click',()=>{
    const control=available.find(item=>item.jointName===hintJoint.name)!;
    feedbackFor({linkName:hintJoint.link,jointName:control.jointName,control,correct:control.jointName===config.targetJointName});showHint=false;
  });
  hint.addEventListener('click',()=>{
    hintJoint=chain.joints.find(task=>!game.discovered.has(task.name))??chain.joints[0];showHint=true;
    hotspot.querySelector('span')!.textContent=hintJoint.label;hotspot.setAttribute('aria-label',`选中模型上的${hintJoint.label}`);
    onSelect(mapping.links.get(hintJoint.link)!.getWorldPosition(new THREE.Vector3()),hintJoint.name);
    setFeedback(`绿色标记指向左${hintJoint.label}，点击模型或标记试试看。`);
  });
  highlightLink.addEventListener('click',()=>{chainMode=false;highlightLink.setAttribute('aria-pressed','true');highlightChain.setAttribute('aria-pressed','false');refreshSafety(true);});
  highlightChain.addEventListener('click',()=>{chainMode=true;highlightLink.setAttribute('aria-pressed','false');highlightChain.setAttribute('aria-pressed','true');refreshSafety(true);});
  function moveTo(raw:number):void {
    if(game.fallen)return;
    warningView.clearTransform();
    game.cancelChain();chainMode=false;
    feedbackUntil=0;
    $('discovery-feedback').hidden=true;discoveryFeedbackUntil=0;
    pose.setControlledJoint(activeControl.jointName,raw);
    if(training?.active)training.markInput();
    const range=pose.getInteractionRange(activeControl.jointName);
    uiBoundary=config.interactionLimits[activeControl.jointName]?(raw<=range.min+.005?'下限':raw>=range.max-.005?'上限':null):null;
    safetyDirty=true;sync();updateArc(pose.getAngle(config.targetJointName));refreshSafety();
  }
  slider.addEventListener('input',()=>moveTo(Number(slider.value)));
  slider.addEventListener('keydown',event=>{
    const angle=pose.getRequestedAngle(activeControl.jointName),current=pose.getInteractionRange(activeControl.jointName);
    const targets:Record<string,number>={ArrowLeft:angle-1,ArrowDown:angle-1,ArrowRight:angle+1,ArrowUp:angle+1,Home:current.min,End:current.max};
    if(event.key in targets){event.preventDefault();moveTo(targets[event.key]);}
  });
  play.addEventListener('click',()=>{
    if(game.mode==='chain'){pose.pause();game.cancelChain();chainMode=false;sync();refreshSafety(true);return;}
    if(!game.beginChain())return;
    warningView.clearTransform();chainMode=true;uiBoundary=null;
    highlightLink.setAttribute('aria-pressed','false');highlightChain.setAttribute('aria-pressed','true');
    const preset=chain.presets.find(item=>item.id===presetSelect.value)!;
    pose.demonstrateChain(preset.kneeDegrees);setFeedback('先平滑回到站姿，再看髋、膝、踝一起配合。');sync();refreshSafety(true);
    options.onChain();
  });
  function resetPose():void {
    warningView.clearTransform();uiBoundary=null;feedbackUntil=0;pose.reset();game.resetPose();fallElapsed=0;chainMode=false;
    $('discovery-feedback').hidden=true;discoveryFeedbackUntil=0;
    sync();updateArc(0);refreshSafety(true);
  }
  reset.addEventListener('click',resetPose);$('recover-pose').addEventListener('click',resetPose);
  $('restart-game').addEventListener('click',()=>{game.restart();resetPose();});
  const onVisibility=()=>{
    if(!document.hidden)return;
    training?.suspend();
    // Rendering already stops while hidden and main resets its frame clock.
    // Keep the teaching timeline/baseline so it resumes and returns normally.
    if(pose.motionSource!=='teaching')pose.pause();
    game.cancelChain();game.update(0,false);sync();
  };
  document.addEventListener('visibilitychange',onVisibility);

  const screenPosition=new THREE.Vector3();
  training=new TrainingPanel({pose,scene,camera,viewer,controls:available,labels:Object.fromEntries(available.map(control=>[control.jointName,control.label])),
    onEnter:()=>{showHint=false;resetPose();activate();options.onTraining();},
    onExit:()=>{resetPose();options.onChain();},
    onPoseReset:resetPose,
    onChoose:name=>{const control=available.find(item=>item.jointName===name);if(control)selectControl(control);},
    onMove:(name,degrees)=>{const control=available.find(item=>item.jointName===name);if(control){selectControl(control);moveTo(degrees);}},
    onChanged:()=>{safetyDirty=true;sync();refreshSafety(true);},
    conditions:()=>{refreshSafety(true);return {blocked:Boolean(safety.last.overlapCollision),dragging:isDragging};},
  });
  deactivate();
  return {
    update(delta:number,time:number):boolean {
      warningView.clearTransform();
      const previousSource=pose.motionSource;
      const poseChanged=pose.update(delta);
      if(poseChanged)safetyDirty=true;
      if(training?.active&&poseChanged)pose.maintainSupportAnchor();
      if(previousSource==='teaching'&&pose.motionSource!=='teaching'){refreshSafety(true);sync();}
      if(game.mode==='chain'&&!pose.animating){game.finishChain();chainMode=false;setFeedback(game.experience==='observe'?'链条演示完成。点选一个部位，比较独立动作与相互配合的区别。':'链条演示完成！现在单独拖动左髋，试试失衡边界。');safetyDirty=true;sync();}
      const angle=pose.getAngle(activeControl.jointName);
      if(angle!==lastAngle){lastAngle=angle;sync();if(selected&&isKnee())updateArc(pose.getAngle(config.targetJointName));}
      if(feedbackUntil>0&&performance.now()>=feedbackUntil){feedbackUntil=0;sync();}
      highlight.update(delta,reducedMotion.matches);
      if(selected&&safetyDirty)refreshSafety();
      if(training?.active){
        const previousStatus=training.state.status;
        training.update(delta,Boolean(safety.last.overlapCollision));
        if(previousStatus!==training.state.status)sync();
      }
      if(discoveryFeedbackUntil>0&&performance.now()>=discoveryFeedbackUntil){$('discovery-feedback').hidden=true;discoveryFeedbackUntil=0;}
      if(game.update(delta,selected&&unbalanced&&!training?.active,previousSource==='teaching'?'teaching':pose.motionSource)){
        pose.pause();fallElapsed=0;
        const {projection,polygon}=safety.last.balance;
        let closest=new THREE.Vector3(),distance=Infinity;
        for(let i=0;i<polygon.length;i++){
          const a=new THREE.Vector3(polygon[i].x,0,polygon[i].z),b=new THREE.Vector3(polygon[(i+1)%polygon.length].x,0,polygon[(i+1)%polygon.length].z);
          const edge=b.clone().sub(a),t=THREE.MathUtils.clamp(projection.clone().sub(a).dot(edge)/(edge.lengthSq()||1),0,1);
          const point=a.addScaledVector(edge,t),d=point.distanceToSquared(projection);
          if(d<distance){distance=d;closest=point;}
        }
        fallAnchor.copy(closest).setY(safety.last.contactPlaneY);fallDirection.copy(projection).sub(closest).setY(0).normalize();
        if(fallDirection.lengthSq()<1e-8)fallDirection.set(1,0,0);
        sync();
      }
      if(showHint){(mapping.links.get(hintJoint.link)??joint).getWorldPosition(screenPosition);screenPosition.project(camera);}
      const hotspotHidden=!showHint||game.fallen||screenPosition.z>1||screenPosition.z<-1||Math.abs(screenPosition.x)>.94||Math.abs(screenPosition.y)>.9;
      if(hotspot.hidden!==hotspotHidden)hotspot.hidden=hotspotHidden;
      if(!hotspot.hidden){hotspot.style.left=((screenPosition.x*.5+.5)*viewer.clientWidth)+'px';hotspot.style.top=((-screenPosition.y*.5+.5)*viewer.clientHeight)+'px';}
      if(game.fallen){fallElapsed+=delta;warningView.renderFall(fallDirection,fallAnchor,fallElapsed/.65,reducedMotion.matches);}
      else warningView.render(time/1000,selected&&unbalanced&&!isDragging&&pose.motionSource==='manual'&&game.experience==='challenge'&&!training?.active,reducedMotion.matches);
      const warning=$('pose-warning');
      if(selected&&warningVisible&&!game.fallen){
        if(warningLink)warningPosition.copy(warningAnchorPoint(mapping,warningLink));
        if(warning.hidden)warning.hidden=false;
        const position=projectWarningAnchor(warningPosition,camera,viewer.clientWidth,viewer.clientHeight,warning.offsetWidth,warning.offsetHeight);
        if(warning.hidden!==!position)warning.hidden=!position;
        if(position){warning.style.left=`${position.x}px`;warning.style.top=`${position.y}px`;}
      }else if(!warning.hidden)warning.hidden=true;
      // Selected links retain their live breathing light even when joints are still.
      return selected||poseChanged||game.fallen;
    },
    dispose():void {document.removeEventListener('visibilitychange',onVisibility);training?.dispose();picker.dispose();highlight.clear();balanceView.dispose();warningView.dispose();arc.removeFromParent();$('imbalance-edge').hidden=true;$('pose-warning').hidden=true;$('fall-notice').hidden=true;},
  };
}
