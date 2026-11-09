const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveState}=require('../demos/g1/src/drive-state.ts'),{DRIVE_CONFIG,EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
function advance(s,seconds,command=N,hz=60){for(let i=0;i<Math.ceil(seconds*hz);i++)s.update(1/hz,command);}
function lesson(){const s=new DriveState({experience:'mission',obstacles:[]});s.start();return s;}
function reachStand(s){
 for(let i=0;i<3600&&['walk','turn','park'].includes(s.stage);i++){
  const heading=Math.atan2(s.target.x-s.x,s.target.z-s.z),error=Math.atan2(Math.sin(heading-s.yaw),Math.cos(heading-s.yaw));
  const turn=Math.abs(error)>.035?Math.max(-.55,Math.min(.55,error*2)):0;
  const forward=s.stage!=='turn'&&s.targetDistance>s.target.radius*.65&&Math.abs(error)<.18?.85:0;
  s.update(1/60,{...N,forward,turn});
 }
 assert.equal(s.stage,'stand');
}
test('a wall impact falls once, freezes translation and requires recovery plus neutral',()=>{
 const s=new DriveState({experience:'free',obstacles:[]});s.start();s.z=DRIVE_CONFIG.room.minZ+DRIVE_CONFIG.radius+.03;
 advance(s,.9,{...N,forward:1});assert.notEqual(s.body,'upright');assert.equal(s.falls,1);assert.match(s.contact,/墙/);
 const location=[s.x,s.z];advance(s,2,{...N,forward:1});assert.equal(s.body,'fallen');assert.equal(s.falls,1);assert.deepEqual([s.x,s.z],location);
 s.setMode('locomotion');assert.equal(s.body,'fallen');s.recover();advance(s,2.4,N);assert.equal(s.body,'upright');assert.equal(s.mode,'stand');
 s.setMode('locomotion');const at=s.z;advance(s,.3,{...N,forward:1});assert.equal(s.z,at,'Held input cannot push into the wall immediately after recovery');
 advance(s,.1,N);advance(s,.8,{...N,forward:-1});assert(s.z>at+.08);assert.equal(s.body,'upright');
});
test('collision directions point back inside from all four walls at 30/60Hz',()=>{
 for(const hz of [30,60])for(const [axis,direction]of [['x',-1],['x',1],['z',-1],['z',1]]){
  const s=new DriveState({experience:'free',obstacles:[]});s.start();s.yaw=axis==='x'?direction*Math.PI/2:direction<0?Math.PI:0;
  const key=axis==='x'?(direction<0?'minX':'maxX'):(direction<0?'minZ':'maxZ');
  s[axis]=DRIVE_CONFIG.room[key]-direction*(DRIVE_CONFIG.radius+.025);advance(s,1.3,{...N,forward:1},hz);
  assert.equal(s.body,'fallen');const world=s.yaw+s.fallDirection;
  assert((axis==='x'?Math.sin(world):Math.cos(world))*direction<-.95,'The fall must recoil away from the wall');
 }
});
test('exhibit collision is latched, cancels gesture/stepping and pause freezes the fall',()=>{
 const s=new DriveState({experience:'free',obstacles:[{id:'展台',x:-.5,z:-.65,width:1,depth:.2}]});s.start();
 advance(s,1.8,{...N,forward:1});assert.equal(s.body,'fallen');assert.equal(s.gesture,null);assert.equal(s.stepping,false);
 const again=new DriveState({experience:'free',obstacles:[]});again.start();again.z=DRIVE_CONFIG.room.minZ+DRIVE_CONFIG.radius+.001;
 advance(again,.15,{...N,forward:1});assert.equal(again.body,'falling');again.suspend();const progress=again.bodyProgress;advance(again,1);assert.equal(again.bodyProgress,progress);
});
test('tutorial teaches movement, turn, stand, damping, recovery and a completed performance in order',()=>{
 const s=lesson();assert.equal(s.stage,'walk');
 s.setMode('performance');advance(s,.5);s.update(.02,{...N,actionTrigger:'dance'});s.finishGesture('dance');assert.equal(s.stage,'walk','Future actions cannot skip the lesson');
 s.setMode('locomotion');advance(s,.1);reachStand(s);
 s.setMode('stand');advance(s,.7);assert.equal(s.stage,'damp');
 s.setMode('damp');advance(s,1.7);assert.equal(s.stage,'recover');
 s.recover();advance(s,2.4);assert.equal(s.stage,'perform');assert.equal(s.body,'upright');
 s.setMode('performance');advance(s,.2);s.update(.02,{...N,actionTrigger:'robotdance'});assert.equal(s.gesture,'robotdance');assert.equal(s.stage,'perform');
 s.setMode('stand');s.finishGesture('robotdance');assert.equal(s.stage,'perform','Cancelled show cannot earn completion');
 s.setMode('performance');advance(s,.2);s.update(.02,{...N,actionTrigger:'dance'});s.finishGesture('dance');
 assert.equal(s.stage,'complete');assert.equal(s.score,100);assert.equal(s.stars,3);s.finishGesture('dance');assert.equal(s.score,100);
});
test('teleports, pause and free mode do not earn movement progress; reset clears the lesson',()=>{
 const s=lesson();s.x=1;s.z=-1;advance(s,.8);assert.equal(s.stage,'walk');assert.equal(s.tutorial.progress,0);
 s.suspend();advance(s,5,{...N,forward:1});assert.equal(s.tutorial.progress,0);s.start();advance(s,1.8,{...N,forward:1});assert(s.tutorial.progress>0);
 s.reset();assert.equal(s.stage,'walk');assert.equal(s.tutorial.progress,0);assert.equal(s.score,0);
 s.setExperience('free');s.start();advance(s,4,{...N,forward:1});assert.equal(s.stage,'walk');assert.equal(s.score,0);
});
