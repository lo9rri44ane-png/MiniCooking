import type {KitchenSound} from './KitchenSound';
import {Node,Sprite,UITransform,UIOpacity,Vec3,isValid} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastImage} from './BreakfastArt';
import type {KitchenActors} from './KitchenActors';
import {KitchenPresentationConfig as timing} from './KitchenPresentationConfig';
/** Transient presentation only. Callers retain all rule and input authority. */
export class CookingPresentation {
 private dead=false;private transient=new Set<Node>();private cancellations=new Set<()=>void>();
 constructor(private effects:Node,private actors:KitchenActors,private sound?:KitchenSound){}
 dispose():void{this.dead=true;for(const cancel of Array.from(this.cancellations))cancel();for(const node of this.transient)if(isValid(node,true))node.destroy();this.transient.clear();}
 private alive(valid:()=>boolean):boolean{return !this.dead&&isValid(this.effects)&&valid();}
 private create(name:string,w:number,h:number):Node{const node=uiNode(this.effects,name,0,0,w,h);this.transient.add(node);return node;}
 private remove(node:Node):void{this.transient.delete(node);if(isValid(node,true))node.destroy();}
 private image(parent:Node,name:string,path:string,x:number,y:number,w:number,h:number):Node{const image=breakfastImage(parent,name,path,x,y,w,h);const sprite=image.getChildByName('ArtVisual')?.getComponent(Sprite);if(sprite)sprite.trim=false;return image;}
 private point(node:Node,above=false):Vec3{const point=this.effects.getComponent(UITransform)!.convertToNodeSpaceAR(node.worldPosition);if(above){const height=node.getComponent(UITransform)?.height||0;point.y+=height*Math.abs(node.worldScale.y/this.effects.worldScale.y)*.55+18;}return point;}
 private wait(seconds:number,valid:()=>boolean,tick?:(fraction:number)=>void):Promise<boolean>{return new Promise(resolve=>{let done=false;const finish=(ok:boolean)=>{if(done)return;done=true;this.cancellations.delete(cancel);resolve(ok);};const cancel=()=>finish(false);this.cancellations.add(cancel);void this.actors.wait(seconds,t=>{if(done)return;if(!this.alive(valid)){finish(false);return;}tick?.(t);}).then(ok=>finish(ok&&this.alive(valid)),()=>finish(false));});}
 async work(device:Node,seconds:number,valid:()=>boolean):Promise<boolean>{
  if(!this.alive(valid)||!isValid(device))return false;
  const progress=this.create('CookingProgress',140,38),visual=device.getChildByName('DeviceArt'),base=visual?.scale.clone();
  try{
   this.image(progress,'CookingProgressTrack','ui/work_track',0,0,140,45);
   const fillNode=this.image(progress,'CookingProgressFill','ui/work_fill',0,0,118,24),fill=fillNode.getChildByName('ArtVisual')!.getComponent(Sprite)!;
   fill.trim=false;fill.type=Sprite.Type.FILLED;fill.fillType=Sprite.FillType.HORIZONTAL;fill.fillStart=0;fill.fillRange=0;
   return await this.wait(seconds,()=>valid()&&isValid(device),t=>{progress.setPosition(this.point(device,true));fill.fillRange=t;if(visual&&base&&isValid(visual)){const wave=Math.sin(t*Math.PI*12);visual.setScale(base.x*(1+.055*wave),base.y*(1-.04*wave),base.z);}});
  }finally{if(visual&&base&&isValid(visual))visual.setScale(base);this.remove(progress);}
 }
 async deliver(device:Node,bubble:Node,recipeId:string,valid:()=>boolean,onArrive?:()=>void):Promise<boolean>{
  if(!this.alive(valid)||!isValid(device)||!isValid(bubble))return false;
  const dish=this.create('PreparedDish',70,70),checks:Node[]=[];
  try{
   this.image(dish,'PreparedDishImage','dishes/'+recipeId,0,0,70,70);const servingPoint=this.point(device);servingPoint.y+=(device.getComponent(UITransform)?.height||0)*.18*Math.abs(device.worldScale.y/this.effects.worldScale.y);dish.setPosition(servingPoint);
   if(!await this.wait(timing.preparedDishHoldSeconds,valid))return false;
   this.sound?.play('fly');const from=dish.position.clone(),target=bubble.getChildByName('DishArt')||bubble;
   if(!await this.wait(timing.dishFlightSeconds,()=>valid()&&isValid(target),t=>{const to=this.point(target),x=from.x+(to.x-from.x)*t,y=from.y+(to.y-from.y)*t+Math.sin(Math.PI*t)*timing.dishFlightArcHeight;dish.setPosition(x,y);const k=1-.18*t;dish.setScale(k,k,1);}))return false;
   this.remove(dish);if(!this.alive(valid))return false;onArrive?.();
   const targets=[target,...bubble.children.filter(n=>n.name.startsWith('OrderIngredient-')&&n.activeInHierarchy)];
   targets.forEach((node,index)=>{const size=index===0?54:24,check=this.create(index===0?'OrderCompleteCheck':'OrderCompleteCheckIngredient-'+index,size,size);check.setPosition(this.point(node));this.image(check,'CheckImage','ui/order_check',0,0,size,size);const opacity=check.getComponent(UIOpacity)||check.addComponent(UIOpacity);opacity.opacity=0;check.setScale(0,0,1);checks.push(check);});
   if(!await this.wait(timing.deliveryCheckPopSeconds,valid,t=>{const k=t<.45?t/.45:t<.7?1+(t-.45)/.25*.1:1.1-(t-.7)/.3*.1;for(const check of checks){check.setScale(k,k,1);check.getComponent(UIOpacity)!.opacity=Math.min(255,t*850);}}))return false;
   return await this.wait(timing.deliveryCheckHoldSeconds,valid);
  }finally{this.remove(dish);checks.forEach(node=>this.remove(node));}
 }
}
