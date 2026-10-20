const { test } = require('node:test');
const assert = require('node:assert/strict');
let Game;
try { Game = require('../js/exhibition-session.js'); } catch { Game = {}; }
const answer = (right = true) => ({ question: { no: '1', model: '4NE-1', brand: 'Neura', country: '德国', year: 2024 }, photo: '1.jpg', selected: { no: right ? '1' : '2', model: right ? '4NE-1' : 'G1', brand: 'Neura' }, elapsedMs: 3000 });
const round = (id = 'r1', correct = 5, elapsedMs = 30000) => ({ id, name: '小小工程师', answers: Array.from({ length: 10 }, (_, i) => ({ ...answer(i < correct), elapsedMs: elapsedMs / 10 })) });

test('昵称去除两端空格，拒绝空昵称和超过12个字符', () => {
  assert.equal(typeof Game.normalizeName, 'function');
  assert.equal(Game.normalizeName('  小星  '), '小星');
  assert.throws(() => Game.normalizeName('   '));
  assert.throws(() => Game.normalizeName('星'.repeat(13)));
});
test('新设备从1000开始，初始成绩精确1000份', () => {
  assert.equal(typeof Game.freshState, 'function');
  assert.equal(Game.totalParticipants(Game.freshState()), 1000);
  assert.equal(Game.baseline().length, 1000);
});
test('完成一局累计一次，重复提交不重复计数', () => {
  assert.equal(typeof Game.completeRound, 'function');
  const first = Game.completeRound(Game.freshState(), round());
  assert.equal(Game.totalParticipants(first), 1001);
  assert.equal(Game.totalParticipants(Game.completeRound(first, round())), 1001);
});
test('零分不超越任何人；满分快于所有基准可超越1000人，分母不包含自己', () => {
  assert.equal(typeof Game.getResult, 'function');
  assert.equal(Game.getResult(Game.freshState(), round('zero', 0, 200000)).surpassed, 0);
  const result = Game.getResult(Game.freshState(), round('perfect', 10, 100));
  assert.equal(result.surpassed, 1000);
  assert.equal(result.total, 1001);
});
test('排名正确率优先，用时次之；同分同速不算超越', () => {
  assert.equal(typeof Game.isBetter, 'function');
  assert.equal(Game.isBetter({correct:9,total:10,elapsedMs:100000}, {correct:8,total:10,elapsedMs:1000}), true);
  assert.equal(Game.isBetter({correct:8,total:10,elapsedMs:20000}, {correct:8,total:10,elapsedMs:30000}), true);
  assert.equal(Game.isBetter({correct:8,total:10,elapsedMs:20000}, {correct:8,total:10,elapsedMs:20000}), false);
});
test('上一局含正确机型、错误选择和照片，完成新局覆盖旧局，数据不受原对象后续修改影响', () => {
  assert.equal(typeof Game.wrongAnswers, 'function');
  const input = round('first', 8);
  let state = Game.completeRound(Game.freshState(), input);
  input.name = '被改了';
  assert.equal(state.lastRound.name, '小小工程师');
  const mistakes = Game.wrongAnswers(state.lastRound);
  assert.equal(mistakes.length, 2);
  assert.equal(mistakes[0].question.model, '4NE-1');
  assert.equal(mistakes[0].selected.model, 'G1');
  assert.equal(mistakes[0].photo, '1.jpg');
  state = Game.completeRound(state, round('second', 10));
  assert.equal(state.lastRound.id, 'second');
  assert.equal(Game.wrongAnswers(state.lastRound).length, 0);
});
test('刷新恢复，损坏或非法存档安全回到1000初始状态', () => {
  assert.equal(typeof Game.restore, 'function');
  const state = Game.completeRound(Game.freshState(), round());
  assert.equal(Game.totalParticipants(Game.restore(JSON.stringify(state))), 1001);
  for (const raw of [null, '{broken', '{"version":1,"records":[{"correct":-4}]}']) {
    assert.equal(Game.totalParticipants(Game.restore(raw)), 1000);
  }
});
test('未完成的局不能入榜，异常耗时被拒绝', () => {
  assert.equal(typeof Game.completeRound, 'function');
  const incomplete = round(); incomplete.answers.pop();
  assert.throws(() => Game.completeRound(Game.freshState(), incomplete));
  const invalid = round(); invalid.answers[0].elapsedMs = -1;
  assert.throws(() => Game.completeRound(Game.freshState(), invalid));
});
