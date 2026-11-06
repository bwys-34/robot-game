const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),r=createRequire(path.resolve('demos/g1/package.json'));
const source=path.resolve('demos/g1/src/input-feedback.ts');
function api(){assert(fs.existsSync(source),'Raw input feedback module has not been implemented');require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);return require(source);}
const pad=()=>({id:'Android Bluetooth raw pad',index:0,mapping:'',connected:true,axes:[0,0,0,0,-1,0,0,0,0,3.2857],buttons:Array.from({length:11},()=>({pressed:false,value:0}))});

test('feedback preserves nonstandard channels and out-of-range hat values without applying a driving map',()=>{
 const {snapshotPad}=api(),p=pad(),s=snapshotPad(p);assert.equal(s.mapping,'');assert.equal(s.axes.length,10);assert.equal(s.buttons.length,11);assert.equal(s.axes[9],3.2857);p.axes[0]=1;assert.equal(s.axes[0],0);
});
test('an observed D-pad press records both a misreported trigger button and axis, keeping the resting baseline',()=>{
 const {snapshotPad,InputCapture}=api(),p=pad();p.buttons[6]={pressed:true,value:1};
 const baseline=snapshotPad(p),capture=new InputCapture('dpad-down',baseline,10);
 p.axes[5]=.714;p.buttons[3]={pressed:true,value:1};capture.observe(snapshotPad(p),20);
 p.axes[5]=0;p.buttons[3]={pressed:false,value:0};capture.observe(snapshotPad(p),30);
 const report=capture.finish(40);assert.equal(report.target,'dpad-down');assert.equal(report.baseline.buttons[6].value,1);assert.equal(report.buttons.find(b=>b.index===3).max,1);assert(!report.buttons.some(b=>b.index===6));assert(report.axes.find(a=>a.index===5).maxDelta>.7);assert.equal(report.last.buttons[3].value,0);
});
test('trigger resting at minus one and small drift are retained without being mistaken for moved channels',()=>{
 const {snapshotPad,InputCapture}=api(),p=pad(),capture=new InputCapture('right-stick-right',snapshotPad(p),0);
 p.axes[0]=.02;p.axes[4]=-.99;p.axes[7]=1;capture.observe(snapshotPad(p),10);const report=capture.finish(20);
 assert.deepEqual(report.axes.map(a=>a.index),[7]);assert.equal(report.baseline.axes[4],-1);assert.equal(report.last.axes[0],.02);
});
test('keyboard-only directions are captured as keyboard events and repeated events do not flood the report',()=>{
 const {InputCapture}=api(),capture=new InputCapture('dpad-left',null,0);
 capture.key('ArrowLeft','ArrowLeft',true,10);capture.key('ArrowLeft','ArrowLeft',true,11);capture.key('ArrowLeft','ArrowLeft',false,20);
 const report=capture.finish(30);assert.equal(report.keys.length,2);assert.equal(report.keys[0].code,'ArrowLeft');assert.equal(report.baseline,null);assert.equal(report.hasInput,true);
});
test('device replacement or interruption closes capture without mixing two devices or losing the earlier sample',()=>{
 const {snapshotPad,InputCapture}=api(),p=pad(),capture=new InputCapture('a',snapshotPad(p),0);
 p.buttons[2]={pressed:true,value:1};capture.observe(snapshotPad(p),10);const other=pad();other.id='Another pad';other.buttons[4].value=1;
 assert.equal(capture.observe(snapshotPad(other),20),false);capture.observe(snapshotPad(p),30);const report=capture.finish(40);
 assert(report.interrupted);assert.deepEqual(report.buttons.map(b=>b.index),[2]);
});
test('invalid numeric channels remain explicit and exported records contain only finite JSON values',()=>{
 const {snapshotPad,InputCapture}=api(),p=pad();p.axes[2]=NaN;p.buttons[3].value=Infinity;const snapshot=snapshotPad(p);
 assert.equal(snapshot.axes[2],null);assert.equal(snapshot.buttons[3].value,null);const report=new InputCapture('a',snapshot,0).finish(1);assert.equal(report.hasInput,false);assert.doesNotThrow(()=>JSON.parse(JSON.stringify(report)));
});
