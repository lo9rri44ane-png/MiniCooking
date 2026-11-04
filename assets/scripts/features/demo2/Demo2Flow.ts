import type {Level,Order} from './Types';

export type GuestPhase='empty'|'appearing'|'ready'|'leaving';
export interface GuestSlot {orders:Order[];phase:GuestPhase;generation:number;}
/** At most two assembled-box requests per customer; each box can contain its complete packing. */
export class Demo2Customers {
 readonly slots:GuestSlot[]=Array.from({length:3},()=>({orders:[],phase:'empty',generation:0}));
 private cursor=0;private readonly orders:Order[];private readonly capacity:number;
 constructor(orders:Order[],capacity=3){this.orders=orders;this.capacity=capacity;if(!Number.isInteger(capacity)||capacity<1||capacity>3)throw Error('同时接待客人数须为1至3');if(orders.some(o=>o.foods.length<1||o.foods.length>o.shape.length))throw Error('订单食物数量须在餐盒占格范围内');}
 fill(slot:number):GuestSlot {const s=this.slots[slot];if(s.phase!=='empty'||slot>=this.capacity)return s;s.orders=[];
  while(this.cursor<this.orders.length&&s.orders.length<2){const o=this.orders[this.cursor++];s.orders.push(o);}
  s.generation++;s.phase=s.orders.length?'appearing':'empty';return s;
 }
 ready(slot:number,generation:number):boolean{const s=this.slots[slot];if(s.phase!=='appearing'||s.generation!==generation)return false;s.phase='ready';return true;}
 active(delivered:readonly string[]):string[]{return this.slots.filter(s=>s.phase==='ready').flatMap(s=>s.orders.filter(o=>!delivered.includes(o.id)).map(o=>o.id));}
 slotFor(id:string):number{return this.slots.findIndex(s=>s.orders.some(o=>o.id===id));}
 beginLeave(slot:number,delivered:readonly string[]):boolean{const s=this.slots[slot];if(s.phase!=='ready'||!s.orders.every(o=>delivered.includes(o.id)))return false;s.phase='leaving';return true;}
 finishLeave(slot:number,generation:number):boolean{const s=this.slots[slot];if(s.phase!=='leaving'||s.generation!==generation)return false;s.phase='empty';s.orders=[];return true;}
 get remainingCustomers():number{return this.slots.filter(s=>s.phase!=='empty').length+this.queuedCustomers();}
 private queuedCustomers():number{return Math.ceil((this.orders.length-this.cursor)/2);}
}

/** Monotonic time supplied by the caller; pause and undo cannot create extra time. */
export class Demo2Countdown {
 private left:number;private last:number;private running=true;
 constructor(seconds=300,now=0){this.left=Math.max(0,seconds*1000);this.last=now;}
 remaining(now:number):number{this.settle(now);return this.left/1000;}
 setRunning(value:boolean,now:number):void{this.settle(now);this.running=value;}
 private settle(now:number):void{const elapsed=Math.max(0,now-this.last);if(this.running)this.left=Math.max(0,this.left-elapsed);this.last=Math.max(this.last,now);}
}
