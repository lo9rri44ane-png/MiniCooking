/** Run-only debug authority; never grants anything merely by enabling. */
export class GMAccess {private value=false;private listeners=new Set<(enabled:boolean)=>void>();get enabled():boolean{return this.value;}set(enabled:boolean):void{if(this.value===enabled)return;this.value=enabled;for(const listener of Array.from(this.listeners))listener(enabled);}require():void{if(!this.enabled)throw Error('请先在设置中开启GM总开关');}subscribe(listener:(enabled:boolean)=>void):()=>void{this.listeners.add(listener);return()=>this.listeners.delete(listener);}}
export const gmAccess=new GMAccess();
