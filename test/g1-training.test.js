const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1');
const req=createRequire(path.join(project,'package.json')),esbuild=req('esbuild');
require.extensions['.ts']=(module,filename)=>module._compile(esbuild.transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,filename);
function load(){
 const filename=path.join(project,'src/pose-trainer.ts');
 assert(fs.existsSync(filename),'Provide pose scoring and training state independent of the renderer');
 return createRequire(filename)(filename);
}
const task={id:'wave',title:'挥手',description:'试着挥手',focusJoint:'right_elbow_joint',joints:[
 {name:'right_elbow_joint',label:'右肘',degrees:80,tolerance:6},
 {name:'right_shoulder_roll_joint',label:'右肩',degrees:-40,tolerance:6},
]};
const target={right_elbow_joint:80,right_shoulder_roll_joint:-40};
test('accuracy uses measured joint errors and decreases continuously with larger errors',()=>{
 const {scorePose}=load();
 assert.equal(scorePose(task,target).score,100);
 const near=scorePose(task,{...target,right_elbow_joint:84});
 const far=scorePose(task,{...target,right_elbow_joint:110});
 assert(near.score>far.score&&near.score<100);
 assert.equal(near.matched,true);assert.equal(far.matched,false);
 assert.equal(far.adjustment.name,'right_elbow_joint');
 assert.equal(scorePose(task,{right_elbow_joint:NaN,right_shoulder_roll_joint:-40}).matched,false);
});
test('one mismatched joint and an unrelated twisted joint cannot be hidden by averaging',()=>{
 const {scorePose}=load();
 assert.equal(scorePose(task,{...target,right_elbow_joint:105}).matched,false);
 const twisted=scorePose(task,{...target,waist_yaw_joint:45});
 assert.equal(twisted.matched,false);assert(twisted.score<100);
 assert.equal(twisted.adjustment.name,'waist_yaw_joint');
});
test('only explicit submission after manual input can award a score; preview cannot submit',()=>{
 const {PoseTrainer}=load(),state=new PoseTrainer([task]);
 const options={manual:true,settled:true,blocked:false};
 state.preview();assert.equal(state.submit(target,options),false);assert.equal(state.bestScore,0);
 state.finishPreview();state.start();assert.equal(state.submit(target,options),false,'No visitor input');
 state.markInput();assert.equal(state.status,'playing');assert.equal(state.resultScore,0,'Dragging does not reveal live score');
 assert.equal(state.submit(target,{...options,settled:false}),false,'Moving servos cannot be assessed yet');
 assert.equal(state.submit(target,{...options,manual:false}),false,'Demonstration source cannot submit');
 assert.equal(state.submit(target,options),true);assert.equal(state.status,'complete');assert.equal(state.resultScore,100);
 assert.equal(state.submit(target,options),false,'No repeated submissions of the frozen result');
});
test('imperfect poses get a review score and can be adjusted without losing the attempt or best',()=>{
 const {PoseTrainer}=load(),state=new PoseTrainer([task]);state.start();state.markInput();
 assert.equal(state.submit({...target,right_elbow_joint:10},{manual:true,settled:true}),true);
 assert.equal(state.status,'review');assert(state.resultScore<80);assert.equal(state.completedCount,0);
 const low=state.bestScore;state.resume();assert.equal(state.status,'playing');assert.equal(state.resultScore,0);
 assert.equal(state.canSubmit,false,'Require another adjustment after feedback');
 state.markInput();state.submit(target,{manual:true,settled:true});assert.equal(state.completedCount,1);assert.equal(state.bestScore,100);
 state.start();state.markInput();state.submit({...target,right_elbow_joint:10},{manual:true,settled:true});assert.equal(state.bestScore,100);assert(state.bestScore>low);
});
test('overlapping geometry yields a visible penalized result rather than silently blocking submission',()=>{
 const {PoseTrainer}=load(),state=new PoseTrainer([task]);state.start();state.markInput();
 assert.equal(state.submit(target,{manual:true,settled:true,blocked:true}),true);
 assert.equal(state.status,'review');assert(state.resultScore<80);assert.equal(state.accuracy.matched,false);
});
test('hints are opt-in and reset for a new task or attempt; saved scores are validated',()=>{
 const {PoseTrainer}=load(),state=new PoseTrainer([task,{...task,id:'two'}],{wave:500,two:45,unknown:99});
 assert.equal(state.hintLevel,0);state.start();state.revealHint();assert.equal(state.hintLevel,1);state.revealHint();state.revealHint();assert.equal(state.hintLevel,2);
 state.markInput();state.select('two');assert.equal(state.hintLevel,0);assert.equal(state.canSubmit,false);assert.equal(state.bestScore,45);assert.equal(state.completedCount,0);
 state.start();state.revealHint();state.start();assert.equal(state.hintLevel,0);
 const restored=new PoseTrainer([task],{wave:96});assert.equal(restored.bestScore,96);assert.equal(restored.completedCount,1);
 assert.throws(()=>state.select('missing'));
});

async function model(){
 const {GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js');
 const buffer=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));
 return (await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength),'')).scene;
}
function moduleTs(name){return req(path.join(project,'src',name));}
test('full-pose preview restores live angles, root, servo goals and motion source',async()=>{
 const {PoseChain}=moduleTs('pose-chain.ts'),pose=new PoseChain(await model());
 pose.setControlledJoint('left_knee_joint',40);pose.update(.1);
 const before=pose.getAngle('left_knee_joint'),root=pose.root.position.clone();
 assert.equal(typeof pose.previewPose,'function','Provide synchronous full pose sampling');
 const sampled=pose.previewPose({left_knee_joint:60},()=>pose.getAngle('left_knee_joint'));
 assert.equal(sampled,60);assert.equal(pose.getAngle('left_knee_joint'),before);
 assert(pose.root.position.equals(root));assert.equal(pose.getRequestedAngle('left_knee_joint'),40);
 assert.equal(pose.motionSource,'manual');
});
test('full-pose demonstration interpolates and returns, and training support remains planted',async()=>{
 const THREE=req('three'),{PoseChain}=moduleTs('pose-chain.ts'),pose=new PoseChain(await model());
 assert.equal(typeof pose.demonstratePose,'function','Provide multi-joint authored demonstrations');
 pose.demonstratePose({right_elbow_joint:80,right_shoulder_roll_joint:-40});
 assert.equal(pose.getAngle('right_elbow_joint'),0);pose.update(.1);
 assert(pose.getAngle('right_elbow_joint')>0&&pose.getAngle('right_elbow_joint')<30);
 assert.equal(pose.motionSource,'teaching');pose.update(5);assert.equal(pose.getAngle('right_elbow_joint'),0);
 for(const [name,angle] of Object.entries({right_hip_pitch_joint:-15,right_knee_joint:30,right_ankle_pitch_joint:-15}))pose.setControlledJoint(name,angle);
 pose.update(2);pose.maintainSupportAnchor();
 assert(pose.supportFoot.getWorldPosition(new THREE.Vector3()).distanceTo(pose.supportAnchor)<1e-6);
});
test('all twelve goal poses exist within UI limits, avoid proxy overlaps, and remain scoreable',async()=>{
 const {PoseChain}=moduleTs('pose-chain.ts'),{buildRobotMapping}=moduleTs('robot-mapping.ts');
 const {SafetyAnalyzer}=moduleTs('safety-analysis.ts'),{G1_INTERACTION_CONFIG:config}=moduleTs('interaction-config.ts');
 const {MOTION_CHALLENGES:tasks,challengeAngles}=moduleTs('motion-challenges.ts');
 assert(tasks.length>=12,'More varied tasks, not just crouches');
 const robot=await model(),pose=new PoseChain(robot),mapping=buildRobotMapping(robot,JSON.parse(fs.readFileSync(path.join(project,'assets/model-info.json'))).links);
 const safety=new SafetyAnalyzer(robot,mapping,pose,config);
 for(const task of tasks){
  for(const joint of task.joints){const range=pose.getInteractionRange(joint.name);assert(joint.degrees>=range.min&&joint.degrees<=range.max,`${task.id} ${joint.name} must be reachable`);}
  assert(task.hints?.length>=2,`${task.id} needs helpful nonnumeric hints`);
  assert(task.hints.every(hint=>!/[0-9°]/.test(hint)),'Hints must describe poses, not reveal numeric answers');
  pose.previewPose(challengeAngles(task),()=>{
   const snapshot=safety.evaluate();
   assert.equal(snapshot.overlapCollision,undefined,`${task.id}: ${snapshot.overlapCollision?.label}`);
  });
 }
});

test('named goals have meaningful end positions: raised hands, open arms, forward pointing and ready arms',async()=>{
 const THREE=req('three'),{PoseChain}=moduleTs('pose-chain.ts'),{MOTION_CHALLENGES:tasks,challengeAngles}=moduleTs('motion-challenges.ts');
 const robot=await model(),pose=new PoseChain(robot),point=name=>robot.getObjectByName(name).getWorldPosition(new THREE.Vector3());
 for(const task of tasks)pose.previewPose(challengeAngles(task),()=>{
  if(task.id==='wave')assert(point('right_rubber_hand').y>point('right_shoulder_pitch_joint').y+.07,'A greeting hand should visibly rise above the shoulder');
  if(task.id==='welcome')assert(point('left_rubber_hand').distanceTo(point('right_rubber_hand'))>.7,'The welcome pose should visibly open both arms');
  if(task.id==='offer')assert(point('right_rubber_hand').y>.95,'The offering pose should hold the hand around chest height');
  if(task.id==='salute')assert(point('right_rubber_hand').y>point('right_shoulder_pitch_joint').y+.08,'Saluting hand must rise, not hang near the waist');
  if(task.id==='point'){
   assert(point('left_rubber_hand').x>point('left_shoulder_pitch_joint').x+.27,'Point toward the exhibit in front');
   assert(Math.abs(point('left_rubber_hand').y-point('left_shoulder_pitch_joint').y)<.15,'Point around shoulder height, not overhead');
  }
  if(task.id==='guard')for(const side of ['left','right'])assert(point(`${side}_rubber_hand`).y>point(`${side}_shoulder_pitch_joint`).y-.05,'Ready hands stay around shoulder height');
 });
});
