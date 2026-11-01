import {gmAccess} from './GMAccess';
import {initialState,move,bagSize,settleAtStation} from './Rules';
import type {Level,State,Direction,ActionEvent,MoveOptions} from './Rules';
import {EnergyBank} from './Energy';
function clone(s:State):State{return {...s,pos:[...s.pos],remaining:[...s.remaining],bag:{...s.bag},done:s.done.map(a=>[...a]),active:[...s.active],...(s.usedPads?{usedPads:[...s.usedPads]}:{}),...(s.openDoors?{openDoors:[...s.openDoors]}:{})};}
export interface RewardedAdPort {showRewardedAd():Promise<{ok:boolean;status:string;message?:string}>;} 
export class KitchenSession {
 readonly base:Level;level:Level;state:State;slotUnlocked=false;private adPending=false;gm=false;assisted=false;overtimeUsed=false;
 private bank:EnergyBank;private attempt:string|null;private history:{state:State}[]=[];private exited=false;
 constructor(level:Level,bank:EnergyBank){this.base=level;this.level={...level};this.state=initialState(this.level);this.bank=bank;this.attempt=bank.begin();}
 private propAllowed(name:'undo'|'overtime'|'ad-slot'):boolean{return !this.level.availableProps||this.level.availableProps.includes(name);}
 get canUndo():boolean{return this.propAllowed('undo')&&this.history.length>0&&this.state.status!=='won'&&!this.exited;}
 private settle():void{if(!this.attempt)return;if(this.state.status==='won')this.bank.end(this.attempt,'won');else if(this.state.status==='full'||this.state.status==='steps')this.bank.fail(this.attempt);}
 slide(direction:Direction,options:MoveOptions={}):{state:State;events:ActionEvent[]}{if(this.exited)return {state:this.state,events:[]};const r=move(this.level,this.state,direction,options);if(r.state.steps!==this.state.steps)this.history.push({state:clone(this.state)});this.state=r.state;this.settle();return r;}
 resolveReadyOrders(readySet:ReadonlySet<number>):{state:State;events:ActionEvent[]}{if(this.exited||this.state.status!=='playing')return {state:this.state,events:[]};const r=settleAtStation(this.level,this.state,{readyCustomers:readySet});this.state=r.state;this.settle();return r;}
 overtime():boolean{if(this.exited||!this.propAllowed('overtime')||this.overtimeUsed||this.state.status==='won')return false;this.overtimeUsed=true;this.assisted=true;this.level.budget+=3;if(this.state.status==='steps')this.state.status='playing';return true;}
 undo():boolean{if(!this.canUndo)return false;const old=this.history.pop()!;this.state=clone(old.state);this.assisted=true;return true;}
 private grantSlot():boolean{if(this.exited||this.slotUnlocked||this.state.status==='won')return false;this.slotUnlocked=true;this.assisted=true;this.level.capacity=this.base.capacity+1;if(this.state.status==='full'&&bagSize(this.state)<this.level.capacity)this.state.status=this.state.steps>=this.level.budget?'steps':'playing';return true;}
 async unlockAdSlot(ad:RewardedAdPort):Promise<boolean>{if(this.exited||!this.propAllowed('ad-slot')||this.adPending||this.slotUnlocked||this.state.status==='won')return false;this.adPending=true;try{const result=await ad.showRewardedAd();if(!result.ok||result.status!=='completed')return false;return this.grantSlot();}finally{this.adPending=false;}}
 unlockSlotGM():boolean{if(!gmAccess.enabled)return false;if(this.exited||this.slotUnlocked||this.state.status==='won')return false;this.enableGM();if(this.level.availableProps&&!this.level.availableProps.includes('ad-slot'))this.level.availableProps=[...this.level.availableProps,'ad-slot'];return this.grantSlot();}
 private enableGM():void{if(this.attempt){this.bank.end(this.attempt,'gm');this.attempt=null;}this.gm=true;}
 addGMSteps(n:number):void{gmAccess.require();if(!Number.isInteger(n)||n<1||this.state.status==='won'||this.exited)return;this.enableGM();this.level.budget+=n;if(this.state.status==='steps')this.state.status='playing';}
 resetGM():void{gmAccess.require();this.enableGM();this.level={...this.base};this.state=initialState(this.level);this.slotUnlocked=false;this.history=[];this.assisted=false;this.overtimeUsed=false;this.exited=false;}
 exit():void{if(this.exited)return;this.exited=true;if(this.attempt){this.bank.end(this.attempt,this.state.status==='won'?'won':'quit');this.attempt=null;}}
}


