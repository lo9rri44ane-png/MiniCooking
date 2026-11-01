/** Pure presentation geometry, measured in the 720×1280 logical canvas. */
export const ORDER_BUBBLE_LAYOUT={width:212,height:142,y:358,dishX:46,dishY:30,dishWidth:80,dishHeight:66,ingredientY:-28};
export function bagLayout(totalSlots:number):{gap:number;size:number;centers:number[]}{
 if(!Number.isInteger(totalSlots)||totalSlots<1)throw Error('Invalid bag slot count');
 const gap=Math.min(72,560/totalSlots),size=Math.min(gap-8,64);
 return {gap,size,centers:Array.from({length:totalSlots},(_,i)=>(i-(totalSlots-1)/2)*gap)};
}
export function orderIngredientLayout(count:number):{iconSize:number;centers:number[];deviceX:number;deviceSize:number}{
 if(!Number.isInteger(count)||count<1||count>3)throw Error('Expected 1–3 ingredients');
 const iconSize=40,deviceSize=36,gap=count===3?6:12,total=count*iconSize+deviceSize+count*gap,left=-total/2;
 return {iconSize,centers:Array.from({length:count},(_,i)=>left+iconSize/2+i*(iconSize+gap)),deviceX:left+count*(iconSize+gap)+deviceSize/2,deviceSize};
}
