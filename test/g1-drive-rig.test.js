const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),project=path.resolve(__dirname,'../demos/g1'),r=createRequire(path.join(project,'package.json'));
const THREE=r('three'),{GLTFLoader}=r('three/examples/jsm/loaders/GLTFLoader.js'),esbuild=r('esbuild');
require.extensions['.ts']=(m,f)=>m._compile(esbuild.transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,f);
async function rig(){const b=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));const {scene}=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const {DriveRig}=require('../demos/g1/src/drive-rig.ts');return new DriveRig(scene);}
const idle={x:0,z:0,yaw:Math.PI,vx:0,vz:0,speed:0,angular:0,gesture:null,paused:false};
test('drive rig respects URDF/UI limits and ground contact across forward, sideways and turning steps',async()=>{
 const g=await rig(),state={...idle};let leftLift=0,rightLift=0;
 for(let i=0;i<300;i++){
   state.z-=.006;state.x+=i>150?.0015:0;state.vz=-.36;state.vx=i>150?.09:0;state.speed=.37;state.yaw+=i>200?.004:0;state.angular=i>200?.24:0;
   g.update(1/60,state);
   const heights=g.soleHeights();leftLift=Math.max(leftLift,heights[0]);rightLift=Math.max(rightLift,heights[1]);
   assert(Math.min(...heights)>=-.0001,`Foot penetrated ground ${heights}`);assert(Math.min(...heights)<.015,'At least one sole remains grounded');
   for(const [name,joint] of g.joints){assert(joint.angle>=joint.min-1e-6&&joint.angle<=joint.max+1e-6,name);}
 }
 assert(leftLift>.015&&rightLift>.015,`Both legs need actual steps ${leftLift}/${rightLift}`);
 assert(g.group.position.distanceTo(new THREE.Vector3(state.x,0,state.z))<1e-6);
 state.vz=state.vx=state.angular=state.speed=0;for(let i=0;i<150;i++)g.update(1/60,state);
 assert(g.soleHeights().every(y=>y<.025),'Stopping returns both feet to the floor');
});
test('authored wave completes without translating the robot, and pause freezes the entire pose',async()=>{
 const g=await rig(),s={...idle,gesture:'wave'};let peak=0,completed=null;
 for(let i=0;i<600&&!completed;i++){completed=g.update(1/60,s);peak=Math.max(peak,Math.abs(g.joints.get('right_shoulder_pitch_joint').angle));}
 assert.equal(completed,'wave');assert(peak>50);assert.equal(g.group.position.x,0);assert.equal(g.group.position.z,0);
 const angles=[...g.joints].map(([n,j])=>[n,j.angle]);g.update(1,{...s,paused:true});assert.deepEqual([...g.joints].map(([n,j])=>[n,j.angle]),angles);
});

test('full-speed reverse, side steps and on-the-spot turning settle without crossing the legs',async()=>{
 for(const [vx,vz,angular] of [[0,.58,0],[.58,0,0],[-.58,0,0],[0,0,1.4]]){
  const g=await rig(),state={...idle,vx,vz,angular,speed:Math.hypot(vx,vz)};
  for(let i=0;i<180;i++){
   state.x+=vx/60;state.z+=vz/60;state.yaw+=angular/60;g.update(1/60,state);
   assert(Math.min(...g.soleHeights())>=-.0001);
   assert(Math.max(...g.soleHeights())<.13,`Swing must stay a small step: ${vx}/${vz}/${angular}, frame ${i}, ${g.soleHeights()}`);
  }
  state.vx=state.vz=state.angular=state.speed=0;for(let i=0;i<180;i++)g.update(1/60,state);
  assert(g.soleHeights().every(y=>y<.025),'Both feet settle');
  const [left,right]=g.footPositions().map(p=>g.group.worldToLocal(p));
  assert(left.x>right.x,`Left and right leg order must be preserved: ${vx}/${vz}/${angular}, ${left.toArray()}/${right.toArray()}`);
  assert(Math.abs(left.z)<.07&&Math.abs(right.z)<.07,'Stopped feet return below the body');
 }
});

test('lateral saturation recovers to symmetric upright legs after several direction changes',async()=>{
 const g=await rig(),s={...idle};
 for(const [vx,vz,angular] of [[.58,0,0],[-.58,0,0],[0,.58,0],[0,0,1.4],[0,-.58,0],[0,0,-1.4]]){
  Object.assign(s,{vx,vz,angular,speed:Math.hypot(vx,vz)});
  const low=[Infinity,Infinity],high=[-Infinity,-Infinity];
  for(let i=0;i<180;i++){
   s.x+=vx/60;s.z+=vz/60;s.yaw+=angular/60;g.update(1/60,s);
   ['left','right'].forEach((side,j)=>{const angle=g.joints.get(`${side}_knee_joint`).angle;if(i>40){low[j]=Math.min(low[j],angle);high[j]=Math.max(high[j],angle);}});
  }
  assert(high.every((v,j)=>v-low[j]>8),`Each direction must visibly animate both knees: ${vx}/${vz}/${angular}, ${low}/${high}`);
  Object.assign(s,{vx:0,vz:0,angular:0,speed:0});for(let i=0;i<180;i++)g.update(1/60,s);
  for(const side of ['left','right']){
   assert(Math.abs(g.joints.get(`${side}_hip_roll_joint`).angle)<1,`${side} hip remained crooked after ${vx}/${vz}/${angular}`);
   assert(Math.abs(g.joints.get(`${side}_hip_yaw_joint`).angle)<1,`${side} hip yaw did not settle`);
  }
  assert(Math.abs(g.joints.get('left_knee_joint').angle-g.joints.get('right_knee_joint').angle)<1,'Resting knees must be symmetric');
 }
});

test('reset restores neutral joint angles immediately, including after a paused side-step',async()=>{
 const g=await rig(),s={...idle,vx:.58,speed:.58};
 for(let i=0;i<100;i++){s.x+=s.vx/60;g.update(1/60,s);}
 g.reset();
 for(const side of ['left','right'])assert(Math.abs(g.joints.get(`${side}_hip_roll_joint`).angle)<.01,'Reset must remove the prior sideways lean');
});

test('damping mode cancels an active clip and returns the arms smoothly without moving the root',async()=>{
 const g=await rig(),s={...idle,mode:'performance',gesture:'wave'};
 for(let i=0;i<100;i++)g.update(1/60,s);
 const prior=g.joints.get('right_shoulder_pitch_joint').angle;
 assert(Math.abs(prior)>30);s.gesture=null;s.mode='damp';g.update(1/60,s);
 assert(Math.abs(g.joints.get('right_shoulder_pitch_joint').angle-prior)<8,'Mode transitions cannot snap');
 for(let i=0;i<180;i++)g.update(1/60,s);
 assert(Math.abs(g.joints.get('right_shoulder_pitch_joint').angle)<5,'Damping arm settles downward');
 assert.equal(g.group.position.x,0);assert.equal(g.group.position.z,0);
});

test('all fifteen drive clips complete using real joint limits and return to a standing base',async()=>{
 const {DRIVE_ACTIONS}=require('../demos/g1/src/drive-actions.ts');assert.equal(DRIVE_ACTIONS.length,15);
 for(const action of DRIVE_ACTIONS){
  const g=await rig(),s={...idle,mode:'performance',gesture:action.id};let completed=null,peak=0;
  for(let i=0;i<900&&!completed;i++){
   completed=g.update(1/60,s);peak=Math.max(peak,...[...g.joints].filter(([n])=>/shoulder|elbow|waist/.test(n)).map(([,j])=>Math.abs(j.angle)));
   for(const [name,j]of g.joints)assert(j.angle>=j.min-1e-6&&j.angle<=j.max+1e-6,`${action.id}/${name}`);
   assert(Math.min(...g.soleHeights())>=-.0001,`${action.id} penetrated floor`);
  }
  assert.equal(completed,action.id);assert(peak>20,`${action.id} needs visible motion`);
 }
});

test('backflip rotates the whole body through the air and lands upright without penetrating the floor',async()=>{
 const g=await rig(),s={...idle,mode:'performance',gesture:'backflip'};let inverted=false,airborne=false,completed=null;
 for(let i=0;i<600&&!completed;i++){
  completed=g.update(1/60,s);const up=new THREE.Vector3(0,1,0).applyQuaternion(g.body.quaternion);inverted ||= up.y<-.8;airborne ||= Math.min(...g.soleHeights())>.2;
  assert(new THREE.Box3().setFromObject(g.model).min.y>=-.001,'Entire shell stays above the floor');
 }
 assert(inverted&&airborne,'A real full-body flip, not only an arm clip');assert.equal(completed,'backflip');assert(g.body.quaternion.angleTo(new THREE.Quaternion())<.01);assert(Math.max(...g.soleHeights())<.03);
});

test('a mode change during a flip falls smoothly, pause freezes it, recovery restores both feet',async()=>{
 const g=await rig(),s={...idle,mode:'performance',gesture:'backflip',body:'upright',bodyProgress:0};
 for(let i=0;i<85;i++)g.update(1/60,s);
 const before=g.body.quaternion.clone(),height=g.body.position.y;s.mode='zero';s.gesture=null;s.body='falling';s.bodyProgress=0;g.update(1/60,s);assert(g.body.quaternion.angleTo(before)<.03,'Interrupting a trick cannot snap upright');assert(Math.abs(g.body.position.y-height)<.015,'Interrupting in mid-air must not teleport to the floor');
 s.bodyProgress=.3;g.update(1/60,s);const pose=g.body.quaternion.clone();g.update(1,{...s,paused:true});assert(g.body.quaternion.angleTo(pose)<1e-6);
 s.body='fallen';s.bodyProgress=1;g.update(1/60,s);assert(new THREE.Vector3(0,1,0).applyQuaternion(g.body.quaternion).y<.15,'Fallen shell lies on the floor');
 s.body='recovering';s.bodyProgress=0;g.update(1/60,s);for(let i=1;i<=120;i++){s.bodyProgress=i/120;g.update(1/60,s);assert(new THREE.Box3().setFromObject(g.model).min.y>=-.001);}
 s.body='upright';s.mode='stand';for(let i=0;i<120;i++)g.update(1/60,s);assert(g.body.quaternion.angleTo(new THREE.Quaternion())<.01);assert(g.soleHeights().every(y=>y<.03));
});

test('continuous stepping alternates both feet without changing the root position',async()=>{
 const g=await rig(),s={...idle,stepping:true};let peak=[0,0];for(let i=0;i<240;i++){g.update(1/60,s);g.soleHeights().forEach((v,j)=>peak[j]=Math.max(peak[j],v));}assert(peak.every(v=>v>.025));assert.equal(g.group.position.length(),0);
});

test('high speed side/reverse locomotion still alternates feet and recovers symmetric hip rolls',async()=>{
 const g=await rig(),s={...idle};for(const [vx,vz]of [[.82,0],[-.82,0],[0,.82]]){
  Object.assign(s,{vx,vz,speed:.82});const lift=[0,0];for(let i=0;i<150;i++){s.x+=vx/60;s.z+=vz/60;g.update(1/60,s);g.soleHeights().forEach((v,j)=>lift[j]=Math.max(lift[j],v));}assert(lift.every(v=>v>.02));
  Object.assign(s,{vx:0,vz:0,speed:0});for(let i=0;i<180;i++)g.update(1/60,s);for(const side of ['left','right'])assert(Math.abs(g.joints.get(`${side}_hip_roll_joint`).angle)<1);
 }
});

test('clapping visibly brings both hands together in front of the chest',async()=>{
 const g=await rig(),s={...idle,yaw:0,mode:'performance',gesture:'clap'};let minimum=Infinity,frontAtClose=0,heightAtClose=0,meshGap=Infinity;
 for(let i=0;i<250;i++){
  g.update(1/60,s);
  const points=['left','right'].map(side=>g.group.worldToLocal(g.model.getObjectByName(`${side}_rubber_hand`).getWorldPosition(new THREE.Vector3())));
  const distance=points[0].distanceTo(points[1]);if(distance<minimum){minimum=distance;frontAtClose=Math.min(...points.map(p=>p.z));heightAtClose=Math.min(...points.map(p=>p.y));}
  const boxes=['left','right'].map(side=>new THREE.Box3().setFromObject(g.model.getObjectByName(`${side}_rubber_hand`)));
  const gap=boxes[0].min.x-boxes[1].max.x;meshGap=Math.min(meshGap,gap);assert(gap>=-.001,'Fixed hand meshes must not cross while clapping');
 }
 assert(minimum<.28&&meshGap<.04,`Hands need a visible clap without crossing: ${minimum}, surface gap ${meshGap}`);
 assert(frontAtClose>.2&&heightAtClose>.87,'Hands meet above the waist, in front of the torso');
});
