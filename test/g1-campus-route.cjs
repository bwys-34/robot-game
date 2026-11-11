// Browser regression helper: use visitor inputs and map telemetry, never teleport.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DRIVE_SPACES:S}=require('../demos/g1/src/drive-config.ts');
const {HOIST_CONFIG:H}=require('../demos/g1/src/drive-hoist.ts');
async function arrive(p,source){
 // The ordinary speed buttons remain available on the driving console.
 await p.waitForTimeout(180);
 if(!await p.locator('[data-drive-speed=fast]').isVisible())await p.locator('#hoist-toggle').click();
 await p.locator('[data-drive-speed=fast]').click();
 await p.locator('#drive-viewer').focus();
 const stop=async()=>{if(source==='manual')for(const k of ['a','d','w','s'])await p.keyboard.up(k);else await p.evaluate(()=>pad.axes=[0,0,0,0]);};
 for(const target of [{x:0,z:(S.door.minZ+S.door.maxZ)/2},{x:H.x,z:(S.door.minZ+S.door.maxZ)/2},{x:H.x,z:H.z}]){
  let reached=false;
  for(let i=0;i<360;i++){
   const at=await p.locator('#map-robot').evaluate(n=>({x:+n.dataset.x,z:+n.dataset.z})),dx=target.x-at.x,dz=target.z-at.z;
   if(Math.hypot(dx,dz)<.10){reached=true;break;}
   assert.equal(await p.locator('body').getAttribute('data-body'),'upright',`Collision en route: ${JSON.stringify(at)}`);
   const gain=Math.hypot(dx,dz)<.45?.30:.85;
   if(source==='manual'){
    // Keyboard has digital input, use shorter near-goal pulses to avoid overshoot.
    for(const [k,on]of [['a',dx<-.045],['d',dx>.045],['w',dz<-.045],['s',dz>.045]])await p.keyboard[on?'down':'up'](k);
   }else await p.evaluate(({dx,dz,gain})=>{pad.axes[0]=Math.abs(dx)>.045?Math.sign(dx)*gain:0;pad.axes[1]=Math.abs(dz)>.045?Math.sign(dz)*gain:0;},{dx,dz,gain});
   await p.waitForTimeout(source==='manual'&&Math.hypot(dx,dz)<.45?45:100);
  }
  await stop();await p.waitForTimeout(400);assert(reached,`Could not drive to ${JSON.stringify(target)}`);
 }
 await p.waitForFunction(()=>!document.querySelector('#hoist-primary').disabled,{},{timeout:6000});
 assert(await p.locator('#hoist-panel').isVisible(),'Approaching exposes the hoist automatically without opening its console');
 assert.equal(await p.locator('body').getAttribute('data-hoist'),'detached','Arrival cannot attach automatically');
}
module.exports={arrive};
