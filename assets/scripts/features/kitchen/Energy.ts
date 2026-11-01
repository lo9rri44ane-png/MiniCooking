import {readStoredValue} from '../../framework/core/SaveStore';
import {gmAccess} from './GMAccess';
import type {StoragePort} from '../../framework/core/SaveStore';
import type {KitchenResetOperation} from './GameSaveReset';
export const ENERGY_CAP=10;
export const RECOVERY_MS=10*60*1000;
const KEY='kitchen-energy-v1';
interface EnergyData {version:1;value:number;anchor:number;attempt:{id:string;charged:boolean}|null;}
export class EnergyBank {
 private data:EnergyData;private storage:StoragePort;private clock:()=>number;error='';
 constructor(storage:StoragePort,clock:()=>number=Date.now){
  this.storage=storage;this.clock=clock;this.data={version:1,value:ENERGY_CAP,anchor:clock(),attempt:null};
  try{const raw=readStoredValue(storage,KEY);if(raw!==null){const p=JSON.parse(raw);if(!p||p.version!==1||!Number.isInteger(p.value)||p.value<0||p.value>ENERGY_CAP||!Number.isFinite(p.anchor)||!(p.attempt===null||(typeof p.attempt?.id==='string'&&typeof p.attempt?.charged==='boolean')))throw Error('体力存档无效，原件保留');this.data=p;}
   this.refresh();if(this.data.attempt){const d=this.copy();if(!d.attempt!.charged)this.charge(d);d.attempt=null;this.commit(d);}
  }catch(e){this.error=String(e);}
 }
 private copy():EnergyData{return {...this.data,attempt:this.data.attempt?{...this.data.attempt}:null};}
 private commit(d:EnergyData):void{if(this.error)throw Error(this.error);this.storage.setItem(KEY,JSON.stringify(d));this.data=d;}
 private refresh():void{if(this.error||this.data.value>=ENERGY_CAP)return;const now=this.clock(),elapsed=Math.max(0,now-this.data.anchor),count=Math.floor(elapsed/RECOVERY_MS);if(!count)return;const d=this.copy();d.value=Math.min(ENERGY_CAP,d.value+count);d.anchor=d.value===ENERGY_CAP?now:d.anchor+count*RECOVERY_MS;this.commit(d);}
 private charge(d:EnergyData):void{if(d.value===ENERGY_CAP)d.anchor=this.clock();d.value=Math.max(0,d.value-1);if(d.attempt)d.attempt.charged=true;}
 snapshot():{value:number;remainingMs:number}{this.refresh();return {value:this.data.value,remainingMs:this.data.value>=ENERGY_CAP?0:Math.max(0,RECOVERY_MS-Math.max(0,this.clock()-this.data.anchor))};}
 begin():string{if(this.error)throw Error(this.error);this.refresh();if(this.data.attempt)throw Error('上一局尚未结束');if(this.data.value<1)throw Error('体力不足，请等待体力恢复');const d=this.copy(),id=String(this.clock())+'-'+Math.random().toString(36).slice(2);d.attempt={id,charged:false};this.commit(d);return id;}
 fail(id:string):void{this.refresh();if(this.data.attempt?.id!==id||this.data.attempt.charged)return;const d=this.copy();this.charge(d);this.commit(d);}
 end(id:string,reason:'won'|'quit'|'gm'):void{this.refresh();if(this.data.attempt?.id!==id)return;const d=this.copy();if(reason==='quit'&&!d.attempt!.charged)this.charge(d);d.attempt=null;this.commit(d);}
 addGM(amount:number):void{gmAccess.require();if(!Number.isInteger(amount)||amount<1)throw Error('增加体力必须是正整数');this.refresh();const d=this.copy();d.value=Math.min(ENERGY_CAP,d.value+amount);if(d.value===ENERGY_CAP)d.anchor=this.clock();this.commit(d);}
 prepareReset():KitchenResetOperation{const data:EnergyData={version:1,value:ENERGY_CAP,anchor:this.clock(),attempt:null};return {key:KEY,read:()=>readStoredValue(this.storage,KEY),write:value=>{if(value===null)this.storage.removeItem(KEY);else this.storage.setItem(KEY,value);},fresh:JSON.stringify(data),accept:()=>{this.data=data;this.error='';}};}
}

