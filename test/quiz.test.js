const { test } = require('node:test');
const assert = require('node:assert');

test('quiz 模块存在', () => {
  const Quiz = require('../js/quiz.js');
  assert.strictEqual(typeof Quiz.shuffle, 'function');
  assert.strictEqual(typeof Quiz.makeOptions, 'function');
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

test('makeOptions 的干扰项全部来自数据库其他机型', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const correct = ROBOTS[0];
  const opts = Quiz.makeOptions(correct, ROBOTS);
  for (const o of opts) {
    assert.ok(ROBOTS.some(r => r.no === o.no), `选项 ${o.no} 不在数据库`);
  }
  const wrong = opts.filter(o => o.no !== correct.no);
  assert.strictEqual(wrong.length, 3);
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
  const photoList = [ROBOTS[0].no + '.jpg', 'NO.999.jpg', ROBOTS[1].no + '.png'];
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

test('makeOptions 同品牌优先：大品牌选项全为同品牌', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const correct = ROBOTS.find(r => ROBOTS.filter(x => x.brand === r.brand).length >= 4);
  const opts = Quiz.makeOptions(correct, ROBOTS, 3, true);
  assert.strictEqual(opts.length, 4);
  for (const o of opts) {
    assert.strictEqual(o.brand, correct.brand, `选项 ${o.no} 应属于品牌 ${correct.brand}`);
  }
});

test('makeOptions 同品牌优先：小品牌不足时用其他品牌补齐', () => {
  const Quiz = require('../js/quiz.js');
  const ROBOTS = require('../data/robots.js');
  const correct = ROBOTS.find(r => ROBOTS.filter(x => x.brand === r.brand).length === 1);
  const opts = Quiz.makeOptions(correct, ROBOTS, 3, true);
  assert.strictEqual(opts.length, 4);
  const nos = opts.map(o => o.no);
  assert.strictEqual(new Set(nos).size, 4, '选项不应重复');
  assert.ok(nos.includes(correct.no), '必须包含正确项');
  assert.ok(opts.some(o => o.brand !== correct.brand), '应有其他品牌补齐干扰项');
});

test('shufflePair 打乱 order 且与 photoFiles 保持对齐', () => {
  const Quiz = require('../js/quiz.js');
  const order = [1, 2, 3, 4, 5];
  const files = ['a', 'b', 'c', 'd', 'e'];
  const r = Quiz.shufflePair(order, files);
  assert.strictEqual(r.order.length, order.length);
  assert.deepStrictEqual([...r.order].sort((a, b) => a - b), order);
  assert.deepStrictEqual([...r.photoFiles].sort(), files);
  const map = Object.fromEntries(files.map((f, i) => [order[i], f]));
  r.order.forEach((o, i) => assert.strictEqual(r.photoFiles[i], map[o], '顺序与文件应对齐'));
});

test('shufflePair 无 photoFiles 时返回 null', () => {
  const Quiz = require('../js/quiz.js');
  const r = Quiz.shufflePair([1, 2], null);
  assert.strictEqual(r.order.length, 2);
  assert.strictEqual(r.photoFiles, null);
});
