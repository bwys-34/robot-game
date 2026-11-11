const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),project=path.resolve(__dirname,'../demos/g1'),r=createRequire(path.join(project,'package.json'));
const THREE=r('three'),{GLTFLoader}=r('three/examples/jsm/loaders/GLTFLoader.js'),esbuild=r('esbuild');
require.extensions['.ts']=(m,f)=>m._compile(esbuild.transformSync(fs.readFileSync(f,'utf8'),{loader:'ts',format:'cjs',target:'node24'}).code,f);
async function rig(){const b=fs.readFileSync(path.join(project,'assets/g1-sample.glb'));const {scene}=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const {DriveRig}=require('../demos/g1/src/drive-rig.ts');return new DriveRig(scene);}
const idle={x:0,z:0,yaw:Math.PI,vx:0,vz:0,speed:0,angular:0,gesture:null,paused:false};
test('debug dance preview moves upper joints smoothly while suspension, feet and pause remain independent',async()=>{
 const g=await rig(),{DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const {HOIST_CONFIG:H}=require('../demos/g1/src/drive-hoist.ts');
 const s=new DriveState({experience:'free',obstacles:[]});s.start();s.x=H.x;s.z=H.z;
 const frame=()=>{s.update(1/60,N);g.update(1/60,s);};for(let i=0;i<80;i++)frame();s.update(1/60,{...N,hoistAction:true});for(let i=0;i<100;i++)frame();
 s.setMode('damp');s.setMode('debug');for(let i=0;i<80;i++)frame();s.previewDance('cheerdance');
 let peak=0;for(let i=0;i<110;i++){
  const prior=g.joints.get('right_shoulder_pitch_joint').angle;frame();const current=g.joints.get('right_shoulder_pitch_joint').angle;peak=Math.max(peak,Math.abs(current));
  assert(Math.abs(current-prior)<8);assert(s.hoist.supported);assert(Math.min(...g.soleHeights())>.05);assert.equal(g.footfalls.length,0);assert.equal(s.gesture,null);
 }
 assert(peak>45,'A preview must visibly animate the real model');
 s.suspend();const before=[...g.joints.values()].map(j=>j.angle);for(let i=0;i<60;i++)frame();assert.deepEqual([...g.joints.values()].map(j=>j.angle),before);
 s.start();s.setMode('stand');for(let i=0;i<100;i++)frame();assert(Math.abs(g.joints.get('right_shoulder_pitch_joint').angle+8)<.1);
});
test('hoist suspension raises real feet, relaxes without gait events and releases continuously',async()=>{
 const g=await rig(),{DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const {HOIST_CONFIG:H}=require('../demos/g1/src/drive-hoist.ts'),s=new DriveState({experience:'free',obstacles:[]});s.start();Object.assign(s,{x:H.x,z:H.z});
 const frame=c=>{const y=g.body.position.y,angles=[...g.joints.values()].map(j=>j.angle);s.update(1/60,{...N,...c});g.update(1/60,s);
  assert(Math.min(...g.soleHeights())>=-.001,'Supported feet cannot penetrate the floor');
  assert(Math.abs(g.body.position.y-y)<.035,'Attachment, relaxation and release must not teleport root height');
  [...g.joints.values()].forEach((j,i)=>assert(Math.abs(j.angle-angles[i])<9,'Joint transition cannot snap'));
 };
 g.update(1/60,s);for(let i=0;i<70;i++)frame();frame({hoistAction:true});for(let i=0;i<90;i++)frame();
 assert(s.hoist.supported);assert(Math.min(...g.soleHeights())>.05);
 const passivePoses=[];
 for(const mode of ['damp','zero']){s.setMode(mode);for(let i=0;i<120;i++){frame();assert.equal(g.footfalls.length,0);assert.equal(g.actionSounds.length,0);}assert(Math.min(...g.soleHeights())>.05);passivePoses.push(g.joints.get('left_knee_joint').angle);}
 assert(passivePoses[0]-passivePoses[1]>8,'Damping retains a flexed pose while zero torque visibly relaxes further');
 s.suspend();const pose=[g.body.position.y,...[...g.joints.values()].map(j=>j.angle)];for(let i=0;i<20;i++)frame();assert.deepEqual([g.body.position.y,...[...g.joints.values()].map(j=>j.angle)],pose);s.start();
 s.setMode('stand');for(let i=0;i<80;i++)frame();frame({hoistAction:true});for(let i=0;i<100;i++)frame();assert.equal(s.hoist.phase,'detached');assert(g.soleHeights().every(y=>y<.02));assert.equal(s.falls,0);
});
test('wall impacts tilt the real shell continuously, stay above ground and recover upright',async()=>{
 const {DriveState}=require('../demos/g1/src/drive-state.ts'),{DRIVE_CONFIG,EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const {room}=DRIVE_CONFIG;
 for(const [x,z,yaw] of [[room.maxX-.7,0,Math.PI/2],[room.minX+.7,0,-Math.PI/2],[0,room.maxZ-.7,0],[0,room.minZ+.7,Math.PI]]){
  const g=await rig(),s=new DriveState({experience:'free',obstacles:[]});Object.assign(s,{x,z,yaw});s.start();g.update(1/60,s);
  let collided=false;const floor=new THREE.Box3();
  const frame=command=>{
   const rotation=g.body.quaternion.clone(),root=g.group.position.clone();s.update(1/60,command);g.update(1/60,s);
   assert(g.body.quaternion.toArray().every(Number.isFinite),'Collision rotations must remain finite');
   assert(g.body.quaternion.angleTo(rotation)<.25,'Impact and recovery must not snap the shell');
   assert(g.group.position.distanceTo(root)<.04,'Recoil must move smoothly');
   assert(floor.setFromObject(g.model).min.y>=-.001,'Falling shell must stay above the floor');
  };
  for(let i=0;i<300&&s.body!=='fallen';i++){frame({...N,forward:1});collided ||= s.fallCause==='collision';}
  assert(collided&&s.body==='fallen','Each wall should cause a complete fall');assert.equal(s.falls,1);
  assert(new THREE.Vector3(0,1,0).applyQuaternion(g.body.quaternion).y<.15,'The model visibly lies down');
  s.recover();for(let i=0;i<260;i++)frame(N);
  assert.equal(s.body,'upright');assert.equal(s.mode,'stand');assert(g.body.quaternion.angleTo(new THREE.Quaternion())<.01);
  assert(g.soleHeights().every(y=>y<.03),'Both feet return to the ground');
 }
});
test('suspended debug applies measured bounded joint angles, preserves floor clearance and pauses cleanly',async()=>{
 const g=await rig(),{DriveState}=require('../demos/g1/src/drive-state.ts'),{EMPTY_DRIVE_COMMAND:N}=require('../demos/g1/src/drive-config.ts');
 const s=new DriveState({experience:'mission'});s.start();g.update(1/60,s);s.setMode('damp');
 for(let t=0;t<100;t++){s.update(1/60,N);g.update(1/60,s);}s.setMode('debug');
 for(let t=0;t<160;t++){s.update(1/60,N);g.update(1/60,s);assert(g.soleHeights().every(y=>y>=-.001));}
 for(const id of ['elbow','shoulder','waist']){
  s.lab.select(id);for(let t=0;t<90;t++){s.update(1/60,{...N,forward:.3});g.update(1/60,s);}
  assert(Math.abs(g.joints.get(s.lab.spec.joint).angle-s.lab.angle)<.001,'Displayed actual angle must match rendered joint');
  assert.equal(g.footfalls.length,0);assert.equal(g.actionSounds.length,0);
 }
 s.suspend();const angle=g.joints.get(s.lab.spec.joint).angle;g.update(1/60,s);assert.equal(g.joints.get(s.lab.spec.joint).angle,angle);
});
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

test('walking visibly counter-swings shoulders and bends elbows at every world heading',async()=>{
 for(const yaw of [0,Math.PI/2,Math.PI])for(const direction of [1,-1]){
  const g=await rig(),s={...idle,yaw,vx:Math.sin(yaw)*.24*direction,vz:Math.cos(yaw)*.24*direction,speed:.24};
  const ranges={};let opposite=0,samples=0;
  for(let i=0;i<240;i++){
   s.x+=s.vx/60;s.z+=s.vz/60;g.update(1/60,s);if(i<60)continue;
   for(const [n,j]of g.joints)if(/shoulder_pitch|elbow/.test(n)){const r=ranges[n]??=[Infinity,-Infinity];r[0]=Math.min(r[0],j.angle);r[1]=Math.max(r[1],j.angle);}
   const arms=g.joints.get('left_shoulder_pitch_joint').angle-g.joints.get('right_shoulder_pitch_joint').angle;
   // Hip angles alone miss knee compensation; compare actual end positions.
   const feet=g.footPositions().map(p=>g.group.worldToLocal(p));
   const hands=['left','right'].map(side=>g.group.worldToLocal(g.model.getObjectByName(`${side}_rubber_hand`).getWorldPosition(new THREE.Vector3())));
   const legSplit=feet[0].z-feet[1].z,handSplit=hands[0].z-hands[1].z;
   if(Math.abs(arms)>4&&Math.abs(legSplit)>.025){samples++;if(handSplit*legSplit<0)opposite++;}
  }
  for(const [n,[low,high]]of Object.entries(ranges))assert(high-low>(n.includes('elbow')?3:12),`Visible ${n} swing at heading ${yaw}, direction ${direction}: ${high-low}`);
  assert(samples>30&&opposite/samples>.75,`Arms should oppose the same-side leg: ${opposite}/${samples}`);
  Object.assign(s,{vx:0,vz:0,speed:0});for(let i=0;i<240;i++)g.update(1/60,s);
  for(const side of ['left','right'])assert(Math.abs(g.joints.get(`${side}_shoulder_pitch_joint`).angle+8)<.2,'Stop returns both arms to rest');
 }
});

test('sideways, turning and in-place steps retain restrained upper-body coordination',async()=>{
 for(const movement of [{vx:.24,vz:0,speed:.24},{vx:0,vz:0,speed:0,angular:1.4},{vx:0,vz:0,speed:0,stepping:true}]){
  const g=await rig(),s={...idle,...movement},ranges=[[Infinity,-Infinity],[Infinity,-Infinity]];
  for(let i=0;i<240;i++){
   s.x+=s.vx/60;s.z+=s.vz/60;s.yaw+=s.angular/60;g.update(1/60,s);if(i<60)continue;
   ['left','right'].forEach((side,index)=>{const a=g.joints.get(`${side}_shoulder_pitch_joint`).angle;ranges[index][0]=Math.min(ranges[index][0],a);ranges[index][1]=Math.max(ranges[index][1],a);});
  }
  assert(ranges.every(([lo,hi])=>hi-lo>5&&hi-lo<48),`Restrained visible arms for ${JSON.stringify(movement)}: ${JSON.stringify(ranges)}`);
 }
});

test('footfall feedback occurs once at actual step completion, never while paused or reset',async()=>{
 const g=await rig(),s={...idle,stepping:true};assert(Array.isArray(g.footfalls),'Rig must report actual landings');
 const sides=[];
 for(let i=0;i<180;i++){g.update(1/60,s);for(const e of g.footfalls){sides.push(e.side);assert(e.strength>0&&e.strength<=1);}}
 assert(sides.length>=6&&sides.length<=9,`One event per visible step: ${sides}`);assert(sides.every((v,i)=>!i||v!==sides[i-1]));
 g.update(1/60,{...s,paused:true});assert.equal(g.footfalls.length,0);
 g.reset();assert.equal(g.footfalls.length,0);
 for(let i=0;i<180;i++)g.update(1/60,idle);assert.equal(g.footfalls.length,0,'Still pose cannot emit footsteps');
});

test('three clap sounds occur when the actual hands close, not at startup',async()=>{
 const g=await rig(),s={...idle,gesture:'clap'};assert(Array.isArray(g.actionSounds),'Rig must publish synchronized action sounds');let claps=0,done=null;
 for(let i=0;i<600&&!done;i++){
  done=g.update(1/60,s);for(const e of g.actionSounds)if(e.cue==='clap'){
   claps++;const hands=['left','right'].map(side=>g.model.getObjectByName(`${side}_rubber_hand`).getWorldPosition(new THREE.Vector3()));assert(hands[0].distanceTo(hands[1])<.29,'Clap must coincide with hands meeting');
  }
 }
 assert.equal(claps,3);assert.equal(done,'clap');
});

test('jump/flip sounds follow liftoff and landing; pause and mode interruption cannot continue the soundtrack',async()=>{
 for(const gesture of ['jump','backflip']){
  const g=await rig(),s={...idle,gesture};assert(Array.isArray(g.actionSounds),'Rig must publish synchronized action sounds');let landings=0,takeoffs=0,done=null;
  for(let i=0;i<600&&!done;i++){
   done=g.update(1/60,s);for(const e of g.actionSounds){if(e.cue==='landing'){landings++;assert(Math.min(...g.soleHeights())<.02);}if(e.cue==='swoosh')takeoffs++;}
  }
  assert.equal(landings,1);assert(takeoffs>=1);
  g.update(1/60,{...s,paused:true});assert.equal(g.actionSounds.length,0);
  g.update(1/60,{...s,gesture:null,mode:'zero',body:'falling',bodyProgress:.2});assert.equal(g.actionSounds.length,0);
 }
});
