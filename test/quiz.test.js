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
