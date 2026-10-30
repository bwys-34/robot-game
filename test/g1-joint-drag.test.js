const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const project=path.resolve(__dirname,'../demos/g1'),req=createRequire(path.join(project,'package.json'));
require.extensions['.ts']=(m,f)=>m._compile(req('esbuild').transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs'}).code,f);
test('drag direction follows projected limb motion from opposite viewpoints and preserves live pose',async()=>{
 const filename=path.join(project,'src/joint-drag.ts');assert(fs.existsSync(filename),'Provide view-aware drag direction');
 const THREE=req('three'),{GLTFLoader}=req('three/examples/jsm/loaders/GLTFLoader.js');
 const bytes=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));
 const {scene}=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 const {PoseChain}=req(path.join(project,'src/pose-chain.ts')),{jointDragDirection}=req(filename);
 const pose=new PoseChain(scene),name='right_elbow_joint';pose.setControlledJoint(name,45);pose.update(2);
 const root=pose.root.position.clone(),hand=scene.getObjectByName('right_rubber_hand');
 const angles=Object.fromEntries([...pose.joints.keys()].map(name=>[name,pose.getAngle(name)]));
 const camera=new THREE.PerspectiveCamera(31,1,.01,100);
 for(const z of [-3,3]){
  camera.position.set(.6,1,z);camera.lookAt(0,.9,0);camera.updateMatrixWorld(true);
  const direction=jointDragDirection(pose,camera,name,'y');
  const a=pose.previewPose({...angles,[name]:40},()=>hand.getWorldPosition(new THREE.Vector3()).project(camera));
  const b=pose.previewPose({...angles,[name]:50},()=>hand.getWorldPosition(new THREE.Vector3()).project(camera));
  assert(direction.dot(new THREE.Vector2(b.x-a.x,a.y-b.y))>0,'Moving along the visible positive motion increases the angle');
  assert(Math.abs(direction.length()-1)<1e-6);
 }
 assert.equal(pose.getAngle(name),45);assert.equal(pose.getRequestedAngle(name),45);assert(pose.root.position.equals(root));
});
