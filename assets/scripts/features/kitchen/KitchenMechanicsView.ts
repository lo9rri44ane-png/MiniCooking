import {Node,UIOpacity,Vec3,Tween,tween,isValid} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastSurface} from './BreakfastArt';
import type {Cell,Level,State} from './Rules';
/** Reusable view for rule-owned mechanisms; no input or state mutation lives here. */
export class KitchenMechanicsView {
 private floors:Node;private barriers:Node;private tiles=new Map<string,Node>();private animated=new Set<Node>();
 constructor(parent:Node,private level:Level,private size:number,private point:(cell:Cell)=>{x:number;y:number;scale:number}){
  this.floors=uiNode(parent,'MechanismFloors',0,0,620,600);this.floors.setSiblingIndex(0);
  this.barriers=uiNode(parent,'MechanismDoors',0,0,620,600);const chef=parent.getChildByName('Chef');if(chef)this.barriers.setSiblingIndex(chef.getSiblingIndex());
 }
 private tile(name:string,cell:Cell,key:string,barrier=false):Node{let n=this.tiles.get(name);if(!n){const p=this.point(cell);n=uiNode(barrier?this.barriers:this.floors,name,p.x,p.y,this.size*.92,this.size*.92);n.setScale(p.scale,p.scale,1);this.tiles.set(name,n);}breakfastSurface(n,'mechanics/'+key);return n;}
 sync(state:State):void{
  (this.level.stopPads||[]).forEach((cell,i)=>{const used=(state.usedPads||[]).includes(i),n=this.tile('StopPad-'+i,cell,used?'stop_pad_used':'stop_pad');const opacity=n.getComponent(UIOpacity)||n.addComponent(UIOpacity);opacity.opacity=used?170:255;});
  (this.level.switches||[]).forEach((sw,i)=>this.tile('Switch-'+i,sw.cell,(state.openDoors||[]).includes(sw.group)?'switch_on':'switch_off'));
  (this.level.doors||[]).forEach((door,i)=>this.tile('Door-'+i,door.cell,(state.openDoors||[]).includes(door.group)?'door_open':'door_closed',true));
  (this.level.conveyors||[]).forEach((belt,i)=>this.tile('Conveyor-'+i,belt.cell,'conveyor_'+belt.direction));
 }
 target(kind:string,index=0):Node|undefined{return this.tiles.get(({ 'stop-pad':'StopPad','switch-door':'Switch',door:'Door',conveyor:'Conveyor'} as Record<string,string>)[kind]+'-'+index);}
 pulse(kind:string,index=0):void{const node=this.target(kind,index)?.getChildByName('ArtSurface');if(!node||!isValid(node))return;Tween.stopAllByTarget(node);node.setScale(1,1,1);this.animated.add(node);tween(node).to(.12,{scale:new Vec3(1.08,1.08,1)}).to(.18,{scale:new Vec3(1,1,1)}).call(()=>this.animated.delete(node)).start();}
 dispose():void{for(const node of this.animated)if(isValid(node))Tween.stopAllByTarget(node);this.animated.clear();}
}
