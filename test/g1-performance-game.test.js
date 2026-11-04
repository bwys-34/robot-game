const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),req=createRequire(path.join(project,'package.json'));
require.extensions['.ts']=(module,filename)=>module._compile(req('esbuild').transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs'}).code,filename);
function load(name){const file=path.join(project,'src',name+'.ts');assert(fs.existsSync(file),'Implement '+name+' for the motion director game');return req(file);}

test('motion library contains sixteen rich coordinated clips and three meaningful tasks plus free creation',()=>{
 const {PERFORMANCE_ACTIONS,PERFORMANCE_TASKS}=load('performance-library');
 assert.equal(PERFORMANCE_ACTIONS.length,16);assert.equal(new Set(PERFORMANCE_ACTIONS.map(a=>a.id)).size,16);assert.equal(PERFORMANCE_TASKS.length,4);
 for(const action of PERFORMANCE_ACTIONS){assert(action.frames.length>=10);assert(action.links.length>=2);assert(action.frames.every(f=>f.duration>0));}
 assert(PERFORMANCE_ACTIONS.some(a=>a.tags.includes('lower')));assert(PERFORMANCE_ACTIONS.some(a=>a.tags.includes('upper')));
});

test('reception accepts alternative greetings and feedback identifies a direction mistake',()=>{
 const {evaluatePerformance}=load('performance-game');
 for(const greet of ['wave','welcome'])assert.equal(evaluatePerformance('reception',[greet,'invite','bow'],'calm').score,100);
 const wrong=evaluatePerformance('guide',['wave','guide-right','offer','bow'],'calm');
 const right=evaluatePerformance('guide',['wave','guide-left','offer','bow'],'calm');
 assert(right.score>wrong.score);assert.match(wrong.advice,/左/);
 const reordered=evaluatePerformance('reception',['bow','invite','wave'],'calm');assert(reordered.score<100);assert.match(reordered.advice,/顺序|最后|开场/);
 assert(evaluatePerformance('dance',['raise','sway','pulse','punch'],'lively').score>=80);
 const missingRhythm=evaluatePerformance('dance',['raise','sway','bow','punch'],'lively');
 assert(missingRhythm.score<100);assert.match(missingRhythm.advice,/屈膝律动/,'A bow is not the lower-body rhythm requested by this task');
 assert.equal(evaluatePerformance('free',['wave','pulse'],'calm').score,null);
});

test('editor bounds steps, moves and deletes deliberately, and locks while playing or paused',()=>{
 const {PerformanceGame}=load('performance-game'),game=new PerformanceGame();
 game.selectTask('free');assert.equal(game.canPlay,false);game.choose('wave');game.select(1);game.choose('invite');game.select(2);game.choose('bow');assert.equal(game.canPlay,true);
 game.select(7);assert(game.selected<game.task.slots);game.select(2);game.move(-1);assert.deepEqual(game.steps,['wave','bow','invite']);game.remove();assert.deepEqual(game.steps,['wave','invite']);
 game.select(2);game.choose('bow');game.begin(false);game.choose('pulse');assert.deepEqual(game.steps,['wave','invite','bow']);game.pause();assert.equal(game.status,'paused');game.remove();assert.equal(game.steps.length,3);
 game.selectTask('dance');assert.equal(game.task.id,'free','Changing task is locked while playback is paused');
 game.stop();assert.equal(game.result,null);game.begin(true);game.complete();assert.equal(game.result,null,'Preview never awards a task result');
 game.begin(false);game.complete();assert.equal(game.result.score,null);game.choose('welcome');assert.equal(game.result,null,'Editing invalidates the previous score');
 assert.throws(()=>game.choose('missing'));game.selectTask('free');assert.equal(game.canPlay,false);game.choose('wave');assert.equal(game.canPlay,true);
});

test('continuous timeline retains authored exits, only closes once and pauses without drift',()=>{
 const {buildPerformanceTimeline,PerformanceClock}=load('performance-player');
 const frames=buildPerformanceTimeline(['wave','welcome','guide-left'],'calm');
 assert.equal(frames.filter(f=>f.phase==='closing').length,1);assert.equal(frames.at(-1).phase,'closing');
 assert(frames.filter(f=>f.phase!=='closing').every(f=>Object.values(f.angles).some(v=>Math.abs(v)>1)),'No standing reset between clips');
 const start={right_elbow_joint:17},clock=new PerformanceClock(frames,start);clock.update(.1);const before=clock.angles.right_elbow_joint;clock.pause();clock.update(9);assert.equal(clock.angles.right_elbow_joint,before);clock.resume();
 const duration=frames.reduce((sum,f)=>sum+f.duration,0);clock.update(duration);assert(clock.finished);assert(Object.values(clock.angles).every(v=>Math.abs(v)<1e-5));
 const fast=new PerformanceClock(frames,start),slow=new PerformanceClock(frames,start);for(let i=0;i<300;i++)fast.update(1/60);for(let i=0;i<50;i++)slow.update(.1);
 for(const key of Object.keys(fast.angles))assert(Math.abs(fast.angles[key]-slow.angles[key])<1e-6,'Playback timing independent of display FPS');
 assert.throws(()=>buildPerformanceTimeline(['missing'],'calm'));assert.throws(()=>buildPerformanceTimeline([],'calm'));
});

test('six-step choreography reaches a half-minute through authored movement beats, not stretched playback',()=>{
 const {buildPerformanceTimeline}=load('performance-player');
 const sixStep=buildPerformanceTimeline(['welcome','wave','guide-left','offer','sway','bow'],'calm').reduce((sum,frame)=>sum+frame.duration,0);
 const sevenStep=buildPerformanceTimeline(['welcome','wave','guide-left','offer','sway','raise','bow'],'calm').reduce((sum,frame)=>sum+frame.duration,0);
 const lively=buildPerformanceTimeline(['welcome','wave','guide-left','offer','sway','bow'],'lively').reduce((sum,frame)=>sum+frame.duration,0);
 const one=buildPerformanceTimeline(['wave'],'calm').reduce((sum,frame)=>sum+frame.duration,0);
 assert(sixStep>=27&&sixStep<=33,'Six authored actions should make a roughly 30-second show');
 assert(sevenStep>sixStep,'Adding an action extends the performance instead of compressing it');
 assert(lively<sixStep&&lively>=24,'Lively tempo is brisker while retaining the movement sequence');
 assert(one<7,'A single action preview uses its authored duration, not a multi-second playback stretch');
});

test('performance tasks allow six deliberately ordered movement beats',()=>{
 const {PERFORMANCE_TASKS}=load('performance-library'),{PerformanceGame}=load('performance-game');
 assert(PERFORMANCE_TASKS.every(task=>task.slots>=6),'Each task can hold enough distinct beats for a full-length show');
 const game=new PerformanceGame();game.selectTask('free');
 for(const id of ['welcome','wave','invite','guide-left','offer','bow']){game.choose(id);if(game.steps.length<6)game.select(game.steps.length);}
 assert.equal(game.steps.length,6);assert.equal(game.canPlay,true);
});

test('themed scripts open ready to play with distinct scenes and a roughly half-minute runtime',()=>{
 const {PERFORMANCE_TASKS,performanceAction}=load('performance-library');
 const {PerformanceGame,evaluatePerformance}=load('performance-game'),{performanceDuration}=load('performance-player');
 const game=new PerformanceGame();
 assert.equal(game.canPlay,true,'The initial welcoming show should be playable without filling six empty slots');
 for(const task of PERFORMANCE_TASKS.filter(task=>task.id!=='free')){
   assert(task.script,'A themed task needs an authored complete program');
   game.selectTask(task.id);
   assert.deepEqual(game.steps,task.script.steps.map(step=>step.actionId));
   assert.equal(game.tempo,task.script.tempo);assert.equal(game.usingScript,true);assert.equal(game.canPlay,true);
   assert(new Set(game.steps).size>=5,'A script should have varied content, not repeated filler');
   assert(task.script.steps.every(step=>step.cue.length>0&&performanceAction(step.actionId)));
   const duration=performanceDuration(game.steps,game.tempo);
   assert(duration>=27&&duration<=33,task.id+' should run around thirty seconds at its authored tempo');
   assert.equal(evaluatePerformance(task.id,game.steps,game.tempo).score,100,'Each recommended script satisfies its own theme');
 }
 game.selectTask('free');assert.equal(game.steps.length,0);assert.equal(game.canPlay,false);assert.equal(game.script,undefined);
});

test('script replacements preserve neighboring scenes and restore without mutating the source program',()=>{
 const {PerformanceGame}=load('performance-game'),game=new PerformanceGame();
 assert(game.script,'The welcoming program is available on entry');
 const authored=game.script.steps.map(step=>step.actionId);
 game.select(2);game.choose('guide-right');
 assert.equal(game.usingScript,false);assert.equal(game.steps[2],'guide-right');
 assert.equal(game.steps[1],authored[1]);assert.equal(game.steps[3],authored[3]);
 assert.deepEqual(game.script.steps.map(step=>step.actionId),authored,'Editing must not change the shared script');
 game.resetScript();assert.deepEqual(game.steps,authored);assert.equal(game.selected,0);assert.equal(game.usingScript,true);
 game.begin(false);game.pause();game.resetScript();game.selectTask('dance');
 assert.equal(game.status,'paused');assert.equal(game.task.id,'reception','Script replacement stays locked during playback');
 game.stop();game.setTempo('lively');assert.equal(game.usingScript,false);game.resetScript();assert.equal(game.tempo,'calm');
});

test('watching an untouched script gives a show completion rather than an unearned task score',()=>{
 const {PerformanceGame}=load('performance-game'),game=new PerformanceGame();
 game.begin(true);game.complete();assert.equal(game.result,null,'Single preview cannot complete a show');
 game.begin(false);game.complete();
 assert.equal(game.status,'result');assert.equal(game.result.score,null);assert.match(game.result.title,/演出完成/);
 game.select(0);game.choose('salute');game.begin(false);game.complete();
 assert.equal(game.result.score,100,'Visitors who customize a program keep the existing task evaluation');
 game.resetScript();assert.equal(game.result,null);assert.equal(game.status,'editing');
});

test('passing a pose keeps continuous joint velocity instead of restarting every keyframe',()=>{
 const {PerformanceClock}=load('performance-player');
 const frames=[10,20,30].map(value=>({angles:{right_elbow_joint:value},duration:1,actionIndex:0,actionId:'wave',phase:'action'}));
 const sample=t=>{const clock=new PerformanceClock(frames,{});clock.update(t);return clock.angles.right_elbow_joint;};
 const dt=.0001,left=(sample(1)-sample(1-dt))/dt,right=(sample(1+dt)-sample(1))/dt;
 assert(left>5&&right>5,'A passing waypoint must keep moving; repeated easing to zero looks like stutter');
 assert(Math.abs(left-right)<.02,'Angular velocity must match on both sides of a waypoint');
 assert(Math.abs(sample(dt)/dt)<.02,'Playback starts gently from rest');
 assert(Math.abs((sample(3)-sample(3-dt))/dt)<.02,'Final pose settles to rest');
 const turning=[30,-20,10,0].map(value=>({...frames[0],angles:{right_elbow_joint:value}}));
 const clock=new PerformanceClock(turning,{});
 for(let i=0;i<400;i++){clock.update(.01);const index=Math.min(Math.floor((i+.5)/100),3),from=index?turning[index-1].angles.right_elbow_joint:0,to=turning[index].angles.right_elbow_joint;assert(clock.angles.right_elbow_joint>=Math.min(from,to)-1e-7&&clock.angles.right_elbow_joint<=Math.max(from,to)+1e-7,'Spline cannot overshoot authored or interaction bounds');}
});

test('theme action seams stay in motion instead of waiting on repeated preparation poses',()=>{
 const {PERFORMANCE_TASKS}=load('performance-library'),{PerformanceClock,buildPerformanceTimeline}=load('performance-player');
 for(const task of PERFORMANCE_TASKS.filter(task=>task.script)){
   const clock=new PerformanceClock(buildPerformanceTimeline(task.script.steps.map(step=>step.actionId),task.script.tempo),{});
   let previous={...clock.angles},still=0,longest=0;
   while(!clock.finished){
     clock.update(1/120);
     const speed=Math.max(...Object.keys(clock.angles).map(key=>Math.abs(clock.angles[key]-(previous[key]??0))*120));
     still=speed<.8&&clock.frame.phase!=='closing'?still+1/120:0;
     longest=Math.max(longest,still);previous={...clock.angles};
   }
   assert(longest<.34,task.id+' has an unintended whole-body freeze of '+longest.toFixed(2)+'s');
 }
});

test('show transitions preserve authored duration and solo previews without modifying action data',()=>{
 const {PERFORMANCE_ACTIONS}=load('performance-library'),{buildPerformanceTimeline,PerformanceClock}=load('performance-player');
 const original=JSON.stringify(PERFORMANCE_ACTIONS);
 for(const action of PERFORMANCE_ACTIONS){
   const solo=buildPerformanceTimeline([action.id],'calm');
   assert.deepEqual(solo.slice(0,-1).map(frame=>frame.angles),action.frames.map(frame=>frame.angles),'A solo clip keeps its authored preparation and return');
   const repeat=buildPerformanceTimeline([action.id,action.id],'calm');
   assert(Math.abs(repeat.reduce((sum,frame)=>sum+frame.duration,0)-(action.frames.reduce((sum,frame)=>sum+frame.duration,0)*2+1.15))<1e-8,'Smoother transitions must not shorten the show');
   const clock=new PerformanceClock(repeat,{});let still=0,longest=0,previous={...clock.angles};
   while(!clock.finished){clock.update(1/120);const speed=Math.max(...Object.keys(clock.angles).map(key=>Math.abs(clock.angles[key]-(previous[key]??0))*120));still=speed<.8&&clock.frame.phase!=='closing'?still+1/120:0;longest=Math.max(longest,still);previous={...clock.angles};}
   assert(longest<.34,action.id+' repeated should not stall between the two gestures');
 }
 assert.equal(JSON.stringify(PERFORMANCE_ACTIONS),original,'Timeline compilation cannot rewrite shared clips');
});

test('joint acceleration joins smoothly at passing poses and direction reversals without overshoot',()=>{
 const {PerformanceClock}=load('performance-player');
 for(const values of [[10,20,35],[30,-20,10],[.1,30,30.1]]){
   const frames=values.map((value,index)=>({angles:{right_elbow_joint:value},duration:[.65,.46,.85][index],actionIndex:0,actionId:'wave',phase:'action'}));
   const sample=t=>{const clock=new PerformanceClock(frames,{});clock.update(t);return clock.angles.right_elbow_joint;};
   const dt=.00001;
   for(const t of [.65,1.11]){
     const before=(sample(t)-2*sample(t-dt)+sample(t-2*dt))/(dt*dt);
     const after=(sample(t+2*dt)-2*sample(t+dt)+sample(t))/(dt*dt);
     assert(Math.abs(before-after)<.5,'Changing acceleration abruptly at '+t+' makes each beat look like a mechanical kick: '+before+' -> '+after);
   }
   const clock=new PerformanceClock(frames,{});let t=0;
   while(!clock.finished){clock.update(.001);t+=.001;const i=t<.65?0:t<1.11?1:2,from=i?values[i-1]:0,to=values[i];assert(clock.angles.right_elbow_joint>=Math.min(from,to)-1e-6&&clock.angles.right_elbow_joint<=Math.max(from,to)+1e-6,'Acceleration smoothing must stay within the authored endpoints');}
 }
});

test('greeting and presentation holds remain deliberate short pauses rather than dead time',()=>{
 const {PERFORMANCE_ACTIONS}=load('performance-library');
 let holds=0;
 for(const action of PERFORMANCE_ACTIONS)for(let i=1;i<action.frames.length;i++){
   const before=action.frames[i-1],frame=action.frames[i];
   if(JSON.stringify(before.angles)!==JSON.stringify(frame.angles))continue;
   holds++;assert(frame.duration>=.15&&frame.duration<=.3,action.id+' should acknowledge the pose briefly, not freeze for most of a second');
 }
 assert(holds>=4,'Keep authored greeting and presentation holds');
});

test('authored poses use real model limits, maintain both soles and avoid configured collision overlaps',async()=>{
 const THREE=req('three'),{GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js');
 const buffer=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));
 const model=(await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength),'')).scene;
 const {PoseChain}=load('pose-chain'),{buildRobotMapping}=load('robot-mapping'),{SafetyAnalyzer}=load('safety-analysis'),{G1_INTERACTION_CONFIG}=load('interaction-config');
 const pose=new PoseChain(model),mapping=buildRobotMapping(model,JSON.parse(fs.readFileSync(path.join(project,'assets/model-info.json'))).links),safety=new SafetyAnalyzer(model,mapping,pose,G1_INTERACTION_CONFIG);
 assert.equal(typeof pose.applyPerformancePose,'function','Provide a shared authored-pose path with support compensation');
 const {PERFORMANCE_ACTIONS}=load('performance-library');
 const leftAnchor=pose.movingFoot.getWorldPosition(new THREE.Vector3());
 for(const action of PERFORMANCE_ACTIONS)for(const [index,frame] of action.frames.entries()){
   for(const [name,value] of Object.entries(frame.angles)){assert(pose.joints.has(name),name);const range=pose.getInteractionRange(name);assert(value>=range.min&&value<=range.max,action.id+' '+name+' must not silently clamp');}
   pose.applyPerformancePose(frame.angles);
   assert(pose.supportFoot.getWorldPosition(new THREE.Vector3()).distanceTo(pose.supportAnchor)<1e-5,action.id+' support foot');
   assert(Math.abs(pose.movingFoot.getWorldPosition(new THREE.Vector3()).y-leftAnchor.y)<.009,action.id+' left sole must remain planted');
   assert.deepEqual(safety.evaluate().collisions.filter(c=>c.state==='overlap').map(c=>c.id),[],action.id+' frame '+index+' must clear finite collision proxies');
 }
 for(const first of PERFORMANCE_ACTIONS)for(const second of PERFORMANCE_ACTIONS){
   const from=first.frames.at(-1).angles,to=second.frames[0].angles;
   for(const t of [.25,.5,.75]){
     const angles=Object.fromEntries([...new Set([...Object.keys(from),...Object.keys(to)])].map(key=>[key,(from[key]??0)*(1-t)+(to[key]??0)*t]));
     pose.applyPerformancePose(angles);
     assert.deepEqual(safety.evaluate().collisions.filter(c=>c.state==='overlap').map(c=>c.id),[],first.id+' -> '+second.id+' at '+t);
   }
 }
 // Curved, time-based paths must pass the same checks as the endpoints/chords.
 const {PerformanceClock,buildPerformanceTimeline}=load('performance-player');
 for(const first of PERFORMANCE_ACTIONS)for(const second of PERFORMANCE_ACTIONS){
   const clock=new PerformanceClock(buildPerformanceTimeline([first.id,second.id],'lively'),{});
   while(!clock.finished){
     clock.update(.07);pose.applyPerformancePose(clock.angles);
     for(const [name,value] of Object.entries(clock.angles)){const range=pose.getInteractionRange(name);assert(value>=range.min-1e-7&&value<=range.max+1e-7,first.id+' -> '+second.id+' '+name+' must not overshoot');}
     assert(pose.supportFoot.getWorldPosition(new THREE.Vector3()).distanceTo(pose.supportAnchor)<1e-5,'Spline support anchor');
     assert(Math.abs(pose.movingFoot.getWorldPosition(new THREE.Vector3()).y-leftAnchor.y)<.009,'Spline keeps left sole planted');
     assert.deepEqual(safety.evaluate().collisions.filter(c=>c.state==='overlap').map(c=>c.id),[],first.id+' -> '+second.id+' at '+clock.progress);
   }
 }
 pose.reset();assert(Object.values(pose.getPerformancePose()).every(v=>Math.abs(v)<1e-5));
});
