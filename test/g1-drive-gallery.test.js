const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
require.extensions['.ts']=(m,f)=>m._compile(r('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
const {DRIVE_CONFIG}=require('../demos/g1/src/drive-config.ts');
const {DRIVE_SPACES,EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
const {DriveState}=require('../demos/g1/src/drive-state.ts');
const {HOIST_CONFIG:H}=require('../demos/g1/src/drive-hoist.ts');
function run(s,seconds,command={}){for(let i=0;i<Math.ceil(seconds*60);i++)s.update(1/60,{...N,...command});}

test('connected gallery and laboratory are driveable through the doorway, with the hoist inside the lab',()=>{
 assert(DRIVE_SPACES,'The campus needs separate exhibition and laboratory bounds');
 const {gallery:g,lab,door}=DRIVE_SPACES;
 assert(lab.minX===g.maxX&&lab.maxX>g.maxX+4);
 assert(H.x>lab.minX+1&&H.x<lab.maxX-1&&H.z>lab.minZ&&H.z<lab.maxZ);
 const s=new DriveState({experience:'free'});s.start();s.speedMode='fast';s.z=(door.minZ+door.maxZ)/2;s.yaw=Math.PI/2;
 for(let i=0;i<900&&s.x<H.x;i++)s.update(1/60,{...N,forward:1});
 run(s,.7);assert(s.x>lab.minX+1,'Driving through the opening must reach the new room');assert.equal(s.body,'upright');
 s.yaw=Math.PI;for(let i=0;i<600&&s.z>H.z;i++)s.update(1/60,{...N,forward:1});run(s,1.5);
 assert(s.hoist.ready,'The relocated functional hoist must remain reachable');
 s.update(1/60,{...N,hoistAction:true});run(s,1.4);assert(s.hoist.supported);
});

test('partition blocks driving outside the door and prevents stunts clipping the laboratory wall',()=>{
 assert(DRIVE_SPACES);const {gallery:g}=DRIVE_SPACES;
 const s=new DriveState({experience:'free'});s.start();Object.assign(s,{x:g.maxX-.7,z:-2.5,yaw:Math.PI/2,speedMode:'fast'});
 run(s,2,{forward:1});assert.equal(s.body,'fallen');assert(s.x<g.maxX);assert.match(s.contact||s.message,/隔墙/);
 const a=new DriveState({experience:'free'});a.start();Object.assign(a,{x:g.maxX+.65,z:-.5});run(a,.3);a.update(1/60,{...N,actionTrigger:'backflip'});
 assert.equal(a.gesture,null);assert.match(a.message,/空间不足/);
});

test('shared partition cuts away when camera crosses rooms, and laboratory shells do not occlude their robot',()=>{
 assert(DRIVE_SPACES);const {galleryVisibility}=gallery(),{gallery:g,lab}=DRIVE_SPACES;
 const target={x:lab.minX+.5,z:0},camera={x:g.maxX-1,y:2.35,z:0};
 assert.equal(galleryVisibility(camera,undefined,target)['gallery-right'],false);
 assert.equal(galleryVisibility({x:lab.maxX+1,y:2.35,z:0},undefined,target)['lab-right'],false);
 assert.equal(galleryVisibility({x:g.maxX+1,y:2.35,z:0},undefined,{x:0,z:0})['gallery-right'],false);
});
const source=path.resolve('demos/g1/src/drive-gallery.ts');
function gallery(){assert(fs.existsSync(source),'The gallery must provide camera cutaways, so exhibition walls never hide the playable robot');return require(source);}
test('gallery cuts away the wall between an outside chase camera and the robot in each direction',()=>{
 const {galleryVisibility}=gallery(),r=DRIVE_CONFIG.room;
 for(const [position,hidden]of [[{x:0,y:2.35,z:r.maxZ+1},'gallery-front'],[{x:0,y:2.35,z:r.minZ-1},'gallery-back'],[{x:r.minX-1,y:2.35,z:0},'gallery-left'],[{x:r.maxX+1,y:2.35,z:0},'gallery-right']]){
  const shown=galleryVisibility(position);assert.equal(shown[hidden],false);assert(Object.entries(shown).some(([k,v])=>k!=='gallery-ceiling'&&v));
 }
 const overview=galleryVisibility({x:4.8,y:5.8,z:5});assert(Object.values(overview).every(v=>!v),'Overview exposes the floor and destinations rather than an opaque roof');
 const inside=galleryVisibility({x:0,y:2,z:0});assert(Object.values(inside).every(Boolean));
});
function asset(){const f=path.resolve('demos/g1/assets/gallery/modern-gallery.glb');assert(fs.existsSync(f),'A baked, navigable gallery asset is required');const b=fs.readFileSync(f);assert.equal(b.readUInt32LE(0),0x46546c67);return {g:JSON.parse(b.subarray(20,20+b.readUInt32LE(12)).toString()),b};}
test('gallery visual plinth footprints match the existing collision rectangles',()=>{
 const {g}=asset();
 for(const [i,o]of DRIVE_CONFIG.obstacles.slice(0,2).entries()){
  const n=g.nodes.find(n=>n.name===`gallery-plinth-${i}`);assert(n,'Each collision obstacle must have a visible plinth');
  const box=n.extras?.footprint;assert(box,'Asset records its authored footprint for validation');
  for(const k of ['x','z','width','depth'])assert(Math.abs(box[k]-o[k])<.0001,`${k} must follow the gameplay collision boundary`);
 }
 for(const name of ['gallery-back','gallery-front','gallery-left','gallery-right','gallery-ceiling','lab-back','lab-front','lab-right','lab-ceiling'])assert(g.nodes.some(n=>n.name===name),`${name} must be independently removable for chase and overview cameras`);
 const cabinet=g.nodes.find(n=>n.extras?.footprint?.id==='实验室设备柜');assert(cabinet,'The laboratory cabinet collision must have matching visible geometry');
});
test('baked gallery stays within the static geometry and texture budget without external requests',()=>{
 const {g,b}=asset();let triangles=0;
 for(const m of g.meshes)for(const p of m.primitives){triangles+=(p.indices!==undefined?g.accessors[p.indices].count:g.accessors[p.attributes.POSITION].count)/3;assert(g.materials[p.material].extensions?.KHR_materials_unlit,'Static lighting should not need dynamic shadow maps');}
 assert(triangles<20000,`Gallery triangle budget exceeded: ${triangles}`);assert(g.images.length<=2);assert(b.length<2500000,`Gallery download must be below 2.5MB, got ${b.length}`);
 assert(g.images.every(i=>i.bufferView!==undefined),'Textures are embedded and work offline');
});
