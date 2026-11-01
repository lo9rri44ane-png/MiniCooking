import {Node,Graphics,Color,Mask,Sprite,UIOpacity,Button} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastImage} from './BreakfastArt';
import {label,color,action,palette} from './KitchenUI';
/** Full storefront thumbnail with a separate title/footer; artwork always keeps 16:9. */
export function restaurantCover(card:Node,index:number,name:string,open:boolean,cleared:number,enter:()=>void):void{
 const border=card.getComponent(Graphics)!;border.clear();border.fillColor=color('#FFFAE9');border.roundRect(-280,-174,560,348,20);border.fill();border.strokeColor=color('#C99552');border.lineWidth=2;border.stroke();
 const clip=uiNode(card,'RestaurantCoverClip',0,18,532,299.25),mask=clip.addComponent(Mask);mask.type=Mask.Type.GRAPHICS_STENCIL;
 const shape=clip.getComponent(Graphics)||clip.addComponent(Graphics);shape.roundRect(-266,-149.625,532,299.25,16);shape.fill();
 const image=breakfastImage(clip,'RestaurantCover','v10/covers/'+(index===0?'breakfast':'street'),0,0,532,299.25),sprite=image.getChildByName('ArtVisual')!.getComponent(Sprite)!;sprite.grayscale=!open;(image.getComponent(UIOpacity)||image.addComponent(UIOpacity)).opacity=open?255:190;
 clip.addComponent(Button);clip.on(Button.EventType.CLICK,enter);
 const title=uiNode(card,'RestaurantTitle',0,183,340,46),g=title.addComponent(Graphics);g.fillColor=new Color(255,248,223,242);g.roundRect(-170,-23,340,46,14);g.fill();g.strokeColor=color('#CE9B55');g.lineWidth=2;g.stroke();label(title,name,0,0,320,40,28,'#754321');
 label(card,`${cleared} / 80`,-168,-146,170,28,20,'#754321');const bar=uiNode(card,'RestaurantProgress',-168,-166,170,8),p=bar.addComponent(Graphics);p.fillColor=color('#E7D4AC');p.roundRect(-85,-4,170,8,4);p.fill();if(cleared>0){p.fillColor=color('#86BC58');p.roundRect(-85,-4,170*Math.min(1,cleared/80),8,4);p.fill();}
 action(card,open?'进入 '+name:'尚未解锁 · '+name,112,-150,290,48,enter,open?palette.green:'#938771');
 if(!open){const lock=uiNode(card,'RestaurantLock',0,10,76,90),l=lock.addComponent(Graphics);l.fillColor=new Color(255,246,218,245);l.roundRect(-38,-45,76,90,18);l.fill();l.strokeColor=color('#94632D');l.lineWidth=6;l.roundRect(-17,0,34,29,14);l.stroke();l.fillColor=color('#E9B855');l.roundRect(-26,-29,52,40,8);l.fill();l.fillColor=color('#80552D');l.circle(0,-9,5);l.fill();l.roundRect(-2,-20,4,11,2);l.fill();}
}
