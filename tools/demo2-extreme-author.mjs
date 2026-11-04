import fs from 'node:fs';
import {initialState,actDrag} from '../assets/scripts/features/demo2/Rules.ts';
import {enumeratePackings} from '../assets/scripts/features/demo2/Packing.ts';
export const I=[{x:0,y:0}],H=[{x:0,y:0},{x:1,y:0}],V=[{x:0,y:0},{x:0,y:1}],L=[{x:0,y:0},{x:0,y:1},{x:1,y:1}],O=[...L,{x:1,y:0}];
/** Exact disjoint full-board tilings: occupancy is real union, never counted twice. */
export function candidate(seed=1,width=4,height=4,template=0){
 let rng=seed>>>0;const random=()=>((rng=(Math.imul(rng,1664525)+1013904223)>>>0)/4294967296);
 const spec=(kind,shape,x=0,y=0)=>({kind,shape,x,y}),four=[spec('tart',I),spec('sushi',I,1),spec('tart',I,0,1),spec('sushi',I,1,1)];
 let recipes;
 if(width*height===16&&template===2)recipes=[{shape:O,foods:four.map(f=>({...f,kind:'tart'}))},{shape:O,foods:four.map(f=>({...f,kind:'sushi'}))}];
 else if(width*height===16)recipes=[{shape:O,foods:[spec('waffle',L),spec('sushi',I,1)]},{shape:H,foods:[spec('fish',H)]},{shape:H,foods:[spec('bread',H)]}];
 else if(width*height===20&&template===2)recipes=[{shape:O,foods:four.map(f=>({...f,kind:'tart'}))},{shape:O,foods:four.map(f=>({...f,kind:'sushi'}))},{shape:H,foods:[spec('fish',H)]}];
 else if(width*height===20&&template===0)recipes=[{shape:O,foods:four},{shape:O,foods:[spec('waffle',L),spec('sushi',I,1)]},{shape:H,foods:[spec('tart',I),spec('sushi',I,1)]}];
 else if(width*height===20)recipes=[{shape:O,foods:four},{shape:L,foods:[spec('tart',I),spec('sushi',I,0,1),spec('tart',I,1,1)]},{shape:L,foods:[spec('waffle',L)]}];
 else if(width*height===24)recipes=[{shape:O,foods:four},{shape:O,foods:[spec('waffle',L),spec('sushi',I,1)]},{shape:O,foods:[spec('fish',H),spec('bread',H,0,1)]}];
 else if(width*height===30)recipes=[{shape:O,foods:four.map(f=>({...f,kind:'tart'}))},{shape:O,foods:four.map(f=>({...f,kind:'sushi'}))},{shape:O,foods:template===4?[spec('waffle',L),spec('sushi',I,1)]:four},{shape:L,foods:[spec('omelette',V),spec('tart',I,1,1)]}];else throw Error('unsupported template');
 recipes=recipes.map(r=>{const signature=xs=>xs.map(f=>f.kind+':'+f.x+','+f.y).sort().join(';'),selected=enumeratePackings(r.shape).find(p=>signature(p)===signature(r.foods));if(!selected)throw Error('recipe absent from exhaustive packing pool');return{...r,foods:selected};});
 const colors=['red','blue','green','yellow'],pieces=[...recipes.map((r,i)=>({id:'box'+i,type:'tray',color:colors[i],shape:r.shape})),...recipes.flatMap((r,i)=>r.foods.map((f,j)=>({id:'food'+i+'-'+j,kind:f.kind,shape:f.shape})))].sort((a,b)=>b.shape.length-a.shape.length);
 function place(index,mask,result){if(index===pieces.length)return result;const piece=pieces[index],positions=[];for(let y=0;y<height;y++)for(let x=0;x<width;x++){let bits=0,ok=true;for(const c of piece.shape){if(x+c.x>=width||y+c.y>=height){ok=false;break;}bits|=1<<((y+c.y)*width+x+c.x);}if(ok&&!(bits&mask))positions.push({x,y,bits,r:random()});}positions.sort((a,b)=>a.r-b.r);for(const p of positions){const next=place(index+1,mask|p.bits,[...result,{...piece,x:p.x,y:p.y}]);if(next)return next;}return null;}
 const placed=place(0,0,[]);if(!placed)return null;
 if(template===2){const singles=placed.filter(p=>p.kind&&p.shape.length===1),boxes=placed.filter(p=>p.type),need={tart:4,sushi:4};function assign(i){if(i===singles.length)return !need.tart&&!need.sushi;const f=singles[i],forbidden=new Set();for(const b of boxes)if(b.shape.some(c=>Math.abs(b.x+c.x-f.x)+Math.abs(b.y+c.y-f.y)===1)){if(b.color==='red')forbidden.add('tart');if(b.color==='blue')forbidden.add('sushi');}for(const kind of ['tart','sushi'])if(need[kind]&&!forbidden.has(kind)){f.kind=kind;need[kind]--;if(assign(i+1))return true;need[kind]++;}return false;}if(!assign(0))return null;}
 return{id:12,name:'借盒满盘',width,height,timeLimitSeconds:300,entities:placed.filter(p=>p.type),foods:placed.filter(p=>p.kind),orders:recipes.map((r,i)=>({id:'order'+i,color:colors[i],shape:r.shape,foods:r.foods})),exits:[{side:'right',start:1,width:2,color:'red'},{side:'left',start:1,width:Math.max(...recipes[1].shape.map(c=>c.y))+1,color:'blue'},...(recipes.length>2?[{side:'bottom',start:1,width:2,color:'green'}]:[]),...(recipes.length>3?[{side:'top',start:2,width:2,color:'yellow'}]:[])],solution:[]};
}
export function validateProof(level,path){let s=initialState(level);for(const a of path){const n=actDrag(level,s,a);if(n===s)return false;s=n;}return s.won;}
if(process.argv.includes('--candidates')){const candidates=[];for(let seed=1;seed<=64;seed++){const l=candidate(seed);if(l)candidates.push({seed,level:l});}fs.writeFileSync('docs/demo2/extreme-candidates.json',JSON.stringify(candidates,null,2));console.log('full occupancy candidates',candidates.length);}

