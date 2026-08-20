(function (global) {
  'use strict';

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // 生成 4 个选项：1 个正确 + distractCount 个全随机干扰，打乱顺序
  function makeOptions(correct, all, distractCount = 3) {
    const others = all.filter(r => r.no !== correct.no);
    const wrong = shuffle(others).slice(0, distractCount);
    return shuffle([correct, ...wrong]);
  }

  const Quiz = { shuffle, makeOptions };
  if (typeof module !== 'undefined' && module.exports) module.exports = Quiz;
  global.Quiz = Quiz;
})(typeof window !== 'undefined' ? window : this);
