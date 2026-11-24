const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {createRequire}=require('node:module');
const bundled=createRequire(require.resolve('../demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(bundled('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {crewFloor,crewStride}=require('../demos/g1/src/drive-people.ts');
const {STAGE_CONFIG:c}=require('../demos/g1/src/drive-stage.ts');

test('crew feet use the existing two stair treads and deck, outside the stage they stay on ground',()=>{
  const lip=c.center.z-c.depth/2;
  assert.equal(crewFloor(c.center.x,lip-.9),0);
  assert.equal(crewFloor(c.center.x,lip-.55),c.height/3);
  assert.equal(crewFloor(c.center.x,lip-.15),c.height*2/3);
  assert.equal(crewFloor(c.center.x,lip+.2),c.height);
  assert.equal(crewFloor(c.center.x+1.1,lip-.15),0);
});

test('staff take alternating steps during translation and plant their feet while lifting or setting down',()=>{
  for(const t of [0,.18,.82,1]) assert.deepEqual(crewStride(t,0,1),{offset:0,lift:0});
  const forward=crewStride(.3,0,1),back=crewStride(.3,1,1),reverse=crewStride(.3,0,-1);
  assert(forward.offset*back.offset<0);
  assert(Math.abs(forward.offset+reverse.offset)<1e-9);
  assert(forward.lift>0||back.lift>0);
});
