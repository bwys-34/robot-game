const { test } = require('node:test');
const assert = require('node:assert');

test('照片清单：150 张，编号与机型数据一一对应', () => {
  const PHOTO_LIST = require('../data/photos.js');
  const ROBOTS = require('../data/robots.js');
  assert.strictEqual(PHOTO_LIST.length, 150);
  const robotNos = new Set(ROBOTS.map(r => r.no));
  for (const f of PHOTO_LIST) {
    const no = f.replace(/\.[^.]+$/, '');
    assert.ok(robotNos.has(no), `照片 ${f} 没有对应机型`);
  }
});
