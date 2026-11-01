# 项目技能

项目本地技能由45个精简为11个。只按任务匹配，不机械运行整套流程。

| 任务 | skill |
|---|---|
| Creator组件、场景、预制体、资源、发布 | cocos-creator |
| 功能实现与修复 | gds-quick-dev |
| Bug根因与陌生代码调查 | gds-investigate |
| 当前玩法设计文档 | gds-gdd |
| 玩法构思 | gds-brainstorm-game |
| UI/HUD交互规划 | gds-ux |
| 系统架构 | gds-game-architecture |
| 代码审查 | gds-code-review |
| 测试自动化 | gds-test-automate |
| 工程文档 | gds-document-project |
| 用户要求的文档/产物review | bmad-review |

位置：.agents/skills/<名称>/SKILL.md。生图使用会话提供的全局imagegen。清理未改动全局插件、登录配置或其他工程。

角色扮演、多套重复规划/测试入口、市场调研、叙事、Sprint管理等34个暂不用的技能已移出自动发现目录，备份为archives/2026-11-01/unused-skills.zip。需要某个技能时可选择性恢复：

```sh
python tools/restore-project-history.py archives/2026-11-01/unused-skills.zip --prefix .agents/skills/技能名/
```

恢复受保护的.agents目录可能需要本机授权。恢复后重新加载会话技能列表。
