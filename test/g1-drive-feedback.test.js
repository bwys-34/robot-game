const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DriveFeedback}=require('../demos/g1/src/drive-feedback.ts');
test('unchanged feedback leaves live text, button state and attributes untouched',()=>{
 let writes=0,text='',disabled=false,html='';const attrs=new Map();
 const node={get textContent(){return text},set textContent(v){writes++;text=v},get disabled(){return disabled},set disabled(v){writes++;disabled=v},get innerHTML(){return html},set innerHTML(v){writes++;html=v},getAttribute:k=>attrs.get(k)??null,setAttribute(k,v){writes++;attrs.set(k,v)}};
 const ui=new DriveFeedback();
 for(let i=0;i<100;i++){ui.property(node,'textContent','低速');ui.property(node,'disabled',true);ui.html(node,'开始 <span>A</span>');ui.attribute(node,'aria-pressed','true');}
 assert.equal(writes,4);
 ui.property(node,'textContent','高速');ui.property(node,'disabled',false);ui.attribute(node,'aria-pressed','false');assert.equal(writes,7);
});
