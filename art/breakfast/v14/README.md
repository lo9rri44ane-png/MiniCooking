# 角色12帧 v14

仓鼠13动作（idle3、move4、work4、full、win）与狗/兔/熊各4动作，共25clip×12=300帧。库默认12fps；出现、消失、庆祝等短演出按既有时长完整播放12帧。阳光和共用烟雾未扩为12帧，保持原设计。

全部由内置imagegen逐动作制作12姿态图集，禁止复制帧或整体平移缩放凑数。提示集摘要：严格同一角色/衣装/方向/鼓腮级别，4列3行12真实连续姿态，帽耳脚完整、各格安全留白、固定身体root；白底去底，兔子另用绿底避免白耳白毛损失。原源图与切片、SHA、root、padding、联系图审计分别在source、exports、manifests、previews。256固定画布，idle落脚236，跳跃状态保留自然轨迹。

最后复查发现work_up持勺手跳变，已重生成整组12帧：固定画面右侧同手搅拌、左手始终放低，不转身不镜像；其他288帧SHA不变。源图和联系图由根及独立验收复查通过，旧错误图/帧在rejected归档，见manifests/work-up-fix.json。

KitchenAnimationLibrary读取运行v14 JSON，有界8并发真实预加载、错误等待已启动请求结束再释放。ChefBody/CustomerActor原生默认帧均12且fps12，编辑器authoring见tools/author-actors-v14.mjs；没有手写meta。

已实际验证活跃12帧、修正后work_up全部12帧渲染、2秒制作和现有交付/勾选/顾客庆祝流程。联系图与自动哈希不能单独证明所有动画的主观平滑度，也不宣称未经量化的95%相似度。
