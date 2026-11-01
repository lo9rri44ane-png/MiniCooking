import {battleButtonKey} from './BattleUI';
import {Node,Graphics,Color,Label,LabelOutline,Button,BlockInputEvents,UIOpacity,isValid} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastImage,breakfastAspect} from './BreakfastArt';
import type {KitchenActors} from './KitchenActors';
import {setTextStyle} from '../../framework/cocos/TextStyles';
export interface KitchenDialogOptions {
 kind:'pause'|'fail'|'win';title:string;body:string;
 actions:{title:string;run:()=>void;tone?:'primary'|'secondary'|'green'|'gold'}[];
 onClose?:()=>void;
}
function text(parent:Node,name:string,value:string,x:number,y:number,w:number,h:number,size:number,white=false):Label{
 const n=uiNode(parent,name,x,y,w,h),label=n.getComponent(Label)||n.addComponent(Label);n.setSiblingIndex(parent.children.length-1);label.string=value;setTextStyle(label,size,white||size>=28);label.color=white?new Color(255,255,246,255):new Color(112,68,33,255);label.horizontalAlign=Label.HorizontalAlign.CENTER;label.verticalAlign=Label.VerticalAlign.CENTER;label.overflow=Label.Overflow.SHRINK;
 if(white){const stroke=n.getComponent(LabelOutline)||n.addComponent(LabelOutline);stroke.color=new Color(120,66,31,255);stroke.width=3;}return label;
}
/** Sprite-only fixed-aspect card; callers own pause/failure semantics and closing. */
export function buildKitchenDialog(parent:Node,options:KitchenDialogOptions):Node{
 const modal=uiNode(parent,options.kind==='pause'?'PausePanel':options.kind==='win'?'WinResult':'FailResult',0,0,720,1280);modal.name='Modal';modal.getComponent(BlockInputEvents)||modal.addComponent(BlockInputEvents);const old=modal.getComponent(Graphics);if(old)old.enabled=false;
 const shade=uiNode(modal,'DialogShade',0,0,720,1280),g=shade.getComponent(Graphics)||shade.addComponent(Graphics);g.clear();g.fillColor=new Color(45,34,26,150);g.rect(-360,-640,720,1280);g.fill();shade.getComponent(BlockInputEvents)||shade.addComponent(BlockInputEvents);
 const card=uiNode(modal,'DialogCard',0,0,560,690);card.setSiblingIndex(modal.children.length-1);breakfastImage(card,'DialogBackground','v13/ui/dialog_panel',0,0,560,690);
 text(card,'DialogTitle',options.title,0,266,430,65,options.title.length>8?30:36,true);
 text(card,'DialogBody',options.body,0,140,420,120,21);
 const count=options.actions.length,gap=count>4?9:12,height=count>4?70:count>3?82:98,top=20;
 options.actions.forEach((item,index)=>{const key=battleButtonKey(item.title);const button=uiNode(card,'Action-'+item.title,0,top-index*(height+gap),height*breakfastAspect(key),height);breakfastImage(button,'DialogButtonImage',key,0,0,height*breakfastAspect(key),height);text(button,'Label',item.title,18,0,Math.min(340,height*breakfastAspect(key)-80),height-8,26,true).enableWrapText=false;button.getComponent(Button)||button.addComponent(Button);button.on(Button.EventType.CLICK,()=>{if(isValid(modal,true))item.run();});});
 if(options.onClose){const close=uiNode(card,'DialogClose',222,269,64,64);breakfastImage(close,'DialogCloseImage','v13/ui/close_button',0,0,64,64);close.getComponent(Button)||close.addComponent(Button);close.on(Button.EventType.CLICK,()=>{if(isValid(modal,true))options.onClose?.();});}
 return modal;
}
/** Cancellable actor-clock banner. No rule mutations and no input lock. */
export class EndBanner {
 private dead=false;private epoch=0;private nodes=new Set<Node>();private cancels=new Set<()=>void>();
 constructor(private effects:Node,private actors?:Pick<KitchenActors,'wait'>){}
 dispose():void{this.dead=true;this.epoch++;for(const cancel of Array.from(this.cancels))cancel();for(const node of this.nodes)if(isValid(node,true))node.destroy();this.nodes.clear();}
 private wait(seconds:number,tick:(fraction:number)=>void):Promise<boolean>{
  if(this.actors)return this.actors.wait(seconds,tick);
  return new Promise(resolve=>{const start=Date.now();let ended=false;const finish=(ok:boolean)=>{if(ended)return;ended=true;clearInterval(timer);this.cancels.delete(cancel);resolve(ok);};const cancel=()=>finish(false);const timer=setInterval(()=>{if(this.dead){finish(false);return;}const fraction=Math.min(1,(Date.now()-start)/(seconds*1000));tick(fraction);if(fraction===1)finish(true);},16);this.cancels.add(cancel);});
 }
 async play(value:string,won:boolean,valid:()=>boolean,subtitle?:string):Promise<boolean>{
  const epoch=++this.epoch;for(const cancel of Array.from(this.cancels))cancel();for(const node of this.nodes)if(isValid(node,true))node.destroy();this.nodes.clear();
  const alive=()=>!this.dead&&epoch===this.epoch&&isValid(this.effects,true)&&valid();if(!alive())return false;
  const node=uiNode(this.effects,'EndResultBanner',won?-800:800,0,720,190);this.nodes.add(node);breakfastImage(node,'EndBannerImage','v13/ui/end_banner',0,0,720,190);text(node,'EndBannerTitle',value,0,subtitle?20:0,650,70,44,true);if(subtitle)text(node,'BannerSubtitle',subtitle,0,-35,650,36,20,true);const opacity=node.getComponent(UIOpacity)||node.addComponent(UIOpacity);opacity.opacity=255;
  const wait=(seconds:number,tick?:(fraction:number)=>void)=>new Promise<boolean>(resolve=>{let done=false;const finish=(ok:boolean)=>{if(done)return;done=true;this.cancels.delete(cancel);resolve(ok);};const cancel=()=>finish(false);this.cancels.add(cancel);void this.wait(seconds,t=>{if(done)return;if(!alive()){finish(false);return;}tick?.(t);}).then(ok=>finish(ok&&alive()),()=>finish(false));});
  try{const direction=won?-1:1;if(!await wait(.28,t=>{const eased=1-(1-t)**3;node.setPosition(direction*800*(1-eased),0);}))return false;if(!await wait(.18,t=>{const k=1+Math.sin(t*Math.PI)*.035;node.setScale(k,k,1);}))return false;if(!await wait(.55))return false;return await wait(.29,t=>{opacity.opacity=255*(1-t);node.setPosition(-direction*65*t,0);});}
  finally{this.nodes.delete(node);if(isValid(node,true))node.destroy();}
 }
}
