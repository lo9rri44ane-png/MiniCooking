/** Engine independent timeline. A completion edge is emitted only once. */
export class FrameSequenceClock {
 paused=false;
 private elapsed=0;
 private finished=false;
 readonly seconds:number;
 readonly count:number;
 readonly loop:boolean;
 constructor(count:number, fps=8,loop=false,duration?:number){
  this.count=count;this.loop=loop;
  if(!Number.isInteger(count)||count<1)throw Error('序列帧不能为空');
  this.seconds=duration!==undefined?duration:count/fps;
  if(!Number.isFinite(this.seconds)||this.seconds<=0)throw Error('序列帧时长或帧率无效');
 }
 /** Fractional sample supports smooth light-field interpolation without changing event timing. */
 get phase():number{const t=this.loop?this.elapsed%this.seconds:Math.min(this.elapsed,this.seconds);return Math.min(this.count-1e-9,t/this.seconds*this.count);}
 advance(dt:number):{index:number;completed:boolean}{
  if(!this.paused&&!this.finished&&Number.isFinite(dt)&&dt>0)this.elapsed+=dt;
  const completed=!this.loop&&!this.finished&&this.elapsed>=this.seconds;
  if(completed)this.finished=true;
  const time=this.loop?this.elapsed%this.seconds:Math.min(this.elapsed,this.seconds);
  return {index:Math.min(this.count-1,Math.floor(time/this.seconds*this.count)),completed};
 }
}
