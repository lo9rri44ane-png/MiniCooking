import {writeFile} from 'node:fs/promises';
import {solve} from '../assets/scripts/features/kitchen/Solver.ts';
import {validateLevel} from '../assets/scripts/features/kitchen/Rules.ts';
let seed=78123;function rnd(n){seed=(seed*1664525+1013904223)>>>0;return seed%n;}function shuffle(a){for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
const allRecipes=[{id:'salad',name:'蔬菜沙拉',ingredients:{leaf:1,tomato:1},device:'table'},{id:'toast',name:'芝士吐司',ingredients:{bread:1,cheese:1},device:'pan'},{id:'juice',name:'莓果饮料',ingredients:{water:1,berry:1},device:'drink'},{id:'burger',name:'牛肉汉堡',ingredients:{bread:1,meat:1},device:'pan'}];
const specs=[
 {name:'第一份沙拉',tip:'沿途拾取。停在料理台前的虚线格，自动制作。',n:1,w:4,h:4,obstacles:0,min:2,max:4,customers:[['salad']]},
 {name:'绕个弯开饭',tip:'设备本身会挡路；先规划停靠方向。',n:2,w:5,h:5,obstacles:2,min:5,max:6,customers:[['salad'],['toast']]},
 {name:'两种厨房设备',tip:'六份材料会挤满安全空间，适时制作腾背包。',n:3,w:5,h:5,obstacles:3,min:7,max:8,customers:[['salad'],['toast'],['salad']]},
 {name:'饮料也要准备',tip:'新增饮料机：先收什么、先做什么都影响路线。',n:4,w:6,h:6,obstacles:5,min:9,max:10,customers:[['salad'],['toast'],['juice']]},
 {name:'客人接着来',tip:'三位客人后还有候场，提前查看后续需求。',n:5,w:6,h:6,obstacles:5,min:11,max:12,customers:[['salad'],['toast'],['juice'],['burger']]},
 {name:'下班前的高峰',tip:'五位客人、多菜谱、共享面包。第七份材料立即失败！',n:6,w:6,h:6,obstacles:6,min:13,max:16,customers:[['salad'],['toast'],['juice'],['burger'],['salad']]}
];
const levels=[],reports=[];
for(const spec of specs){
 let found=false;
 for(let attempt=0;attempt<1400;attempt++){
  const ids=[...new Set(spec.customers.flat())],recipes=allRecipes.filter(r=>ids.includes(r.id));
  const devices=[{x:spec.w-1,y:0,type:'table',name:'料理台',stations:[[spec.w-1,1]]}];
  if(ids.some(id=>allRecipes.find(r=>r.id===id).device==='pan'))devices.push({x:0,y:spec.h-1,type:'pan',name:'煎锅',stations:[[1,spec.h-1]]});
  if(ids.includes('juice'))devices.push({x:spec.w-1,y:spec.h-1,type:'drink',name:'饮料机',stations:[[spec.w-2,spec.h-1]]});
  const reserved=new Set(devices.flatMap(d=>[[d.x,d.y],...d.stations]).map(p=>p.join(',')));
  let cells=[];for(let y=0;y<spec.h;y++)for(let x=0;x<spec.w;x++)if(!reserved.has([x,y].join(',')))cells.push([x,y]);shuffle(cells);
  const start=cells.pop(),walls=cells.splice(0,spec.obstacles);
  // Prefer perimeter ingredients: these remain reachable without excessive extra blockers.
  cells.sort((a,b)=>Number(b[0]===0||b[1]===0||b[0]===spec.w-1||b[1]===spec.h-1)-Number(a[0]===0||a[1]===0||a[0]===spec.w-1||a[1]===spec.h-1));
  const items=[];for(const id of spec.customers.flat())for(const [type,count]of Object.entries(allRecipes.find(r=>r.id===id).ingredients))for(let c=0;c<count;c++){const [x,y]=cells.shift();items.push({x,y,type});}
  const level={id:spec.n,name:spec.name,tip:spec.tip,width:spec.w,height:spec.h,start,walls,items,devices,recipes,customers:spec.customers.map((ids,i)=>({id:`c${i}`,name:`客人${i+1}`,orders:ids.map(recipe=>({recipe,count:1}))})),capacity:7,budget:spec.max};
  if(validateLevel(level).length)throw Error(validateLevel(level).join(';'));
  const result=solve(level,80000);
  if(result.status!=='optimal'||result.path.length<spec.min||result.path.length>spec.max)continue;
  level.optimal=result.path.length;level.solution=result.path;level.budget=result.path.length+(spec.n<=2?3:spec.n<=4?2:1);levels.push(level);reports.push({level:level.id,name:level.name,minimum:level.optimal,budget:level.budget,customers:level.customers.length,ingredients:items.length,capacity:7,visited:result.visited,path:result.path});console.log('found',reports.at(-1),'attempt',attempt);found=true;break;
 }
 if(!found)throw Error('No suitable level '+spec.n);
}
await writeFile('assets/scripts/features/kitchen/Levels.ts',`import type {Level} from './Rules';\nexport const LEVELS: Level[] = ${JSON.stringify(levels,null,2)};\n`);
await writeFile('docs/verification/kitchen-levels.json',JSON.stringify({generatedAt:new Date().toISOString(),method:'BFS with shared deterministic rules; minimum slide count within budget',levels:reports},null,2));
