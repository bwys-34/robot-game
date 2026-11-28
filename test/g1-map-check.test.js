const {test} = require('node:test');
const assert = require('node:assert/strict');
const metrics = import('../demos/g1/map-check/metrics.js');

test('developer targets are per load and per round; procurement keeps its own floor', async () => {
  const {frameTarget, passes, combineClips} = await metrics;
  const normal = frameTarget('dev', false), pressure = frameTarget('dev', true);
  assert.ok(passes({fps: 42, p95: 36, hitches: 0}, normal));
  assert.ok(!passes({fps: 42, p95: 36, hitches: 0}, frameTarget('purchase', false)));
  assert.ok(passes({fps: 30, p95: 50, hitches: 0}, pressure));
  assert.ok(!passes({fps: 30, p95: 51, hitches: 0}, pressure));
  assert.ok(!combineClips([[20, 20], [35, 35]], pressure).passed);
  assert.ok(!combineClips([Array(100).fill(16).concat(100)], pressure).passed);
});

test('pressure raises pixel count by 50 percent for the same viewport', async () => {
  const {renderRatio} = await metrics;
  assert.equal(renderRatio(700, 1000, 2, 1), 1);
  const standard = renderRatio(2160, 3840, 2, 1);
  const pressure = renderRatio(2160, 3840, 2, 1.5);
  assert.ok(Math.abs(2160 * 3840 * standard ** 2 - 1_000_000) < 1);
  assert.ok(Math.abs((pressure / standard) ** 2 - 1.5) < 0.0001);
});

test('slow frame pacing and isolated hitches fail despite a high average', async () => {
  const {summarize, passes} = await metrics;
  const smooth = Array(300).fill(1000 / 60);
  assert.equal(passes(summarize(smooth)), true);
  assert.equal(passes(summarize([...smooth, 100])), false);
  assert.equal(passes(summarize([...Array(280).fill(14), ...Array(20).fill(33)])), false);
  assert.equal(passes(summarize([])), false);
});

test('a slow loop in a sustained run cannot disappear into a smooth average', async () => {
  const {summarize, passes, combineClips} = await metrics;
  const smooth = Array(300).fill(1000 / 60);
  const slow = Array(150).fill(1000 / 30);
  const clips = [...Array(39).fill(smooth), slow];
  assert.equal(passes(summarize(clips.flat())), true);
  const result = combineClips(clips);
  assert.ok(Math.abs(result.worstFps - 30) < .0001);
  assert.equal(result.passed, false);
  assert.equal(combineClips([smooth, []]).passed, false);
});
