export type Cell={x:number;y:number};
export type Color='red'|'yellow'|'green'|'blue';
export type Shape=Cell[];
export interface Entity {id:string;type:'tray'|'pan';shape:Shape;x:number;y:number;color?:Color}
export interface Food {id:string;kind:string;shape:Shape;x:number;y:number;carrierId?:string}
export interface Order {id:string;color:Color;shape:Shape;foods:{kind:string;shape:Shape;x:number;y:number}[]}
export interface Exit {side:'top'|'bottom'|'left'|'right';start:number;width:number;color:Color}
export interface State {entities:Entity[];foods:Food[];delivered:string[];returned:string[];won:boolean}
export interface Action {entityId:string;dx:number;dy:number}
export interface Level {id:number;name:string;width:number;height:number;entities:Entity[];foods:Food[];orders:Order[];exits:Exit[];solution:Action[]}
