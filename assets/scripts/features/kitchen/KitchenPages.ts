import {SwipeDirectionCue} from './SwipeDirectionCue';
import {CustomerCounterView} from './CustomerCounterView';
import {CustomerDepartureCount} from './CustomerDepartureCount';
import {KitchenMechanicsView} from './KitchenMechanicsView';
import {globalLevelNumber,campaignResultRevision} from './CampaignPresentation';
import {nextJellyIngredient} from './IngredientJelly';
import {KitchenSound} from './KitchenSound';
import {gmAccess} from './GMAccess';
import {KitchenBuildFlags,rewardedBagPort} from './KitchenBuildFlags';
import {CustomerLifecycle} from './CustomerLifecycle';
import {CookingPresentation} from './CookingPresentation';
import {BagFullPresentation} from './BagFullPresentation';
import {StepsCounter} from './StepsCounter';
import {bagLayout,orderIngredientLayout,ORDER_BUBBLE_LAYOUT as orderBox} from './KitchenHudLayout';
import {buildKitchenDialog,EndBanner} from './KitchenOverlays';
import type {KitchenDialogOptions} from './KitchenOverlays';
import {getKitchenBoardGeometry} from './KitchenAnimationLibrary';
import {KitchenActors} from './KitchenActors';
import {PersistentNodes} from './PersistentNodes';
import {projectBoardCell,unprojectBoardPoint,configureBoardProjection,configureBoardCalibration,getBoardCellSize} from './BoardProjection';
import {KitchenPresentationConfig as timing} from './KitchenPresentationConfig';
import {breakfastImage,breakfastSurface,setBreakfastImage} from './BreakfastArt';
import {palette,food,deviceColors,color,rect as baseRect,label as baseLabel,action as baseAction,root,clear,choicePanel,energyWidget} from './KitchenUI';
import {Node,UITransform,Graphics,Color,Label,Button,BlockInputEvents,Layers,EventTouch,input,Input,EventKeyboard,KeyCode,tween,Tween,Vec3,sys,isValid,UIOpacity,LabelOutline} from 'cc';
import {UIService,uiNode} from '../../framework/cocos/UIService';
import type {PageView} from '../../framework/cocos/UIService';
import {CAMPAIGN_LEVELS,RESTAURANTS} from './CampaignData';
import {CampaignStore} from './CampaignStore';
import {registerCampaignNavigation} from './CampaignNavigation';
import {TutorialView} from './TutorialView';
import {guideFor,guideCompletionKey} from './TutorialFlow';
import {EnergyBank} from './Energy';
import {KitchenSession} from './Session';
import {solve} from './Solver';
import type {PlatformAdapter} from '../../framework/platform/PlatformAdapter';
import {initialState,move,bagSize} from './Rules';
import type {State,Direction,Level,ActionEvent,Cell} from './Rules';

type SceneOrigin={node:Node;parent:Node|null;index:number;active:boolean;position:Vec3;scale:Vec3};
const sceneOrigins=new WeakMap<Node,SceneOrigin>();

export function registerKitchenPages(ui:UIService,platform:PlatformAdapter):{home:()=>PageView}{
 let selected=CAMPAIGN_LEVELS[0];const progress=new CampaignStore(sys.localStorage,RESTAURANTS),bank=new EnergyBank(sys.localStorage);
 const go=(id:string)=>{void ui.go(id).catch(e=>ui.notify(String(e)));};
 const nav=registerCampaignNavigation(ui,progress,bank,level=>{selected=level;go('kitchen');});
 ui.register('kitchen',()=>makeGame(selected,()=>go('kitchen'),()=>{
  const following=CAMPAIGN_LEVELS.find(l=>l.id===selected.id+1);
  if(following&&following.restaurantId===selected.restaurantId&&progress.canPlay(following.id)){selected=following;go('kitchen');}else nav.restaurants();
 },()=>nav.levelsFor(selected),ui,progress,bank,platform));
 return {home:nav.home};
}
function makeGame(l:Level,retry:()=>void,next:()=>void,select:()=>void,ui:UIService,progress:CampaignStore,bank:EnergyBank,platform:PlatformAdapter):PageView{
 const sound=new KitchenSound();const n=root('KitchenGame'),art=l.restaurantId==='breakfast'||l.restaurantId==='street',street=l.restaurantId==='street',session=new KitchenSession(l,bank);l=session.level;let state=session.state,busy=false,dead=false,paused=false,adBusy=false,modal:Node|null=null;let winRecorded=false,failureRecorded=false,chefMoving=false;let failureCue:SwipeDirectionCue|null=null;const hideFailureCue=()=>{failureCue?.dispose();failureCue=null;};let autoRunning=false,autoPath:Direction[]=[],autoTimer:ReturnType<typeof setTimeout>|null=null;energyWidget(n,bank,art?15:0,art?563:600,art?180:240);let tutorial:TutorialView|null=null,tutorialPending=true,guideStartTimer:ReturnType<typeof setTimeout>|null=null,guideMoveResolve:((ok:boolean)=>void)|null=null,recipeClosed:((ok:boolean)=>void)|null=null;
 if(art){const geometry=getKitchenBoardGeometry(l.width);if(geometry)configureBoardProjection(geometry);}
 configureBoardCalibration(art&&l.width===l.height&&[4,5,6].includes(l.width)?l.width as 4|5|6:null);
 const borrowed:SceneOrigin[]=[];
 function borrow(name:string,x:number,y:number,w:number,h:number):Node|null{const find=(node:Node):Node|null=>node.name===name?node:node.children.map(find).find(Boolean)||null;const node=find(ui.pages.scene!);if(!node)return null;let origin=sceneOrigins.get(node);if(!origin){origin={node,parent:node.parent,index:node.getSiblingIndex(),active:node.active,position:node.position.clone(),scale:node.scale.clone()};sceneOrigins.set(node,origin);}borrowed.push(origin);node.setParent(n);node.active=true;node.setPosition(x,y);node.setScale(1,1,1);node.getComponent(UITransform)?.setContentSize(w,h);node.setSiblingIndex(name==='厨房棋盘底图'?2:1);return node;}
 if(art){const layer=borrow('厨房场景底图',0,0,720,1280);if(layer)setBreakfastImage(layer,street?'street/backgrounds/battle':'v9/backgrounds/battle',720,1280);}
 const cache=new PersistentNodes<Node>();let rendering=false;let renderCounts=new WeakMap<Node,Map<string,number>>();
 function keyed(parent:Node,key:string,create:()=>Node):Node{if(!rendering)return create();let counts=renderCounts.get(parent);if(!counts){counts=new Map();renderCounts.set(parent,counts);}const index=counts.get(key)||0;counts.set(key,index+1);return cache.use(parent,key+'#'+index,create);}
 function rect(parent:Node,name:string,x:number,y:number,w:number,h:number,hex:string,radius=15):Node{const node=keyed(parent,name,()=>baseRect(parent,name,x,y,w,h,hex,radius));node.setPosition(x,y);node.getComponent(UITransform)!.setContentSize(w,h);return node;}
 function label(parent:Node,value:string,x:number,y:number,w:number,h=45,size=23,hex=palette.ink):Label{const node=keyed(parent,'Label',()=>baseLabel(parent,value,x,y,w,h,size,hex).node),text=node.getComponent(Label)!;if(text.string!==value)text.string=value;node.setPosition(x,y);node.getComponent(UITransform)!.setContentSize(w,h);text.fontSize=size;text.color=color(hex);return text;}
 const sync=()=>{l=session.level;state=session.state;};
 const stopAuto=()=>{autoRunning=false;autoPath=[];if(autoTimer)clearTimeout(autoTimer);autoTimer=null;};
 const leave=(fn:()=>void)=>{sound.reset();tutorial?.stop();stopAuto();session.exit();fn();};
 const restart=()=>{sound.reset();tutorial?.stop();stopAuto();session.exit();if(bank.snapshot().value>0)retry();else select();};
 let readinessPending=false,presentationEpoch=0;const customerSlots=new Map<number,number>();state.active.forEach((ci,slot)=>customerSlots.set(ci,slot));const lifecycle=new CustomerLifecycle(()=>{readinessPending=true;flushReadiness();});
 const orderLocks=new Map<number,number>();
 const orderCounts=new Map<number,number>();
 const guestSlots:(number|undefined)[]=[...state.active];while(guestSlots.length<3)guestSlots.push(undefined);
 const dynamic=uiNode(n,'HUD',0,0,720,1280),board=uiNode(n,'Board',0,art?-37:-38,art?620:610,art?600:540),effects=uiNode(n,'Effects',0,0,720,1280);
 const departures=new CustomerDepartureCount(l.customers.length);departures.reset(l,state);
 const customerCounter=new CustomerCounterView(dynamic,()=>{if(!busy&&!paused&&!tutorialPending)showOrders();},0,art?263:241);
 const stepsCounter=art?new StepsCounter(dynamic):null;
 if(art){const layer=borrow('厨房棋盘底图',0,-37,620,600);if(layer)setBreakfastImage(layer,(street?'street/board/board_':'board/board_')+l.width,620,600);}
 const cell=art?getBoardCellSize(l.width,l.height):Math.min(600/l.width,520/l.height),bw=cell*l.width,bh=cell*l.height;
 const xy=(p:Cell):Cell=>{if(art){const point=projectBoardCell(p,l.width,l.height);return [point.x,point.y];}return [-bw/2+cell*(p[0]+.5),bh/2-cell*(p[1]+.5)];};
 const projectScale=(node:Node,p:Cell)=>{if(art){const scale=projectBoardCell(p,l.width,l.height).scale;node.setScale(scale,scale,1);}};
 if(!art)rect(board,'BoardBase',0,0,bw+12,bh+12,'#BFB093',13);
 if(!art)for(let y=0;y<l.height;y++)for(let x=0;x<l.width;x++){const [px,py]=xy([x,y]);const tile=rect(board,`Cell-${x}-${y}`,px,py,cell-3,cell-3,(x+y)%2?palette.floor:palette.floor2,7);}
 for(const d of l.devices){for(const p of d.stations){const [x,y]=xy(p),g=rect(board,'Station',x,y,cell-8,cell-8,'#B5D5BC',8);if(art){breakfastImage(g,'StationMat','board/station_mat',0,0,cell*.78,cell*.7);g.getComponent(Graphics)!.enabled=false;projectScale(g,p);}else label(g,'停靠',0,0,cell-12,cell-12,16,palette.green);}}
 for(const p of l.walls){const [x,y]=xy(p),w=rect(board,'Wall',x,y,cell-6,cell-6,palette.wall,8);if(art){breakfastSurface(w,'board/wall');projectScale(w,p);}else label(w,'障碍',0,0,cell-10,cell-10,16,palette.white);}
 for(const d of l.devices){const [x,y]=xy([d.x,d.y]),dev=rect(board,'Device-'+d.type,x,y,cell-6,cell-6,deviceColors[d.type]||'#A18261',8);if(art){breakfastImage(dev,'DeviceArt','devices/'+d.type,0,0,cell-12,cell-12);dev.getComponent(Graphics)!.enabled=false;projectScale(dev,[d.x,d.y]);}else label(dev,d.name,0,0,cell-12,cell-10,17,palette.white);}
 const itemLayer=uiNode(board,'Items',0,0,bw,bh),chef=uiNode(board,'Chef',0,0,cell*.78,cell*.78);
 const chefBody=rect(chef,'ChefBody',0,0,cell*.68,cell*.68,'#146E61',16),bodyGraphics=chefBody.getComponent(Graphics)!;bodyGraphics.lineWidth=3;bodyGraphics.strokeColor=new Color(255,255,235,255);bodyGraphics.roundRect(-cell*.34,-cell*.34,cell*.68,cell*.68,16);bodyGraphics.stroke();const chefLabel=label(chefBody,'厨师',0,0,cell*.64,cell*.55,21,palette.white);chefLabel.isBold=true;
 if(art){chefLabel.node.active=false;bodyGraphics.enabled=false;}
 function action(parent:Node,title:string,x:number,y:number,w:number,h:number,fn:()=>void,hex=palette.green,prefabName='Action-'+title):Node{const node=keyed(parent,prefabName,()=>baseAction(parent,title,x,y,w,h,fn,hex,prefabName));return node;}
 let jellyPrevious:number|null=null,jellyActive:Node|null=null,jellyBase:Vec3|null=null,jellyElapsed=0,jellyLast=Date.now(),jellyNext=0;
 const stopJelly=()=>{if(jellyActive&&isValid(jellyActive)&&jellyBase)jellyActive.setScale(jellyBase);jellyActive=null;jellyBase=null;jellyElapsed=0;};
 const jellyTimer=setInterval(()=>{const now=Date.now(),dt=(now-jellyLast)/1000;jellyLast=now;
  if(dead||paused||tutorialPending||tutorial?.active||adBusy||state.status!=='playing'){stopJelly();jellyNext=0;return;}
  jellyNext+=dt;
  if(jellyActive){const alive=jellyActive.parent?.parent?.activeInHierarchy&&state.remaining.some(id=>itemLayer.getChildByName('Ingredient-'+id)?.getChildByName('FoodArt')?.getChildByName('ArtVisual')===jellyActive);if(!alive){stopJelly();return;}jellyElapsed+=dt;const t=Math.min(1,jellyElapsed/timing.ingredientJellyDurationSeconds),wave=Math.sin(t*Math.PI*4)*(1-t)*timing.ingredientJellyAmount;jellyActive.setScale(jellyBase!.x*(1+wave),jellyBase!.y*(1-wave),jellyBase!.z);if(t>=1)stopJelly();return;}
  if(jellyNext<timing.ingredientJellyIntervalSeconds)return;jellyNext=0;const id=nextJellyIngredient([...state.remaining],jellyPrevious);if(id===null)return;const visual=itemLayer.getChildByName('Ingredient-'+id)?.getChildByName('FoodArt')?.getChildByName('ArtVisual');if(!visual)return;jellyPrevious=id;jellyActive=visual;jellyBase=visual.scale.clone();jellyElapsed=0;
 },16);
 const mechanics=new KitchenMechanicsView(board,l,cell,p=>{const [x,y]=xy(p);return {x,y,scale:art?projectBoardCell(p,l.width,l.height).scale:1};});mechanics.sync(state);
 const actors=art?new KitchenActors(chefBody,n,cell*1.05,sound):null;let facing:Direction='down';
 const cooking=actors?new CookingPresentation(effects,actors,sound):null;
 const bagFull=actors?new BagFullPresentation(effects,actors):null;
 const endBanner=new EndBanner(effects,actors??undefined);
 if(actors){board.setSiblingIndex(n.children.length-1);const light=n.getChildByName('SunlightOverlay');light?.setSiblingIndex(n.children.length-1);for(let i=0;i<3;i++){actors.guests[i].setSiblingIndex(n.children.length-1);actors.smoke[i].setSiblingIndex(n.children.length-1);}dynamic.setSiblingIndex(n.children.length-1);effects.setSiblingIndex(n.children.length-1);}
 const pose=(name:string)=>{if(!actors)return;if(name==='idle')actors.idle(bagSize(state));else if(name==='slide')void actors.hamster('move_'+facing);else if(name==='cook')void actors.hamster('work_'+facing);else if(name!=='fail')void actors.hamster('win',true);};
 if(!art)tween(chefBody).to(.9,{scale:new Vec3(1.09,1.09,1)},{easing:'sineInOut'}).to(.9,{scale:new Vec3(1,1,1)},{easing:'sineInOut'}).union().repeatForever().start();
 if(!art){
 label(n,`第${globalLevelNumber(l.id,RESTAURANTS)}关  ${l.name}`,-65,545,490,62,32);label(n,l.tip,0,492,620,40,18,art?palette.ink:palette.muted);
 action(n,'选关',-265,600,120,50,()=>leave(select),'#827B68');action(n,'重试',265,600,120,50,restart,'#827B68');
 if(gmAccess.enabled)action(n,'关卡GM',162,600,76,48,openGM,'#A27852');
 }
 const log=label(n,'滑动棋盘，或点击下方方向键',0,-435,650,32,18,palette.muted);
 if(art){log.node.active=false;for(const [title,fn]of [['选关',()=>leave(select)],['重试',restart],['关卡GM',openGM]] as [string,()=>void][]){const hidden=action(n,title,0,0,1,1,fn);hidden.active=false;}}
 const resumeGame=()=>{paused=false;sound.resume();actors?.resume();failureCue?.resume();modal?.destroy();modal=null;flushReadiness();};
 const overlay=(title:string,body:string,won=false,pause=false)=>{
  modal?.destroy();const actions:KitchenDialogOptions['actions']=[];
  if(pause){
   actions.push({title:'继续开工',run:resumeGame},{title:'重试',run:restart,tone:'secondary'},
    {title:'菜谱',run:()=>{modal?.destroy();modal=null;showOrders(true);},tone:'secondary'},
    ...(gmAccess.enabled?[{title:'关卡GM',run:()=>{if(busy){ui.notify('当前动作结束后可使用关卡GM');return;}resumeGame();openGM();},tone:'secondary' as const}]:[]),
    {title:'选关',run:()=>leave(select),tone:'secondary'});
  }else if(won){actions.push({title:(l.stageNumber||l.id)===80?'餐厅通关 · 返回餐厅':'下一关',run:()=>leave(next)},{title:'重玩本关',run:restart,tone:'secondary'},{title:'返回选关',run:()=>leave(select),tone:'secondary'});}
  else{
   actions.push({title:'重新开工',run:restart});const allowed=l.availableProps||['undo','overtime','ad-slot'];
   if(allowed.includes('overtime'))actions.push({title:session.overtimeUsed?'加班已用':'加班 +3步 ·试用',run:useOvertime,tone:'secondary'});
   if(allowed.includes('undo'))actions.push({title:'撤回一步 ·试用',run:useUndo,tone:'secondary'});
   actions.push({title:'返回选关',run:()=>leave(select),tone:'secondary'},...(gmAccess.enabled?[{title:'关卡GM',run:openGM,tone:'secondary' as const}]:[]));
  }
  modal=buildKitchenDialog(n,{kind:pause?'pause':won?'win':'fail',title,body,actions,onClose:pause?resumeGame:()=>leave(select)});
 };
 function render():void{
  cache.begin();rendering=true;renderCounts=new WeakMap();mechanics.sync(state);
  if(art){stepsCounter!.setValue(l.budget-state.steps);breakfastImage(dynamic,'LevelBadge','v9/ui/card',202,563,170,58);label(dynamic,`第${globalLevelNumber(l.id,RESTAURANTS)}关`,202,563,150,40,25,'#67401F');}else{
  label(dynamic,`剩余 ${l.budget-state.steps} / ${l.budget} 步`, -175,444,300,42,24,palette.green);label(dynamic,`背包 ${bagSize(state)} / ${l.capacity} · 满即失败`,175,444,330,42,22,bagSize(state)>=l.capacity-2?'#B15D41':palette.muted);
  }
  const active=actors?guestSlots:[...state.active].sort((a,b)=>a-b);for(let slot=0;slot<3;slot++){
   const card=rect(dynamic,(art?'OrderBubble-':'CustomerSlot-')+slot,art?[-203,3,205][slot]:-221+slot*221,art?orderBox.y:340,art?orderBox.width:208,art?orderBox.height:160,palette.white),ci=active[slot];if(art){breakfastSurface(card,'v10/ui/order_bubble');card.active=ci!==undefined&&!!actors?.bubbleVisible(ci);}
   if(ci===undefined){if(art){card.active=false;continue;}label(card,'等待打烊',0,0,195,70,21,palette.muted);continue;}
   const c=l.customers[ci],finished=c.orders.filter((o,i)=>state.done[ci][i]>=o.count).length;if(!art)label(card,`#${ci+1} ${c.name}${c.orders.length>1?` ${finished}/${c.orders.length}道`:''}`,0,art?43:60,195,30,c.orders.length>1?18:21,palette.green);
   const rowHeight=art?95:128,oi=orderLocks.get(ci)??Math.max(0,c.orders.findIndex((o,i)=>state.done[ci][i]<o.count));
   [c.orders[oi]].forEach(order=>{
    const recipe=l.recipes.find(r=>r.id===order.recipe)!,entries=Object.entries(recipe.ingredients),top=art?22:44;
    if(art){
     breakfastImage(card,'DishArt','dishes/'+recipe.id,orderBox.dishX,orderBox.dishY,orderBox.dishWidth,orderBox.dishHeight);
     const layout=orderIngredientLayout(Math.min(3,entries.length));entries.slice(0,3).forEach(([type],index)=>{const chip=rect(card,'OrderIngredient-'+type,layout.centers[index],orderBox.ingredientY,layout.iconSize,layout.iconSize,'#FFFFFF',9);chip.getComponent(Graphics)!.enabled=false;breakfastImage(chip,'FoodArt','ingredients/'+type,0,0,layout.iconSize,layout.iconSize);});
     breakfastImage(card,'OrderDeviceArt','devices/'+recipe.device,layout.deviceX,orderBox.ingredientY,layout.deviceSize,layout.deviceSize);return;
    }
    breakfastSurface(card,'v13/ui/recipe_card');if(art)breakfastImage(card,'DishArt','dishes/'+recipe.id,47,49,70,52);
    label(card,`${recipe.name} ${orderCounts.get(ci)??state.done[ci][oi]}/${order.count}`,0,art?9:top-rowHeight*.13,art?180:195,Math.min(30,rowHeight*.22),art?17:21);
    const columns=entries.length+(art?1:0),gap=7,chipWidth=Math.min(86,(190-gap*(columns-1))/columns),chipHeight=Math.min(42,rowHeight*.34),totalWidth=columns*chipWidth+(columns-1)*gap;
    entries.forEach(([type,count],index)=>{
     const f=food[type],x=-totalWidth/2+chipWidth/2+index*(chipWidth+gap);
     const chip=rect(card,'OrderIngredient-'+type,x,top-rowHeight*.46,chipWidth,chipHeight,f?.color||'#DDD',9);
     if(art){chip.getComponent(Graphics)!.enabled=false;breakfastImage(chip,'FoodArt','ingredients/'+type,-chipWidth*.17,0,chipWidth*.48,chipHeight-3);}else label(chip,f?.short||type,-chipWidth*.17,0,chipWidth*.48,chipHeight-3,Math.min(25,chipHeight*.62));
     label(chip,`×${count}`,chipWidth*.28,0,chipWidth*.38,chipHeight-3,Math.min(19,chipHeight*.48));
    });
    if(art)breakfastImage(card,'OrderDeviceArt','devices/'+recipe.device,-totalWidth/2+chipWidth/2+entries.length*(chipWidth+gap),top-rowHeight*.46,chipWidth-2,chipHeight-3);else deviceBadge(card,recipe.device,0,top-rowHeight*.82,174,Math.min(27,rowHeight*.21));
   });
  }
  customerCounter.update(departures.remaining);
  for(const i of state.remaining){const it=l.items[i],[x,y]=xy([it.x,it.y]),f=food[it.type],node=rect(itemLayer,'Ingredient-'+i,x,y,cell*.65,cell*.65,f?.color||'#DDD',12);if(art){breakfastImage(node,'FoodArt','ingredients/'+it.type,0,0,cell*.68,cell*.68);node.getComponent(Graphics)!.enabled=false;projectScale(node,[it.x,it.y]);}else label(node,f?.short||it.type,0,0,cell*.6,cell*.55,23);}
  const bag:string[]=[];for(const [t,count]of Object.entries(state.bag))for(let i=0;i<count;i++)bag.push(t);
  const adAvailable=(l.availableProps||['undo','overtime','ad-slot']).includes('ad-slot'),totalSlots=session.base.capacity+(adAvailable?1:0),layout=bagLayout(totalSlots),gap=art?layout.gap:Math.min(83,620/totalSlots),slotSize=art?layout.size:65,left=-(totalSlots-1)*gap/2;
  for(let i=0;i<totalSlots;i++){
   const locked=adAvailable&&i===totalSlots-1&&!session.slotUnlocked;
   if(locked){if(art){const slot=action(dynamic,'',left+i*gap,-416,slotSize,slotSize,()=>{void unlockBag();},'#A8997F','AdBagSlot-Locked');breakfastSurface(slot,'ui/bag_locked');slot.getComponentInChildren(Label)!.string=adBusy?'…':'';}else{const base=rect(dynamic,'AdBagSlot-Base',left+i*gap,-365,gap-7,65,'#A8997F',10);label(base,'＋1',0,0,gap-10,40,20);const slot=action(dynamic,adBusy?'请求中':'广告+1格',left+i*gap,-310,gap+4,34,()=>{void unlockBag();},'#A8997F');slot.name='AdBagSlot-Locked';}continue;}
   const f=food[bag[i]],slot=rect(dynamic,adAvailable&&i===totalSlots-1?'AdBagSlot-Unlocked':'BagSlot',left+i*gap,art?-416:-365,art?slotSize:gap-7,slotSize,f?f.color:palette.white,10);if(art){breakfastSurface(slot,'ui/bag_slot');if(f)breakfastImage(slot,'BagFood','ingredients/'+bag[i],0,0,slotSize-12,slotSize-12);else{const old=slot.getChildByName('BagFood');if(old)old.active=false;}}else label(slot,f?f.name:String(i+1),0,0,gap-10,55,f?17:20,f?palette.ink:'#B4AB98');
  }
  const bagCaption=label(dynamic,!adAvailable?'背包容量7 · 后续关卡将开放广告扩展格':session.slotUnlocked?'本局已开启广告格 · 嘴巴装不下就失败':'点背包广告格解锁+1容量 · 嘴巴装不下就失败',0,-410,670,32,17,'#9A674B');if(art)bagCaption.node.active=false;
  propButtons(dynamic,-475);
  if(!chefMoving){const [x,y]=xy(state.pos);chef.setPosition(x,y);projectScale(chef,state.pos);}rendering=false;cache.end();
 }
 function deviceBadge(parent:Node,type:string,x:number,y:number,width:number,height:number):void{
  const device=l.devices.find(d=>d.type===type),chip=rect(parent,'RequiredDevice-'+type,x,y,width,height,deviceColors[type]||'#A18261',7);
  if(art){chip.getComponent(Graphics)!.enabled=false;breakfastImage(chip,'DeviceArt','devices/'+type,-width*.38,0,height-2,height-2);}
  label(chip,`需用 ${device?.name||type}`,art?width*.07:0,0,art?width*.78:width-8,height-2,Math.min(18,height*.68),art?palette.ink:palette.white);
 }
 function showOrders(fromPause=false):void{
  if(adBusy||(!fromPause&&(busy||paused))||tutorialPending)return;
  const panel=rect(n,'RecipePanel',0,0,720,1280,'#FFF6DF',0);breakfastImage(panel,'RecipeBackdrop','v9/backgrounds/notebook',0,0,720,1280);breakfastImage(panel,'FormalRecipeHeading','v13/ui/heading',0,535,560,150);(panel.getComponent(BlockInputEvents)||panel.addComponent(BlockInputEvents));
  label(panel,'本关订单与菜谱',0,535,650,60,34,palette.green);
  let page=0,orders=false;const content=uiNode(panel,'RecipeContent',0,0,720,1000);
  const draw=()=>{for(const child of [...content.children])child.destroy();const target=content;
  if(orders){l.customers.slice(page*4,page*4+4).forEach((customer,index)=>{const row=baseRect(target,'CustomerRecipeRow',0,320-index*185,610,170,palette.white);breakfastSurface(row,'v13/ui/recipe_card');baseLabel(row,customer.name,-210,48,170,35,23);customer.orders.forEach((order,i)=>{if(art)breakfastImage(row,'OrderDish-'+i,'dishes/'+order.recipe,-105+i*115,-18,70,70);baseLabel(row,'×'+order.count,-105+i*115,-64,85,28,18);});});}
  else{  const rowHeight=210;
  l.recipes.slice(page*3,page*3+3).forEach((recipe,index)=>{
   const card=rect(target,'RecipeCard-'+recipe.id,0,350-rowHeight/2-index*rowHeight,610,rowHeight-12,palette.white);
   breakfastSurface(card,'v13/ui/recipe_card');if(art)breakfastImage(card,'DishArt','dishes/'+recipe.id,-235,10,80,80);
   label(card,recipe.name,-115,45,165,40,23,'#704421');
   const entries=Object.entries(recipe.ingredients),spacing=70,start=-15-(entries.length-1)*spacing/2;
   entries.forEach(([type,count],i)=>{const f=food[type],x=start+i*spacing;
    if(art)breakfastImage(card,'RecipeFood-'+type,'ingredients/'+type,x,-24,48,48);else label(card,f?.short||type,x,-24,48,48,22);
    label(card,'×'+count,x,-65,60,28,18);
   });
   if(art)breakfastImage(card,'RecipeDevice','devices/'+recipe.device,230,-5,72,72);else deviceBadge(card,recipe.device,205,-5,155,45);
  });
}};
  const switchTab=(value:boolean)=>{orders=value;page=0;draw();};
  action(panel,'菜谱',-150,445,250,60,()=>switchTab(false));action(panel,'客人订单',150,445,250,60,()=>switchTab(true));
  action(panel,'上一页',-160,-455,250,60,()=>{page=Math.max(0,page-1);draw();});action(panel,'下一页',160,-455,250,60,()=>{page=Math.min(Math.max(0,Math.ceil((orders?l.customers.length:l.recipes.length)/(orders?4:3))-1),page+1);draw();});draw();
  action(panel,'关闭',0,-545,360,64,()=>{panel.destroy();const done=recipeClosed;recipeClosed=null;done?.(true);if(fromPause)overlay('休息一下','暂停不消耗步数。',false,true);},'#827B68');
 }
 const run=(dir:Direction,fromAuto=false,fromGuide=false)=>{
  if((fromAuto&&!gmAccess.enabled)||dead||busy||adBusy||paused||tutorialPending||((tutorial?.active)&&!fromGuide&&!fromAuto)||(autoRunning&&!fromAuto)||state.status!=='playing')return;
  if(n.children.some(child=>child.active&&(child.name==='ChoicePanel'||child.name==='RecipePanel'))){if(fromAuto)autoTimer=setTimeout(()=>run(dir,true),220);return;}
  const result=session.slide(dir,actors?{readyCustomers:lifecycle.ready}:{});if(result.state.steps===state.steps){sound.play('blocked');log.string='这里被挡住了，不扣步。';return;}
  present(result,dir);
 };
 function flushReadiness():void{if(dead||busy||paused||tutorialPending||!actors||!readinessPending)return;readinessPending=false;const result=session.resolveReadyOrders(lifecycle.ready);if(result.events.length||result.state.status!==state.status)present(result);else{sync();render();}}
 function present(result:{state:State;events:ActionEvent[]},dir?:Direction):void{
  recordFailure(result.state.status);
  busy=true;if(dir){facing=dir;pose('slide');}const epoch=presentationEpoch,departureGeneration=departures.generation;const vacancies:number[]=[];
  const animate=async()=>{
   let worked=false,cookCount=0;
   for(const event of result.events){
    if(dead||epoch!==presentationEpoch)return;
    if(event.kind==='walk'){if(event.direction&&facing!==event.direction){facing=event.direction;pose('slide');}sound.play('step');
     const from=chef.position.clone(),point=xy(event.pos!);chefMoving=true;try{if(actors){const ok=await actors.wait(timing.moveSecondsPerCell,t=>chef.setPosition(from.x+(point[0]-from.x)*t,from.y+(point[1]-from.y)*t));if(!ok)return;}else await new Promise<void>(resolve=>tween(chef).to(timing.moveSecondsPerCell,{position:new Vec3(point[0],point[1],0)}).call(resolve).start());
     state={...state,pos:[...event.pos!]};projectScale(chef,state.pos);
     }finally{chefMoving=false;}
    }else if(event.kind==='pickup'){sound.pickup();
     const itemIndex=state.remaining.find(i=>{const item=l.items[i];return item.type===event.item&&item.x===event.pos![0]&&item.y===event.pos![1];});state={...state,bag:{...state.bag,[event.item!]:(state.bag[event.item!]||0)+1},remaining:state.remaining.filter(i=>i!==itemIndex)};render();
    }else if(event.kind==='stop-pad'){
     state={...state,usedPads:[...(state.usedPads||[]),event.mechanic!]};mechanics.sync(state);mechanics.pulse('stop-pad',event.mechanic);sound.play('step');
    }else if(event.kind==='door-toggle'){
     const groups=new Set(state.openDoors||[]);if(event.open)groups.add(event.group!);else groups.delete(event.group!);state={...state,openDoors:Array.from(groups)};mechanics.sync(state);mechanics.pulse('switch-door',event.mechanic);sound.play('unlock');
    }else if(event.kind==='conveyor'){
     if(event.direction){facing=event.direction;pose('slide');}mechanics.pulse('conveyor',event.mechanic);
    }else if(event.kind==='cook'){
     const recipe=l.recipes.find(r=>r.id===event.recipe)!,device=board.getChildByName('Device-'+recipe.device);
     const valid=()=>!dead&&epoch===presentationEpoch;
     if(!worked){worked=true;const targetDevice=l.devices.find(d=>d.type===recipe.device);if(targetDevice){const dx=targetDevice.x-state.pos[0],dy=targetDevice.y-state.pos[1];facing=Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up';}pose('cook');const workSound=recipe.device==='table'?'cook_cut':recipe.device==='drink'?'cook_mix':'cook_fry';sound.play(workSound,true);try{if(cooking&&device){if(!await cooking.work(device,timing.workSeconds,valid))return;}else if(actors&&!await actors.wait(timing.workSeconds))return;}finally{sound.stop(workSound);}if(!valid())return;}sound.play('cook_done');
     cookCount++;const bag={...state.bag},done=state.done.map(row=>[...row]);for(const [type,count]of Object.entries(recipe.ingredients)){bag[type]-=count;if(bag[type]<=0)delete bag[type];}
     const ci=event.customer!,oi=l.customers[ci].orders.findIndex((o,i)=>o.recipe===event.recipe&&done[ci][i]<o.count),beforeCount=oi>=0?done[ci][oi]:0;
     if(oi>=0){if(!orderLocks.has(ci)){orderLocks.set(ci,oi);orderCounts.set(ci,beforeCount);}done[ci][oi]++;}state={...state,bag,done};render();
     const slot=guestSlots.indexOf(ci),bubble=dynamic.getChildByName('OrderBubble-'+slot);
     if(cooking&&device&&bubble&&slot>=0){void lifecycle.effect(slot,async()=>{
      if(!valid())return;orderLocks.set(ci,oi);orderCounts.set(ci,beforeCount);render();
      const ok=await cooking.deliver(device,bubble,recipe.id,valid,()=>{if(valid()){sound.play('check');orderCounts.set(ci,beforeCount+1);render();}});
      if(!ok||!valid())return;orderLocks.delete(ci);orderCounts.delete(ci);render();
     }).catch(showPresentationError);}else{orderLocks.delete(ci);orderCounts.delete(ci);}

    }else if(event.kind==='leave'){
     const ci=event.customer!,slot=customerSlots.get(ci)??guestSlots.indexOf(ci);if(slot>=0){vacancies.push(slot);if(actors){void lifecycle.depart(slot,ci,async()=>{const ok=await actors.leave(ci);if(!ok||dead||epoch!==presentationEpoch)return false;if(guestSlots[slot]===ci)guestSlots[slot]=undefined;customerSlots.delete(ci);departures.markDeparted(ci,departureGeneration);render();return true;}).catch(showPresentationError);}else{guestSlots[slot]=undefined;departures.markDeparted(ci,departureGeneration);}}
    }else if(event.kind==='arrive'){
     const ci=event.customer!,slot=vacancies.shift()??guestSlots.findIndex(id=>id===undefined);customerSlots.set(ci,slot);if(actors&&slot>=0){void lifecycle.arrive(slot,ci,async()=>{if(dead||epoch!==presentationEpoch)return false;guestSlots[slot]=ci;render();const bubble=dynamic.getChildByName('OrderBubble-'+slot);return bubble?actors.appear(slot,ci,bubble):false;}).catch(showPresentationError);}else if(slot>=0)guestSlots[slot]=ci;
    }
   }
   if(dead)return;sync();render();if(actors&&worked)actors.idle(bagSize(state));
   if(actors&&state.status==='full'){sound.play('full');const valid=()=>!dead&&epoch===presentationEpoch;if(!await actors.hamster('full',false,1.1)||!valid())return;if(bagFull&&!await bagFull.play(valid))return;}
   if(actors&&state.status==='won'){await lifecycle.settled();if(dead||epoch!==presentationEpoch)return;await actors.hamster('win',false);}
   if(dead||epoch!==presentationEpoch)return;
   if(endBanner&&state.status!=='playing'){sound.play(state.status==='won'?'win':'lose');const message=state.status==='won'?'下班啦！':state.status==='full'?'本鼠鼠的嘴装不下啦！':'步数用完啦！';if(!await endBanner.play(message,state.status==='won',()=>!dead&&epoch===presentationEpoch))return;}
   if(dead||epoch!==presentationEpoch)return;finish(cookCount);flushReadiness();
  };
  void animate().catch(showPresentationError);
 }
 function showPresentationError(error:unknown):void{if(dead)return;sound.reset();busy=false;ui.popup('演出未完成',String(error));}
 function recordWin():void{if(winRecorded||session.gm||session.state.status!=='won')return;try{progress.complete(l.id,session.state.steps,session.assisted,campaignResultRevision(l));winRecorded=true;}catch(e){ui.notify('通关有效，但进度保存失败：'+String(e));}}
 function recordFailure(status:State['status']):void{if(failureRecorded||session.gm||(status!=='full'&&status!=='steps'))return;try{progress.recordFailure(l.id,campaignResultRevision(l));failureRecorded=true;}catch(e){ui.notify('失败援助计数未保存：'+String(e));}}
 function finish(count:number):void{
  if(dead)return;recordFailure(state.status);busy=false;pose(state.status==='won'?'win':state.status==='playing'?'idle':'fail');if(count)log.string=`制作并交付 ${count}份，腾出背包空间！`;
  if(state.status==='won'){
   stopAuto();recordWin();
   overlay('下班啦！',`所有 ${l.customers.length}位客人的订单已完成\n本次 ${state.steps}步 · 最优 ${l.optimal}步\n${session.gm?'GM演示，不记录最佳成绩':session.assisted?'已使用试用道具通关':(l.stageNumber||l.id)===80?(progress.restaurantComplete(l.restaurantId||'')?'本店80关全部完成！':'继续补齐本店关卡吧'):'下一关已准备！'}`,true);
  }else if(state.status==='full')overlay('本鼠鼠的嘴装不下啦！',`嘴巴已经装满食材，${session.gm?'GM演示不扣体力':'本局扣除1体力'}。\n已用 ${state.steps}步\n${(l.availableProps||[]).includes('undo')?'试试已开放的道具，或重新开工':'重新开工，再规划一次路线吧'}`);
  else if(state.status==='steps')overlay('步数用完啦',`订单还没完成，${session.gm?'GM演示不扣体力':'本局扣除1体力'}。\n已用 ${state.steps}步\n${(l.availableProps||[]).some(p=>p==='undo'||p==='overtime')?'试试已开放的道具，或重新开工':'重新开工，再规划一次路线吧'}`);
  if(guideMoveResolve){const done=guideMoveResolve;guideMoveResolve=null;done(true);}
  if(state.status==='playing'&&autoRunning){autoTimer=setTimeout(()=>{if(dead||!autoRunning)return;const d=autoPath.shift();if(d&&gmAccess.enabled)run(d,true);else stopAuto();},220);}
 }
 const dirs:[string,Direction,number,number][]=[['↑','up',0,-530],['←','left',-115,-590],['↓','down',0,-590],['→','right',115,-590]];
 for(const [title,dir,x,y]of dirs){const button=action(n,title,x,y,96,58,()=>run(dir));if(art)button.active=false;}
 action(n,'暂停',-265,-590,120,58,()=>{if(adBusy||autoRunning||state.status!=='playing')return;paused=true;sound.pause();actors?.pause();failureCue?.pause();overlay('休息一下','暂停不消耗步数。',false,true);},'#827B68');
 action(n,'菜谱',265,-590,120,58,showOrders,'#827B68');
 if(!art)label(n,'道具为本地试用，未接广告支付 · 失败或退出扣1体力',0,-628,690,20,14,palette.muted);

 if(art){for(const title of ['暂停','菜谱'])n.getChildByName('Action-'+title)!.active=false;const menu=action(n,'暂停',268,-548,84,84,()=>{if(tutorialPending||adBusy||state.status!=='playing')return;if(autoRunning){ui.notify('自动演示结束后可暂停');return;}paused=true;sound.pause();actors?.pause();failureCue?.pause();overlay('休息一下','暂停不消耗步数。',false,true);},'#000000','Action-菜单');breakfastSurface(menu,'v13/ui/pause_button');const caption=menu.getComponentInChildren(Label);if(caption)caption.node.active=false;}
 function propButtons(parent:Node,y:number):void{
  if(art&&parent===dynamic){const allowed=l.availableProps||['undo','overtime','ad-slot'];for(const [id,title,x,fn]of [['undo','撤回一步 ·试用',-169,useUndo],['overtime',session.overtimeUsed?'加班已用':'加班 +3步 ·试用',0,useOvertime]] as [string,string,number,()=>void][]){const button=action(parent,title,x,-546,110,110,()=>{if(allowed.includes(id as 'undo'|'overtime')&&!paused)fn();});breakfastSurface(button,'v13/ui/'+id+'_button');const text=button.getComponentInChildren(Label);if(text)text.node.active=false;const opacity=button.getComponent(UIOpacity)||button.addComponent(UIOpacity);opacity.opacity=allowed.includes(id as 'undo'|'overtime')?255:115;}return;}

  const allowed=l.availableProps||['undo','overtime','ad-slot'],failed=parent.name==='Modal';
  const actions:{title:string;fn:()=>void;color:string}[]=[];
  if(allowed.includes('overtime'))actions.push({title:session.overtimeUsed?'加班已用':'加班 +3步 ·试用',fn:useOvertime,color:session.overtimeUsed?'#938771':palette.green});
  if(allowed.includes('undo'))actions.push({title:'撤回一步 ·试用',fn:useUndo,color:'#977654'});
  if(!actions.length){label(parent,'厨房道具将在后续教学关逐步开放',0,y,650,45,19,palette.muted);return;}
  const width=actions.length===1?420:actions.length===2?300:205,gap=actions.length===3?15:20,total=actions.length*width+(actions.length-1)*gap;
  actions.forEach((a,i)=>action(parent,a.title,-total/2+width/2+i*(width+gap),y,width,48,a.fn,a.color));
 }
 function resetGuests():void{hideFailureCue();chefMoving=false;departures.reset(l,state);stopJelly();jellyNext=0;sound.reset();presentationEpoch++;lifecycle.reset();readinessPending=false;orderLocks.clear();orderCounts.clear();actors?.resetGuests();customerSlots.clear();for(let slot=0;slot<3;slot++){guestSlots[slot]=state.active[slot];if(state.active[slot]!==undefined)customerSlots.set(state.active[slot],slot);}render();if(actors)for(let slot=0;slot<3;slot++){const ci=guestSlots[slot],bubble=dynamic.getChildByName('OrderBubble-'+slot);if(ci!==undefined&&bubble)void lifecycle.arrive(slot,ci,()=>actors.appear(slot,ci,bubble)).catch(showPresentationError);}}
 function afterProp(message:string):void{sound.resume();sync();if(actors)resetGuests();if(modal){modal.destroy();modal=null;}render();pose(state.status==='playing'?'idle':state.status==='won'?'win':'fail');log.string=message;if(state.status!=='playing')finish(0);}
 function showStepGain():void{const float=uiNode(effects,'OvertimeStepsFloat',-190,490,250,76),opacity=float.addComponent(UIOpacity),text=baseLabel(float,'步数+3',0,0,240,70,42,'#FFF2A7');text.isBold=true;const outline=text.getComponent(LabelOutline)||text.addComponent(LabelOutline);outline.color=color('#85471E');outline.width=3;float.setScale(.85,.85,1);float.once(Node.EventType.NODE_DESTROYED,()=>Tween.stopAllByTarget(opacity));tween(opacity).delay(.35).to(.7,{opacity:0}).start();tween(float).to(.15,{scale:new Vec3(1.05,1.05,1)}).to(.15,{scale:new Vec3(1,1,1)}).to(.75,{position:new Vec3(-190,562,0)}).call(()=>{if(isValid(float))float.destroy();}).start();}
 function useOvertime():void{if(busy||dead||adBusy||autoRunning)return;if(!session.overtime()){ui.notify('每局加班限一次，通关后不能使用');return;}afterProp('步数+3');showStepGain();sound.play('unlock');}
 function useUndo():void{if(busy||dead||adBusy||autoRunning)return;if(!session.undo()){ui.notify('当前没有可撤回的移动');return;}afterProp('已撤回完整一步；已扣的失败体力不退还。');sound.play('undo');}
 async function unlockBag():Promise<void>{
  if(busy||dead||adBusy||paused||autoRunning||state.status==='won')return;
  if(session.slotUnlocked){ui.notify('本局扩展格已经开启');return;}
  adBusy=true;render();
  let answered=false;const panel=choicePanel(n,'背包扩容',KitchenBuildFlags.testSkipBagAd?'测试版免广告体验\n确认后，本局背包增加1格。':'完整观看奖励广告后，本局背包增加1格。',[
   {title:KitchenBuildFlags.testSkipBagAd?'免广告解锁':'观看广告并解锁',run:()=>{answered=true;void complete();}},
   {title:'暂不',run:()=>{answered=true;adBusy=false;if(!dead)render();}}
  ],false);
  for(const child of panel.children)if(child.name.startsWith('Action-'))child.setPosition(child.position.x,child.position.y-60);
  breakfastImage(panel,'LockedSlot','ui/bag_locked',-90,91,64,64);label(panel,'→',0,91,70,50,28);breakfastImage(panel,'OpenedSlot','ui/bag_slot',90,91,64,64);label(panel,'+1',90,91,60,40,24);
  panel.once(Node.EventType.NODE_DESTROYED,()=>{if(!answered){adBusy=false;if(!dead)render();}});
  async function complete():Promise<void>{try{const unlocked=await session.unlockAdSlot(rewardedBagPort(platform));if(dead)return;
   if(unlocked){afterProp(KitchenBuildFlags.testSkipBagAd?'测试版免广告：背包本局容量+1。':'奖励广告已完成，背包本局容量+1。');sound.play('unlock');}
   else ui.popup('扩展格尚未解锁','广告未完成或不可用，容量保持不变。');
  }catch(e){if(!dead)ui.popup('广告请求未完成',String(e));}finally{adBusy=false;if(!dead)render();}}
 }

 function openGM():void{if(!gmAccess.enabled)return;
  if(busy||dead||adBusy)return;
  choicePanel(n,'关卡 GM',`第${l.id}关 · 当前总步数 ${l.budget}\n调试操作不记录正常最佳成绩。`,[
   {title:'增加步数 +3',run:()=>{session.addGMSteps(3);afterProp('GM：增加3步。');}},
   {title:'增加步数 +10',run:()=>{session.addGMSteps(10);afterProp('GM：增加10步。');}},
   {title:'最优路径：重置并自动完成',run:startAuto},
   {title:'重播本关引导（GM）',run:()=>{stopAuto();tutorial?.stop();session.resetGM();sync();if(modal){modal.destroy();modal=null;}paused=false;sound.resume();actors?.resume();failureCue?.resume();resetGuests();pose('idle');startTutorial(true);}},
   {title:'解锁背包广告格（GM）',run:()=>{if(session.unlockSlotGM())afterProp('GM测试：本局背包容量+1，未播放广告。');else ui.notify('广告格已开启或当前不可使用');}},
   ...(autoRunning?[{title:'停止自动演示',run:()=>{stopAuto();log.string='GM演示已停止，可手动继续。';}}]:[])
  ]);
 }
 function startAuto():void{if(!gmAccess.enabled)return;
  tutorial?.stop();tutorialPending=false;stopAuto();session.resetGM();sync();if(modal){modal.destroy();modal=null;}paused=false;sound.resume();actors?.resume();failureCue?.resume();resetGuests();
  const solved=solve(session.base);if(solved.status!=='optimal'){ui.notify('未获得已验证最优路径，未开始演示');return;}
  autoPath=[...solved.path];autoRunning=true;log.string=`GM最优路径演示：${autoPath.length}步，不扣体力。`;
  autoTimer=setTimeout(()=>{const d=autoPath.shift();if(d&&!dead)run(d,true);},actors?1800:250);
 }
 const offGM=gmAccess.subscribe(enabled=>{if(enabled)return;stopAuto();if(session.gm){session.exit();select();}});
 const exitOnUnload=()=>{sound.reset();tutorial?.stop();stopAuto();session.exit();};if(typeof window!=='undefined')window.addEventListener('pagehide',exitOnUnload);


 function startTutorial(force=false):void{
  tutorialPending=false;tutorial?.stop();const ids=(l.introductions||[]).filter(id=>force||!progress.guideSeen(guideCompletionKey(id)));const primary=l.conveyors?.length?'conveyor':l.doors?.length?'switch-door':l.stopPads?.length?'stop-pad':undefined;if(primary&&!progress.guideSeen(primary)&&!ids.includes(primary))ids.unshift(primary);if(force&&!ids.length)ids.push('bag-pressure');
  if(!ids.length){if(!session.gm&&progress.failureStreak(l.id,campaignResultRevision(l))>=4){const first=l.solution?.[0];if(first){const p=xy(state.pos);failureCue=new SwipeDirectionCue(effects,first,p[0],p[1]+(art?-37:-38),'FailureSwipeHint');}}return;}
  const target=(id:string)=>{
   if(id==='chef'){const p=xy(state.pos);return {x:p[0],y:p[1]-38,width:cell*.78,height:cell*.78};}
   if(id.startsWith('ingredient:')){const type=id.slice(11),i=state.remaining.find(i=>l.items[i].type===type);if(i!==undefined){const p=xy([l.items[i].x,l.items[i].y]);return {x:p[0],y:p[1]-38,width:cell*.65,height:cell*.65};}}
   if(id.startsWith('station:')){const d=l.devices.find(d=>d.type===id.slice(8));if(d){const p=xy(d.stations[0]);return {x:p[0],y:p[1]-38,width:cell-8,height:cell-8};}}
   if(id==='board')return {x:0,y:-38,width:bw+12,height:bh+12};
   if(id==='orders'){if(art&&state.active.length===1){const slot=Math.max(0,guestSlots.findIndex(ci=>ci!==undefined));return {x:[-203,3,205][slot],y:orderBox.y,width:orderBox.width,height:orderBox.height};}return {x:0,y:340,width:660,height:160};}if(id==='bag')return {x:0,y:art?-416:-365,width:630,height:75};if(id==='steps')return {x:art?-193:-175,y:art?563:444,width:art?220:300,height:art?80:42};if(id==='queue')return {x:0,y:art?263:241,width:130,height:44};
   let node:Node|null=null;if(id.startsWith('mechanic:'))node=mechanics.target(id.slice(9));else if(id==='ad-slot')node=dynamic.getChildByName('AdBagSlot-Locked');else if(id==='prop:undo')node=dynamic.getChildByName('Action-撤回一步 ·试用');else if(id==='prop:overtime')node=dynamic.getChildByName('Action-加班 +3步 ·试用');else if(id==='recipes')node=n.getChildByName(art?'Action-菜单':'Action-菜谱');
   else if(id.startsWith('action:')){const arrows:Record<string,string>={right:'→',left:'←',up:'↑',down:'↓'};node=n.getChildByName('Action-'+arrows[id.slice(7)]);}
   else if(id.startsWith('device:'))node=board.getChildByName('Device-'+id.slice(7));
   if(!node)return;const p=n.getComponent(UITransform)!.convertToNodeSpaceAR(node.worldPosition),size=node.getComponent(UITransform)!.contentSize;return {x:p.x,y:p.y,width:size.width,height:size.height};
  };
  tutorial=new TutorialView(n,ids.map(id=>guideFor(id,l)),{target,move:direction=>new Promise<boolean>(resolve=>{if(dead||busy||adBusy||paused||state.status!=='playing'){resolve(false);return;}guideMoveResolve=resolve;const before=session.state.steps;run(direction,false,true);if(session.state.steps===before){guideMoveResolve=null;resolve(false);}}),demo:()=>{
   let sample=initialState(l);const path:Cell[]=[];let p=xy(sample.pos);path.push([p[0],p[1]-38]);for(const direction of (l.solution||[]).slice(0,2)){sample=move(l,sample,direction).state;p=xy(sample.pos);path.push([p[0],p[1]-38]);}return path;
  },activate:target=>{if(target!=='recipes')return Promise.resolve(true);return new Promise<boolean>(resolve=>{recipeClosed=resolve;showOrders();});},completed:id=>{if(!session.gm)try{progress.markGuide(id);}catch(e){ui.notify('引导进度未保存：'+String(e));}}});
 }

 const start={x:0,y:0};const touchStart=(e:EventTouch)=>{const p=e.getUILocation();if(art){const local=board.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(p.x,p.y,0));if(!unprojectBoardPoint(local.x,local.y,l.width,l.height)){start.x=NaN;start.y=NaN;return;}}start.x=p.x;start.y=p.y;};const touchEnd=(e:EventTouch)=>{if(!Number.isFinite(start.x))return;const p=e.getUILocation(),dx=p.x-start.x,dy=p.y-start.y;if(Math.max(Math.abs(dx),Math.abs(dy))<25)return;const direction:Direction=Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'up':'down';hideFailureCue();if(tutorial?.active){tutorial.swipe(direction);return;}run(direction);};
 board.on(Node.EventType.TOUCH_START,touchStart);board.on(Node.EventType.TOUCH_END,touchEnd);
 const keyboard=(e:EventKeyboard)=>{if(recipeClosed)return;if(ui.overlays.children.some(child=>child.name==='Popup'))return;const map:Partial<Record<KeyCode,Direction>>={[KeyCode.ARROW_UP]:'up',[KeyCode.ARROW_DOWN]:'down',[KeyCode.ARROW_LEFT]:'left',[KeyCode.ARROW_RIGHT]:'right'};const d=map[e.keyCode];if(d){hideFailureCue();if(tutorial?.active){tutorial.swipe(d);return;}run(d);}};input.on(Input.EventType.KEY_DOWN,keyboard);
 actors?.ensureSunlightLayer();render();pose('idle');if(actors)for(let slot=0;slot<3;slot++){const ci=guestSlots[slot],bubble=dynamic.getChildByName('OrderBubble-'+slot);if(ci!==undefined&&bubble)void lifecycle.arrive(slot,ci,()=>actors.appear(slot,ci,bubble)).catch(showPresentationError);}sound.play('start');if(endBanner){void endBanner.play('第'+globalLevelNumber(l.id,RESTAURANTS)+'关 · 开工啦！',true,()=>!dead,(l.restaurantName||'早餐小铺')+' · 完成'+l.customers.length+'位客人订单').then(ok=>{if(ok&&!dead){startTutorial();flushReadiness();}});}else guideStartTimer=setTimeout(()=>{if(!dead)startTutorial();},200);return {node:n,dispose:()=>{hideFailureCue();customerCounter.dispose();clearInterval(jellyTimer);stopJelly();sound.dispose();offGM();dead=true;presentationEpoch++;lifecycle.reset();endBanner?.dispose();bagFull?.dispose();cooking?.dispose();mechanics.dispose();actors?.dispose();for(const saved of borrowed){if(saved.node.parent!==n)continue;saved.node.setParent(saved.parent);saved.node.setSiblingIndex(saved.index);saved.node.setPosition(saved.position);saved.node.setScale(saved.scale);saved.node.active=false;}tutorial?.stop();if(guideStartTimer)clearTimeout(guideStartTimer);if(guideMoveResolve){guideMoveResolve(false);guideMoveResolve=null;}if(recipeClosed){recipeClosed(false);recipeClosed=null;}stopAuto();session.exit();if(typeof window!=='undefined')window.removeEventListener('pagehide',exitOnUnload);input.off(Input.EventType.KEY_DOWN,keyboard);board.off(Node.EventType.TOUCH_START,touchStart);board.off(Node.EventType.TOUCH_END,touchEnd);Tween.stopAllByTarget(chef);Tween.stopAllByTarget(chefBody);for(const child of effects.children)Tween.stopAllByTarget(child);}};
}
