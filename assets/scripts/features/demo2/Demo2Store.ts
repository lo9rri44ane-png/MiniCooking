import{LEVELS}from'./Levels';
const validLevels=new Set(LEVELS.map(l=>l.id));
import{SaveStore}from'../../framework/core/SaveStore';import type{StoragePort}from'../../framework/core/SaveStore';
export interface Progress{cleared:number[];}
export class Demo2Store{private store:SaveStore<Progress>;constructor(storage:StoragePort){this.store=new SaveStore(storage,'mini-cooking-demo2-rect-v2',1,()=>({cleared:[]}),v=>!!v&&Array.isArray((v as Progress).cleared)&&(v as Progress).cleared.every(n=>Number.isInteger(n)&&validLevels.has(n)));}load():Progress{return this.store.load();}win(id:number):void{const p=this.load();if(!p.cleared.includes(id))this.store.save({cleared:[...p.cleared,id].sort((a,b)=>a-b)});}}
