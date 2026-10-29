const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),req=createRequire(path.join(project,'package.json'));
require.extensions['.ts']=(module,filename)=>module._compile(req('esbuild').transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs'}).code,filename);
const THREE=req('three'),{GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js');
async function model(){const b=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));return (await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
test('chain solve keeps the support sole planted without traversing the full model per bisection',async()=>{
 const {PoseChain}=req('./src/pose-chain.ts'),scene=await model(),pose=new PoseChain(scene);
 const update=scene.updateMatrixWorld.bind(scene);let traversals=0;scene.updateMatrixWorld=function(...args){traversals++;return update(...args);};
 pose.setAngle(45);
 assert(pose.supportFoot.getWorldPosition(new THREE.Vector3()).distanceTo(pose.supportAnchor)<1e-6);
 assert(traversals<=3,`Expected at most three full-tree updates per solve, got ${traversals}`);
});
test('neutral warning feedback does not force unchanged model matrices every frame',async()=>{
 const {WarningFeedback}=req('./src/warning-feedback.ts'),robot=await model(),scene=new THREE.Scene();scene.add(robot);
 const warning=new WarningFeedback(robot);let updates=0;const update=robot.updateMatrixWorld.bind(robot);robot.updateMatrixWorld=function(...args){updates++;return update(...args);};
 for(let frame=0;frame<120;frame++){warning.clearTransform();warning.render(frame/60,false,false);}
 assert.equal(updates,0,'No display tilt means no transform to clear');
 warning.renderFall(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,false);warning.clearTransform();
 assert(robot.getWorldQuaternion(new THREE.Quaternion()).angleTo(new THREE.Quaternion())<1e-6);
});
test('balance updates reuse their CoM line and GPU geometry as the projection moves',()=>{
 const {BalanceVisualizer}=req('./src/balance-visualizer.ts'),scene=new THREE.Scene(),view=new BalanceVisualizer(scene);
 const result={state:'balanced',projection:new THREE.Vector3(),polygon:[{x:-.1,z:-.1},{x:.1,z:-.1},{x:.1,z:.1},{x:-.1,z:.1}],marginMeters:.1,approximate:false};
 view.update(result,new THREE.Vector3(0,1,0));
 const line=scene.children[0].children.find(child=>child.isLine&&!child.isLineLoop),geometry=line.geometry;
 result.projection.set(.02,0,.03);view.update(result,new THREE.Vector3(.02,.95,.03));
 assert(line.parent===scene.children[0],'Existing line stays attached');assert(line.geometry===geometry);
 assert(Math.abs(geometry.attributes.position.getX(0)-.02)<1e-6);assert(Math.abs(geometry.attributes.position.getY(1)-.95)<1e-6);
 view.dispose();assert.equal(scene.children.length,0);
});
