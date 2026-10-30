import {palette,food,deviceColors,color,rect,label,action,root,clear,choicePanel,energyWidget} from './KitchenUI';
import {Node,UITransform,Graphics,Color,Label,Button,BlockInputEvents,Layers,EventTouch,input,Input,EventKeyboard,KeyCode,tween,Tween,Vec3,sys,isValid,UIOpacity} from 'cc';
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
 const n=root('KitchenGame'),session=new KitchenSession(l,bank);l=session.level;let state=session.state,busy=false,dead=false,paused=false,adBusy=false,modal:Node|null=null;let winRecorded=false;let autoRunning=false,autoPath:Direction[]=[],autoTimer:ReturnType<typeof setTimeout>|null=null;energyWidget(n,bank);let tutorial:TutorialView|null=null,tutorialPending=true,guideStartTimer:ReturnType<typeof setTimeout>|null=null,guideMoveResolve:((ok:boolean)=>void)|null=null,recipeClosed:((ok:boolean)=>void)|null=null;
 const sync=()=>{l=session.level;state=session.state;};
 const stopAuto=()=>{autoRunning=false;autoPath=[];if(autoTimer)clearTimeout(autoTimer);autoTimer=null;};
 const leave=(fn:()=>void)=>{tutorial?.stop();stopAuto();session.exit();fn();};
 const restart=()=>{tutorial?.stop();stopAuto();session.exit();if(bank.snapshot().value>0)retry();else select();};
 const dynamic=uiNode(n,'HUD',0,0,720,1280),board=uiNode(n,'Board',0,-38,610,540),effects=uiNode(n,'Effects',0,0,720,1280);
 const cell=Math.min(600/l.width,520/l.height),bw=cell*l.width,bh=cell*l.height;
 const xy=(p:Cell):Cell=>[-bw/2+cell*(p[0]+.5),bh/2-cell*(p[1]+.5)];
 rect(board,'BoardBase',0,0,bw+12,bh+12,'#BFB093',13);
 for(let y=0;y<l.height;y++)for(let x=0;x<l.width;x++){const [px,py]=xy([x,y]);rect(board,`Cell-${x}-${y}`,px,py,cell-3,cell-3,(x+y)%2?palette.floor:palette.floor2,7);}
 for(const d of l.devices){for(const p of d.stations){const [x,y]=xy(p),g=rect(board,'Station',x,y,cell-8,cell-8,'#B5D5BC',8);label(g,'停靠',0,0,cell-12,cell-12,16,palette.green);}}
 for(const p of l.walls){const [x,y]=xy(p),w=rect(board,'Wall',x,y,cell-6,cell-6,palette.wall,8);label(w,'障碍',0,0,cell-10,cell-10,16,palette.white);}
 for(const d of l.devices){const [x,y]=xy([d.x,d.y]),dev=rect(board,'Device-'+d.type,x,y,cell-6,cell-6,deviceColors[d.type]||'#A18261',8);label(dev,d.name,0,0,cell-12,cell-10,17,palette.white);}
 const itemLayer=uiNode(board,'Items',0,0,bw,bh),chef=uiNode(board,'Chef',0,0,cell*.78,cell*.78);
 const chefHalo=uiNode(chef,'ChefHalo',0,0,cell*.86,cell*.86),haloGraphics=(chefHalo.getComponent(Graphics)||chefHalo.addComponent(Graphics));haloGraphics.lineWidth=5;haloGraphics.strokeColor=new Color(255,255,235,255);haloGraphics.roundRect(-cell*.43,-cell*.43,cell*.86,cell*.86,18);haloGraphics.stroke();const haloOpacity=(chefHalo.getComponent(UIOpacity)||chefHalo.addComponent(UIOpacity));
 const chefBody=rect(chef,'ChefBody',0,0,cell*.68,cell*.68,'#146E61',16),bodyGraphics=chefBody.getComponent(Graphics)!;bodyGraphics.lineWidth=3;bodyGraphics.strokeColor=new Color(255,255,235,255);bodyGraphics.roundRect(-cell*.34,-cell*.34,cell*.68,cell*.68,16);bodyGraphics.stroke();const chefLabel=label(chefBody,'厨师',0,0,cell*.64,cell*.55,21,palette.white);chefLabel.isBold=true;
 tween(chefBody).to(.9,{scale:new Vec3(1.09,1.09,1)},{easing:'sineInOut'}).to(.9,{scale:new Vec3(1,1,1)},{easing:'sineInOut'}).union().repeatForever().start();
 haloOpacity.opacity=100;tween(haloOpacity).to(.9,{opacity:230},{easing:'sineInOut'}).to(.9,{opacity:100},{easing:'sineInOut'}).union().repeatForever().start();
 label(n,`第${l.stageNumber||l.id}关  ${l.name}`,-65,545,490,62,32);label(n,l.tip,0,492,640,52,19,palette.muted);
 action(n,'选关',-265,600,120,50,()=>leave(select),'#827B68');action(n,'重试',265,600,120,50,restart,'#827B68');
 action(n,'关卡GM',162,600,76,48,openGM,'#A27852');
 const log=label(n,'滑动棋盘，或点击下方方向键',0,-435,650,32,18,palette.muted);
 const overlay=(title:string,body:string,won=false,pause=false)=>{if(modal){modal.destroy();}modal=rect(n,won?'WinResult':pause?'PausePanel':'FailResult',0,0,720,1280,'#ECE3CE',0);modal.name='Modal';(modal.getComponent(BlockInputEvents)||modal.addComponent(BlockInputEvents));label(modal,title,0,170,620,85,40,won?palette.green:'#AE624D');label(modal,body,0,35,610,150,24);if(pause)action(modal,'继续开工',0,-105,380,70,()=>{paused=false;modal?.destroy();modal=null;});else if(won)action(modal,(l.stageNumber||l.id)===80?'餐厅通关 · 返回餐厅':'下一关',0,-105,380,70,()=>leave(next));else action(modal,'重新开工',0,-105,380,70,restart);if(won)action(modal,'重玩本关',0,-195,380,64,restart,'#827B68');action(modal,'返回选关',0,-285,380,64,()=>leave(select),'#827B68');if(!pause&&!won){propButtons(modal,-390);action(modal,'关卡GM',0,-480,300,58,openGM,'#A27852');}};
 function render():void{
  clear(dynamic);clear(itemLayer);
  label(dynamic,`剩余 ${l.budget-state.steps} / ${l.budget} 步`, -175,444,300,42,24,palette.green);label(dynamic,`背包 ${bagSize(state)} / ${l.capacity} · 满即失败`,175,444,330,42,22,bagSize(state)>=l.capacity-2?'#B15D41':palette.muted);
  const active=[...state.active].sort((a,b)=>a-b);for(let slot=0;slot<3;slot++){
   const card=rect(dynamic,'CustomerSlot-'+slot,-221+slot*221,340,208,160,palette.white),ci=active[slot];
   if(ci===undefined){label(card,'等待打烊',0,0,195,70,21,palette.muted);continue;}
   const c=l.customers[ci],finished=c.orders.filter((o,i)=>state.done[ci][i]>=o.count).length;label(card,`#${ci+1} ${c.name}${c.orders.length>1?` ${finished}/${c.orders.length}道`:''}`,0,62,195,30,c.orders.length>1?18:21,palette.green);
   const rowHeight=128,oi=Math.max(0,c.orders.findIndex((o,i)=>state.done[ci][i]<o.count));
   [c.orders[oi]].forEach(order=>{
    const recipe=l.recipes.find(r=>r.id===order.recipe)!,entries=Object.entries(recipe.ingredients),top=44;
    label(card,`${recipe.name} ${state.done[ci][oi]}/${order.count}`,0,top-rowHeight*.13,195,Math.min(30,rowHeight*.22),21);
    const gap=7,chipWidth=Math.min(86,(190-gap*(entries.length-1))/entries.length),chipHeight=Math.min(42,rowHeight*.34),totalWidth=entries.length*chipWidth+(entries.length-1)*gap;
    entries.forEach(([type,count],index)=>{
     const f=food[type],x=-totalWidth/2+chipWidth/2+index*(chipWidth+gap);
     const chip=rect(card,'OrderIngredient-'+type,x,top-rowHeight*.46,chipWidth,chipHeight,f?.color||'#DDD',9);
     label(chip,f?.short||type,-chipWidth*.17,0,chipWidth*.48,chipHeight-3,Math.min(25,chipHeight*.62));
     label(chip,`×${count}`,chipWidth*.28,0,chipWidth*.38,chipHeight-3,Math.min(19,chipHeight*.48));
    });
    deviceBadge(card,recipe.device,0,top-rowHeight*.82,174,Math.min(27,rowHeight*.21));
   });
  }
  const waiting=l.customers.slice(state.queue);const queueLabel=label(dynamic,waiting.length?`候场 ${waiting.length}位 · 点此查看全部需求`:'无候场客人 · 按编号从小到大优先制作',0,241,650,26,17,palette.muted);(queueLabel.node.getComponent(Button)||queueLabel.node.addComponent(Button));queueLabel.node.on(Button.EventType.CLICK,()=>{if(!busy&&!paused)showOrders();});
  for(const i of state.remaining){const it=l.items[i],[x,y]=xy([it.x,it.y]),f=food[it.type],node=rect(itemLayer,'Ingredient-'+i,x,y,cell*.65,cell*.65,f?.color||'#DDD',12);label(node,f?.short||it.type,0,0,cell*.6,cell*.55,23);}
  const bag:string[]=[];for(const [t,count]of Object.entries(state.bag))for(let i=0;i<count;i++)bag.push(t);
  const adAvailable=(l.availableProps||['undo','overtime','ad-slot']).includes('ad-slot'),totalSlots=session.base.capacity+(adAvailable?1:0),gap=Math.min(83,620/totalSlots),left=-(totalSlots-1)*gap/2;
  for(let i=0;i<totalSlots;i++){
   const locked=adAvailable&&i===totalSlots-1&&!session.slotUnlocked;
   if(locked){const slot=action(dynamic,adBusy?'请求中':'广告\n+1格',left+i*gap,-365,gap-7,65,()=>{void unlockBag();},'#A8997F');slot.name='AdBagSlot-Locked';continue;}
   const f=food[bag[i]],slot=rect(dynamic,adAvailable&&i===totalSlots-1?'AdBagSlot-Unlocked':'BagSlot',left+i*gap,-365,gap-7,65,f?f.color:palette.white,10);label(slot,f?f.name:String(i+1),0,0,gap-10,55,f?17:20,f?palette.ink:'#B4AB98');
  }
  label(dynamic,!adAvailable?'背包容量7 · 后续关卡将开放广告扩展格':session.slotUnlocked?'本局已开启广告格 · 装满已开启格立即失败':'点背包广告格解锁+1容量 · 装满已开启格立即失败',0,-410,670,32,17,'#9A674B');
  propButtons(dynamic,-475);
  const [x,y]=xy(state.pos);chef.setPosition(x,y);
 }
 function deviceBadge(parent:Node,type:string,x:number,y:number,width:number,height:number):void{
  const device=l.devices.find(d=>d.type===type),chip=rect(parent,'RequiredDevice-'+type,x,y,width,height,deviceColors[type]||'#A18261',7);
  label(chip,`需用 ${device?.name||type}`,0,0,width-8,height-2,Math.min(18,height*.68),palette.white);
 }
 function showOrders():void{
  if(adBusy||busy||paused)return;
  const panel=rect(n,'RecipePanel',0,0,720,1280,'#ECE3CE',0);(panel.getComponent(BlockInputEvents)||panel.addComponent(BlockInputEvents));
  label(panel,'本关订单与菜谱',0,535,650,60,34,palette.green);
  label(panel,l.customers.map((c,i)=>`#${i+1} ${c.name}：`+c.orders.map(o=>`${l.recipes.find(r=>r.id===o.recipe)!.name}×${o.count}`).join('、')).join('  /  '),0,446,650,105,19);
  const rowHeight=Math.min(145,680/l.recipes.length);
  l.recipes.forEach((recipe,index)=>{
   const card=rect(panel,'RecipeCard-'+recipe.id,0,350-rowHeight/2-index*rowHeight,630,rowHeight-10,palette.white);
   label(card,recipe.name,-145,rowHeight*.25,300,36,25);
   deviceBadge(card,recipe.device,180,rowHeight*.25,190,32);
   const entries=Object.entries(recipe.ingredients),gap=12,w=Math.min(120,(560-gap*(entries.length-1))/entries.length),total=entries.length*w+(entries.length-1)*gap;
   entries.forEach(([type,count],i)=>{const f=food[type],chip=rect(card,'RecipeIngredient-'+type,-total/2+w/2+i*(w+gap),-rowHeight*.18,w,48,f?.color||'#DDD',10);label(chip,`${f?.short||type} ×${count}`,0,0,w-8,44,24);});
  });
  action(panel,'关闭',0,-545,360,64,()=>{panel.destroy();const done=recipeClosed;recipeClosed=null;done?.(true);},'#827B68');
 }
 const run=(dir:Direction,fromAuto=false,fromGuide=false)=>{
  if(dead||busy||adBusy||paused||tutorialPending||((tutorial?.active)&&!fromGuide&&!fromAuto)||(autoRunning&&!fromAuto)||state.status!=='playing')return;
  if(n.children.some(child=>child.name==='ChoicePanel')){if(fromAuto)autoTimer=setTimeout(()=>run(dir,true),220);return;}
  const result=session.slide(dir);if(result.state.steps===state.steps){log.string='这里被挡住了，不扣步。';return;}
  recordWin();busy=true;const walks=result.events.filter(e=>e.kind==='walk');
  let chain=tween(chef);
  const total=Math.max(.15,Math.min(.45,walks.length*.07));
  for(const event of walks){const [x,y]=xy(event.pos!);chain=chain.to(total/walks.length,{position:new Vec3(x,y,0)});}
  chain.call(()=>{
   if(dead)return;sync();render();
   const cooked=result.events.filter(e=>e.kind==='cook');
   if(cooked.length){log.string=`正在制作 ${cooked.map(e=>l.recipes.find(r=>r.id===e.recipe)!.name).join('、')}…`;const badge=rect(effects,'Cooking',0,0,480,120,palette.green);label(badge,`制作中… ${cooked.length}份`,0,0,450,95,30,palette.white);tween(badge).to(.18,{scale:new Vec3(1.04,1.04,1)}).delay(.42).call(()=>{if(!dead){badge.destroy();finish(cooked.length);}}).start();}
   else{log.string=result.events.some(e=>e.kind==='pickup')?'已拾取材料；停在绿色操作格才能制作。':'规划下一步：设备和障碍都会挡路。';finish(0);}
  }).start();
  // State is committed after the slide; all actual movement comes from the same rule result.

 };
 function recordWin():void{if(winRecorded||session.gm||session.state.status!=='won')return;try{progress.complete(l.id,session.state.steps,session.assisted);winRecorded=true;}catch(e){ui.notify('通关有效，但进度保存失败：'+String(e));}}
 function finish(count:number):void{
  if(dead)return;busy=false;if(count)log.string=`制作并交付 ${count}份，腾出背包空间！`;
  if(state.status==='won'){
   stopAuto();recordWin();
   overlay('下班啦！',`所有 ${l.customers.length}位客人的订单已完成\n本次 ${state.steps}步 · 最优 ${l.optimal}步${session.gm?'\nGM演示，不记录最佳成绩':session.assisted?'\n使用了试用道具，不记录无道具最佳':''}\n${(l.stageNumber||l.id)===80?(progress.restaurantComplete(l.restaurantId||'')?'本店80关全部完成！':'本关完成，继续补齐本店关卡。'):'本关完成，下一关已准备。'}`,true);
  }else if(state.status==='full')overlay('背包满啦',`背包达到 ${l.capacity}份材料，立即失败，本局已扣1体力。\n${(l.availableProps||[]).includes('undo')?'可使用已开放的撤回；广告格需完整观看才解锁。':'本关尚未开放续玩道具，请重试。'}\n已用 ${state.steps}步`);
  else if(state.status==='steps')overlay('步数用完啦',`订单还没完成。本局已扣1体力。\n${(l.availableProps||[]).some(p=>p==='undo'||p==='overtime')?'可使用本关已开放的加班或撤回道具。':'本关尚未开放续玩道具，请重试。'}`);
  if(guideMoveResolve){const done=guideMoveResolve;guideMoveResolve=null;done(true);}
  if(state.status==='playing'&&autoRunning){autoTimer=setTimeout(()=>{if(dead||!autoRunning)return;const d=autoPath.shift();if(d)run(d,true);else stopAuto();},220);}
 }
 const dirs:[string,Direction,number,number][]=[['↑','up',0,-530],['←','left',-115,-590],['↓','down',0,-590],['→','right',115,-590]];
 for(const [title,dir,x,y]of dirs)action(n,title,x,y,96,58,()=>run(dir));
 action(n,'暂停',-265,-590,120,58,()=>{if(busy||autoRunning||state.status!=='playing')return;paused=true;overlay('休息一下','暂停不消耗步数。',false,true);},'#827B68');
 action(n,'菜谱',265,-590,120,58,showOrders,'#827B68');
 label(n,'道具为本地试用，未接广告支付 · 失败或退出扣1体力',0,-628,690,20,14,palette.muted);

 function propButtons(parent:Node,y:number):void{
  const allowed=l.availableProps||['undo','overtime','ad-slot'],failed=parent.name==='Modal';
  const actions:{title:string;fn:()=>void;color:string}[]=[];
  if(allowed.includes('overtime'))actions.push({title:session.overtimeUsed?'加班已用':'加班 +3步 ·试用',fn:useOvertime,color:session.overtimeUsed?'#938771':palette.green});
  if(allowed.includes('undo'))actions.push({title:'撤回一步 ·试用',fn:useUndo,color:'#977654'});
  if(failed&&allowed.includes('ad-slot'))actions.push({title:session.slotUnlocked?'广告格已开启':'广告扩展1格',fn:()=>{void unlockBag();},color:'#A8997F'});
  if(!actions.length){label(parent,'厨房道具将在后续教学关逐步开放',0,y,650,45,19,palette.muted);return;}
  const width=actions.length===1?420:actions.length===2?300:205,gap=actions.length===3?15:20,total=actions.length*width+(actions.length-1)*gap;
  actions.forEach((a,i)=>action(parent,a.title,-total/2+width/2+i*(width+gap),y,width,48,a.fn,a.color));
 }
 function afterProp(message:string):void{sync();if(modal){modal.destroy();modal=null;}render();log.string=message;if(state.status!=='playing')finish(0);}
 function useOvertime():void{if(busy||dead||adBusy||autoRunning)return;if(!session.overtime()){ui.notify('每局加班限一次，通关后不能使用');return;}afterProp('加班成功，增加3步；本次为本地试用。');}
 function useUndo():void{if(busy||dead||adBusy||autoRunning)return;if(!session.undo()){ui.notify('当前没有可撤回的移动');return;}afterProp('已撤回完整一步；已扣的失败体力不退还。');}
 async function unlockBag():Promise<void>{
  if(busy||dead||adBusy||autoRunning||state.status==='won')return;
  if(session.slotUnlocked){ui.notify('本局广告格已经开启');return;}
  adBusy=true;
  try{const unlocked=await session.unlockAdSlot(platform);if(dead)return;
   if(unlocked)afterProp('奖励广告完整观看，背包本局容量+1。');
   else ui.popup('广告格尚未解锁','只有完整观看奖励广告才会解锁。当前预览未接入广告，或广告未完成，容量保持不变。\n可在关卡GM中测试扩展格效果。');
  }catch(e){if(!dead)ui.popup('广告请求未完成',String(e)+'\n广告格未解锁，背包材料保持不变。');}
  finally{adBusy=false;}
 }
 function openGM():void{
  if(busy||dead||adBusy)return;
  choicePanel(n,'关卡 GM',`第${l.id}关 · 当前总步数 ${l.budget}\n调试操作不记录正常最佳成绩。`,[
   {title:'增加步数 +3',run:()=>{session.addGMSteps(3);afterProp('GM：增加3步。');}},
   {title:'增加步数 +10',run:()=>{session.addGMSteps(10);afterProp('GM：增加10步。');}},
   {title:'最优路径：重置并自动完成',run:startAuto},
   {title:'重播本关引导（GM）',run:()=>{stopAuto();tutorial?.stop();session.resetGM();sync();if(modal){modal.destroy();modal=null;}render();startTutorial(true);}},
   {title:'解锁背包广告格（GM）',run:()=>{if(session.unlockSlotGM())afterProp('GM测试：本局背包容量+1，未播放广告。');else ui.notify('广告格已开启或当前不可使用');}},
   ...(autoRunning?[{title:'停止自动演示',run:()=>{stopAuto();log.string='GM演示已停止，可手动继续。';}}]:[])
  ]);
 }
 function startAuto():void{
  tutorial?.stop();tutorialPending=false;stopAuto();session.resetGM();sync();if(modal){modal.destroy();modal=null;}paused=false;render();
  const solved=solve(session.base);if(solved.status!=='optimal'){ui.notify('未获得已验证最优路径，未开始演示');return;}
  autoPath=[...solved.path];autoRunning=true;log.string=`GM最优路径演示：${autoPath.length}步，不扣体力。`;
  autoTimer=setTimeout(()=>{const d=autoPath.shift();if(d&&!dead)run(d,true);},250);
 }
 const exitOnUnload=()=>{tutorial?.stop();stopAuto();session.exit();};if(typeof window!=='undefined')window.addEventListener('pagehide',exitOnUnload);


 function startTutorial(force=false):void{
  tutorialPending=false;tutorial?.stop();const ids=(l.introductions||[]).filter(id=>force||!progress.guideSeen(guideCompletionKey(id)));if(force&&!ids.length)ids.push('bag-pressure');
  if(!ids.length)return;
  const target=(id:string)=>{
   if(id==='chef'){const p=xy(state.pos);return {x:p[0],y:p[1]-38,width:cell*.78,height:cell*.78};}
   if(id.startsWith('ingredient:')){const type=id.slice(11),i=state.remaining.find(i=>l.items[i].type===type);if(i!==undefined){const p=xy([l.items[i].x,l.items[i].y]);return {x:p[0],y:p[1]-38,width:cell*.65,height:cell*.65};}}
   if(id.startsWith('station:')){const d=l.devices.find(d=>d.type===id.slice(8));if(d){const p=xy(d.stations[0]);return {x:p[0],y:p[1]-38,width:cell-8,height:cell-8};}}
   if(id==='board')return {x:0,y:-38,width:bw+12,height:bh+12};
   if(id==='orders')return {x:0,y:340,width:660,height:160};if(id==='bag')return {x:0,y:-365,width:630,height:75};if(id==='steps')return {x:-175,y:444,width:300,height:42};if(id==='queue')return {x:0,y:241,width:650,height:35};
   let node:Node|null=null;if(id==='ad-slot')node=dynamic.getChildByName('AdBagSlot-Locked');else if(id==='prop:undo')node=dynamic.getChildByName('Action-撤回一步 ·试用');else if(id==='prop:overtime')node=dynamic.getChildByName('Action-加班 +3步 ·试用');else if(id==='recipes')node=n.getChildByName('Action-菜谱');
   else if(id.startsWith('action:')){const arrows:Record<string,string>={right:'→',left:'←',up:'↑',down:'↓'};node=n.getChildByName('Action-'+arrows[id.slice(7)]);}
   else if(id.startsWith('device:'))node=board.getChildByName('Device-'+id.slice(7));
   if(!node)return;const p=n.getComponent(UITransform)!.convertToNodeSpaceAR(node.worldPosition),size=node.getComponent(UITransform)!.contentSize;return {x:p.x,y:p.y,width:size.width,height:size.height};
  };
  tutorial=new TutorialView(n,ids.map(id=>guideFor(id,l)),{target,move:direction=>new Promise<boolean>(resolve=>{if(dead||busy||adBusy||paused||state.status!=='playing'){resolve(false);return;}guideMoveResolve=resolve;const before=session.state.steps;run(direction,false,true);if(session.state.steps===before){guideMoveResolve=null;resolve(false);}}),demo:()=>{
   let sample=initialState(l);const path:Cell[]=[];let p=xy(sample.pos);path.push([p[0],p[1]-38]);for(const direction of (l.solution||[]).slice(0,2)){sample=move(l,sample,direction).state;p=xy(sample.pos);path.push([p[0],p[1]-38]);}return path;
  },activate:target=>{if(target!=='recipes')return Promise.resolve(true);return new Promise<boolean>(resolve=>{recipeClosed=resolve;showOrders();});},completed:id=>{if(!session.gm)try{progress.markGuide(id);}catch(e){ui.notify('引导进度未保存：'+String(e));}}});
 }

 const start={x:0,y:0};const touchStart=(e:EventTouch)=>{const p=e.getUILocation();start.x=p.x;start.y=p.y;};const touchEnd=(e:EventTouch)=>{const p=e.getUILocation(),dx=p.x-start.x,dy=p.y-start.y;if(Math.max(Math.abs(dx),Math.abs(dy))<25)return;const direction:Direction=Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'up':'down';if(tutorial?.active){tutorial.swipe(direction);return;}run(direction);};
 board.on(Node.EventType.TOUCH_START,touchStart);board.on(Node.EventType.TOUCH_END,touchEnd);
 const keyboard=(e:EventKeyboard)=>{if(ui.overlays.children.some(child=>child.name==='Popup'))return;const map:Partial<Record<KeyCode,Direction>>={[KeyCode.ARROW_UP]:'up',[KeyCode.ARROW_DOWN]:'down',[KeyCode.ARROW_LEFT]:'left',[KeyCode.ARROW_RIGHT]:'right'};const d=map[e.keyCode];if(d)run(d);};input.on(Input.EventType.KEY_DOWN,keyboard);
 render();guideStartTimer=setTimeout(()=>{if(!dead)startTutorial();},200);return {node:n,dispose:()=>{dead=true;tutorial?.stop();if(guideStartTimer)clearTimeout(guideStartTimer);if(guideMoveResolve){guideMoveResolve(false);guideMoveResolve=null;}if(recipeClosed){recipeClosed(false);recipeClosed=null;}stopAuto();session.exit();if(typeof window!=='undefined')window.removeEventListener('pagehide',exitOnUnload);input.off(Input.EventType.KEY_DOWN,keyboard);board.off(Node.EventType.TOUCH_START,touchStart);board.off(Node.EventType.TOUCH_END,touchEnd);Tween.stopAllByTarget(chef);Tween.stopAllByTarget(chefBody);Tween.stopAllByTarget(haloOpacity);for(const child of effects.children)Tween.stopAllByTarget(child);}};
}






