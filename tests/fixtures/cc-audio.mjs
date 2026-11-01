export class AudioClip {}
export class AudioSource {static EventType={ENDED:"ended"};clip=null;loop=false;isPlaying=false;valid=true;volume=1;get playing(){return this.isPlaying;}play(){this.isPlaying=true;}pause(){this.isPlaying=false;}stop(){this.isPlaying=false;}}
export class Node {components=[];events=new Map();on(key,fn){this.events.set(key,fn);}off(key,fn){if(this.events.get(key)===fn)this.events.delete(key);}emit(key,...args){this.events.get(key)?.(...args);}addComponent(Type){const value=new Type();this.components.push(value);return value;}}
export const isValid=value=>value?.valid!==false;
