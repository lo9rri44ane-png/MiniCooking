import type {StoragePort} from '../../framework/core/SaveStore';
export interface Restaurant {id:string;name:string;levelIds:number[];description?:string;}
export interface CampaignResult {best:number;bestUnassisted?:number;}
interface CampaignData {version:1;results:Record<string,CampaignResult>;guides:string[];debugAll:boolean;}
const KEY='kitchen-campaign-v1';
export class CampaignStore {
 private data:CampaignData={version:1,results:{},guides:[],debugAll:false};
 private storage:StoragePort;readonly restaurants:Restaurant[];error='';
 constructor(storage:StoragePort,restaurants:Restaurant[]){this.storage=storage;this.restaurants=restaurants;
  try{const raw=storage.getItem(KEY);if(raw===null)return;const d=JSON.parse(raw);if(!d||d.version!==1||typeof d.results!=='object'||!d.results||Array.isArray(d.results)||!Array.isArray(d.guides)||d.guides.some((g:unknown)=>typeof g!=='string')||typeof d.debugAll!=='boolean')throw Error('进度存档格式无效');
   for(const [id,result] of Object.entries(d.results)){const r=result as CampaignResult;if(!this.restaurantFor(Number(id))||!r||!Number.isInteger(r.best)||r.best<1||(r.bestUnassisted!==undefined&&(!Number.isInteger(r.bestUnassisted)||r.bestUnassisted<1)))throw Error('关卡成绩无效');}this.data=d;
  }catch(e){this.error=String(e)+'；原存档保留';}
 }
 private save(d:CampaignData):void{if(this.error)throw Error(this.error);this.storage.setItem(KEY,JSON.stringify(d));this.data=d;}
 get debugAll():boolean{return this.data.debugAll;}
 restaurantFor(levelId:number):Restaurant|undefined{return this.restaurants.find(r=>r.levelIds.includes(levelId));}
 cleared(levelId:number):boolean{return !!this.data.results[levelId];}
 clearedCount(id:string):number{return this.restaurants.find(r=>r.id===id)?.levelIds.filter(i=>this.cleared(i)).length||0;}
 restaurantComplete(id:string):boolean{const r=this.restaurants.find(r=>r.id===id);return !!r&&r.levelIds.every(i=>this.cleared(i));}
 restaurantUnlocked(id:string):boolean{const i=this.restaurants.findIndex(r=>r.id===id);return i>=0&&(this.data.debugAll||i===0||this.restaurantComplete(this.restaurants[i-1].id));}
 canPlay(levelId:number):boolean{if(this.error)return false;const r=this.restaurantFor(levelId);if(!r||!this.restaurantUnlocked(r.id))return false;const i=r.levelIds.indexOf(levelId);return this.data.debugAll||i===0||this.cleared(levelId)||this.cleared(r.levelIds[i-1]);}
 result(levelId:number):CampaignResult|undefined{const r=this.data.results[levelId];return r?{...r}:undefined;}
 complete(levelId:number,moves:number,assisted:boolean):void{if(!this.canPlay(levelId))throw Error(this.error||'关卡未解锁');if(!Number.isInteger(moves)||moves<1)throw Error('用步无效');const old=this.data.results[levelId];const result:CampaignResult={best:Math.min(old?.best??Infinity,moves)};const best=assisted?old?.bestUnassisted:Math.min(old?.bestUnassisted??Infinity,moves);if(best!==undefined)result.bestUnassisted=best;this.save({...this.data,results:{...this.data.results,[levelId]:result}});}
 guideSeen(id:string):boolean{return this.data.guides.includes(id);}
 markGuide(id:string):void{if(this.guideSeen(id))return;this.save({...this.data,guides:[...this.data.guides,id]});}
 setDebugAll(value:boolean):void{this.save({...this.data,debugAll:value});}
}
