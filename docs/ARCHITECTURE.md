# 当前工程地图

| 内容 | 路径/入口 |
|---|---|
| 启动与真实资源进度 | assets/scripts/app/Application.ts |
| 规则、动作事件与求解 | assets/scripts/features/kitchen/Rules.ts、Solver.ts |
| 会话、道具与体力扣除 | Session.ts、Energy.ts |
| 关卡与版本成绩 | CampaignData.ts、CampaignPresentation.ts、CampaignStore.ts |
| 场景演出/订单/客人 | KitchenPages.ts、KitchenActors.ts、CustomerLifecycle.ts |
| 本地存档统一读取 | framework/core/SaveStore.ts 的 readStoredValue |
| 原生模板路径 | framework/cocos/PrefabPaths.ts |
| 2D场景 | assets/scene/main.scene |
| 当前图片与动画 | assets/resources/art/latest |
| 音频 | assets/resources/audio/breakfast |
| 原件、导出、哈希审计 | art/breakfast各版本的source/exports/manifests；audio/breakfast |
| 已确认Demo | releases/demo-1；build/wechatgame-1.0.1 |

表中未写全的TS文件均在features/kitchen目录。玩法/存档是纯逻辑，Cocos适配负责显示与输入。不要将动态注册的资源凭静态搜索判作未用。

## 常用工具

- 校验：npm test；npm run typecheck；npm run verify:wechat。
- 当前编辑器构建桥：tools/web-build-editor-v18.mjs；先assertProject，任务完成删除临时桥节点。
- 微信：由现有3.8.8编辑器构建wechatgame。其后按 tools/package-wechat-local.mjs → tools/optimize-wechat-audio.py → tools/finalize-wechat-local.mjs 处理副本，只有最终预算门通过的包可上传。旧输出存在时工具拒绝覆盖，需明确选择新输出/移走旧生成目录。
- 微信PNG副本保留画布/尺寸；低于36dB的量化结果回退原图，再做像素完全一致的无损重编码。26段PCM转22.05kHz，原音频保留。原生MD5、资源版本、settings、分包入口一起更新。
- 图像脚本用sharp（ART_SHARP_MODULE可指向本机依赖）；微信音频副本处理用Python/numpy；旧动画/标定生成器归档，新增美术遵循ART规范。
- 历史author/迁移脚本不得直接重跑；备份ZIP含其原相对路径，需要复现时按历史索引选择性恢复。

不删除正在使用的Creator library/temp，也不把它们提交版本库。默认不重新生成已确认关卡；若需调整，保留前40关及版本隔离，并证明每个机关有效。
