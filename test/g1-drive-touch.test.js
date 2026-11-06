const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveTouch}=require('../demos/g1/src/drive-touch.ts');
test('two fingers can move and turn, releasing one never cancels the other',()=>{
 const input=new DriveTouch();input.press(1,'forward');input.press(2,'turn-left');assert(input.has('forward')&&input.has('turn-left'));
 input.release(1);assert(!input.has('forward')&&input.has('turn-left'));input.release(2);assert(!input.has('turn-left'));
});
test('duplicate capture loss is harmless and two fingers on one button remain held until both release',()=>{
 const input=new DriveTouch();input.press(1,'forward');input.press(2,'forward');input.release(1);input.release(1);assert(input.has('forward'));
 input.release(2);assert(!input.has('forward'));input.press(3,'back');input.clear();input.release(3);assert(!input.has('back'));
});
