import {SwipeDirectionCue} from './SwipeDirectionCue';
import {breakfastImage,breakfastSurface} from './BreakfastArt';
import {Node,Graphics,Color,Button,Vec3,Tween,tween,Label,LabelOutline,UIOpacity} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {TutorialFlow} from './TutorialFlow';
import type {GuideSequence,GuideEvent,GuideStep} from './TutorialFlow';
import type {Direction,Cell} from './Rules';
import {rect,label,action,palette} from './KitchenUI';
export interface GuideTarget {x:number;y:number;width:number;height:number;}
export interface TutorialOptions {
 target:(id:string)=>GuideTarget|undefined;
 move:(direction:Direction)=>Promise<boolean>;
 activate?:(target:string)=>Promise<boolean>;
 demo:()=>Cell[];
 completed:(id:string)=>void;
}
const directionText:Record<Direction,string>={right:'右',left:'左',up:'上',down:'下'};
function compactDialogues(sequences:GuideSequence[]):GuideSequence[]{return sequences.map(sequence=>({...sequence,steps:sequence.steps.flatMap(step=>{
 if(step.kind!=='dialog'||step.text.length<=52)return [step];const parts:GuideStep[]=[];let text=step.text;
 while(text.length>52){let cut=52;for(let i=51;i>=25;i--)if('。！；，'.includes(text[i])){cut=i+1;break;}parts.push({...step,text:text.slice(0,cut)});text=text.slice(cut);}if(text)parts.push({...step,text});return parts;
})}));}
export class TutorialView {
 readonly flow:TutorialFlow;private parent:Node;private options:TutorialOptions;private layer:Node|null=null;private stopped=false;private pending=false;private saved=new Set<string>();private animated:object[]=[];private message:Label|null=null;private swipeCue:SwipeDirectionCue|null=null;
 constructor(parent:Node,sequences:GuideSequence[],options:TutorialOptions){this.parent=parent;this.flow=new TutorialFlow(compactDialogues(sequences));this.options=options;this.render();}
 get active():boolean{return !this.stopped&&!this.flow.done;}
 private clear():void{this.swipeCue?.dispose();this.swipeCue=null;for(const n of this.animated)Tween.stopAllByTarget(n);this.animated=[];if(this.layer){this.layer.removeFromParent();this.layer.destroy();this.layer=null;}this.message=null;}
 stop():void{this.stopped=true;this.clear();}
 private advance(event:GuideEvent):void{if(!this.active||!this.flow.advance(event))return;for(const id of this.flow.completed)if(!this.saved.has(id)){this.saved.add(id);this.options.completed(id);}this.render();}
 private perform(operation:()=>Promise<boolean>,event:GuideEvent):void{
  if(this.pending||!this.active)return;this.pending=true;
  // Remove all guide UI while the real move or recipe action is being shown.
  if(this.layer)this.layer.active=false;
  void operation().then(ok=>{this.pending=false;if(!this.active)return;if(ok)this.advance(event);else{if(this.layer)this.layer.active=true;if(this.message)this.message.string='这次操作未完成，请在棋盘上按提示方向重新滑动。';}}).catch(()=>{this.pending=false;if(this.active&&this.layer)this.layer.active=true;});
 }
 swipe(direction:Direction):boolean{
  if(!this.active)return false;if(this.pending)return true;const step=this.flow.step!;
  if(step.kind!=='swipe')return true;
  if(step.direction!==direction){if(this.message)this.message.string=`请在棋盘上向${directionText[step.direction!]}滑动，其他方向不会扣步。`;return true;}
  this.perform(()=>this.options.move(direction),{type:'swipe',direction});return true;
 }
 private outline(layer:Node,target:GuideTarget,clickable:boolean,activate?:()=>void,name?:string):void{
  const hit=uiNode(layer,name||(clickable?'GuideTarget':'GuideSwipeOutline'),target.x,target.y,target.width+12,target.height+12),g=(hit.getComponent(Graphics)||hit.addComponent(Graphics));
  g.lineWidth=12;g.strokeColor=new Color(255,190,37,100);g.roundRect(-(target.width+12)/2,-(target.height+12)/2,target.width+12,target.height+12,12);g.stroke();
  g.lineWidth=6;g.strokeColor=new Color(255,201,48,255);g.roundRect(-(target.width+8)/2,-(target.height+8)/2,target.width+8,target.height+8,10);g.stroke();
  g.lineWidth=2;g.strokeColor=new Color(255,255,239,255);g.roundRect(-target.width/2,-target.height/2,target.width,target.height,9);g.stroke();
  const pulse=tween(hit).to(.5,{scale:new Vec3(1.018,1.018,1)}).to(.5,{scale:new Vec3(1,1,1)}).union().repeatForever();pulse.start();this.animated.push(hit);
  if(clickable){(hit.getComponent(Button)||hit.addComponent(Button));hit.on(Button.EventType.CLICK,()=>{if(!this.pending)activate?.();});}
 }
 private render():void{
  this.clear();if(!this.active)return;const step=this.flow.step!,sequence=this.flow.sequence!;
  const layer=uiNode(this.parent,'TutorialOverlay',0,0,720,1280);this.layer=layer;
  const target=(step.kind==='click'||step.kind==='swipe')&&step.target?this.options.target(step.target):undefined;
  if(target)this.outline(layer,step.kind==='swipe'?{...target,width:Math.max(1,target.width-42),height:Math.max(1,target.height-42)}:target,step.kind==='click',()=>this.perform(()=>this.options.activate?.(step.target!)||Promise.resolve(true),{type:'target',target:step.target!}));
  if(step.kind==='click'&&target){
   const aimX=target.x+Math.min(48,target.width*.18),aimY=target.y,dy=target.y>280?-58:58,dx=50;
   const arrow=uiNode(layer,'GuideClickArrow',aimX+dx,aimY+dy,92,62);breakfastImage(arrow,'ClickArrowArt','v15/ui/guide_arrow',0,0,92,62);arrow.angle=Math.atan2(-dy,-dx)*180/Math.PI;
   const opacity=arrow.getComponent(UIOpacity)||arrow.addComponent(UIOpacity);opacity.opacity=190;
   tween(arrow).to(.65,{position:new Vec3(aimX+dx*.84,aimY+dy*.84,0),scale:new Vec3(1.06,1.06,1)},{easing:'sineInOut'}).to(.65,{position:new Vec3(aimX+dx,aimY+dy,0),scale:new Vec3(.96,.96,1)},{easing:'sineInOut'}).union().repeatForever().start();
   tween(opacity).to(.65,{opacity:255},{easing:'sineInOut'}).to(.65,{opacity:190},{easing:'sineInOut'}).union().repeatForever().start();this.animated.push(arrow,opacity);
  }
  for(const id of step.focus||[]){const focus=this.options.target(id);if(focus)this.outline(layer,focus,false,undefined,'GuideFocus-'+id);}
  if(step.kind==='swipe'){const board=this.options.target('board');if(board)this.swipeCue=new SwipeDirectionCue(layer,step.direction!,board.x,board.y);}
  // This replaces only the level title/tip strip. Board, orders, bag and controls stay uncovered.
  const dock=rect(layer,'GuideDock',0,515,700,166,'#153E3B',12);breakfastSurface(dock,'v13/ui/guide');const border=dock.getComponent(Graphics)!;border.lineWidth=4;border.strokeColor=new Color(255,201,48,255);border.roundRect(-348,-50,696,100,11);border.stroke();
  const heading=label(dock,`${sequence.title} · ${this.flow.stepIndex+1}/${sequence.steps.length}`,-5,18,355,18,13,'#8D5124');heading.isBold=true;
  this.message=label(dock,step.text,-5,-18,355,50,18,'#704421');this.message.isBold=true;
  if(step.kind==='dialog')action(dock,'继续',245,15,108,38,()=>this.advance({type:'next'}));
  else if(step.kind==='demo'){
   const points=this.options.demo();if(points.length){const finger=rect(layer,'GuideDemoFinger',points[0][0],points[0][1],18,18,'#EDBE53',9);let animation=tween(finger);for(const p of points.slice(1))animation=animation.to(.7,{position:new Vec3(p[0],p[1],0)}).delay(.15);animation.start();this.animated.push(finger);}
   action(dock,'我来试试',245,15,108,38,()=>this.advance({type:'next'}));
  }else{const cue=rect(dock,'GuideActionCue',245,15,108,38,'#FFD05B',8);breakfastSurface(cue,'v13/ui/confirm_button');const cueText=label(cue,step.kind==='swipe'?`向${directionText[step.direction!]}滑动`:step.target==='orders'?'点击订单':'点击高亮',18,0,64,30,16,'#FFF9E8');cueText.isBold=true;cueText.enableWrapText=false;const outline=cueText.getComponent(LabelOutline)||cueText.addComponent(LabelOutline);outline.color=new Color(120,66,31);outline.width=1;}
  if(!sequence.mandatory)action(dock,'跳过本次',245,-28,126,40,()=>this.stop(),'#8D7B5C');
 }
}

