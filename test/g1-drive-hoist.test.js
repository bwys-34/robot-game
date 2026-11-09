const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),esbuild=createRequire(path.join(project,'package.json'))('esbuild');
require.extensions['.ts']=(m,f)=>m._compile(esbuild.transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,f);
const {DriveState}=require('../demos/g1/src/drive-state.ts');
const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const site={x:-1.25,z:-1.5};
function run(s,seconds,command={}){for(let i=0;i<Math.ceil(seconds*60);i++)s.update(1/60,{...N,...command});}
function atSite(){const s=new DriveState({experience:'free',obstacles:[]});s.start();Object.assign(s,site);run(s,1);return s;}
function attach(){const s=atSite();s.update(1/60,{...N,hoistAction:true});run(s,1.4);assert.equal(s.hoist.phase,'supported');return s;}
test('the hoist station alone never protects an unattached robot',()=>{
 const s=atSite();assert(s.hoist.ready);assert.equal(s.hoist.supported,false);
 s.setMode('damp');assert.equal(s.body,'falling');assert.equal(s.falls,1);
});
test('explicit attachment requires location, stable dwell and an upright active pose',()=>{
 const s=new DriveState({experience:'free',obstacles:[]});s.start();s.update(1/60,{...N,hoistAction:true});assert.equal(s.hoist.phase,'detached');
 Object.assign(s,site);s.update(1/60,{...N,hoistAction:true});assert.equal(s.hoist.phase,'detached');
 run(s,1,{turn:.5});assert(!s.hoist.ready);run(s,1.5);assert(s.hoist.ready);
 s.update(1/60,{...N,hoistAction:true});assert.equal(s.hoist.phase,'attaching');assert(!s.hoist.supported);
 s.setMode('zero');assert.equal(s.mode,'stand');assert.equal(s.body,'upright');
 run(s,1.4);assert(s.hoist.supported);assert.equal(s.hoist.phase,'supported');
});
test('attached damping and zero torque preserve support, movement and gestures cannot escape it',()=>{
 const s=attach(),position=[s.x,s.z,s.yaw];
 for(const mode of ['damp','zero','debug','damp','stand']){s.setMode(mode);run(s,.6);assert.equal(s.body,'upright',mode);assert.equal(s.mode,mode);assert(s.hoist.supported);}
 s.setMode('locomotion');run(s,1,{forward:1,turn:1,wave:true});assert.deepEqual([s.x,s.z,s.yaw],position);assert.equal(s.mode,'stand');assert.equal(s.gesture,null);assert.equal(s.falls,0);
 s.update(1/60,{...N,stepping:true});assert.equal(s.stepping,false);
});
test('detach requires active standing, lowers before release, and restores deliberate driving',()=>{
 const s=attach();s.setMode('zero');run(s,.2);s.update(1/60,{...N,hoistAction:true});assert.equal(s.hoist.phase,'supported');
 s.setMode('stand');run(s,.6);s.update(1/60,{...N,hoistAction:true});assert.equal(s.hoist.phase,'releasing');
 s.setMode('damp');assert.equal(s.mode,'stand');assert.equal(s.body,'upright');run(s,1);assert.equal(s.hoist.phase,'detached');assert(!s.hoist.supported);
 const z=s.z;s.setMode('locomotion');run(s,.1);run(s,1,{forward:1});assert(s.z<z-.1);assert.equal(s.body,'upright');
});
test('pause freezes attachment and resuming does not manufacture an unsupported fall',()=>{
 const s=atSite();s.update(1/60,{...N,hoistAction:true});run(s,.3);s.suspend();const progress=s.hoist.progress;
 run(s,3);assert.equal(s.hoist.progress,progress);s.start();run(s,1.5);s.setMode('zero');s.suspend();run(s,1);s.start();assert.equal(s.body,'upright');assert(s.hoist.supported);
});
test('changing experiences and reset remove stale support; old free mode damping still falls',()=>{
 const s=attach();s.setExperience('mission');assert(!s.hoist.supported);assert.equal(s.hoist.phase,'detached');s.start();s.setMode('damp');assert.equal(s.body,'falling');
 s.reset();assert.equal(s.hoist.phase,'detached');assert.equal(s.body,'upright');
});
test('suspension validity is checked even if position is moved externally',()=>{
 const s=attach();s.setMode('zero');s.x+=1;run(s,.1);assert(!s.hoist.supported);assert.equal(s.body,'falling');
});
test('a completed circuit requires both passive modes and an explicit standing release',()=>{
 const s=attach();s.setMode('stand');run(s,.5);assert(!s.hoist.completed);
 s.setMode('damp');run(s,.8);s.setMode('zero');run(s,.8);s.setMode('stand');run(s,.6);s.update(1/60,{...N,hoistAction:true});run(s,1);
 assert(s.hoist.completed);assert.equal(s.falls,0);s.reset();assert(!s.hoist.completed);
});
