const { test } = require('node:test');
const assert = require('node:assert');

test('quiz 模块导出 shuffle / makeOptions / buildOrder / pickRound', () => {
  const Quiz = require('../js/quiz.js');
  for (const k of ['shuffle', 'makeOptions', 'buildOrder', 'pickRound']) {
    assert.strictEqual(typeof Quiz[k], 'function', `缺少 ${k}`);
  }
});

test('shuffle 保留所有元素且数量不变', () => {
  const Quiz = require('../js/quiz.js');
  const input = [1, 2, 3, 4, 5];
  const out = Quiz.shuffle(input);
  assert.strictEqual(out.length, input.length);
  assert.deepStrictEqual([...out].sort((a, b) => a - b), input);
});

test('makeOptions 返回 4 个不重复选项且包含正确项', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const correct = ROBOTS[0];
  const opts = Quiz.makeOptions(correct, ROBOTS);
  assert.strictEqual(opts.length, 4);
  const nos = opts.map(o => o.no);
  assert.strictEqual(new Set(nos).size, 4, '选项不应重复');
  assert.ok(nos.includes(correct.no), '必须包含正确项');
});

test('makeOptions 干扰项全部来自数据库其他机型', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const correct = ROBOTS[0];
  const opts = Quiz.makeOptions(correct, ROBOTS);
  for (const o of opts) {
    assert.ok(ROBOTS.some(r => r.no === o.no), `选项 ${o.no} 不在数据库`);
  }
  assert.strictEqual(opts.filter(o => o.no !== correct.no).length, 3);
});

test('buildOrder 全匹配：顺序与照片清单一致', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const photoList = [ROBOTS[0].no + '.jpg', ROBOTS[1].no + '.png', ROBOTS[2].no + '.jpeg'];
  const { order, photoFiles } = Quiz.buildOrder(photoList, ROBOTS);
  assert.strictEqual(order.length, 3);
  assert.deepStrictEqual(order.map(r => r.no), [ROBOTS[0].no, ROBOTS[1].no, ROBOTS[2].no]);
  assert.deepStrictEqual(photoFiles, photoList);
});

test('buildOrder 有匹配不到的文件时跳过并保持对齐', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const photoList = [ROBOTS[0].no + '.jpg', '999.jpg', ROBOTS[1].no + '.png'];
  const { order, photoFiles } = Quiz.buildOrder(photoList, ROBOTS);
  assert.strictEqual(order.length, 2);
  assert.deepStrictEqual(order.map(r => r.no), [ROBOTS[0].no, ROBOTS[1].no]);
  assert.deepStrictEqual(photoFiles, [photoList[0], photoList[2]]);
});

test('buildOrder 空清单返回空', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const { order, photoFiles } = Quiz.buildOrder([], ROBOTS);
  assert.strictEqual(order.length, 0);
  assert.strictEqual(photoFiles.length, 0);
});

test('pickRound 抽取指定题数，order 与 photoFiles 保持对齐且不重复', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const order = ROBOTS.slice(0, 8);
  const files = order.map(r => r.no + '.jpg');
  const r = Quiz.pickRound(order, files, 5);
  assert.strictEqual(r.order.length, 5);
  assert.strictEqual(r.photoFiles.length, 5);
  assert.strictEqual(new Set(r.order.map(o => o.no)).size, 5, '题目不应重复');
  const map = Object.fromEntries(order.map((o, i) => [o.no, files[i]]));
  r.order.forEach((o, i) => assert.strictEqual(r.photoFiles[i], map[o.no], '题目与照片应对齐'));
});

test('pickRound 请求数超过总数时返回全部', () => {
  const Quiz = require('../js/quiz.js');
  const order = [1, 2, 3];
  const r = Quiz.pickRound(order, ['a', 'b', 'c'], 10);
  assert.strictEqual(r.order.length, 3);
  assert.strictEqual(r.photoFiles.length, 3);
});
