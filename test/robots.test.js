const { test } = require('node:test');
const assert = require('node:assert');

test('机器人数据：共 150 台，编号 1..150 唯一，字段齐全', () => {
  const ROBOTS = require('../data/robots.js');
  assert.strictEqual(ROBOTS.length, 150);
  const nos = ROBOTS.map(r => r.no);
  assert.strictEqual(new Set(nos).size, 150, '编号必须唯一');
  assert.deepStrictEqual(
    [...nos].map(Number).sort((a, b) => a - b),
    Array.from({ length: 150 }, (_, i) => i + 1),
    '编号应恰为 1..150'
  );
  for (const r of ROBOTS) {
    assert.ok(r.brand, `缺少品牌: ${r.no}`);
    assert.ok(r.model, `缺少型号: ${r.no}`);
    assert.ok(Number.isInteger(r.year), `年份应为整数: ${r.no}`);
    assert.ok(r.country, `缺少国家: ${r.no}`);
  }
});
