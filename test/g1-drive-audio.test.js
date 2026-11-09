const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const source=path.resolve('demos/g1/src/drive-audio.ts');
function tracker(){assert(fs.existsSync(source),'Driving sound feedback is not implemented');return new (require(source).DriveSoundTracker)();}
const idle={running:false,paused:false,mode:'locomotion',speedMode:'slow',body:'upright',stage:'walk',experience:'free',gesture:null,contact:''};
test('sound feedback is edge-triggered, not emitted on every input/render poll',()=>{
 const t=tracker(),s={...idle};assert.deepEqual(t.update(s,[]),[]);
 s.running=true;assert.deepEqual(t.update(s,[]).map(e=>e.cue),['ready']);
 for(let i=0;i<120;i++)assert.equal(t.update(s,[]).length,0);
 s.mode='stand';assert.deepEqual(t.update(s,[]).map(e=>e.cue),['mode']);
 assert.equal(t.update(s,[]).length,0);s.speedMode='fast';assert.deepEqual(t.update(s,[]).map(e=>e.cue),['speed']);
 s.gesture='wave';assert.deepEqual(t.update(s,[]).map(e=>e.cue),['action']);
});
test('only real landing events produce footsteps; pause, falling and reset discard them',()=>{
 const t=tracker(),s={...idle,running:true};t.update(s,[]);
 const foot={side:'left',strength:.5};assert.deepEqual(t.update(s,[foot]),[{cue:'footstep',...foot}]);
 assert.equal(t.update(s,[]).length,0);
 s.paused=true;assert.deepEqual(t.update(s,[foot]).map(e=>e.cue),['pause']);assert.equal(t.update(s,[foot]).length,0);
 s.paused=false;s.body='falling';s.mode='zero';assert.deepEqual(t.update(s,[foot]).map(e=>e.cue),['warning']);
 s.running=false;s.stage='walk';assert.equal(t.update(s,[foot]).filter(e=>e.cue==='footstep').length,0);
});
test('mission progression rewards once, resetting or free play cannot replay success',()=>{
 const t=tracker(),s={...idle,running:true,experience:'mission'};t.update(s,[]);
 for(const stage of ['turn','stand','damp','recover','perform','complete']){s.stage=stage;assert.deepEqual(t.update(s,[]).map(e=>e.cue),['success']);assert.equal(t.update(s,[]).length,0);}
 s.stage='walk';assert.equal(t.update(s,[]).length,0);
 s.experience='free';s.stage='complete';assert.equal(t.update(s,[]).length,0);
});
test('collision warnings do not repeat while staying against the same obstacle',()=>{
 const t=tracker(),s={...idle,running:true};t.update(s,[]);s.contact='展台';assert.deepEqual(t.update(s,[]).map(e=>e.cue),['warning']);
 for(let i=0;i<200;i++)assert.equal(t.update(s,[]).length,0);
 s.contact='';t.update(s,[]);s.contact='展台';assert.equal(t.update(s,[])[0].cue,'warning');
});
