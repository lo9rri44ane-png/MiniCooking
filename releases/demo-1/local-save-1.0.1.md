# 1.0.1 本地存档修复

根因确认：微信web-adapter的localStorage.getItem直接返回wx.getStorageSync结果；缺失键为空串。此前CampaignStore/Energy/SaveStore仅把null当作缺失，JSON.parse空串报错，导致新用户被误判存档损坏。

修复：SaveStore.readStoredValue仅将null、undefined、严格空串归一为缺失，全部存档读端共用；进度/体力清档事务读取也同样处理。非空非法JSON、结构无效和真实读取失败仍保留原始内容并明确报错，不自动清档。存档继续保存在本机微信/浏览器localStorage，无服务端同步。

验证：145项全量测试、Creator类型检查通过；直接执行微信构建产物的实际SaveStore/CampaignStore/Energy模块，模拟微信空串行为，验证初始体力10、首关可进入、通关保存、下次重载解锁、设置持久化、非空损坏不覆盖，均通过。未访问或清空用户真实存档。

微信工具预览和1.0.1上传成功，主包1.8MB、总包28.1MB。电脑工具因无法可靠确认浏览器网址终止，未能继续在后台核实“选为体验版”；上传成功与体验版选择分开记录。

依用户优先级，其余工程/skill/资源清理暂缓；Demo1的0.18.1已独立冻结在releases/demo-1，不被本修复覆盖。
