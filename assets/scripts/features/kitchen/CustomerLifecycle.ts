/** Customer-only queues deliberately have no authority over the board movement gate. */
export class CustomerLifecycle {
 readonly ready=new Set<number>();readonly blocksMovement=false;
 private epoch=0;private queues:Promise<unknown>[]=[Promise.resolve(),Promise.resolve(),Promise.resolve()];
 private onReady:(customer:number)=>void;
 constructor(onReady:(customer:number)=>void){this.onReady=onReady;}
 private enqueue(slot:number,work:(valid:()=>boolean)=>Promise<void>):Promise<void>{const epoch=this.epoch,valid=()=>epoch===this.epoch;const p=this.queues[slot].then(async()=>{if(valid())await work(valid);});this.queues[slot]=p.catch(()=>{});return p;}
 arrive(slot:number,customer:number,show:()=>Promise<boolean>):Promise<void>{return this.enqueue(slot,async valid=>{if(await show()&&valid()){this.ready.add(customer);this.onReady(customer);}});}
 depart(slot:number,customer:number,hide:()=>Promise<boolean>):Promise<void>{this.ready.delete(customer);return this.enqueue(slot,async()=>{await hide();});}
 effect(slot:number,work:()=>Promise<void>):Promise<void>{return this.enqueue(slot,async()=>{await work();});}
 settled():Promise<unknown[]>{return Promise.all(this.queues);}
 reset():void{this.epoch++;this.ready.clear();this.queues=[Promise.resolve(),Promise.resolve(),Promise.resolve()];}
}
