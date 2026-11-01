import {Button,Color,Label,LabelOutline,Node} from 'cc';
import {uiNode,playUIFeedback} from '../../framework/cocos/UIService';
import {breakfastImage} from './BreakfastArt';
import {label} from './KitchenUI';

/** Permanent HUD control. Its callback retains the existing order-details action. */
export class CustomerCounterView {
 readonly node:Node;private value:Label;
 constructor(parent:Node,onOpen:()=>void,x=0,y=263){
  this.node=uiNode(parent,'CustomerCounter',x,y,130,44);
  breakfastImage(this.node,'CustomerSilhouette','v18/ui/customer_silhouette',-32,0,38,38);
  this.value=label(this.node,'×0',21,0,72,42,27,'#FFF5D4');this.value.isBold=true;
  const outline=this.value.node.getComponent(LabelOutline)||this.value.node.addComponent(LabelOutline);outline.color=new Color(112,68,33);outline.width=2;
  this.node.addComponent(Button);this.node.on(Button.EventType.CLICK,()=>{playUIFeedback();onOpen();});
 }
 update(remaining:number):void{const text='×'+Math.max(0,Math.floor(remaining));if(this.value.string!==text)this.value.string=text;}
 dispose():void{if(this.node.isValid)this.node.destroy();}
}
