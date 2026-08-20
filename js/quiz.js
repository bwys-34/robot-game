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

  // 根据照片清单生成题目顺序：文件名 → 编号 → 机器人；跳过匹配不到的，保持照片与题目对齐
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

  const Quiz = { shuffle, makeOptions, buildOrder };
  if (typeof module !== 'undefined' && module.exports) module.exports = Quiz;
  global.Quiz = Quiz;
})(typeof window !== 'undefined' ? window : this);
