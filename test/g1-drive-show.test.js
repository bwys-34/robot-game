const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
function create(){
 const file=path.resolve('demos/g1/src/drive-show.ts');assert(fs.existsSync(file),'DriveShow must exist');
 const {DriveShow,SHOW_CONFIG}=require(file);return {task:new DriveShow(),config:SHOW_CONFIG,s:{experience:'show',running:true,paused:false,body:'upright',needsNeutral:false,mode:'stand',gesture:null,x:0,z:0,yaw:Math.PI,distance:0,speed:0,angular:0,falls:0,seconds:0,hoist:{phase:'detached',supported:false,locked:false}}};
}
function tick(t,s,n=1,hz=60){for(let i=0;i<Math.ceil(n*hz);i++){if(!s.paused)s.seconds+=1/hz;t.update(1/hz,s);}}
function drive(t,s,target,hz=60){
 for(let i=0;i<10000;i++){
  const dx=target.x-s.x,dz=target.z-s.z,d=Math.hypot(dx,dz);if(d<.001){s.speed=0;return;}
  const move=Math.min(.4/hz,d);s.x+=dx/d*move;s.z+=dz/d*move;s.distance+=move;s.speed=.4;t.update(1/hz,s);
 }assert.fail('navigation timed out');
}
function attach(t,s){s.hoist={phase:'attaching',supported:false,locked:true};tick(t,s,.1);s.hoist={phase:'supported',supported:true,locked:true};tick(t,s,.1);assert.equal(t.step,'program');}
function prepare(t,s,c,hz=60,actions=['dance','wave','dance']){
 attach(t,s);s.mode='damp';tick(t,s,.1,hz);s.mode='debug';tick(t,s,.1,hz);assert(t.saveProgram(actions,s));assert.equal(t.step,'release');
 s.mode='stand';s.hoist={phase:'releasing',supported:true,locked:true};tick(t,s,.1,hz);s.hoist={phase:'detached',supported:false,locked:false};tick(t,s,.1,hz);assert.equal(t.step,'route');
 s.mode='locomotion';for(const p of c.route)drive(t,s,p,hz);assert.equal(t.step,'position');drive(t,s,c.stage,hz);tick(t,s,1.2,hz);assert.equal(t.step,'perform');s.mode='performance';tick(t,s,.1,hz);
}
function act(t,s,action){s.gesture=action;t.startAction(action,s);t.update(.02,s);t.finishAction(action,s);s.gesture=null;}
test('stage challenge requires current-run attachment, a saved program, release, route and three completed acts at 30/60Hz',()=>{
 for(const hz of [30,60]){
  const {task:t,s,config:c}=create();prepare(t,s,c,hz);assert.deepEqual(t.program,['dance','wave','dance']);
  act(t,s,'dance');assert.equal(t.actionIndex,1);act(t,s,'wave');assert.equal(t.actionIndex,2);act(t,s,'dance');assert.equal(t.step,'complete');assert.equal(t.score,100);
  assert(Object.isFrozen(t.result));assert(Object.isFrozen(t.result.program));const result=t.result;s.falls=4;tick(t,s,2);assert.equal(t.result,result);assert.equal(t.score,100);t.suspend();assert.equal(t.progress,1);
 }
});
test('unsupported saves, invalid programs, previews and stage shortcuts never pass prerequisites',()=>{
 const {task:t,s,config:c}=create();s.mode='debug';assert.equal(t.saveProgram(['dance','wave','bow'],s),false);assert.equal(t.step,'hoist');
 s.hoist={phase:'supported',supported:true,locked:true};tick(t,s,.1);assert.equal(t.step,'hoist');s.hoist={phase:'detached',supported:false,locked:false};tick(t,s,.1);attach(t,s);
 assert.equal(t.saveProgram(['dance','bad','bow'],s),false);assert.equal(t.saveProgram(['dance'],s),false);
 t.startAction('dance',s);t.finishAction('dance',s);assert.equal(t.actionIndex,0);
 Object.assign(s,c.stage);tick(t,s,2);assert.equal(t.step,'program');
});
test('confirmed programs can be revised while still supported in debug without duplicating preparation credit',()=>{
 const {task:t,s}=create();attach(t,s);s.mode='debug';assert(t.saveProgram(['dance','wave','dance'],s));const score=t.score;
 const previous=t.program;assert(t.saveProgram(['bow','clap','wave','dance'],s));assert.deepEqual(t.program,['bow','clap','wave']);assert.equal(t.step,'release');assert.equal(t.score,score);assert.deepEqual(previous,['dance','wave','dance']);
 s.paused=true;assert.equal(t.saveProgram(['dance','dance','dance'],s),false);s.paused=false;s.hoist.supported=false;assert.equal(t.saveProgram(['dance','dance','dance'],s),false);assert.deepEqual(t.program,['bow','clap','wave']);
});
test('returning to the hoist starts fresh preparation and clears the old route and acts while retaining elapsed time and falls',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);act(t,s,'dance');assert.equal(t.actionIndex,1);const elapsed=t.elapsed;
 s.falls=1;s.mode='locomotion';drive(t,s,{x:6.8,z:-.8});attach(t,s);
 assert.equal(t.step,'program');assert.deepEqual(t.program,[]);assert.equal(t.actionIndex,0);assert.equal(t.routeIndex,0);assert(t.elapsed>elapsed);
 assert.deepEqual(t.breakdown,{preparation:0,route:0,positioning:0,performance:0,care:7});
 s.mode='debug';assert(t.saveProgram(['bow','wave','clap'],s));assert.equal(t.step,'release');s.mode='stand';s.hoist={phase:'releasing',supported:true,locked:true};tick(t,s,.1);s.hoist={phase:'detached',supported:false,locked:false};tick(t,s,.1);assert.equal(t.step,'route');assert.equal(t.routeIndex,0);
});
test('real binding Save and Restore buttons keep the confirmed show program synchronized, including blocked storage',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{DriveBindings}=require('../demos/g1/src/drive-bindings.ts'),{DriveBindingsPanel}=require('../demos/g1/src/drive-bindings-panel.ts');
 const {EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts'),{HOIST_CONFIG:H}=require('../demos/g1/src/drive-hoist.ts');
 const nodes=new Map(),oldDocument=global.document,oldOption=global.Option;
 class Element extends EventTarget {
  constructor(){super();this.disabled=false;this.value='';this.children=[];}
  set id(id){this._id=id;nodes.set(id,this);}get id(){return this._id;}
  append(...children){this.children.push(...children);}setAttribute(){}
  click(){assert.equal(this.disabled,false,'The intended control must be enabled');this.dispatchEvent(new Event('click'));}
 }
 global.document={getElementById(id){if(!nodes.has(id)){const element=new Element();element.id=id;}return nodes.get(id);},createElement(){return new Element();},querySelectorAll(){return [];}};
 global.Option=class {constructor(text,value){this.text=text;this.value=value;}};
 try{
  const s=new DriveState({experience:'show'}),b=new DriveBindings({getItem(){return null;},setItem(){throw Error('blocked');}});
  const run=seconds=>{for(let i=0;i<seconds*60;i++)s.update(1/60,N);};
  s.start();s.x=H.x;s.z=H.z;run(1);s.update(1/60,{...N,hoistAction:true});run(1.4);s.setMode('damp');s.setMode('debug');run(.2);s.debugTab='bindings';assert.equal(s.show.step,'program');
  const panel=new DriveBindingsPanel(b),edit=actions=>{actions.forEach((action,i)=>{const element=nodes.get(`binding-${['A','B','X','Y'][i]}`);element.value=action;element.dispatchEvent(new Event('change'));});panel.render(s);};panel.render(s);
  nodes.get('bindings-default').click();panel.render(s);assert.equal(s.show.step,'program','Restore alone must not confirm the first program');assert.deepEqual(s.show.program,[]);
  edit(['bow','clap','wave','dance']);nodes.get('bindings-save').click();panel.render(s);assert.equal(s.show.step,'release');assert.deepEqual(s.show.program,b.snapshot().slice(0,3));
  edit(['wave','dance','bow','clap']);nodes.get('bindings-save').click();panel.render(s);assert.deepEqual(s.show.program,['wave','dance','bow']);assert.deepEqual(s.show.program,b.snapshot().slice(0,3));
  nodes.get('bindings-default').click();panel.render(s);assert.equal(s.show.step,'release');assert.deepEqual(s.show.program,['dance','robotdance','armdance']);assert.deepEqual(s.show.program,b.snapshot().slice(0,3));
 }finally{if(oldDocument===undefined)delete global.document;else global.document=oldDocument;if(oldOption===undefined)delete global.Option;else global.Option=oldOption;}
});
test('wrong, interrupted, paused, hoisted and canceled actions cannot earn stage credit',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);act(t,s,'bow');assert.equal(t.actionIndex,0);
 s.gesture='dance';t.startAction('dance',s);s.paused=true;tick(t,s,.1);s.paused=false;t.finishAction('dance',s);assert.equal(t.actionIndex,0);
 s.gesture=null;tick(t,s,.1);s.gesture='dance';t.startAction('dance',s);s.gesture=null;tick(t,s,.1);s.gesture='dance';t.finishAction('dance',s);assert.equal(t.actionIndex,0);
 s.hoist.locked=true;act(t,s,'dance');assert.equal(t.actionIndex,0);s.hoist.locked=false;s.gesture=null;s.mode='locomotion';drive(t,s,{x:c.stage.x+1.1,z:c.stage.z});drive(t,s,c.stage);tick(t,s,1.2);s.mode='performance';act(t,s,'dance');assert.equal(t.actionIndex,1);
});
test('a paused stage action explains the lost credit until the correct act is replayed',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);s.gesture='dance';t.startAction('dance',s);
 t.suspend('pause');assert.match(t.retryMessage,/暂停.*未计入.*重演/);
 t.finishAction('dance',s);assert.equal(t.actionIndex,0);assert(t.retryMessage);
 act(t,s,'dance');assert.equal(t.actionIndex,1);assert.equal(t.retryMessage,'');
});
test('the round clock includes supported debug, excludes pauses and freezes with the stage result',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const s=new DriveState({experience:'show'});s.start();s.mode='debug';
 for(let i=0;i<120;i++)s.update(1/60,N);
 assert(Math.abs(s.seconds-2)<.001);assert.equal(s.seconds,s.show.elapsed);
 s.suspend();for(let i=0;i<60;i++)s.update(1/60,N);assert.equal(s.seconds,s.show.elapsed);assert(Math.abs(s.seconds-2)<.001);
});
test('initial show guidance passes the existing side door before pointing at the hoist',()=>{
 const {task:t,s,config:c}=create();assert.equal(t.target,c.hoistRoute[0]);s.mode='locomotion';
 for(const p of c.hoistRoute)drive(t,s,p);assert.equal(t.hoistRouteIndex,2);assert.equal(t.target.z,-.8);
});
test('rotating away on stage requires facing and holding again without discarding completed arrival',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);s.yaw=0;tick(t,s,.1);assert.equal(t.step,'position');
 s.yaw=Math.PI;tick(t,s,1.2);assert.equal(t.step,'perform');act(t,s,'dance');assert.equal(t.actionIndex,1);
});
test('teleporting while paused revokes stage position and cannot restore an action candidate',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);s.paused=true;s.x+=1;tick(t,s,.1);s.x=c.stage.x;tick(t,s,.1);s.paused=false;tick(t,s,1.2);
 assert.equal(t.step,'position');s.mode='performance';act(t,s,'dance');assert.equal(t.actionIndex,0);
});
test('departing or teleporting from stage revokes positioning but preserves completed acts; reset clears program',()=>{
 const {task:t,s,config:c}=create();prepare(t,s,c);act(t,s,'dance');s.mode='locomotion';drive(t,s,{x:c.stage.x+1.1,z:c.stage.z});assert.equal(t.step,'position');assert.equal(t.actionIndex,1);
 Object.assign(s,c.stage);tick(t,s,2);assert.equal(t.step,'position','teleport cannot qualify stage position');
 drive(t,s,{x:c.stage.x+1.1,z:c.stage.z});drive(t,s,c.stage);tick(t,s,1.2);assert.equal(t.step,'perform');s.mode='performance';act(t,s,'wave');act(t,s,'dance');assert.equal(t.step,'complete');
 t.reset();assert.equal(t.step,'hoist');assert.equal(t.program.length,0);assert.equal(t.actionIndex,0);assert.equal(t.result,null);
});
test('DriveState enables real hoist use in show and invalidates paused action candidates immediately',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts');const s=new DriveState({experience:'show'});assert(s.show,'DriveState must own the stage challenge');assert.equal(s.hoistAvailable,true);assert.equal(typeof s.saveShowProgram,'function');
 assert.equal(s.saveShowProgram(['wave','bow','dance']),false);s.setExperience('free');assert.equal(s.show.step,'hoist');
});
test('show traverses both doorways, attaches, saves, releases and finishes through DriveState at 30/60Hz',()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const update=(s,hz,seconds=1)=>{for(let i=0;i<seconds*hz;i++)s.update(1/hz,N);};
 const travel=(s,hz,until)=>{
  for(let frame=0;frame<360*hz&&!until();frame++){
   assert.equal(s.body,'upright',`${s.contact} at ${s.x},${s.z}`);
   const t=s.target,d=Math.hypot(t.x-s.x,t.z-s.z),position=s.show.step==='position'&&d<t.radius*.4;
   const yaw=position?Math.PI:Math.atan2(t.x-s.x,t.z-s.z),e=Math.atan2(Math.sin(yaw-s.yaw),Math.cos(yaw-s.yaw));
   s.update(1/hz,{...N,turn:Math.max(-.7,Math.min(.7,e*2-s.angular*.35)),forward:Math.abs(e)<.08&&d>t.radius*.3?Math.min(1,d*1.4):0});
  }assert(until(),`Failed to reach ${s.show.step}`);
 };
 for(const hz of [30,60]){
  const s=new DriveState({experience:'show'});s.start();s.speedMode='fast';travel(s,hz,()=>s.hoist.ready);s.showHoist(true);
  s.update(1/hz,{...N,hoistAction:true});update(s,hz,1.5);assert.equal(s.show.step,'program');
  s.setMode('damp');update(s,hz,.2);s.setMode('debug');update(s,hz,.2);assert(s.saveShowProgram(['dance','wave','dance','bow']));
  s.setMode('stand');update(s,hz,.7);s.update(1/hz,{...N,hoistAction:true});update(s,hz,1);assert.equal(s.show.step,'route');assert.equal(s.hoistContext,false);
  s.setMode('locomotion');update(s,hz,.1);travel(s,hz,()=>s.show.step==='perform');s.setMode('performance');update(s,hz,.1);
  s.update(1/hz,{...N,actionTrigger:'dance'});assert.equal(s.gesture,'dance');s.suspend();s.start();s.finishGesture('dance');assert.equal(s.show.actionIndex,0);
  for(const action of s.show.program){s.update(1/hz,{...N,actionTrigger:action});assert.equal(s.gesture,action);s.finishGesture(action);}
  assert.equal(s.show.step,'complete');assert.equal(s.falls,0);assert.equal(s.stars,3);assert.equal(s.score,100);
  const finished=s.seconds;assert.equal(s.show.result.elapsed,finished);update(s,hz,2);assert.equal(s.seconds,finished);
 }
});
