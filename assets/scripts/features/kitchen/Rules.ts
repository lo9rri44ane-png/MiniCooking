export type Cell = [number, number];
export type Direction = 'up' | 'down' | 'left' | 'right';
export interface Recipe { id: string; name: string; ingredients: Record<string, number>; device: string; }
export interface Customer { id: string; name: string; orders: {recipe: string; count: number}[]; }
export interface Device { x: number; y: number; type: string; name: string; stations: Cell[]; }
export interface Level { ruleRevision?:string; stopPads?:Cell[]; switches?:{cell:Cell;group:string}[]; doors?:{cell:Cell;group:string;initialOpen?:boolean}[]; conveyors?:{cell:Cell;direction:Direction}[]; availableProps?:('undo'|'overtime'|'ad-slot')[]; restaurantId?:string;restaurantName?:string;stageNumber?:number;chapter?:string;introductions?:string[]; id: number; name: string; tip: string; width: number; height: number; start: Cell; walls: Cell[]; items: {x:number;y:number;type:string}[]; devices: Device[]; recipes: Recipe[]; customers: Customer[]; capacity: number; budget: number; optimal?: number; solution?: Direction[]; }
export type Status = 'playing' | 'won' | 'full' | 'steps';
export interface State { usedPads?:number[]; openDoors?:string[]; pos: Cell; remaining: number[]; bag: Record<string,number>; done: number[][]; active: number[]; queue: number; steps: number; status: Status; }
export interface ActionEvent { kind: 'stop-pad' | 'door-toggle' | 'conveyor' | 'walk' | 'pickup' | 'cook' | 'leave' | 'arrive'; pos?: Cell; mechanic?:number; group?:string; open?:boolean; direction?:Direction; item?: string; recipe?: string; customer?: number; }
export const DIRECTIONS: Direction[] = ['up','right','down','left'];
const vectors: Record<Direction,Cell> = {up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
export const same = (a: Cell,b: Cell): boolean => a[0]===b[0] && a[1]===b[1];
export const bagSize = (s: State): number => Object.values(s.bag).reduce((a,b)=>a+b,0);
export function initialState(l: Level): State { return {...(l.stopPads?.length?{usedPads:[]}:{}),...(l.doors?.length?{openDoors:Array.from(new Set(l.doors.filter(d=>d.initialOpen).map(d=>d.group)))}:{}),pos:[...l.start],remaining:l.items.map((_,i)=>i),bag:{},done:l.customers.map(c=>c.orders.map(()=>0)),active:l.customers.slice(0,3).map((_,i)=>i),queue:Math.min(3,l.customers.length),steps:0,status:'playing'}; }
export function isComplete(l: Level,s: State,c: number): boolean { return l.customers[c].orders.every((o,i)=>s.done[c][i]>=o.count); }
/** Transient presentation readiness; intentionally not serialized in State. Omission preserves solver semantics. */
export interface MoveOptions {readyCustomers?:ReadonlySet<number>;}
export function move(l: Level,input: State,direction: Direction,options:MoveOptions={}): {state:State;events:ActionEvent[]} {
 const s:State={...input,pos:[...input.pos],remaining:[...input.remaining],bag:{...input.bag},done:input.done.map(a=>[...a]),active:[...input.active],...(input.usedPads?{usedPads:[...input.usedPads]}:{}),...(input.openDoors?{openDoors:[...input.openDoors]}:{})};
 const events:ActionEvent[]=[];
 if(s.status!=='playing'||s.steps>=l.budget)return {state:s,events};
 let travel=direction,v=vectors[travel];
 const blocked=(p:Cell)=>p[0]<0||p[1]<0||p[0]>=l.width||p[1]>=l.height||l.walls.some(w=>same(w,p))||l.devices.some(d=>same([d.x,d.y],p))||(l.doors||[]).some(d=>same(d.cell,p)&&!(s.openDoors||[]).includes(d.group));
 let next:Cell=[s.pos[0]+v[0],s.pos[1]+v[1]];
 if(blocked(next))return {state:s,events};
 s.steps++;const visited=new Set<string>();
 while(!blocked(next)){
  const segment=next.join(',')+':'+travel+':'+[...(s.openDoors||[])].sort().join(',')+':'+[...(s.usedPads||[])].sort().join(',');if(visited.has(segment))return {state:input,events:[]};visited.add(segment);
  s.pos=next;events.push({kind:'walk',pos:[...next],direction:travel});
  for(const [index,sw]of(l.switches||[]).entries())if(same(sw.cell,s.pos)){const groups=new Set(s.openDoors||[]),open=!groups.has(sw.group);if(open)groups.add(sw.group);else groups.delete(sw.group);s.openDoors=Array.from(groups).sort();events.push({kind:'door-toggle',pos:[...s.pos],mechanic:index,group:sw.group,open});}
  for(const i of [...s.remaining]){ const item=l.items[i];if(item.x!==next[0]||item.y!==next[1])continue;s.remaining.splice(s.remaining.indexOf(i),1);s.bag[item.type]=(s.bag[item.type]||0)+1;events.push({kind:'pickup',item:item.type,pos:[...next]});if(bagSize(s)>=l.capacity){s.status='full';return {state:s,events};}}
  const pad=(l.stopPads||[]).findIndex(p=>same(p,s.pos));if(pad>=0&&!(s.usedPads||[]).includes(pad)){s.usedPads=[...(s.usedPads||[]),pad];events.push({kind:'stop-pad',pos:[...s.pos],mechanic:pad});break;}
  const belt=(l.conveyors||[]).findIndex(p=>same(p.cell,s.pos));if(belt>=0){travel=l.conveyors![belt].direction;v=vectors[travel];events.push({kind:'conveyor',pos:[...s.pos],mechanic:belt,direction:travel});}
  next=[s.pos[0]+v[0],s.pos[1]+v[1]];
 }
 const settled=settleAtStation(l,s,options);return {state:settled.state,events:[...events,...settled.events]};
}
/** Re-evaluate the current station without moving or consuming a step. Terminal states cannot revive. */
export function settleAtStation(l:Level,input:State,options:MoveOptions={}):{state:State;events:ActionEvent[]}{
 const s:State={...input,pos:[...input.pos],remaining:[...input.remaining],bag:{...input.bag},done:input.done.map(a=>[...a]),active:[...input.active],...(input.usedPads?{usedPads:[...input.usedPads]}:{}),...(input.openDoors?{openDoors:[...input.openDoors]}:{})};
 const events:ActionEvent[]=[];
 if(s.status!=='playing')return {state:s,events};
 const device=l.devices.find(d=>d.stations.some(p=>same(p,s.pos)));
 if(device){
  let changed=true;
  while(changed){
   changed=false;
   for(const ci of [...s.active].sort((a,b)=>a-b)){
    if(options.readyCustomers&&!options.readyCustomers.has(ci))continue;
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
 else if(s.steps>=l.budget&&(!options.readyCustomers||s.active.every(ci=>options.readyCustomers!.has(ci))))s.status='steps';
 return {state:s,events};
}
export function stateKey(s: State): string {return JSON.stringify([s.pos,s.remaining,Object.entries(s.bag).sort(([a],[b])=>a.localeCompare(b)),s.done,s.active,s.queue,s.usedPads?[...s.usedPads].sort((a,b)=>a-b):[],s.openDoors?[...s.openDoors].sort():[]]);}
export function validateLevel(l:Level):string[]{
 const errors:string[]=[];
 if(!Number.isInteger(l.capacity)||l.capacity<2)errors.push('容量必须至少为2');
 if(!Number.isInteger(l.budget)||l.budget<1)errors.push('步数必须为正整数');
 if(!Number.isInteger(l.width)||!Number.isInteger(l.height)||l.width<2||l.height<2)errors.push('棋盘尺寸无效');
 const inside=(p:Cell)=>Number.isInteger(p[0])&&Number.isInteger(p[1])&&p[0]>=0&&p[1]>=0&&p[0]<l.width&&p[1]<l.height;
 const occupied=new Set<string>();
 for(const p of [...l.walls,...l.devices.map(d=>[d.x,d.y] as Cell),l.start,...l.items.map(i=>[i.x,i.y] as Cell)]){const k=p.join(',');if(!inside(p))errors.push('坐标越界 '+k);if(occupied.has(k))errors.push('格子重叠 '+k);occupied.add(k);}
 const stationKeys=new Set<string>();for(const d of l.devices)for(const p of d.stations){const k=p.join(',');if(!inside(p)||l.walls.some(w=>same(w,p))||l.devices.some(q=>same([q.x,q.y],p)))errors.push('操作格非法 '+k);if(stationKeys.has(k))errors.push('操作格重复 '+k);stationKeys.add(k);}
 const floor=new Set<string>();const check=(p:Cell,k:string)=>{const id=p.join(',');if(!inside(p)||l.walls.some(w=>same(w,p))||l.devices.some(d=>same([d.x,d.y],p)))errors.push('机关坐标非法 '+k);if(floor.has(id))errors.push('机关重叠 '+id);floor.add(id);};
 for(const p of l.stopPads||[])check(p,'pad');for(const p of l.switches||[]){check(p.cell,'switch');if(!p.group?.trim()||!(l.doors||[]).some(d=>d.group===p.group))errors.push('开关组无效');}
 const initial=new Map<string,boolean>();for(const d of l.doors||[]){check(d.cell,'door');if(!d.group?.trim()||!(l.switches||[]).some(s=>s.group===d.group))errors.push('门组无效');if(same(d.cell,l.start)||l.items.some(i=>same([i.x,i.y],d.cell))||stationKeys.has(d.cell.join(',')))errors.push('门占用功能格');if(initial.has(d.group)&&initial.get(d.group)!==!!d.initialOpen)errors.push('同组门初态不一致');initial.set(d.group,!!d.initialOpen);}
 for(const c of l.conveyors||[]){check(c.cell,'belt');if(!DIRECTIONS.includes(c.direction))errors.push('传送带方向无效');}
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


