# v9 全界面美术与图鉴

本轮按用户2026-11-01指令“先出效果然后直接开始执行实装”完成。效果方向见 [修订六屏图](source/concepts/revision-board.png)，最终以 [实际运行截图](previews/runtime) 为准。

## 已接入

- 加载海报：真实仓鼠比客人小，兔子头上气泡连接中央想象中的大厨仓鼠，Logo为“小小厨房下班啦！”。底部用真实加载状态文字，不烘焙固定进度。
- 首页：干净室内背景，中央直接复用仓鼠待机/鼓腮/制作/庆祝序列帧，只有选择餐厅、继续、设置、框架检查四入口。
- 我的餐厅、选关：打开的记事本。八章各十张独立系列图鉴，共80图。已通关显示完整图，未收集淡化；直接使用已有通关记录，不额外奖励或改动解锁规则。
- 战斗：同一套体力控件；独立奶油橙/薄荷色撤回、加班、暂停图；统一暂停/胜败/GM/扩容、开工和结束横幅。旧底图烘焙HUD已清理，y260以下棋盘和场景像素与旧原图完全相同。
- 菜谱每页最多三项，客人订单每页四位，保留查看全部需求；设置新增规则介绍，引导和框架提示统一材质。
- 测试版末格入口→扩容确认→免广告解锁。本局只增加一格；取消不授权。正式平台接口仍真实返回未接入，切勿把免广告端口当作真实广告SDK。

## 分类与验收

- source：内置imagegen生成的完整背景、控件源图、四组图鉴源图与效果图。
- exports/backgrounds、exports/ui、exports/collection：99张正式导出备份；运行副本在 assets/resources/art/breakfast-v9。
- manifests/assets.json：源路径、裁切轮廓、尺寸、SHA256与运行路径。
- manifests/visual-review.json：逐张源图/编号联系图轮廓验收的SHA256；manifests/audit.json：运行/备份一致与边缘透明检查。
- previews/ui-contact.png、collection-1.png至collection-8.png：编号联系图。
- manifests/native-authoring.json：15个原生模板及场景底图通过Creator序列化更新，无手写prefab/meta/scene。

主体按全局连通轮廓提取，保留软边、重新添加分轴透明安全边距。首次图鉴草稿有靠边主体，已改用完整留白版本；不把加透明边伪装成修复源图截断。全部运行显示等比；短按钮另出三种原图，不拉伸长按钮。

## 复现与验证

本轮全部使用内置imagegen，无付费API。定稿提示词集合见 PROMPTS.md。制作工具：tools/prepare-ui-v9.mjs；审核：tools/audit-ui-v9.mjs；原生接入：tools/author-ui-v9.mjs。

完整单测84项与类型检查通过。浏览器使用独立上下文：docs/verification/ui-v9-browser.json、ui-v9-edge-browser.json及campaign-gm-revoke-browser.json。验证包括真实鼠标点击、方向键通关与失败、扩容取消/成功、引导、菜单、菜谱/订单、GM清档取消/确认与无关数据保留。未清理用户实际存档，未打包或提交。

后续美术仍需按实际画幅体验验收，本轮没有宣称量化达到95%相似度。
