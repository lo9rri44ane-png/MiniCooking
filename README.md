# 小小厨房，下班啦！ · MiniCooking

Cocos Creator **3.8.8** 的2D滑动收集/烹饪益智小游戏。单个小动物厨师滑行收集材料，停靠正确设备后自动制作并交付订单，在步数和背包容量限制内完成营业。目前使用色块与文字占位。

## 换一台电脑开始

需要先安装 Git、Node.js 22或更高版本、Cocos Creator **3.8.8**；使用AI工作流时另需Codex及Python3.10+。

```sh
git clone https://github.com/lo9rri44ane-png/MiniCooking.git
cd MiniCooking
npm run setup
```

`setup`会安装锁定依赖，并编译随工程提供的Cocos MCP编辑器扩展；不会打包游戏，也不会安装Cocos/Codex或下载付费资源。

1. 在Cocos Dashboard添加**仓库根目录**，选择Creator3.8.8打开。
2. 等待Creator重新生成library/temp并完成导入。所有源资源及.meta已经提交，不要自行生成UUID。
3. 打开 `assets/scene/main.scene`，点击预览，即可试玩。
4. 在Codex打开同一仓库根目录，按 [换机与环境配置](docs/换机与环境配置.md) 连接MCP并继续迭代。

工程可放在任意目录，无需复现原作者的E盘路径。缓存不随Git同步，第一次导入稍慢是正常现象。

## 已实现内容

- 两家餐厅，每店80关，共160关；关卡数据及无道具最优路径已校验。
- 单厨师滑到障碍才停；任意顺序捡材料，默认7格背包装满立即失败；正确停靠批量完成可制作订单。
- 三个活动客人、候场补位，订单材料与设备需求均使用色块+文字。
- 加班、撤回、背包广告扩展格；当前加班/撤回为本地试用，真实广告/支付尚未接入，缺失接口不会伪造成功。
- 体力上限10、每10分钟恢复1；通关不扣，失败或退出每局扣1；本地存档。
- 餐厅/选关、设置、暂停、胜负结算、行动式新手引导及GM工具。
- **45个原生预制体**；通用组件实际实例化，展示与纯规则/存档/求解器分层。

## 设计与继续开发

- [UX总览、布局、交互反馈与截图](docs/bmad/planning-artifacts/ux-designs/ux-新游戏-2026-10-30/README.md)
- [美术/音频资源清单：73项](docs/bmad/planning-artifacts/ux-designs/ux-新游戏-2026-10-30/resource-list.csv)
- [预制体与框架规范](docs/预制体与框架规范.md)
- [GDD与玩法方案](docs/bmad/planning-artifacts/gdds/)
- [任务拆分](docs/bmad/planning-artifacts/epics.md)
- [参考图片](docs/reference-images/)

工作流技能在 `.agents/skills`，BMad内容在 `_bmad`，Cocos Skill随项目提供。后续可让Codex使用 `$gds-gdd`、`$gds-ux`、`$gds-create-epics-and-stories`、`$cocos-creator` 继续工作。先读 `AGENTS.md` 与现有设计，避免重新发明规则。

```sh
npm test                 # 43项逻辑、资源与场景检查
npm run typecheck        # 使用真实Creator声明，需先完成引擎导入
npm run setup:browser    # 可选：下载自动化测试用Chromium
npm run verify:ui        # 先运行Creator Web预览，默认localhost:7456
npm run verify:tutorial  # 真实滑动与教程/厨师动画验证
```

若使用本机Edge进行测试，可设置 `PLAYWRIGHT_CHANNEL=msedge`；否则使用setup:browser安装的Chromium。历史验证报告记录的是当时本机结果，不代表其他设备已经验收。

## 仓库内容与边界

提交assets及.meta、settings、源码、测试、预制体作者工具、设计/UX/资源清单、验证截图、工作流与MCP扩展源码。排除library/temp/node_modules/profiles/build、本机私有配置和凭据。MCP扩展dist通过setup重新编译。

第三方技能与扩展保留其原有说明/许可标注；参考图仅作为设计参考，正式商用素材需确认授权。没有包含平台密钥、账号会话、真实广告ID或用户本地存档。当前无需付费API即可运行本地游戏；发布微信/抖音及真机SDK能力需要后续接入。
