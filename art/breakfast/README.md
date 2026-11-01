# 注意：v1已淘汰，不可用于游戏

本目录旧版源图与exports只保留为审计证据。用户指出的截断已确认；运行资源已移除。当前版本请看 [v2](v2/README.md)，切图完整性和95%视觉目标以AGENTS.md最新约束为准。以下内容仅为历史记录。

# 暖心早餐店美术

本目录是第一店美术的版本化备份，游戏运行时使用 assets/resources/art/breakfast 的同名PNG。保持2D渲染，不依赖3D模型。主角为仓鼠，客人为现有设计中的三种人类外观。

## 分类
- source/props：食材、设备、成品菜和障碍的原始透明图集。
- source/characters：仓鼠五姿态及三名客人的原始透明图集。
- source/ui：棋盘地砖、停靠位、界面底板的原始透明图集。
- source/backgrounds：早餐厨房背景原图。
- exports/ingredients、devices、dishes、board、characters、ui、backgrounds：拆分导出的34份PNG，与运行目录一一对应；shadow作为备用素材保存。
- previews：真实Creator Web预览截图；不是生成的效果图冒充运行截图。
- manifests/assets.json：每份导出图的源图、图集格子坐标、尺寸、SHA256、备份及运行路径。
- manifests/generation.md：生成方式与素材设计要求。

## 重导出与校验
使用 Node.js 22+，在可解析sharp的环境执行 `node tools/prepare-breakfast-art.mjs`；也可将ART_SHARP_MODULE设为本机sharp模块路径。该工具只做图集格子拆分、主轮廓边界提取及导出缩放，保留源图。请勿手写.meta，导出后让当前Creator导入或刷新asset-db。

运行 `npm test` 可检查第一店食材/设备/菜品覆盖、备份和运行文件的哈希一致性。`node tools/verify-breakfast-art.mjs` 用独立浏览器测试上下文检查真实预览，默认使用本机Edge，不更改用户正常浏览器的存档。

## 使用边界
当前素材由内置imagegen生成，没有调用付费API。该记录仅描述生成来源，不构成独立法律授权审查。五个厨师姿态结合现有Tween表现动作，尚非逐帧角色动画；音频不在本次美术任务内。第二家店继续原有占位内容。
