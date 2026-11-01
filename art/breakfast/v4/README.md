# 早餐店制作表现与点位修正

本轮资源使用内置 imagegen 生成，未调用付费API。原图保存在 `source/`，完整裁切输出在 `exports/`，游戏副本在 `assets/resources/art/breakfast-v4/`。6项资源包含制作进度条槽/填充、图形完成勾、仓鼠脚丫地毯、右上同源阳光和清理错误固定光斑的厨房背景。

`manifests/assets.json` 保存源图/输出尺寸、裁切框、边距和SHA256；`manifests/crop-audit.json` 将逐张目视结论绑定输出SHA。`previews/contact-sheet.png` 为编号联系图。重新导出使用 `node tools/prepare-breakfast-v4.mjs`，审计使用 `node tools/audit-breakfast-v4.mjs`，依赖当前环境的 Sharp。

制作3秒显示进度，填充通过Sprite横向裁切显示，不拉伸。制作后成品在厨具表面停留0.3秒，0.55秒弧线飞入对应订单；抵达才改变订单显示计数，随后菜品与食材显示图形完成勾，再执行客人满足演出。配送、客人演出继续使用独立槽位队列，不限制后续移动。时间和弧高集中在 `KitchenPresentationConfig.ts`。

`BoardCalibration.ts` 记录4/5/6棋盘实际源像素格分界；`BoardProjection.ts` 将格中心与输入双向映射。角色帧关闭Sprite trim，保持原画布比例；厨师脚底使用画布锚点21/256对准格中心。厨师光圈已删除，停靠格用统一脚丫地毯。

点位复核图为 `previews/board-calibration-4.svg`、`board-calibration-5.svg`、`board-calibration-6.svg`，红色为格分界、蓝色为锚点。

阳光使用右上唯一源点透明图，6秒sin²渐入渐出，暂停冻结；旧光束帧不再显示。背景已清理左侧固定强光斑。美术轮廓保持完整，背景/光场允许铺满；其他图透明边距完整。

## 验证

62项自动测试及类型检查通过。真实Creator预览专项报告为 `previews/cooking-polish-browser.json`，对应制作进度、成品/飞行、订单勾选与胜利截图。专项验证了进度递增、暂停时进度与光照冻结、角色比例/脚锚、层级、无光圈、右上同源光的渐入渐出，以及飞行抵达后显示完成勾。

原页面/预制体、教程及客人非阻塞回归也已通过。运行命令 `npm run verify:cooking`，需先启动现有Creator的7456预览。资源与模板已导入场景；未打包、提交或推送远端。

## 生成提示词记录

- UI图集：soft toy-like 3D raster art for cozy chibi cooking game; transparent canvas; three fully separated complete sprites: empty cream/gold caramel pill track, matching green pill fill, chunky green completion tick badge; no lettering; preserve padding and proportions.
- 停靠地毯：single isolated mint plush doormat with cream stitched rim and two golden hamster paw prints; gentle near-overhead perspective; complete silhouette, transparent safety margin; no text or character.
- 阳光：transparent portrait overlay; all soft warm golden shafts converge to the single upper-right origin (98%,2%); spread diagonally down-left; soft transparent falloff; no left light source, particles or scenery.
- 厨房编辑：preserve supplied background geometry, objects, blank HUD/floor/tray and art style; remove baked diagonal light shafts, dappled shadows and strong sunlight patches; replace with even warm ambient shading; separate animated sunlight added at runtime.
