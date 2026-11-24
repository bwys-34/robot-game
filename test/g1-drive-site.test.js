const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {createRequire}=require('node:module');
const bundled=createRequire(require.resolve('../demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(bundled('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {siteSurface,SITE_WALLS}=require('../demos/g1/src/drive-site.ts');

const bounds=(minX,maxX,minY,maxY,minZ,maxZ)=>({minX,maxX,minY,maxY,minZ,maxZ});

test('imported architecture is assigned to the existing camera cutaways',()=>{
  const paint='Mineral paint · warm porcelain';
  assert.equal(siteSurface(paint,bounds(-3,2,0,3,-3.68,-3.54)),'gallery-back');
  assert.equal(siteSurface(paint,bounds(3.3,9.2,0,3,-3.68,-3.54)),'lab-back');
  assert.equal(siteSurface(paint,bounds(-3.9,-3.8,0,3,-3.55,2.8)),'gallery-left');
  assert.equal(siteSurface(paint,bounds(9.2,9.3,0,3,-3.55,2.8)),'lab-right');
  assert.equal(siteSurface(paint,bounds(3.12,3.26,0,3,-3.55,.35)),'gallery-right');
  assert.equal(siteSurface(paint,bounds(3.12,3.26,0,3,.3,2.4)),undefined);
});

test('the old course and nearfield set retain ownership of traversable areas and task props',()=>{
  assert.equal(siteSurface('Lane / grey green asphalt',bounds(-6,-3,0,.01,4,15)),undefined);
  assert.equal(siteSurface('Painted station pad',bounds(6.4,7.2,0,.02,-1.2,-.45)),undefined);
  assert.equal(siteSurface('Satin anodised aluminium',bounds(4.35,8.25,0,1.1,-3.57,-3.1)),undefined);
  assert.equal(siteSurface('Stage · woven charcoal sage',bounds(4,8,0,.32,6,10)),undefined);
  assert.equal(siteSurface('Yard · blasted concrete slabs',bounds(-7.8,12.2,-.11,0,2.8,18.8)),undefined);
  assert.equal(siteSurface('Gallery · honed limestone 900',bounds(-3.8,3.2,-.11,0,-3.55,2.8)),undefined);
  assert.equal(siteSurface('Foliage · 0',bounds(2.76,3.35,.5,.95,5.29,10.08)),'planter');
  assert.equal(siteSurface('Surround · warm neutral',bounds(-1000,1000,-.23,-.07,-1000,1000)),'exterior');
});

test('the browser asset includes all seven cutaway groups without unused textures or source geometry',()=>{
  const asset=fs.readFileSync(require.resolve('../demos/g1/assets/nearfield/training-ground.glb'));
  assert.equal(asset.toString('ascii',0,4),'glTF');
  assert.equal(asset.readUInt32LE(8),asset.length);
  const map=JSON.parse(asset.toString('utf8',20,20+asset.readUInt32LE(12)));
  assert.deepEqual(map.scenes[map.scene].nodes.map(i=>map.nodes[i].name).sort(),[...SITE_WALLS,'exterior','planter'].map(name=>`site-${name}`).sort());
  assert(!map.images?.length);
  assert(asset.length<6_000_000);
});
