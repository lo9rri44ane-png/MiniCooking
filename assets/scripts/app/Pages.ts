import {PrefabSlot} from '../framework/cocos/PrefabSlot';
import {root as kitchenRoot,palette} from '../features/kitchen/KitchenUI';
import {prefabNode} from '../framework/cocos/PrefabFactory';
import { registerKitchenPages } from '../features/kitchen/KitchenPages';
import { Node, Layers, UITransform, Color } from 'cc';
import { UIService, text as systemText, button } from '../framework/cocos/UIService';
import { EventBus } from '../framework/core/EventBus';
import type { UserSettings } from './UserSettings';
import type { PlatformAdapter } from '../framework/platform/PlatformAdapter';
const text=(...args:Parameters<typeof systemText>)=>{const label=systemText(...args);if(!label.node.getComponent(PrefabSlot)?.preserveStyle)label.color=new Color().fromHEX(palette.ink);return label;};
export interface AppEvents {
    settings: UserSettings;
}
export function registerPages(ui: UIService, events: EventBus<AppEvents>, platform: PlatformAdapter, getSettings: () => UserSettings, saveSettings: (value: UserSettings) => void, title = '小游戏开发框架'): void {
    const page = (name:string) => { const node = kitchenRoot(name); node.layer = Layers.Enum.UI_2D; (node.getComponent(UITransform)||node.addComponent(UITransform)).setContentSize(720, 1280); const size = ui.safe.getComponent(UITransform)!.contentSize, scale = Math.min(size.width / 720, size.height / 1280); node.setScale(scale, scale, 1); return node; };
    const fail = (error: unknown) => ui.popup('操作未完成', String(error));
    const kitchen = registerKitchenPages(ui, platform);
    ui.register('home', kitchen.home);
    ui.register('settings', () => { const node = page('SettingsPage'); text(node, '设置', 0, 420, 600, 70, 36); const render = () => { const s = getSettings(); musicLabel.string = '音乐：' + (s.music ? '开' : '关'); soundLabel.string = '音效：' + (s.sound ? '开' : '关'); }; const musicLabel = text(node, '', 0, 260, 600), soundLabel = text(node, '', 0, 205, 600); button(node, '切换音乐', 0, 90, 540, () => { saveSettings({ ...getSettings(), music: !getSettings().music }); render(); }, fail); button(node, '切换音效', 0, -15, 540, () => { saveSettings({ ...getSettings(), sound: !getSettings().sound }); render(); }, fail); button(node, '返回', 0, -190, 540, () => ui.go('home'), fail); text(node, '开关保存于本机。当前没有默认音频素材。', 0, -330, 610, 90, 21); render(); return { node }; });
    ui.register('diagnostics', () => { const node = page('DiagnosticsPage'); text(node, '框架检查', 0, 420, 600, 70, 36); let count = 0; const status = text(node, '事件计数：0', 0, 270, 620); const off = events.on('settings', () => { count++; status.string = '收到设置事件：' + count; }); text(node, '页面路由 / 存档 / 事件 / 资源生命周期\n已接入框架；设备效果仍需预览确认', 0, 155, 610, 110, 23); button(node, '发送设置事件', 0, 15, 540, () => { events.emit('settings', getSettings()); ui.notify('事件已发送'); }, fail); button(node, '测试未接入广告', 0, -90, 540, async () => { const result = await platform.showRewardedAd(); ui.popup('平台接口结果', result.message || result.status); }, fail); button(node, '返回', 0, -250, 540, () => ui.go('home'), fail); return { node, dispose: off }; });
}

