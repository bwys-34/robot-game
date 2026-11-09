const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve(__dirname,'../demos/g1/package.json')),esbuild=r('esbuild');
require.extensions['.ts']=(m,f)=>m._compile(esbuild.transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,f);
const file=path.resolve(__dirname,'../demos/g1/src/drive-haptics.ts');
test('haptic capability requires a connected gamepad and an exposed actuator',async()=>{
 assert(fs.existsSync(file),'A haptic tester must exist before vibration can be tested');
 const {HapticTest,hapticCapability}=require(file);
 assert.equal(hapticCapability(null),'no-device');assert.equal(hapticCapability({connected:true}),'unsupported');
 assert.equal(hapticCapability({connected:false,vibrationActuator:{playEffect(){}}}),'no-device');
 const tester=new HapticTest();assert.equal((await tester.run(null)).status,'no-device');
 assert.equal((await tester.run({connected:true})).status,'unsupported');
});
test('one explicit test plays a bounded pulse; API completion never claims physical confirmation',async()=>{
 assert(fs.existsSync(file),'Missing haptic tester');const {HapticTest}=require(file),calls=[];
 const tester=new HapticTest(),pad={connected:true,vibrationActuator:{playEffect:async(...args)=>{calls.push(args);return 'complete';},reset:async()=>{}}};
 const result=await tester.run(pad);assert.equal(result.status,'completed');assert.equal(calls.length,1);
 assert.equal(calls[0][0],'dual-rumble');assert.equal(calls[0][1].duration,300);assert(calls[0][1].strongMagnitude<=.6);
 assert.match(result.message,/是否.*震动/,'API success must still ask for the actual sensation');
});
test('stop resets the actuator and resolves a hanging request without a later false success',async()=>{
 assert(fs.existsSync(file),'Missing haptic tester');const {HapticTest}=require(file);let reset=0,finish;
 const tester=new HapticTest(),pad={connected:true,vibrationActuator:{playEffect:()=>new Promise(r=>finish=r),reset:async()=>{reset++;}}};
 const request=tester.run(pad);assert.equal((await tester.run(pad)).status,'busy');tester.stop();
 assert.equal((await request).status,'interrupted');assert.equal(reset,1);finish('complete');
});
test('preemption, rejected commands and stalled drivers produce distinct non-success results',async()=>{
 assert(fs.existsSync(file),'Missing haptic tester');const {HapticTest}=require(file);
 const tester=new HapticTest(30);
 const pad=playEffect=>({connected:true,vibrationActuator:{playEffect,reset:async()=>{}}});
 assert.equal((await tester.run(pad(async()=>'preempted'))).status,'interrupted');
 assert.equal((await tester.run(pad(async()=>{throw new Error('Driver denied');}))).status,'error');
 assert.equal((await tester.run(pad(()=>new Promise(()=>{})))).status,'timeout');
});

test('a fall landing sends one 800ms pulse, not a pulse on every fallen frame',async()=>{
 const {DriveFallHaptics}=require(file);assert.equal(typeof DriveFallHaptics,'function','The game needs fall feedback');
 const calls=[],pad={index:0,id:'desktop',connected:true,vibrationActuator:{playEffect:async(type,options)=>{calls.push(options);return 'complete';}}};
 const feedback=new DriveFallHaptics(),s={body:'upright',running:true,paused:false};
 feedback.update(s,pad,true);s.body='falling';feedback.update(s,pad,true);assert.equal(calls.length,0);
 s.body='fallen';for(let i=0;i<120;i++)feedback.update(s,pad,true);
 assert.equal(calls.length,1);assert.equal(calls[0].duration,800);assert.equal(calls[0].strongMagnitude,.8);
});

test('muting, pausing, manual input and switching devices never replay a missed landing',async()=>{
 const {DriveFallHaptics}=require(file);assert.equal(typeof DriveFallHaptics,'function','The game needs fall feedback');
 for(const reason of ['disabled','paused','manual','device']){
  let calls=0;const pad={index:0,id:'first',connected:true,vibrationActuator:{playEffect:async()=>{calls++;return 'complete';}}};
  const feedback=new DriveFallHaptics(),s={body:'falling',running:true,paused:false};
  feedback.update(s,pad,true);if(reason==='disabled')feedback.setEnabled(false);if(reason==='paused')s.paused=true;
  s.body='fallen';feedback.update(s,reason==='device'?{...pad,id:'second'}:pad,reason!=='manual');
  feedback.setEnabled(true);s.paused=false;feedback.update(s,pad,true);assert.equal(calls,0,reason);
 }
});

test('recovery or lifecycle interruption stops a pending landing pulse',async()=>{
 const {DriveFallHaptics}=require(file);assert.equal(typeof DriveFallHaptics,'function','The game needs fall feedback');
 for(const reason of ['recovery','pause','interrupt','disconnect']){
  let resets=0;const pad={index:0,id:'first',connected:true,vibrationActuator:{playEffect:()=>new Promise(()=>{}),reset:async()=>{resets++;}}};
  const feedback=new DriveFallHaptics(),s={body:'falling',running:true,paused:false};feedback.update(s,pad,true);
  s.body='fallen';feedback.update(s,pad,true);
  if(reason==='interrupt')feedback.interrupt();else{
   if(reason==='recovery')s.body='recovering';if(reason==='pause')s.paused=true;
   feedback.update(s,reason==='disconnect'?null:pad,true);
  }
  assert.equal(resets,1,reason);
 }
});
