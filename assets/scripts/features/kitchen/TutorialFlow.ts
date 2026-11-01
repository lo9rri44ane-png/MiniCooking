import {initialState,move} from './Rules';
import type {Direction,Level} from './Rules';
export interface GuideStep {kind:'dialog'|'click'|'demo'|'swipe';text:string;target?:string;direction?:Direction;focus?:string[];}
export interface GuideSequence {id:string;title:string;mandatory?:boolean;steps:GuideStep[];}
export type GuideEvent={type:'next'}|{type:'target';target:string}|{type:'swipe';direction:Direction};
export class TutorialFlow {
 readonly sequences:GuideSequence[];index=0;stepIndex=0;completed:string[]=[];
 constructor(sequences:GuideSequence[]){this.sequences=sequences.filter(s=>s.steps.length>0);}
 get done():boolean{return this.index>=this.sequences.length;}
 get sequence():GuideSequence|undefined{return this.sequences[this.index];}
 get step():GuideStep|undefined{return this.sequence?.steps[this.stepIndex];}
 advance(event:GuideEvent):boolean{const step=this.step;if(!step)return false;if(step.kind==='swipe'?(event.type!=='swipe'||event.direction!==step.direction):step.kind==='click'?(event.type!=='target'||event.target!==step.target):event.type!=='next')return false;this.stepIndex++;if(this.stepIndex>=this.sequence!.steps.length){this.completed.push(this.sequence!.id);this.index++;this.stepIndex=0;}return true;}
}
const descriptions:Record<string,{title:string;text:string;target:string}>={
 'undo':{title:'新道具：撤回',text:'点击高亮的撤回按钮认识它：可恢复完整一步，已扣的失败体力不退还。',target:'prop:undo'},
 'overtime':{title:'新道具：加班',text:'点击高亮的加班按钮：每局可增加3步一次，步数失败后也能续玩。',target:'prop:overtime'},
 'ad-slot':{title:'新道具：背包扩展格',text:'点击高亮广告格认识位置。完整观看广告后容量+1，本次教学不播放广告。',target:'ad-slot'},
 'pan':{title:'新设备：煎锅',text:'点击高亮的煎锅。面包和芝士在这里制作，厨师要停在绿色操作格。',target:'device:pan'},
 'bag-pressure':{title:'嘴巴要留空间',text:'点击高亮背包查看容量。第7份材料装进嘴巴就装不下啦，中途制作才能腾空间。',target:'bag'},
 'drink':{title:'新设备：饮料机',text:'点击高亮饮料机。收集水和莓果，停在它的绿色操作格就能做饮料。',target:'device:drink'},
 'queue':{title:'客人数量',text:'点击动物剪影旁的人数。这里包含候场客人，客人满足订单并离开后才会减少；最多3客同时在场。',target:'queue'},
 'burger':{title:'新菜：牛肉汉堡',text:'点击高亮订单：汉堡需要面包、生菜、牛肉，用煎锅制作，优先满足前面的订单。',target:'orders'},
 'multi-order':{title:'一位客人，多道菜',text:'点击高亮菜谱，查看这位客人的全部需求。所有菜做完后客人才会离开。',target:'recipes'},
 'portions':{title:'同一道菜，多份需求',text:'点击高亮订单，注意需求份数。材料要按份准备，设备会连续制作。',target:'orders'},
 'tight-budget':{title:'步数挑战',text:'点击高亮步数栏。一次有效滑行算一步，先规划收集和制作顺序。',target:'steps'},
 'egg':{title:'新食材：鸡蛋',text:'点击高亮煎锅。新菜鸡蛋吐司需要面包、芝士和鸡蛋。',target:'device:pan'},
 'coffee':{title:'新饮品：牛奶咖啡',text:'点击高亮饮料机。带上水、牛奶和咖啡豆，在绿色操作格停下制作。',target:'device:drink'},
 'rice':{title:'新主食：香煎鱼饭',text:'点击高亮煎锅。鱼肉和米饭能做香煎鱼饭，注意后续订单。',target:'device:pan'},
 'platter':{title:'新菜：田园饭碗',text:'点击高亮料理台。米饭、生菜和番茄在这里制作成田园饭碗。',target:'device:table'},
 'milkberry':{title:'新饮品：莓果奶昔',text:'点击高亮饮料机。牛奶和莓果能做奶昔，共享材料按订单顺序使用。',target:'device:drink'}
};
export const guideCompletionKey=(id:string):string=>id==='basic'?'basic-route-action-v5':id;
export function guideFor(id:string,level:Level):GuideSequence{
 if(id==='basic')return {id:guideCompletionKey(id),title:'店长带你开工',mandatory:true,steps:[
  {kind:'click',target:'orders',text:'目标：完成所有顾客订单！右上是成品，下方是食材与厨具。点击订单继续。'},
  {kind:'click',target:'orders',focus:['orders','bag','station:table'],text:'滑动收集食材，停脚丫垫制作，成品飞入订单打勾。全部完成就能下班！点击订单继续。'},
  {kind:'swipe',target:'board',direction:'right',focus:['chef','ingredient:leaf'],text:'在棋盘向右滑动，收集高亮的生菜。厨师遇到障碍才会停。'},
  {kind:'swipe',target:'board',direction:'up',focus:['ingredient:tomato','station:table'],text:'生菜已入包！向上滑动收集番茄，停在高亮绿格，自动制作交付。'}]};
 if(['stop-pad','switch-door','conveyor'].includes(id)){
  const entries:Record<string,{title:string;text:string;event:string}>={
   'stop-pad':{title:'新机关：一次性停步垫',text:'点击金色停步垫：经过就会停下，并消耗一次。再次经过会滑过去。',event:'stop-pad'},
   'switch-door':{title:'新机关：厨房开关门',text:'点击绿色开关：经过时立刻切换同组门，无需停下。门关着时不能通过。',event:'door-toggle'},
   conveyor:{title:'新机关：转向传送带',text:'点击箭头格：经过时按箭头转向，整段滑行仍只算一步。',event:'conveyor'}
  },entry=entries[id];let state=initialState(level),end=0;
  for(const [i,direction]of(level.solution||[]).entries()){const result=move(level,state,direction);state=result.state;end=i+1;if(result.events.some(e=>e.kind===entry.event))break;}
  const names:Record<Direction,string>={right:'右',left:'左',up:'上',down:'下'},steps:GuideStep[]=[{kind:'click',target:'mechanic:'+id,focus:id==='switch-door'?['mechanic:door']:undefined,text:entry.text}];
  for(const direction of(level.solution||[]).slice(0,end))steps.push({kind:'swipe',target:'board',direction,focus:['chef','mechanic:'+id],text:`向${names[direction]}滑动，按箭头路线试用${entry.title.slice(4)}。错误方向不会扣步。`});
  return {id,title:entry.title,mandatory:true,steps};
 }
 if(id.startsWith('restaurant:'))return {id,title:'新餐厅开业',steps:[{kind:'click',target:'orders',text:`点击高亮订单，认识${level.restaurantName||'新餐厅'}的菜单。这里已换上新店场景，停靠厨具完成订单。`}]};
 const d=descriptions[id];if(!d)throw Error('缺少新内容引导 '+id);
 return {id,title:d.title,steps:[{kind:'click',target:d.target,text:d.text}]};
}


