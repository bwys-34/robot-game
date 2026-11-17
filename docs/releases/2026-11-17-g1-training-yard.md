# G1 庭院扩建与挑战调整发布记录

日期：2026-11-17。用户完成本地预览后明确要求“上线”。

| 项目 | 记录 |
| --- | --- |
| 上线前正式提交 | `14db02d5189e3e3161a87a37d0995e2380190bb6` |
| 旧版回档标签 | `release/stable-before-training-yard-2026-11-17` |
| 新版标签 | `release/g1-training-yard-2026-11-17` |
| 部署分支 | `main`，GitHub Pages |
| 入口缓存版本 | `2026-11-17-training-yard` |

入口：https://bwys-34.github.io/robot-game/demos/g1/drive/?v=2026-11-17-training-yard

## 发布内容

庭院扩大为 20×16m，加入六柱绕行、三档窄门、直角弯、侧移与正向精确停靠。取消独立倒车关卡，普通后退控制保留；后退整合到舞台准备点至表演点约 0.75m 的精准就位。保留舞台吊挂编排、搬运和三段演出，接待路线同步延长绕障。轻量柱体由 Blender / ND 制作，52,228 字节、1,856 三角面，18 个柱体共享四组实例网格，资源失败有几何回退。

提交范围为驾驶源代码、运行包 / HTML、柱体 GLB、相关测试、实现计划及文档。首页、档案馆、识图、关节探索运行包、原机器人模型及安卓按键映射沿用上线前版本。Blender 编辑工程、work 截图和脚本不纳入公开仓库。

## 验证

发布前重新通过 313 项工作区单元测试和 `npm run build:drive`，目标 Chrome 88。开发 Edge 完成三档考场、键盘 / 电脑标准 / 安卓原始模拟通道的驾驶和舞台、电脑标准模拟接待，六视口无滚动或控件裁切。20Hz 键盘绕柱擦碰由回归测试复现并修复，10 / 20 / 30 / 60Hz 均通过。停靠侧进、侧出再入漏洞已修复并加入测试。

上线前核对旧正式提交的 Pages 成功和线上资源哈希，证据 `work/g1-training-yard/release-baseline.json`。新版发布验收须同时满足标签所指精确提交的 Pages 成功、驾驶 HTML / JS / CSS 与新增 GLB 的线上 SHA-256 一致、原首页 / 档案入口 / 探索包 / 模型 / 安卓映射资源保持旧版，以及线上横竖屏加载、控制和任务入口正常。证据 `release-verify.json`、`live-smoke.json`，均在同一 work 目录。实体 Android 11 / Chrome 88 性能和真实手柄手感仍待现场试玩。

## 回档

在干净且已同步的 main 检出中检查标签内容，再执行：

```powershell
git revert --no-edit release/g1-training-yard-2026-11-17
git push origin main
```

撤销本次发布提交，不强制重置共享历史。若后续有其他提交，先检查冲突和撤销范围。等待回档提交 Pages 成功，并核对驾驶资源与 `release/stable-before-training-yard-2026-11-17` 一致。
