---
title: Demo2出餐与分区关卡迭代
type: feature
created: 2026-11-02
status: done
baseline_commit: 65efde099b9e7846ee9e184352d993c6bc267fa0
context: [docs/standards/ART.md]
---

<frozen-after-approval reason="用户连续补充并明确继续执行本轮全部内容">

## Intent
取消金属餐盘及空盘回收，仅保留食物和彩色餐盒，突出空间重排。三位动物客人沿用Demo1美术与入场、气泡、勾选、庆祝离场流程，每人最多显示两份食物需求，完成才补下一位。加入默认300秒有效游戏倒计时。扩大出口拖拽吸附响应，保留真实颜色、尺寸、路径与订单校验。原五关按新规则修订，再新增六关。新增按送出N单开放区域，以及颜色订单解锁变种。食物重画为Demo1柔和Q版，增加食物类型以区分同占位形状。

## Boundaries & Constraints
Always: Cocos3.8.8、2D；Demo1冻结不改；资产原件分类备份；仅本地迭代，不提交/推送/发布；原玩家存档不用于测试。暂停停倒计时，撤回不返还时间；重试恢复300秒；时间用尽禁止操作并结算。订单只匹配已入场就绪的客人，演出不锁其他操作；出餐立即不可撤回；离场后才补位。当前订单无法出餐时明确提示。
Never: 静帧凑动画、非等比拉伸、截断食物、把全订单塞进气泡、静态假进度、宣称可行解为最优解。

## I/O & Edge-Case Matrix
|场景|输入|结果|
|---|---|---|
|拖空餐盒到出口|未满或不匹配|拒绝，不回收|
|正确出餐|匹配就绪客人、足够宽同色出口|飞订单、打勾、庆祝离场补客|
|区域未开放|拖动穿越锁格或选择锁区食物|拒绝；达阈值后开放|
|出口附近松手|在加宽响应区内|选择可达合法出口落点；不跨墙、不吞错误餐盒|
|暂停/退出|计时与演出进行中|暂停时冻结；退出取消旧异步回调|
|最后一单与超时|同一帧边界|先检查有效时间；终态只产生一次|
</frozen-after-approval>

## Code Map
- `assets/scripts/features/demo2/Rules.ts`、`Types.ts`、`Session.ts`：纯规则、解锁条件、有效订单。
- `Demo2Pages.ts`、`Demo2BoardView.ts`、`Presentation.ts`：客人、计时、吸附、区域遮罩。
- `tools/demo2-generate-levels.mjs`、`Levels.ts`：11关构造、真实回放证明。
- `Demo2Art.ts`、`art/demo2`、`assets/resources/art/latest/demo2`：Q版食物，原件与审计。

## Tasks & Acceptance
- [x] 规则：取消金属盘和送洗，动态就绪订单与解锁区域。
- [x] 关卡：原五关修订、六新关，锁区确实阻挡必要食物/路径，合法可行解。
- [x] 表现：最多两食物气泡、轮换客人、飞食物/勾选/庆祝、5分钟、出口扩区。
- [x] 美术：原六食物Q版重画，新增至少两类以颜色和轮廓双重区分。
- [x] 验证：规则与客人/时钟边界测试、全套测试/类型检查、实际预览拖动及截图。

Acceptance: Given 11关初始状态, when shipping规则回放, then 每关可胜、无送洗动作；Given 锁区, when 阈值未达/已达, then 分别禁止/允许使用；Given 三位客人, when 完成对应需求, then 依次演出且其他棋子仍可移动；Given 300秒, when 暂停/恢复/到0, then 冻结/继续/只结算一次。

## Design Notes
采用现有Cocos页面与纯规则扩展，复用Demo1角色/气泡美术，不重做引擎或更换玩法。新机制1为出餐数量门槛（例如送出2单开放右侧备餐区）；机制2为指定颜色出餐开锁（显示颜色与计数），后续关结合两者。锁区内可预置食物及餐盒但不可移动/跨越。新增紫色莓果和青绿色寿司形成同格型显著差异；不为“增加种类”无目的堆图。

## Verification
`node --import ./tests/register.mjs --test tests/*.test.mjs`；`node tools/typecheck.mjs`。隔离浏览器真实拖拽验证、截图深浅背景检查。可行路径不代表最少动作或真人难度已验收。

## Verification Results (2026-11-03)
- 180/180自动测试通过；Creator类型检查通过。
- 隔离浏览器首轮11关共496次真实拖拽通关；最终双区更新后6～10关复测通关，11关单独72次真实拖拽通关。一次长时间并行自动化运行在11关交单处失败，未冒称该次全通过；单独复测未复现，最终报告保留本次独立通过结果。
- 真实界面时钟：暂停60秒冻结、恢复扣时、超时单次结算、重试恢复300秒。
- 八图已在深、浅底及棋盘截图目视检查；alpha边界审计通过；旧图、原件与导出分类保存。
- 三路静态检查无确认阻断；两项气泡重名候选经BreakfastArt按名称复用实现排除。
- 无提交、推送、构建或发布，Demo1冻结文件不变。

## Suggested Review Order

- 页面入口、时钟和客人演出
  [Demo2Pages.ts:10](../../../assets/scripts/features/demo2/Demo2Pages.ts#L10)

- 客人就绪、轮换和时间模型
  [Demo2Flow.ts:6](../../../assets/scripts/features/demo2/Demo2Flow.ts#L6)

- 出餐过滤与区域阻挡
  [Rules.ts:6](../../../assets/scripts/features/demo2/Rules.ts#L6)

- 出口吸附仍走规则校验
  [Presentation.ts:27](../../../assets/scripts/features/demo2/Presentation.ts#L27)

- 11关构造与可行回放
  [demo2-generate-levels.mjs:1](../../../tools/demo2-generate-levels.mjs#L1)

- 暂停与客人生命周期边界
  [demo2-flow.test.mjs:1](../../../tests/demo2-flow.test.mjs#L1)
