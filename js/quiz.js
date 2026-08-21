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

  // 生成 4 个选项：1 个正确 + distractCount 个干扰，打乱顺序
  // preferSameBrand=true 时优先用同品牌其他机型，同品牌不够再用其他品牌补齐
  function makeOptions(correct, all, distractCount = 3, preferSameBrand = false) {
    const others = all.filter(r => r.no !== correct.no);
    let wrong;
    if (preferSameBrand) {
      const same = shuffle(others.filter(r => r.brand === correct.brand));
      const diff = shuffle(others.filter(r => r.brand !== correct.brand));
      wrong = same.slice(0, distractCount);
      for (const r of diff) {
        if (wrong.length >= distractCount) break;
        wrong.push(r);
      }
    } else {
      wrong = shuffle(others).slice(0, distractCount);
    }
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

  // 随机打乱出题顺序，保持 order 与 photoFiles 一一对应（随机出题用）
  function shufflePair(order, photoFiles) {
    const idx = shuffle(order.map((_, i) => i));
    return {
      order: idx.map(i => order[i]),
      photoFiles: photoFiles ? idx.map(i => photoFiles[i]) : null,
    };
  }

  // 错题本：list 形如 [{ no, streak }]，streak 为该台连续答对次数
  // isRight=true 答对 → streak+1，连续 3 次从本子移除；isRight=false 答错 → 新增或清零 streak
  function wrongRecord(list, no, isRight) {
    const i = list.findIndex(x => x.no === no);
    if (i === -1) return isRight ? list : list.concat([{ no, streak: 0 }]);
    if (isRight) {
      const streak = list[i].streak + 1;
      return streak >= 3 ? list.filter(x => x.no !== no) : list.map((x, k) => k === i ? { no, streak } : x);
    }
    return list.map((x, k) => k === i ? { no, streak: 0 } : x);
  }

  function wrongCount(list) {
    return list.length;
  }

  const Quiz = { shuffle, makeOptions, buildOrder, shufflePair, wrongRecord, wrongCount };
  if (typeof module !== 'undefined' && module.exports) module.exports = Quiz;
  global.Quiz = Quiz;
})(typeof window !== 'undefined' ? window : this);
