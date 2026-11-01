import {canonicalArtPath} from './BreakfastArt';
import {KitchenPresentationConfig as timing} from './KitchenPresentationConfig';
import type {BoardGeometry} from './BoardProjection';
import {JsonAsset,SpriteFrame,Node,UITransform} from 'cc';
import {CocosAssets} from '../../framework/cocos/CocosAssets';
import type {AssetLease} from '../../framework/core/AssetCache';
import {序列帧播放器} from '../../framework/cocos/序列帧播放器';
interface Clip {frames:string[];fps:number;loop?:boolean;}
let boards:Record<string,BoardGeometry>={};
export function getKitchenBoardGeometry(size:number):BoardGeometry|undefined{return boards[String(size)];}
const clips=new Map<string,{frames:SpriteFrame[];fps:number;loop:boolean}>();let leases:AssetLease<any>[]=[];
export async function loadKitchenAnimations(assets:CocosAssets,onProgress?:(done:number,total:number)=>void):Promise<void>{
 const acquired:AssetLease<any>[]=[];
 try{
  const json=await assets.retain('art/latest/animations/clips',JsonAsset);acquired.push(json);
  const data=json.asset.json as {clips:Record<string,Clip>;boards?:Record<string,BoardGeometry>},entries=Object.entries(data.clips).filter(([key])=>key!=='environment/sunlight');
  const staged=new Map<string,SpriteFrame[]>(),jobs:{key:string;index:number;path:string}[]=[];
  for(const[key,clip]of entries){if(/^(hamster|customers)\//.test(key)&&clip.frames.length!==12)throw Error('角色动画必须有12帧：'+key);if(clip.frames.length<2)throw Error('动画缺少帧：'+key);staged.set(key,new Array(clip.frames.length));clip.frames.forEach((path,index)=>jobs.push({key,index,path}));}
  staged.set('environment/sunlight',new Array(4));for(let i=0;i<4;i++)jobs.push({key:'environment/sunlight',index:i,path:'art/breakfast-v7/environment/sunlight/frame_0'+i});
  const total=jobs.length+1;onProgress?.(1,total);let cursor=0,failure:unknown,failed=false;
  // Bound parallel loads and settle every started request before releasing on failure.
  await Promise.all(Array.from({length:Math.min(8,jobs.length)},async()=>{while(!failed&&cursor<jobs.length){const job=jobs[cursor++];try{const lease=await assets.retain(canonicalArtPath(job.path)+'/spriteFrame',SpriteFrame);acquired.push(lease);staged.get(job.key)![job.index]=lease.asset;onProgress?.(acquired.length,total);}catch(error){failed=true;failure=error;}}}));
  if(failed)throw failure;
  boards=data.boards||{};for(const[key,clip]of entries)clips.set(key,{frames:staged.get(key)!,fps:clip.fps,loop:!!clip.loop});
  clips.set('environment/sunlight',{frames:staged.get('environment/sunlight')!,fps:timing.sunshineFps,loop:true});leases=acquired;
 }catch(error){acquired.forEach(lease=>lease.release());clips.clear();boards={};throw error;}
}
export function releaseKitchenAnimations():void{boards={};clips.clear();leases.forEach(l=>l.release());leases=[];}
export function animationPlayer(node:Node,w:number,h:number):序列帧播放器{const player=node.getComponent(序列帧播放器)||node.addComponent(序列帧播放器);player.anchorCanvasWidth=w;player.anchorCanvasHeight=h;return player;}
export function playKitchenClip(player:序列帧播放器,key:string,loop?:boolean,duration?:number):Promise<boolean>{const clip=clips.get(key);if(!clip)throw Error('缺少演出动画：'+key);return player.playFrames(clip.frames,{fps:key==='environment/sunlight'?timing.sunshineFps:clip.fps,loop:loop??clip.loop,duration});}

