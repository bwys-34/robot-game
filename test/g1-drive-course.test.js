const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
function create(){
 const file=path.resolve('demos/g1/src/drive-course.ts');assert(fs.existsSync(file),'DriveCourse must exist');
 const {DriveCourse,COURSE_CONFIG}=require(file);
 return {task:new DriveCourse(),config:COURSE_CONFIG,s:{experience:'course',running:true,paused:false,body:'upright',needsNeutral:false,mode:'locomotion',gesture:null,x:0,z:0,yaw:Math.PI,distance:0,speed:0,angular:0,falls:0,seconds:0}};
}
function tick(t,s,n=1,hz=60){for(let i=0;i<Math.ceil(n*hz);i++)t.update(1/hz,s);}
function drive(t,s,target,hz=60,steer=true){
 if(steer&&t.step==='slalom')s.yaw=Math.atan2(target.x-s.x,target.z-s.z);
 for(let i=0;i<10000;i++){
  const dx=target.x-s.x,dz=target.z-s.z,d=Math.hypot(dx,dz);if(d<.001){s.speed=0;return;}
  const move=Math.min(.4/hz,d);s.x+=dx/d*move;s.z+=dz/d*move;s.distance+=move;s.speed=.4;t.update(1/hz,s);
 }
 assert.fail('navigation timed out');
}
function toParking(t,s,c,hz=60){
 drive(t,s,c.entry,hz);drive(t,s,c.approach,hz);for(const p of c.slalom)drive(t,s,p,hz);for(const p of c.gate)drive(t,s,p,hz);
 finishSide(t,s,c,hz);
 assert.equal(t.step,'reverse');drive(t,s,c.reverse,hz);s.yaw=c.heading;tick(t,s,1,hz);assert.equal(t.step,'park');
}
function finishSide(t,s,c,hz=60){assert.equal(t.step,'side');s.yaw=c.sideHeading;drive(t,s,c.side,hz);tick(t,s,.7,hz);}
function toGate(t,s,c,hz=60){drive(t,s,c.entry,hz);drive(t,s,c.approach,hz);for(const p of c.slalom)drive(t,s,p,hz);assert.equal(t.step,'gate');}
test('course requires the ordered route, backward parking and settled heading at 30/60Hz',()=>{
 for(const hz of [30,60]){
  const {task:t,s,config:c}=create();toParking(t,s,c,hz);assert.equal(t.index,5);
  drive(t,s,c.parking,hz);assert.equal(t.step,'park');tick(t,s,1.2,hz);
  assert.equal(t.step,'complete');assert.equal(t.index,6);assert(t.reverseDistance>=.45);assert.equal(t.score,100);
  assert(Object.isFrozen(t.result));const result=t.result,score=t.score;s.falls=5;tick(t,s,5,hz);assert.equal(t.result,result);assert.equal(t.score,score);t.suspend();assert.equal(t.progress,1);
 }
});
test('skipping a waypoint, teleporting and paused or non-driving travel cannot advance the course',()=>{
 const {task:t,s,config:c}=create();drive(t,s,c.slalom[1]);assert.equal(t.step,'approach');
 Object.assign(s,c.approach);tick(t,s,2);assert.equal(t.step,'approach');
 s.paused=true;drive(t,s,{x:0,z:4.1});drive(t,s,c.approach);s.paused=false;tick(t,s,2);assert.equal(t.step,'approach');
 s.mode='stand';drive(t,s,{x:0,z:4.1});drive(t,s,c.approach);tick(t,s,2);assert.equal(t.step,'approach');
});
test('parking requires real backward travel and restarts its hold after interruption',()=>{
 const {task:t,s,config:c}=create();toParking(t,s,c);s.yaw=0;drive(t,s,c.parking);s.yaw=Math.PI;tick(t,s,2);
 assert.equal(t.step,'park');assert(t.reverseDistance<.45);
 drive(t,s,c.reverse);drive(t,s,c.parking);tick(t,s,.6);s.paused=true;tick(t,s,.2);s.paused=false;tick(t,s,.6);assert.equal(t.step,'park');tick(t,s,.6);assert.equal(t.step,'complete');
});
test('falls preserve route checkpoints, reduce care only, and reset clears all task state',()=>{
 const {task:t,s,config:c}=create();drive(t,s,c.entry);drive(t,s,c.approach);const waypoint=t.waypointIndex;
 s.body='fallen';s.falls=1;tick(t,s,2);assert.equal(t.waypointIndex,waypoint);assert.equal(t.breakdown.care,12);
 s.body='upright';for(const p of c.slalom)drive(t,s,p);for(const p of c.gate)drive(t,s,p);finishSide(t,s,c);drive(t,s,c.reverse);tick(t,s,1);drive(t,s,c.parking);tick(t,s,1.2);
 assert.equal(t.step,'complete');assert.equal(t.score,92);t.reset();assert.equal(t.step,'approach');assert.equal(t.result,null);assert.equal(t.reverseDistance,0);assert.equal(t.elapsed,0);
});
test('the course guides through the gallery doorway before turning toward its starting line',()=>{
 const {task:t,s,config:c}=create();assert.deepEqual(t.target,c.entry);assert.equal(c.entry.x,0);assert(c.entry.z>3);
 drive(t,s,c.entry);assert.equal(t.step,'approach');assert.equal(t.waypointIndex,1);assert.deepEqual(t.target,c.approach);
});
test('fixed heading cannot clear the forward slalom just by reaching its circles',()=>{
 const {task:t,s,config:c}=create();drive(t,s,c.entry);drive(t,s,c.approach);
 for(const point of c.slalom)drive(t,s,point,60,false);
 assert.equal(t.step,'slalom');assert.equal(t.waypointIndex,0);
});
test('the side-shift exercise requires actual lateral motion and cannot be cleared by walking toward the target',()=>{
 const {task:t,s,config:c}=create();toGate(t,s,c);for(const point of c.gate)drive(t,s,point);
 s.yaw=Math.PI/2;drive(t,s,c.side);s.yaw=c.sideHeading;tick(t,s,1);
 assert.equal(t.step,'side');assert.match(t.skillNotice,/侧移不足/);
 drive(t,s,c.gate[1]);finishSide(t,s,c);assert.equal(t.step,'reverse');
});
test('a teleport during pause cannot reuse earlier driving credit after resuming',()=>{
 const {task:t,s,config:c}=create();drive(t,s,{x:0,z:1});s.paused=true;Object.assign(s,{x:c.entry.x,z:c.entry.z});tick(t,s,.1);s.paused=false;tick(t,s,1);
 assert.equal(t.step,'approach');assert.equal(t.waypointIndex,0);
});
test('circling either gate post cannot replace a crossing through the opening, and a retry cannot inflate route points',()=>{
 for(const hz of [30,60])for(const outsideX of [-2.7,.2]){
  const {task:t,s,config:c}=create();toGate(t,s,c,hz);const beforeEntry=t.breakdown.route;drive(t,s,c.gate[0],hz);assert.equal(t.waypointIndex,1);
  drive(t,s,{x:outsideX,z:c.gate[0].z},hz);drive(t,s,{x:outsideX,z:c.gate[1].z},hz);drive(t,s,c.gate[1],hz);
  assert.equal(t.step,'gate','the exit circle alone cannot pass the narrow gate');assert.equal(t.waypointIndex,0);assert.deepEqual(t.target,c.gate[0]);assert.equal(t.breakdown.route,beforeEntry);
  drive(t,s,{x:outsideX,z:c.gate[1].z},hz);drive(t,s,{x:outsideX,z:c.gate[0].z},hz);drive(t,s,c.gate[0],hz);drive(t,s,c.gate[1],hz);
  assert.equal(t.step,'side');finishSide(t,s,c,hz);assert.equal(t.breakdown.route,40);
 }
});
test('gate crossing uses the robot-radius inset, not just the visible space between posts',()=>{
 for(const crossingX of [-1.8,-.8]){
  const {task:t,s,config:c}=create();toGate(t,s,c);drive(t,s,c.gate[0]);drive(t,s,{x:crossingX,z:c.gate[0].z});drive(t,s,{x:crossingX,z:c.gate[1].z});drive(t,s,c.gate[1]);
  assert.equal(t.step,'gate');assert.equal(t.waypointIndex,0);
 }
});
test('DriveState exposes course target and score without granting hoist or debug access',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts');const state=new DriveState({experience:'course'});
 assert(state.course,'DriveState must own the course');assert.deepEqual(state.target,state.course.target);assert.equal(state.hoistAvailable,false);
 state.start();state.setMode('damp');state.setMode('debug');assert.notEqual(state.mode,'debug');state.setExperience('free');assert.equal(state.course.step,'approach');
});
test('debrief remembers the obstacle and pre-recoil location and suggests what to practise',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const {roundReview}=require('../demos/g1/src/drive-review.ts');
 const s=new DriveState({experience:'course',obstacles:[{id:'训练锥桶',x:-.3,z:-.8,width:.6,depth:.2}]});s.start();
 for(let i=0;i<120;i++)s.update(1/60,{...N,forward:1});
 assert.equal(s.impactCount,1);const hit=s.impacts[0];assert.equal(hit.obstacle,'训练锥桶');assert(hit.z<s.z);
 assert.match(roundReview(s).impacts,/碰撞 1 次.*训练锥桶.*m/);assert.match(roundReview(s).next,/松杆/);
 s.reset();assert.equal(s.impactCount,0);assert.equal(s.impacts.length,0);
});
test('the complete course is reachable with real steering and solid obstacles at 30/60Hz',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 for(const hz of [30,60])for(const level of ['practice','exam','advanced']){
  const s=new DriveState({experience:'course'});s.course.level=level;s.start();s.speedMode='fast';
  for(let frame=0;frame<480*hz&&s.course.step!=='complete';frame++){
   assert.equal(s.body,'upright',`${level}/${s.course.step}: Unexpected collision at ${s.x},${s.z}: ${s.contact}`);
   const t=s.target,d=Math.hypot(t.x-s.x,t.z-s.z),parking=s.course.step==='park',side=s.course.step==='side',orient=s.course.step==='reverse'&&d<t.radius*.4;
   const yaw=parking||orient||side?s.course.requiredHeading:Math.atan2(t.x-s.x,t.z-s.z),e=Math.atan2(Math.sin(yaw-s.yaw),Math.cos(yaw-s.yaw));
   const move=Math.abs(e)<.08&&d>t.radius*.3?Math.min(1,d*1.4):0;
   const dx=t.x-s.x,dz=t.z-s.z,strafe=side||parking?move*(-Math.cos(yaw)*dx+Math.sin(yaw)*dz)/Math.max(.001,d):0;
   const forward=side||parking?move*(Math.sin(yaw)*dx+Math.cos(yaw)*dz)/Math.max(.001,d):move;
   s.update(1/hz,{...N,turn:Math.max(-.7,Math.min(.7,e*2-s.angular*.35)),forward,strafe});
  }
  assert.equal(s.course.step,'complete',`${level} at ${s.x},${s.z} ${s.course.step}`);assert.equal(s.falls,0);assert(s.score>=85);assert.equal(s.stars,3);
  assert.equal(s.course.result.level,level);assert.equal(s.course.result.elapsed,s.seconds);
 }
});
