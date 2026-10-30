import {Node,Button} from 'cc';
import {UIService} from '../../framework/cocos/UIService';
import type {PageView} from '../../framework/cocos/UIService';
import {CampaignStore} from './CampaignStore';
import {RESTAURANTS,CAMPAIGN_LEVELS} from './CampaignData';
import type {Level} from './Rules';
import {EnergyBank} from './Energy';
import {palette,rect,label,action,root,energyWidget,choicePanel} from './KitchenUI';
export function registerCampaignNavigation(ui:UIService,store:CampaignStore,bank:EnergyBank,enter:(level:Level)=>void):{home:()=>PageView;levelsFor:(level:Level)=>void;restaurants:()=>void}{
 let restaurantIndex=0,pageIndex=0;
 const go=(id:string)=>{void ui.go(id).catch(e=>ui.notify(String(e)));};
 const tryEnter=(level:Level)=>{try{if(store.error)throw Error(store.error);if(!store.canPlay(level.id))throw Error('请先完成前一关，再挑战这一关');if(bank.error)throw Error(bank.error);if(bank.snapshot().value<1)throw Error('体力不足，请等待恢复或点击体力GM补充');enter(level);}catch(e){ui.notify(String(e));}};
 const firstOpen=()=>CAMPAIGN_LEVELS.find(l=>store.canPlay(l.id)&&!store.cleared(l.id));
 const gm=(n:Node)=>choicePanel(n,'餐厅进度 GM','仅开放关卡访问，不伪造通关记录。\n正常通关仍会记录实际进度。',[
  {title:store.debugAll?'关闭全部开放（GM）':'开放全部餐厅与关卡（GM）',run:()=>{try{store.setDebugAll(!store.debugAll);go('kitchen-select');}catch(e){ui.notify(String(e));}}}
 ]);
 ui.register('restaurants',()=>{
  const n=root('Restaurants');energyWidget(n,bank);label(n,'我的餐厅',0,515,650,70,38,palette.green);label(n,'每家80关 · 通关整家店后解锁下一家',0,453,650,45,22,palette.muted);
  RESTAURANTS.forEach((r,i)=>{const y=285-i*258,open=store.restaurantUnlocked(r.id),card=rect(n,'Restaurant-'+r.id,0,y,630,220,open?palette.white:'#DFDACD');
   label(card,`${String(i+1).padStart(2,'0')}  ${r.name}`,0,72,590,48,30,open?palette.green:palette.muted);
   label(card,r.description||'',0,16,575,60,20,palette.muted);label(card,`已通关 ${store.clearedCount(r.id)} / 80${store.debugAll?' · GM访问开放':''}`,0,-36,580,35,21);
   action(card,open?'进入 '+r.name:'尚未解锁 · '+r.name,0,-79,510,49,()=>{if(!open){ui.notify('需要完成上一家餐厅全部80关');return;}restaurantIndex=i;const index=r.levelIds.findIndex(id=>!store.cleared(id));pageIndex=index<0?7:Math.floor(index/10);go('kitchen-select');},open?palette.green:'#938771');
  });
  action(n,'返回首页',-165,-452,290,62,()=>go('home'),'#827B68');action(n,'进度GM',165,-452,290,62,()=>gm(n),'#A27852');label(n,'两家餐厅可继续按配置追加；通关不扣体力',0,-565,660,45,20,palette.muted);return {node:n};
 });
 ui.register('kitchen-select',()=>{
  const n=root('CampaignSelect'),r=RESTAURANTS[restaurantIndex];energyWidget(n,bank);label(n,r.name,-70,535,470,65,34,palette.green);action(n,'进度GM',265,535,130,48,()=>gm(n),'#A27852');
  label(n,`进度 ${store.clearedCount(r.id)} / 80${store.debugAll?' · GM开放（不代表通关）':''}`,0,482,650,42,21,palette.muted);
  const levels=r.levelIds.slice(pageIndex*10,pageIndex*10+10).map(id=>CAMPAIGN_LEVELS.find(l=>l.id===id)!);
  label(n,`第${pageIndex+1}章 · ${levels[0].chapter}`,0,432,650,35,23);
  levels.forEach((level,i)=>{const open=store.canPlay(level.id),cleared=store.cleared(level.id),card=rect(n,'CampaignLevel-'+level.id,i%2===0?-160:160,350-Math.floor(i/2)*132,303,112,cleared?'#DFECD9':open?palette.white:'#DDD7C9');
   label(card,`第${level.stageNumber}关`,0,33,280,32,22,open?palette.green:palette.muted);label(card,level.name,0,0,280,35,18);label(card,open?`最优${level.optimal}步 · 预算${level.budget}步${cleared?' · 已通关':''}`:'完成前一关后开启',0,-34,286,30,16,palette.muted);
   (card.getComponent(Button)||card.addComponent(Button));card.on(Button.EventType.CLICK,()=>tryEnter(level));
  });
  action(n,'上一章',-215,-320,180,60,()=>{if(pageIndex>0){pageIndex--;go('kitchen-select');}},pageIndex>0?palette.green:'#B7AE9B');label(n,`${pageIndex+1} / 8`,0,-320,200,55,24,palette.green);action(n,'下一章',215,-320,180,60,()=>{if(pageIndex<7){pageIndex++;go('kitchen-select');}},pageIndex<7?palette.green:'#B7AE9B');
  action(n,'返回餐厅',-165,-425,290,64,()=>go('restaurants'),'#827B68');action(n,'继续营业',165,-425,290,64,()=>{const level=r.levelIds.map(id=>CAMPAIGN_LEVELS.find(l=>l.id===id)!).find(l=>!store.cleared(l.id)&&store.canPlay(l.id));if(level)tryEnter(level);else ui.notify('本店已全部完成，可以重玩或返回餐厅');});
  label(n,'绿色可挑战 · 灰色未解锁 · 新内容首次出现会有引导',0,-540,670,55,19,palette.muted);return {node:n};
 });
 return {restaurants:()=>go('restaurants'),levelsFor:(level)=>{restaurantIndex=Math.max(0,RESTAURANTS.findIndex(r=>r.id===level.restaurantId));pageIndex=Math.floor(((level.stageNumber||1)-1)/10);go('kitchen-select');},home:()=>{
  const n=root('KitchenHome');energyWidget(n,bank);label(n,'MINI KITCHEN',0,500,600,65,24,palette.green);label(n,'小小厨房，下班啦！',0,405,660,90,44);label(n,'经营一家家餐厅，解锁新的菜单和挑战',0,315,650,60,25,palette.muted);
  const tile=rect(n,'HomeKitchen',0,105,560,230,palette.floor);label(tile,'2 家餐厅  ×  80 关',0,55,520,65,34,palette.green);label(tile,`累计完成 ${CAMPAIGN_LEVELS.filter(l=>store.cleared(l.id)).length} / 160 关`,0,-5,520,45,25);label(tile,'滑动教学 · 点击引导 · 动画演示',0,-67,530,40,22,palette.muted);
  action(n,'开始营业 · 选择餐厅',0,-140,530,76,()=>go('restaurants'));const pending=firstOpen();action(n,pending?`继续：${pending.restaurantName} 第${pending.stageNumber}关`:'全部完成 · 返回餐厅',0,-239,530,68,()=>pending?tryEnter(pending):go('restaurants'));
  action(n,'音频与设置',-140,-350,250,60,()=>go('settings'),'#827B68');action(n,'框架检查',140,-350,250,60,()=>go('diagnostics'),'#827B68');label(n,'默认10体力 · 失败或退出扣1 · 通关免费',0,-530,650,45,20,palette.muted);return {node:n};
 }};
}
