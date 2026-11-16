# 机器人档案馆全站改版发布与回档

2026-11-16，用户在全部 150 份本地档案完成后明确要求“上线”。

| 项目 | 记录 |
| --- | --- |
| 上线前正式提交 | `ed4050ec25eca2cadceda9445b0404097311680e` |
| 旧版回档标签 | `release/stable-before-archive-2026-11-16` |
| 新版标签 | `release/robot-archive-2026-11-16` |
| 正式分支 | `main`，GitHub Pages |
| 入口缓存版本 | `archive-20261116-1` |

正式入口：`https://bwys-34.github.io/robot-game/?v=archive-20261116-1#home`。

发布首页、档案列表、149 台普通详情及 G1 专题。原照、原四段资料、稳定资料 ID / 展品编号及原公开二维码地址保留；二维码继续指向原 `robot-QR-code` 网站，该仓库不在本次发布范围。识图题库、计分与 `robot-game-exhibition-v1` 存档沿用现有实现。G1 三维探索和驾驶包、原档案页及全部原照片不随本次修改。

正式资源使用相对于项目根目录的地址，适配 `/robot-game/`，不依赖任何 `work/` 文件。可直接编辑 `js/archive/` / `css/archive/` / `data/archive-records.js`，G1 静态图与二维码位于 `assets/archive/`。本地样例与浏览器输出不提交。原 `js/exhibition-app.js` 不变。

发布前已核对旧正式提交的 Pages 成功与 11 份线上文件 SHA-256。工作区 303 项单元测试通过；`test/archive-site.cjs` 验证 150 条详情、五类页面 × 六视口、完整十题到成绩/错题/存档、旧 dialog 模拟、原图切换及分页返回。还须对暂存文件快照运行同一验证，确认未包含其他 G1 未提交改动。

发布完成以新版标签所指精确提交的 Pages 成功、线上新资源与保留资源 SHA-256 对应、线上浏览器流程通过为准。证据保存在 `work/archive-release/release-baseline.json`、`preflight.json`、`release-verify.json`、`live-smoke.json`。实体展厅 Android 11 / Chrome 88 尚需现场验收。

回档时在干净且同步后的 main 检出中执行，保留共享历史：

```powershell
git revert --no-edit release/robot-archive-2026-11-16
git push origin main
```

若后续有新改动，先检查撤销范围及冲突。回档 Pages 成功后，核对首页与 `release/stable-before-archive-2026-11-16` 一致；此次回档不撤销先前的 G1 舞台发布。
