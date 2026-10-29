const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const req=createRequire(path.resolve(__dirname,'../demos/g1/package.json'));
require.extensions['.ts']=(module,filename)=>module._compile(req('esbuild').transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs'}).code,filename);
const load=()=>req('./src/render-budget.ts').RenderBudget;
test('3D pixel budget caps supersampling and large canvases without resizing CSS coordinates',()=>{
 const Budget=load(),budget=new Budget();
 assert.equal(budget.resize(980,800,2),1);
 const scale=budget.resize(2160,2400,2);assert(scale<1);assert(2160*2400*scale*scale<=1000001);
 assert.equal(budget.resize(800,600,.8),.8);
});
test('sustained slow frames reduce resolution gradually, never the animation time or below the quality floor',()=>{
 const Budget=load(),budget=new Budget();budget.resize(980,800,2);
 for(let i=0;i<40;i++)assert.equal(budget.observe(.04,true),null,'Ignore shader/startup warmup');
 let changes=0;
 for(let i=0;i<500;i++)if(budget.observe(.04,true)!==null)changes++;
 assert(changes>=2&&changes<=3);assert(Math.abs(budget.ratio-.65)<1e-6);
 const previous=budget.ratio;for(let i=0;i<500;i++)budget.observe(1/60,true);assert.equal(budget.ratio,previous,'No oscillating resolution increases');
});
test('idle periods, invalid deltas and background gaps cannot lower resolution',()=>{
 const Budget=load(),budget=new Budget();budget.resize(980,800,2);
 for(let i=0;i<200;i++)budget.observe(.1,false);
 for(const delta of [NaN,Infinity,0,-1,20])assert.equal(budget.observe(delta,true),null);
 assert.equal(budget.ratio,1);budget.resize(980,800,2);assert.equal(budget.ratio,1);
});
