const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const req=createRequire(path.resolve(__dirname,'../demos/g1/package.json'));
require.extensions['.ts']=(module,filename)=>module._compile(req('esbuild').transformSync(fs.readFileSync(filename,'utf8'),{loader:'ts',format:'cjs'}).code,filename);
test('training drags use the chosen axis on the same limb and never move unrelated limbs',()=>{
 const filename=path.resolve(__dirname,'../demos/g1/src/training-drag.ts');
 assert(fs.existsSync(filename),'Provide a training-only axis resolver');
 const {resolveTrainingControl}=req(filename),{G1_INTERACTION_CONFIG:config}=req(path.resolve(__dirname,'../demos/g1/src/interaction-config.ts'));
 const controls=config.partControls,find=name=>controls.find(control=>control.jointName===name);
 const task={joints:[{name:'right_shoulder_pitch_joint'},{name:'right_shoulder_roll_joint'},{name:'right_elbow_joint'}]};
 assert.equal(resolveTrainingControl(task,'right_shoulder_roll_joint','right_rubber_hand',find('right_wrist_yaw_joint'),controls),find('right_shoulder_roll_joint'));
 assert.equal(resolveTrainingControl(task,'right_elbow_joint','right_shoulder_yaw_link',find('right_shoulder_yaw_joint'),controls),find('right_elbow_joint'));
 assert.equal(resolveTrainingControl(task,'right_elbow_joint','left_knee_link',find('left_knee_joint'),controls),undefined);
 const both={joints:[...task.joints,{name:'left_shoulder_pitch_joint'},{name:'waist_pitch_joint'}]};
 assert.equal(resolveTrainingControl(both,'right_elbow_joint','left_elbow_link',find('left_elbow_joint'),controls),find('left_shoulder_pitch_joint'));
 assert.equal(resolveTrainingControl(both,'right_elbow_joint','torso_link',find('waist_yaw_joint'),controls),find('waist_pitch_joint'));
 assert.equal(resolveTrainingControl(both,'waist_pitch_joint','head_link',undefined,controls),undefined,'The fixed head is not a waist control');
});
