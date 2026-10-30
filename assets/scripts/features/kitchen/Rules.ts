export type Cell = [number, number];
export type Direction = 'up' | 'down' | 'left' | 'right';
export interface Recipe { id: string; name: string; ingredients: Record<string, number>; device: string; }
export interface Customer { id: string; name: string; orders: {recipe: string; count: number}[]; }
export interface Device { x: number; y: number; type: string; name: string; stations: Cell[]; }
export interface Level { availableProps?:('undo'|'overtime'|'ad-slot')[]; restaurantId?:string;restaurantName?:string;stageNumber?:number;chapter?:string;introductions?:string[]; id: number; name: string; tip: string; width: number; height: number; start: Cell; walls: Cell[]; items: {x:number;y:number;type:string}[]; devices: Device[]; recipes: Recipe[]; customers: Customer[]; capacity: number; budget: number; optimal?: number; solution?: Direction[]; }
export type Status = 'playing' | 'won' | 'full' | 'steps';
export interface State { pos: Cell; remaining: number[]; bag: Record<string,number>; done: number[][]; active: number[]; queue: number; steps: number; status: Status; }
export interface ActionEvent { kind: 'walk' | 'pickup' | 'cook' | 'leave' | 'arrive'; pos?: Cell; item?: string; recipe?: string; customer?: number; }
export const DIRECTIONS: Direction[] = ['up','right','down','left'];
const vectors: Record<Direction,Cell> = {up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
export const same = (a: Cell,b: Cell): boolean => a[0]===b[0] && a[1]===b[1];
export const bagSize = (s: State): number => Object.values(s.bag).reduce((a,b)=>a+b,0);
export function initialState(l: Level): State { return {pos:[...l.start],remaining:l.items.map((_,i)=>i),bag:{},done:l.customers.map(c=>c.orders.map(()=>0)),active:l.customers.slice(0,3).map((_,i)=>i),queue:Math.min(3,l.customers.length),steps:0,status:'playing'}; }
export function isComplete(l: Level,s: State,c: number): boolean { return l.customers[c].orders.every((o,i)=>s.done[c][i]>=o.count); }
export function move(l: Level,input: State,direction: Direction): {state:State;events:ActionEvent[]} {
 const s:State={...input,pos:[...input.pos],remaining:[...input.remaining],bag:{...input.bag},done:input.done.map(a=>[...a]),active:[...input.active]};
 const events:ActionEvent[]=[];
 if(s.status!=='playing')return {state:s,events};
 const v=vectors[direction];
 const blocked=(p:Cell)=>p[0]<0||p[1]<0||p[0]>=l.width||p[1]>=l.height||l.walls.some(w=>same(w,p))||l.devices.some(d=>same([d.x,d.y],p));
 let next:Cell=[s.pos[0]+v[0],s.pos[1]+v[1]];
 if(blocked(next))return {state:s,events};
 s.steps++;
 while(!blocked(next)){
  s.pos=next;events.push({kind:'walk',pos:[...next]});
  for(const i of [...s.remaining]){ const item=l.items[i];if(item.x!==next[0]||item.y!==next[1])continue;s.remaining.splice(s.remaining.indexOf(i),1);s.bag[item.type]=(s.bag[item.type]||0)+1;events.push({kind:'pickup',item:item.type,pos:[...next]});if(bagSize(s)>=l.capacity){s.status='full';return {state:s,events};}}
  next=[s.pos[0]+v[0],s.pos[1]+v[1]];
 }
 const device=l.devices.find(d=>d.stations.some(p=>same(p,s.pos)));
 if(device){
  let changed=true;
  while(changed){
   changed=false;
   for(const ci of [...s.active].sort((a,b)=>a-b)){
    const customer=l.customers[ci];
    for(let oi=0;oi<customer.orders.length;oi++){
     const order=customer.orders[oi],r=l.recipes.find(r=>r.id===order.recipe)!;
     if(r.device!==device.type)continue;
     while(s.done[ci][oi]<order.count && Object.entries(r.ingredients).every(([t,n])=>(s.bag[t]||0)>=n)){
      for(const [t,n] of Object.entries(r.ingredients)){s.bag[t]-=n;if(!s.bag[t])delete s.bag[t];}
      s.done[ci][oi]++;events.push({kind:'cook',recipe:r.id,customer:ci});changed=true;
     }
    }
   }
   // Replace finished customers left-to-right; queue indices are the visible priority.
   for(let slot=0;slot<s.active.length;slot++){
    const ci=s.active[slot];if(ci<0||!isComplete(l,s,ci))continue;
    events.push({kind:'leave',customer:ci});
    if(s.queue<l.customers.length){s.active[slot]=s.queue;events.push({kind:'arrive',customer:s.queue});s.queue++;changed=true;}else{s.active[slot]=-1;}
   }
   s.active=s.active.filter(c=>c>=0).sort((a,b)=>a-b);
  }
 }
 if(l.customers.every((_,i)=>isComplete(l,s,i)))s.status='won';
 else if(s.steps>=l.budget)s.status='steps';
 return {state:s,events};
}
export function stateKey(s: State): string {return JSON.stringify([s.pos,s.remaining,Object.entries(s.bag).sort(([a],[b])=>a.localeCompare(b)),s.done,s.active,s.queue]);}
export function validateLevel(l:Level):string[]{
 const errors:string[]=[];
 if(!Number.isInteger(l.capacity)||l.capacity<2)errors.push('容量必须至少为2');
 if(!Number.isInteger(l.budget)||l.budget<1)errors.push('步数必须为正整数');
 if(!Number.isInteger(l.width)||!Number.isInteger(l.height)||l.width<2||l.height<2)errors.push('棋盘尺寸无效');
 const inside=(p:Cell)=>Number.isInteger(p[0])&&Number.isInteger(p[1])&&p[0]>=0&&p[1]>=0&&p[0]<l.width&&p[1]<l.height;
 const occupied=new Set<string>();
 for(const p of [...l.walls,...l.devices.map(d=>[d.x,d.y] as Cell),l.start,...l.items.map(i=>[i.x,i.y] as Cell)]){const k=p.join(',');if(!inside(p))errors.push('坐标越界 '+k);if(occupied.has(k))errors.push('格子重叠 '+k);occupied.add(k);}
 const stationKeys=new Set<string>();for(const d of l.devices)for(const p of d.stations){const k=p.join(',');if(!inside(p)||l.walls.some(w=>same(w,p))||l.devices.some(q=>same([q.x,q.y],p)))errors.push('操作格非法 '+k);if(stationKeys.has(k))errors.push('操作格重复 '+k);stationKeys.add(k);}
 const need:Record<string,number>={},have:Record<string,number>={};
 if(!l.customers.length)errors.push('至少一位客人');
 if(new Set(l.recipes.map(r=>r.id)).size!==l.recipes.length)errors.push('配方ID重复');
 if(new Set(l.customers.map(c=>c.id)).size!==l.customers.length)errors.push('客人ID重复');
 for(const r of l.recipes){const nums=Object.values(r.ingredients);if(!nums.length||nums.some(n=>!Number.isInteger(n)||n<1))errors.push('配方材料数量无效 '+r.id);if(nums.reduce((a,b)=>a+b,0)>=l.capacity)errors.push('配方材料达到容量，无法制作 '+r.id);if(!l.devices.some(d=>d.type===r.device&&d.stations.length))errors.push('缺少可制作设备 '+r.id);}
 for(const c of l.customers){if(!c.orders.length)errors.push('客人订单为空');for(const o of c.orders){const r=l.recipes.find(r=>r.id===o.recipe);if(!r){errors.push('未知配方 '+o.recipe);continue;}if(!Number.isInteger(o.count)||o.count<1)errors.push('订单份数无效');for(const [t,n]of Object.entries(r.ingredients))need[t]=(need[t]||0)+n*o.count;}}
 for(const i of l.items)have[i.type]=(have[i.type]||0)+1;
 for(const t of new Set([...Object.keys(need),...Object.keys(have)]))if((need[t]||0)!==(have[t]||0))errors.push('材料数量不匹配 '+t);
 return errors;
}


