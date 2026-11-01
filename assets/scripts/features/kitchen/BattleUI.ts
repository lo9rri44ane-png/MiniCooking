import {Node}from'cc';
import {hasBreakfastArt}from'./BreakfastArt';
/** Only battle descendants opt into the formal battle skin. */
export function inBattleUI(node:Node):boolean{for(let n:Node|null=node;n;n=n.parent)if(n.name==='KitchenGame')return true;return false;}
export function battleButtonKey(title:string):string{const name=/重试|重新开工/.test(title)?'retry':/返回选关|选关/.test(title)?'select':/继续开工|继续/.test(title)?'continue':/取消|暂不|关闭|保留存档/.test(title)?'cancel':'confirm';return 'v13/ui/'+name+'_button';}
export function battleSkin(node:Node,key:string,fallback:string):string{return inBattleUI(node)&&hasBreakfastArt('v13/'+key)?'v13/'+key:fallback;}

const formalRoots=new WeakSet<Node>();
export function markFormalControls(node:Node):void{formalRoots.add(node);}
export function usesFormalControls(node:Node):boolean{for(let n:Node|null=node;n;n=n.parent)if(formalRoots.has(n))return true;return inBattleUI(node);}
