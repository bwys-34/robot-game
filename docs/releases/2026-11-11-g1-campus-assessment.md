# G1 双空间与庭院挑战发布记录

日期：2026-11-11。用户本地试玩后明确批准上线，并要求保留当前正式版，遇到性能问题可回档。

| 项目 | Git 记录 |
| --- | --- |
| 发布前正式版 | `18436e5bf5bd8b07d9a9975d75fd1c866d9c617e` |
| 旧版回档标签 | `release/stable-before-campus-2026-11-11` |
| 本次新版标签 | `release/g1-campus-assessment-2026-11-11` |
| 部署分支 | `main`，GitHub Pages `pages build and deployment` |
| 入口缓存版本 | `2026-11-11-assessment-1` |

入口：https://bwys-34.github.io/robot-game/demos/g1/drive/?v=2026-11-11-assessment-1

## 内容

接待挑战、杭州机器人学校展厅与工业实验室、烘焙场景、靠近吊机自动操作、庭院驾驶考场、广场舞台。考核增加前进转向绕桩与侧移精度专项、练习/考核/进阶三个档位、停车与朝向偏差/碰撞位置复盘；修正原地转向离圈绕过、同局用时不一致和舞台暂停重演反馈。

仅构建驾驶包，目标 Chrome 88。原 G1 探索包、模型及输入底层映射不属于本次变更；本地 Blender 编辑工程、档案预览和 work 报告不发布。

## 验证依据

发布前重新执行 `npm run build:drive`，工作区 `node --test test/*.test.js` 284 项通过。开发 Edge 已覆盖真实网页完整驾考与舞台、七步入门、六种横竖屏、模拟电脑/安卓输入；这些不能替代实体 Android 11 / Chrome 88 的帧率与手感验收。

发布前旧版已核对远端 main、成功 Pages 提交及九份线上文件哈希。发布完成须核对新版标签所指精确 SHA 的 Pages 成功，并逐一核对驾驶 HTML/JS/CSS、环境 GLB/JPEG，以及首页/原探索包/原模型保持基线。开发验证报告保存在 `work/g1-assessment/`；本次线上核验在 `work/g1-campus-release/baseline.json` 与 `verify.json`。

## 回档操作

若现场新版明显卡顿，回档目标为旧版标签。以下在工作区干净、已同步 main 的检出中执行；保留当前本地未提交工作，不用强制推送或重置历史。

```powershell
git fetch origin --tags
git switch main
git pull --ff-only origin main
git show --no-patch release/stable-before-campus-2026-11-11
git revert --no-edit release/g1-campus-assessment-2026-11-11
git push origin main
```

反向提交撤销本次新版内容。若以后已有新提交，先检查变更和冲突，避免误撤销后续需要保留的修复。推送后等待回档提交的 Pages 任务成功，再核对线上驾驶入口和运行包与旧版 `18436e5` 的内容一致。使用刷新后的正式入口或新的查询参数避免浏览器缓存旧资源；标签只定位 Git 版本，不会自行切换网站。

新版保留在发布标签中，即使回档也可继续优化后重新发布。
