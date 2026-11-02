import type {AudioService} from '../../framework/cocos/AudioService';
export const SOUND_KEYS=['click','step','pickup1','pickup2','pickup3','blocked','guest_in','guest_out','bubble','cook_cut','cook_fry','cook_mix','cook_done','fly','check','order_done','guest_happy_dog','full','start','win','lose','unlock','undo'] as const;
export const MUSIC_KEYS=['music','music_battle_1','music_battle_2'] as const;
export const audioPath=(key:string)=>'audio/breakfast/'+key;
export const MENU_MUSIC_VOLUME=.55,BATTLE_MUSIC_VOLUME=.42;
export function selectKitchenMusic(page:string):Promise<void>{return audio?.setMusicPlaylist(((page==='kitchen'||page==='demo2')?['music_battle_1','music_battle_2']:['music']).map(audioPath),(page==='kitchen'||page==='demo2')?BATTLE_MUSIC_VOLUME:MENU_MUSIC_VOLUME)||Promise.resolve();}
export type SoundKey=typeof SOUND_KEYS[number];
export const soundPath=(key:SoundKey)=>'audio/breakfast/'+key;
let audio:AudioService|null=null,counter=0;
export function bindKitchenAudio(service:AudioService|null):void{audio=service;}
export class KitchenSound {
 private service=audio;private scope='kitchen-'+(++counter);private closed=false;private pickupIndex=0;
 play(key:SoundKey,loop=false):void{if(this.closed)return;void this.service?.playEffect(soundPath(key),{scope:this.scope,loop,volume:key==='step'?.35:key.startsWith('cook_')&&loop?.5:.72,cooldownMs:key==='step'?120:['guest_in','bubble','guest_out','order_done'].includes(key)?220:['check','cook_done'].includes(key)?100:0,priority:['check','win','lose'].includes(key)?2:0}).catch(e=>console.warn('音效播放失败',key,e));}
 pickup():void{this.play((['pickup1','pickup2','pickup3'] as const)[this.pickupIndex++%3]);}
 stop(key:SoundKey):void{this.service?.stopEffect(soundPath(key),this.scope);}
 pause():void{this.service?.pauseScope(this.scope);}resume():void{this.service?.resumeScope(this.scope);}
 reset():void{this.service?.stopScope(this.scope);}dispose():void{this.closed=true;this.reset();}
}
export function clickSound():void{void audio?.playEffect(soundPath('click'),{volume:.55,cooldownMs:65}).catch(e=>console.warn('界面音效失败',e));audio?.unlock();}

