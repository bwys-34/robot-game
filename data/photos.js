/* 照片顺序清单：按文件名顺序出题。
   把照片放进 photos/ 目录后，把文件名按顺序填进 PHOTO_LIST。
   例：const PHOTO_LIST = ['NO.001.jpg', 'NO.002.png'];
   空数组 = 还没有照片，游戏显示"添加照片"页 + 可试玩。 */
(function (global) {
  'use strict';
  const PHOTO_LIST = [];
  if (typeof module !== 'undefined' && module.exports) module.exports = PHOTO_LIST;
  global.PHOTO_LIST = PHOTO_LIST;
})(typeof window !== 'undefined' ? window : this);
