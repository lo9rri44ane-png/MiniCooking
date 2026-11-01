# 早餐店v2：参考视角校准版

验收基准为 source/reference/approved-gameplay.png。成品95%以上相似度为目标，本轮交付视角/构图的真实运行预览，尚未宣称达到95%。主角仓鼠，顶部客人为参考图狗、兔、熊。

## 分类与来源
- source/reference：用户指定原图。
- source/plates：参考图局部清理后的空场景、按参考提取/补全的完整透明道具、地砖和各自独立按钮源图。原图遮挡部分及未包含的水/莓果/牛肉等做了补全，不能当作原图像素完全一致。
- exports：按ingredients/devices/dishes/board/characters/ui/backgrounds分类的29份资源，与assets/resources/art/breakfast-v2逐文件哈希一致。
- manifests/assets.json：裁切框、源图、尺寸、哈希。crop-audit-v2.json：逐张完整性审核、安全边距和审核绑定哈希。
- previews：编号切图检查图册、真实运行截图和参考对照。

原图有遮挡的狗兔熊/订单台/厨房结构本轮保留为统一场景层，动态订单、棋盘物品、仓鼠、背包、按钮均独立渲染；后续角色表情动画再拆分，不用重画场景。

## 硬约束
主体完整是先决条件。禁止截断帽子、耳朵、把手、碗沿、餐盘、吸管或邻图残片；禁止非等比拉伸或用一个方按钮皮肤硬拉成长条。切图采用全图完整连通轮廓，不按等分格子截主体；保留至少3%透明安全边距并逐张视觉检查。背景全出血为明确例外。

旧v1原图和exports仅为审计证据，不可回填游戏；旧运行目录已由编辑器删除。

## 复核
- npm test：45项逻辑、资源及历史不合格资源隔离检查。
- npm run typecheck：真实Creator3.8.8声明。
- node tools/verify-breakfast-v2.mjs：真实鼠标菜单/广告失败/通关/6×6参考构图/窄屏，检查所有显示Sprite宽高比与父级缩放，禁止SLICED。
- npm run verify:tutorial：真实拖动教程验证。

重新导出需sharp，设置ART_SHARP_MODULE或本机提供sharp后运行tools/prepare-breakfast-v2.mjs，再由Creator生成meta。更改素材SHA256后旧目视审核自动失效，须重审。
