import {globalLevelNumber,hasPerfectClear,campaignResultRevision} from './CampaignPresentation';
import {gmAccess} from './GMAccess';
import {collectionIcon,CHAPTER_SERIES} from './ChapterCollection';
import {animationPlayer,playKitchenClip} from './KitchenAnimationLibrary';
import {breakfastImage,breakfastSurface,hasBreakfastArt} from './BreakfastArt';
import {uiNode} from '../../framework/cocos/UIService';
import {Node,Button,UIOpacity,Sprite} from 'cc';
import {UIService} from '../../framework/cocos/UIService';
import type {PageView} from '../../framework/cocos/UIService';
import {CampaignStore} from './CampaignStore';
import {RESTAURANTS,CAMPAIGN_LEVELS} from './CampaignData';
import type {Level} from './Rules';
import {EnergyBank} from './Energy';
import {resetKitchenSave} from './GameSaveReset';
import {palette,rect,label,action,root,energyWidget,choicePanel,pageArt,pageHeading} from './KitchenUI';
import {restaurantCover} from './RestaurantCover';
export function registerCampaignNavigation(ui:UIService,store:CampaignStore,bank:EnergyBank,enter:(level:Level)=>void):{home:()=>PageView;levelsFor:(level:Level)=>void;restaurants:()=>void}{
 let restaurantIndex=0,pageIndex=0;
 const go=(id:string)=>{void ui.go(id).catch(e=>ui.notify(String(e)));};
 const tryEnter=(level:Level)=>{try{if(store.error)throw Error(store.error);if(!store.canPlay(level.id))throw Error('请先完成前一关，再挑战这一关');if(bank.error)throw Error(bank.error);if(bank.snapshot().value<1)throw Error('体力不足，请等待恢复等待自然恢复');enter(level);}catch(e){ui.notify(String(e));}};
 const firstOpen=()=>CAMPAIGN_LEVELS.find(l=>store.canPlay(l.id)&&!store.cleared(l.id));
 const gm=(n:Node)=>{if(!gmAccess.enabled)return;return choicePanel(n,'餐厅进度 GM','开放只改变关卡访问，不伪造通关。\n清档会删除本游戏进度，须再次确认。',[
  {title:'开放全部餐厅与关卡（GM）',run:()=>{try{store.setDebugAll(true);go('kitchen-select');}catch(e){ui.notify(String(e));}}},
  {title:'清档 · 重置存档',run:()=>choicePanel(n,'确认清档？','将清除通关成绩、全部引导与GM标记，\n体力重置为10，回到第一家餐厅第1关。\n保留音乐音效设置及其他存档；此操作不可撤销。',[
   {title:'确认清档 · 重新开始',run:()=>{try{gmAccess.require();resetKitchenSave(store,bank);gmAccess.set(false);restaurantIndex=0;pageIndex=0;go('kitchen-select');}catch(e){ui.notify(String(e));}}},
   {title:'取消 · 保留存档',run:()=>{}}
  ])}
 ]);};
 ui.register('restaurants',()=>{
  const n=root('Restaurants');pageArt(n);energyWidget(n,bank);pageHeading(n,'我的餐厅',510);label(n,'完成本店全部80关，解锁下一家',0,447,600,32,19,'#8D6746');
  RESTAURANTS.forEach((r,i)=>{const y=235-i*390,open=store.restaurantUnlocked(r.id),card=rect(n,'Restaurant-'+r.id,0,y,560,348,palette.white);
   restaurantCover(card,i,r.name,open,store.clearedCount(r.id),()=>{if(!open){ui.notify('需要完成上一家餐厅全部80关');return;}restaurantIndex=i;const index=r.levelIds.findIndex(id=>!store.cleared(id));pageIndex=index<0?7:Math.floor(index/10);go('kitchen-select');});
   if(i===1&&!hasBreakfastArt('street/backgrounds/battle')){const notice=rect(card,'ArtPendingNotice',0,-92,270,38,'#FFF0C7',10);label(notice,'暂未制作美术',0,0,250,32,21,'#8A4D22').isBold=true;}
  });
  action(n,'返回首页',-165,-452,290,62,()=>go('home'),'#827B68');if(gmAccess.enabled)action(n,'进度GM',165,-452,290,62,()=>gm(n),'#A27852');return {node:n};
 });
 ui.register('kitchen-select',()=>{
  if(!store.restaurantUnlocked(RESTAURANTS[restaurantIndex]?.id||''))({restaurantIndex,pageIndex}=store.accessibleSelection(restaurantIndex,pageIndex));
  const n=root('CampaignSelect'),r=RESTAURANTS[restaurantIndex];pageArt(n);energyWidget(n,bank);pageHeading(n,r.name,520);if(gmAccess.enabled)action(n,'进度GM',265,600,130,48,()=>gm(n),'#A27852');
  label(n,`进度 ${store.clearedCount(r.id)} / 80${store.debugAll?' · GM开放（不代表通关）':''}`,0,470,650,34,19,palette.muted);
  const levels=r.levelIds.slice(pageIndex*10,pageIndex*10+10).map(id=>CAMPAIGN_LEVELS.find(l=>l.id===id)!);
  label(n,`第${pageIndex+1}章 · ${CHAPTER_SERIES[pageIndex]}`,0,425,650,38,25).isBold=true;
  levels.forEach((level,i)=>{const open=store.canPlay(level.id),cleared=store.cleared(level.id),card=rect(n,'CampaignLevel-'+level.id,i%2===0?-160:160,350-Math.floor(i/2)*132,303,112,cleared?'#DFECD9':open?palette.white:'#DDD7C9');
   breakfastSurface(card,!open&&hasBreakfastArt('v15/ui/level_locked')?'v15/ui/level_locked':'v9/ui/card');const icon=breakfastImage(card,'CollectionIcon',collectionIcon(pageIndex,i),-94,0,64,64);icon.addComponent(UIOpacity).opacity=cleared?255:open?120:45;const picture=icon.getChildByName('ArtVisual')?.getComponent(Sprite);if(picture)picture.grayscale=!open;if(!open&&hasBreakfastArt('v15/ui/lock_icon'))breakfastImage(card,'LevelLock','v15/ui/lock_icon',-94,0,42,48);if(open&&hasPerfectClear(store.result(level.id,campaignResultRevision(level)),level.optimal)&&hasBreakfastArt('v15/ui/perfect_medal'))breakfastImage(card,'PerfectMedal','v15/ui/perfect_medal',127,29,36,42);label(card,`第${globalLevelNumber(level.id,RESTAURANTS)}关`,32,open?29:21,180,open?28:23,open?23:20,open?'#754321':palette.muted).isBold=true;label(card,`最优 ${level.optimal} 步`,32,0,180,open?26:20,open?19:17,'#936437');label(card,cleared?'已收集':open?'通关收集':'尚未解锁',32,open?-28:-22,180,open?22:18,open?17:15,palette.muted);
   (card.getComponent(Button)||card.addComponent(Button));card.on(Button.EventType.CLICK,()=>tryEnter(level));
  });
  action(n,'上一章',-215,-320,180,60,()=>{if(pageIndex>0){pageIndex--;go('kitchen-select');}},pageIndex>0?palette.green:'#B7AE9B');label(n,`${pageIndex+1} / 8`,0,-320,200,55,24,palette.green);action(n,'下一章',215,-320,180,60,()=>{if(pageIndex<7){pageIndex++;go('kitchen-select');}},pageIndex<7?palette.green:'#B7AE9B');
  action(n,'返回餐厅',-165,-425,290,64,()=>go('restaurants'),'#827B68');const nextOpen=r.levelIds.map(id=>CAMPAIGN_LEVELS.find(l=>l.id===id)!).find(l=>!store.cleared(l.id)&&store.canPlay(l.id));action(n,nextOpen?'继续营业 · 第'+globalLevelNumber(nextOpen.id,RESTAURANTS)+'关':'本店已通关',165,-425,290,64,()=>{const level=r.levelIds.map(id=>CAMPAIGN_LEVELS.find(l=>l.id===id)!).find(l=>!store.cleared(l.id)&&store.canPlay(l.id));if(level)tryEnter(level);else ui.notify('本店已全部完成，可以重玩或返回餐厅');});
  label(n,'通关点亮图鉴 · 每章收集一个系列',0,-540,670,55,19,palette.muted);return {node:n};
 });
 return {restaurants:()=>go('restaurants'),levelsFor:(level)=>{restaurantIndex=Math.max(0,RESTAURANTS.findIndex(r=>r.id===level.restaurantId));pageIndex=Math.floor(((level.stageNumber||1)-1)/10);go('kitchen-select');},home:()=>{
  const n=root('KitchenHome');pageArt(n,'home');energyWidget(n,bank);
 const actor=uiNode(n,'HomeHamster',0,-70,310,310),player=animationPlayer(actor,310,310);let dead=false,index=0;
 const keys=['idle_empty','idle_small','idle_full','work_down','win'];const play=()=>{if(!dead)void playKitchenClip(player,'hamster/'+keys[index++%keys.length],true);};play();const timer=setInterval(play,4000);
 action(n,'选择餐厅',0,-325,400,80,()=>go('restaurants'));const pending=firstOpen();action(n,pending?'继续 · 第'+globalLevelNumber(pending.id,RESTAURANTS)+'关':'继续 · 已全部通关',0,-420,400,80,()=>pending?tryEnter(pending):go('restaurants'));
 action(n,'Demo2 · 装盘试玩',0,-605,430,55,()=>go('demo2-select'));
 action(n,'设置',-145,-515,260,60,()=>go('settings'),'#827B68');action(n,'框架检查',145,-515,260,60,()=>go('diagnostics'),'#827B68');return {node:n,dispose:()=>{dead=true;clearInterval(timer);player.stop();}};
 }};
}
