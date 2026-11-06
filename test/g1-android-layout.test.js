const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),r=createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput,DriveActivationInput}=require('../demos/g1/src/drive-input.ts');
const pad=()=>({id:'Xbox Wireless Controller',index:0,mapping:'standard',connected:true,axes:[.005,-.004,0,0],buttons:Array.from({length:16},(_,i)=>({pressed:i===6||i===7,value:i===6?.503:i===7?.502:0}))});
const press=(p,i,value=1)=>{p.buttons[i]={pressed:value>.5,value};};
function ready(){let now=1000;const input=new DriveInput(()=>now,'exhibition-android'),p=pad();assert(input.arm(p));assert.equal(input.read([p],true).status,'ready');return {input,p,tick:n=>now+=n};}
test('observed Android right stick uses analog button values, centers at one half and never becomes LT or RT',()=>{
 const {input,p,tick}=ready();for(const [channel,value,key,sign]of [[6,1,'turn',-1],[6,0,'turn',1],[7,0,'look',1],[7,1,'look',-1]]){
  press(p,channel,value);const f=input.read([p],true);assert.equal(f.command[key],sign);assert.equal(f.command.mode,undefined);assert.equal(f.command.diagnose,undefined);press(p,channel,.5);input.read([p],true);
 }tick(900);assert.equal(input.read([p],true).command.mode,undefined);
});
test('Android X Y shoulders and D-pad map from the photo, including distinct RB dance chords',()=>{
 const {input,p}=ready();press(p,3);assert(input.read([p],true).command.invite);press(p,3,0);input.read([p],true);
 press(p,4);assert(input.read([p],true).command.camera);press(p,4,0);input.read([p],true);
 for(const [physical,action]of [[0,'dance'],[1,'robotdance'],[3,'armdance'],[4,'cheerdance']]){
  press(p,9);input.read([p],true,'performance');press(p,physical);const c=input.read([p],true,'performance').command;assert.equal(c.actionTrigger,action);assert(!c.stop&&!c.invite&&!c.camera);
  press(p,physical,0);input.read([p],true,'performance');press(p,9,0);assert(!input.read([p],true,'performance').command.cycleMode);
 }
 press(p,14);assert.equal(input.read([p],true).command.actionStep,-1);assert.equal(input.read([p],true).command.actionTrigger,undefined);
});
test('unobserved trigger menu and view controls remain unbound, and moving right stick cannot block A activation',()=>{
 const activation=new DriveActivationInput('exhibition-android'),p=pad();activation.read([p],true,true);press(p,0);assert(activation.read([p],true,true));
 const {input,p:q,tick}=ready();for(const unknown of [2,5,10,11])press(q,unknown);input.read([q],true);tick(900);press(q,4);const c=input.read([q],true).command;assert.equal(c.mode,undefined);assert.equal(c.recover,undefined);assert.equal(c.toggleStand,undefined);assert.equal(c.actionTrigger,undefined);assert(c.camera);
});
test('Android LB double tap still chooses high gear, RB release changes mode and B pauses',()=>{
 const {input,p,tick}=ready();for(let j=0;j<2;j++){press(p,8);input.read([p],true);tick(60);press(p,8,0);const c=input.read([p],true).command;if(j===1)assert.equal(c.speedMode,'fast');tick(80);}
 press(p,9);input.read([p],true);press(p,9,0);assert(input.read([p],true).command.cycleMode);press(p,1);assert(input.read([p],true).command.stop);
});
test('explicit profile rejects different identity channel counts and invalid analog values; profile changes suspend input',()=>{
 const {input,p}=ready();p.buttons[6].value=NaN;assert.equal(input.read([p],true).status,'unsupported');assert(!input.active);
 for(const patch of [{id:'Other pad'},{buttons:pad().buttons.concat({pressed:false,value:0})},{axes:[0,0,0,0,0]}]){const i=new DriveInput(undefined,'exhibition-android');assert.equal(i.arm({...pad(),...patch}),false);}
 const q=pad(),i=new DriveInput(undefined,'exhibition-android');assert(i.arm(q));i.read([q],true);i.setProfile('standard');assert(!i.active);
});
test('standard desktop layout stays the default and ignores Android behavior unless explicitly selected',()=>{
 const p=pad();p.id='Desktop';p.buttons=Array.from({length:17},()=>({pressed:false,value:0}));p.axes=[0,0,0,0];const i=new DriveInput();assert(i.arm(p));assert(i.read([p],true).ready);p.axes[2]=1;press(p,2);const c=i.read([p],true).command;assert.equal(c.turn,-1);assert(c.invite);
});
