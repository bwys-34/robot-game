const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveState}=require('../demos/g1/src/drive-state.ts');
const {DriveInput}=require('../demos/g1/src/drive-input.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const run=(s,t,c={})=>{for(let i=0;i<t*60;i++)s.update(1/60,{...N,...c});};
function attached(){const s=new DriveState({experience:'free',obstacles:[]});s.start();s.x=-1.25;s.z=-1.5;run(s,1);s.update(1/60,{...N,hoistAction:true});run(s,1.4);return s;}
test('Free experience owns the real station and debug requires attached passive support',()=>{
 const s=new DriveState({experience:'free',obstacles:[]});s.start();s.setMode('damp');s.setMode('debug');assert.equal(s.mode,'damp');
 const a=attached();assert(a.hoist.supported);a.setMode('debug');assert.equal(a.mode,'stand');a.setMode('damp');a.setMode('debug');assert.equal(a.mode,'debug');assert.equal(a.body,'upright');
 a.setExperience('mission');assert(!a.hoist.supported);
});
test('dance settings validate all slots, persist, recover from invalid/blocked storage and restore defaults',()=>{
 const {DriveBindings}=require('../demos/g1/src/drive-bindings.ts');let data='broken';const storage={getItem:()=>data,setItem:(_,v)=>{data=v;}};
 const b=new DriveBindings(storage);assert.equal(b.actionAt(0),'dance');assert.equal(b.save(['wave','clap','armdance','cheerdance']),true);assert.equal(new DriveBindings(storage).actionAt(0),'wave');
 assert.equal(b.save(['backdoor','clap','armdance','cheerdance']),false);assert.equal(b.actionAt(0),'wave');
 b.restore();assert.equal(new DriveBindings(storage).actionAt(0),'dance');
 const blocked=new DriveBindings({getItem(){throw Error('blocked');},setItem(){throw Error('full');}});assert.equal(blocked.save(['wave','clap','armdance','cheerdance']),false);assert.equal(blocked.actionAt(0),'wave','Session settings remain usable when saving is unavailable');
});
test('configured logical shortcuts work on both profiles without leaking pause or calibration',()=>{
 for(const profile of ['standard','exhibition-android']){
  const p={id:profile==='standard'?'standard':'Xbox Wireless Controller',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:profile==='standard'?17:16},()=>({pressed:false,value:0}))};
  if(profile!=='standard')p.buttons[6].value=p.buttons[7].value=.5;
  const input=new DriveInput(()=>0,profile,()=> 'wave');input.arm(p);input.read([p],true);
  p.buttons[profile==='standard'?5:9].pressed=true;p.buttons[1].pressed=true;
  const c=input.read([p],true,'performance').command;assert.equal(c.actionTrigger,'wave');assert.equal(c.stop,false);
  p.buttons.forEach(b=>b.pressed=false);input.read([p],true,'debug');p.buttons[0].pressed=true;
  const d=input.read([p],true,'debug').command;assert(d.labConfirm);assert.equal(d.actionTrigger,undefined);
 }
});
test('supported preview is separate from live actions, freezes on pause and clears on mode/reset',()=>{
 const s=attached();s.setMode('damp');s.setMode('debug');run(s,.2);s.previewDance('robotdance');assert.equal(s.debugPreview,'robotdance');assert.equal(s.gesture,null);
 const angles=s.lab.target;run(s,.3,{forward:1});assert.equal(s.lab.target,angles,'Calibration is frozen during preview');
 s.suspend();run(s,20);assert.equal(s.debugPreview,'robotdance');s.start();run(s,10);assert.equal(s.debugPreview,null);
 s.previewDance('wave');s.setMode('damp');assert.equal(s.debugPreview,null);s.reset();assert.equal(s.debugPreview,null);
});
