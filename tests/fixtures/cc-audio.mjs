export class AudioClip {}
export class AudioSource {clip=null;loop=false;isPlaying=false;valid=true;play(){this.isPlaying=true;}pause(){this.isPlaying=false;}stop(){this.isPlaying=false;}}
export class Node {components=[];addComponent(Type){const value=new Type();this.components.push(value);return value;}}
export const isValid=value=>value?.valid!==false;
