const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const project = path.resolve(__dirname, '../demos/g1');
const requireDemo = createRequire(path.join(project, 'package.json'));
const esbuild = requireDemo('esbuild');

require.extensions['.ts'] = (module, filename) => {
  const result = esbuild.transformSync(fs.readFileSync(filename, 'utf8'), {
    loader: 'ts', format: 'cjs', target: 'node24',
  });
  module._compile(result.code, filename);
};

function game(joints = ['left_knee_joint', 'waist_yaw_joint'], fallDelaySeconds) {
  const filename = path.join(project, 'src/game-manager.ts');
  assert(fs.existsSync(filename), 'Provide the pure game state module');
  const { GameManager } = createRequire(filename)(filename);
  return new GameManager(joints, fallDelaySeconds);
}

function unlock(state) {
  state.discover('left_knee_joint');
  state.discover('waist_yaw_joint');
}

test('isolated input does not restart an already running outside timer',()=>{
  const state=game();
  state.update(.3,true);
  state.cancelChain(); // Input keeps the isolated mode selected.
  assert.equal(state.outsideSeconds,.3);
  assert.equal(state.update(.21,true),true);
});

test('authored teaching gestures cannot start or inherit a fall timer, manual trials still can',()=>{
  const state=game();
  state.update(.4,true);
  assert.equal(state.update(1.1,true,'teaching'),false);
  assert.equal(state.fallen,false);
  assert.equal(state.outsideSeconds,0);
  assert.equal(state.update(.4,true,'manual'),false);
  assert.equal(state.update(.11,true,'manual'),true);
});

test('observation allows chain previews without discovery and preserves challenge progress',()=>{
  const state=game();state.discover('left_knee_joint');
  assert.equal(typeof state.setExperience,'function');
  state.setExperience('observe');
  assert.equal(state.experience,'observe');
  assert.deepEqual(state.discover('waist_yaw_joint'),{added:false,unlockedNow:false});
  assert.equal(state.update(2,true,'manual'),false);
  assert.equal(state.beginChain(),true);
  state.finishChain();assert.equal(state.phase,'scan','An observation is not a completed game task');
  state.setExperience('challenge');
  assert.deepEqual([...state.discovered],['left_knee_joint']);
  assert.equal(state.beginChain(),false,'Challenge still needs all discoveries');
  assert.equal(state.update(.51,true,'manual'),true);
});

test('discovery accepts configured joints once and unlocks on the final discovery', () => {
  const state = game();
  assert.equal(state.phase, 'scan');
  assert.equal(state.mode, 'isolated');
  assert.equal(state.fallen, false);
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.unlocked, false);
  assert.deepEqual(state.discover('head_joint'), { added: false, unlockedNow: false });
  assert.deepEqual(state.discover('left_knee_joint'), { added: true, unlockedNow: false });
  assert.deepEqual(state.discover('left_knee_joint'), { added: false, unlockedNow: false });
  assert.equal(state.discovered.size, 1);
  assert.equal(state.phase, 'scan');
  assert.deepEqual(state.discover('waist_yaw_joint'), { added: true, unlockedNow: true });
  assert.equal(state.unlocked, true);
  assert.equal(state.phase, 'unlocked');
  assert.deepEqual([...state.discovered], ['left_knee_joint', 'waist_yaw_joint']);
  assert.deepEqual(state.discover('waist_yaw_joint'), { added: false, unlockedNow: false });
});

test('empty discovery tasks never unlock and duplicate configuration needs one discovery', () => {
  const empty = game([]);
  assert.equal(empty.unlocked, false);
  assert.equal(empty.beginChain(), false);
  const duplicated = game(['left_knee_joint', 'left_knee_joint']);
  assert.deepEqual(duplicated.discover('left_knee_joint'), { added: true, unlockedNow: true });
  assert.equal(duplicated.discovered.size, 1);
});

test('chain playback requires discovery and cannot start while fallen', () => {
  const state = game();
  assert.equal(state.beginChain(), false);
  assert.equal(state.mode, 'isolated');
  unlock(state);
  assert.equal(state.update(.6, true), true);
  assert.equal(state.beginChain(), false);
  state.resetPose();
  state.update(.3, true);
  assert.equal(state.beginChain(), true);
  assert.equal(state.mode, 'chain');
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.phase, 'unlocked');
});

test('discovery is blocked after a fall and during chain playback', () => {
  const state = game();
  state.update(.6, true);
  assert.deepEqual(state.discover('left_knee_joint'), { added: false, unlockedNow: false });
  state.resetPose();
  unlock(state);
  state.beginChain();
  assert.deepEqual(state.discover('left_knee_joint'), { added: false, unlockedNow: false });
});

test('canceling playback preserves the task while completed playback opens the challenge', () => {
  const state = game();
  unlock(state);
  state.beginChain();
  state.cancelChain();
  assert.equal(state.mode, 'isolated');
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.phase, 'unlocked');
  state.beginChain();
  state.finishChain();
  assert.equal(state.mode, 'isolated');
  assert.equal(state.phase, 'challenge');
});

test('imbalance must remain continuously outside for strictly more than half a second', () => {
  const state = game();
  assert.equal(state.update(.3, true), false);
  assert.equal(state.update(.2, true), false);
  assert.equal(state.outsideSeconds, .5);
  assert.equal(state.fallen, false);
  assert.equal(state.update(.001, true), true);
  assert.equal(state.fallen, true);
});

test('returning inside restarts the continuous imbalance timer', () => {
  const state = game();
  state.update(.4, true);
  assert.equal(state.update(.1, false), false);
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.update(.4, true), false);
  assert.equal(state.update(.11, true), true);
});

test('chain playback and collision-only warnings do not cause imbalance falls', () => {
  const state = game();
  unlock(state);
  state.beginChain();
  assert.equal(state.update(2, true), false);
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.fallen, false);
  state.finishChain();
  assert.equal(state.update(2, false), false, 'Caller passes outside=false for collision-only warnings');
  assert.equal(state.phase, 'challenge');
  assert.equal(state.update(.5, true), false, 'Chain time cannot leak into the isolated timer');
  assert.equal(state.update(.01, true), true);
});

test('invalid frame deltas neither advance nor reset the imbalance timer', () => {
  const state = game();
  state.update(.3, true);
  for (const delta of [-1, NaN, Infinity, -Infinity]) {
    assert.equal(state.update(delta, true), false);
    assert.equal(state.update(delta, false), false);
    assert.equal(state.outsideSeconds, .3);
  }
  assert.equal(state.update(.2, true), false);
  assert.equal(state.update(.01, true), true);
});

test('a fall triggers once and remains latched until pose reset', () => {
  const state = game();
  assert.equal(state.update(.6, true), true);
  assert.equal(state.update(1, true), false);
  assert.equal(state.update(1, false), false);
  assert.equal(state.fallen, true);
  state.resetPose();
  assert.equal(state.fallen, false);
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.mode, 'isolated');
  assert.equal(state.update(.6, true), true);
});

test('early falls preserve progress and only a challenge fall completes the task', () => {
  const state = game();
  state.discover('left_knee_joint');
  state.update(.6, true);
  assert.equal(state.phase, 'scan');
  state.resetPose();
  assert.deepEqual([...state.discovered], ['left_knee_joint']);
  state.discover('waist_yaw_joint');
  state.update(.6, true);
  assert.equal(state.phase, 'unlocked');
  state.resetPose();
  state.beginChain();
  state.finishChain();
  state.update(.6, true);
  assert.equal(state.phase, 'complete');
  state.resetPose();
  assert.equal(state.phase, 'complete');
  assert.equal(state.unlocked, true);
  state.beginChain();
  state.finishChain();
  assert.equal(state.phase, 'complete', 'Replaying the chain preserves completion');
});

test('pose reset cancels a chain without losing discovery or promoting the phase', () => {
  const state = game();
  unlock(state);
  state.beginChain();
  state.resetPose();
  assert.equal(state.mode, 'isolated');
  assert.equal(state.phase, 'unlocked');
  assert.equal(state.discovered.size, 2);
});

test('restart clears completion, discoveries, fall state, playback mode, and timer', () => {
  const state = game();
  unlock(state);
  state.beginChain();
  state.finishChain();
  state.update(.6, true);
  state.restart();
  assert.equal(state.phase, 'scan');
  assert.equal(state.unlocked, false);
  assert.equal(state.discovered.size, 0);
  assert.equal(state.fallen, false);
  assert.equal(state.outsideSeconds, 0);
  assert.equal(state.mode, 'isolated');
  assert.deepEqual(state.discover('left_knee_joint'), { added: true, unlockedNow: false });
});

test('custom fall delay still requires a strictly longer continuous interval', () => {
  const state = game(['left_knee_joint'], 1);
  assert.equal(state.update(1, true), false);
  assert.equal(state.update(.01, true), true);
});
