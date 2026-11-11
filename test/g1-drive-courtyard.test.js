const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DRIVE_CONFIG:C,DRIVE_SPACES:S,EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const {DriveState}=require('../demos/g1/src/drive-state.ts');
function run(s,t,command={}){for(let i=0;i<Math.ceil(t*60);i++)s.update(1/60,{...N,...command});}
test('courtyard extends the campus while original rooms and hoist corridors remain in place',()=>{
 assert(S.courtyard,'The two games need a connected outdoor courtyard');assert.equal(C.room.maxZ,11.2);
 assert.equal(S.gallery.maxZ,2.8);assert.equal(S.lab.maxZ,2.8);
 for(const x of [0,6.8]){const s=new DriveState({experience:'free'});s.start();Object.assign(s,{x,z:1.4,yaw:0,speedMode:'fast'});run(s,4,{forward:1});assert(s.z>4);assert.equal(s.body,'upright');}
});
test('front facade cannot be crossed outside its visible courtyard exits',()=>{
 const s=new DriveState({experience:'free'});s.start();Object.assign(s,{x:2,z:1.9,yaw:0,speedMode:'fast'});run(s,2,{forward:1});
 assert.equal(s.body,'fallen');assert(s.z<2.8);assert.match(s.message,/庭院隔墙/);
});
test('course cones and gate are tangible in free driving and stage remains clear for full-body actions',()=>{
 assert(C.obstacles.some(o=>o.id==='训练锥桶'),'Persistent physical cones');
 const s=new DriveState({experience:'free'});s.start();Object.assign(s,{x:-1.25,z:4.6,yaw:0,speedMode:'fast'});run(s,2,{forward:1});assert.equal(s.body,'fallen');
 const stage=new DriveState({experience:'free'});stage.start();Object.assign(stage,{x:6.3,z:8.25});run(stage,.2);stage.update(1/60,{...N,actionTrigger:'backflip'});assert.equal(stage.gesture,'backflip');
});
