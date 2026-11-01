import type {Level} from './Rules';
export interface CampaignSequence {readonly levelIds:readonly number[];}
/** Presentation numbering is cumulative, independent of database identifiers. */
export function globalLevelNumber(levelId:number,restaurants:readonly CampaignSequence[]):number{let offset=0;for(const restaurant of restaurants){const local=restaurant.levelIds.indexOf(levelId);if(local>=0)return offset+local+1;offset+=restaurant.levelIds.length;}throw Error('未知关卡编号：'+levelId);}
export function hasPerfectClear(result:{bestUnassisted?:number}|undefined,optimal:number):boolean{return Number.isInteger(optimal)&&optimal>0&&result?.bestUnassisted===optimal;}

/** Geometry/rule revisions keep historical clears while medals use current-layout records. */
export function campaignResultRevision(level:Level):string|undefined{return level.ruleRevision||(level.doors?.length?'mechanics-v18':undefined)||(level.stopPads?.length||level.doors?.length||level.conveyors?.length?'mechanics-v17':undefined);}
