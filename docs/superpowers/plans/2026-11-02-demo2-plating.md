# Demo2 装盘玩法 Implementation Plan

> For agentic workers: use superpowers:subagent-driven-development or superpowers:executing-plans, track progress here. User approved the design and explicitly requested implementation; no repeated approval checkpoint. Do not commit/push/build game automatically.

**Goal:** 在现有Cocos3.8.8工程中提供独立Demo2入口、5关无步数限制的拖动装盘/出餐试玩，复用Demo1 UI和角色，独立素材与状态。
**Architecture:** features/demo2内纯规则/关卡/求解回放；Cocos页面只负责输入与演出；独立art/latest/demo2资源及prefabs/demo2模板。共享旧UI/动画/音效只读。
**Tech Stack:** TypeScript、Cocos3.8.8、Node test、Playwright、原生asset-db、内置imagegen、sharp切图审计。
**Spec:** docs/demo2/DESIGN.md

## Global Constraints
- 6×6无透视；红黄绿蓝纯色底盘，原金属食物盘残留；1–4格整块食物不可拆/旋。
- 同时多订单，最多4位上方客人，多单直接显示成品色块+食物，无字母、无预印底盘图案。形状/食物决定订单匹配，不绑定食物ID。
- 任意食物可装任意几何容纳的盘，装满且匹配任意未完成订单才可从同色出口出餐；出餐不可撤回。
- 食物可取出；原盘带食物可整体搬动，空原盘可从任意尺寸足够的出口离场送洗；无第五回收口。
- 托盘移动带走其食物；一次拖动限制横或竖，无自动滑到障碍。松手对齐格子，非法动作完整回滚。
- 关1~3为2/3/4单，关4=5单，关5=6单；全部订单同时可做，无步数/计时/体力失败。重试清本局，进度使用demo2独立命名空间。
- 复用Demo1 UI、音频、仓鼠/狗兔熊；Demo1发布快照不改；新增资源/模板必须由Creator生成meta/prefab。
- 效果对照来源为批准图 exec-233d2610-8f97-465e-935b-ad2f641f825a.png，95%是目标非未经测量的完成结论。

## Tasks
- [x] 1 纯规则与回放：carrier/collision/packing/exit/order/undo边界测试，5关完整可行路径；核对并记录多种出餐顺序证据。
- [x] 2 美术：正视棋盘、首版5种1~4格形状、4色纯色底盘（轮廓可扩展）、金属盘、完整异形食物、四向1~4格出口、清洗传送带；原件/切图/许可说明/哈希审计。
- [x] 3 UI：独立Demo2入口和选关，复用四客人动画/订单卡/原按钮，正视拖动，出餐/送洗反馈、成功/重试/暂停；释放异步回调与资源。
- [x] 4 原生模板：单独demo2原生作者桥，经EditorExtends.serialize+asset-db创建，保存后删除临时节点。
- [x] 5 验证：全部原测试+新增规则与关卡测试、Creator类型检查、真实拖动/装盘/取出/出餐拒绝/送洗/5关回放/生命周期；实机预览与效果图同画幅对照。

## Review Focus
- 食物拖出不消灭原盘，托盘和平盘互挡；只允许正确包含的双层占位。
- 同类食物可互换，移走原盘不能带走未装好的食物；订单按组合而非内部ID匹配。
- 出场为不可撤回边界；重试/退出不触碰Demo1存档与体力。
- 移动/退出期间重复输入、销毁页面后的加载/动画/音频回调不得写旧状态。
- 关卡有解不等于极难或95%视觉，结果报告分开列出。

## Progress
- 2026-11-02: 当前编辑器路径已核对，Git工作区干净，用户批准就地独立Demo2迭代，复用现有编辑器；不另开worktree以免编辑器连接指向旧目录。Rules/art并行实施，主代理做Cocos UI和最终审查。

- 2026-11-02：原生导入9张图片和8个模板。预览服务已恢复；旧编辑器Canvas重序列化已通过原生API恢复，main.scene无diff。真实鼠标第一轮67动作完成5关，修复出界触摸取消。最终视觉与暂停/撤回/重试扩展验证中。95%视觉目标尚未人工验收。

- 最终验收：161/161测试通过、类型检查通过；实际鼠标68动作完成全部5关（含装错色可取出、非法出场拒绝、空盘送洗），暂停/继续/撤回/重试/返回列表通过。Creator预览无JS错误。实际截图已逐张检查；95%目标未量化、未获用户验收。未执行打包、提交或推送。
