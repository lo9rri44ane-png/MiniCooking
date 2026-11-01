import {Node,UIOpacity,Vec3,Tween,tween,isValid} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastImage} from './BreakfastArt';
import type {Direction} from './Rules';

/** Shared swipe language for actual tutorial directions and the optional first-step aid. */
export class SwipeDirectionCue {
 readonly node:Node;
 private opacity:UIOpacity;
 private disposed=false;
 constructor(parent:Node,direction:Direction,x:number,y:number,name='GuideSwipeArrow'){
  this.node=uiNode(parent,name,x,y,160,80);
  breakfastImage(this.node,'SwipeDirectionArt','ui/swipe_direction',0,0,160,80);
  this.node.angle=({right:0,left:180,up:90,down:-90})[direction];
  this.opacity=this.node.getComponent(UIOpacity)||this.node.addComponent(UIOpacity);
  this.opacity.opacity=190;
  const [dx,dy]=({right:[30,0],left:[-30,0],up:[0,30],down:[0,-30]})[direction];
  tween(this.node).to(.7,{position:new Vec3(x+dx,y+dy,0),scale:new Vec3(1.04,1.04,1)},{easing:'sineInOut'})
   .to(.7,{position:new Vec3(x,y,0),scale:new Vec3(.96,.96,1)},{easing:'sineInOut'}).union().repeatForever().start();
  tween(this.opacity).to(.7,{opacity:255},{easing:'sineInOut'}).to(.7,{opacity:190},{easing:'sineInOut'}).union().repeatForever().start();
 }
 pause():void{if(this.disposed)return;Tween.pauseAllByTarget(this.node);Tween.pauseAllByTarget(this.opacity);}
 resume():void{if(this.disposed)return;Tween.resumeAllByTarget(this.node);Tween.resumeAllByTarget(this.opacity);}
 dispose():void{
  if(this.disposed)return;this.disposed=true;
  Tween.stopAllByTarget(this.node);Tween.stopAllByTarget(this.opacity);
  if(isValid(this.node)){this.node.removeFromParent();this.node.destroy();}
 }
}
