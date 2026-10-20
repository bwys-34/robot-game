(function (global) {
  'use strict';
  const BASE = 1000;
  function normalizeName(name) {
    const value = String(name ?? '').trim();
    if (!value || [...value].length > 12 || /[\u0000-\u001f]/.test(value)) throw new Error('请填写 1—12 个字的昵称');
    return value;
  }
  const freshState = () => ({ version: 1, records: [], lastRound: null });
  const clone = value => JSON.parse(JSON.stringify(value));
  function baseline() {
    const counts = [5, 10, 25, 55, 105, 170, 225, 190, 130, 65, 20];
    return counts.flatMap((count, correct) => Array.from({ length: count }, (_, i) => ({ correct, total: 10, elapsedMs: (30 + (i * 37 % 121)) * 1000 })));
  }
  function validRobot(robot) {
    return robot && typeof robot.no === 'string' && typeof robot.model === 'string' && typeof robot.brand === 'string';
  }
  function validateRound(round) {
    if (!round || typeof round.id !== 'string' || !round.id || !Array.isArray(round.answers) || round.answers.length !== 10) throw new Error('请先完成全部 10 题');
    normalizeName(round.name);
    if (round.answers.some(a => !validRobot(a.question) || !validRobot(a.selected) || !/^\d+\.(jpg|png|jpeg)$/i.test(a.photo) || !Number.isFinite(a.elapsedMs) || a.elapsedMs < 0)) throw new Error('答题记录不完整');
  }
  function summarize(round) {
    validateRound(round);
    return { id: round.id, correct: round.answers.filter(a => a.question.no === a.selected.no).length, total: round.answers.length, elapsedMs: round.answers.reduce((sum, a) => sum + a.elapsedMs, 0) };
  }
  function isBetter(a, b) {
    const difference = a.correct / a.total - b.correct / b.total;
    return difference > 0 || (difference === 0 && a.elapsedMs < b.elapsedMs);
  }
  const totalParticipants = state => BASE + state.records.length;
  function getResult(state, round) {
    const score = summarize(round);
    const others = state.records.filter(r => r.id !== round.id);
    const surpassed = [...baseline(), ...others].filter(other => isBetter(score, other)).length;
    return { ...score, surpassed, total: BASE + others.length + 1, percentile: Math.round(surpassed / (BASE + others.length) * 100) };
  }
  function completeRound(state, round) {
    const score = summarize(round);
    if (state.records.some(r => r.id === round.id)) return state;
    const result = getResult(state, round);
    return { version: 1, records: [...state.records, score], lastRound: { ...clone(round), name: normalizeName(round.name), result } };
  }
  const wrongAnswers = round => round ? round.answers.filter(a => a.question.no !== a.selected.no) : [];
  function restore(raw) {
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1 || !Array.isArray(saved.records)) return freshState();
      if (saved.records.some(r => typeof r.id !== 'string' || !Number.isInteger(r.correct) || r.correct < 0 || r.correct > 10 || r.total !== 10 || !Number.isFinite(r.elapsedMs) || r.elapsedMs < 0)) return freshState();
      if (new Set(saved.records.map(r => r.id)).size !== saved.records.length) return freshState();
      if (saved.lastRound) {
        validateRound(saved.lastRound);
        if (!saved.records.some(r => r.id === saved.lastRound.id)) return freshState();
        saved.lastRound.result = getResult(saved, saved.lastRound);
      } else saved.lastRound = null;
      return saved;
    } catch { return freshState(); }
  }
  const Game = { normalizeName, freshState, baseline, totalParticipants, isBetter, getResult, completeRound, wrongAnswers, restore };
  if (typeof module !== 'undefined' && module.exports) module.exports = Game;
  global.ExhibitionGame = Game;
})(typeof window !== 'undefined' ? window : this);
