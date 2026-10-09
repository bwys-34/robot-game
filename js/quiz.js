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

  // 1 个正确 + distractCount 个随机干扰，打乱顺序
  function makeOptions(correct, all, distractCount = 3) {
    const others = all.filter(r => r.no !== correct.no);
    const wrong = shuffle(others).slice(0, distractCount);
    return shuffle([correct, ...wrong]);
  }

  // 照片清单 → 机型，按 no 匹配，匹配不到的跳过，保持照片与题目对齐
  function buildOrder(photoList, robots) {
    const byNo = new Map(robots.map(r => [r.no, r]));
    const order = [];
    const photoFiles = [];
    for (const file of photoList) {
      const no = file.replace(/\.[^.]+$/, '');
      const robot = byNo.get(no);
      if (robot) {
        order.push(robot);
        photoFiles.push(file);
      }
    }
    return { order, photoFiles };
  }

  // 随机抽 n 题，order 与 photoFiles 一一对应
  function pickRound(order, photoFiles, n) {
    const idx = shuffle(order.map((_, i) => i)).slice(0, n);
    return {
      order: idx.map(i => order[i]),
      photoFiles: photoFiles ? idx.map(i => photoFiles[i]) : null,
    };
  }

  const Quiz = { shuffle, makeOptions, buildOrder, pickRound };
  if (typeof module !== 'undefined' && module.exports) module.exports = Quiz;
  global.Quiz = Quiz;
})(typeof window !== 'undefined' ? window : this);
