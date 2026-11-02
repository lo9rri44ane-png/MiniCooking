import type {Action,Cell,Entity,Food,Level,State} from './Types';
const key=(p:Cell)=>`${p.x},${p.y}`;
const cells=(e:Entity|Food)=>e.shape.map(p=>({x:p.x+e.x,y:p.y+e.y}));
const same=(a:Cell[],b:Cell[])=>a.length===b.length&&a.every(p=>b.some(q=>key(p)===key(q)));
export function initialState(l:Level):State{return {entities:clone(l.entities),foods:clone(l.foods),delivered:[],returned:[],won:false};}
export function act(l:Level,s:State,a:Action):State {return straight(l,s,a,false);}
function straight(l:Level,s:State,a:Action,transit:boolean,foodPass?:Set<string>):State {
 if(s.won||!Number.isInteger(a.dx)||!Number.isInteger(a.dy)||(!a.dx&&!a.dy)||(a.dx&&a.dy))return s;
 const n:State=clone(s);const e=n.entities.find(e=>e.id===a.entityId);const f=n.foods.find(f=>f.id===a.entityId);const obj=e||f;if(!obj)return s;
 const length=Math.abs(a.dx||a.dy),dx=Math.sign(a.dx),dy=Math.sign(a.dy);
 const allowed=foodPass||foodContainers(s,a);if(f)delete f.carrierId;
 for(let step=0;step<length;step++) {
 obj.x+=dx;obj.y+=dy;if(e)n.foods.filter(f=>f.carrierId===e.id).forEach(f=>{f.x+=dx;f.y+=dy;});
 const c=cells(obj);if(e){if(n.entities.some(other=>other.id!==e.id&&cells(other).some(p=>c.some(q=>key(p)===key(q)))))return s;if(n.foods.some(other=>other.carrierId!==e.id&&cells(other).some(p=>c.some(q=>key(p)===key(q)))))return s;}
 const outside=c.some(p=>p.x<0||p.y<0||p.x>=l.width||p.y>=l.height);
 if(outside){
 if(!e)return s;
 const side=dx<0?'left':dx>0?'right':dy<0?'top':'bottom';const axis=c.map(p=>dx?p.y:p.x);
 const exit=l.exits.find(ex=>ex.side===side&&axis.every(v=>v>=ex.start&&v<ex.start+ex.width)&&(e.type==='pan'||ex.color===e.color));if(!exit)return s;
 const carried=n.foods.filter(f=>f.carrierId===e.id);
 if(e.type==='pan'){if(carried.length)return s;n.returned.push(e.id);}else{
 const order=l.orders.find(o=>!n.delivered.includes(o.id)&&o.color===e.color&&same(o.shape,e.shape)&&o.foods.length===carried.length&&recipeMatches(o.foods,carried,e));
 if(!order||!same(carried.flatMap(cells),c))return s;n.delivered.push(order.id);
 }
 n.entities=n.entities.filter(x=>x.id!==e.id);n.foods=n.foods.filter(x=>x.carrierId!==e.id);n.won=n.delivered.length===l.orders.length;return n;
 }
 if(e){if(n.entities.some(other=>other.id!==e.id&&cells(other).some(p=>c.some(q=>key(p)===key(q)))))return s;if(n.foods.some(other=>other.carrierId!==e.id&&cells(other).some(p=>c.some(q=>key(p)===key(q)))))return s;}
 else if(f){const fc=cells(f);if(n.foods.some(other=>other.id!==f.id&&cells(other).some(p=>fc.some(q=>key(p)===key(q)))))return s;
 const overlapping=n.entities.filter(other=>cells(other).some(p=>fc.some(q=>key(p)===key(q))));
 if(overlapping.some(other=>!allowed.has(other.id)))return s;
 if(step===length-1&&!transit&&overlapping.some(other=>!fc.every(p=>cells(other).some(q=>key(p)===key(q)))))return s;
 if(step===length-1&&overlapping.length&&fc.every(p=>cells(overlapping[0]).some(q=>key(p)===key(q))))f.carrierId=overlapping[0].id;
 }
 }return n;
}
export const move=act;
export function possibleActions(l:Level,s:State):Action[]{const result:Action[]=[];for(const e of [...s.entities,...s.foods])for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]])for(let k=1;k<=Math.max(l.width,l.height);k++){const a={entityId:e.id,dx:dx*k,dy:dy*k};if(act(l,s,a)!==s)result.push(a);}return result;}

export const entityCells=cells;
export function applyAction(l:Level,s:State,a:Action){const state=actDrag(l,s,a);return {state,events:state===s?[]:state.delivered.length>s.delivered.length?['delivered']:state.returned.length>s.returned.length?['returned']:['moved'],reason:state===s?'位置被占用或出口与订单不匹配':undefined};}


function recipeMatches(required: {kind:string;shape:Cell[];x:number;y:number}[],foods:Food[],carrier:Entity):boolean{const remaining=foods.slice();return required.every(r=>{const i=remaining.findIndex(f=>f.kind===r.kind&&f.x-carrier.x===r.x&&f.y-carrier.y===r.y&&same(f.shape,r.shape));if(i<0)return false;remaining.splice(i,1);return true;});}


function clone<T>(value:T):T{return JSON.parse(JSON.stringify(value)) as T;}


/** Find an orthogonal route for a single dragged piece, with no intermediate deliveries. */
export function planDrag(l:Level,s:State,a:Action):Action[]|null{
 if(s.won||!Number.isInteger(a.dx)||!Number.isInteger(a.dy)||(!a.dx&&!a.dy))return null;
 const obj=[...s.entities,...s.foods].find(e=>e.id===a.entityId);if(!obj)return null;
 if(act(l,s,a)!==s)return[a];
 const minX=Math.min(...obj.shape.map(p=>p.x)),maxX=Math.max(...obj.shape.map(p=>p.x)),minY=Math.min(...obj.shape.map(p=>p.y)),maxY=Math.max(...obj.shape.map(p=>p.y));
 const tx=Math.max(-minX-1,Math.min(l.width-maxX,obj.x+a.dx)),ty=Math.max(-minY-1,Math.min(l.height-maxY,obj.y+a.dy));
 const outsideX=tx+minX<0||tx+maxX>=l.width,outsideY=ty+minY<0||ty+maxY>=l.height;
 if(outsideX&&outsideY||s.foods.some(f=>f.id===a.entityId)&&(outsideX||outsideY))return null;
 const allowed=foodContainers(s,{entityId:a.entityId,dx:tx-obj.x,dy:ty-obj.y});
 const queue=[{state:s,x:obj.x,y:obj.y,path:[] as Action[]}],seen=new Set([key(obj)]);
 for(let i=0;i<queue.length;i++){
  const current=queue[i];const directions=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}].sort((a,b)=>Math.abs(current.x+a.dx-tx)+Math.abs(current.y+a.dy-ty)-Math.abs(current.x+b.dx-tx)-Math.abs(current.y+b.dy-ty));
  for(const d of directions){const x=current.x+d.dx,y=current.y+d.dy,goal=x===tx&&y===ty,k=key({x,y}),step={entityId:a.entityId,...d};if(seen.has(k))continue;
   const outside=x+minX<0||x+maxX>=l.width||y+minY<0||y+maxY>=l.height;if(outside&&!goal)continue;
   const state=straight(l,current.state,step,!goal,allowed);if(state===current.state)continue;const path=[...current.path,step];if(goal)return path;
   seen.add(k);queue.push({state,x,y,path});
  }
 }return null;
}
/** One user gesture commits atomically; invalid routes never leak partial movement. */
export function actDrag(l:Level,s:State,a:Action):State{
 const path=planDrag(l,s,a);if(!path)return s;let state=s;const allowed=foodContainers(s,a);
 for(let i=0;i<path.length;i++){const next=straight(l,state,path[i],i<path.length-1,allowed);if(next===state)return s;state=next;}return state;
}

/** Only the source and final receiving container may overlap a lifted food's route. */
function foodContainers(s:State,a:Action):Set<string>{
 const food=s.foods.find(f=>f.id===a.entityId),allowed=new Set<string>();if(!food)return allowed;
 if(food.carrierId)allowed.add(food.carrierId);
 const target=food.shape.map(p=>({x:food.x+p.x+a.dx,y:food.y+p.y+a.dy}));
 for(const e of s.entities)if(target.every(p=>cells(e).some(q=>key(p)===key(q))))allowed.add(e.id);
 return allowed;
}
