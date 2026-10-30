import {PrefabSurface} from './PrefabSurface';
import {instantiate,Node,Prefab,UITransform,isValid,Graphics,Label,Color} from 'cc';
import {CocosAssets} from './CocosAssets';
import {PrefabSlot} from './PrefabSlot';
import type {AssetLease} from '../core/AssetCache';
export const PREFAB_IDS=['Board','HUD','Effects','TutorialOverlay','EnergyWidget','HomePage','RestaurantsPage','LevelSelectPage','KitchenPage','SettingsPage','DiagnosticsPage','PrimaryButton','FrameworkButton','CustomerOrderCard','IngredientTile','RequiredDevice','DeviceTile','BoardCell','Wall','Station','BagSlot','AdBagSlot','Chef','ChefBody','ChefHalo','RestaurantCard','LevelCard','GuideDock','GuideFocus','GuideTarget','RecipeCard','IngredientChip','Container','Panel','TextLabel','Toast','Popup','ChoicePanel','WinResult','FailResult','PausePanel','RecipePanel','LoadingState','EmptyState','ErrorState'] as const;
export type PrefabId=typeof PREFAB_IDS[number];
const templates=new Map<string,Prefab>(),claimed=new WeakSet<Node>(),owners=new WeakMap<Node,PrefabId>();let leases:AssetLease<Prefab>[]=[];
export async function loadUIPrefabs(assets:CocosAssets):Promise<void>{
 const acquired:AssetLease<Prefab>[]=[];
 try{for(const id of PREFAB_IDS){const lease=await assets.retain('prefabs/'+id,Prefab);acquired.push(lease);templates.set(id,lease.asset);}leases=acquired;}
 catch(error){acquired.forEach(l=>l.release());templates.clear();throw error;}
}
export function releaseUIPrefabs():void{templates.clear();leases.forEach(l=>l.release());leases=[];}
export function prefabRole(name:string):PrefabId{
 const pages:Record<string,PrefabId>={KitchenHome:'HomePage',Restaurants:'RestaurantsPage',CampaignSelect:'LevelSelectPage',KitchenGame:'KitchenPage'};
 if(pages[name])return pages[name];if(PREFAB_IDS.includes(name as PrefabId))return name as PrefabId;
 for(const [prefix,id]of [['Action-','PrimaryButton'],['Button-','FrameworkButton'],['CustomerSlot-','CustomerOrderCard'],['Ingredient-','IngredientTile'],['RequiredDevice-','RequiredDevice'],['Device-','DeviceTile'],['Cell-','BoardCell'],['CampaignLevel-','LevelCard'],['Restaurant-','RestaurantCard'],['GuideFocus-','GuideFocus'],['RecipeCard-','RecipeCard'],['OrderIngredient-','IngredientChip'],['RecipeIngredient-','IngredientChip'],['AdBagSlot-','AdBagSlot']] as [string,PrefabId][])if(name.startsWith(prefix))return id;
 if(name==='Label'||name==='Text')return 'TextLabel';if(name==='Background'||name==='BoardBase'||name==='Dialog')return 'Panel';return 'Container';
}
/** Claim serialized binding nodes once. Decorative children without PrefabSlot are never pruned. */
export function prefabNode(name:string,parent?:Node):Node{
 const existing=parent?.children.find(n=>n.getComponent(PrefabSlot)?.bindingKey===name&&!claimed.has(n));
 const id=prefabRole(name),standalone=!['Container','Panel','TextLabel'].includes(id);
 let overrides:{x:number;y:number;w:number;h:number;layout:boolean;style:boolean;color?:Color;font?:number}|undefined;
 if(existing){
  if(!standalone||owners.get(existing)===id){claimed.add(existing);return existing;}
  const slot=existing.getComponent(PrefabSlot)!,t=existing.getComponent(UITransform)!;
  overrides={x:existing.position.x,y:existing.position.y,w:t.width,h:t.height,layout:slot.preserveLayout,style:slot.preserveStyle,color:existing.getComponent(Graphics)?.fillColor.clone(),font:existing.getComponent(Label)?.fontSize};
  existing.removeFromParent();existing.destroy();
 }
 const asset=templates.get(id);
 // Only the initial boot/error renderer runs before prefab assets are available.
 if(!asset){if(templates.size)throw Error('UI prefab not loaded: '+id);const n=new Node(name);n.addComponent(UITransform);parent?.addChild(n);return n;}
 const n=instantiate(asset);for(const marker of n.getComponentsInChildren(PrefabSlot)){owners.set(marker.node,id);const surface=marker.getComponent(PrefabSurface);if(surface)surface.runtimeBound=true;}n.name=name;claimed.add(n);
 if(overrides){const slot=n.getComponent(PrefabSlot)!;slot.preserveLayout=slot.preserveLayout||overrides.layout;slot.preserveStyle=slot.preserveStyle||overrides.style;if(overrides.layout){n.setPosition(overrides.x,overrides.y);n.getComponent(UITransform)!.setContentSize(overrides.w,overrides.h);}if(overrides.style){const g=n.getComponent(Graphics),l=n.getComponent(Label);if(g&&overrides.color)g.fillColor=overrides.color;if(l&&overrides.font)l.fontSize=overrides.font;}}
 parent?.addChild(n);
 queueMicrotask(()=>{if(!isValid(n))return;const prune=(p:Node)=>{for(const child of [...p.children]){if(child.getComponent(PrefabSlot)&&!claimed.has(child)){child.removeFromParent();child.destroy();}else prune(child);}};prune(n);});return n;
}
