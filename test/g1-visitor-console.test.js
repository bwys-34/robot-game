const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),r=createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveState}=require('../demos/g1/src/drive-state.ts'),{DriveInput}=require('../demos/g1/src/drive-input.ts'),{DRIVE_CONFIG,EMPTY_DRIVE_COMMAND:n}=require('../demos/g1/src/drive-config.ts');
function ready(android=false){let now=1000;const p={id:android?'Xbox Wireless Controller':'Desktop',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:android?16:17},(_,i)=>({pressed:android&&(i===6||i===7),value:android&&(i===6||i===7)?.5:0}))};const i=new DriveInput(()=>now,android?'exhibition-android':'standard');assert(i.arm(p));assert(i.read([p],true).ready);return {i,p,tick:ms=>now+=ms,press:(idx,down=true)=>{p.buttons[idx]={pressed:down,value:down?1:0};}};}
test('free experience never starts reception progress or restricts a wave to the mission target',()=>{
 const s=new DriveState({experience:'free',obstacles:[]});assert.equal(s.experience,'free');s.start();s.x=DRIVE_CONFIG.welcome.x;s.z=DRIVE_CONFIG.welcome.z;
 for(let j=0;j<40;j++)s.update(.025,n);assert.equal(s.stage,'arrival');assert.equal(s.score,0);
 s.stage='greeting';s.x=1;s.z=0;s.yaw=0;s.update(.025,{...n,wave:true});assert.equal(s.gesture,'wave');s.finishGesture('wave');assert.equal(s.stage,'greeting');assert.equal(s.score,0);
});
test('switching experience clears pose command state, pauses and starts a fresh mission without autostart',()=>{
 const s=new DriveState({experience:'free'});s.start();s.x=1;s.gesture='dance';assert.equal(typeof s.setExperience,'function');s.setExperience('mission');
 assert.equal(s.experience,'mission');assert.equal(s.running,false);assert(s.paused);assert.equal(s.gesture,null);assert.equal(s.x,DRIVE_CONFIG.spawn.x);
 s.start();s.x=DRIVE_CONFIG.welcome.x;s.z=DRIVE_CONFIG.welcome.z;for(let j=0;j<40;j++)s.update(.025,n);assert.equal(s.stage,'greeting');assert.equal(s.score,30);
 s.setExperience('free');assert.equal(s.experience,'free');assert.equal(s.score,0);assert(s.paused);
});
test('LB mode chords use observed shoulders on both layouts, consume face keys and never become a speed tap',()=>{
 for(const android of [false,true])for(const [face,key,value]of [[0,'mode','locomotion'],[1,'mode','damp'],[2,'recover',true],[3,'mode','zero']]){
  const {i,p,press,tick}=ready(android),lb=android?8:4,physical=android?[0,1,3,4][face]:face;
  press(lb);i.read([p],true);press(physical);let c=i.read([p],true).command;assert.equal(c[key],value);assert(!c.wave&&!c.stop&&!c.invite&&!c.camera);
  press(lb,false);c=i.read([p],true).command;assert(!c.wave&&!c.stop&&!c.invite&&!c.camera);assert.equal(c.speedMode,undefined);press(physical,false);i.read([p],true);tick(90);
  press(lb);i.read([p],true);tick(60);press(lb,false);assert.equal(i.read([p],true).command.speedMode,undefined,'A used LB chord is not the first speed tap');
 }
});
test('RB actions work from walking or standing, LT still takes priority, and no release leaks B pause',()=>{
 for(const android of [false,true])for(const mode of ['locomotion','stand','performance'])for(const [face,action]of [[0,'dance'],[1,'robotdance'],[2,'armdance'],[3,'cheerdance']]){
  const {i,p,press}=ready(android),rb=android?9:5,physical=android?[0,1,3,4][face]:face;
  press(rb);i.read([p],true,mode);press(physical);const c=i.read([p],true,mode).command;assert.equal(c.actionTrigger,action);assert(!c.stop&&!c.wave&&!c.invite&&!c.camera);
  press(rb,false);const released=i.read([p],true,mode).command;assert(!released.cycleMode&&!released.stop&&!released.wave&&!released.invite&&!released.camera);
 }
 const {i,p,press,tick}=ready();press(6);i.read([p],true);tick(650);press(4);press(1);assert.equal(i.read([p],true).command.mode,'damp');
});
