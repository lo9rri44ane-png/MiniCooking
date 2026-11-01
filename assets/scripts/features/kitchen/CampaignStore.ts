import {readStoredValue} from '../../framework/core/SaveStore';
import {gmAccess} from './GMAccess';
import type {StoragePort} from '../../framework/core/SaveStore';
import type {KitchenResetOperation} from './GameSaveReset';
export interface Restaurant {id:string;name:string;levelIds:number[];description?:string;}
export interface CampaignScore {best:number;bestUnassisted?:number;}
export interface CampaignResult extends CampaignScore {versions?:Record<string,CampaignScore>;}
const validRevision=(value:string)=>/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(value);
const validScore=(r:CampaignScore)=>!!r&&typeof r==='object'&&!Array.isArray(r)&&Number.isInteger(r.best)&&r.best>0&&(r.bestUnassisted===undefined||(Number.isInteger(r.bestUnassisted)&&r.bestUnassisted>0));
const cloneResult=(r:CampaignResult):CampaignResult=>({...r,...(r.versions?{versions:Object.fromEntries(Object.entries(r.versions).map(([k,v])=>[k,{...v}]))}:{})});
interface FailureStreak {count:number;revision?:string;}
interface CampaignData {failures?:Record<string,FailureStreak>;version:1;results:Record<string,CampaignResult>;guides:string[];debugAll:boolean;}
const KEY='kitchen-campaign-v1';
export class CampaignStore {
 private data:CampaignData={version:1,results:{},guides:[],debugAll:false};
 private storage:StoragePort;readonly restaurants:Restaurant[];error='';
 constructor(storage:StoragePort,restaurants:Restaurant[]){this.storage=storage;this.restaurants=restaurants;
  try{const raw=readStoredValue(storage,KEY);if(raw===null)return;const d=JSON.parse(raw);if(!d||d.version!==1||typeof d.results!=='object'||!d.results||Array.isArray(d.results)||!Array.isArray(d.guides)||d.guides.some((g:unknown)=>typeof g!=='string')||typeof d.debugAll!=='boolean')throw Error('进度存档格式无效');
   for(const [id,result] of Object.entries(d.results)){const r=result as CampaignResult;if(!this.restaurantFor(Number(id))||!validScore(r))throw Error('关卡成绩无效');if(r.versions!==undefined){if(!r.versions||typeof r.versions!=='object'||Array.isArray(r.versions)||Object.entries(r.versions).some(([key,score])=>!validRevision(key)||!validScore(score)))throw Error('版本成绩无效');}}if(d.failures!==undefined){if(!d.failures||typeof d.failures!=='object'||Array.isArray(d.failures))throw Error('失败计数无效');for(const [id,value] of Object.entries(d.failures)){const f=value as FailureStreak;if(!this.restaurantFor(Number(id))||String(Number(id))!==id||!f||typeof f!=='object'||Array.isArray(f)||!Number.isSafeInteger(f.count)||f.count<0||(f.revision!==undefined&&(typeof f.revision!=='string'||!validRevision(f.revision))))throw Error('失败计数无效');}}this.data=d;
  }catch(e){this.error=String(e)+'；原存档保留';}
 }
 private save(d:CampaignData):void{if(this.error)throw Error(this.error);this.storage.setItem(KEY,JSON.stringify(d));this.data=d;}
 get debugAll():boolean{return gmAccess.enabled&&this.data.debugAll;}
 /** Reconcile a navigation cursor after changing access, never rewrite earned progress. */
 accessibleSelection(restaurantIndex:number,pageIndex:number):{restaurantIndex:number;pageIndex:number}{
  let index=restaurantIndex;
  if(!this.restaurants[index]||!this.restaurantUnlocked(this.restaurants[index].id))index=Math.max(0,this.restaurants.findIndex(r=>this.restaurantUnlocked(r.id)&&!this.restaurantComplete(r.id)));
  const r=this.restaurants[index];if(!r)return {restaurantIndex:0,pageIndex:0};
  const pages=Math.max(1,Math.ceil(r.levelIds.length/10)),page=Math.max(0,Math.min(pages-1,pageIndex));
  if(r.levelIds.slice(page*10,page*10+10).some(id=>this.canPlay(id)))return {restaurantIndex:index,pageIndex:page};
  const next=r.levelIds.findIndex(id=>this.canPlay(id)&&!this.cleared(id));
  return {restaurantIndex:index,pageIndex:next>=0?Math.floor(next/10):0};
 }
 restaurantFor(levelId:number):Restaurant|undefined{return this.restaurants.find(r=>r.levelIds.includes(levelId));}
 cleared(levelId:number):boolean{return !!this.data.results[levelId];}
 clearedCount(id:string):number{return this.restaurants.find(r=>r.id===id)?.levelIds.filter(i=>this.cleared(i)).length||0;}
 restaurantComplete(id:string):boolean{const r=this.restaurants.find(r=>r.id===id);return !!r&&r.levelIds.every(i=>this.cleared(i));}
 restaurantUnlocked(id:string):boolean{const i=this.restaurants.findIndex(r=>r.id===id);return i>=0&&(this.debugAll||i===0||this.restaurantComplete(this.restaurants[i-1].id));}
 canPlay(levelId:number):boolean{if(this.error)return false;const r=this.restaurantFor(levelId);if(!r||!this.restaurantUnlocked(r.id))return false;const i=r.levelIds.indexOf(levelId);return this.debugAll||i===0||this.cleared(levelId)||this.cleared(r.levelIds[i-1]);}
 result(levelId:number,revision?:string):CampaignResult|undefined{const r=this.data.results[levelId];if(!r)return undefined;if(revision!==undefined){if(!validRevision(revision))throw Error('成绩版本无效');return r.versions&&Object.prototype.hasOwnProperty.call(r.versions,revision)?{...r.versions[revision]}:undefined;}return cloneResult(r);}
 complete(levelId:number,moves:number,assisted:boolean,revision?:string):void{if(!this.canPlay(levelId))throw Error(this.error||'关卡未解锁');if(!Number.isInteger(moves)||moves<1)throw Error('用步无效');if(revision!==undefined&&!validRevision(revision))throw Error('成绩版本无效');const old=this.data.results[levelId],merge=(prior:CampaignScore|undefined):CampaignScore=>{const score:CampaignScore={best:Math.min(prior?.best??Infinity,moves)},best=assisted?prior?.bestUnassisted:Math.min(prior?.bestUnassisted??Infinity,moves);if(best!==undefined)score.bestUnassisted=best;return score;};const result:CampaignResult={...merge(old),...(old?.versions?{versions:{...old.versions}}:{})};if(revision!==undefined){const prior=old?.versions&&Object.prototype.hasOwnProperty.call(old.versions,revision)?old.versions[revision]:undefined;result.versions={...old?.versions,[revision]:merge(prior)};}const failures={...this.data.failures};delete failures[levelId];this.save({...this.data,results:{...this.data.results,[levelId]:result},...(this.data.failures?{failures}:{})});}
 /** A layout revision starts a new streak without migrating or rewriting old saves. */
 failureStreak(levelId:number,revision?:string):number{if(revision!==undefined&&!validRevision(revision))throw Error('关卡版本无效');const f=this.data.failures?.[levelId];return f?.revision===revision?f?.count||0:0;}
 /** Caller records each actual non-GM failed attempt once; abandoning a run is not failure. */
 recordFailure(levelId:number,revision?:string):void{if(!this.canPlay(levelId))throw Error(this.error||'关卡未解锁');const count=this.failureStreak(levelId,revision);if(count>=Number.MAX_SAFE_INTEGER)throw Error('失败计数超出范围');this.save({...this.data,failures:{...this.data.failures,[levelId]:{count:count+1,...(revision!==undefined?{revision}:{})}}});}
 guideSeen(id:string):boolean{return this.data.guides.includes(id);}
 markGuide(id:string):void{if(this.guideSeen(id))return;this.save({...this.data,guides:[...this.data.guides,id]});}
 setDebugAll(value:boolean):void{gmAccess.require();this.save({...this.data,debugAll:value});}
 /** Transaction participant: may deliberately replace corrupt data after user confirmation. */
 prepareReset():KitchenResetOperation{const data:CampaignData={version:1,results:{},guides:[],debugAll:false};return {key:KEY,read:()=>readStoredValue(this.storage,KEY),write:value=>{if(value===null)this.storage.removeItem(KEY);else this.storage.setItem(KEY,value);},fresh:JSON.stringify(data),accept:()=>{this.data=data;this.error='';}};}
}

