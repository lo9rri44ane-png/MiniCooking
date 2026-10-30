import {_decorator,Component,Graphics,UITransform,Sprite,Color} from 'cc';
const {ccclass,property,executeInEditMode}=_decorator;
/** Graphics paths are transient in Cocos: rebuild the serialized placeholder style. */
@ccclass('PrefabSurface')
@executeInEditMode
export class PrefabSurface extends Component {
 @property radius=15;
 @property filled=true;
 @property strokeWidth=0;
 @property strokeColor=new Color(255,201,48,255);
 runtimeBound=false;
 onEnable():void{if(this.runtimeBound)return;this.paint();this.node.on('size-changed',this.paint,this);}
 onDisable():void{this.node.off('size-changed',this.paint,this);}
 paint():void{const g=this.getComponent(Graphics),t=this.getComponent(UITransform);if(!g||!t)return;if(this.getComponent(Sprite)?.spriteFrame){g.enabled=false;return;}g.enabled=true;g.clear();g.roundRect(-t.width/2,-t.height/2,t.width,t.height,Math.min(this.radius,t.width/2,t.height/2));if(this.filled)g.fill();if(this.strokeWidth>0){g.lineWidth=this.strokeWidth;g.strokeColor=this.strokeColor;g.stroke();}}
}

