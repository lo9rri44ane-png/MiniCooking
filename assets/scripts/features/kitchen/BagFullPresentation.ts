import {Node,Graphics,Color,UIOpacity,isValid} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import type {KitchenActors} from './KitchenActors';
import {KitchenPresentationConfig as timing} from './KitchenPresentationConfig';
/** A cancellable warning above the bag. Owns no rule state or failure dialog. */
export class BagFullPresentation {
 private dead=false;
 private epoch=0;
 private glow:Node|null=null;
 private cancels=new Set<()=>void>();
 constructor(private effects:Node,private actors:KitchenActors){}
 private clear():void{if(this.glow&&isValid(this.glow,true))this.glow.destroy();this.glow=null;}
 dispose():void{this.dead=true;this.epoch++;for(const cancel of Array.from(this.cancels))cancel();this.clear();}
 async play(valid:()=>boolean):Promise<boolean>{
  const epoch=++this.epoch;for(const cancel of Array.from(this.cancels))cancel();this.clear();
  const alive=()=>!this.dead&&epoch===this.epoch&&isValid(this.effects)&&valid();
  if(!alive())return false;
  const node=uiNode(this.effects,'背包满微红柔光',0,-416,630,90);this.glow=node;
  const opacity=node.getComponent(UIOpacity)||node.addComponent(UIOpacity);opacity.opacity=0;
  const graphics=node.getComponent(Graphics)||node.addComponent(Graphics);
  // Soft outer halo and a faint center; the original bag sprites are untouched.
  for(const [spread,alpha]of [[14,35],[7,55],[0,80]]){
   graphics.fillColor=new Color(245,106,92,alpha);
   graphics.roundRect(-315-spread,-45-spread,630+spread*2,90+spread*2,24+spread);graphics.fill();
  }
  try{
   for(let pulse=0;pulse<2;pulse++){
    const ok=await new Promise<boolean>(resolve=>{
     let done=false;const finish=(value:boolean)=>{if(done)return;done=true;this.cancels.delete(cancel);resolve(value);};const cancel=()=>finish(false);this.cancels.add(cancel);
     void this.actors.wait(timing.fullBagPulseSeconds,t=>{if(done)return;if(!alive()){finish(false);return;}opacity.opacity=Math.sin(Math.PI*t)**2*timing.fullBagPulsePeakOpacity;}).then(ok=>finish(ok&&alive()),()=>finish(false));
    });
    if(!ok)return false;
   }
   return alive();
  }finally{if(isValid(node,true))node.destroy();if(this.glow===node)this.glow=null;}
 }
}
