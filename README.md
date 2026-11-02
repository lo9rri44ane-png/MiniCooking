> 新玩法试玩：[Demo2 装盘出餐](docs/DEMO2.md)。当前 Creator 预览首页 →「Demo2 · 装盘试玩」，无需打包。

# 小小厨房下班啦！

Cocos Creator **3.8.8** · 2D滑动收集与烹饪益智游戏。当前标准为用户确认的 **第一版 Demo 1.0.1**：两家店、160关、仓鼠厨师与狗/兔/熊客人，完整美术、序列帧、音效、本地存档及微信分包。

## 从这里继续

- [Demo1基准与包](docs/DEMO1.md)
- [当前架构与资源位置](docs/ARCHITECTURE.md)
- [待制作事项](docs/BACKLOG.md)
- [美术与动画规范](docs/standards/ART.md)
- [换机与技能用法](docs/换机与环境配置.md)
- [历史档案及恢复](docs/HISTORY.md)

用Dashboard打开本目录，固定3.8.8，等待导入后预览 assets/scene/main.scene。MCP端口31388。新机器安装Node22+，执行 npm run setup；详细配置见换机文档。

```sh
npm test
npm run typecheck
npm run verify:wechat
```

进度、体力、引导、声音设置暂存各设备本地，尚无云存档。微信新用户空存档已在1.0.1修复，不通过清档掩盖异常。

日常只修改assets/scripts及对应资源；构建/生成命令见架构文档。不要运行历史生成器覆盖现有场景或已确认关卡。上传/发布需要单独明确授权。
