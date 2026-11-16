const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const r=require('node:module').createRequire(path.resolve('demos/g1/package.json'));
test('Blender stage has a grounded 0.32m deck, two visible steps and a small unlit mesh budget',async()=>{
 const file=fs.readFileSync('demos/g1/assets/stage/stage.glb'),THREE=r('three'),{GLTFLoader}=r('three/examples/jsm/loaders/GLTFLoader.js');
 const gltf=await new GLTFLoader().parseAsync(file.buffer.slice(file.byteOffset,file.byteOffset+file.byteLength),'');
 const scene=gltf.scene,b=new THREE.Box3().setFromObject(scene),size=b.getSize(new THREE.Vector3());
 let meshes=0,triangles=0;const names=[];
 scene.traverse(n=>{if(!n.isMesh)return;meshes++;names.push(n.name);triangles+=(n.geometry.index?.count??n.geometry.attributes.position.count)/3;
  assert(n.material.isMeshBasicMaterial,'Authored unlit props must not add lighting/shadow cost');
 });
 assert.equal(meshes,4);assert(triangles<=500);assert(file.byteLength<40000);assert(Math.abs(b.min.y)<.0001);assert(Math.abs(b.max.y-.32)<.0001);
 assert(Math.abs(size.x-4.7)<.0001);assert(Math.abs(size.z-4.17)<.0001);assert(!names.includes('Cube'),'Original Blender scene is not part of the export');
 const json=JSON.parse(file.toString('utf8',20,20+file.readUInt32LE(12)).trim());
 assert(json.extensionsUsed.includes('KHR_materials_unlit'));
});
