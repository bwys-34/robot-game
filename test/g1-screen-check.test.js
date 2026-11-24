const {test} = require('node:test');
const assert = require('node:assert/strict');
const metrics = import('../demos/g1/screen-check/metrics.js');

function regular(fps) {
  return Array.from({length: fps * 5 + 1}, (_, i) => i * 1000 / fps);
}

test('a 60 FPS run qualifies and a weak scene cannot hide behind the average', async () => {
  const {summarizeFrames, scoreRun} = await metrics;
  const smooth = summarizeFrames(regular(60));
  const slow = summarizeFrames(regular(30));
  assert.deepEqual(scoreRun([smooth, smooth, smooth]), {score: 100, passed: true});
  assert.equal(scoreRun([smooth, slow, smooth]).passed, false);
});

test('a long hitch counts even when the scene averages at least 55 FPS', async () => {
  const {summarizeFrames, scoreRun} = await metrics;
  const frames = regular(60).filter(time => time < 2500 || time >= 2650);
  const scene = summarizeFrames(frames);
  assert.ok(scene.fps >= 55);
  assert.equal(scene.hitches, 1);
  assert.equal(scoreRun([scene, scene, scene]).passed, false);
});

test('missing frames and incomplete scene results cannot pass', async () => {
  const {summarizeFrames, scoreRun} = await metrics;
  assert.equal(summarizeFrames([0]), null);
  assert.equal(scoreRun([summarizeFrames(regular(60)), null]), null);
});
