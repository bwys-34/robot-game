# G1 模式说明、表演快捷键与 A 键接管

**目标：** 游客能看懂模式差异，用 RB+ABXY 直接跳舞，按 A 开始或继续，不需要鼠标选动作或启动。

**架构：** 在现有输入层处理组合键优先级和 A 接管边沿，保持 DriveState 的回中、暂停、倒地恢复规则。动作映射和模式介绍集中配置；复用现有运动学动作播放器与模型。局部调整沿用浅绿样式，不引入物理引擎或额外资源。

**范围：** 本地实现及预览，不提交、推送或发布。沿用当前工作目录，保留已有修改。

- [x] 输入测试先行：新增 `test/g1-drive-shortcuts.test.js`，覆盖 RB 松开切模式、四组合键及松开顺序不泄漏 B/Y、非表演模式无快捷动作、A 接管和失焦后释放再按。
- [x] `drive-input.ts`：RB 单击延迟至松开；表演时 RB+ABXY 产生一次动作事件；单独 A 的启动检测与普通动作输入分离。`drive-main.ts`：开始时重新 arm 并等待按键释放和回中，失焦/断连不自动恢复；只监听当前选中设备的启动输入。
- [x] `drive-actions.ts`：集中配置四个快捷动作，新建三套不同的上肢/腰部舞姿，沿用已有律动作为第四套。`drive-config.ts`：每模式提供标题和关节/网页效果说明，不将示意动画称为真实动力学。
- [x] `drive-panel.ts`、`drive/index.html`、`drive/style.css`：模式后方/下方显示当前模式说明；表演模式用四快捷按钮替换单动作选择行与描述，保留其他动作菜单入口；其他模式保持原菜单；暂停/未开始显示 A 开始/继续提示。
- [x] 浏览器行为测试：无需鼠标 A 启动、暂停 A 继续不误播、失焦/断连后必须重新按 A、RB+B 不暂停、四快捷动作能启动且不重复，手柄和鼠标按钮皆可用。
- [x] 构建并运行输入/驾驶/动作测试、完整接待与模式回归、紧凑窗口和竖屏布局检查；目视审阅新布局。更新 README 和展厅上下文，独立 Edge 打开新本地版。

验证命令：`node --test test/g1-drive-shortcuts.test.js test/g1-r3.test.js test/g1-drive.test.js test/g1-drive-rig.test.js`；`npm run build`（demos/g1）；`node test/g1-drive-shortcuts.cjs`；`node test/g1-drive.cjs`；`node test/g1-drive-modes.cjs`；`node test/g1-drive-compact.cjs`；`node work/g1-drive/speed-guide-layout.cjs`。
