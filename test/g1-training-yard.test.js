const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DRIVE_SPACES,DRIVE_CONFIG,DRIVE_COURT_OBSTACLES}=require('../demos/g1/src/drive-config.ts');
const {DriveCourse}=require('../demos/g1/src/drive-course.ts');
const {DriveShow,SHOW_CONFIG}=require('../demos/g1/src/drive-show.ts');
function tick(t,s,seconds=1){for(let i=0;i<Math.ceil(seconds*60);i++)t.update(1/60,s);}
function boarded(){
 const t=new DriveShow(),s={experience:'show',running:true,paused:false,body:'upright',needsNeutral:false,mode:'stand',gesture:null,x:6.3,z:8.25,yaw:Math.PI,distance:0,speed:0,angular:0,falls:0,seconds:0,hoist:{phase:'detached',locked:false,supported:false},stageTransport:{phase:'boarding',onstage:false,restored:false,carrying:true}};
 t.step='board';tick(t,s,.1);Object.assign(s.stageTransport,{phase:'onstage',onstage:true,carrying:false});tick(t,s,.1);assert.equal(t.step,'position');return {t,s};
}
function move(t,s,p){const dx=p.x-s.x,dz=p.z-s.z,d=Math.hypot(dx,dz),n=Math.ceil(d/.006);for(let i=0;i<n;i++){s.x+=dx/n;s.z+=dz/n;s.distance+=d/n;s.speed=.36;t.update(1/60,s);}s.speed=0;}
test('expanded courtyard contains six solid training pillars and retains the original buildings',()=>{
 const c=DRIVE_SPACES.courtyard;assert.equal(c.maxX-c.minX,20);assert.equal(c.maxZ-c.minZ,16);
 assert.equal(DRIVE_COURT_OBSTACLES.filter(o=>o.id==='训练立柱').length,6);
 assert.equal(DRIVE_SPACES.door.x,3.2);assert(DRIVE_CONFIG.room.minX<=c.minX&&DRIVE_CONFIG.room.maxX>=c.maxX);
});
test('course levels use real openings of decreasing width and include a corner instead of reverse parking',()=>{
 const t=new DriveCourse();let previous=Infinity;
 for(const level of ['practice','exam','advanced']){t.level=level;const c=t.layout;assert(c.corner?.length>=3,'L turn must be part of the ordered route');assert(c.gateWidth<previous);previous=c.gateWidth;assert(!('reverse' in c),'standalone reverse parking removed');}
});
test('being carried onto the stage and standing still cannot complete the new positioning exercise',()=>{
 const {t,s}=boarded();s.mode='performance';s.stageTransport.restored=true;tick(t,s,2);assert.equal(t.step,'position');
});
test('stage positioning requires preparation then real backward travel; forward or lateral arrival cannot substitute',()=>{
 for(const style of ['forward','lateral','backward']){
  const {t,s}=boarded();assert(SHOW_CONFIG.prepare,'stage must expose a preparation point');s.mode='locomotion';s.stageTransport.restored=true;
  move(t,s,SHOW_CONFIG.prepare);s.yaw=Math.PI;tick(t,s,.8);
  s.yaw=style==='forward'?0:style==='lateral'?Math.PI/2:Math.PI;move(t,s,SHOW_CONFIG.stage);s.yaw=Math.PI;tick(t,s,1.3);
  assert.equal(t.step,style==='backward'?'perform':'position',style);
 }
});
test('teleporting or moving during pause cannot earn stage backward positioning credit',()=>{
 for(const style of ['teleport','paused']){
  const {t,s}=boarded();assert(SHOW_CONFIG.prepare);s.mode='locomotion';s.stageTransport.restored=true;move(t,s,SHOW_CONFIG.prepare);tick(t,s,.8);
  if(style==='paused'){s.paused=true;move(t,s,SHOW_CONFIG.stage);s.paused=false;}else Object.assign(s,{x:SHOW_CONFIG.stage.x,z:SHOW_CONFIG.stage.z});
  tick(t,s,2);assert.equal(t.step,'position');
 }
});
test('reception includes the courtyard column route before returning through the gallery exit',()=>{
 const {RECEPTION_CONFIG:c}=require('../demos/g1/src/drive-reception.ts');
 assert(c.route.length>4);assert(c.route.some(p=>p.z>6));assert(c.route.at(-1).z<0);
});
test('reception parking still plays its success cue after the longer route',()=>{
 const {DriveSoundTracker}=require('../demos/g1/src/drive-audio.ts'),{RECEPTION_CONFIG:c}=require('../demos/g1/src/drive-reception.ts');
 const a=new DriveSoundTracker(),s={running:true,paused:false,experience:'reception',mode:'locomotion',speedMode:'slow',body:'upright',stage:'walk',gesture:null,contact:'',reception:{step:'route',routeIndex:c.route.length-1}};
 a.update(s,[]);s.reception.step='park';assert(a.update(s,[]).some(e=>e.cue==='success'));
});

test('stage approach tolerates discrete keyboard movement and coasting around the guide pillars',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 for(const hz of [10,20,30,60]){
  const s=new DriveState({experience:'show'});s.start();s.setMode('locomotion');s.speedMode='fast';s.x=6.8;s.z=1.4;s.yaw=Math.PI;s.show.step='route';s.show.routeIndex=1;
  for(let iteration=0;iteration<4000&&s.show.step==='route';iteration++){
   const t=s.target,dx=t.x-s.x,dz=t.z-s.z,d=Math.hypot(dx,dz),command={...N,strafe:Math.abs(dx)>.045?Math.sign(dx):0,forward:Math.abs(dz)>.045?-Math.sign(dz):0};
   for(const [seconds,input] of [[d<.6?.025:.07,command],...(d<.6?[[.065,N]]:[])])for(let frame=0;frame<Math.ceil(seconds*hz);frame++){
    s.update(1/hz,input);
    assert.equal(s.body,'upright',`${hz}Hz: ${s.contact} at ${s.x},${s.z}, route ${s.show.routeIndex}`);
   }
  }
  assert.equal(s.show.step,'board',`${hz}Hz keyboard route must reach the stage pickup: ${s.show.routeIndex} at ${s.x},${s.z}`);
 }
});
