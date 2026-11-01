/** Visual coordinates only; rule cells remain integer [column, row]. */
import {BOARD_CALIBRATION} from './BoardCalibration';
let calibrated:4|5|6|null=null;
/** Enable only for the matching authored square board; rectangular boards retain analytic projection. */
export function configureBoardCalibration(size:4|5|6|null):void{calibrated=size;}
export const BOARD_PROJECTION = {
 boardW:620,boardH:600,
 topLeft:[-270,287.5],topRight:[270,287.5],
 bottomLeft:[-294,-287.5],bottomRight:[294,-287.5],
} as const;
const lerp=(a:number,b:number,t:number):number=>a+(b-a)*t;
export interface BoardGeometry {topHalfWidth:number;bottomHalfWidth:number;topY:number;bottomY:number;farScale?:number;nearScale?:number;}
let geometry:Required<BoardGeometry>={topHalfWidth:270,bottomHalfWidth:294,topY:287.5,bottomY:-287.5,farScale:.94,nearScale:1.04};
export function currentGeometry():Required<BoardGeometry>{return {...geometry};}
export function configureBoardProjection(value:BoardGeometry):void{
 const next={...value,farScale:value.farScale??.94,nearScale:value.nearScale??1.04};
 if(!Object.values(next).every(Number.isFinite)||next.topHalfWidth<=0||next.bottomHalfWidth<=0||next.topY<=next.bottomY||next.farScale<=0||next.nearScale<=0)throw Error('Invalid board projection geometry');
 geometry=next;
}

export function getBoardCellSize(width:number,height:number):number{
 if(calibrated===width&&width===height){const c=BOARD_CALIBRATION[calibrated];return (c.rows[height]-c.rows[0])/height;}
 return (geometry.topY-geometry.bottomY)/Math.max(width,height);
}

export function projectBoardCell(cell:[number,number],width:number,height:number):{x:number;y:number;scale:number}{
 if(calibrated===width&&width===height){const c=BOARD_CALIBRATION[calibrated],row=cell[1],col=cell[0],y=(c.rows[row]+c.rows[row+1])/2,x=(c.columns[row][col]+c.columns[row][col+1]+c.columns[row+1][col]+c.columns[row+1][col+1])/4;return {x:x-310,y:300-y,scale:lerp(.94,1.04,(row+.5)/height)};}
 const g=geometry,u=(cell[1]+.5)/height,r=g.topHalfWidth/g.bottomHalfWidth,v=r*u/(1-(1-r)*u);
 return {x:(2*(cell[0]+.5)/width-1)*lerp(g.topHalfWidth,g.bottomHalfWidth,v),y:lerp(g.topY,g.bottomY,v),scale:lerp(g.farScale,g.nearScale,v)};
}

/** Inclusive outer edges select their adjacent cells; outside points never clamp into the board. */
export function unprojectBoardPoint(x:number,y:number,width:number,height:number):[number,number]|null{
 if(!Number.isFinite(x)||!Number.isFinite(y)||width<=0||height<=0)return null;
 if(calibrated===width&&width===height){const c=BOARD_CALIBRATION[calibrated],py=300-y,px=x+310;if(py<c.rows[0]||py>c.rows[height])return null;let row=0;while(row<height-1&&py>=c.rows[row+1])row++;const t=(py-c.rows[row])/(c.rows[row+1]-c.rows[row]),edges=c.columns[row].map((v,i)=>lerp(v,c.columns[row+1][i],t));if(px<edges[0]||px>edges[width])return null;let col=0;while(col<width-1&&px>=edges[col+1])col++;return [col,row];}
 const g=geometry,v=(g.topY-y)/(g.topY-g.bottomY);
 if(v<0||v>1)return null;
 const r=g.topHalfWidth/g.bottomHalfWidth,u=v/(r+(1-r)*v);
 const halfWidth=lerp(g.topHalfWidth,g.bottomHalfWidth,v);
 if(Math.abs(x)>halfWidth)return null;
 const col=Math.min(width-1,Math.floor((x/halfWidth+1)*.5*width));
 const row=Math.min(height-1,Math.floor(u*height));
 return [col,row];
}
