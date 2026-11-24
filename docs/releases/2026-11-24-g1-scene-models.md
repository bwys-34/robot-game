# G1 驾驶地图与人物模型发布记录

用户于 2026-11-24 完成本地预览后授权上线。本次更新通过 GitHub Pages 的 `main` 部署。

| 项目 | 记录 |
| --- | --- |
| 上线前正式提交 | `378c03fef61d9a5488c178b0dcbe10d6f510867f` |
| 旧版回档标签 | `release/g1-training-yard-2026-11-17` |
| 新版标签 | `release/g1-scene-models-2026-11-24` |
| 入口缓存版本 | `2026-11-24-scene-models` |

[G1 正式入口](https://bwys-34.github.io/robot-game/demos/g1/drive/?v=2026-11-24-scene-models)

## 发布范围

复用已有的训练地图和近景建模，替换展厅、实验室、庭院与舞台布景。门口迎宾和两位搬运员改用偏写实低模，动作接入原任务。页面布局、操作方式、路线和碰撞沿用上一版本。资产与构建说明见 [G1 README](../../demos/g1/README.md)。

## 验证

发布前执行 318 项单测和 Chrome 88 目标的驾驶包构建。开发 Edge 验证横竖屏布局、模型加载与回退，键盘走通接待，模拟电脑手柄走通驾驶考场与舞台挑战。部署验收核对新版精确提交的 Pages 运行、线上 HTML / JS / GLB 的 SHA-256，以及线上横竖屏画面、驾驶和任务入口。验证证据位于 `work/g1-drive-nearfield/`。实体安卓设备和实体手柄待现场验收。

## 回档

在干净且已同步的 `main` 检出中，检查本次发布标签，再执行以下命令。若已有后续提交，先检查冲突和撤销范围。

```powershell
git revert --no-edit release/g1-scene-models-2026-11-24
git push origin main
```

等待回档提交通过 Pages 部署，并核对线上驾驶资源与旧版标签一致。
