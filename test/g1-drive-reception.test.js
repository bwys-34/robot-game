const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveState}=require('../demos/g1/src/drive-state.ts');
const {RECEPTION_CONFIG}=require('../demos/g1/src/drive-reception.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
function tick(s,seconds,c=N,hz=60){for(let i=0;i<Math.ceil(seconds*hz);i++)s.update(1/hz,c);}
function create(){const s=new DriveState({experience:'reception'});s.start();return s;}
function navigate(s,until,hz=60){
 for(let i=0;i<120*hz&&s.reception.step!==until;i++){
  assert.equal(s.body,'upright',s.contact);
  const target=s.target,e=Math.atan2(Math.sin(Math.atan2(target.x-s.x,target.z-s.z)-s.yaw),Math.cos(Math.atan2(target.x-s.x,target.z-s.z)-s.yaw));
  s.update(1/hz,{...N,turn:Math.abs(e)>.025?Math.max(-.6,Math.min(.6,e*2-s.angular*.35)):0,forward:s.reception.step!=='face'&&s.targetDistance>target.radius*.35&&Math.abs(e)<.12?1:0});
 }
 assert.equal(s.reception.step,until);
}
function ready(s,hz=60){navigate(s,'face',hz);navigate(s,'greet',hz);s.setMode('stand');tick(s,.8,N,hz);}
test('reception requires actual obstacle navigation, precision parking, facing and a completed greeting at 30/60Hz',()=>{
 for(const hz of [30,60]){
  const s=create();assert.equal(s.reception.step,'route');ready(s,hz);assert.equal(s.falls,0);
  s.update(1/hz,{...N,actionTrigger:'wave'});assert.equal(s.gesture,'wave');assert.equal(s.reception.step,'greet');
  s.finishGesture('wave');assert.equal(s.reception.step,'complete');assert.equal(s.score,s.reception.score);assert(s.score>=85);assert.equal(s.stars,3);
  const score=s.score,result={...s.reception.result};s.finishGesture('wave');tick(s,2,N,hz);assert.equal(s.score,score);
  s.setMode('damp');tick(s,2,N,hz);assert.equal(s.score,score);assert.deepEqual(s.reception.result,result,'Post-result falls do not rewrite the completed attempt');
 }
});
test('paused/teleported/incorrect-mode observations cannot earn route credit; free and tutorial remain separate',()=>{
 const s=create();Object.assign(s,{x:s.target.x,z:s.target.z});tick(s,2);assert.equal(s.reception.step,'route');
 s.suspend();tick(s,2,{...N,forward:1});assert.equal(s.reception.progress,0);
 s.reset();s.start();s.setMode('stand');tick(s,1);assert.equal(s.reception.step,'route');
 s.setExperience('free');s.start();tick(s,2);assert.equal(s.score,0);assert.equal(s.reception.step,'route');assert.equal(s.hoistAvailable,true);
 s.setExperience('mission');assert.equal(s.stage,'walk');assert.equal(s.reception.step,'route');
});
test('moving outside reception revokes parking/facing, preserves route and rejects old action completion',()=>{
 const s=create();ready(s);s.update(.02,{...N,actionTrigger:'wave'});s.setMode('locomotion');tick(s,.1);
 tick(s,3,{...N,forward:-1});assert.equal(s.reception.step,'park');s.finishGesture('wave');assert.notEqual(s.reception.step,'complete');
 assert.equal(s.reception.routeComplete,true);
});
test('wrong, cancelled, paused or wrong-facing gestures never complete reception',()=>{
 const s=create();ready(s);s.update(.02,{...N,actionTrigger:'dance'});s.finishGesture('dance');assert.equal(s.reception.step,'greet');
 s.update(.02,{...N,actionTrigger:'wave'});s.setMode('locomotion');s.finishGesture('wave');assert.equal(s.reception.step,'greet');
 s.setMode('stand');tick(s,.5);s.update(.02,{...N,actionTrigger:'bow'});s.suspend();s.finishGesture('bow');assert.equal(s.reception.step,'greet');
 s.start();s.gesture=null;tick(s,.5);s.yaw=0;tick(s,.1);assert.equal(s.reception.step,'face');
 s.update(.02,{...N,actionTrigger:'wave'});s.finishGesture('wave');assert.notEqual(s.reception.step,'complete');
});
test('falls permit recovery and resuming at the checkpoint; hints and falls affect only their score categories',()=>{
 const s=create();navigate(s,'park');s.setMode('damp');tick(s,1.7);assert.equal(s.body,'fallen');assert.equal(s.reception.routeComplete,true);
 s.recover();tick(s,2.5);s.setMode('locomotion');tick(s,.2);ready(s);s.reception.hint();s.reception.hint();
 s.update(.02,{...N,actionTrigger:'bow'});s.finishGesture('bow');assert.equal(s.reception.step,'complete');
 assert.equal(s.reception.breakdown.care,12);assert.equal(s.reception.breakdown.independent,6);
 const before=s.reception.score;s.reception.hint();assert.equal(s.reception.score,before,'Completed score is frozen');
 s.reset();assert.equal(s.reception.hints,0);assert.equal(s.reception.routeComplete,false);assert.equal(s.score,0);
});
test('the challenge exhibit is solid only in reception, with reachable corridors on each side',()=>{
 const s=create();tick(s,4,{...N,forward:1});assert.equal(s.fallCause,'collision');assert.equal(s.body,'fallen');assert.match(s.contact,/接待展台/);
 const f=new DriveState({experience:'free',obstacles:[]});f.start();tick(f,4,{...N,forward:1});assert.equal(f.body,'upright');
 assert(RECEPTION_CONFIG.parking.radius>.25);
});
test('route markers reward actually driving through without asking the visitor to stop',()=>{
 const s=create();
 for(let i=0;i<3600&&s.reception.routeIndex===0;i++){
  const t=s.target,e=Math.atan2(Math.sin(Math.atan2(t.x-s.x,t.z-s.z)-s.yaw),Math.cos(Math.atan2(t.x-s.x,t.z-s.z)-s.yaw));
  s.update(1/60,{...N,turn:Math.abs(e)>.025?Math.max(-.6,Math.min(.6,e*2-s.angular*.35)):0,forward:Math.abs(e)<.12?1:0});
 }
 assert.equal(s.reception.routeIndex,1);assert(s.speed>.1,'The waypoint should advance during movement');
});
test('challenge exhibit also participates in stunt clearance, and debug directs the visitor back to free play',()=>{
 const s=create();s.x=.65;s.z=-1.1;tick(s,.1);s.update(.02,{...N,actionTrigger:'backflip'});
 assert.equal(s.body,'upright');assert.equal(s.gesture,null);assert.match(s.message,/空间不足/);
 s.setMode('damp');tick(s,1.7);s.setMode('debug');assert.notEqual(s.mode,'debug');assert.match(s.message,/自由体验/);
});
