const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveInput}=require('../demos/g1/src/drive-input.ts');
function setup(){
 let now=0;
 const pad={id:'Desktop standard',index:0,mapping:'standard',connected:true,axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};
 const input=new DriveInput(()=>now);input.arm(pad);input.read([pad],true);
 return {input,pad,at:t=>{now=t;},down:(...ids)=>ids.forEach(i=>pad.buttons[i]={pressed:false,value:1}),up:(...ids)=>ids.forEach(i=>pad.buttons[i]={pressed:false,value:0}),read:(mode='locomotion')=>input.read([pad],true,mode)};
}
for(const [key,field,value,mode]of [[1,'mode','damp'],[3,'mode','zero'],[2,'recover',true],[12,'mode','stand'],[14,'actionTrigger','sit'],[0,'actionTrigger','sit'],[0,'diagnose',true,'debug']]){
 test(`standard analog LT + ${key} held together fires ${field} once after the hold threshold`,()=>{
  const s=setup();s.down(6,key);assert.equal(s.read(mode).command[field],undefined);
  s.at(1999);assert.equal(s.read(mode).command[field],undefined);
  s.at(2001);const c=s.read(mode).command;assert.equal(c[field],value);assert(!c.stop&&!c.wave&&!c.camera);
  s.at(2400);assert.equal(s.read(mode).command[field],undefined,'A held chord must not restart falling or recovery each frame');
  s.up(key);s.read(mode);s.down(key);assert.equal(s.read(mode).command[field],value,'Releasing and pressing the face/direction button rearms the chord');
 });
}
test('LT may be pressed after the face button and a short released chord is not replayed later',()=>{
 const s=setup();s.down(3);s.read();s.down(6);s.read();s.at(2100);assert.equal(s.read().command.mode,'zero');
 s.up(6);assert(!s.read().command.camera);s.up(3);s.read();
 s.at(3000);s.down(6,1);s.read();s.at(3100);s.up(1);s.read();s.at(5100);assert.equal(s.read().command.mode,undefined);
 s.up(6);assert.equal(s.read().command.speedMode,undefined);
});
test('RT + A works in either pressing order and fires once per held chord',()=>{
 for(const order of [[7,0],[0,7]]){
  const s=setup();s.down(order[0]);s.read('stand');s.down(order[1]);assert.equal(s.read('stand').command.mode,'locomotion');
  assert.equal(s.read('stand').command.mode,undefined);s.up(7);assert(!s.read('stand').command.wave);
 }
});
test('LT + RT debug chord has priority over pending LT face commands',()=>{
 const s=setup();s.down(6,7,1);s.read('damp');s.at(2100);
 const c=s.read('damp').command;assert.equal(c.mode,'debug');assert(!c.recover&&!c.stop);
 assert.equal(s.read('debug').command.mode,undefined);s.up(7);assert.equal(s.read('debug').command.mode,undefined,'A face key held during debug entry is consumed');
});
test('trigger feedback exposes observed desktop values and hold progress without affecting Android',()=>{
 const s=setup();s.pad.buttons[6].value=.8;s.pad.buttons[7].value=.25;
 let frame=s.read();assert.deepEqual(frame.triggers,{left:.8,right:.25,holdProgress:0});
 s.at(1000);assert.equal(s.read().triggers.holdProgress,.5);s.at(2100);assert.equal(s.read().triggers.holdProgress,1);
 s.up(6);assert.equal(s.read().triggers.holdProgress,0);
 s.input.suspend();s.input.arm(s.pad);s.up(7);s.read();s.down(6,1);s.read();s.at(4200);assert.equal(s.read().command.mode,'damp','A new input session must clear chord latches');
 const android={...s.pad,id:'Xbox Wireless Controller',buttons:Array.from({length:16},(_,i)=>({pressed:false,value:i===6||i===7?.5:0}))};
 const input=new DriveInput(()=>0,'exhibition-android');input.arm(android);assert.equal(input.read([android],true).triggers,undefined);
});
