# 电脑手柄与台阶搬运 实现计划

**目标：** 仅更新电脑 START / SELECT 操作，并把平地舞台改为有台阶、锁定站立后人工搬上台的本地教学体验。用户明确搬运准备模式为锁定站立。

**架构：** 保留安卓归一化映射。输入适配器输出取消动作、搬运命令，状态机统一互锁；新建独立舞台搬运状态机，舞台上方高度传入模型及相机，碰撞阻止直接跨台阶。Blender MCP 生成独立低面数台阶 GLB，加载失败使用同尺寸程序几何回退。

**技术栈：** TypeScript / Three.js / Blender MCP / Node test / esbuild / Edge。

## 任务 1：电脑按键

- [x] 在 `test/g1-drive-controller-stage.test.js` 为 START 激活、上下文双击取消、SELECT+B、安卓隔离写失败测试并运行。
- [x] 修改 `drive-input.ts` / `drive-config.ts` / `drive-state.ts` / `drive-main.ts`：增加取消指令，单击与双击互斥，松杆接管，START 可激活。在 `drive-rig.ts` 平滑收势，腾空动作落地再结束，不给中断计分。
- [x] 更新 `drive-control-guide.ts`、`drive-panel.ts` 的电脑操作说明，保留安卓说明和原映射。运行输入、动作与计分回归。

## 任务 2：台阶与人工搬运

- [x] 为锁定站立、到点停稳、按 A 确认、搬运期间冻结、暂停、恢复模式、台阶边界和下台写失败测试并运行。
- [x] 新建 `drive-stage.ts`，集中舞台尺寸、台阶、上下台停靠点及搬运状态。与 `drive-state.ts` / `drive-show.ts` 接入；台上完成恢复控制并停稳朝向后才进入演出。
- [x] 通过 Blender MCP 制作平台、两级踏步、金属封边和防滑条，导出 `assets/stage/stage.glb`，保存制作脚本及资产说明。不删除用户已有 Blender 对象。
- [x] 在 `drive-campus-visual.ts` 加载资产与回退，增加搬运人员示意；`drive-rig.ts`、`drive-scene.ts` 按搬运及台面高度更新脚底、影子、相机与目标圈。
- [x] `drive-challenge-panel.ts` 接入搬运任务与模式按钮；自由体验也可在台前操作，无需新页面。禁止把网页搬运流程写成真机规程。

## 任务 3：验证与交付

- [x] `node --test test/*.test.js`；`demos/g1` 下 `npm run build:drive`。不构建原探索包，不发布。
- [x] 更新公开输入的舞台浏览器脚本，验证电脑 START / SELECT、搬运、三段演出、主动取消重演、安卓原映射和横竖屏无滚动。查看真实截图与控制台。
- [x] 更新 `docs/exhibition-context.md`、`demos/g1/README.md`，标注本地未发布、实体手柄与安卓性能仍需现场确认。
- [x] 打开本地页面供用户体验，报告实际检查结果与本地地址。

## 追加：台阶旁下台光圈

- [x] 独立下台点设于台阶一侧的上层台面 (6.3,7.12)，青色双环标记；台前金圈继续用于上台。
- [x] 下台需行走入圈、锁定站立并停稳后确认；台心不再接受下台，操作卡与自由模式目标同步更新。
- [x] 验证实际行走进圈、按 A 下台、六视口无溢出，并刷新本地试玩页。保持未发布。303 项单元测试及驾驶包构建通过；浏览器截图 `work/g1-stage/stage-exit-circle-1080x1800.png`。
