import type {Cell,Exit,State,Level,Action,Entity,Food}from'./Types';
import {planDrag,lockedCells,entityCells} from './Rules';
export const CELL=88,BOARD=528,BOARD_Y=-35;
export function footprintBounds(shape:Cell[]):{w:number;h:number}{return{w:Math.max(...shape.map(p=>p.x))+1,h:Math.max(...shape.map(p=>p.y))+1};}
export function gridPoint(x:number,y:number,width=6,height=6,unit=CELL):Cell{return{x:(x-(width-1)/2)*unit,y:((height-1)/2-y)*unit};}
export function boardMetrics(width:number,height:number):{cell:number;width:number;height:number;y:number}{const compact=Math.max(width,height)<=6,cap=compact?128:80,cell=Math.min(cap,600/width,(compact?640:680)/height),w=width*cell,h=height*cell;return{cell,width:w,height:h,y:compact?-110:215-h/2};}
export function exitRect(e:Exit,width=6,height=6,unit=CELL):{x:number;y:number;w:number;h:number}{const length=e.width*unit,lip=unit===CELL?38:Math.max(24,unit*.42),mid=(e.start+e.width/2-(e.side==='top'||e.side==='bottom'?width:height)/2)*unit,w=width*unit,h=height*unit;return e.side==='top'?{x:mid,y:h/2+lip/2,w:length,h:lip}:e.side==='bottom'?{x:mid,y:-h/2-lip/2,w:length,h:lip}:e.side==='left'?{x:-w/2-lip/2,y:-mid,w:lip,h:length}:{x:w/2+lip/2,y:-mid,w:lip,h:length};}
export const COLORS={red:'#EF4056',yellow:'#FFD22B',green:'#26C849',blue:'#2399F6'};
export const FOOD_KEYS:Record<string,string>={lasagna:'food-lasagna-o4',waffle:'food-waffle-l3',fish:'food-fish-i2h',omelette:'food-omelette-i2v',bread:'food-bread-i2h',tart:'food-tart-i1',berry:'food-berry-i2h',sushi:'food-sushi-i1'};

/** Ordinary drags move a packed colored tray; hold-to-lift chooses its food instead. */
export function dragTarget(state:State,cell:Cell,lift=false):string|undefined{
 const contains=(o:{x:number;y:number;shape:Cell[]})=>o.shape.some(p=>p.x+o.x===cell.x&&p.y+o.y===cell.y);
 const food=[...state.foods].reverse().find(contains);
 if(food){const carrier=state.entities.find(e=>e.id===food.carrierId);return !lift&&carrier?carrier.id:food.id;}
 return [...state.entities].reverse().find(contains)?.id;
}

/** A partially covered multi-cell piece is entirely unavailable, including its grip/carrier. */
export function canSelectElement(level:Level,state:State,id:string):boolean{
 const obj=[...state.entities,...state.foods].find(o=>o.id===id);if(!obj)return false;
 const blocked=lockedCells(level,state),covered=(o:Entity|Food)=>entityCells(o).some(c=>blocked.has(`${c.x},${c.y}`));
 if(covered(obj))return false;
 const food=state.foods.find(f=>f.id===id),carrier=food?.carrierId&&state.entities.find(e=>e.id===food.carrierId);
 return !carrier||!covered(carrier);
}
export function selectableTarget(level:Level,state:State,cell:Cell,lift=false):string|undefined{
 const id=dragTarget(state,cell,lift);return id&&canSelectElement(level,state,id)?id:undefined;
}

/** Generous edge magnet in grid units; every snap still passes the shipping route/recipe rules. */
export function snapExitAction(level:Level,state:State,id:string,anchor:Cell):Action|undefined{
 const obj=state.entities.find(e=>e.id===id);if(!obj||obj.type!=='tray')return;
 const minX=Math.min(...obj.shape.map(c=>c.x)),maxX=Math.max(...obj.shape.map(c=>c.x)),minY=Math.min(...obj.shape.map(c=>c.y)),maxY=Math.max(...obj.shape.map(c=>c.y));
 const candidates:{action:Action;distance:number}[]=[];
 for(const exit of level.exits){
  if(exit.color!==obj.color)continue;
  const horizontal=exit.side==='left'||exit.side==='right',span=horizontal?maxY-minY+1:maxX-minX+1;
  if(span>exit.width)continue;
  const near=exit.side==='left'?anchor.x+minX<=.85:exit.side==='right'?anchor.x+maxX>=level.width-1-.85:exit.side==='top'?anchor.y+minY<=.85:anchor.y+maxY>=level.height-1-.85;
  const toward=exit.side==='left'?obj.x-anchor.x:exit.side==='right'?anchor.x-obj.x:exit.side==='top'?obj.y-anchor.y:anchor.y-obj.y;
  if(!near||toward<.18)continue;
  for(let start=exit.start;start<=exit.start+exit.width-span;start++){
   const x=horizontal?(exit.side==='left'?-minX-1:level.width-maxX):start-minX,y=horizontal?start-minY:(exit.side==='top'?-minY-1:level.height-maxY);
   if(Math.abs(horizontal?anchor.y-y:anchor.x-x)>.9)continue;
   const action={entityId:id,dx:x-obj.x,dy:y-obj.y};
   if(planDrag(level,state,action))candidates.push({action,distance:(anchor.x-x)**2+(anchor.y-y)**2});
  }
 }
 return candidates.sort((a,b)=>a.distance-b.distance)[0]?.action;
}
