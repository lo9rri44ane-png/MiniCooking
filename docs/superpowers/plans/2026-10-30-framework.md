# Minigame Framework Implementation Plan
> Use superpowers:executing-plans task-by-task.
**Goal:** 安装BMad并搭建3.8.8轻量小游戏框架。
**Architecture:** TS核心+Cocos适配+应用/业务层。
**Tech Stack:** TS、Creator3.8.8、Node24。
**Spec:** docs/design/小游戏框架方案.md
## Constraints
不另开引擎、不打包、不手写scene/meta，不擅自增加玩法。
## Review focus
存档损坏与未来版本不覆盖；路由乱序和失败；资源释放；事件清理；平台失败。
## Tasks
- [x] 安装41个工作流并锁版本。
- [x] 先写核心服务失败测试，最小实现。
- [x] Cocos适配与框架检查页。
- [x] 测试、引擎声明类型检查、使用说明与未验证项。

验证边界：未启动编辑器；16个新增资源待编辑器导入生成meta。UI为源码实现，未声称真实预览通过。
