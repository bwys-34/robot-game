const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),r=createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput,DriveActivationInput}=require('../demos/g1/src/drive-input.ts');
const {driveActionFrames}=require('../demos/g1/src/drive-actions.ts');
const pad=()=>({id:'standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))});

test('RB changes mode only on an unmodified release, leaving time for a performance chord',()=>{
 const i=new DriveInput(),p=pad();i.arm(p);i.read([p],true);
 p.buttons[5].pressed=true;assert(!i.read([p],true,'performance').command.cycleMode);
 p.buttons[5].pressed=false;assert.equal(i.read([p],true,'performance').command.cycleMode,true);
 assert(!i.read([p],true,'performance').command.cycleMode);
});
test('four performance chords trigger distinct dances once without leaking normal buttons or changing mode',()=>{
 for(const [button,id]of [[0,'dance'],[1,'robotdance'],[2,'armdance'],[3,'cheerdance']]){
  const i=new DriveInput(),p=pad();i.arm(p);i.read([p],true);
  p.buttons[5].pressed=true;i.read([p],true,'performance');p.buttons[button].pressed=true;
  const c=i.read([p],true,'performance').command;assert.equal(c.actionTrigger,id);assert(!c.stop&&!c.wave&&!c.invite&&!c.camera&&!c.cycleMode);
  assert.equal(i.read([p],true,'performance').command.actionTrigger,undefined);
  p.buttons[5].pressed=false;const released=i.read([p],true,'performance').command;assert(!released.cycleMode&&!released.stop&&!released.camera);
  p.buttons[button].pressed=false;i.read([p],true,'performance');
 }
});
test('RB chords work in locomotion without leaking B, and LT keeps priority over RB',()=>{
 let now=1000;const i=new DriveInput(()=>now),p=pad();i.arm(p);i.read([p],true);
 p.buttons[5].pressed=true;p.buttons[1].pressed=true;let c=i.read([p],true,'locomotion').command;assert(!c.stop);assert.equal(c.actionTrigger,'robotdance');
 p.buttons[5].pressed=false;c=i.read([p],true,'locomotion').command;assert(!c.stop&&!c.cycleMode);
 p.buttons[1].pressed=false;i.read([p],true);p.buttons[6].pressed=true;i.read([p],true,'performance');now+=650;p.buttons[5].pressed=true;p.buttons[1].pressed=true;
 c=i.read([p],true,'performance').command;assert.equal(c.mode,'damp');assert.equal(c.actionTrigger,undefined);
});
test('A activation requires a fresh unmodified press and release after focus loss',()=>{
 assert.equal(typeof DriveActivationInput,'function');
 const i=new DriveActivationInput(),p=pad();assert.equal(i.read([p],true,true),false);
 p.buttons[0].pressed=true;assert.equal(i.read([p],true,true),true);assert.equal(i.read([p],true,true),false);
 i.block();assert.equal(i.read([p],false,true),false);assert.equal(i.read([p],true,true),false);
 p.buttons[0].pressed=false;i.read([p],true,true);p.buttons[0].pressed=true;assert.equal(i.read([p],true,true),true);
 p.buttons[0].pressed=false;i.read([p],true,true);p.buttons[5].pressed=true;p.buttons[0].pressed=true;assert.equal(i.read([p],true,true),false);
 p.buttons[5].pressed=false;assert.equal(i.read([p],true,true),false,'Releasing RB while holding A must not start');
});
test('A seen while playing or reconnecting cannot later become a stale resume',()=>{
 assert.equal(typeof DriveActivationInput,'function');
 const i=new DriveActivationInput(),p=pad();p.buttons[0].pressed=true;
 assert.equal(i.read([p],true,false),false);assert.equal(i.read([p],true,true),false);
 i.block();i.read([],true,true);assert.equal(i.read([p],true,true),false);
 p.buttons[0].pressed=false;i.read([p],true,true);p.buttons[0].pressed=true;assert.equal(i.read([p],true,true),true);
});
test('all four dance clips contain finite distinct authored trajectories',()=>{
 const clips=['dance','robotdance','armdance','cheerdance'].map(id=>driveActionFrames(id));
 for(const frames of clips){assert(frames.length>=6);assert(frames.every(f=>f.duration>0&&Object.values(f.angles).every(Number.isFinite)));}
 assert.equal(new Set(clips.map(frames=>JSON.stringify(frames))).size,4);
});
