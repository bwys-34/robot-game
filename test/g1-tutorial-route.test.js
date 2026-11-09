const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveState,angleDifference}=require('../demos/g1/src/drive-state.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
function advance(s,time,command=N,hz=60){for(let i=0;i<Math.ceil(time*hz);i++)s.update(1/hz,command);}
function lesson(){const s=new DriveState({experience:'mission'});s.start();return s;}
function approach(s,hz=60){
 const stage=s.stage;
 for(let i=0;i<hz*30&&s.stage===stage;i++){
  const heading=Math.atan2(s.target.x-s.x,s.target.z-s.z),error=angleDifference(heading,s.yaw);
  const turn=Math.abs(error)>.035?Math.max(-.55,Math.min(.55,error*2)):0;
  const forward=s.targetDistance>s.target.radius*.65&&Math.abs(error)<.18?.85:0;
  s.update(1/hz,{...N,turn,forward});
 }
 assert.notEqual(s.stage,stage,`Did not reach ${stage}: ${s.x},${s.z},${s.yaw}`);
}
function faceTarget(s,hz=60){
 for(let i=0;i<hz*12&&s.stage==='turn';i++){
  const error=angleDifference(Math.atan2(s.target.x-s.x,s.target.z-s.z),s.yaw);
  s.update(1/hz,{...N,turn:Math.abs(error)>.035?Math.max(-.55,Math.min(.55,error*2)):0});
 }
 assert.equal(s.stage,'park');
}
test('driving in the wrong direction cannot complete the first location task',()=>{
 const s=lesson();advance(s,4,{...N,forward:-1});advance(s,1.5);assert.equal(s.stage,'walk');
 assert.equal(s.score,0);assert(s.targetDistance>2);
});
test('passing through A without stopping does not count, then arrival dwell advances exactly once',()=>{
 const s=lesson();advance(s,8.7,{...N,forward:1});assert.equal(s.stage,'walk');
 assert(s.z<s.target.z-s.target.radius);assert.equal(s.tutorial.hold,0);
 approach(s);assert.equal(s.stage,'turn');assert.match(s.tutorial.notice,/A/);
 assert(s.tutorial.progress<1);assert(s.target.x>0,'Next target must be B, not the old reception circle');
});
test('actual A arrival, target-relative heading and precise B parking work at 30/60Hz',()=>{
 for(const hz of [30,60]){
  const s=lesson();approach(s,hz);assert.equal(s.stage,'turn');
  advance(s,.7,{...N,turn:1},hz);advance(s,.8,N,hz);assert.equal(s.stage,'turn','An arbitrary 45 degree turn cannot count');
  faceTarget(s,hz);assert(s.tutorial.notice.includes('朝向'));
  approach(s,hz);assert.equal(s.stage,'stand');assert(s.targetDistance<.36);assert(s.speed<.055);
  assert.equal(s.falls,0);assert.match(s.tutorial.notice,/B/);assert(s.seconds>12);
 }
});
test('arrival hold resets on leaving the circle and pausing; a teleport alone earns nothing',()=>{
 const s=lesson();s.x=s.target.x;s.z=s.target.z;advance(s,2);assert.equal(s.stage,'walk');assert.equal(s.score,0);
 const leaving=lesson();advance(leaving,5.1,{...N,forward:1});advance(leaving,.45);assert(leaving.tutorial.hold>0);
 advance(leaving,1.2,{...N,forward:-1});assert(leaving.targetDistance>leaving.target.radius);assert.equal(leaving.tutorial.hold,0);assert.equal(leaving.stage,'walk');
 const p=lesson();advance(p,5.1,{...N,forward:1});advance(p,.45);assert.equal(p.stage,'walk');assert(p.tutorial.hold>0);
 p.suspend();advance(p,2);assert.equal(p.tutorial.hold,0);p.start();advance(p,.4);assert.equal(p.stage,'walk');
 advance(p,.7);assert.equal(p.stage,'turn');
});
test('B must be reached in locomotion, and collision/recovery keeps the task without auto credit',()=>{
 const s=lesson();approach(s);faceTarget(s);s.setMode('stand');advance(s,2);assert.equal(s.stage,'park');
 s.setMode('locomotion');advance(s,.1);approach(s);assert.equal(s.stage,'stand');
 const f=lesson();advance(f,9,{...N,forward:-1});assert.equal(f.body,'fallen');assert.equal(f.stage,'walk');
 f.recover();advance(f,2.4);f.setMode('locomotion');advance(f,.1);approach(f);assert.equal(f.stage,'turn');
 f.reset();assert.equal(f.stage,'walk');assert.equal(f.tutorial.notice,'');assert.equal(f.score,0);
});
