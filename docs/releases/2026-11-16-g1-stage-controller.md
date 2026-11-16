# G1 电脑手柄与台阶搬运发布记录

日期：2026-11-16。用户完成本地预览后明确要求“可以先上线”。

| 项目 | 记录 |
| --- | --- |
| 上线前正式提交 | `691c9688f539bd7d0be7e6a1ff2acd2bd4ff08a9` |
| 旧版回档标签 | `release/stable-before-stage-2026-11-16` |
| 本次新版标签 | `release/g1-stage-controller-2026-11-16` |
| 部署分支 | `main`，GitHub Pages |
| 入口缓存版本 | `2026-11-16-stage-controller-2` |

入口：https://bwys-34.github.io/robot-game/demos/g1/drive/?v=2026-11-16-stage-controller-2

## 发布内容

电脑 START 启动 / 继续、空闲站立与踏步切换、双击平滑结束表演；SELECT 组合接待动作。安卓原始映射保持原样。台阶舞台与锁定站立的人工搬运模拟，台前金圈上台、台阶旁青色双环下台。新增舞台任务搬运 / 恢复步骤，中断动作不计完成；改善起跳前取消、已腾空落地及低帧率收势。

仅发布驾驶包、相关源代码、轻量 stage.glb、测试与文档。原首页、识图、档案、关节探索包及模型不改；独立档案预览、Blender 编辑工程与 work 输出不纳入本次提交。

## 验证与限制

发布前 `npm run build:drive` 与 303 项工作区单元测试通过。开发 Edge 完整走过上台、表演取消、行走到下台光圈、按 A 搬下，六视口无溢出；手动 / 电脑 / 安卓通道模拟的舞台挑战已通过。实体安卓帧率和真实手柄体验仍需现场确认。锁定站立是网页搬运规则，不是实物搬运规程。

上线前核对旧正式提交的 Pages 成功与九份线上文件哈希。发布后须确认新版标签所指精确提交的 Pages 成功，核对新增舞台资源与驾驶 HTML/JS/CSS 哈希，并验证原首页、探索包、模型与安卓映射仍匹配旧版。验证证据 `work/g1-stage/release-baseline.json`、`release-verify.json`，线上浏览器检查见 `live-smoke.json`。

## 回档

在干净且已同步的 main 检出中，先确认本次标签内容，再执行：

```powershell
git revert --no-edit release/g1-stage-controller-2026-11-16
git push origin main
```

不要强制重置共享历史。若后来已有其他变更，先检查冲突和撤销范围。回档提交 Pages 成功后，核对驾驶资源与旧标签 `release/stable-before-stage-2026-11-16` 一致。
