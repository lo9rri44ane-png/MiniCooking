---
title: Demo2订单气泡、形状贴合与拥挤难关
type: feature
created: 2026-11-03
status: done
baseline_commit: 65efde099b9e7846ee9e184352d993c6bc267fa0
---

## Intent
用户要求订单气泡适配当前每客最多两份需求，重新生成横/竖两格食物及L形华夫饼；食物留白过多与跨进L缺角均需修复。锁区只要盖住元素任一格，整件禁止点击、手柄拖动与长按取出。后续难关应更接近华容道的拥挤腾挪，不能只用无意义打乱制造虚假的解长度。

## Constraints
Demo1不变；保留当前Demo2自由拖动/自动可达路径，不擅自改为只能直线移动。保留11关和300秒、客人轮换规则。原图分类备份；新图等比缩放、安全边缘、白色主体完整。L形食品实际alpha须在三个占位格内，不能靠mask截掉主体。原生meta由编辑器生成/保留UUID。

## Code Map / Tasks
- [x] Presentation.ts/BoardView：集中判断元素整体是否被锁，包括承载餐盒；点击及长按入口共用，规则校验保留。
- [x] Demo2Art/Pages：独立单双订单气泡，平衡内部两槽和手柄/食物比例；采用适配原图尺寸，等比显示。
- [x] art/demo2：重出横2鱼/面包/莓果、竖2玉子烧、L3华夫饼；严格形状alpha审计、深浅底与游戏截图复核，分类备份。
- [x] Levels/生成工具：提高后段占用与食物数，保留可解性；审计直接装盒出餐的捷径，第10关排除零准备出餐，其余局限如实记录；报告真实占用、食物/单数、证明动作及验证限度。
- [x] 用户补充的组合装盒：4格餐盒至少支持L3+I1及H2+H2两种食物，2格餐盒支持I1+I1；关卡算法按recipe形状与相对位置匹配，不绑定food ID。验证实际每客最多两份食物的队列，不把六个订单等同六份食物。
- [x] tests及真实浏览器：局部锁住多格食物不得起拖、手柄与长按不得绕过；订单轮换/图标布局与新难关可解回归。

## Acceptance
Given 任意一格被锁的2格食物, when 点击露出格或长按, then 不起拖、不移动、不显示预览。Given L形食物, when 在棋盘和订单显示, then 主体不进入右上空格，且不被截断。Given 后段难关, when 运行shipping规则, then 存在合法可行路径，拥挤不等于死锁；最优难度未完全求解时不冒称最优。

## Verification Results
- 186/186测试通过，Creator类型检查通过。
- 第6～11关最终组合密集布局，隔离浏览器真实鼠标471次动作全部通关，无console/page errors。
- 部分遮挡元素露出格：普通拖动及500ms长按均无选中、透明度变化或预览。规则同步禁止从部分锁定餐盒取出食品。
- 7张新增/重绘图分类保留原件、导出及旧版备份；L缺格非透明像素为0，旧食物UUID保留。
- 三路静态检查发现UI/规则载具锁一致性问题，已补Rules及断言；其余无确认阻断。
- 作者工具默认禁止改Levels；被引用的审计/队列模块无CLI写入副作用，默认守卫实测不改变关卡SHA。

## Known Limits
- 第9～11关实际并集占用72.5%/71.25%/72.92%，未达曾尝试的75%目标；不伪称满盘或已证明最优难度。
- 初始零准备直接组装出餐方案数2/0/1；第9/11仍保留顺手出餐，整关主观难度需要试玩。
- 全部存储路径仅为可行解，当前自由绕路拖动操作保持。

## Suggested Review Order

- 整件及承载餐盒遮挡门控
  [Presentation.ts:27](../../../assets/scripts/features/demo2/Presentation.ts#L27)

- 运行规则同步约束
  [Rules.ts:9](../../../assets/scripts/features/demo2/Rules.ts#L9)

- 当前单双气泡与组合布局
  [Demo2Pages.ts:38](../../../assets/scripts/features/demo2/Demo2Pages.ts#L38)

- 组合食谱和真实客人配额回放
  [demo2-composite-recipes.mjs:1](../../../tools/demo2-composite-recipes.mjs#L1)

- 完整主体适配与L形缺角检查
  [demo2-layout-art-export.mjs:1](../../../tools/demo2-layout-art-export.mjs#L1)
