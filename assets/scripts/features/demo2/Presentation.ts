import type {Cell,Exit,State}from'./Types';
export const CELL=88,BOARD=528,BOARD_Y=-35;
export function footprintBounds(shape:Cell[]):{w:number;h:number}{return{w:Math.max(...shape.map(p=>p.x))+1,h:Math.max(...shape.map(p=>p.y))+1};}
export function gridPoint(x:number,y:number,width=6,height=6,unit=CELL):Cell{return{x:(x-(width-1)/2)*unit,y:((height-1)/2-y)*unit};}
export function boardMetrics(width:number,height:number):{cell:number;width:number;height:number;y:number}{const cell=Math.min(80,600/width,680/height),w=width*cell,h=height*cell;return{cell,width:w,height:h,y:215-h/2};}
export function exitRect(e:Exit,width=6,height=6,unit=CELL):{x:number;y:number;w:number;h:number}{const length=e.width*unit,lip=unit===CELL?38:Math.max(24,unit*.42),mid=(e.start+e.width/2-(e.side==='top'||e.side==='bottom'?width:height)/2)*unit,w=width*unit,h=height*unit;return e.side==='top'?{x:mid,y:h/2+lip/2,w:length,h:lip}:e.side==='bottom'?{x:mid,y:-h/2-lip/2,w:length,h:lip}:e.side==='left'?{x:-w/2-lip/2,y:-mid,w:lip,h:length}:{x:w/2+lip/2,y:-mid,w:lip,h:length};}
export const COLORS={red:'#EF4056',yellow:'#FFD22B',green:'#26C849',blue:'#2399F6'};
export const FOOD_KEYS:Record<string,string>={lasagna:'food-lasagna-o4',waffle:'food-waffle-l3',fish:'food-fish-i2h',omelette:'food-omelette-i2v',bread:'food-bread-i2h',tart:'food-tart-i1'};

/** Ordinary drags move a packed colored tray; hold-to-lift chooses its food instead. */
export function dragTarget(state:State,cell:Cell,lift=false):string|undefined{
 const contains=(o:{x:number;y:number;shape:Cell[]})=>o.shape.some(p=>p.x+o.x===cell.x&&p.y+o.y===cell.y);
 const food=[...state.foods].reverse().find(contains);
 if(food){const carrier=state.entities.find(e=>e.id===food.carrierId);return !lift&&carrier?carrier.id:food.id;}
 return [...state.entities].reverse().find(contains)?.id;
}
