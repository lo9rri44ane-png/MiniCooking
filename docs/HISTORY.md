# 历史与恢复

日常入口只读README、AGENTS、DEMO1、ARCHITECTURE、BACKLOG；历史材料按需读取，不默认注入会话。

- **当前标准**：releases/demo-1，用户确认的1.0.1。发布包、源码配置快照、资产指纹、上传和存档验证记录均冻结。
- **历史档案**：archives/2026-11-01/history.zip。收纳旧设计/计划、旧实现报告、一次性脚本、过期预览图、0.18.1试包与临时诊断；按SHA256去重存储，manifest保留原路径和字节指纹。
- **过期生成工具**：同目录historical-tools.zip，包含旧角色/布局生成器与旧版UI诊断；只在复现历史时恢复。
- **技能备份**：同目录unused-skills.zip，34个非日常技能。
- **清理记录**：同目录cleanup-plan.json列出全部归档文件、大小、哈希与保留清单；原技能元数据CSV也在同目录。

档案使用manifest+blobs布局，不能直接把blobs当作源路径。按需恢复一个目录：

```sh
python tools/restore-project-history.py archives/2026-11-01/history.zip --prefix art/breakfast/v16/previews/
```

恢复会核对SHA并拒绝覆盖不同内容的当前文件；不要为查看旧文档全量恢复历史。

当前测试/生成器仍需的旧manifest、原图、导出、素材来源、版本哈希基准保留在原路径，避免以删fixture的方式让测试失去意义。

已删除可重建的npm缓存和重复构建，保留build/wechatgame-1.0.1与正在使用的Web预览。build/wechatgame原始微信构建目录由下次Creator构建自动生成；旧迁移/生成脚本未经核对不可直接重跑。

archives和发布ZIP是本地文件，默认被.gitignore忽略；换机需要保留历史时请单独复制。

## 本次整理结果

2026-11-01：项目skill45→11，日常工具22个；1046份历史文件移出日常目录，主档案合并56份同字节副本。145项测试、530个微信原生资源哈希和全部基准assets文件校验通过。运行素材无重复可删项，未改动当前美术或已确认的1.0.1包；原件和当前测试fixture仍保留。完整结果见docs/verification/maintenance-summary.json。
