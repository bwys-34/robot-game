const { test } = require('node:test');
const assert = require('node:assert/strict');
const robots = require('../data/robots.js');
const photos = require('../data/photos.js');
const fs = require('node:fs');
const path = require('node:path');
let Archive = {}, details = [];
try { Archive = require('../js/robot-archive.js'); } catch {}
try { details = require('../data/archive-details.js'); } catch {}

test('档案按年份和稳定编号排序，翻页不修改原始数据', () => {
  assert.equal(typeof Archive.select, 'function');
  const input = [{no:'9',year:2024,model:'B'},{no:'3',year:2015,model:'A'},{no:'2',year:2024,model:'C'}];
  const original = JSON.stringify(input);
  const first = Archive.select(input, {pageSize:2});
  assert.deepEqual(first.items.map(r=>r.no), ['3','2']);
  assert.equal(first.total, 3);
  assert.equal(first.pages, 2);
  assert.deepEqual(Archive.select(input, {pageSize:2,page:99}).items.map(r=>r.no), ['9']);
  assert.equal(Archive.select(input, {pageSize:2,page:0}).page, 1);
  assert.equal(JSON.stringify(input), original);
});

test('档案搜索支持编号、型号、公司、国家和年份，与年份筛选组合', () => {
  assert.equal(typeof Archive.select, 'function');
  for (const query of [' 4ne-1 ', 'Neura Robotics', '德国', '2024', '001']) {
    assert(Archive.select(robots, {query, pageSize:150}).items.some(r=>r.no==='1'), query);
  }
  const result = Archive.select(robots, {query:'Neura',year:'2024'});
  assert(result.items.every(r=>r.year===2024 && /neura/i.test(r.brand)));
  const empty = Archive.select(robots, {query:'不存在的机器人',page:5});
  assert.equal(empty.total, 0);
  assert.equal(empty.pages, 1);
  assert.equal(empty.page, 1);
  assert.deepEqual(empty.items, []);
});

test('150 份完整档案通过稳定编号关联本地照片与游戏机型', () => {
  assert.equal(details.length, 150);
  assert.equal(new Set(details.map(r=>r.no)).size, 150);
  for (const r of robots) {
    const detail = details.find(d=>d.no===r.no);
    assert(detail, r.no);
    for (const field of ['intro','tech','prosCons']) assert(detail[field].trim(), r.no+' '+field);
    assert.equal(typeof detail.use, 'string');
    assert(photos.some(file=>file.replace(/\.[^.]+$/,'')===r.no));
  }
  assert.match(details.find(d=>d.no==='127').intro, /Jan De Coster/);
  assert.match(details.find(d=>d.no==='1').tech, /360/);
  assert.equal(details.find(d=>d.no==='60').use, '', '保留原始缺失值，视图显示暂无资料');
});

test('恢复的原档案按年份编号，150 条资料仍对应正确的本地照片', () => {
  const html = fs.readFileSync(path.join(__dirname, '../archive.html'), 'utf8');
  const records = JSON.parse(html.match(/<script id="archive-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(records.length,150);
  assert.equal(new Set(records.map(r=>r.id)).size,150);
  for (const [index, r] of records.entries()) {
    assert.equal(Number(r.number),index+1);
    assert.equal(r.photo,'photos/'+photos.find(p=>p.replace(/\.[^.]+$/,'')===r.id));
    assert.equal(Number(r.year),robots.find(robot=>robot.no===r.id).year);
    if(index) assert(Number(records[index-1].year)<=Number(r.year));
  }
  assert.equal(records[0].id,'127','展示编号 001 与稳定编号 127 不得混淆');
});
