const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),esbuild=createRequire(path.join(project,'package.json'))('esbuild');
require.extensions['.ts']=(m,f)=>m._compile(esbuild.transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,f);
function modules(){return {...require('../demos/g1/src/drive-input.ts'),...require('../demos/g1/src/drive-state.ts'),...require('../demos/g1/src/drive-config.ts')};}
const neutral={forward:0,strafe:0,turn:0,look:0,stop:false,wave:false,invite:false,camera:false,pause:false};
const pad=(patch={})=>({id:'Physical standard pad',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0})),...patch});
test('driving requires a standard mapping, neutral sticks and button edges',()=>{
 const {DriveInput}=modules(),c=new DriveInput(),p=pad();
 assert.equal(c.arm(pad({mapping:''})),false);p.axes[1]=-1;assert(c.arm(p));
 assert.equal(c.read([p],true).ready,false);p.axes[1]=0;assert.equal(c.read([p],true).ready,true);
 p.axes=[.4,-1,.6,-.4];p.buttons[0].pressed=true;
 const a=c.read([p],true);assert.equal(a.command.forward,1);assert(a.command.strafe>0);assert(a.command.turn<0,'Stick right turns the robot clockwise');assert(a.command.look>0);assert(a.command.wave);
 assert.equal(c.read([p],true).command.wave,false);
 p.buttons[1].pressed=true;assert(c.read([p],true).command.stop);
 p.buttons[2].pressed=true;assert(c.read([p],true).command.invite);
});
test('focus loss and removal stop input and require an explicit neutral rearm',()=>{
 const {DriveInput}=modules(),c=new DriveInput(),p=pad();c.arm(p);c.read([p],true);p.axes[1]=-1;
 assert(c.read([p],true).command.forward>0);assert.equal(c.read([p],false).ready,false);assert.equal(c.active,false);
 assert.equal(c.read([p],true).command.forward,0);c.arm(p);assert.equal(c.read([p],true).ready,false);
 p.axes[1]=0;c.read([p],true);c.read([],true);assert.equal(c.active,false);
});
test('invalid axes and a changed device layout cannot become driving commands',()=>{
 const {DriveInput}=modules(),c=new DriveInput(),p=pad();c.arm(p);c.read([p],true);p.axes[0]=NaN;
 assert.equal(c.read([p],true).ready,false);assert.equal(c.active,false);
 p.axes[0]=0;c.arm(p);p.mapping='';assert.equal(c.read([p],true).ready,false);
});
test('movement follows robot heading, diagonal speed is normalized and 30/60Hz agree',()=>{
 const {DriveState}=modules();
 function simulate(hz,diagonal=false){const s=new DriveState({obstacles:[]});s.start();for(let i=0;i<hz*2;i++)s.update(1/hz,{...neutral,forward:1,strafe:diagonal?1:0});return s;}
 const a=simulate(30),b=simulate(60),d=simulate(60,true);
 assert(Math.abs(a.z-b.z)<.015);assert(b.z<-.4,'Low gear moves toward the welcome point');
 assert(Math.abs(Math.hypot(d.x,d.z)-Math.abs(b.z))<.03);
 const s=new DriveState({obstacles:[]});s.start();for(let i=0;i<60;i++)s.update(1/60,{...neutral,turn:1});assert(Math.abs(s.yaw)>1);
});
test('emergency stop latches until continue; background pause never advances time',()=>{
 const {DriveState}=modules(),s=new DriveState();s.start();for(let i=0;i<30;i++)s.update(1/60,{...neutral,forward:1});
 s.update(1/60,{...neutral,stop:true,forward:1});const at=[s.x,s.z,s.seconds];
 for(let i=0;i<60;i++)s.update(1/60,{...neutral,forward:1});assert.deepEqual([s.x,s.z,s.seconds],at);
 assert.equal(s.paused,true);s.start();s.update(1/60,neutral);s.suspend();const t=s.seconds;s.update(10,neutral);assert.equal(s.seconds,t);
});

test('holding emergency stop takes priority over simultaneous Start resume',()=>{
  const {DriveState}=modules(),s=new DriveState();s.start();s.suspend();
  s.update(1/60,{...neutral,stop:true,pause:true});
  assert.equal(s.paused,true);assert.equal(s.speed,0);
});
test('swept/substepped movement cannot cross an exhibit or room boundary',()=>{
 const {DriveState}=modules(),s=new DriveState({obstacles:[{id:'test',x:-.6,z:-1.3,width:1.2,depth:.5}]});s.start();
 for(let i=0;i<600;i++)s.update(1/30,{...neutral,forward:1});
 assert(s.z>=-.83,`Robot crossed front edge: ${s.z}`);assert(s.contact);
 const empty=new DriveState({obstacles:[]});empty.start();for(let i=0;i<1800;i++)empty.update(1/30,{...neutral,forward:1});assert(empty.z>=-3.5);
});
test('welcome task needs a settled arrival, facing and a completed gesture; reset clears result',()=>{
 const {DriveState,DRIVE_CONFIG}=modules(),s=new DriveState({obstacles:[]});s.start();
 // Spamming actions at spawn cannot advance discovery or receive arrival points.
 s.update(.05,{...neutral,wave:true});s.finishGesture('wave');assert.equal(s.stage,'arrival');assert.equal(s.score,0);
 s.x=DRIVE_CONFIG.welcome.x;s.z=DRIVE_CONFIG.welcome.z;
 for(let i=0;i<15;i++)s.update(.05,neutral);assert.equal(s.stage,'greeting');assert.equal(s.score,30);
 s.yaw=0;s.update(.05,{...neutral,wave:true});assert.equal(s.gesture,null,'Wave faces the visitor, not away');assert.equal(s.stage,'greeting');
 s.yaw=Math.PI;s.update(.05,{...neutral,wave:true});assert.equal(s.gesture,'wave');assert.equal(s.stage,'greeting');
 s.finishGesture('wave');assert.equal(s.stage,'guide');assert.equal(s.score,60);
 s.x=DRIVE_CONFIG.destination.x;s.z=DRIVE_CONFIG.destination.z;s.yaw=Math.PI/2;
 for(let i=0;i<15;i++)s.update(.05,neutral);
 s.update(.05,{...neutral,invite:true});assert.equal(s.gesture,'invite');s.finishGesture('invite');
 assert.equal(s.stage,'complete');assert(s.score>=80);assert(s.stars>=1);
 s.reset();assert.equal(s.stage,'arrival');assert.equal(s.score,0);assert.equal(s.seconds,0);assert.equal(s.running,false);
});

test('control modes stop locomotion, cancel actions and require neutral input before moving again',()=>{
 const {DriveState}=modules(),s=new DriveState({obstacles:[]});s.start();
 for(let i=0;i<60;i++)s.update(1/60,{...neutral,strafe:1});
 s.setMode('stand');const at=[s.x,s.z,s.yaw];
 assert.equal(s.mode,'stand');assert.equal(s.speed,0);assert.equal(s.gesture,null);
 for(let i=0;i<60;i++)s.update(1/60,{...neutral,forward:1,turn:1});
 assert.deepEqual([s.x,s.z,s.yaw],at);assert.equal(s.gesture,null,'Damping must not execute gestures');
 s.setMode('locomotion');s.update(1/60,{...neutral,forward:1});assert.deepEqual([s.x,s.z,s.yaw],at,'Held stick cannot resume after a mode switch');
 s.update(1/60,neutral);for(let i=0;i<120;i++)s.update(1/60,{...neutral,forward:1});assert(s.z<at[1]-.2);
 s.setMode('stand');s.update(1/60,neutral);s.update(1/60,{...neutral,wave:true});assert.equal(s.gesture,'wave');
 s.setMode('performance');assert.equal(s.gesture,null);assert.equal(s.mode,'performance');
 for(let i=0;i<60;i++)s.update(1/60,{...neutral,strafe:1,turn:1});assert.equal(s.speed,0);assert.equal(s.angular,0);
 s.reset();assert.equal(s.mode,'locomotion');assert.equal(s.selectedAction,'wave');
});

test('extra actions need a settled standing robot and cannot earn reception progress',()=>{
 const {DriveState}=modules(),s=new DriveState({obstacles:[]});s.start();
 s.x=0;s.z=-1.55;for(let i=0;i<40;i++)s.update(1/60,neutral);assert.equal(s.stage,'greeting');
 for(const action of ['handshake','clap','bow','raise','stretch','dance']){
  s.selectAction(action);s.update(1/60,{...neutral,wave:true});assert.equal(s.gesture,action);
  s.finishGesture(action);assert.equal(s.stage,'greeting');assert.equal(s.score,30);
 }
 s.setMode('damp');s.selectAction('clap');s.update(1/60,{...neutral,wave:true});assert.equal(s.gesture,null);
});

test('standard gamepad mode/action selection uses edges and never leaks A into a modifier shortcut',()=>{
 let now=1000;const {DriveInput}=modules(),input=new DriveInput(()=>now),p=pad();input.arm(p);input.read([p],true);
 p.buttons[5].pressed=true;let f=input.read([p],true);assert.equal(f.command.cycleMode,false);
 assert.equal(input.read([p],true).command.cycleMode,false);
 p.buttons[5].pressed=false;p.buttons[15].pressed=true;f=input.read([p],true);assert.equal(f.command.cycleMode,true);assert.equal(f.command.actionStep,1);
 assert.equal(input.read([p],true).command.actionStep,0);
 p.buttons[15].pressed=false;p.buttons[6].pressed=true;input.read([p],true);now+=2050;p.buttons[1].pressed=true;
 f=input.read([p],true);assert.equal(f.command.mode,'damp');assert.equal(f.command.stop,false);
});
