import {_decorator,Component,Prefab,Node,UITransform,Graphics,Color,Label,Button,BlockInputEvents,Layers,UIOpacity} from 'cc';
import {PrefabSurface} from '../framework/cocos/PrefabSurface';
import {PrefabSlot} from '../framework/cocos/PrefabSlot';
const {ccclass,executeInEditMode}=_decorator;
@ccclass('KitchenPrefabAuthoring')
@executeInEditMode
export class KitchenPrefabAuthoring extends Component {
 async generate(specs:any[]):Promise<unknown>{
  const scope=globalThis as unknown as Record<string,any>,E=scope.Editor,X=scope.EditorExtends;
  if(!E||!X?.serialize)throw Error('Only run in Creator scene editor');
  const results=[];
  const make=(s:any):Node=>{const n=new Node(s.name);n.layer=Layers.Enum.UI_2D;n.setPosition(s.x||0,s.y||0);n.addComponent(UITransform).setContentSize(s.w||100,s.h||100);n.addComponent(PrefabSlot).bindingKey=s.name;
   if(s.fill||s.stroke){n.addComponent(Graphics).fillColor=new Color().fromHEX(s.fill||'#FFFFFF');const surface=n.addComponent(PrefabSurface);surface.radius=s.radius??15;surface.filled=!!s.fill;if(s.stroke){surface.strokeWidth=s.stroke.width;surface.strokeColor=new Color().fromHEX(s.stroke.color);}surface.paint();}
   if(s.label){const l=n.addComponent(Label);l.string=s.label.text;l.fontSize=s.label.size;l.lineHeight=s.label.line;l.color=new Color().fromHEX(s.label.color);l.isBold=!!s.label.bold;l.horizontalAlign=s.label.align??1;l.verticalAlign=1;l.overflow=Label.Overflow.SHRINK;}
   if(s.button)n.addComponent(Button);if(s.block)n.addComponent(BlockInputEvents);if(s.opacity!==undefined)n.addComponent(UIOpacity).opacity=s.opacity;
   for(const child of s.children||[])n.addChild(make(child));return n;};
  for(const spec of specs){const n=make(spec.tree),p=new Prefab();p.name=spec.id;p.data=n;X.PrefabUtils.addPrefabInfo(n,n,p);const serialized=X.serialize(p);const url='db://assets/resources/prefabs/'+spec.id+'.prefab';
   const existing=await E.Message.request('asset-db','query-asset-info',url);const info=existing?await E.Message.request('asset-db','save-asset',url,serialized):await E.Message.request('asset-db','create-asset',url,serialized);results.push({id:spec.id,uuid:info?.uuid||existing?.uuid});n.destroy();
  }return results;
 }
}

