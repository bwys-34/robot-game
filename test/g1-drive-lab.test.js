const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput}=require('../demos/g1/src/drive-input.ts'),{DriveState}=require('../demos/g1/src/drive-state.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const pad=()=>({id:'standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))});
test('desktop triggers offer locomotion, locked stand and context-specific diagnostic/squat commands',()=>{
 let now=0;const p=pad(),i=new DriveInput(()=>now);i.arm(p);i.read([p],true);
 p.buttons[7].pressed=p.buttons[0].pressed=true;let c=i.read([p],true,'stand').command;
 assert.equal(c.mode,'locomotion');assert(!c.wave&&!c.stop);
 p.buttons.forEach(b=>b.pressed=false);i.read([p],true);p.buttons[6].pressed=true;i.read([p],true);now=1999;p.buttons[12].pressed=true;
 assert.equal(i.read([p],true).command.mode,undefined,'Hold LT for the documented two seconds before clicking');
 p.buttons[12].pressed=false;i.read([p],true);now=2050;p.buttons[12].pressed=true;assert.equal(i.read([p],true).command.mode,'stand');
 p.buttons[12].pressed=false;p.buttons[0].pressed=true;c=i.read([p],true,'locomotion').command;assert.equal(c.actionTrigger,'sit');assert(!c.diagnose);
 p.buttons[0].pressed=false;i.read([p],true,'debug');p.buttons[0].pressed=true;c=i.read([p],true,'debug').command;assert.equal(c.diagnose,true);assert.equal(c.actionTrigger,undefined);
});
test('Android observed shoulder chord enters debug once and releases without mode/speed leakage',()=>{
 let now=0;const p={...pad(),id:'Xbox Wireless Controller',buttons:Array.from({length:16},()=>({pressed:false,value:0}))};p.buttons[6].value=p.buttons[7].value=.5;
 const i=new DriveInput(()=>now,'exhibition-android');i.arm(p);i.read([p],true,'damp');p.buttons[8].pressed=p.buttons[9].pressed=true;i.read([p],true,'damp');now=850;
 let c=i.read([p],true,'damp').command;assert.equal(c.mode,'debug');assert(!c.stop&&!c.cycleMode);assert.equal(i.read([p],true,'debug').command.mode,undefined);
 p.buttons[9].pressed=false;c=i.read([p],true,'debug').command;assert(!c.cycleMode);p.buttons[8].pressed=false;c=i.read([p],true,'debug').command;assert.equal(c.speedMode,undefined);
 p.buttons[14].pressed=true;c=i.read([p],true,'debug').command;assert.equal(c.labStep,-1);assert.equal(c.actionStep,0);
});
test('lab uses bounded damped joint targets, explicit confirmation, stable precision and per-joint progress',()=>{
 const {DriveDebugLab,DEBUG_JOINTS}=require('../demos/g1/src/drive-debug-lab.ts'),lab=new DriveDebugLab();
 assert.equal(DEBUG_JOINTS.length,3);assert(DEBUG_JOINTS.every(j=>!j.joint.includes('neck')));
 lab.update(1/60,{...N,forward:1});assert(lab.target>lab.angle,'Servo should follow with damping');
 for(let t=0;t<240;t++)lab.update(1/60,{...N,forward:1});assert(lab.target<=lab.spec.max&&lab.angle<=lab.spec.max);
 lab.confirm();assert.equal(lab.completed.size,0,'Wrong pose never awards progress');
 for(const spec of DEBUG_JOINTS){lab.select(spec.id);for(let t=0;t<600&&Math.abs(lab.target-spec.goal)>.3;t++)lab.update(1/60,{...N,forward:Math.sign(spec.goal-lab.target)*spec.direction*.2});
  for(let t=0;t<90;t++)lab.update(1/60,N);lab.confirm();assert(lab.completed.has(spec.id));}
 assert.equal(lab.completed.size,3);const count=lab.completed.size;lab.confirm();assert.equal(lab.completed.size,count);
 lab.resetPose();assert.equal(lab.completed.size,3,'Pose reset keeps discovery progress');
 lab.reset();assert.equal(lab.completed.size,0);
});
test('debug entry uses virtual support, stops reception/movement, freezes on pause and exits through damping',()=>{
 const s=new DriveState({experience:'mission',obstacles:[]});s.start();s.setMode('debug');assert.equal(s.mode,'locomotion');
 s.setMode('damp');for(let t=0;t<100;t++)s.update(1/60,N);assert.equal(s.body,'fallen');s.setMode('debug');assert.equal(s.body,'recovering');
 for(let t=0;t<150;t++)s.update(1/60,N);assert.equal(s.mode,'debug');assert.equal(s.body,'upright');
 const before=[s.x,s.z,s.yaw,s.score,s.distance];for(let t=0;t<30;t++)s.update(1/60,{...N,forward:1,turn:1});
 assert.deepEqual([s.x,s.z,s.yaw,s.score,s.distance],before);assert(s.lab.target>s.lab.spec.rest);assert.equal(s.gesture,null);
 s.suspend();const angle=s.lab.angle;for(let t=0;t<60;t++)s.update(1/60,{...N,forward:1});assert.equal(s.lab.angle,angle);
 s.start();assert.equal(s.body,'upright','Starting debug again must keep virtual support');s.setMode('locomotion');assert.equal(s.mode,'debug','Exit lab through damping before locomotion');
 s.setMode('damp');assert.equal(s.body,'falling');
});
test('control cards are specific to selected profile and expose a debug entry and confirmation',()=>{
 const {controlGuide}=require('../demos/g1/src/drive-control-guide.ts');
 const pc=controlGuide('standard','locomotion'),screen=controlGuide('exhibition-android','locomotion');
 assert(pc.cards.some(c=>c.keys==='RT + A'&&c.command.mode==='locomotion'));
 assert(pc.cards.some(c=>c.keys==='LT + RT'&&c.command.mode==='debug'));
 assert(screen.cards.some(c=>c.keys==='LB + RB'&&c.command.mode==='debug'));
 assert(screen.cards.every(c=>!c.keys.includes('LT')&&!c.keys.includes('RT')));
 assert(controlGuide('standard','debug').copy.includes('LT + A'));
});
test('switching experiments preserves servo positions even when immediately returning to a moving joint',()=>{
 const {DriveDebugLab}=require('../demos/g1/src/drive-debug-lab.ts'),lab=new DriveDebugLab();
 for(let t=0;t<90;t++)lab.update(1/60,{...N,forward:1});const before=lab.angle;
 lab.select('shoulder');assert(Math.abs(lab.angleForJoint('right_elbow_joint')-before)<.001);
 lab.update(1/60,N);lab.select('elbow');assert(lab.angle>before-10,'Reselecting a joint must not snap it to rest');
});
