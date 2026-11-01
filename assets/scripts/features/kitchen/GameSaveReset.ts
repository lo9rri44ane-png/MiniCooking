/** Only the two kitchen records participate; settings and unrelated storage are untouched. */
export interface KitchenResetOperation {
 key:'kitchen-campaign-v1'|'kitchen-energy-v1';
 read:()=>string|null;write:(value:string|null)=>void;fresh:string;accept:()=>void;
}
export interface KitchenResetParticipant {prepareReset():KitchenResetOperation;}
/** Call only after an explicit destructive confirmation. No in-memory changes precede both writes. */
export function resetKitchenSave(campaign:KitchenResetParticipant,energy:KitchenResetParticipant):void {
 const operations=[campaign.prepareReset(),energy.prepareReset()];
 if(operations[0].key!=='kitchen-campaign-v1'||operations[1].key!=='kitchen-energy-v1')throw Error('拒绝重置非厨房存档');
 const previous=operations.map(o=>o.read());let attempted=-1;
 try{for(let i=0;i<operations.length;i++){attempted=i;operations[i].write(operations[i].fresh);}}
 catch(error){const failures:string[]=[];for(let i=attempted;i>=0;i--){try{operations[i].write(previous[i]);}catch(e){failures.push(operations[i].key+': '+String(e));}}
  throw Error('清档失败，'+(failures.length?'部分原件恢复失败，请勿继续游戏：'+failures.join('；'):'原存档已恢复')+'；'+String(error));}
 for(const operation of operations)operation.accept();
}
