import {registerDemo2Pages} from '../features/demo2/Demo2Pages';
import {registerSettingsScreens} from './SettingsScreens';
import {gmAccess} from '../features/kitchen/GMAccess';
import {breakfastImage} from '../features/kitchen/BreakfastArt';
import {pageArt,action as kitchenAction} from '../features/kitchen/KitchenUI';
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
    const page = (name:string) => { const node = kitchenRoot(name);pageArt(node); node.layer = Layers.Enum.UI_2D; (node.getComponent(UITransform)||node.addComponent(UITransform)).setContentSize(720, 1280); const size = ui.safe.getComponent(UITransform)!.contentSize, scale = Math.min(size.width / 720, size.height / 1280); node.setScale(scale, scale, 1); return node; };
    const heading=(node:Node,value:string,y:number)=>{breakfastImage(node,'PageHeading','v9/ui/banner',0,y,560,110);const title=text(node,value,0,y,480,70,34);title.isBold=true;title.color=new Color().fromHEX('#704421');};
    const fail = (error: unknown) => ui.popup('操作未完成', String(error));
    registerDemo2Pages(ui);
    const kitchen = registerKitchenPages(ui, platform);
    ui.register('home', kitchen.home);
    registerSettingsScreens(ui,getSettings,saveSettings);
    ui.register('diagnostics', () => { const node = page('DiagnosticsPage'); heading(node,'框架检查',420); let count = 0; const status = text(node, '事件计数：0', 0, 270, 620); const off = events.on('settings', () => { count++; status.string = '收到设置事件：' + count; }); text(node, '页面路由 / 存档 / 事件 / 资源生命周期\n已接入框架；设备效果仍需预览确认', 0, 155, 610, 110, 23); if(gmAccess.enabled){button(node, '发送设置事件', 0, 15, 540, () => { gmAccess.require();events.emit('settings', getSettings()); ui.notify('事件已发送'); }, fail); button(node, '测试未接入广告', 0, -90, 540, async () => { gmAccess.require();const result = await platform.showRewardedAd(); ui.popup('平台接口结果', result.message || result.status); }, fail); }else text(node,'GM已关闭，当前为只读检查',0,-40,600,60,22);button(node, '返回', 0, -250, 540, () => ui.go('home'), fail); return { node, dispose: off }; });
}

