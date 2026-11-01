import { AudioClip, AudioSource, Node, isValid } from 'cc';
import type { CocosAssets } from './CocosAssets';
import type { AssetLease } from '../core/AssetCache';
interface MusicOptions {loop?:boolean;volume?:number;}
interface Playlist {paths:readonly string[];index:number;volume:number;random:()=>number;}
export interface EffectOptions {scope?:string;loop?:boolean;volume?:number;cooldownMs?:number;priority?:number;}
type Voice={source:AudioSource;scope:string;path:string;priority:number;stamp:number;paused:boolean};
/** Cached clips, bounded independent voices and cancellable page scopes. */
export class AudioService {
 private music:AudioSource;private voices:Voice[]=[];private clips=new Map<string,AssetLease<AudioClip>>();private pending=new Map<string,Promise<AudioClip|null>>();
 private playlist:Playlist|null=null;
 private musicEnded=(source:AudioSource)=>{if(source!==this.music||this.closed||!this.playlist||this.playlist.paths.length<2)return;const list=this.playlist;const offset=1+Math.floor(Math.min(.999999,Math.max(0,list.random()))*(list.paths.length-1));list.index=(list.index+offset)%list.paths.length;void this.loadMusic(list.paths[list.index],{loop:false,volume:list.volume}).catch(error=>console.warn("背景音乐切换失败",error));};
 private musicLease:AssetLease<AudioClip>|null=null;private version=0;private soundEpoch=0;private closed=false;private suspended=false;private musicOn=true;private soundOn=true;
 private epochs=new Map<string,number>();private effectEpochs=new Map<string,number>();private pausedScopes=new Set<string>();private last=new Map<string,number>();
 private owner:Node;private assets:CocosAssets;constructor(owner:Node,assets:CocosAssets){this.owner=owner;this.assets=assets;this.music=owner.addComponent(AudioSource);this.music.playOnAwake=false;this.music.loop=true;this.music.volume=.2;this.owner.on(AudioSource.EventType.ENDED,this.musicEnded);this.voice();}
 private voice():Voice{const value={source:this.owner.addComponent(AudioSource),scope:'',path:'',priority:0,stamp:0,paused:false};value.source.playOnAwake=false;this.voices.push(value);return value;}
 private async clip(path:string):Promise<AudioClip|null>{if(this.closed)return null;const existing=this.clips.get(path);if(existing)return existing.asset;const pending=this.pending.get(path);if(pending)return pending;
  const request=this.assets.retain(path,AudioClip).then(lease=>{if(this.closed){lease.release();return null;}this.clips.set(path,lease);return lease.asset;}).finally(()=>this.pending.delete(path));this.pending.set(path,request);return request;
 }
 async preloadEffects(paths:readonly string[],progress?:(done:number,total:number)=>void):Promise<void>{let done=0;await Promise.all(paths.map(async path=>{await this.clip(path);progress?.(++done,paths.length);}));}
 playMusic(path:string,options:MusicOptions={}):Promise<void>{this.playlist=null;return this.loadMusic(path,options);}
 async setMusicPlaylist(paths:readonly string[],volume:number,random:()=>number=Math.random):Promise<void>{if(this.closed||!paths.length)return;if(this.playlist?.paths.join("|")===paths.join("|")&&this.playlist.volume===volume)return;const list:Playlist={paths:[...paths],index:Math.floor(Math.min(.999999,Math.max(0,random()))*paths.length),volume,random};this.playlist=list;await this.loadMusic(list.paths[list.index],{loop:paths.length===1,volume});}
 private async loadMusic(path:string,options:MusicOptions):Promise<void>{const request=++this.version,lease=await this.assets.retain(path,AudioClip);if(this.closed||request!==this.version){lease.release();return;}this.music.stop();this.music.clip=null;this.musicLease?.release();this.musicLease=lease;this.music.clip=lease.asset;this.music.loop=options.loop??true;this.music.volume=Math.max(0,Math.min(1,options.volume??this.music.volume));this.unlock();}
 unlock():void{if(!this.closed&&this.musicOn&&!this.suspended&&this.music.clip&&!this.music.playing)this.music.play();}
 async playEffect(path:string,options:EffectOptions={}):Promise<void>{if(this.closed||!this.soundOn||this.suspended)return;const scope=options.scope||'ui',effectKey=scope+':'+path,effectEpoch=this.effectEpochs.get(effectKey)||0,epoch=this.epochs.get(scope)||0,soundEpoch=this.soundEpoch;if(this.pausedScopes.has(scope))return;
  const clip=await this.clip(path);if(!clip||effectEpoch!==(this.effectEpochs.get(effectKey)||0)||soundEpoch!==this.soundEpoch||this.closed||!this.soundOn||this.suspended||epoch!==(this.epochs.get(scope)||0)||this.pausedScopes.has(scope))return;
  const key=scope+':'+path,now=Date.now();if(now-(this.last.get(key)??-Infinity)<(options.cooldownMs||0))return;
  let voice=this.voices.find(v=>!v.source.playing&&!v.paused);if(!voice&&this.voices.length<8)voice=this.voice();if(!voice)voice=this.voices.filter(v=>!v.source.loop&&v.priority<=(options.priority||0)).sort((a,b)=>a.stamp-b.stamp)[0];if(!voice)return;
  this.last.set(key,now);voice.source.stop();voice.scope=scope;voice.path=path;voice.priority=options.priority||0;voice.stamp=now;voice.paused=false;voice.source.clip=clip;voice.source.loop=!!options.loop;voice.source.volume=Math.max(0,Math.min(1,options.volume??.7));voice.source.play();
 }
 stopEffect(path:string,scope:string):void{const key=scope+':'+path;this.effectEpochs.set(key,(this.effectEpochs.get(key)||0)+1);for(const v of this.voices)if(v.path===path&&v.scope===scope){v.source.stop();v.paused=false;}}
 stopScope(scope:string):void{this.epochs.set(scope,(this.epochs.get(scope)||0)+1);this.pausedScopes.delete(scope);for(const v of this.voices)if(v.scope===scope){v.source.stop();v.paused=false;}for(const key of this.last.keys())if(key.startsWith(scope+':'))this.last.delete(key);}
 pauseScope(scope:string):void{this.epochs.set(scope,(this.epochs.get(scope)||0)+1);this.pausedScopes.add(scope);for(const v of this.voices)if(v.scope===scope&&v.source.playing){v.paused=v.source.loop;if(v.paused)v.source.pause();else v.source.stop();}}
 resumeScope(scope:string):void{this.pausedScopes.delete(scope);if(this.soundOn&&!this.suspended)for(const v of this.voices)if(v.scope===scope&&v.paused){v.paused=false;v.source.play();}}
 configure(music:boolean,sound:boolean):void{this.musicOn=music;this.soundOn=sound;if(!music)this.music.pause();else this.unlock();if(!sound){this.soundEpoch++;for(const scope of new Set(this.voices.map(v=>v.scope)))this.stopScope(scope);}}
 suspend():void{this.soundEpoch++;this.suspended=true;this.music.pause();for(const v of this.voices)if(v.source.playing){v.paused=v.source.loop;if(v.paused)v.source.pause();else v.source.stop();}}
 resume():void{this.suspended=false;this.unlock();if(this.soundOn)for(const v of this.voices)if(v.paused&&!this.pausedScopes.has(v.scope)){v.paused=false;v.source.play();}}
 dispose():void{if(this.closed)return;this.closed=true;this.playlist=null;this.owner.off(AudioSource.EventType.ENDED,this.musicEnded);this.version++;for(const source of [this.music,...this.voices.map(v=>v.source)])if(isValid(source)){source.stop();source.clip=null;}this.musicLease?.release();this.musicLease=null;for(const lease of this.clips.values())lease.release();this.clips.clear();this.last.clear();}
}
