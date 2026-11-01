import {retainPrefabBinding} from '../../framework/cocos/PrefabFactory';
import {Node,Sprite,SpriteFrame,UITransform,Graphics,Color} from 'cc';
import {CocosAssets} from '../../framework/cocos/CocosAssets';
import type {AssetLease} from '../../framework/core/AssetCache';
import {uiNode} from '../../framework/cocos/UIService';
import {BREAKFAST_ART_PATHS} from './BreakfastArtCatalog';
export const BREAKFAST_V3_STATIC_PATHS=['board/board_4','board/board_5','board/board_6'] as const;
export const BREAKFAST_V4_PATHS=['ui/work_track','ui/work_fill','ui/order_check','board/station_mat'] as const;
export const BREAKFAST_V5_UI_PATHS=['ui/steps_panel',...Array.from({length:10},(_,i)=>'ui/digits/'+i)];
export const BREAKFAST_V7_PATHS=['ui/bag_locked'];
export const BREAKFAST_V9_PATHS=['backgrounds/home','backgrounds/notebook','backgrounds/loading','backgrounds/battle','ui/panel','ui/button_primary','ui/button_secondary','ui/button_neutral','ui/banner','ui/guide','ui/card','ui/energy','ui/compact_primary','ui/compact_secondary','ui/compact_neutral',...Array.from({length:8},(_,c)=>Array.from({length:10},(_,i)=>'collection/chapter_'+(c+1)+'/item_'+String(i+1).padStart(2,'0'))).flat()];
export const BREAKFAST_V10_PATHS=['covers/breakfast','covers/street','ui/order_bubble'];
export const BREAKFAST_V13_PATHS=['ui/dialog_panel','ui/guide','ui/end_banner','ui/recipe_card','ui/toast','ui/heading','ui/continue_button','ui/retry_button','ui/select_button','ui/confirm_button','ui/cancel_button','ui/undo_button','ui/overtime_button','ui/pause_button','ui/close_button','ui/energy_illustration'];
export const BREAKFAST_V15_PATHS=["ui/settings_panel", "backgrounds/settings", "ui/settings_row", "ui/rule_row", "ui/music_icon", "ui/sound_icon", "ui/toggle_on", "ui/toggle_off", "ui/rules_button", "ui/home_button", "ui/back_settings_button", "ui/gm_button", "ui/level_locked", "ui/lock_icon", "ui/perfect_medal", "ui/guide_arrow", "rules/slide", "rules/cook", "rules/mouth", "rules/steps", "rules/energy", "rules/restaurant"];
export const BREAKFAST_V17_SOURCES:Record<string,string>={"street/backgrounds/battle": "art/latest/backgrounds/street_battle", "street/board/board_4": "art/latest/board/street_board_4", "street/board/board_5": "art/latest/board/street_board_5", "street/board/board_6": "art/latest/board/street_board_6", "mechanics/stop_pad": "art/latest/board/mechanics/stop_pad", "mechanics/stop_pad_used": "art/latest/board/mechanics/stop_pad_used", "mechanics/switch_off": "art/latest/board/mechanics/switch_off", "mechanics/switch_on": "art/latest/board/mechanics/switch_on", "mechanics/door_closed": "art/latest/board/mechanics/door_closed", "mechanics/door_open": "art/latest/board/mechanics/door_open", "mechanics/conveyor_up": "art/latest/board/mechanics/conveyor_up", "mechanics/conveyor_down": "art/latest/board/mechanics/conveyor_down", "mechanics/conveyor_left": "art/latest/board/mechanics/conveyor_left", "mechanics/conveyor_right": "art/latest/board/mechanics/conveyor_right", "ingredients/egg": "art/latest/ingredients/egg", "ingredients/milk": "art/latest/ingredients/milk", "ingredients/coffee": "art/latest/ingredients/coffee", "ingredients/fish": "art/latest/ingredients/fish", "ingredients/rice": "art/latest/ingredients/rice", "dishes/eggtoast": "art/latest/dishes/eggtoast", "dishes/coffee": "art/latest/dishes/coffee", "dishes/fishrice": "art/latest/dishes/fishrice", "dishes/platter": "art/latest/dishes/platter", "dishes/milkberry": "art/latest/dishes/milkberry"};
BREAKFAST_V17_SOURCES['ui/swipe_direction']='art/latest/ui/tutorial/swipe_direction';
BREAKFAST_V17_SOURCES['v18/ui/customer_silhouette']='art/latest/ui/hud/customer_silhouette';
const RETIRED_ART_KEYS=new Set(["backgrounds/clean_plate","characters/chef_idle","characters/chef_slide","characters/chef_cook","characters/chef_win","characters/chef_fail","ui/undo_button","ui/overtime_button","ui/ad_tab","board/station","ui/order_bubble","ui/dialog_panel","ui/primary_button","ui/secondary_button","ui/tertiary_button","ui/pause_button","ui/end_banner","environment/sunlight","backgrounds/kitchen","board/floor_a","board/floor_b"]);
const frames=new Map<string,SpriteFrame>();let leases:AssetLease<SpriteFrame>[]=[];
export async function loadBreakfastArt(assets:CocosAssets,onProgress?:(done:number,total:number)=>void):Promise<void>{
 const acquired:AssetLease<SpriteFrame>[]=[];
 try{for(const path of [...BREAKFAST_ART_PATHS.filter(p=>!RETIRED_ART_KEYS.has(p)),...BREAKFAST_V3_STATIC_PATHS,...BREAKFAST_V4_PATHS,...BREAKFAST_V5_UI_PATHS,...BREAKFAST_V7_PATHS,...BREAKFAST_V9_PATHS.map(p=>'v9/'+p),...BREAKFAST_V10_PATHS.map(p=>'v10/'+p),...BREAKFAST_V13_PATHS.map(p=>'v13/'+p),...BREAKFAST_V15_PATHS.map(p=>'v15/'+p),...Object.keys(BREAKFAST_V17_SOURCES)]){const source=path.startsWith('v15/')?'art/breakfast-v15/'+path.slice(4):path.startsWith('v13/')?'art/breakfast-v13/'+path.slice(4):path.startsWith('v10/')?'art/breakfast-v10/'+path.slice(4):path.startsWith('v9/')?'art/breakfast-v9/'+path.slice(3):BREAKFAST_V7_PATHS.includes(path)?'art/breakfast-v7/'+path:/^board\/board_[456]$/.test(path)?'art/breakfast-v6/'+path:BREAKFAST_V5_UI_PATHS.includes(path)?'art/breakfast-v5/'+path:BREAKFAST_V4_PATHS.includes(path as typeof BREAKFAST_V4_PATHS[number])?'art/breakfast-v4/'+path:BREAKFAST_V3_STATIC_PATHS.includes(path as typeof BREAKFAST_V3_STATIC_PATHS[number])?'art/breakfast-v3/'+path:'art/breakfast-v2/'+path;const lease=await assets.retain((BREAKFAST_V17_SOURCES[path]||canonicalArtPath(source))+'/spriteFrame',SpriteFrame);acquired.push(lease);frames.set(path,lease.asset);onProgress?.(acquired.length,BREAKFAST_ART_PATHS.filter(p=>!RETIRED_ART_KEYS.has(p)).length+BREAKFAST_V3_STATIC_PATHS.length+BREAKFAST_V4_PATHS.length+BREAKFAST_V5_UI_PATHS.length+BREAKFAST_V7_PATHS.length+BREAKFAST_V9_PATHS.length+BREAKFAST_V10_PATHS.length+BREAKFAST_V13_PATHS.length+BREAKFAST_V15_PATHS.length+Object.keys(BREAKFAST_V17_SOURCES).length);}leases=acquired;}
 catch(e){acquired.forEach(l=>l.release());frames.clear();throw new Error('早餐店美术加载失败：'+String(e));}
}
export function releaseBreakfastArt():void{frames.clear();leases.forEach(l=>l.release());leases=[];}
/** Fit actual source proportions inside the gameplay bounds. */
export function breakfastImage(parent:Node,name:string,path:string,x:number,y:number,w:number,h:number):Node{
 const n=parent.getChildByName(name)||uiNode(parent,name,x,y,w,h);retainPrefabBinding(n);n.active=true;n.setPosition(x,y);setBreakfastImage(n,path,w,h);return n;
}
export function setBreakfastImage(n:Node,path:string,w:number,h:number):void{
 const frame=frames.get(path);if(!frame)throw Error('缺少早餐店美术：'+path);
 const source=frame.originalSize,scale=Math.min(w/source.width,h/source.height),width=source.width*scale,height=source.height*scale;
 const existing=n.getComponent(Sprite);if(existing)existing.enabled=false;const graphics=n.getComponent(Graphics);if(graphics)graphics.enabled=false;
 const visual=n.getChildByName('ArtVisual')||uiNode(n,'ArtVisual',0,0,width,height);
 retainPrefabBinding(visual);visual.setSiblingIndex(0);
 const s=visual.getComponent(Sprite)||visual.addComponent(Sprite);s.sizeMode=Sprite.SizeMode.CUSTOM;s.trim=false;s.type=Sprite.Type.SIMPLE;if(s.spriteFrame!==frame)s.spriteFrame=frame;s.color=new Color(255,255,255,255);
 n.getComponent(UITransform)!.setContentSize(width,height);visual.getComponent(UITransform)!.setContentSize(width,height);
}
export function breakfastSurface(n:Node,path:string):void{
 const frame=frames.get(path);if(!frame)throw Error('缺少早餐店美术：'+path);
 const t=n.getComponent(UITransform)!;const w=t.width,h=t.height;const source=frame.originalSize,scale=Math.min(w/source.width,h/source.height);
 const existing=n.getComponent(Sprite);if(existing)existing.enabled=false;const g=n.getComponent(Graphics);if(g)g.enabled=false;
 const visual=n.getChildByName('ArtSurface')||uiNode(n,'ArtSurface',0,0,w,h);retainPrefabBinding(visual);visual.setSiblingIndex(0);
 const s=visual.getComponent(Sprite)||visual.addComponent(Sprite);s.sizeMode=Sprite.SizeMode.CUSTOM;s.trim=false;s.type=Sprite.Type.SIMPLE;if(s.spriteFrame!==frame)s.spriteFrame=frame;s.color=new Color(255,255,255,255);
 const visibleTile=/^board\/(floor_a|floor_b|station)$/.test(path),rect=frame.rect,tileScale=visibleTile?Math.min(w/rect.width,h/rect.height):scale;visual.getComponent(UITransform)!.setContentSize(source.width*tileScale,source.height*tileScale);
}

export function hasBreakfastArt(path:string):boolean{return frames.has(path);}

export function breakfastAspect(path:string):number{const f=frames.get(path);if(!f)throw Error('缺少美术：'+path);return f.originalSize.width/f.originalSize.height;}

/** One shipped root; versioned keys remain compatibility aliases only. */
export function canonicalArtPath(source:string):string{const m=source.match(/^art\/breakfast-v(\d+)\/(.+)$/);if(!m)return source;const v=Number(m[1]);let key=m[2];if(/^(hamster|customers)\//.test(key))key='characters/'+key;else if(key.startsWith('fx/'))key='effects/'+key.slice(3);else if(key.startsWith('environment/'))key='effects/'+key.slice(12);else if(key.startsWith('ui/')){const name=key.slice(3),scope=v===9?'menu':v===13||v===4?'battle':v===5?'hud':v===7?'inventory':v===15?(/^(level_locked|lock_icon|perfect_medal)$/.test(name)?'campaign':name==='guide_arrow'?'tutorial':'settings'):'common';key='ui/'+scope+'/'+name;}else if(key.startsWith('rules/'))key='ui/settings/'+key;else if(key.startsWith('covers/'))key='campaign/'+key;else if(key.startsWith('collection/'))key='campaign/'+key;return'art/latest/'+key;}
