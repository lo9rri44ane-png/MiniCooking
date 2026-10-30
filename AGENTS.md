# 小游戏框架规则
- 本目录获授权安装工作流和通用框架。当前玩法为已确认的单厨师滑动收集/烹饪益智游戏；设计见docs/bmad，不擅自改动已确认规则。
- 固定Creator3.8.8，结合cocos-creator Skill。中文交流，BMad在.agents/skills和_bmad。
- 使用现有Dashboard；不自动另开Cocos实例，不默认打包，不用4.0Beta旧工程。
- 市场研究由Agent主动联网，来源/日期可核对，不要求用户先找竞品。
- 不手写scene/prefab/meta，新增元数据由编辑器生成；不把静态类型检查当作运行通过。
- 核心逻辑、Cocos适配、具体玩法分层。登录广告支付不可用时明确失败，不伪造成功。
- 无付费生图，不发送外部消息。

- 明确2D优先：启动场景只保留Canvas/UICamera，由Canvas挂载MinigameApplication；不恢复3D示例，不在启动时禁用所有场景节点。
- 图片默认SpriteFrame；3D、物理模拟、Spine/龙骨、地图等模块按具体需求启用，不能把配置裁剪说成包体实测。
