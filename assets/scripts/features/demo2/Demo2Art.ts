import{Node,SpriteFrame,Sprite,UITransform,Color,Graphics}from'cc';
import{CocosAssets}from'../../framework/cocos/CocosAssets';
import type{AssetLease}from'../../framework/core/AssetCache';
import{uiNode}from'../../framework/cocos/UIService';
import{retainPrefabBinding}from'../../framework/cocos/PrefabFactory';
import{FOOD_KEYS}from'./Presentation';
export class Demo2Art{
 private assets=new CocosAssets();private frames=new Map<string,SpriteFrame>();private leases:AssetLease<SpriteFrame>[]=[];private closed=false;
 async load():Promise<void>{try{for(const key of [...Object.values(FOOD_KEYS),'board-floor-a','board-floor-b','washer-conveyor']){const lease=await this.assets.retain('art/latest/demo2/'+key+'/spriteFrame',SpriteFrame);if(this.closed){lease.release();throw Error('Demo2画面已关闭');}this.leases.push(lease);this.frames.set(key,lease.asset);}}catch(e){this.dispose();throw e;}}
 image(parent:Node,name:string,key:string,x:number,y:number,w:number,h:number):Node{const frame=this.frames.get(key);if(!frame)throw Error('Demo2缺少美术 '+key);const n=uiNode(parent,name,x,y,w,h);retainPrefabBinding(n);n.setPosition(x,y);const g=n.getComponent(Graphics);if(g)g.enabled=false;const old=n.getComponent(Sprite);if(old)old.enabled=false;const visual=uiNode(n,'ArtVisual',0,0,w,h);retainPrefabBinding(visual);const s=visual.getComponent(Sprite)||visual.addComponent(Sprite);s.spriteFrame=frame;s.sizeMode=Sprite.SizeMode.CUSTOM;s.trim=false;s.color=new Color(255,255,255,255);const size=frame.originalSize,k=Math.min(w/size.width,h/size.height);n.getComponent(UITransform)!.setContentSize(size.width*k,size.height*k);visual.getComponent(UITransform)!.setContentSize(size.width*k,size.height*k);return n;}
 dispose():void{if(this.closed)return;this.closed=true;this.leases.forEach(l=>l.release());this.leases=[];this.frames.clear();this.assets.close();}
}
