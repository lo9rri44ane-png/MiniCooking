import{Node,Graphics,Label,Color,Button,UITransform,UIOpacity,Vec3,tween,Tween,sys,isValid}from'cc';
import{UIService,uiNode}from'../../framework/cocos/UIService';import type{PageView}from'../../framework/cocos/UIService';
import{root,rect,label,action,pageArt,choicePanel,clear,palette}from'../kitchen/KitchenUI';import{markFormalControls}from'../kitchen/BattleUI';
import{breakfastImage,breakfastSurface}from'../kitchen/BreakfastArt';import{animationPlayer,playKitchenClip}from'../kitchen/KitchenAnimationLibrary';import{序列帧播放器}from'../../framework/cocos/序列帧播放器';import{KitchenSound}from'../kitchen/KitchenSound';
import{Demo2Art}from'./Demo2Art';import{Demo2BoardView,poly}from'./Demo2BoardView';import{COLORS,FOOD_KEYS,footprintBounds,gridPoint,boardMetrics}from'./Presentation';
import{LEVELS}from'./Levels';import{Session}from'./Session';import{applyAction}from'./Rules';import{Demo2Store}from'./Demo2Store';import type{Action,Level,Order,State,Color as PlateColor}from'./Types';
const CUSTOMER_SPECIES=['dog','rabbit','bear'];
export function registerDemo2Pages(ui:UIService):void{
 let selected=LEVELS[0];const store=new Demo2Store(sys.localStorage),go=(id:string)=>{void ui.go(id).catch(e=>ui.popup('Demo2尚未打开',String(e)));};
 ui.register('demo2-select',()=>{const n=root('Demo2SelectPage');pageArt(n);markFormalControls(n);label(n,'Demo2 · 装盘出餐',0,530,620,75,38,'#704421').isBold=true;label(n,'独立试玩 · 无步数限制 · 不消耗体力',0,456,650,54,23);let completed:number[]=[];try{completed=store.load().cleared;}catch(e){ui.notify(String(e));}
  LEVELS.forEach((level,i)=>{action(n,`第${i+1}关 · ${level.width}×${level.height} · ${level.orders.length}单${completed.includes(level.id)?' · 已完成':''}`,0,310-i*126,540,82,()=>{selected=level;go('demo2');});});
  label(n,'长按食物取出；直接拖盘子移动\n装满并匹配订单，同色出口出餐\n长按食物可取出；空盘可从任意出口送洗',0,-390,650,125,23);action(n,'返回 Demo1',0,-550,370,66,()=>go('home'),'#827B68');return{node:n};});
 ui.register('demo2',async()=>{const art=new Demo2Art();await art.load();try{return createDemo2Play(ui,selected,art,store,()=>go('demo2'),()=>go('demo2-select'),()=>{const next=LEVELS.find(l=>l.id===selected.id+1);if(next){selected=next;go('demo2');}else go('demo2-select');});}catch(e){art.dispose();throw e;}});
}
function createDemo2Play(ui:UIService,level:Level,art:Demo2Art,store:Demo2Store,retry:()=>void,select:()=>void,next:()=>void):PageView{
 const n=root('Demo2PlayPage');markFormalControls(n);breakfastImage(n,'Demo2BattleBackdrop','v9/backgrounds/battle',0,0,720,1280).setSiblingIndex(1);
 const sound=new KitchenSound(),session=new Session(level),actors:序列帧播放器[]=[],tweens=new Set<Tween<Node>>(),timers=new Set<ReturnType<typeof setTimeout>>();let dead=false,paused=false,modal:Node|null=null;
 const metrics=boardMetrics(level.width,level.height),unit=metrics.cell;rect(n,'Demo2Workbench',0,-125,704,800,'#4D6254',22);
 const guests:{x:number;player:序列帧播放器;species:string;orders:Order[]}[]=[];const orderGuest=new Map<string,number>();
 const hud=uiNode(n,'Demo2HUD',0,0,720,1280);
 const banner=(name:string,title:string,x:number,y:number,w:number)=>{breakfastImage(hud,name,'v9/ui/banner',x,y,w,78);const l=label(hud,title,x,y,w-28,48,27,'#754321');l.isBold=true;return l;};
 banner('Demo2LevelBadge','Demo2 · 第'+level.id+'关',-180,578,300);const count=banner('Demo2OrderCount','订单 0/'+level.orders.length,155,578,280);
 const unlimited=label(hud,'无步数限制 · 可自由选择出餐顺序',0,526,650,34,19,'#845B39');
 for(let i=0;i<3;i++){const x=(i-1)*224,species=CUSTOMER_SPECIES[i],actor=uiNode(n,'Demo2Customer-'+i,x,478,140,140),player=animationPlayer(actor,140,140),orders=level.orders.filter((_,j)=>j%3===i);actors.push(player);guests.push({x,player,species,orders});orders.forEach(o=>orderGuest.set(o.id,i));void playKitchenClip(player,'customers/'+species+'/idle',true);}
 const orderLayer=uiNode(n,'Demo2Orders',0,0,720,1280);
 function orderIcon(parent:Node,order:Order,x:number,y:number,unit=26):Node{const b=footprintBounds(order.shape),node=uiNode(parent,'Demo2OrderIcon-'+order.id,x,y,b.w*unit,b.h*unit);poly(node,order.shape,unit,COLORS[order.color]);for(let i=0;i<order.foods.length;i++){const f=order.foods[i],fb=footprintBounds(f.shape),fx=(f.x+fb.w/2-b.w/2)*unit,fy=(b.h/2-f.y-fb.h/2)*unit;art.image(node,'Demo2OrderFood-'+i,FOOD_KEYS[f.kind],fx,fy,fb.w*unit-4,fb.h*unit-4);}return node;}
 function renderOrders():void{clear(orderLayer);count.string=`订单 ${session.state.delivered.length}/${level.orders.length}`;for(let guestId=0;guestId<guests.length;guestId++){const slot=guests[guestId],orders=slot.orders,rows=Math.ceil(orders.length/2),card=rect(orderLayer,'Demo2OrderCard-'+guestId,slot.x,335,208,178,'#FFF6DF',15),g=card.getComponent(Graphics)!;g.lineWidth=3;g.strokeColor=new Color(206,152,81,255);g.roundRect(-104,-89,208,178,15);g.stroke();orders.forEach((o,i)=>{const x=orders.length===1?0:(i%2-.5)*98,y=((rows-1)/2-Math.floor(i/2))*78,icon=orderIcon(card,o,x,y,orders.length===1?42:36);if(session.state.delivered.includes(o.id)){const op=icon.getComponent(UIOpacity)||icon.addComponent(UIOpacity);op.opacity=90;label(card,'✓',x,y,70,70,40,'#2A9349').isBold=true;}});}}

 renderOrders();
 const board=new Demo2BoardView(n,level,art,session.state,perform);board.node.setSiblingIndex(n.children.length-1);
 const chef=uiNode(n,'Demo2Hamster',-280,-521,102,102),chefPlayer=animationPlayer(chef,102,102);actors.push(chefPlayer);void playKitchenClip(chefPlayer,'hamster/idle_empty',true);
 art.image(n,'Demo2Washer','washer-conveyor',240,-521,180,60);
 rect(n,'Demo2InstructionBacking',-10,-515,390,32,'#FFF1D5',12);
 const instruction=label(n,'长按取出食物 · 直接拖整盘',-10,-515,380,34,18,'#704421');
 rect(n,'Demo2FeedbackBacking',0,-557,670,30,'#FFF1D5',12);
 const feedback=label(n,'出口颜色匹配餐盒；空盘不限制颜色',0,-557,660,28,17,'#704421');
 const undo=action(n,'撤回',-205,-592,110,110,()=>{if(paused||dead)return;if(session.undo()){sound.play('undo');board.render(session.state);renderOrders();feedback.string='已撤回移动 / 装盘';}else ui.notify('没有可撤回的移动；已出餐或送洗不能撤回。');});breakfastSurface(undo,'v13/ui/undo_button');for(const l of undo.getComponentsInChildren(Label))l.node.active=false;
 action(n,'重试本关',0,-594,230,66,()=>{if(!dead)retry();},'#827B68');action(n,'关卡列表',224,-594,210,66,select,'#827B68');
 const pause=action(n,'',305,520,64,64,()=>{if(dead||paused||session.state.won)return;paused=true;board.setEnabled(false);actors.forEach(p=>p.pause());tweens.forEach(t=>t.pause());sound.pause();modal=choicePanel(n,'休息一下','Demo2没有步数和时间限制。',[{title:'继续试玩',run:()=>{modal=null;paused=false;board.setEnabled(true);actors.forEach(p=>p.resume());tweens.forEach(t=>t.resume());sound.resume();}},{title:'重试本关',run:retry},{title:'返回选关',run:select}],false,{formal:true});});breakfastSurface(pause,'v13/ui/pause_button');
 const later=(fn:()=>void,delay:number)=>{const t=setTimeout(()=>{timers.delete(t);if(!dead)fn();},delay);timers.add(t);};
 const animateDelivery=(before:State,id:string,returned:boolean)=>{const e=before.entities.find(x=>x.id===id);if(!e)return;const b=footprintBounds(e.shape),p=gridPoint(e.x,e.y,level.width,level.height,unit),fx=uiNode(n,'Demo2DeliveryEffect',p.x+(b.w-1)*unit/2,metrics.y+p.y-(b.h-1)*unit/2,b.w*unit,b.h*unit);poly(fx,e.shape,unit*.65,e.color?COLORS[e.color]:'#A0A5AA',returned);for(const f of before.foods.filter(f=>f.carrierId===id)){const fb=footprintBounds(f.shape);art.image(fx,'DeliveryFood',FOOD_KEYS[f.kind],(f.x-e.x+fb.w/2-b.w/2)*unit*.65,(b.h/2-(f.y-e.y+fb.h/2))*unit*.65,fb.w*unit*.62,fb.h*unit*.62);}
 const deliveredId=session.state.delivered.find(id=>!before.delivered.includes(id)),guest=guests[orderGuest.get(deliveredId||'')||0];const destination=returned?new Vec3(240,-521,0):new Vec3(guest.x,335,0);const anim=tween(fx).to(.5,{position:destination,scale:new Vec3(.15,.15,1)},{easing:'quadIn'}).call(()=>{tweens.delete(anim);if(isValid(fx))fx.destroy();});tweens.add(anim);anim.start();};
 function perform(a:Action):void{if(dead||paused||session.state.won)return;const before=session.state,result=applyAction(level,before,a);if(result.state===before){sound.play('blocked');feedback.string='无法到达：请检查通路、落点形状和订单';return;}session.move(a);board.render(session.state);renderOrders();
  if(result.events.includes('delivered')){sound.play('order_done');animateDelivery(before,a.entityId,false);feedback.string='出餐成功！其余订单可自由选择';const deliveredId=session.state.delivered.find(id=>!before.delivered.includes(id)),slot=guests[orderGuest.get(deliveredId||'')||0];if(slot){void playKitchenClip(slot.player,'customers/'+slot.species+'/celebrate',false).then(()=>{if(!dead){void playKitchenClip(slot.player,'customers/'+slot.species+'/idle',true);if(paused)slot.player.pause();}});}}
  else if(result.events.includes('returned')){sound.play('fly');animateDelivery(before,a.entityId,true);feedback.string='空盘已送洗，通道腾出来了';}
  else{sound.pickup();const f=session.state.foods.find(f=>f.id===a.entityId);feedback.string=f?.carrierId?'食物已装入；直接拖整盘，长按食物可取出':'移动完成；空盘仍然占位';}
  if(session.state.won){board.setEnabled(false);sound.play('win');try{store.win(level.id);}catch(e){ui.notify('通关有效，但Demo2进度未保存：'+String(e));}void playKitchenClip(chefPlayer,'hamster/win',false);later(()=>{modal=choicePanel(n,'下班啦！',`完成 ${level.orders.length}份订单\n空盘送洗 ${session.state.returned.length}个 · 不限步数`,[{title:level.id===5?'返回 Demo2关卡':'下一关',run:next},{title:'重玩本关',run:retry},{title:'关卡列表',run:select}],false,{formal:true});},700);}
 }
 sound.play('start');
 return{node:n,dispose:()=>{if(dead)return;dead=true;board.dispose();timers.forEach(clearTimeout);timers.clear();tweens.forEach(t=>t.stop());tweens.clear();actors.forEach(p=>p.stop());sound.dispose();art.dispose();}};
}
