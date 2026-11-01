# 战斗内正式UI v13

本轮仅战斗内UI换肤：首页、设置、餐厅、选关布局不换肤。16件正式位图在exports；source按battle core/ui-kit分类，manifests含SHA、源轮廓、安全边距、原生导入与编辑器authoring记录。旧战斗专用资源与被12帧替换的旧角色资源共105项退役，历史备份/meta保留；外页仍用的共享UI资源保留。

资源使用内置imagegen制作，没有付费API/CLI。最终提示集摘要：参考v8套件的奶油木边/橙格纹/绿叶白花材质；面板与按钮空白不烘焙动态文字，方/圆/横按钮分别出图，完整主体与安全边距；使用白底源并精细去底避免透明输出彩色噪边；体力插画红心左、趴仓鼠右，数值由运行数据覆盖。效果图中生成的外部设置/露台概念未进入运行资源。

主入口：tools/author-battle-ui-v13.mjs，通过Creator对象和serializer保存，不手写scene/prefab/meta。原生模板当前同步暂停/胜败/引导/菜谱标题；共享选择面板与错误提示按战斗祖先/当前overlay作用域换肤，不外泄到外页。

验证命令：npm run verify:battle-ui、npm run verify:battle-effects、npm run verify:battle-scope。真实截图在previews/runtime、effects、boundary。显示尺寸按原比例，禁止非等比拉伸或用旧简陋占位替代。
