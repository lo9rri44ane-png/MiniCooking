import type {KitchenSound} from './KitchenSound';
import {Node,Graphics,Label,UIOpacity,Vec3,Mask,Button} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {animationPlayer,playKitchenClip} from './KitchenAnimationLibrary';
import {序列帧播放器} from '../../framework/cocos/序列帧播放器';
import {KitchenPresentationConfig as timing} from './KitchenPresentationConfig';
/** Owns visual actors and cancellable presentation time, never game rules. */
export class KitchenActors {
 private phases:('empty'|'appearing'|'ready'|'leaving')[]=['empty','empty','empty'];private visible=[false,false,false];private generations=[0,0,0];private dead=false;private paused=false;private players:序列帧播放器[]=[];private waits=new Set<(ok:boolean)=>void>();
 readonly guests:Node[]=[];readonly bubbles:Node[]=[];readonly smoke:Node[]=[];private identities:(number|undefined)[]=[];
 constructor(private chef:Node,private root:Node,private chefSize:number,private sound?:KitchenSound){
  const old=chef.getChildByName('ArtVisual');if(old)old.active=false;const p=animationPlayer(chef,chefSize,chefSize);p.canvasAnchorY=timing.chefCanvasAnchorY;this.players.push(p);
  for(let i=0;i<3;i++){const x=[-203,3,205][i],guest=uiNode(root,'CustomerActor-'+i,x,timing.customerY,timing.customerWidth,timing.customerHeight),smoke=uiNode(root,'CartoonSmoke-'+i,x,timing.customerY,timing.smokeWidth,timing.smokeHeight);this.guests.push(guest);this.smoke.push(smoke);const hud=root.getChildByName('HUD');if(hud){guest.setSiblingIndex(hud.getSiblingIndex());smoke.setSiblingIndex(hud.getSiblingIndex());}guest.active=false;smoke.active=false;this.players.push(animationPlayer(guest,timing.customerWidth,timing.customerHeight),animationPlayer(smoke,timing.smokeWidth,timing.smokeHeight));}
  const light=uiNode(root,'SunlightOverlay',0,-37,620,600);const opacity=light.getComponent(UIOpacity)||light.addComponent(UIOpacity);opacity.opacity=0;
  const previousBeam=light.getChildByName('SunlightBeam');if(previousBeam)previousBeam.active=false;
  const mask=light.getComponent(Mask)||light.addComponent(Mask);mask.type=Mask.Type.GRAPHICS_STENCIL;
  const g=light.getComponent(Graphics)||light.addComponent(Graphics);g.clear();g.moveTo(-265,287);g.lineTo(263,287);g.lineTo(295,-285);g.lineTo(-287,-285);g.close();g.fill();
  const lightPlayer=animationPlayer(light,620,600);lightPlayer.blendFrames=true;this.players.push(lightPlayer);void playKitchenClip(lightPlayer,'environment/sunlight',true);
  this.ensureSunlightLayer();
  const fade=async()=>{while(!this.dead){const ok=await this.wait(timing.sunlightFadeSeconds,t=>{opacity.opacity=Math.sin(t*Math.PI)**2*timing.sunlightMaxOpacity;});if(!ok)return;}};void fade();

 }
 /** Scene art below sunlight; orders, buttons and transient delivery UI above it. */
 ensureSunlightLayer():void{const light=this.root.getChildByName('SunlightOverlay');if(!light)return;const scene=[this.root.getChildByName('Board'),...this.guests,...this.smoke].filter((n):n is Node=>!!n);const highest=Math.max(...scene.map(n=>n.getSiblingIndex()));light.setSiblingIndex(highest+1);const hud=this.root.getChildByName('HUD'),effects=this.root.getChildByName('Effects');if(hud)hud.setSiblingIndex(light.getSiblingIndex()+1);if(effects)effects.setSiblingIndex((hud||light).getSiblingIndex()+1);for(const node of [...this.root.children])if(node.getComponent(Button))node.setSiblingIndex(this.root.children.length-1);}
 bubbleVisible(customer:number):boolean{const slot=this.identities.indexOf(customer);return slot>=0&&this.visible[slot];}
 phase(slot:number):string{return this.phases[slot];}
 resetGuests():void{this.phases=['empty','empty','empty'];this.visible=[false,false,false];this.generations=this.generations.map(n=>n+1);for(const node of [...this.guests,...this.smoke]){node.getComponent(序列帧播放器)?.stop();node.active=false;}this.identities=[];this.bubbles=[];}
 pause():void{this.paused=true;this.players.forEach(p=>p.pause());}resume():void{this.paused=false;this.players.forEach(p=>p.resume());}
 dispose():void{this.dead=true;this.players.forEach(p=>p.stop());for(const stop of this.waits)stop(false);this.waits.clear();}
 wait(seconds:number,onTick?:(fraction:number)=>void):Promise<boolean>{return new Promise(resolve=>{let elapsed=0,last=Date.now(),timer:ReturnType<typeof setTimeout>;const stop=(ok:boolean)=>{clearTimeout(timer);this.waits.delete(stop);resolve(ok);};this.waits.add(stop);const tick=()=>{if(this.dead){stop(false);return;}const now=Date.now();if(!this.paused)elapsed+=(now-last)/1000;last=now;onTick?.(Math.min(1,elapsed/Math.max(seconds,.001)));if(elapsed>=seconds){stop(true);return;}timer=setTimeout(tick,16);};tick();});}
 hamster(key:string,loop=true,duration?:number):Promise<boolean>{return playKitchenClip(this.players[0],'hamster/'+key,loop,duration);}
 idle(count:number):void{void this.hamster(count===0?'idle_empty':count<=3?'idle_small':'idle_full');}
 async appear(slot:number,customer:number,bubble:Node):Promise<boolean>{
  const generation=++this.generations[slot],valid=()=>!this.dead&&this.generations[slot]===generation;
  this.identities[slot]=customer;this.bubbles[slot]=bubble;this.phases[slot]='appearing';this.visible[slot]=false;const guest=this.guests[slot],smoke=this.smoke[slot],species=['dog','rabbit','bear'][slot];
  this.sound?.play('guest_in');smoke.active=guest.active=true;
  const results=await Promise.all([playKitchenClip(animationPlayer(smoke,timing.smokeWidth,timing.smokeHeight),'fx/smoke_appear',false,timing.smokeAppearSeconds),playKitchenClip(animationPlayer(guest,timing.customerWidth,timing.customerHeight),'customers/'+species+'/appear',false,timing.customerAppearSeconds)]);
  if(!valid()||results.some(ok=>!ok))return false;smoke.active=false;
  void playKitchenClip(animationPlayer(guest,timing.customerWidth,timing.customerHeight),'customers/'+species+'/idle',true);this.sound?.play('bubble');bubble.active=true;this.visible[slot]=true;
  const opacity=bubble.getComponent(UIOpacity)||bubble.addComponent(UIOpacity),base=bubble.scale.clone();opacity.opacity=255;
  const ok=await this.wait(timing.customerBubbleSeconds,t=>{if(!valid())return;const q=.82+.18*Math.min(1,t*1.4);bubble.setScale(base.x*q,base.y*q,1);});if(valid())bubble.setScale(base);if(ok&&valid())this.phases[slot]='ready';return ok&&valid();
 }
 async leave(customer:number):Promise<boolean>{
  const slot=this.identities.indexOf(customer);if(slot<0)return true;const generation=++this.generations[slot],valid=()=>!this.dead&&this.generations[slot]===generation;
  this.phases[slot]='leaving';const bubble=this.bubbles[slot],guest=this.guests[slot],smoke=this.smoke[slot],species=['dog','rabbit','bear'][slot];
  if(bubble){const base=bubble.scale.clone(),opacity=bubble.getComponent(UIOpacity)||bubble.addComponent(UIOpacity);await this.wait(timing.customerBubbleSeconds,t=>{if(!valid())return;bubble.setScale(base.x*(1-t*.2),base.y*(1-t*.2),1);opacity.opacity=255*(1-t);});if(!valid())return false;bubble.active=false;this.visible[slot]=false;bubble.setScale(base);opacity.opacity=255;}
  if(!valid())return false;
  this.sound?.play(species==='dog'?'guest_happy_dog':'order_done');const cheer=await playKitchenClip(animationPlayer(guest,timing.customerWidth,timing.customerHeight),'customers/'+species+'/celebrate',false,timing.customerCheerSeconds);if(!valid()||!cheer)return false;
  this.sound?.play('guest_out');smoke.active=true;
  const results=await Promise.all([playKitchenClip(animationPlayer(guest,timing.customerWidth,timing.customerHeight),'customers/'+species+'/disappear',false,timing.customerDisappearSeconds),playKitchenClip(animationPlayer(smoke,timing.smokeWidth,timing.smokeHeight),'fx/smoke_disappear',false,timing.smokeDisappearSeconds)]);
  if(!valid()||results.some(ok=>!ok))return false;guest.active=smoke.active=false;this.identities[slot]=undefined;this.phases[slot]='empty';return true;
 }
 slot(customer:number):number{return this.identities.indexOf(customer);}
 emptySlot():number{return this.identities.findIndex(id=>id===undefined);}
}
