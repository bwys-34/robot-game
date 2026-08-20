const { test } = require('node:test');
const assert = require('node:assert');

test('机器人数据：共 182 台，编号唯一，字段齐全', () => {
  const ROBOTS = require('../data/robots.js');
  assert.strictEqual(ROBOTS.length, 182);
  const nos = ROBOTS.map(r => r.no);
  assert.strictEqual(new Set(nos).size, 182, '编号必须唯一');
  for (const r of ROBOTS) {
    assert.ok(r.brand, `缺少品牌: ${r.no}`);
    assert.ok(r.model, `缺少型号: ${r.no}`);
    assert.ok(r.category, `缺少大分类: ${r.no}`);
    assert.ok('feature' in r, `缺少 feature 字段: ${r.no}`);
  }
});
