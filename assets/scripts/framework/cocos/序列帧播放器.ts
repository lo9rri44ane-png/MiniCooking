import {uiNode} from './UIService';
import {_decorator,Component,Sprite,SpriteFrame,UITransform,Color,isValid,Material,gfx} from 'cc';
import {FrameSequenceClock} from '../core/FrameSequenceClock';
const {ccclass,property}=_decorator;
export interface FramePlaybackOptions {fps?:number;loop?:boolean;duration?:number;onComplete?:()=>void;restart?:boolean;}
@ccclass('序列帧播放器')
export class 序列帧播放器 extends Component {
 @property({type:[SpriteFrame],displayName:'默认帧序列'}) defaultFrames:SpriteFrame[]=[];
 @property({displayName:'自动播放'}) autoplay=false;
 @property({displayName:'相邻帧柔和过渡（光效）'}) blendFrames=false;
 @property({displayName:'默认循环'}) defaultLoop=true;
 @property({displayName:'默认帧率'}) fps=8;
 @property({displayName:'循环播放速度'}) loopSpeed=1;
 @property({displayName:'固定画布宽度'}) anchorCanvasWidth=128;
 @property({displayName:'画布垂直锚点（从底部）',min:0,max:1}) canvasAnchorY=.5;
 @property({displayName:'固定画布高度'}) anchorCanvasHeight=128;
 private visual:Sprite|null=null;
 private blendVisual:Sprite|null=null;
 private lightMaterial:Material|null=null;
 private frames:readonly SpriteFrame[]=[];
 private clock:FrameSequenceClock|null=null;
 private options:FramePlaybackOptions={};
 private resolve:((ok:boolean)=>void)|null=null;
 private promise:Promise<boolean>=Promise.resolve(false);
 private dead=false;
 onLoad():void{if(this.autoplay&&this.defaultFrames.length)void this.playFrames(this.defaultFrames);}
 playFrames(frames:readonly SpriteFrame[],options:FramePlaybackOptions={}):Promise<boolean>{
  if(this.dead||!frames.length)return Promise.resolve(false);
  if(this.clock&&this.frames===frames&&!options.restart&&this.options.fps===options.fps&&this.options.loop===options.loop&&this.options.duration===options.duration)return this.promise;
  this.stop();
  this.clock=new FrameSequenceClock(frames.length,options.fps??this.fps,options.loop??this.defaultLoop,options.duration);
  this.frames=frames;this.options=options;
  if(!this.visual){const n=this.node.getChildByName('序列帧美术')||uiNode(this.node,'序列帧美术',0,0,this.anchorCanvasWidth,this.anchorCanvasHeight);if(!n.getComponent(UITransform))n.addComponent(UITransform);this.visual=n.getComponent(Sprite)||n.addComponent(Sprite);this.visual.type=Sprite.Type.SIMPLE;this.visual.sizeMode=Sprite.SizeMode.CUSTOM;this.visual.trim=false;}
  this.show(0);
  this.promise=this.clock.loop?Promise.resolve(true):new Promise(resolve=>{this.resolve=resolve;});
  return this.promise;
 }
 private show(index:number):void{
  const frame=this.frames[index];if(!frame||!this.visual)return;
  this.visual.trim=false;if(this.visual.spriteFrame!==frame)this.visual.spriteFrame=frame;
  // Every frame occupies the same authored canvas; transparent padding is preserved.
  const size=frame.originalSize,k=Math.min(this.anchorCanvasWidth/size.width,this.anchorCanvasHeight/size.height);
  this.visual.getComponent(UITransform)!.setAnchorPoint(.5,this.canvasAnchorY);
  this.visual.getComponent(UITransform)!.setContentSize(size.width*k,size.height*k);
  if(this.blendFrames&&this.clock){
   if(!this.blendVisual){const n=uiNode(this.node,'柔光过渡层',0,0,this.anchorCanvasWidth,this.anchorCanvasHeight);this.blendVisual=n.getComponent(Sprite)||n.addComponent(Sprite);this.blendVisual.type=Sprite.Type.SIMPLE;this.blendVisual.sizeMode=Sprite.SizeMode.CUSTOM;this.blendVisual.trim=false;}
   // Light adds energy to the scene: weighted additive blending preserves intensity
   // when adjacent transparent fields overlap (source-over would dip at the midpoint).
   if(!this.lightMaterial){const source=this.visual.getRenderMaterial(0);if(source?.effectAsset){const material=new Material();material.copy(source,{states:{blendState:{targets:[{blend:true,blendSrc:gfx.BlendFactor.SRC_ALPHA,blendDst:gfx.BlendFactor.ONE,blendSrcAlpha:gfx.BlendFactor.ZERO,blendDstAlpha:gfx.BlendFactor.ONE}]}}});this.lightMaterial=material;}}if(this.lightMaterial){if(this.visual.customMaterial!==this.lightMaterial)this.visual.customMaterial=this.lightMaterial;if(this.blendVisual.customMaterial!==this.lightMaterial)this.blendVisual.customMaterial=this.lightMaterial;}
   const fraction=this.clock.phase-Math.floor(this.clock.phase),next=this.clock.loop?(index+1)%this.frames.length:Math.min(index+1,this.frames.length-1),f=this.frames[next],z=f.originalSize,q=Math.min(this.anchorCanvasWidth/z.width,this.anchorCanvasHeight/z.height);
   this.blendVisual.node.active=true;this.blendVisual.spriteFrame=f;this.blendVisual.getComponent(UITransform)!.setAnchorPoint(.5,this.canvasAnchorY);this.blendVisual.getComponent(UITransform)!.setContentSize(z.width*q,z.height*q);
   const mix=fraction*fraction*(3-2*fraction);this.visual.color=new Color(255,255,255,Math.round(255*(1-mix)));this.blendVisual.color=new Color(255,255,255,Math.round(255*mix));
  }else{if(this.lightMaterial&&this.visual.customMaterial===this.lightMaterial)this.visual.customMaterial=null;this.visual.color=new Color(255,255,255,255);if(this.blendVisual)this.blendVisual.node.active=false;}

 }
 update(dt:number):void{
  const clock=this.clock;if(!clock)return;
  const result=clock.advance(dt*(clock.loop?Math.max(0,this.loopSpeed):1));this.show(result.index);
  if(result.completed){this.clock=null;const resolve=this.resolve,done=this.options.onComplete;this.resolve=null;resolve?.(true);done?.();}
 }
 pause():void{if(this.clock)this.clock.paused=true;}
 resume():void{if(this.clock)this.clock.paused=false;}
 stop():void{if(this.blendVisual&&isValid(this.blendVisual,true)&&this.blendVisual.node&&isValid(this.blendVisual.node,true))this.blendVisual.node.active=false;this.clock=null;const resolve=this.resolve;this.resolve=null;resolve?.(false);}
 onDestroy():void{this.dead=true;this.stop();if(this.lightMaterial&&isValid(this.lightMaterial))this.lightMaterial.destroy();this.lightMaterial=null;}
}
