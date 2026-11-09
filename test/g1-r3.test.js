const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),r=createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput}=require('../demos/g1/src/drive-input.ts'),{DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:n}=require('../demos/g1/src/drive-config.ts');
const pad=()=>({id:'standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))});
test('R3 trigger modifiers suppress ordinary B/Y and SELECT binds three greeting actions',()=>{
 let now=1000;const input=new DriveInput(()=>now),p=pad();input.arm(p);input.read([p],true);
 p.buttons[6].value=1;input.read([p],true);now+=2050;p.buttons[1].pressed=true;let c=input.read([p],true).command;assert.equal(c.mode,'damp');assert.equal(c.stop,false);
 p.buttons[1].pressed=false;input.read([p],true);p.buttons[3].pressed=true;c=input.read([p],true).command;assert.equal(c.mode,'zero');assert.equal(c.camera,false);
 p.buttons.forEach(b=>{b.pressed=false;b.value=0;});input.read([p],true);
 for(const [key,action]of [[0,'handshake'],[3,'wave'],[2,'turnwave']]){p.buttons[8].pressed=true;p.buttons[key].pressed=true;c=input.read([p],true).command;assert.equal(c.actionTrigger,action);assert.equal(c.wave,false);assert.equal(c.invite,false);assert.equal(c.camera,false);p.buttons[key].pressed=false;input.read([p],true);}
});
test('START single tap waits for double-tap window; double tap only enables stepping',()=>{
 let now=1000;const input=new DriveInput(()=>now),p=pad();input.arm(p);input.read([p],true);
 const tap=()=>{p.buttons[9].pressed=true;const c=input.read([p],true).command;p.buttons[9].pressed=false;input.read([p],true);return c;};
 assert.equal(tap().toggleStand,undefined);now+=150;assert.equal(tap().stepping,true);now+=400;assert.equal(input.read([p],true).command.toggleStand,undefined);
 now+=200;tap();now+=400;assert.equal(input.read([p],true).command.toggleStand,true);
});
test('double shoulder taps choose speed and holding modifiers never changes it',()=>{
 let now=1000;const input=new DriveInput(()=>now),p=pad();input.arm(p);input.read([p],true);
 for(const [button,speed]of [[6,'slow'],[4,'fast']]){
  p.buttons[button].pressed=true;input.read([p],true);p.buttons[button].pressed=false;input.read([p],true);now+=150;p.buttons[button].pressed=true;input.read([p],true);p.buttons[button].pressed=false;
  assert.equal(input.read([p],true).command.speedMode,speed);now+=500;
 }
});
test('passive modes cause a latched fall, preserve mission and require a completed recovery',()=>{
 const s=new DriveState();s.start();for(let i=0;i<120;i++)s.update(.05,{...n,forward:1});for(let i=0;i<25;i++)s.update(.05,n);const score=s.score;assert.equal(s.stage,'turn');s.update(.05,{...n,mode:'zero'});assert.equal(s.body,'falling');assert.equal(s.mode,'zero');
 for(let i=0;i<40;i++)s.update(.05,{...n,forward:1});assert.equal(s.body,'fallen');assert.equal(s.speed,0);assert.equal(s.score,score);
 s.setMode('locomotion');assert.equal(s.mode,'zero','No standing teleport');s.update(.05,{...n,recover:true});assert.equal(s.body,'recovering');
 s.suspend();const t=s.bodyProgress;s.update(1,n);assert.equal(s.bodyProgress,t);s.start();for(let i=0;i<60;i++)s.update(.05,{...n,forward:1});assert.equal(s.body,'upright');assert.equal(s.mode,'stand');assert.equal(s.needsNeutral,true);
 s.update(.05,n);assert.equal(s.needsNeutral,false);assert.equal(s.stage,'turn');assert.equal(s.score,score);
});
test('debug requires passive mode; tricks require settled locomotion or performance with clearance',()=>{
 const s=new DriveState();s.start();s.setMode('debug');assert.equal(s.mode,'locomotion');s.setMode('damp');s.setMode('debug');assert.equal(s.mode,'debug');
 const a=new DriveState();a.start();a.selectAction('backflip');a.update(.05,{...n,wave:true});assert.equal(a.gesture,'backflip');a.setMode('zero');assert.equal(a.gesture,null);assert.equal(a.body,'falling');
 const b=new DriveState();b.start();b.x=2.5;b.z=1.5;b.selectAction('backflip');b.update(.05,{...n,wave:true});assert.equal(b.gesture,null);assert.match(b.message,/空旷|空间/);
});

test('releasing LT before chord B cannot become a webpage stop, and a long modifier cannot count as speed tapping',()=>{
 let now=1000;const i=new DriveInput(()=>now),p=pad();i.arm(p);i.read([p],true);p.buttons[6].value=1;i.read([p],true);now+=2050;p.buttons[1].pressed=true;i.read([p],true);
 p.buttons[6].value=0;assert.equal(i.read([p],true).command.stop,false);p.buttons[1].pressed=false;i.read([p],true);p.buttons[1].pressed=true;assert.equal(i.read([p],true).command.stop,true);
 p.buttons[1].pressed=false;p.buttons[6].value=1;now+=100;i.read([p],true);p.buttons[6].value=0;assert.equal(i.read([p],true).command.speedMode,undefined);
});

test('selecting passive mode before starting and interrupting recovery never leave invisible standing support',()=>{
 const s=new DriveState();s.setMode('zero');s.start();assert.equal(s.body,'falling');for(let k=0;k<20;k++)s.update(.05,n);s.update(.05,{...n,recover:true});assert.equal(s.body,'recovering');s.setMode('damp');assert.equal(s.body,'falling');assert.equal(s.bodyProgress,0);
 for(let k=0;k<30;k++)s.update(.05,n);s.update(.05,{...n,recover:true});s.update(.05,n);assert.equal(s.body,'recovering');assert(s.bodyProgress>0);s.setMode('damp');assert.equal(s.body,'falling','Selecting the same passive mode interrupts recovery too');assert.equal(s.bodyProgress,0);
});

test('two speed profiles start and reset in low gear and produce distinct velocities',()=>{
 const s=new DriveState({obstacles:[]});assert.equal(s.speedMode,'slow');
 const speeds=[];for(const mode of ['slow','fast']){s.reset();s.start();s.update(.05,{...n,speedMode:mode});for(let k=0;k<60;k++)s.update(1/60,{...n,forward:1});speeds.push(s.speed);}assert(speeds[0]<speeds[1]);
 s.reset();assert.equal(s.speedMode,'slow');
});

test('holding LB never slows high gear and RT direction chords no longer change gear',()=>{
 let now=1000;const input=new DriveInput(()=>now),p=pad();input.arm(p);input.read([p],true);
 p.buttons[4].pressed=true;const held=input.read([p],true).command;
 assert(!held.slow,'LB is only a double-tap speed selector');assert.equal(held.speedMode,undefined);
 now+=700;p.buttons[4].pressed=false;input.read([p],true);
 p.buttons[7].pressed=true;input.read([p],true);
 for(const key of [12,13]){p.buttons[key].pressed=true;assert.equal(input.read([p],true).command.speedMode,undefined);p.buttons[key].pressed=false;input.read([p],true);}
});
