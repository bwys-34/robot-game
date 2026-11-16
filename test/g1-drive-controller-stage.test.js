const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput,DriveActivationInput}=require('../demos/g1/src/drive-input.ts');
const {DriveState}=require('../demos/g1/src/drive-state.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const pad=()=>({id:'desktop',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))});
function controls(profile='standard'){
 let now=0;const p=pad(),input=new DriveInput(()=>now,profile);input.arm(p);input.read([p],true);
 return {p,input,at(t){now=t;},button(i,value){p.buttons[i]={pressed:value,value:Number(value)};},read(playing=false,mode='locomotion'){return input.read([p],true,mode,playing).command;}};
}
function run(s,seconds,command={}){for(let i=0;i<Math.ceil(seconds*60);i++)s.update(1/60,{...N,...command});}
test('desktop START activates with a fresh unmodified edge and never reuses a held activation',()=>{
 const a=new DriveActivationInput(),p=pad();a.read([p],true,true);p.buttons[9].pressed=true;
 assert.equal(a.read([p],true,true),true);assert.equal(a.read([p],true,true),false);
 p.buttons[9].pressed=false;a.read([p],true,true);p.buttons[8].pressed=true;p.buttons[9].pressed=true;assert.equal(a.read([p],true,true),false);
});
test('double START cancels an active action even while RB is held, without leaking single click or stepping',()=>{
 const c=controls();c.button(5,true);c.read(true);c.button(9,true);assert(!c.read(true).toggleStand);c.button(9,false);c.at(100);c.read(true);
 c.at(220);c.button(9,true);const command=c.read(true);assert.equal(command.cancelAction,true);assert(!command.stepping&&!command.toggleStand);
 c.at(600);assert(!c.read(false).toggleStand);c.button(9,false);assert(!c.read(false).cycleMode);c.button(5,false);assert(!c.read(false).cycleMode);
});
test('desktop SELECT+B bows once and never pauses; Android keeps unavailable SELECT/START channels empty',()=>{
 const c=controls();c.button(8,true);c.button(1,true);assert.equal(c.read().actionTrigger,'bow');assert(!c.read().stop);
 const p={...pad(),id:'Xbox Wireless Controller',buttons:Array.from({length:16},(_,i)=>({pressed:false,value:i===6||i===7?.5:0}))};
 const a=new DriveInput(()=>0,'exhibition-android');a.arm(p);a.read([p],true);p.buttons[8]={pressed:true,value:1};p.buttons[1]={pressed:true,value:1};
 const command=a.read([p],true,'stand',true).command;assert.equal(command.mode,'damp');assert.equal(command.cancelAction,undefined);assert.equal(command.actionTrigger,undefined);
});
test('START long hold is not a double click and switching playback context drops a stale first tap',()=>{
 const c=controls();c.button(9,true);c.read(true);c.at(700);assert(!c.read(true).cancelAction&&!c.read(true).toggleStand);
 c.button(9,false);c.read(false);c.at(720);c.button(9,true);assert(!c.read(false).stepping);c.at(1100);assert.equal(c.read(false).toggleStand,true);
});
test('canceling an action requires smooth recovery and does not award a completion callback',()=>{
 const s=new DriveState({experience:'free',obstacles:[]});s.start();s.update(1/60,{...N,actionTrigger:'dance'});assert.equal(s.gesture,'dance');
 s.update(1/60,{...N,cancelAction:true});assert(s.canceling,'The state must expose a return transition');
 s.finishGesture('dance');assert.equal(s.gesture,'dance','A stale natural completion cannot finish cancellation');
 run(s,1,{forward:1,actionTrigger:'wave'});assert.equal(s.gesture,null);assert.equal(s.mode,'stand');assert.equal(s.canceling,false);assert.equal(s.distance,0);
});

test('idle desktop START toggles standing and walking, and double tap toggles stepping back to stand',()=>{
 const c=controls(),s=new DriveState({experience:'free',obstacles:[]});s.start();s.setMode('performance');run(s,.2);
 c.button(9,true);s.update(1/60,{...N,...c.read()});c.button(9,false);c.at(400);s.update(1/60,{...N,...c.read()});assert.equal(s.mode,'stand');
 c.at(700);c.button(9,true);c.read();c.at(800);c.button(9,false);c.read();c.at(900);c.button(9,true);s.update(1/60,{...N,...c.read()});assert.equal(s.stepping,true);
 c.button(9,false);c.read();c.at(1300);c.button(9,true);c.read();c.at(1400);c.button(9,false);c.read();c.at(1500);c.button(9,true);s.update(1/60,{...N,...c.read()});assert.equal(s.mode,'stand');assert.equal(s.stepping,false);
});

test('computer instructions identify the physical START and SELECT while Android keeps screen standing',()=>{
 const {controlGuide}=require('../demos/g1/src/drive-control-guide.ts');
 assert.match(controlGuide('standard','performance').copy,/SELECT.*鞠躬.*双击 START/);
 assert.match(controlGuide('standard','stand').copy,/START.*≡.*双击.*踏步/);
 assert.equal(controlGuide('standard','stand').cards.find(c=>c.id==='stand').keys,'START ≡');
 assert.equal(controlGuide('exhibition-android','stand').cards.find(c=>c.id==='stand').keys,'点击卡片');
 assert.doesNotMatch(controlGuide('exhibition-android','performance').copy,/START|SELECT/);
});
test('stage is blocked to ordinary walking; locked standing and a settled pickup are required to carry',()=>{
 const s=new DriveState({experience:'free'});assert(s.stageTransport,'Stage transport must be owned by DriveState');
 const {STAGE_CONFIG:C}=require('../demos/g1/src/drive-stage.ts');s.start();Object.assign(s,{x:C.pickup.x,z:C.pickup.z,yaw:0});
 run(s,1);s.update(1/60,{...N,stageAction:true});assert.equal(s.stageTransport.phase,'ground');assert.match(s.message,/锁定站立/);
 s.setMode('stand');run(s,1);s.update(1/60,{...N,stageAction:true});assert.equal(s.stageTransport.phase,'boarding');
 const x=s.x,z=s.z;s.setMode('zero');assert.equal(s.mode,'stand','Mode chords must not interrupt human carrying');
 s.suspend();run(s,1);assert.equal(s.x,x);assert.equal(s.z,z);s.start();run(s,4,{forward:1});
 assert.equal(s.stageTransport.phase,'onstage');assert(Math.abs(s.x-C.center.x)<.001&&Math.abs(s.z-C.center.z)<.001);assert.equal(s.stageTransport.height,C.height);assert.equal(s.distance,0);
 assert.equal(s.mode,'stand');s.update(1/60,{...N,actionTrigger:'dance'});assert.equal(s.gesture,null,'Must restore normal control after landing');
 s.setMode('performance');run(s,.2);s.update(1/60,{...N,actionTrigger:'dance'});assert.equal(s.gesture,'dance');assert.equal(s.falls,0);
});
test('holding a direction blocks carry and the step cannot be walked through',()=>{
 const s=new DriveState({experience:'free'});assert(s.stageTransport);const {STAGE_CONFIG:C}=require('../demos/g1/src/drive-stage.ts');
 s.start();Object.assign(s,{x:C.pickup.x,z:C.pickup.z,yaw:0});s.setMode('stand');run(s,1);
 s.update(1/60,{...N,stageAction:true,forward:1});assert.equal(s.stageTransport.phase,'ground');
 s.setMode('locomotion');run(s,.1);run(s,3,{forward:1});assert.equal(s.body,'fallen');assert.match(s.message,/舞台台阶/);assert.equal(s.stageTransport.phase,'ground');
});
test('A has carry context at the stage and SELECT+A still cannot carry; down carry returns to ground',()=>{
 const s=new DriveState({experience:'free'});assert(s.stageTransport);const {STAGE_CONFIG:C}=require('../demos/g1/src/drive-stage.ts');
 s.start();Object.assign(s,{x:C.pickup.x,z:C.pickup.z});s.setMode('stand');run(s,1);
 s.update(1/60,{...N,actionTrigger:'handshake'});assert.equal(s.stageTransport.phase,'ground');s.gesture=null;run(s,1);
 s.update(1/60,{...N,wave:true});assert.equal(s.stageTransport.phase,'boarding');run(s,4);Object.assign(s,C.exit);s.setMode('stand');run(s,1);s.update(1/60,{...N,stageAction:true});run(s,4);
 assert.equal(s.stageTransport.phase,'ground');assert.equal(s.stageTransport.height,0);assert.equal(s.mode,'stand');assert(Math.abs(s.z-C.pickup.z)<.001);
});

test('onstage A plays the selected performance after restoration, then standing A carries down',()=>{
 const {STAGE_CONFIG:C}=require('../demos/g1/src/drive-stage.ts'),s=new DriveState({experience:'free'});s.start();Object.assign(s,{x:C.pickup.x,z:C.pickup.z});s.setMode('stand');run(s,1);
 s.update(1/60,{...N,wave:true});run(s,4);s.setMode('performance');run(s,.2);s.update(1/60,{...N,wave:true});assert.equal(s.gesture,'wave');assert.equal(s.stageTransport.phase,'onstage');
 s.update(1/60,{...N,cancelAction:true});run(s,1.5);Object.assign(s,C.exit);run(s,1);s.update(1/60,{...N,wave:true});assert.equal(s.stageTransport.phase,'unboarding');
});

test('downstage transfer is beside the steps: center cannot carry down and the edge ring is the free-mode target',()=>{
 const {STAGE_CONFIG:C}=require('../demos/g1/src/drive-stage.ts');assert(C.exit,'A separate downstage transfer circle is required');
 const s=new DriveState({experience:'free'});s.start();Object.assign(s,{x:C.pickup.x,z:C.pickup.z});s.setMode('stand');run(s,1);s.update(1/60,{...N,wave:true});run(s,4);
 assert.deepEqual(s.target,C.exit);run(s,1);s.update(1/60,{...N,wave:true});assert.equal(s.stageTransport.phase,'onstage','Standing at center must not start carrying down');assert.match(s.message,/台阶.*光圈/);
 const deckEdge=C.center.z-C.depth/2;assert(C.exit.z>C.center.z-C.depth/2);assert(C.exit.z<C.center.z-1,'Exit belongs to the step side, not stage center');assert(C.exit.z-C.exit.radius>deckEdge,'Circle must be entirely on the upper deck');
 Object.assign(s,{x:C.exit.x,z:C.exit.z});run(s,1);s.update(1/60,{...N,wave:true});assert.equal(s.stageTransport.phase,'unboarding');run(s,4);
 assert.equal(s.stageTransport.phase,'ground');assert.equal(s.z,C.pickup.z);assert.equal(s.supportHeight,0);
});
