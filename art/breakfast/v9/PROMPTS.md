# 定稿提示词集合

方式：内置 imagegen。以下为各定稿源图的制作规格；源文件及SHA256见 manifests/assets.json。

- loading：基于v8海报精确编辑。现实仓鼠约兔子一半高，在柜台做饭；兔子头上两个小思考泡通向中央大云泡，内为被欣赏的巨大厨师仓鼠，帽子、青绿围裙、锅和爱心闪光；保留准确Logo“小小厨房下班啦！”。另一次精确编辑去掉底部静态进度条/贴纸/烘焙文字，让游戏独立显示加载状态。
- home：portrait9:16 clean cozy kitchen interior, cream wall, honey wooden floor, sparse mint fridge and shelves at edges, center clear for separately animated hamster, small neutral mat around y64%; no characters, UI, words or logo.
- notebook：portrait9:16 open blank cream recipe notebook on honey wood desk, overhead, subtle central fold, binding rings at far left, complete corners, sparse edge ribbon/leaf; no text, icons or cards.
- battle-top-cleanup：只移除原厨房顶部三个烘焙HUD条，补蓝天/云/樱花，其余视角、台面、地面、家具不变。工具仅采纳顶部天空，y180—260羽化，下方直接保留原图像素。
- panel：one complete blank vertical modal, cream interior, mint gingham border, honey rim, orange checked title tab, small daisy/leaf; genuine transparent background, complete corners, no words/buttons/characters.
- buttons：three separate long blank glossy pills, orange/mint/ivory, gingham bevel, transparent gaps; target5:1,实际原图约5.8:1，按原比例显示。
- compact-buttons：three separate short chunky rounded buttons, orange/mint/ivory, target3:1, transparent gaps, blank center, no icons/words，供短标题单独适配。
- battle-controls：three separate cream gingham rounded tools, undo curved arrow / alarm clock with plus / pause bars, lower caption area empty, orange/mint/orange; no text, complete transparent silhouettes。
- surfaces：complete cream-orange ribbon with small chef hat, no text; 仅提取此完整横幅，其余草稿面板不用于运行。
- card：one blank ivory collection card, stitched caramel rim, complete rounded silhouette, no icons or words.
- restaurant_card：one blank cream restaurant card, thick mint gingham rim, honey inner edge, complete transparent silhouette.
- guide：one long cream instruction board, mint stitched rim, small integrated daisy at left, blank center, no words/arrows；按实际约4.1:1原图设计布局。
- energy：red heart on left of blank ivory/gold capsule, mint plus at right, no digits/words, genuine transparency.
- collection1—2：4列5行20图，前10为生菜/番茄/胡萝卜/西兰花/玉米/南瓜/茄子/黄瓜/甜椒/蘑菇，后10为牛角包/切片吐司/法棍/椒盐卷/肉桂卷/贝果/华夫饼/煎饼/蓝莓松饼/草莓酥；二次编辑缩小至单元65%，完整修复靠边图，增大透明外缘。
- collection3—4：20图；10种芝士点心（芝士块、吐司、通心粉、披萨、牛角包、挞、三明治、蘑菇、烤土豆、芝士锅），10种独立水果饮品。透明间隔，完整杯沿/吸管/锅柄。
- collection5—6：20图；10种早午餐（鸡蛋吐司、培根蛋、牛油果吐司、酸奶、早餐三明治、卷饼、燕麦、香肠餐、炒蛋、格兰诺拉杯），10种厨具（铲、厨师帽、壶、锅、搅拌机、刀板、手套、打蛋器、秤、汤锅）。完整轮廓、不裁切。
- collection7—8：20图；10种盆栽花草（雏菊、向日葵、郁金香、薰衣草、薄荷、迷迭香、罗勒、草莓、玫瑰、多肉），10道招牌菜（沙拉、三明治、汉堡、意面、烤鸡、寿司、汤、草莓蛋糕、圣代、莓果煎饼）。大透明边缘，不强制按等分格裁图，最终按独立完整轮廓排序导出。

统一要求：polished cute tactile 2D cooking-game illustration, cream/honey orange/mint family, warm soft lighting, real alpha for sprites, no competitor branding, no nonuniform stretch, no clipped subjects or adjacent fragments。实际生成比例不符时按原比例调整布局或重新出图，禁止强拉。
