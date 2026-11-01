# 音频调整 v2

原库只读，v1源件/导出历史保留。此目录保存本轮8项更新的分类源件、导出、SHA与处理参数；未更新音效继续使用v1。运行目录保持原有路径与UUID。

- fly、guest_out：替换同源bubble_death为不同的短whoosh，不再使用下降气泡音。
- check：短铃确认；order_done：successorder素材完成提示。
- guest_happy_dog：npc_dog_en，限狗客人庆祝使用。猫叫源虽然存在，当前无猫客人；兔和熊不套用猫狗声音。
- music：首页pancakebgm，导出峰值提高至-10dBFS，播放音量0.55（原0.2）。
- music_battle_1/2：bakerybgm / Toastbgm，仅战斗播放，音量0.42；随机首曲，曲终换另一首，退出战斗恢复首页音乐。菜单切页不反复重播，暂停游戏保持原音乐语义。

试听previews/battle-sampler.wav与timeline.json。可用项目Python运行tools/prepare-kitchen-audio-v2.py再导出，需NumPy和原音频库。解码/峰值检查不代替主观听感确认。
