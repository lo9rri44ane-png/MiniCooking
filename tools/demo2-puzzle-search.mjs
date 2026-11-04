import {actDrag,entityCells,initialState,lockedCells} from '../assets/scripts/features/demo2/Rules.ts';
const same=(a,b)=>a.length===b.length&&a.every(p=>b.some(q=>p.x===q.x&&p.y===q.y));
/** Correct-slot packing may use any interchangeable food instance. Wrong-box storage is separate. */
export function correctSlot(level,state,food,carrier){return level.orders.some(o=>!state.delivered.includes(o.id)&&o.color===carrier.color&&same(o.shape,carrier.shape)&&o.foods.some(r=>r.kind===food.kind&&same(r.shape,food.shape)&&r.x===food.x-carrier.x&&r.y===food.y-carrier.y));}
export function temporaryPacking(level,before,after,id){const f=after.foods.find(f=>f.id===id);if(!f?.carrierId)return false;const old=before.foods.find(f=>f.id===id);if(old?.carrierId===f.carrierId&&old.x===f.x&&old.y===f.y)return false;const tray=after.entities.find(t=>t.id===f.carrierId);return !!tray&&!correctSlot(level,after,f,tray);}
const shapeTag=shape=>shape.map(p=>`${p.x},${p.y}`).sort().join('/');
/** Identical ingredients/boxes are interchangeable; no factorial identity-only search branches. */
export function puzzleStateKey(s){const boxes=new Map(s.entities.map(e=>[e.id,`${e.type}:${e.color||''}:${shapeTag(e.shape)}@${e.x},${e.y}`]));return Array.from(boxes.values()).sort().join(';')+'|'+s.foods.map(f=>`${f.kind}:${shapeTag(f.shape)}@${f.x},${f.y}#${f.carrierId?boxes.get(f.carrierId):''}`).sort().join(';')+'|'+s.delivered.slice().sort().join(',');}
const fingerprint=puzzleStateKey;
function maskAt(shape,x,y,w,h){let mask=0;for(const p of shape){const xx=x+p.x,yy=y+p.y;if(xx<0||yy<0||xx>=w||yy>=h)return -1;mask|=1<<(yy*w+xx);}return mask;}
function reached(shape,x,y,blocked,w,h){const queue=[{x,y}],seen=new Set([y*w+x]);for(let i=0;i<queue.length;i++)for(const [dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const xx=queue[i].x+dx,yy=queue[i].y+dy,k=yy*w+xx,mask=maskAt(shape,xx,yy,w,h);if(mask<0||mask&blocked||seen.has(k))continue;seen.add(k);queue.push({x:xx,y:yy});}return queue;}
/** Fast collision prefilter; every accepted edge is still evaluated by shipping actDrag. */
export function searchEdges(level,state,options={}){
 const w=level.width,h=level.height;if(w*h>30)throw Error('Exact small-puzzle search supports at most30cells');
 let lock=0;for(const k of lockedCells(level,state)){const[x,y]=k.split(',').map(Number);lock|=1<<(y*w+x);}
 const em=new Map(state.entities.map(e=>[e.id,maskAt(e.shape,e.x,e.y,w,h)])),fm=new Map(state.foods.map(f=>[f.id,maskAt(f.shape,f.x,f.y,w,h)]));
 const projected=(a,target)=>{const e=state.entities.find(e=>e.id===a.entityId);return{...state,entities:e?state.entities.map(t=>t.id===e.id?{...t,x:t.x+a.dx,y:t.y+a.dy}:t):state.entities,foods:state.foods.map(f=>{if(e&&f.carrierId===e.id)return{...f,x:f.x+a.dx,y:f.y+a.dy};if(!e&&f.id===a.entityId){const n={...f,x:f.x+a.dx,y:f.y+a.dy};if(target)n.carrierId=target;else delete n.carrierId;return n;}return f;})};};
 const edges=[],seen=new Set();const commit=(a,inside=false,target)=>{const n=options.fastMoves&&inside?projected(a,target):actDrag(level,state,a);if(n===state||options.allowTemporaryPacking===false&&temporaryPacking(level,state,n,a.entityId))return;const key=fingerprint(n);if(seen.has(key))return;seen.add(key);edges.push({action:a,state:n});};
 for(const e of state.entities){if(em.get(e.id)&lock)continue;let blocked=lock;for(const other of state.entities)if(other.id!==e.id)blocked|=em.get(other.id);for(const f of state.foods)if(f.carrierId!==e.id)blocked|=fm.get(f.id);
  for(const p of reached(e.shape,e.x,e.y,blocked,w,h))if(p.x!==e.x||p.y!==e.y)commit({entityId:e.id,dx:p.x-e.x,dy:p.y-e.y},true);
  const foods=state.foods.filter(f=>f.carrierId===e.id);if(!foods.length)continue;
  const full=level.orders.some(o=>!state.delivered.includes(o.id)&&(state.activeOrderIds===undefined||state.activeOrderIds.includes(o.id))&&o.color===e.color&&same(o.shape,e.shape)&&o.foods.length===foods.length&&foods.every(f=>correctSlot(level,state,f,e)));
  if(!full)continue;const bw=Math.max(...e.shape.map(p=>p.x))+1,bh=Math.max(...e.shape.map(p=>p.y))+1;
  for(const ex of level.exits)if(ex.color===e.color){const vertical=ex.side==='top'||ex.side==='bottom';for(let a=ex.start;a<ex.start+ex.width;a++){const x=vertical?a:ex.side==='left'?-1:w-bw+1,y=vertical?(ex.side==='top'?-1:h-bh+1):a;commit({entityId:e.id,dx:x-e.x,dy:y-e.y});}}
 }
 for(const f of state.foods){if(fm.get(f.id)&lock||f.carrierId&&(em.get(f.carrierId)&lock))continue;let hard=lock;for(const other of state.foods)if(other.id!==f.id)hard|=fm.get(other.id);let blocked=hard;for(const e of state.entities)if(e.id!==f.carrierId)blocked|=em.get(e.id);
  for(const p of reached(f.shape,f.x,f.y,blocked,w,h)){if(p.x===f.x&&p.y===f.y)continue;const mask=maskAt(f.shape,p.x,p.y,w,h);if(state.entities.some(e=>mask&em.get(e.id)))continue;commit({entityId:f.id,dx:p.x-f.x,dy:p.y-f.y},true);}
  // A food may cross its source and final receiving box, but no third container.
  for(const tray of state.entities){if(em.get(tray.id)&lock)continue;const target=em.get(tray.id);let b=hard;for(const e of state.entities)if(e.id!==tray.id&&e.id!==f.carrierId)b|=em.get(e.id);let route;
   for(let y=0;y<h;y++)for(let x=0;x<w;x++){if(x===f.x&&y===f.y)continue;const mask=maskAt(f.shape,x,y,w,h);if(mask<0||(mask&target)!==mask)continue;
    if(mask&b)continue;route??=reached(f.shape,f.x,f.y,b,w,h);if(!route.some(p=>p.x===x&&p.y===y))continue;commit({entityId:f.id,dx:x-f.x,dy:y-f.y},true,tray.id);
   }}
 }
 return edges;
}
class Heap{data=[];push(node){let i=this.data.length;this.data.push(node);while(i){const p=(i-1)>>1;if(this.data[p].score<=node.score)break;this.data[i]=this.data[p];i=p;}this.data[i]=node;}pop(){const first=this.data[0],last=this.data.pop();if(this.data.length){let i=0;while(i*2+1<this.data.length){let c=i*2+1;if(c+1<this.data.length&&this.data[c+1].score<this.data[c].score)c++;if(this.data[c].score>=last.score)break;this.data[i]=this.data[c];i=c;}this.data[i]=last;}return first;}get length(){return this.data.length;}}
const estimate=(l,s)=>l.orders.length-s.delivered.length+s.foods.filter(f=>{const c=s.entities.find(e=>e.id===f.carrierId);return !c||!correctSlot(l,s,f,c);}).length;
/** A* gives a feasible route; only exhausted search supports an impossibility statement. */
export function searchPuzzle(level,{maxStates=12000,timeoutMs=12000,goal='win',allowTemporaryPacking=true,algorithm='astar',fastMoves=false,compressionWeight=0}={}){
 const start=initialState(level),heap=new Heap(),best=new Map(),began=Date.now();let expanded=0;
 heap.push({state:start,parent:null,action:null,cost:0,score:0});best.set(fingerprint(start),0);
 while(heap.length){if(expanded>=maxStates||Date.now()-began>=timeoutMs)return{status:'budget',visited:best.size,expanded,elapsedMs:Date.now()-began,path:[],lowerBoundMoves:algorithm==='bfs'?heap.data[0].cost:undefined};const node=heap.pop(),sig=fingerprint(node.state);if(best.get(sig)!==node.cost)continue;
  if(goal==='firstDelivery'?node.state.delivered.length>0:node.state.won){const path=[];for(let n=node;n.action;n=n.parent)path.push(n.action);path.reverse();let replay=start;for(const a of path){const n=actDrag(level,replay,a);if(n===replay)return{status:'model-mismatch',path:[],visited:best.size,expanded,elapsedMs:Date.now()-began};replay=n;}if(goal==='firstDelivery'?!replay.delivered.length:!replay.won)return{status:'model-mismatch',path:[],visited:best.size,expanded,elapsedMs:Date.now()-began};return{status:'solved',path,shippingReplay:true,visited:best.size,expanded,elapsedMs:Date.now()-began};}
  expanded++;for(const edge of searchEdges(level,node.state,{allowTemporaryPacking,fastMoves})){const key=fingerprint(edge.state),cost=node.cost+1;if((best.get(key)??Infinity)<=cost)continue;best.set(key,cost);heap.push({state:edge.state,parent:node,action:edge.action,cost,score:cost+(algorithm==='bfs'?0:estimate(level,edge.state)*3+compressionWeight*edge.state.foods.filter(f=>!f.carrierId).reduce((n,f)=>n+f.shape.length,0))});}
 }
 return{status:'exhausted',path:[],visited:best.size,expanded,elapsedMs:Date.now()-began};
}
