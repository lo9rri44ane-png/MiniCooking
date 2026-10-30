import {loadUIPrefabs,releaseUIPrefabs} from '../framework/cocos/PrefabFactory';
import { _decorator, Component, UITransform, JsonAsset, game, Game, view, ResolutionPolicy, sys, isValid } from 'cc';
import { CocosAssets } from '../framework/cocos/CocosAssets';
import { AudioService } from '../framework/cocos/AudioService';
import { UIService, text } from '../framework/cocos/UIService';
import { EventBus } from '../framework/core/EventBus';
import { createPlatform } from '../framework/platform/PlatformAdapter';
import type { MiniSDK } from '../framework/platform/PlatformAdapter';
import { validateConfig, DEFAULT_CONFIG } from './GameConfig';
import { settingsStore } from './UserSettings';
import type { UserSettings } from './UserSettings';
import { registerPages } from './Pages';
import type { AppEvents } from './Pages';
const { ccclass } = _decorator;
@ccclass('MinigameApplication')
export class MinigameApplication extends Component {
    private assets = new CocosAssets();
    private ui: UIService | null = null;
    private audio: AudioService | null = null;
    private events = new EventBus<AppEvents>();
    private offSettings: (() => void) | null = null;
    private dead = false;
    private hide = () => this.audio?.suspend();
    private show = () => this.audio?.resume();
    start(): void { view.setDesignResolutionSize(DEFAULT_CONFIG.width, DEFAULT_CONFIG.height, ResolutionPolicy.SHOW_ALL); void this.initialize().catch(error => { if (this.dead || !isValid(this.node))
        return; if (!this.ui)
        this.ui = new UIService(this.node, DEFAULT_CONFIG.width, DEFAULT_CONFIG.height); this.ui.popup('启动未完成', String(error) + '\n请先让 Creator 导入资源并检查控制台。'); }); }
    private async initialize(): Promise<void> {
        const loading = text(this.node, '正在准备框架…', 0, 0, 620, 100, 28);
        await loadUIPrefabs(this.assets);
        if(this.dead){releaseUIPrefabs();return;}
        const lease = await this.assets.retain('config/framework', JsonAsset);
        let config;
        try {
            config = validateConfig(lease.asset.json);
        }
        finally {
            lease.release();
        }
        if (this.dead || !isValid(this.node))
            return;
        loading.node.destroy();
        view.setDesignResolutionSize(config.width, config.height, ResolutionPolicy.SHOW_ALL);
        this.node.getComponent(UITransform)!.setContentSize(config.width, config.height);
        this.ui = new UIService(this.node, config.width, config.height);
        this.audio = new AudioService(this.node, this.assets);
        const store = settingsStore(config.namespace);
        let settings: UserSettings;
        try {
            settings = store.load();
        }
        catch (error) {
            settings = { music: true, sound: true };
            this.ui.popup('设置读取失败', String(error) + '\n原存档保留，当前仅使用临时默认设置。');
        }
        const env = globalThis as unknown as {
            wx?: MiniSDK;
            tt?: MiniSDK;
        };
        const platform = createPlatform({ wx: env.wx, tt: env.tt, native: sys.isNative });
        this.offSettings = this.events.on('settings', value => this.audio?.configure(value.music, value.sound));
        this.audio.configure(settings.music, settings.sound);
        registerPages(this.ui, this.events, platform, () => ({ ...settings }), value => { store.save(value); settings = { ...value }; this.events.emit('settings', settings); }, config.title);
        game.on(Game.EVENT_HIDE, this.hide, this);
        game.on(Game.EVENT_SHOW, this.show, this);
        await this.ui.go('home');
    }
    onDestroy(): void { this.dead = true; game.off(Game.EVENT_HIDE, this.hide, this); game.off(Game.EVENT_SHOW, this.show, this); this.offSettings?.(); this.ui?.dispose(); this.audio?.dispose(); releaseUIPrefabs(); this.assets.close(); this.events.clear(); }
}
