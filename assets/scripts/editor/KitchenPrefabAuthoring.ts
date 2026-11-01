import {prefabAssetPath} from '../framework/cocos/PrefabPaths';
import {_decorator,Component,Prefab,Node,UITransform,Graphics,Color,Label,Button,BlockInputEvents,Layers,UIOpacity,Sprite,SpriteFrame,assetManager,instantiate,director} from 'cc';
import {序列帧播放器} from '../framework/cocos/序列帧播放器';
import {PrefabSurface} from '../framework/cocos/PrefabSurface';
import {PrefabSlot} from '../framework/cocos/PrefabSlot';
const {ccclass,executeInEditMode}=_decorator;
@ccclass('KitchenPrefabAuthoring')
@executeInEditMode
export class KitchenPrefabAuthoring extends Component {
 async webBuildRequest(method:string,args:unknown[]=[]):Promise<unknown>{
  if(!['query-bundle-config','query-tasks-info','query-task','query-platform-config','check-and-complete-options','add-task','command-build','execute-build-stage'].includes(method))throw Error('Unsupported build request');
  const E=(globalThis as any).Editor;if(!E)throw Error('Only run in Creator scene editor');
  return E.Message.request('builder',method,...args);
 }
 private load<T>(uuid:string):Promise<T>{return new Promise((resolve,reject)=>assetManager.loadAny(uuid,(error:any,asset:any)=>error?reject(error):resolve(asset)));}
 /** Author using Creator's own objects and serializer, never handcrafted scene JSON. */
 async configurePresentation(specs:any[]):Promise<unknown>{
  const E=(globalThis as any).Editor,X=(globalThis as any).EditorExtends;if(!E||!X?.serialize)throw Error('Only run in Creator scene editor');const results=[];
  for(const spec of specs){
   const url='db://assets/resources/'+prefabAssetPath(spec.id)+'.prefab',info=await E.Message.request('asset-db','query-asset-info',url);if(!info)throw Error('Missing template '+spec.id);
   const original=await this.load<Prefab>(info.uuid),root=instantiate(original);root.name=spec.id;
   const frames:SpriteFrame[]=await Promise.all((spec.frames||[]).map((uuid:string)=>this.load<SpriteFrame>(uuid)));
   let visualRoot=root;
   if(spec.binding){visualRoot=root.getChildByName(spec.binding)||new Node(spec.binding);visualRoot.layer=Layers.Enum.UI_2D;if(visualRoot.parent!==root)root.addChild(visualRoot);(visualRoot.getComponent(UITransform)||visualRoot.addComponent(UITransform)).setContentSize(spec.w,spec.h);if(spec.x!==undefined||spec.y!==undefined)visualRoot.setPosition(spec.x||0,spec.y||0);}
   const frame=frames[0]||(spec.frame?await this.load<SpriteFrame>(spec.frame):null);
   if(frame){const name=spec.visualName||(spec.frames?'序列帧美术':'ArtVisual');const image=visualRoot.getChildByName(name)||new Node(name);image.layer=Layers.Enum.UI_2D;if(image.parent!==visualRoot)visualRoot.addChild(image);image.setSiblingIndex(0);const t=image.getComponent(UITransform)||image.addComponent(UITransform),s=image.getComponent(Sprite)||image.addComponent(Sprite);s.sizeMode=Sprite.SizeMode.CUSTOM;s.trim=false;s.spriteFrame=frame;const z=frame.originalSize,k=Math.min(spec.w/z.width,spec.h/z.height);t.setContentSize(z.width*k,z.height*k);}
   if(spec.frames){const player=root.getComponent(序列帧播放器)||root.addComponent(序列帧播放器);player.defaultFrames=frames;player.autoplay=false;player.defaultLoop=!!spec.loop;if(spec.fps)player.fps=spec.fps;player.anchorCanvasWidth=spec.w;player.anchorCanvasHeight=spec.h;}
   for(const name of spec.removeChildren||[]){const obsolete=root.getChildByName(name);if(obsolete){obsolete.removeFromParent();obsolete.destroy();}}
   // This is a new authored asset graph, not an instance override of itself.
   // Retaining the old PrefabInstance link would omit newly added visual children.
   const detach=(node:Node)=>{(node as any)._prefab=null;for(const component of node.getComponents(Component))(component as any).__prefab=null;node.children.forEach(detach);};detach(root);
   const p=new Prefab();p.name=spec.id;p.data=root;X.PrefabUtils.addPrefabInfo(root,root,p);await E.Message.request('asset-db','save-asset',url,X.serialize(p));root.destroy();results.push({id:spec.id,uuid:info.uuid,frames:frames.length});
  }return results;
 }
 async configureSceneLayers(specs:any[]):Promise<unknown>{
  const canvas=director.getScene()?.getChildByName('Canvas');if(!canvas)throw Error('Open main.scene before authoring');const results=[];
  for(const spec of specs){const n=canvas.getChildByName(spec.name)||new Node(spec.name);n.layer=Layers.Enum.UI_2D;if(n.parent!==canvas)canvas.addChild(n);n.setPosition(spec.x||0,spec.y||0);const t=n.getComponent(UITransform)||n.addComponent(UITransform),s=n.getComponent(Sprite)||n.addComponent(Sprite),frame=await this.load<SpriteFrame>(spec.frame);s.sizeMode=Sprite.SizeMode.CUSTOM;s.trim=false;s.spriteFrame=frame;const z=frame.originalSize,k=Math.min(spec.w/z.width,spec.h/z.height);t.setContentSize(z.width*k,z.height*k);n.active=false;results.push({name:n.name,uuid:n.uuid});}return results;
 }
 async generate(specs:any[]):Promise<unknown>{
  const scope=globalThis as unknown as Record<string,any>,E=scope.Editor,X=scope.EditorExtends;
  if(!E||!X?.serialize)throw Error('Only run in Creator scene editor');
  const results=[];
  const make=async(s:any):Promise<Node>=>{const n=new Node(s.name);n.layer=Layers.Enum.UI_2D;n.setPosition(s.x||0,s.y||0);n.addComponent(UITransform).setContentSize(s.w||100,s.h||100);n.addComponent(PrefabSlot).bindingKey=s.name;
   if(s.frame){const frame=await this.load<SpriteFrame>(s.frame),sprite=n.addComponent(Sprite);sprite.sizeMode=Sprite.SizeMode.CUSTOM;sprite.trim=false;sprite.spriteFrame=frame;const z=frame.originalSize,k=Math.min((s.w||100)/z.width,(s.h||100)/z.height);n.getComponent(UITransform)!.setContentSize(z.width*k,z.height*k);}
   if(s.fill||s.stroke){n.addComponent(Graphics).fillColor=new Color().fromHEX(s.fill||'#FFFFFF');const surface=n.addComponent(PrefabSurface);surface.radius=s.radius??15;surface.filled=!!s.fill;if(s.stroke){surface.strokeWidth=s.stroke.width;surface.strokeColor=new Color().fromHEX(s.stroke.color);}surface.paint();}
   if(s.label){const l=n.addComponent(Label);l.string=s.label.text;l.fontSize=s.label.size;l.lineHeight=s.label.line;l.color=new Color().fromHEX(s.label.color);l.isBold=!!s.label.bold;l.horizontalAlign=s.label.align??1;l.verticalAlign=1;l.overflow=Label.Overflow.SHRINK;}
   if(s.button)n.addComponent(Button);if(s.block)n.addComponent(BlockInputEvents);if(s.opacity!==undefined)n.addComponent(UIOpacity).opacity=s.opacity;
   for(const child of s.children||[])n.addChild(await make(child));return n;};
  for(const spec of specs){const n=await make(spec.tree),p=new Prefab();p.name=spec.id;p.data=n;X.PrefabUtils.addPrefabInfo(n,n,p);const serialized=X.serialize(p);const url='db://assets/resources/'+prefabAssetPath(spec.id)+'.prefab';
   const existing=await E.Message.request('asset-db','query-asset-info',url);const info=existing?await E.Message.request('asset-db','save-asset',url,serialized):await E.Message.request('asset-db','create-asset',url,serialized);results.push({id:spec.id,uuid:info?.uuid||existing?.uuid});n.destroy();
  }return results;
 }
}
