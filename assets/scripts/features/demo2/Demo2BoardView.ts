import{Node,Graphics,Color,UITransform,EventTouch,Vec3,UIOpacity,isValid}from'cc';
import{uiNode}from'../../framework/cocos/UIService';import{clear,label}from'../kitchen/KitchenUI';
import type{Cell,Entity,Food,Level,State,Action}from'./Types';
import{CELL,BOARD,BOARD_Y,COLORS,FOOD_KEYS,footprintBounds,gridPoint,exitRect,selectableTarget,canSelectElement,boardMetrics,snapExitAction}from'./Presentation';import{planDrag,entityCells,lockedCells}from'./Rules';import{Demo2Art}from'./Demo2Art';
const hex=(s:string)=>new Color().fromHEX(s);
/** Rounded union contour. One continuous footprint, no food-specific markings. */
export function poly(node:Node,shape:Cell[],unit:number,fill:string,metal=false):void{
 const g=node.getComponent(Graphics)||node.addComponent(Graphics);g.clear();g.lineJoin=Graphics.LineJoin.ROUND;const b=footprintBounds(shape),present=(x:number,y:number)=>shape.some(c=>c.x===x&&c.y===y),edges:{a:Cell;b:Cell}[]=[];
 for(const p of shape){const x=p.x,y=p.y;if(!present(x,y-1))edges.push({a:{x,y},b:{x:x+1,y}});if(!present(x+1,y))edges.push({a:{x:x+1,y},b:{x:x+1,y:y+1}});if(!present(x,y+1))edges.push({a:{x:x+1,y:y+1},b:{x,y:y+1}});if(!present(x-1,y))edges.push({a:{x,y:y+1},b:{x,y}});}
 const points:Cell[]=[];let edge=edges.shift();if(!edge)return;points.push(edge.a);let end=edge.b;while(edges.length){points.push(end);const at=edges.findIndex(e=>e.a.x===end.x&&e.a.y===end.y);if(at<0)break;end=edges.splice(at,1)[0].b;}
 const path=(scale:number,offsetY=0)=>{const ps=points.map(p=>({x:(p.x-b.w/2)*unit*scale,y:(b.h/2-p.y)*unit*scale+offsetY})),corners=ps.map((p,i)=>{const prev=ps[(i+ps.length-1)%ps.length],next=ps[(i+1)%ps.length],r=Math.min(unit*.10,Math.hypot(prev.x-p.x,prev.y-p.y)*.22,Math.hypot(next.x-p.x,next.y-p.y)*.22),toward=(q:Cell)=>{const len=Math.hypot(q.x-p.x,q.y-p.y);return{x:p.x+(q.x-p.x)*r/len,y:p.y+(q.y-p.y)*r/len};};return{p,a:toward(prev),z:toward(next)};});g.moveTo(corners[0].a.x,corners[0].a.y);for(const c of corners){g.lineTo(c.a.x,c.a.y);g.quadraticCurveTo(c.p.x,c.p.y,c.z.x,c.z.y);}g.close();};
 const base=hex(metal?'#9CA3A9':fill),shade=(factor:number)=>new Color(Math.min(255,base.r*factor),Math.min(255,base.g*factor),Math.min(255,base.b*factor),255);
 g.fillColor=hex(metal?'#54575B':'#6F492D');path(.99,-3);g.fill();g.fillColor=metal?hex('#E5E8EA'):shade(1.16);path(.97,1);g.fill();g.lineWidth=Math.max(1,unit*.018);g.strokeColor=new Color(255,255,255,220);path(.96,1);g.stroke();g.fillColor=metal?hex('#737B83'):shade(.77);path(.88,-1);g.fill();g.fillColor=metal?hex('#AAB1B6'):base;path(.82,-1);g.fill();g.lineWidth=Math.max(1,unit*.024);g.strokeColor=metal?hex('#CBD0D4'):shade(1.18);path(.84,0);g.stroke();

}
interface Drag{id:string;start:Cell;nodes:{node:Node;x:number;y:number}[];dx:number;dy:number;touchId:number;route:Action[]|null;}
export class Demo2BoardView{
 readonly node:Node;private unit:number;private boardWidth:number;private boardHeight:number;private layer:Node;private hint:Node;private ghost:Node;private locks:Node;private pressTimer:ReturnType<typeof setTimeout>|null=null;private visuals=new Map<string,Node>();private grips=new Map<string,Cell>();private state:State;private drag:Drag|null=null;private enabled=true;private dead=false;
 constructor(parent:Node,private level:Level,private art:Demo2Art,state:State,private dispatch:(a:Action)=>void){
 const m=boardMetrics(level.width,level.height);this.unit=m.cell;this.boardWidth=m.width;this.boardHeight=m.height;this.state=state;
 this.node=uiNode(parent,'Demo2Board',0,m.y,m.width+this.unit*2,m.height+this.unit*2);this.node.setPosition(0,m.y);this.node.getComponent(UITransform)!.setContentSize(m.width+this.unit*2,m.height+this.unit*2);
 const fw=m.width+22,fh=m.height+22,frame=uiNode(this.node,'Demo2BoardFrame',0,0,fw,fh),fg=frame.getComponent(Graphics)||frame.addComponent(Graphics);fg.clear();fg.fillColor=hex('#89512C');fg.roundRect(-fw/2,-fh/2,fw,fh,16);fg.fill();fg.fillColor=hex('#B7C5AA');fg.roundRect(-fw/2+7,-fh/2+7,fw-14,fh-14,10);fg.fill();frame.setSiblingIndex(0);
 for(let y=0;y<level.height;y++)for(let x=0;x<level.width;x++){const p=this.grid(x,y);art.image(this.node,`Demo2Cell-${x}-${y}`,'board-floor-'+((x+y)%2?'a':'b'),p.x,p.y,this.unit-2,this.unit-2);}
 for(const e of level.exits){const r=exitRect(e,level.width,level.height,this.unit),gate=uiNode(this.node,'Demo2Exit-'+e.color,r.x,r.y,r.w,r.h);const g=(gate.getComponent(Graphics)||gate.addComponent(Graphics));g.fillColor=hex('#6F432E');g.roundRect(-r.w/2-4,-r.h/2-4,r.w+8,r.h+8,9);g.fill();g.fillColor=hex(COLORS[e.color]);g.roundRect(-r.w/2,-r.h/2,r.w,r.h,7);g.fill();g.lineWidth=3;g.strokeColor=new Color(255,255,255,160);g.roundRect(-r.w/2+3,-r.h/2+3,r.w-6,r.h-6,5);g.stroke();const arrow={top:'↑',bottom:'↓',left:'←',right:'→'}[e.side];label(gate,arrow,0,0,Math.min(64,r.w),Math.min(64,r.h),29,'#FFFFFF').isBold=true;}
 this.layer=uiNode(this.node,'Demo2Pieces',0,0,this.boardWidth,this.boardHeight);this.hint=uiNode(this.node,'Demo2DragHint',0,0,this.boardWidth,this.boardHeight);this.ghost=uiNode(this.hint,'Demo2DropPreview',0,0,this.unit,this.unit);this.ghost.addComponent(UIOpacity).opacity=115;this.ghost.active=false;this.hint.setSiblingIndex(this.layer.getSiblingIndex());
 this.locks=uiNode(this.node,'Demo2LockedAreas',0,0,this.boardWidth,this.boardHeight);
 this.node.on(Node.EventType.TOUCH_START,this.start,this);this.node.on(Node.EventType.TOUCH_MOVE,this.move,this);this.node.on(Node.EventType.TOUCH_END,this.end,this);this.node.on(Node.EventType.TOUCH_CANCEL,this.cancel,this);this.render(state);
 }
 setEnabled(value:boolean):void{this.enabled=value;if(!value)this.cancel();}
 private point(e:EventTouch):Cell{const p=e.getUILocation(),v=this.node.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(p.x,p.y,0));return{x:v.x,y:v.y};}
 private grid(x:number,y:number):Cell{return gridPoint(x,y,this.level.width,this.level.height,this.unit);}
 private position(obj:Entity|Food):Cell{const b=footprintBounds(obj.shape),p=this.grid(obj.x,obj.y);return{x:p.x+(b.w-1)*this.unit/2,y:p.y-(b.h-1)*this.unit/2};}
 private cell(p:Cell):Cell{return{x:Math.floor(p.x/this.unit+this.level.width/2),y:Math.floor(this.level.height/2-p.y/this.unit)};}
 private hit(p:Cell):string|undefined{
  const c=this.cell(p);if(lockedCells(this.level,this.state).has(`${c.x},${c.y}`))return;
  for(const e of [...this.state.entities].reverse()){const grip=this.grips.get(e.id);if(grip&&Math.hypot(grip.x-p.x,grip.y-p.y)<Math.max(12,this.unit*.22))return canSelectElement(this.level,this.state,e.id)?e.id:undefined;}
  return selectableTarget(this.level,this.state,this.cell(p));
 }
 private begin(id:string,p:Cell,touchId:number):void{
  if(!canSelectElement(this.level,this.state,id))return;
  const entity=this.state.entities.find(x=>x.id===id),ids=[id,...(entity?[...this.state.foods.filter(f=>f.carrierId===id).map(f=>f.id),'grip:'+id]:[])];
  const nodes=ids.map(id=>this.visuals.get(id)).filter((n):n is Node=>!!n).map(node=>({node,x:node.position.x,y:node.position.y}));
  for(const item of nodes){item.node.setSiblingIndex(this.layer.children.length-1);const opacity=item.node.getComponent(UIOpacity)||item.node.addComponent(UIOpacity);opacity.opacity=215;}
  this.drag={id,start:p,nodes,dx:0,dy:0,touchId,route:null};
 }
 private clearPress():void{if(this.pressTimer!==null){clearTimeout(this.pressTimer);this.pressTimer=null;}}
 private start(e:EventTouch):void{
  if(this.dead||!this.enabled||this.state.won||this.drag)return;const p=this.point(e),id=this.hit(p);if(!id)return;this.begin(id,p,e.getID());
  const cell=this.cell(p),food=this.state.foods.find(f=>entityCells(f).some(c=>c.x===cell.x&&c.y===cell.y));
  if(food&&food.carrierId===id&&canSelectElement(this.level,this.state,food.id)&&this.state.entities.some(n=>n.id===id)){
   const original=this.drag;this.pressTimer=setTimeout(()=>{this.pressTimer=null;if(this.dead||!this.enabled||this.drag!==original)return;const touchId=original!.touchId;this.cancel();this.begin(food.id,p,touchId);poly(this.ghost,food.shape,this.unit,'#B4F6A6');const pos=this.position(food);this.ghost.setPosition(pos.x,pos.y);this.ghost.active=true;},350);
  }
  e.propagationStopped=true;
 }
 private move(e:EventTouch):void{
  const d=this.drag;if(!d||!this.enabled||e.getID()!==d.touchId)return;const p=this.point(e),x=p.x-d.start.x,y=p.y-d.start.y;if(Math.hypot(x,y)>10)this.clearPress();
  const obj=this.state.entities.find(n=>n.id===d.id),snap=obj&&Math.hypot(x,y)>10?snapExitAction(this.level,this.state,d.id,{x:obj.x+x/this.unit,y:obj.y-y/this.unit}):undefined;
  const dx=snap?.dx??Math.round(x/this.unit),dy=snap?.dy??-Math.round(y/this.unit);for(const item of d.nodes)item.node.setPosition(item.x+x,item.y+y);
  if(dx!==d.dx||dy!==d.dy){d.dx=dx;d.dy=dy;d.route=dx||dy?planDrag(this.level,this.state,{entityId:d.id,dx,dy}):null;this.preview(d);}
  e.propagationStopped=true;
 }
 private preview(d:Drag):void{
  const obj=[...this.state.entities,...this.state.foods].find(e=>e.id===d.id);if(!obj)return;
  const g=this.hint.getComponent(Graphics)||this.hint.addComponent(Graphics);g.clear();this.ghost.active=!!(d.dx||d.dy);if(!this.ghost.active)return;
  const p=this.position(obj),valid=d.route!==null;poly(this.ghost,obj.shape,this.unit,valid?'#7BDC70':'#F46D64');this.ghost.setPosition(p.x+d.dx*this.unit,p.y-d.dy*this.unit);
  if(valid){g.lineWidth=4;g.strokeColor=new Color(255,255,255,200);g.moveTo(p.x,p.y);let x=p.x,y=p.y;for(const step of d.route!){x+=step.dx*this.unit;y-=step.dy*this.unit;g.lineTo(x,y);}g.stroke();}
 }
 private end(e:EventTouch):void{const d=this.drag;if(!d||e.getID()!==d.touchId)return;this.move(e);this.cancel();if(this.enabled&&(d.dx||d.dy))this.dispatch({entityId:d.id,dx:d.dx,dy:d.dy});e.propagationStopped=true;}
 private cancel(e?:EventTouch):void{if(e&&this.drag&&e.getID()!==this.drag.touchId)return;this.clearPress();if(this.drag)for(const item of this.drag.nodes)if(isValid(item.node)){item.node.setPosition(item.x,item.y);const o=item.node.getComponent(UIOpacity);if(o)o.opacity=255;}this.drag=null;this.hint?.getComponent(Graphics)?.clear();if(this.ghost)this.ghost.active=false;}
 render(state:State):void{this.cancel();this.state=state;clear(this.layer);clear(this.locks);this.visuals.clear();this.grips.clear();
  for(const e of state.entities){const b=footprintBounds(e.shape),p=this.position(e),n=uiNode(this.layer,'Demo2Block-'+e.id,p.x,p.y,b.w*this.unit,b.h*this.unit);poly(n,e.shape,this.unit,e.color?COLORS[e.color]:'#A7ACAF',e.type==='pan');this.visuals.set(e.id,n);}
  for(const f of state.foods){const b=footprintBounds(f.shape),p=this.position(f),n=this.art.image(this.layer,'Demo2Food-'+f.id,FOOD_KEYS[f.kind],p.x,p.y,b.w*this.unit*.94,b.h*this.unit*.94);this.visuals.set(f.id,n);}
  // Explicit grip remains above food: moving a whole loaded container is distinct from lifting food.
  for(const e of state.entities){const first=e.shape[0],p=this.grid(e.x+first.x,e.y+first.y),x=p.x+this.unit*.32,y=p.y+this.unit*.32,n=uiNode(this.layer,'Demo2Grip-'+e.id,x,y,30,22),g=n.addComponent(Graphics);g.fillColor=new Color(255,255,255,225);g.roundRect(-14,-10,28,20,6);g.fill();g.strokeColor=hex(e.color?COLORS[e.color]:'#6B7175');g.lineWidth=2;for(const yy of [-4,0,4]){g.moveTo(-7,yy);g.lineTo(7,yy);g.stroke();}this.grips.set(e.id,{x,y});this.visuals.set('grip:'+e.id,n);}
  const blocked=lockedCells(this.level,state);
  for(const area of this.level.lockedAreas||[]){if(!area.cells.some(c=>blocked.has(`${c.x},${c.y}`)))continue;
   for(const c of area.cells){const p=this.grid(c.x,c.y),tile=uiNode(this.locks,`Demo2Lock-${area.id}-${c.x}-${c.y}`,p.x,p.y,this.unit-2,this.unit-2),g=tile.addComponent(Graphics);g.fillColor=new Color(72,81,87,220);g.roundRect(-this.unit/2+1,-this.unit/2+1,this.unit-2,this.unit-2,6);g.fill();g.strokeColor=hex(area.color?COLORS[area.color]:'#E6C99A');g.lineWidth=2;g.roundRect(-this.unit/2+3,-this.unit/2+3,this.unit-6,this.unit-6,5);g.stroke();}
   const xs=area.cells.map(c=>c.x),ys=area.cells.map(c=>c.y),p=this.grid((Math.min(...xs)+Math.max(...xs))/2,(Math.min(...ys)+Math.max(...ys))/2),done=state.delivered.filter(id=>!area.color||this.level.orders.find(o=>o.id===id)?.color===area.color).length;
   const text=label(this.locks,`${area.color?({red:'红',yellow:'黄',green:'绿',blue:'蓝'}[area.color])+'色出餐':'出餐'}\n${Math.min(done,area.requiredDeliveries)}/${area.requiredDeliveries} 解锁`,p.x,p.y,Math.max(this.unit-6,(Math.max(...xs)-Math.min(...xs)+1)*this.unit-6),this.unit-4,Math.min(19,this.unit*.24),'#FFF3DC');text.isBold=true;
  }
 }
 dispose():void{if(this.dead)return;this.dead=true;this.cancel();this.node.off(Node.EventType.TOUCH_START,this.start,this);this.node.off(Node.EventType.TOUCH_MOVE,this.move,this);this.node.off(Node.EventType.TOUCH_END,this.end,this);this.node.off(Node.EventType.TOUCH_CANCEL,this.cancel,this);}
}
