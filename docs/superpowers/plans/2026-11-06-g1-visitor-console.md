# G1 游客操作面板实现计划

目标：自由体验默认进入，接待小任务主动切换；让现场竖屏能直接读懂 LB/RB 组合键与机器人状态。

架构：沿用 DriveState / DriveInput / DrivePanel。玩法状态和机器人状态分开；任务标记仅在小任务中出现。RB 组合保留原表演行为并支持行走、站立；LB 提供已测肩键的模式快捷方式，原电脑 LT 组合继续有效。使用原浅绿设计和本地模型，不新增依赖，不发布本轮修改。

- [x] 单元测试先复现：自由体验不推进任务、不限制挥手；切任务暂停复位；LB+A/B/X/Y 不泄漏普通动作或高速；RB 在行走/站立也能触发动作，LT 优先级不变。
- [x] `drive-state.ts` 增加 `DriveExperience='free'|'mission'`、构造参数和 `setExperience(experience)`；任务积分和门槛只在 mission 运作。`drive-main.ts` 显式默认 free，切换时清空输入与模型姿态并暂停。
- [x] `drive-shortcuts.ts` 集中 `LB` 四个模式/恢复指令与卡片说明；`drive-input.ts` 消费 LB 修饰键、保留原 LT 规则。RB+A/B/X/Y 在三种主动模式可用，动作仍要求站稳。
- [x] `drive/index.html` 加自由体验/接待小任务切换；任务改紧凑横条；操作和快捷键利用原下方整个宽度。速度区从任务卡移入基础操作，LB/RB 两组卡片始终可见并可触屏执行。
- [x] `drive-panel.ts` 渲染玩法、可读的状态反馈和组合键卡片；只在指令被接受时显示当前动作，倒地提示指向 LB+X 与屏幕起身。
- [x] `drive/visitor-controls.css` 独立维护本轮布局与字体；1080×1800 / 1080×1920 说明主体至少 18px，720×1280 与短横屏按空间降级但无内部滚动；全屏与文字不挡模型继续保留。
- [x] 构建 `npm run build:drive`；单元测试与真实浏览器检查：两套模拟布局、两种玩法、LB 模式与恢复、RB 动作、B 暂停、断连/焦点、四种尺寸与触屏。更新上下文与 README，打开本地页供用户体验。

验证命令：`node --test test/g1-visitor-console.test.js`（先红后绿）、`node --test test/*.test.js`、`node test/g1-visitor-console.cjs`、`node test/g1-drive.cjs`、`node test/g1-drive-modes.cjs`、`node test/g1-drive-shortcuts.cjs`、`node test/g1-android-layout.cjs`。

用户澄清：“RA”是笔误，指 LB / RB 这类肩键。采用 LB+A 行走、LB+B 阻尼、LB+X 起身、LB+Y 零力矩，屏幕有相同可点击卡片；RB+A/B/X/Y 延续四种舞蹈。均为展厅网页模拟映射，不称官方实机按键。

追加范围：用户要求优化屏幕算法。先在驾驶页测 CPU 与 DOM 更新，基线约 670～930 次 mutation/秒。新增 `drive-feedback.ts` 值变化写入、节点缓存；复用腿部 IK 的 Matrix3/Vector3/Quaternion；稳定画面跳过 GPU 提交而不中断输入和轨道阻尼。`drive-touch.ts` 按 pointerId 跟踪多指，避免一个触点松开取消另一个触点。反馈和多指测试均先因模块缺失失败，再实现通过；原 12 个真实 GLB 步态/动作回归继续通过。

验证记录：172 项单元测试通过；完整接待、六模式/倒地恢复、四 RB 快捷动作、安卓照片通道回归通过。新游客面板回归涵盖六种尺寸/两种玩法/两种输入方式、标准/安卓 LB/RB、触屏移动释放、静止零绘制与旋转重新绘制。更新后静止 mutation 0～1/秒，行走/舞蹈约 29～34/秒。以上为开发电脑 Edge 与模拟输入，不能保证展厅实体 FPS；不发布。

后续授权：用户本地体验后明确“上线”。以上“不发布”是开发预览阶段范围，现发布本轮驾驶页、源码、测试及说明；原 G1 主应用的其他未发布改动不暂存、不推送。缓存标记 `2026-11-06-visitor-console-1`，核对暂存发布副本可重建、`/robot-game/` 子路径和模型加载，再核对对应提交的 Pages 状态和线上资源哈希。
