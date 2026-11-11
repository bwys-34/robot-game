# 杭州机器人学校：展厅与工业实验室

2026-11-10 原创场景资产，用于 G1 驾驶页本地预览。用户在第一款基础上要求扩建并连接第二款工业实验室，将功能吊机移入实验室；公司名称确认为「杭州机器人学校」。尚未批准上线。

- `modern-gallery.glb`：约 1.16MB，低面数双房间墙体、展台、雕塑、工业结构、设备柜、标线和顶部灯带；内嵌一张 2048×2048 静态光照 JPEG，材质为 `KHR_materials_unlit`。功能吊机由运行时模块绘制，资产不重复包含吊机。
- `modern-gallery-floor.jpg`：2048×1000、约 140KB 的双空间俯视地面光照，展厅石材与实验室深灰地坪分别烘焙；两个原始地板顶面不重叠，避免共面纹理闪烁。
- `modern-gallery-lighting.jpg`：GLB 内嵌光照的制作源图；运行时只加载 GLB 内的版本，不重复请求此文件。

制作不依赖外部模型、纹理、字体下载或收费素材。原 G1 模型及其许可仍在上级目录，本资产不包含机器人。这里的静态烘焙不代表动态阴影、真实反射或物理仿真。

## 重新制作

从项目根目录运行：

```powershell
node work/g1-modern-gallery/build-gallery.cjs
& 'D:/Blender/blender.exe' --background --factory-startup --python work/g1-modern-gallery/bake_gallery.py
node work/g1-modern-gallery/finish-gallery.cjs
node --test test/g1-drive-gallery.test.js
```

脚本读取 `DRIVE_CONFIG`、`DRIVE_SPACES`、`DRIVE_PARTITIONS` 与 `HOIST_CONFIG` 生成布局，展台、分隔墙和设备柜按实际碰撞矩形制作，不修改 G1 原始模型。Blender 输出经过最后一步转换为 unlit，避免安卓端无意义的 PBR 灯光计算。脚本位于工作目录，只在需要重新制作时运行，网页打开时不需要 Blender。

每面墙及顶部独立命名，供 `src/drive-gallery.ts` 在相机外移时隐藏，保持操控视线。采用地面接地平面覆盖 GLB 原板，不叠加实时阴影或重型后处理。
