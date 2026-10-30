---
name: 小小厨房，下班啦！
description: 单厨师滑动收集与自动烹饪益智小游戏的占位视觉系统
status: final
version: 1
updated: 2026-10-30
colors:
  background: '#F5EEDC'
  surface: '#FFFCF3'
  ink: '#39382F'
  muted: '#7D7968'
  primary: '#297D64'
  guide: '#153E3B'
  accent: '#E6AF46'
  highlight: '#FFC930'
  danger: '#B15D41'
  disabled: '#938771'
  floor-a: '#EEE0C2'
  floor-b: '#F8EDDB'
typography:
  title: {fontFamily: system-ui, fontSize: 34px, fontWeight: 700, lineHeight: 42px}
  body: {fontFamily: system-ui, fontSize: 23px, fontWeight: 400, lineHeight: 29px}
  caption: {fontFamily: system-ui, fontSize: 18px, fontWeight: 400, lineHeight: 24px}
  guide: {fontFamily: system-ui, fontSize: 22px, fontWeight: 700, lineHeight: 28px}
rounded:
  sm: 7px
  md: 12px
  lg: 16px
spacing:
  unit: 8px
  gutter: 24px
  card-gap: 12px
components:
  primary-button: {background: '{colors.primary}', foreground: '{colors.surface}', radius: '{rounded.lg}'}
  order-card: {background: '{colors.surface}', foreground: '{colors.ink}'}
  guide-dock: {background: '{colors.guide}', border: '{colors.highlight}', typography: '{typography.guide}'}
  failure: {foreground: '{colors.danger}'}
---

# Brand & Style

保留已认可的奶油色块原型。题材为人类视角下的迷你厨房，可爱小动物厨师为人类客人烹饪；本轮只规范布局，不制作正式插画。目标是让玩家一眼找到厨师、食材、设备、订单和剩余步数。[ASSUMPTION] 正式美术采用温暖、清晰、低纹理的2D卡通表现，后续可替换。

# Colors

背景使用 {colors.background}，卡片使用 {colors.surface}，主操作使用 {colors.primary}。高亮金色专用于教程目标与重点提示，不铺满棋盘。危险状态使用 {colors.danger} 并附文字，禁止仅靠红绿区分。食材和设备的颜色以 KitchenUI.food/deviceColors 为数据源，订单、菜谱、背包、棋盘必须同色同名。

# Typography

标题使用 {typography.title}，操作及订单使用 {typography.body}，附注使用 {typography.caption}。引导使用 {typography.guide}，白色加粗并有深底金边。动态数字不烘焙进图片。系统字体为当前运行实现；商用字体需明确授权后再导入。

# Layout & Spacing

设计坐标720×1280，原点居中；SafeArea内等比缩放。页面以固定基准布局配合数据驱动棋盘，不把每关做成场景。

| 页面 | 布局与主要优先级 |
|---|---|
| 首页 | 顶部体力；上方标题与餐厅总进度；中部“开始营业/继续”；下方设置与调试入口 |
| 餐厅 | 纵向餐厅卡：店名、简介、80关进度、进入/解锁条件；底部返回 |
| 选关 | 标题/进度、每章10关两列五行；章节翻页与继续营业 |
| 玩法 | y600工具栏；y545/492关卡信息；y444步数/容量；y340三客人卡；y241候场；棋盘中心y-38；y-365背包；y-475道具；y-590方向/暂停/菜谱 |
| 引导 | y520、高104的横向深色提示；只覆盖标题区域，棋盘、订单、背包与操作保持可见；真实动作期间整层隐藏 |
| 结算/暂停 | 独立全页弹层，标题y170、说明y35、主按钮y-105、次按钮向下排列；不透传输入 |
| 设置 | 标题、音乐/音效当前状态、两个开关、返回、保存位置说明 |

卡片间距遵循 {spacing.card-gap}，边缘留 {spacing.gutter}。棋盘按行列数计算单格尺寸，不能用固定尺寸素材挤压网格。当前方向按钮是滑动的备选输入。横屏采用等比留边，尚未专门重排布局。

# Elevation & Depth

原型使用实色层级，不依赖阴影。底层页面、玩法HUD、操作反馈、模态、教程依次明确所有权；模态阻挡底层操作。教程高亮为描边，不使用会遮挡棋盘的实心遮罩。正式美术可增加轻阴影，但不能改变命中区域。

# Shapes

棋盘格采用 {rounded.sm}；面板采用 {rounded.lg}。厨师为深绿色主体、白色轮廓、独立呼吸光环，不能与食材卡同造型。广告背包格必须保留“广告/+1格”文字和独立锁定样式。

# Components

| 组件 | 必须保留的信息 | 预制体 |
|---|---|---|
| 订单卡 | 客人编号、菜名/完成数量、材料色块×数、所需设备色块 | CustomerOrderCard / IngredientChip / RequiredDevice |
| 棋盘 | 双色地面、障碍、设备本体、停靠位、材料与厨师 | Board / BoardCell / Wall / DeviceTile / Station / IngredientTile / Chef |
| 背包 | 每格材料名、空格编号、容量警告、广告格状态 | BagSlot / AdBagSlot |
| 按钮 | 文字、常态、不可用状态、请求中状态；不得只有图标 | PrimaryButton / FrameworkButton |
| 结算 | 明确胜负原因、体力影响、下一步与返回；GM/辅助成绩单独标注 | WinResult / FailResult / PausePanel |
| 教程 | 行动句、方向/点击提示、明显描边、跳过 | TutorialOverlay / GuideDock / GuideFocus / GuideTarget |
| 系统状态 | 短说明与恢复办法；不能伪装成功 | LoadingState / EmptyState / ErrorState / Toast / Popup |

所有当前模块均以预制体资源为入口，数据和交互回调由控制层绑定；纯数据算法不做“空预制体”。完整清单见 prefab-inventory.csv。基础容器、状态模板与动效容器没有关卡快照，属于运行时数据填充模板。

# Do's and Don'ts

- 食材保持色块加文字；设备要求始终随菜谱显示。
- 引导直接等待真实滑动/点击，不先点“继续”；不遮住动作结果。
- 单个重点使用一次性短反馈，厨师呼吸不改变所在格子。
- 不把GM入口当正式付费入口；当前加班/撤回是本地试用，广告未接入应直说。
- 不把占位预制体或资源清单标为正式美术已交付。
