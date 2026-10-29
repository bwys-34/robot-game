const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const project = path.resolve(__dirname, '../demos/g1');
const requireThree = createRequire(path.join(project, 'package.json'));
const THREE = requireThree('three');
const { GLTFLoader } = requireThree('three/examples/jsm/loaders/GLTFLoader.js');
const esbuild = requireThree('esbuild');

require.extensions['.ts']=(module,filename)=>{
  const result=esbuild.transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs',target:'node24'});
  module._compile(result.code,filename);
};

async function loadTs(relative, named) {
  const absolute = path.resolve(project,relative);
  const module = createRequire(absolute)(absolute);
  return named ? module[named] : module;
}

async function loadModel() {
  const buffer = fs.readFileSync(path.join(project,'assets/g1-sample.glb'));
  const { scene } = await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength),'');
  scene.updateMatrixWorld(true);
  return scene;
}

test('isolated knee has servo damping without moving hip, ankle or root',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel()),root=pose.root.position.clone();
  pose.setControlledJoint('left_knee_joint',60);
  assert.equal(pose.getAngle('left_knee_joint'),0,'Input sets a goal without teleporting');
  pose.update(1/60);
  assert(pose.getAngle('left_knee_joint')>0&&pose.getAngle('left_knee_joint')<30);
  pose.update(2);
  assert.equal(pose.getAngle('left_knee_joint'),60);
  assert.equal(pose.getAngle('left_hip_pitch_joint'),0);
  assert.equal(pose.getAngle('left_ankle_pitch_joint'),0);
  assert(pose.root.position.equals(root));
});

test('servo damping gives the same pose at 30 and 120 fps',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const a=new PoseChain(await loadModel()),b=new PoseChain(await loadModel());
  for(const pose of [a,b])pose.setControlledJoint('left_elbow_joint',90);
  for(let i=0;i<15;i++)a.update(1/30);
  for(let i=0;i<60;i++)b.update(1/120);
  assert(Math.abs(a.getAngle('left_elbow_joint')-b.getAngle('left_elbow_joint'))<1e-7);
});

test('single-axis micro gesture returns to its captured pose and can be interrupted',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  assert.equal(typeof pose.demonstrateJoint,'function');
  pose.demonstrateJoint('left_ankle_pitch_joint');pose.update(.2);
  assert(Math.abs(pose.getAngle('left_ankle_pitch_joint'))>1);
  assert.equal(pose.getAngle('left_knee_joint'),0);
  pose.update(1);assert.equal(pose.getAngle('left_ankle_pitch_joint'),0);
  pose.demonstrateJoint('left_knee_joint');pose.update(.2);
  pose.setControlledJoint('left_knee_joint',30);pose.update(2);
  assert.equal(pose.getAngle('left_knee_joint'),30);
});

test('teaching gestures hold visibly, retain their origin and cannot ratchet on repeated clicks',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  pose.demonstrateJoint('left_hip_pitch_joint');
  assert.equal(pose.motionSource,'teaching');
  pose.update(.4);assert.equal(pose.getAngle('left_hip_pitch_joint'),6);
  pose.demonstrateJoint('left_hip_pitch_joint');pose.update(.4);
  assert.equal(pose.getAngle('left_hip_pitch_joint'),6,'Second click must not turn 6 degrees into 12');
  pose.demonstrateJoint('left_knee_joint');pose.update(2);
  assert.equal(pose.getAngle('left_hip_pitch_joint'),0);
  assert.equal(pose.getAngle('left_knee_joint'),0);
  assert.equal(pose.motionSource,'idle');
  pose.setControlledJoint('left_hip_pitch_joint',35);pose.update(2);
  assert.equal(pose.motionSource,'manual','Manual origin persists after servo settles');
});

test('pausing manual motion and returning from teaching cannot erase a manually unsafe pose origin',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  pose.setControlledJoint('left_hip_pitch_joint',65);pose.update(2);pose.pause();
  assert.equal(pose.motionSource,'manual','Selecting a different control stops the servo, not the fall policy');
  pose.demonstrateJoint('left_knee_joint');pose.update(2);
  assert.equal(pose.getAngle('left_hip_pitch_joint'),65);
  assert.equal(pose.motionSource,'manual','Return to the manually authored baseline also restores its warning policy');
  pose.reset();assert.equal(pose.motionSource,'idle');
});

test('chain demo interpolates from arbitrary isolated poses and returns to coordinated standing',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  pose.setControlledJoint('left_knee_joint',70);pose.update(2);
  pose.setControlledJoint('left_elbow_joint',40);pose.update(2);
  const saved=[...pose.joints.values()].map(j=>j.node.quaternion.clone());
  assert.equal(typeof pose.demonstrateChain,'function');
  pose.demonstrateChain(45);
  [...pose.joints.values()].forEach((j,i)=>assert(j.node.quaternion.equals(saved[i]),'Mode switch cannot jump'));
  pose.update(.01);assert(Math.abs(pose.getAngle('left_knee_joint')-70)<1);
  for(let i=0;i<24;i++)pose.update(.1);
  assert(pose.getAngle('left_knee_joint')>30);
  assert(pose.getAngle('left_ankle_pitch_joint')<-15);
  assert(pose.getAngle('right_knee_joint')>0);
  assert(pose.pelvisDrop>.02);
  pose.update(10);
  assert.equal(pose.animating,false);
  assert.equal(pose.getAngle('left_knee_joint'),0);
  assert.equal(pose.getAngle('left_elbow_joint'),40,'Unrelated pose is preserved');
});

test('chain movement retains the support contact throughout its crouch, not only at keyframes',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel()),anchor=pose.supportFoot.getWorldPosition(new THREE.Vector3());
  pose.demonstrateChain(45);
  for(let i=0;i<120;i++){
    pose.update(1/30);
    assert(pose.supportFoot.getWorldPosition(new THREE.Vector3()).distanceTo(anchor)<.001,'Interpolation must preserve the support-foot anchor');
  }
});

test('safety scan restores every isolated angle, root and pending servo target',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  pose.setControlledJoint('left_hip_pitch_joint',35);pose.update(2);
  pose.setControlledJoint('right_ankle_pitch_joint',15);pose.update(2);
  pose.setControlledJoint('left_knee_joint',50);
  const angles=[...pose.joints.values()].map(j=>j.angle),root=pose.root.position.clone();
  pose.preview(80,()=>assert(pose.getAngle('left_knee_joint')===80));
  assert.deepEqual([...pose.joints.values()].map(j=>j.angle),angles);
  assert(pose.root.position.equals(root));
  pose.update(2);assert.equal(pose.getAngle('left_knee_joint'),50);
});

test('directional fall tilts 15 degrees without contaminating analysis and clears on reset',async()=>{
  const {WarningFeedback}=await loadTs('src/warning-feedback.ts');
  const scene=new THREE.Scene(),model=await loadModel();scene.add(model);
  const feet=['left_ankle_roll_link','right_ankle_roll_link'].map(name=>model.getObjectByName(name));
  const warning=new WarningFeedback(model,feet);
  assert.equal(typeof warning.renderFall,'function');
  warning.renderFall(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,false);
  assert(Math.abs(model.parent.quaternion.angleTo(new THREE.Quaternion())-Math.PI/12)<1e-6);
  const up=new THREE.Vector3(0,1,0).applyQuaternion(model.parent.quaternion);
  assert(up.x>0,'Lean toward CoM beyond the support');
  assert(Math.min(...feet.map(foot=>new THREE.Box3().setFromObject(foot).min.y))>=-1e-6);
  warning.clearTransform();assert.equal(model.parent.quaternion.angleTo(new THREE.Quaternion()),0);
  warning.renderFall(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,true);
  assert.equal(model.parent.quaternion.angleTo(new THREE.Quaternion()),0,'Reduced motion keeps text feedback only');
  warning.dispose();
});

test('GLB link mapping associates each link with its incoming joint and only exposes link meshes', async () => {
  const buildRobotMapping = await loadTs('src/robot-mapping.ts','buildRobotMapping');
  const model = await loadModel();
  const mapping = buildRobotMapping(model);
  assert.equal(mapping.linkToJoint.get('left_knee_link')?.name,'left_knee_joint');
  assert.equal(mapping.jointToLink.get('left_knee_joint')?.name,'left_knee_link');
  assert(mapping.pickableMeshes.some(mesh => mesh.userData.linkName==='left_knee_link'));
  assert(mapping.pickableMeshes.every(mesh => mesh.userData.interactiveLink===true));
});

test('a visible fixed pelvis shell blocks selection of the knee behind it',async()=>{
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {FreedomInteraction}=await loadTs('src/freedom-interaction.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const model=await loadModel();
  model.traverse(node=>{if(node.isMesh)node.material.side=THREE.DoubleSide;});
  const mapping=buildRobotMapping(model);
  const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
  const radius=box.getSize(new THREE.Vector3()).y/(2*Math.tan(THREE.MathUtils.degToRad(31/2)))*1.32;
  const camera=new THREE.PerspectiveCamera(31,1,.01,100);
  camera.position.setFromSpherical(new THREE.Spherical(radius,.25,0)).add(center);
  camera.lookAt(center);camera.updateMatrixWorld(true);
  const listeners=new Map();
  const canvas={addEventListener:(name,listener)=>listeners.set(name,listener),removeEventListener:name=>listeners.delete(name),getBoundingClientRect:()=>({left:0,top:0,width:1000,height:1000})};
  let picked;
  const picker=new FreedomInteraction(canvas,camera,mapping,G1_INTERACTION_CONFIG,result=>picked=result);
  const event={pointerId:1,button:0,isPrimary:true,clientX:437.5,clientY:525};
  listeners.get('pointerdown')(event);listeners.get('pointerup')(event);
  assert.equal(picked?.correct,false,'The visible fixed shell cannot select the knee behind it');
  assert.equal(picked?.linkName,'pelvis_contour_link');
  picker.dispose();
  assert.equal(listeners.size,0);
});

test('left knee pose drives ankle compensation, a nonzero support leg, and bounded pelvis drop', async () => {
  const { PoseChain } = await loadTs('src/pose-chain.ts');
  const { G1_INTERACTION_CONFIG } = await loadTs('src/interaction-config.ts');
  const model = await loadModel();
  const pose = new PoseChain(model,G1_INTERACTION_CONFIG);
  pose.setAngle(60);
  assert.equal(pose.getAngle('left_knee_joint'),60);
  assert(Math.abs(pose.getAngle('left_ankle_pitch_joint')+36)<.1);
  assert(pose.getAngle('right_knee_joint')>0,'support knee leaves URDF zero pose');
  assert(pose.pelvisDrop>0 && pose.pelvisDrop<=G1_INTERACTION_CONFIG.motion.maximumPelvisDropMeters);
  pose.reset();
  assert.equal(pose.getAngle('left_knee_joint'),0);
  assert.equal(pose.pelvisDrop,0);
  pose.transitionTo(30,.2);
  pose.update(.2);
  assert.equal(pose.getAngle('left_knee_joint'),30);
  pose.play();
  const before=pose.getAngle('left_knee_joint');
  pose.update(.1);
  assert.notEqual(pose.getAngle('left_knee_joint'),before);
  pose.pause();
  const paused=pose.getAngle('left_knee_joint');
  pose.update(.2);
  assert.equal(pose.getAngle('left_knee_joint'),paused);
});

test('balance analysis distinguishes inside, near-boundary, and outside support', async () => {
  const { analyzeBalance } = await loadTs('src/balance-analysis.ts');
  const polygon=[{x:-1,z:-1},{x:1,z:-1},{x:1,z:1},{x:-1,z:1}];
  assert.equal(analyzeBalance({projection:{x:0,z:0},polygon,margin:.1}).state,'balanced');
  assert.equal(analyzeBalance({projection:{x:.96,z:0},polygon,margin:.1}).state,'near');
  assert.equal(analyzeBalance({projection:{x:1.2,z:0},polygon,margin:.1}).state,'outside');
});

test('configured collision boxes report separation, proximity, and overlap', async () => {
  const { checkCollisionPair } = await loadTs('src/collision-analysis.ts');
  const box=(minX,maxX)=>new THREE.Box3(new THREE.Vector3(minX,0,0),new THREE.Vector3(maxX,1,1));
  assert.equal(checkCollisionPair(box(0,1),box(1.2,2),.1).state,'clear');
  assert.equal(checkCollisionPair(box(0,1),box(1.05,2),.1).state,'near');
  assert.equal(checkCollisionPair(box(0,1),box(.9,2),.1).state,'overlap');
});

test('official sample zero pose places its modeled center of mass within the combined foot support hull', async()=>{
  const model=await loadModel();
  const info=JSON.parse(fs.readFileSync(path.join(project,'assets/model-info.json'),'utf8'));
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const {SafetyAnalyzer}=await loadTs('src/safety-analysis.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const mapping=buildRobotMapping(model,info.links),pose=new PoseChain(model,G1_INTERACTION_CONFIG),safety=new SafetyAnalyzer(model,mapping,pose,G1_INTERACTION_CONFIG);
  assert.notEqual(safety.last.balance.state,'outside');
  assert.equal(safety.last.balance.approximate,false,'Exported mass data should be used instead of the bounding-box fallback');
  assert(safety.scan.combined.max>0);
  assert(safety.last.balance.polygon.length>=4);
  const {linkCenterOfMass}=await loadTs('src/balance-analysis.ts');
  const mass=linkCenterOfMass(model,[...mapping.links.values()]);
  assert(Math.abs(mass.mass-info.links.reduce((total,link)=>total+link.mass,0))<1e-6,'Mass accounting includes all URDF links exactly once');
  pose.setAngle(safety.scan.support.max+G1_INTERACTION_CONFIG.safety.scanStepDegrees);
  assert.equal(safety.evaluate().balance.state,'outside','The next unsupported sampled pose must actually warn');
});

test('pause freezes the initial transition and repeated playback keeps its endpoint', async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const model=await loadModel(),pose=new PoseChain(model);
  pose.transitionTo(40,1);pose.update(.3);pose.pause();
  const held=pose.getAngle('left_knee_joint');
  pose.update(.4);
  assert.equal(pose.getAngle('left_knee_joint'),held,'Pause must freeze auto transition too');
  pose.setAngle(40);pose.play();
  let laterPeak=0;
  for(let i=0;i<220;i++){pose.update(.02);if(i>140)laterPeak=Math.max(laterPeak,pose.getAngle('left_knee_joint'));}
  assert.equal(pose.targetAngle,40,'Playback endpoint is not overwritten by intermediate poses');
  assert(laterPeak>30,'A later cycle still reaches the target neighborhood');
});

test('coordinated crouch preserves sole orientation and anchors the support foot to the ground', async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const model=await loadModel(),pose=new PoseChain(model);
  const leftFoot=model.getObjectByName('left_ankle_roll_link'),rightFoot=model.getObjectByName('right_ankle_roll_link');
  const leftBase=leftFoot.getWorldQuaternion(new THREE.Quaternion());
  const rightBase=rightFoot.getWorldPosition(new THREE.Vector3());
  pose.setAngle(48);
  assert(leftFoot.getWorldQuaternion(new THREE.Quaternion()).angleTo(leftBase)<.001,'Hip and ankle compensation should keep the foot level');
  assert(rightFoot.getWorldPosition(new THREE.Vector3()).distanceTo(rightBase)<.001,'Support foot does not sink into or slide on the floor');
  assert(pose.pelvisDrop>.02&&pose.pelvisDrop<=pose.config.motion.maximumPelvisDropMeters+.001);
  const bodyBox=new THREE.Box3().setFromObject(model);
  assert(bodyBox.min.y>-.002,'Visible feet stay above the ground');
});

test('oriented proxies ignore the knee assembly seam but flag folded thigh/shin proximity',async()=>{
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const {CollisionDetector}=await loadTs('src/collision-analysis.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const model=await loadModel(),mapping=buildRobotMapping(model),pose=new PoseChain(model);
  const detector=new CollisionDetector(mapping,G1_INTERACTION_CONFIG.safety);
  assert(detector.evaluate().every(pair=>pair.state==='clear'),'Zero-pose assembly seams are excluded');
  pose.setAngle(150);
  assert(detector.evaluate().some(pair=>pair.id==='left-thigh-knee'&&pair.state!=='clear'),'Extreme folding approaches the thigh proxy');
});

test('free posing changes upper joints independently, preserves them during crouch, and resets all',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const model=await loadModel(),pose=new PoseChain(model);
  assert.equal(typeof pose.setControlledJoint,'function','Expose mechanical-only joint control');
  pose.setControlledJoint('left_elbow_joint',70);
  pose.setControlledJoint('waist_yaw_joint',35);
  pose.setControlledJoint('left_knee_joint',150);
  pose.update(2);
  assert.equal(pose.getAngle('left_knee_joint'),150,'Danger is not a motion lock');
  assert.equal(pose.getAngle('left_elbow_joint'),70);
  assert.equal(pose.getAngle('waist_yaw_joint'),35);
  pose.setControlledJoint('left_elbow_joint',999);
  pose.update(2);
  assert.equal(pose.getAngle('left_elbow_joint'),pose.getInteractionRange('left_elbow_joint').max);
  pose.reset();
  assert([...pose.joints.values()].every(joint=>joint.angle===0));
});

test('warning analysis reports danger without modifying the requested pose',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {SafetyAnalyzer}=await loadTs('src/safety-analysis.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const model=await loadModel(),pose=new PoseChain(model),mapping=buildRobotMapping(model);
  const safety=new SafetyAnalyzer(model,mapping,pose,G1_INTERACTION_CONFIG);
  pose.setAngle(150);
  const requested=model.getObjectByName('left_knee_joint').quaternion.clone();
  assert.equal(safety.evaluate().severity,'danger');
  assert.equal(pose.getAngle('left_knee_joint'),150);
  assert(requested.equals(model.getObjectByName('left_knee_joint').quaternion));
});

test('drag targets use real axes: thigh proxies hip pitch, foot proxies ankle pitch, fixed head stays fixed',async()=>{
  const {FreedomInteraction}=await loadTs('src/freedom-interaction.ts');
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const model=await loadModel(),mapping=buildRobotMapping(model);
  const canvas={addEventListener(){},removeEventListener(){}};
  const picker=new FreedomInteraction(canvas,new THREE.PerspectiveCamera(),mapping,G1_INTERACTION_CONFIG,()=>{});
  assert.equal(typeof picker.resolveControl,'function','Expose supported drag mapping');
  assert.equal(picker.resolveControl('left_ankle_roll_link').jointName,'left_ankle_pitch_joint');
  assert.equal(picker.resolveControl('left_hip_yaw_link').jointName,'left_hip_pitch_joint');
  assert.equal(picker.resolveControl('left_rubber_hand').jointName,'left_wrist_yaw_joint');
  assert.equal(picker.resolveControl('torso_link').jointName,'waist_pitch_joint');
  assert.equal(picker.resolveControl('head_link'),undefined);
  picker.dispose();
});

test('part drag uses total displacement, cancels cleanly, and never also triggers a click',async()=>{
  const {FreedomInteraction}=await loadTs('src/freedom-interaction.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const listeners=new Map(),captured=new Set();
  const canvas={style:{},addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:name=>listeners.delete(name),getBoundingClientRect:()=>({left:0,top:0,width:1000,height:1000}),setPointerCapture:id=>captured.add(id),hasPointerCapture:id=>captured.has(id),releasePointerCapture:id=>captured.delete(id)};
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(1,1,1));mesh.userData.linkName='left_ankle_roll_link';mesh.updateMatrixWorld(true);
  const mapping={meshesByLink:new Map([['left_ankle_roll_link',[mesh]]]),links:new Map(),joints:new Map([['left_ankle_pitch_joint',new THREE.Object3D()]]),linkToJoint:new Map()};
  const camera=new THREE.PerspectiveCamera(31,1,.01,100);camera.position.z=4;camera.updateMatrixWorld(true);
  let picks=0,starts=0,ends=0,locked=false,moves=[];
  const picker=new FreedomInteraction(canvas,camera,mapping,G1_INTERACTION_CONFIG,()=>picks++,{
    onStart:()=>starts++,onMove:(_part,delta)=>moves.push(delta),onEnd:()=>ends++,onCaptureChange:active=>locked=active,
  });
  const event=(x,y)=>({clientX:x,clientY:y,pointerId:1,button:0,isPrimary:true,preventDefault(){},stopImmediatePropagation(){}});
  listeners.get('pointerdown')(event(500,500));
  assert.equal(locked,true,'Reserve the gesture before OrbitControls handles it');
  listeners.get('pointermove')(event(500,400));listeners.get('pointermove')(event(500,350));
  assert.equal(starts,1);
  assert(moves[0]>0&&moves[1]>moves[0]);
  assert(Math.abs(moves[1]/moves[0]-1.5)<1e-6,'Use total offset from pointerdown, not accumulated deltas');
  listeners.get('pointercancel')(event(500,350));
  assert.equal(locked,false);assert.equal(ends,1);assert.equal(picks,0);assert.equal(captured.size,0);
  picker.dispose();assert.equal(listeners.size,0);
});

test('warning sway is render-only, does not accumulate, and respects reduced motion',async()=>{
  const {WarningFeedback}=await loadTs('src/warning-feedback.ts');
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {SafetyAnalyzer}=await loadTs('src/safety-analysis.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const scene=new THREE.Scene(),model=await loadModel();scene.add(model);
  const warning=new WarningFeedback(model),pose=new PoseChain(model),mapping=buildRobotMapping(model);
  const safety=new SafetyAnalyzer(model,mapping,pose,G1_INTERACTION_CONFIG);
  pose.setAngle(150);
  const initial=safety.evaluate(),joint=model.getObjectByName('left_knee_joint').quaternion.clone();
  warning.render(.3,true,false);
  assert(model.parent.quaternion.angleTo(new THREE.Quaternion())>.001);
  warning.clearTransform();
  assert(safety.evaluate().com.distanceTo(initial.com)<1e-9,'Displayed sway must not change the physical warning calculation');
  warning.render(.3,true,false);const once=model.parent.quaternion.clone();
  warning.render(.3,true,false);assert(once.equals(model.parent.quaternion),'Repeated frames do not accumulate tilt');
  warning.clearTransform();warning.render(.4,true,true);
  assert.equal(model.parent.quaternion.angleTo(new THREE.Quaternion()),0);
  assert(joint.equals(model.getObjectByName('left_knee_joint').quaternion));
  warning.dispose();assert.equal(model.parent,scene);
});

test('shoulder and elbow interaction bounds intersect URDF and mirror shoulder side swing',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const pose=new PoseChain(await loadModel());
  assert.equal(typeof pose.getInteractionRange,'function');
  for(const side of ['left','right']){
    pose.setControlledJoint(`${side}_elbow_joint`,-45);
    pose.update(2);
    assert.equal(pose.getAngle(`${side}_elbow_joint`),0,'Do not reverse the elbow');
    pose.setControlledJoint(`${side}_elbow_joint`,150);
    pose.update(2);
    assert(pose.getAngle(`${side}_elbow_joint`)<=120.001,'Never exceed the original mechanical maximum');
    pose.setControlledJoint(`${side}_shoulder_pitch_joint`,170);
    pose.update(2);
    assert.equal(pose.getAngle(`${side}_shoulder_pitch_joint`),90);
    pose.setControlledJoint(`${side}_shoulder_yaw_joint`,-140);
    pose.update(2);
    assert.equal(pose.getAngle(`${side}_shoulder_yaw_joint`),-80);
  }
  pose.setControlledJoint('left_shoulder_roll_joint',-50);
  pose.setControlledJoint('right_shoulder_roll_joint',50);
  pose.update(2);
  assert.equal(pose.getAngle('left_shoulder_roll_joint'),0);
  assert.equal(pose.getAngle('right_shoulder_roll_joint'),0);
  pose.setControlledJoint('left_knee_joint',165);
  pose.update(2);
  assert.equal(pose.getAngle('left_knee_joint'),165,'Knee trial range remains open');
});

test('upper body OBB coverage catches forearm in torso without flagging zero-pose overlaps',async()=>{
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {CollisionDetector}=await loadTs('src/collision-analysis.ts');
  const {G1_INTERACTION_CONFIG}=await loadTs('src/interaction-config.ts');
  const model=await loadModel(),pose=new PoseChain(model),mapping=buildRobotMapping(model);
  const detector=new CollisionDetector(mapping,G1_INTERACTION_CONFIG.safety);
  const initial=detector.evaluate();
  assert(initial.some(pair=>pair.first==='left_elbow_link'&&pair.second==='torso_link'),'Include left forearm vs torso');
  assert(initial.some(pair=>pair.first==='right_elbow_link'&&pair.second==='torso_link'),'Include right forearm vs torso');
  assert(initial.some(pair=>pair.first==='left_shoulder_yaw_link'&&pair.second==='left_hip_yaw_link'),'Include upper arm vs thigh');
  assert(initial.every(pair=>pair.state!=='overlap'),'Exclude mounting seams from overlaps');
  pose.setControlledJoint('left_shoulder_yaw_joint',-80);
  pose.update(2);
  assert(detector.evaluate().some(pair=>pair.first==='left_elbow_link'&&pair.second==='torso_link'&&pair.state==='overlap'));
  assert.equal(pose.getAngle('left_shoulder_yaw_joint'),-80,'Detection does not lock the requested pose');
});

test('warning labels follow the moving collision link and hide beyond the view frustum',async()=>{
  assert(fs.existsSync(path.join(project,'src/warning-anchor.ts')),'Provide link-based warning placement');
  const {chooseWarningLink,warningAnchorPoint,projectWarningAnchor}=await loadTs('src/warning-anchor.ts');
  const {buildRobotMapping}=await loadTs('src/robot-mapping.ts');
  const {PoseChain}=await loadTs('src/pose-chain.ts');
  const model=await loadModel(),mapping=buildRobotMapping(model),pose=new PoseChain(model);
  const pair={id:'arm',first:'left_elbow_link',second:'torso_link',state:'overlap'};
  assert.equal(chooseWarningLink([pair],mapping,'left_shoulder_yaw_joint'),'left_elbow_link');
  assert.equal(chooseWarningLink([{...pair,state:'clear'}],mapping,'left_shoulder_yaw_joint'),undefined);
  const camera=new THREE.PerspectiveCamera(31,1,.01,100);camera.position.set(0,.9,3);camera.lookAt(0,.9,0);camera.updateMatrixWorld(true);
  const initial=warningAnchorPoint(mapping,'left_elbow_link');
  const a=projectWarningAnchor(initial,camera,800,800,180,40);
  pose.setControlledJoint('left_shoulder_pitch_joint',60);
  pose.update(2);
  const b=projectWarningAnchor(warningAnchorPoint(mapping,'left_elbow_link'),camera,800,800,180,40);
  assert(a&&b&&Math.hypot(a.x-b.x,a.y-b.y)>10,'Moving the actual link changes label placement');
  assert.equal(projectWarningAnchor(new THREE.Vector3(0,.9,4),camera,800,800,180,40),null,'Hide labels behind the camera');
});

test('low knee guides fit above the ground and balance markers use depth occlusion',async()=>{
  assert(fs.existsSync(path.join(project,'src/guide-layout.ts')),'Provide world-space ground clearance for guides');
  const {guideRadiusAboveGround}=await loadTs('src/guide-layout.ts');
  const matrix=new THREE.Matrix4().makeTranslation(0,.055,0);
  const radius=guideRadiusAboveGround(matrix,new THREE.Vector3(),new THREE.Vector3(0,0,-1),.18,0,.012);
  assert(radius<=.043001&&radius>0);
  for(let degree=-5;degree<=165;degree+=5){const point=new THREE.Vector3(0,-radius,0).applyAxisAngle(new THREE.Vector3(0,0,-1),THREE.MathUtils.degToRad(degree)).applyMatrix4(matrix);assert(point.y>=.011999);}
  const {BalanceVisualizer}=await loadTs('src/balance-visualizer.ts');
  const scene=new THREE.Scene(),view=new BalanceVisualizer(scene);
  const {analyzeBalance}=await loadTs('src/balance-analysis.ts');
  view.update(analyzeBalance({projection:{x:0,z:0},polygon:[{x:-.1,z:-.1},{x:.1,z:-.1},{x:.1,z:.1},{x:-.1,z:.1}],margin:.01}),new THREE.Vector3(0,.6,0),.006);
  scene.traverse(object=>{if(object.isMesh||object.isLine){assert.equal(object.material.depthTest,true,'No x-ray markers through feet or torso');const box=new THREE.Box3().setFromObject(object);assert(box.min.y>=0,'No overlay geometry under the ground');}});
  view.dispose();
});

test('render-only imbalance sway keeps visible foot soles above the floor',async()=>{
  const {WarningFeedback}=await loadTs('src/warning-feedback.ts');
  const scene=new THREE.Scene(),model=await loadModel();scene.add(model);
  const feet=['left_ankle_roll_link','right_ankle_roll_link'].map(name=>model.getObjectByName(name));
  const warning=new WarningFeedback(model,feet,0);
  for(let step=0;step<30;step++){
    warning.clearTransform();warning.render(step*.1,true,false);
    assert(Math.min(...feet.map(foot=>new THREE.Box3().setFromObject(foot).min.y))>=-.00001,'Sway must not sink the supporting sole');
  }
  warning.clearTransform();assert.equal(model.parent.position.y,0);warning.dispose();
});
