# 🤖 机器人识图挑战

研学现场互动小游戏：看完机器人照片墙，扫二维码用手机挑战 10 道识图题。

## 怎么玩
- 每局从 150 台机器人里随机抽 10 题，每题看照片选正确型号（四选一）
- 全程计时，选完自动进入下一题
- 结果页显示：总用时 / 答对题数 / 正确率 / 每题均时
- 成绩只显示给本人，不上传

## 技术
- 纯前端，无构建工具，无后端
- 数据：150 台人形机器人（品牌 / 型号 / 推出年份 / 国家）
- 已部署到 GitHub Pages：https://bwys-34.github.io/robot-game/

## 重新生成数据与照片
```bash
python tools/gen_robots.py "<源 xlsx 路径>" data/robots.js
python tools/compress_photos.py "<源照片目录>" photos data/photos.js
```
