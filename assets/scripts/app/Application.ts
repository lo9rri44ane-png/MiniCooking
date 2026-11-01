import {bindKitchenAudio,clickSound,SOUND_KEYS,soundPath,MUSIC_KEYS,audioPath,selectKitchenMusic} from '../features/kitchen/KitchenSound';
import {setUIFeedback,setUIPageFeedback} from '../framework/cocos/UIService';
import {gmAccess} from '../features/kitchen/GMAccess';
import {BootProgress} from '../framework/core/BootProgress';
import {Sprite,SpriteFrame,Node,Graphics,Color} from 'cc';
import {AssetLease} from '../framework/core/AssetCache';
import {breakfastSurface,hasBreakfastArt,setBreakfastImage,canonicalArtPath} from '../features/kitchen/BreakfastArt';
import {setUITheme,uiNode} from '../framework/cocos/UIService';
import {loadKitchenAnimations,releaseKitchenAnimations} from '../features/kitchen/KitchenAnimationLibrary';
import {loadBreakfastArt,releaseBreakfastArt} from '../features/kitchen/BreakfastArt';
import {loadUIPrefabs,releaseUIPrefabs} from '../framework/cocos/PrefabFactory';
import { _decorator, Component, UITransform, JsonAsset, Label, game, Game, view, ResolutionPolicy, sys, isValid } from 'cc';
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
    private boot=new BootProgress();private dead = false;private poster:AssetLease<SpriteFrame>|null=null;private loadingNode:Node|null=null;private loadingNodes:Node[]=[];
    private unlockAudio=()=>this.audio?.unlock();
    private hide = () => this.audio?.suspend();
    private show = () => this.audio?.resume();
    start(): void { view.setDesignResolutionSize(DEFAULT_CONFIG.width, DEFAULT_CONFIG.height, ResolutionPolicy.SHOW_ALL); void this.initialize().catch(error => { if (this.dead || !isValid(this.node))
        return;this.boot.stop();for(const label of this.node.getComponentsInChildren(Label))if(label.node.name==='BootLoadingStatus')label.string='加载失败，请刷新重试';if (!this.ui)
        this.ui = new UIService(this.node, DEFAULT_CONFIG.width, DEFAULT_CONFIG.height); this.ui.popup('启动未完成', String(error) + '\n请先让 Creator 导入资源并检查控制台。'); }); }
    private async initialize(): Promise<void> {
        const loading = text(this.node, '正在准备厨房…', 0, -580, 620, 45, 21);loading.node.name='BootLoadingStatus';this.loadingNode=loading.node;this.loadingNodes.push(loading.node);
const track=uiNode(this.node,'LoadingProgress',0,-510,520,30),g=track.addComponent(Graphics),percent=text(this.node,'0%',0,-548,500,35,23);loading.color=new Color(112,68,33);percent.color=new Color(112,68,33);percent.isBold=true;this.loadingNodes.push(track,percent.node);
const update=(stage:number,done:number,total:number,name:string)=>{if(this.dead||!isValid(track))return;const value=this.boot.update(stage,done,total);g.clear();g.fillColor=new Color(133,79,30);g.roundRect(-260,-15,520,30,15);g.fill();g.fillColor=new Color(255,242,207);g.roundRect(-256,-11,512,22,11);g.fill();if(value>0){g.fillColor=new Color(255,176,44);g.roundRect(-254,-9,Math.max(2,508*value/100),18,Math.min(9,508*value/200));g.fill();}percent.string=Math.floor(value)+'%';loading.string=name+' '+done+'/'+total;};update(0,0,1,'准备海报');
        try{this.poster=await this.assets.retain(canonicalArtPath('art/breakfast-v9/backgrounds/loading')+'/spriteFrame',SpriteFrame);if(this.dead){this.poster.release();this.poster=null;return;}const poster=uiNode(this.node,'StartupPoster',0,0,720,1280);this.loadingNodes.push(poster);const image=poster.addComponent(Sprite);image.spriteFrame=this.poster.asset;image.sizeMode=Sprite.SizeMode.CUSTOM;image.trim=false;const size=this.poster.asset.originalSize,k=Math.min(720/size.width,1280/size.height);poster.getComponent(UITransform)!.setContentSize(size.width*k,size.height*k);poster.setSiblingIndex(0);this.loadingNode=poster;track.setSiblingIndex(this.node.children.length-1);percent.node.setSiblingIndex(this.node.children.length-1);loading.node.setSiblingIndex(this.node.children.length-1);update(0,1,1,'海报就绪');}catch(error){throw Error('加载海报失败：'+String(error));}
        await loadUIPrefabs(this.assets,(d,t)=>update(1,d,t,'加载界面'));if(this.dead){releaseUIPrefabs();return;}
        await loadBreakfastArt(this.assets,(d,t)=>update(2,d,t,'加载美术'));if(this.dead){releaseUIPrefabs();releaseBreakfastArt();return;}
        await loadKitchenAnimations(this.assets,(d,t)=>update(3,d,t,'加载动画'));
        if(this.dead){releaseUIPrefabs();releaseBreakfastArt();releaseKitchenAnimations();return;}
                setUITheme((node,role)=>{let inside=false,overlay=false;for(let p:Node|null=node;p;p=p.parent){if(['KitchenGame','SettingsPage','RulesPage'].includes(p.name))inside=true;if(p===this.ui?.overlays)overlay=true;}const battle=inside||(overlay&&!!this.ui?.pages.children.some(n=>['KitchenGame','SettingsPage','RulesPage'].includes(n.name)));const path=battle?(role==='button'?'v13/ui/cancel_button':role==='panel'?'v13/ui/dialog_panel':'v13/ui/toast'):(role==='button'?'v9/ui/button_secondary':role==='panel'?'v9/ui/panel':'v9/ui/guide');if(hasBreakfastArt(path)){if(role==='button'){const t=node.getComponent(UITransform)!;setBreakfastImage(node,path,t.width,t.height);}else{if(battle&&role==='toast')node.getComponent(UITransform)!.setContentSize(610,146);breakfastSurface(node,path);}}});
        const lease = await this.assets.retain('config/framework', JsonAsset);if(this.dead){lease.release();releaseUIPrefabs();releaseBreakfastArt();releaseKitchenAnimations();return;}
        let config;
        try {
            config = validateConfig(lease.asset.json);
        }
        finally {
            lease.release();
        }
        if (this.dead || !isValid(this.node))
            return;
        update(4,1,SOUND_KEYS.length+MUSIC_KEYS.length+3,'准备配置');
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
        await this.audio.preloadEffects([...SOUND_KEYS.map(soundPath),...MUSIC_KEYS.map(audioPath)],(d,t)=>update(4,d+1,t+3,'加载音效'));if(this.dead)return;
        bindKitchenAudio(this.audio);await selectKitchenMusic('home');if(this.dead)return;update(4,SOUND_KEYS.length+MUSIC_KEYS.length+2,SOUND_KEYS.length+MUSIC_KEYS.length+3,'音乐就绪');setUIFeedback(clickSound);setUIPageFeedback(id=>{void selectKitchenMusic(id).catch(error=>console.warn('背景音乐切换失败',error));});
        registerPages(this.ui, this.events, platform, () => ({ ...settings }), value => { store.save(value); settings = { ...value }; this.events.emit('settings', settings); }, config.title);
        if(typeof document!=='undefined'){document.addEventListener('pointerdown',this.unlockAudio);document.addEventListener('keydown',this.unlockAudio);}
        game.on(Game.EVENT_HIDE, this.hide, this);
        game.on(Game.EVENT_SHOW, this.show, this);
        update(4,SOUND_KEYS.length+MUSIC_KEYS.length+2,SOUND_KEYS.length+MUSIC_KEYS.length+3,'创建首页');await this.ui.go('home');if(this.dead)return;update(4,SOUND_KEYS.length+MUSIC_KEYS.length+3,SOUND_KEYS.length+MUSIC_KEYS.length+3,'准备完成');loading.node.destroy();percent.node.destroy();track.destroy();this.loadingNode?.destroy();this.loadingNode=null;this.loadingNodes=[];this.poster?.release();this.poster=null;
    }
    onDestroy(): void { this.dead = true;bindKitchenAudio(null);setUIFeedback(null);setUIPageFeedback(null);this.boot.stop();for(const node of this.loadingNodes)if(isValid(node,true))node.destroy();this.loadingNodes=[];setUITheme(null);this.poster?.release();this.poster=null; if(typeof document!=='undefined'){document.removeEventListener('pointerdown',this.unlockAudio);document.removeEventListener('keydown',this.unlockAudio);}game.off(Game.EVENT_HIDE, this.hide, this); game.off(Game.EVENT_SHOW, this.show, this); this.offSettings?.(); this.ui?.dispose();gmAccess.set(false); this.audio?.dispose(); releaseUIPrefabs();releaseBreakfastArt();releaseKitchenAnimations(); this.assets.close(); this.events.clear(); }
}
