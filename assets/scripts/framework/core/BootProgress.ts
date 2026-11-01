/** Weighted work completion, never wall-clock simulation. */
export class BootProgress {
 private values=[0,0,0,0,0];private stopped=false;
 readonly weights=[2,13,30,50,5];
 update(stage:number,done:number,total:number):number{if(!this.stopped&&stage>=0&&stage<5&&total>0)this.values[stage]=Math.max(this.values[stage],Math.min(1,Math.max(0,done/total)));return this.percent;}
 get percent():number{return this.values.reduce((n,v,i)=>n+v*this.weights[i],0);}
 stop():void{this.stopped=true;}
}
