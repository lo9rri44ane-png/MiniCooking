# v10 真实加载与效果图精修

本轮恢复选关、胜利页的“最优X步”，并在规则介绍中说明：不使用道具的最少通关步数。原关卡数值、解锁与图鉴存档不变。

## 运行效果

- [餐厅封面](previews/runtime/06-restaurants.png)：完整16:9店铺，锁定店铺灰色与锁标，保留进入按钮和真实进度。
- [选关最优](previews/runtime/07-collection.png)：图鉴保留，增加真实最优步数。
- [订单气泡](previews/runtime/11-battle.png)：根据认可参考图重新提取空白形状后出图，212×142包围框、等比原图、右上成品凹槽，下方最多三个统一40材料图标和36设备图标。
- [真实加载](previews/loading-progress.png)：阶段名、已完成/总数与进度条同步；[阻断资源](previews/loading-blocked.png)时停住，[资源失败](previews/loading-failed.png)不进入首页。

## 加载含义

五阶段权重2/13/30/50/5，分别为海报、原生UI、美术、序列帧、配置/首页初始化。阶段内部按实际retain任务完成数推进（缓存命中也完成任务），不按时间模拟、不冒充网络字节比例。全部资源、配置及首页创建成功才100%。销毁停止统计并销毁加载节点；失败明确提示刷新重试。

## 字体与参数

字体族统一Microsoft YaHei并由系统回退；页面标题34粗体，主按钮最高28、短按钮20—24粗体，浅色文字配适度棕色描边；正文约21—23常规字重，元信息17—20。长文保持合理留白，回退无图按钮使用浅色字确保对比。字体/按钮文字参数在 framework/cocos/TextStyles.ts，订单几何在 KitchenHudLayout.ts；恢复时间移到体力弹窗，避免压住页面标题或客人耳朵。

## 美术文件

source/covers、source/ui：内置imagegen生成的正式源图；source/reference/order-approved-crop.png是原认可图的形状参考，不是运行素材。exports保存正式导出备份，运行副本位于 assets/resources/art/breakfast-v10。三张新图都有源SHA、轮廓、备份与运行一致审计及人工确认，详见manifests。新图均等比显示；native-authoring记录两个原生模板通过Creator更新。

## 验证

87项完整测试、类型检查、三张图片审计通过；docs/verification/ui-v10-loading-browser.json及ui-v10-browser.json记录独立浏览器验证。包含卡住/放行/失败/销毁加载、导航与字体、扩容、正常通关/步数失败。未打包、未提交、未清用户存档。没有宣称已量化达到95%相似度。

生成方式为内置imagegen，未调用付费API；定稿提示词见PROMPTS.md。重建顺序：prepare-ui-v10.mjs → 编辑器导入 → author-ui-v10.mjs → audit-ui-v10.mjs。不要用旧版author脚本覆盖本轮模板。
