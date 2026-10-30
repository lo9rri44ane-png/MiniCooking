import {PrefabSlot} from '../../framework/cocos/PrefabSlot';
import {prefabNode} from '../../framework/cocos/PrefabFactory';
import {Node,UITransform,Graphics,Color,Label,Button,Layers,BlockInputEvents,Sprite} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {EnergyBank} from './Energy';
export const palette={bg:'#F5EEDC',ink:'#39382F',muted:'#7D7968',green:'#297D64',gold:'#E6AF46',floor:'#EEE0C2',floor2:'#F8EDDB',wall:'#938771',white:'#FFFCF3'};
export const food:Record<string,{name:string;short:string;color:string}>={leaf:{name:'生菜',short:'菜',color:'#79B56A'},tomato:{name:'番茄',short:'茄',color:'#E47C62'},bread:{name:'面包',short:'包',color:'#DCAD65'},cheese:{name:'芝士',short:'酪',color:'#F0CD62'},water:{name:'水',short:'水',color:'#87BFCC'},berry:{name:'莓果',short:'莓',color:'#B788BA'},meat:{name:'牛肉',short:'肉',color:'#C88D79'},egg:{name:'鸡蛋',short:'蛋',color:'#F0D98A'},milk:{name:'牛奶',short:'奶',color:'#D6D5C2'},coffee:{name:'咖啡豆',short:'咖',color:'#9C7764'},fish:{name:'鱼肉',short:'鱼',color:'#DFAD9D'},rice:{name:'米饭',short:'饭',color:'#E4CF9E'}};
export const deviceColors:Record<string,string>={table:'#A18261',pan:'#A18261',drink:'#6DA6B7'};
export const color=(hex:string)=>new Color().fromHEX(hex);
export function rect(parent:Node,name:string,x:number,y:number,w:number,h:number,hex:string,radius=15):Node{const n=uiNode(parent,name,x,y,w,h),g=n.getComponent(Graphics)||n.addComponent(Graphics);g.clear();if(n.getComponent(Sprite)?.spriteFrame){g.enabled=false;return n;}if(!n.getComponent(PrefabSlot)?.preserveStyle)g.fillColor=color(hex);g.roundRect(-w/2,-h/2,w,h,radius);g.fill();return n;}
export function label(parent:Node,value:string,x:number,y:number,w:number,h=45,size=23,hex=palette.ink):Label{const n=uiNode(parent,'Label',x,y,w,h),l=n.getComponent(Label)||n.addComponent(Label);l.string=value;if(!n.getComponent(PrefabSlot)?.preserveStyle){l.fontSize=size;l.lineHeight=size+6;l.color=color(hex);}l.horizontalAlign=Label.HorizontalAlign.CENTER;l.verticalAlign=Label.VerticalAlign.CENTER;l.overflow=Label.Overflow.SHRINK;return l;}
export function action(parent:Node,title:string,x:number,y:number,w:number,h:number,fn:()=>void,hex=palette.green,prefabName='Action-'+title):Node{const n=rect(parent,prefabName,x,y,w,h,hex);label(n,title,0,0,w-12,h-4,22,palette.white);if(!n.getComponent(Button))n.addComponent(Button);n.on(Button.EventType.CLICK,fn);return n;}
export function root(name:string):Node{const n=prefabNode(name);n.layer=Layers.Enum.UI_2D;(n.getComponent(UITransform)||n.addComponent(UITransform)).setContentSize(720,1280);rect(n,'Background',0,0,720,1280,palette.bg,0).setSiblingIndex(0);return n;}
export function clear(n:Node):void{for(const c of [...n.children]){n.removeChild(c);c.destroy();}}
interface Choice {title:string;run:()=>void;}
export function choicePanel(parent:Node,title:string,body:string,options:Choice[]):Node{
 const panel=rect(parent,'ChoicePanel',0,0,720,1280,'#ECE3CE',0);if(!panel.getComponent(BlockInputEvents))panel.addComponent(BlockInputEvents);
 label(panel,title,0,440,650,70,34,palette.green);label(panel,body,0,342,640,110,22);
 options.forEach((o,i)=>action(panel,o.title,0,210-i*74,530,62,()=>{panel.destroy();o.run();}));
 action(panel,'关闭',0,210-options.length*74,350,58,()=>panel.destroy(),'#827B68');return panel;
}
export function energyWidget(parent:Node,bank:EnergyBank):void{
 const button=action(parent,'',0,600,240,54,()=>{
  choicePanel(parent,'体力 GM','体力上限10，每10分钟恢复1点。\n以下为本地调试功能。',[
   {title:'体力 +1',run:()=>{try{bank.addGM(1);}catch(e){console.warn(String(e));}update();}},
   {title:'体力 +5',run:()=>{try{bank.addGM(5);}catch(e){console.warn(String(e));}update();}},
   {title:'体力补满',run:()=>{try{bank.addGM(10);}catch(e){console.warn(String(e));}update();}}
  ]);
 },'#A27852','EnergyWidget');
 const title=button.getComponentInChildren(Label)!;title.fontSize=18;title.lineHeight=22;
 function update():void{try{const value=bank.snapshot();const seconds=Math.ceil(value.remainingMs/1000);title.string=bank.error?'体力存档异常（保留原件）':`体力 ${value.value}/10  ＋GM\n${value.value===10?'已满':`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} 后恢复1点`}`;}catch{title.string='体力保存失败，请重试';}}
 update();const timer=setInterval(update,1000);parent.once(Node.EventType.NODE_DESTROYED,()=>clearInterval(timer));
}
