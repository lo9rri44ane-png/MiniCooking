import type {Level,State} from './Rules';

/** Presentation-only count: completing an order does not complete the departure. */
export class CustomerDepartureCount {
 private departed=new Set<number>();private epoch=0;private total:number;
 constructor(total:number){this.total=Math.max(0,Math.floor(total));}
 get remaining():number{return this.total-this.departed.size;}
 get generation():number{return this.epoch;}
 /** Rebuild on undo/retry. Never call this for ordinary asynchronous HUD renders. */
 reset(level:Pick<Level,'customers'>,state:Pick<State,'active'|'queue'|'done'>):number{
  this.total=level.customers.length;this.departed.clear();this.epoch++;
  const active=new Set(state.active);
  level.customers.forEach((customer,index)=>{
   if(index<state.queue&&!active.has(index)&&customer.orders.every((order,i)=>(state.done[index]?.[i]||0)>=order.count))this.departed.add(index);
  });return this.epoch;
 }
 /** The captured generation rejects a late callback from an undone/previous run. */
 markDeparted(customer:number,generation=this.epoch):boolean{
  if(generation!==this.epoch||!Number.isInteger(customer)||customer<0||customer>=this.total||this.departed.has(customer))return false;
  this.departed.add(customer);return true;
 }
}
