import type {Level,Shape,Color,Action} from '../../assets/scripts/features/demo2/Types';
const O:Shape=[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],L:Shape=[{x:0,y:0},{x:0,y:1},{x:1,y:1}],H:Shape=[{x:0,y:0},{x:1,y:0}],V:Shape=[{x:0,y:0},{x:0,y:1}],I:Shape=[{x:0,y:0}];
const specs:{id:string;shape:Shape;color:Color;kind:string;sx:number;sy:number;tx:number;ty:number}[]=[
{id:'A',shape:O,color:'red',kind:'lasagna',sx:0,sy:0,tx:4,ty:0},
{id:'B',shape:L,color:'green',kind:'waffle',sx:0,sy:2,tx:4,ty:2},
{id:'C',shape:H,color:'blue',kind:'fish',sx:0,sy:4,tx:4,ty:4},
{id:'D',shape:V,color:'yellow',kind:'omelette',sx:2,sy:2,tx:3,ty:2},
{id:'E',shape:H,color:'green',kind:'bread',sx:0,sy:5,tx:4,ty:5},
{id:'F',shape:I,color:'yellow',kind:'tart',sx:3,sy:1,tx:3,ty:0}];
const action=(entityId:string,dx:number,dy:number):Action=>({entityId,dx,dy});
const segments:Record<string,Action[]>={
F:[action('foodF',0,-1),action('trayF',0,-6),action('panF',0,-6)],
D:[action('foodD',1,0),action('trayD',0,-6),action('panD',1,0),action('panD',0,-6)],
A:[action('foodA',4,0),action('trayA',6,0),action('panA',6,0)],
E:[action('foodE',4,0),action('trayE',0,6),action('panE',-6,0)],
C:[action('foodC',4,0),action('panC',0,1),action('panC',-6,0),action('trayC',-6,0)],
B:[action('foodB',4,0),action('trayB',0,6)]};
function make(count:number):Level{const included=count===6?['F','D','A','E','C','B']:['E','F','D','A','C'].slice(0,count);const selected=specs.filter(s=>included.includes(s.id));return {id:count-1,name:`装盘 ${count-1}`,width:6,height:6,entities:selected.flatMap(s=>[{id:`pan${s.id}`,type:'pan' as const,shape:s.shape,x:s.sx,y:s.sy},{id:`tray${s.id}`,type:'tray' as const,color:s.color,shape:s.shape,x:s.tx,y:s.ty}]),foods:selected.map(s=>({id:`food${s.id}`,kind:s.kind,shape:s.shape,x:s.sx,y:s.sy,carrierId:`pan${s.id}`})),orders:selected.map(s=>({id:`order${s.id}`,color:s.color,shape:s.shape,foods:[{kind:s.kind,shape:s.shape,x:0,y:0}]})),exits:[{side:'top',start:3,width:1,color:'yellow'},{side:'right',start:0,width:2,color:'red'},{side:'bottom',start:3,width:3,color:'green'},{side:'left',start:2,width:4,color:'blue'}],solution:included.flatMap((id,i)=>i===included.length-1?segments[id].slice(0,segments[id].findIndex(a=>a.entityId==='tray'+id)+1):segments[id])};}
export const LEVELS=[2,3,4,5,6].map(make);
const packingLevel=LEVELS[1];
packingLevel.foods=packingLevel.foods.filter(f=>f.id!=='foodD');
packingLevel.foods.push({id:'foodDtop',kind:'tart',shape:I,x:2,y:2,carrierId:'panD'},{id:'foodDbottom',kind:'tart',shape:I,x:2,y:3,carrierId:'panD'});
packingLevel.orders.find(o=>o.id==='orderD')!.foods=[{kind:'tart',shape:I,x:0,y:0},{kind:'tart',shape:I,x:0,y:1}];
packingLevel.solution=[...segments.E,...segments.F,action('foodDtop',1,0),action('foodDbottom',1,0),action('trayD',0,-6)];
export const levels=LEVELS;
export const solutions=LEVELS.map(l=>l.solution);
export const alternativeSolution= ['E','F','D','A','C','B'].flatMap(id=>segments[id]);
