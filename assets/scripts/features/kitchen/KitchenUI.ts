import {inBattleUI,battleButtonKey,markFormalControls,usesFormalControls} from './BattleUI';
import {gmAccess} from './GMAccess';
import {breakfastImage,breakfastSurface,hasBreakfastArt,breakfastAspect} from './BreakfastArt';
import {PrefabSlot} from '../../framework/cocos/PrefabSlot';
import {prefabNode} from '../../framework/cocos/PrefabFactory';
import {Node,UITransform,Graphics,Color,Label,Button,Layers,BlockInputEvents,Sprite,LabelOutline} from 'cc';
import {uiNode,playUIFeedback} from '../../framework/cocos/UIService';
import {EnergyBank} from './Energy';
import {setTextStyle,setButtonTextStyle} from '../../framework/cocos/TextStyles';
export const palette={bg:'#F5EEDC',ink:'#39382F',muted:'#7D7968',green:'#297D64',gold:'#E6AF46',floor:'#EEE0C2',floor2:'#F8EDDB',wall:'#938771',white:'#FFFCF3'};
export const food:Record<string,{name:string;short:string;color:string}>={leaf:{name:'生菜',short:'菜',color:'#79B56A'},tomato:{name:'番茄',short:'茄',color:'#E47C62'},bread:{name:'面包',short:'包',color:'#DCAD65'},cheese:{name:'芝士',short:'酪',color:'#F0CD62'},water:{name:'水',short:'水',color:'#87BFCC'},berry:{name:'莓果',short:'莓',color:'#B788BA'},meat:{name:'牛肉',short:'肉',color:'#C88D79'},egg:{name:'鸡蛋',short:'蛋',color:'#F0D98A'},milk:{name:'牛奶',short:'奶',color:'#D6D5C2'},coffee:{name:'咖啡豆',short:'咖',color:'#9C7764'},fish:{name:'鱼肉',short:'鱼',color:'#DFAD9D'},rice:{name:'米饭',short:'饭',color:'#E4CF9E'}};
export const deviceColors:Record<string,string>={table:'#A18261',pan:'#A18261',drink:'#6DA6B7'};
export const color=(hex:string)=>new Color().fromHEX(hex);
export function rect(parent:Node,name:string,x:number,y:number,w:number,h:number,hex:string,radius=15):Node{const n=uiNode(parent,name,x,y,w,h),g=n.getComponent(Graphics)||n.addComponent(Graphics);g.clear();if(n.getComponent(Sprite)?.spriteFrame){g.enabled=false;return n;}if(!n.getComponent(PrefabSlot)?.preserveStyle)g.fillColor=color(hex);g.roundRect(-w/2,-h/2,w,h,radius);g.fill();return n;}
export function label(parent:Node,value:string,x:number,y:number,w:number,h=45,size=23,hex=palette.ink):Label{const n=uiNode(parent,'Label',x,y,w,h),l=n.getComponent(Label)||n.addComponent(Label);l.string=value;if(!n.getComponent(PrefabSlot)?.preserveStyle){setTextStyle(l,size);l.color=color(hex);}l.horizontalAlign=Label.HorizontalAlign.CENTER;l.verticalAlign=Label.VerticalAlign.CENTER;l.overflow=Label.Overflow.SHRINK;return l;}
export function action(parent:Node,title:string,x:number,y:number,w:number,h:number,fn:()=>void,hex=palette.green,prefabName='Action-'+title):Node{const tone=hex===palette.green?'secondary':hex==='#827B68'?'neutral':'primary',legacyKey='v9/ui/'+(w/h<4.5&&w/h>1.5?'compact_':'button_')+tone,key=usesFormalControls(parent)&&w/h>1.5&&hasBreakfastArt(battleButtonKey(title))?battleButtonKey(title):legacyKey;const styled=prefabName!=='EnergyWidget'&&w/h>1.5&&hasBreakfastArt(key);if(styled){const ratio=breakfastAspect(key),fit=Math.min(w/ratio,h);w=ratio*fit;h=fit;}const n=rect(parent,prefabName,x,y,w,h,hex);if(styled)breakfastSurface(n,key);const formal=usesFormalControls(parent)&&key.startsWith('v13/');const caption=label(n,title,formal?w*.1:0,0,formal?w-54:w-24,h-6,Math.min(28,h*.44),styled?'#704421':palette.white);if(formal)caption.enableWrapText=false;if(styled)setButtonTextStyle(caption,Math.min(w<160?20:w<300?24:28,h*.44),tone!=='neutral');if(!n.getComponent(Button))n.addComponent(Button);n.on(Button.EventType.CLICK,()=>{playUIFeedback();fn();});return n;}

export function pageHeading(parent:Node,value:string,y=510):void{breakfastImage(parent,'PageHeading','v9/ui/banner',0,y,520,104);const title=label(parent,value,0,y-4,420,54,34,'#754321');setTextStyle(title,34,true);const stroke=title.node.getComponent(LabelOutline)||title.node.addComponent(LabelOutline);stroke.color=color('#FFF9E9');stroke.width=1;}

export function root(name:string):Node{const n=prefabNode(name);n.layer=Layers.Enum.UI_2D;(n.getComponent(UITransform)||n.addComponent(UITransform)).setContentSize(720,1280);rect(n,'Background',0,0,720,1280,palette.bg,0).setSiblingIndex(0);return n;}
export function clear(n:Node):void{for(const c of [...n.children]){n.removeChild(c);c.destroy();}}
interface Choice {title:string;run:()=>void;}
export function choicePanel(parent:Node,title:string,body:string,options:Choice[],close=true,visual?:{energyValue?:string;formal?:boolean}):Node{
 const panel=rect(parent,'ChoicePanel',0,0,720,1280,'#000000',0),g=panel.getComponent(Graphics)!;g.clear();g.fillColor=new Color(35,25,15,165);g.rect(-360,-640,720,1280);g.fill();panel.getComponent(BlockInputEvents)||panel.addComponent(BlockInputEvents);
 const formal=inBattleUI(parent)||!!visual?.formal;if(formal)markFormalControls(panel);const energy=formal&&title==='体力恢复',energyWide=energy&&options.length===1,dense=formal&&!energy&&options.length>=4;
 breakfastImage(panel,'ChoiceArt',formal?'v13/ui/dialog_panel':'v9/ui/panel',0,0,600,768);
 const heading=label(panel,title,0,290,450,60,title.length>10?29:34,'#FFF9E8');heading.isBold=true;const outline=heading.node.getComponent(LabelOutline)||heading.node.addComponent(LabelOutline);outline.color=color('#75431E');outline.width=3;
 label(panel,body,0,energy?(energyWide?-60:0):dense?200:185,490,energyWide?120:dense?60:110,22,'#704421');
 if(energy&&hasBreakfastArt('v13/ui/energy_illustration')){breakfastImage(panel,'EnergyIllustration','v13/ui/energy_illustration',0,energyWide?130:155,energyWide?450:350,energyWide?210:160);if(visual?.energyValue){const value=label(panel,visual.energyValue,energyWide?-100:-78,energyWide?140:160,135,45,32,'#FFF9E8');value.isBold=true;const stroke=value.getComponent(LabelOutline)||value.addComponent(LabelOutline);stroke.color=color('#8A4D22');stroke.width=2;}}
 const count=options.length+(close&&!formal?1:0),gap=energy?(energyWide?120:68):dense?Math.min(94,440/(count-1)):count>6?52:count>4?60:74,top=energy?(energyWide?-255:-90):dense?110:50;
 options.forEach((o,i)=>action(panel,o.title,0,top-i*gap,400,gap-10,()=>{panel.destroy();o.run();}));
 if(close&&formal){const x=action(panel,'',248,294,60,60,()=>panel.destroy(),'#827B68','ChoiceClose');breakfastSurface(x,'v13/ui/close_button');}
 else if(close)action(panel,'关闭',0,top-options.length*gap,350,gap-10,()=>panel.destroy(),'#827B68');
 return panel;
}

export function energyWidget(parent:Node,bank:EnergyBank,x=0,y=600,width=240):void{
 const height=Math.min(54,width/4.22),button=action(parent,'',x,y,width,height,()=>{
  let detail='',energyValue='--/10';try{const state=bank.snapshot();energyValue=bank.error?'--/10':state.value+'/10';const seconds=Math.ceil(state.remainingMs/1000);detail=bank.error?'体力存档异常，原存档已保留。':state.value===10?'体力已满，可以继续开工。':`体力 ${state.value}/10 · 下次恢复 ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;}catch{detail='体力存档读取失败，请重试。';}
  choicePanel(parent,'体力恢复',detail+'\n每10分钟恢复1点；失败或退出扣1点。',[{title:'知道了',run:()=>{}},
   ...(gmAccess.enabled?[{title:'体力 +1 · GM',run:()=>{try{bank.addGM(1);}catch(e){console.warn(String(e));}update();}},
   {title:'体力 +5 · GM',run:()=>{try{bank.addGM(5);}catch(e){console.warn(String(e));}update();}},
   {title:'体力补满 · GM',run:()=>{try{bank.addGM(10);}catch(e){console.warn(String(e));}update();}}]:[])
  ],true,{energyValue,formal:true});
 },'#A27852','EnergyWidget');
 if(hasBreakfastArt('v9/ui/energy'))breakfastSurface(button,'v9/ui/energy');const title=button.getComponentInChildren(Label)!;title.node.setPosition(width*.06,0);title.node.getComponent(UITransform)!.setContentSize(width*.54,height-6);title.fontSize=width<220?20:24;title.lineHeight=28;title.isBold=true;title.color=color('#754321');
 function update():void{try{const value=bank.snapshot();title.string=bank.error?'存档异常':`${value.value}/10`;}catch{title.string='保存失败';}}
 update();const timer=setInterval(update,1000);parent.once(Node.EventType.NODE_DESTROYED,()=>clearInterval(timer));
}

export function pageArt(n:Node,kind:'home'|'notebook'='notebook'):void{if(hasBreakfastArt('v9/backgrounds/'+kind))breakfastImage(n,'PageArt','v9/backgrounds/'+kind,0,0,720,1280).setSiblingIndex(1);}
