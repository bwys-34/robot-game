const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function sample() {
  const { GLTFLoader } = await import('../demos/g1/node_modules/three/examples/jsm/loaders/GLTFLoader.js');
  const { KneeMotion } = await import(pathToFileURL(path.resolve(__dirname, '../demos/g1/src/knee-motion.mjs')));
  const buffer = fs.readFileSync(path.resolve(__dirname, '../demos/g1/assets/g1-sample.glb'));
  const { scene } = await new GLTFLoader().parseAsync(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength), '');
  scene.updateMatrixWorld(true);
  return { scene, motion:new KneeMotion(scene.getObjectByName('left_knee_joint')) };
}

test('膝关节按官方 GLB 局部轴旋转，保留安装旋转；脚随动，上游大腿不动', async () => {
  const { scene, motion } = await sample();
  const joint = scene.getObjectByName('left_knee_joint');
  const thigh = scene.getObjectByName('left_hip_yaw_link');
  const foot = scene.getObjectByName('left_ankle_roll_link');
  const base = joint.quaternion.clone();
  const thighBefore = thigh.matrixWorld.clone();
  const footBefore = foot.matrixWorld.clone();
  motion.setAngle(60);
  scene.updateMatrixWorld(true);
  assert(thigh.matrixWorld.equals(thighBefore));
  assert(!foot.matrixWorld.equals(footBefore));
  const relative = base.clone().invert().multiply(joint.quaternion);
  assert(Math.abs(relative.x) < 1e-6 && Math.abs(relative.y) < 1e-6);
  assert(Math.abs(relative.z + .5) < 1e-6, 'URDF Y axis maps to glTF -Z');
  motion.reset();
  assert(joint.quaternion.angleTo(base) < 1e-6);
});

test('限位来自模型，手动与播放都不越界，暂停和恢复零位有效', async () => {
  const { motion } = await sample();
  assert(Math.abs(motion.lower + 5) < .01);
  assert(Math.abs(motion.upper - 165) < .01);
  motion.setAngle(999);
  assert.equal(motion.angle, motion.upper);
  motion.setAngle(-999);
  assert.equal(motion.angle, motion.lower);
  motion.reset();
  motion.play();
  motion.update(1);
  assert(motion.angle > 0);
  for (let i=0; i<100; i++) {
    motion.update(.2);
    assert(motion.angle >= motion.lower && motion.angle <= motion.upper);
  }
  motion.pause();
  const stopped = motion.angle;
  motion.update(1);
  assert.equal(motion.angle, stopped);
  motion.reset();
  assert.equal(motion.angle, 0);
  assert.equal(motion.playing, false);
});
