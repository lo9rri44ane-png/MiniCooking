import {writeFile} from 'node:fs/promises';import {createHash} from 'node:crypto';
import {solve} from '../assets/scripts/features/kitchen/Solver.ts';import {validateLevel} from '../assets/scripts/features/kitchen/Rules.ts';import {LEVELS as prototype} from '../assets/scripts/features/kitchen/Levels.ts';
let seed=0x28ab7f19;function rnd(n){seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return (seed>>>0)%n;}function shuffle(a){for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
const recipes=[
{id:'salad',name:'蔬菜沙拉',ingredients:{leaf:1,tomato:1},device:'table'},
{id:'toast',name:'芝士吐司',ingredients:{bread:1,cheese:1},device:'pan'},
{id:'deluxe',name:'丰盛沙拉',ingredients:{leaf:1,tomato:1,cheese:1},device:'table'},
{id:'juice',name:'莓果饮料',ingredients:{water:1,berry:1},device:'drink'},
{id:'burger',name:'牛肉汉堡',ingredients:{bread:1,leaf:1,meat:1},device:'pan'},
{id:'eggtoast',name:'鸡蛋吐司',ingredients:{bread:1,cheese:1,egg:1},device:'pan'},
{id:'coffee',name:'牛奶咖啡',ingredients:{water:1,milk:1,coffee:1},device:'drink'},
{id:'fishrice',name:'香煎鱼饭',ingredients:{fish:1,rice:1},device:'pan'},
{id:'platter',name:'田园饭碗',ingredients:{rice:1,leaf:1,tomato:1},device:'table'},
{id:'milkberry',name:'莓果奶昔',ingredients:{milk:1,berry:1},device:'drink'}
];
const restaurants=[{id:'breakfast',name:'暖心早餐店',description:'从第一份沙拉到早餐高峰，学习三种设备和背包管理。',levelIds:Array.from({length:80},(_,i)=>i+1)},{id:'street',name:'街角简餐店',description:'加入鸡蛋、牛奶咖啡、鱼饭和奶昔，练习更复杂的配方与订单。',levelIds:Array.from({length:80},(_,i)=>i+81)}];
const chapters=['开店第一课','背包与设备','候场客人','共享食材','多道菜订单','批量出餐','路线组合','下班大挑战'];
const intro1={1:['basic'],3:['undo'],6:['pan'],8:['overtime'],11:['bag-pressure','ad-slot'],16:['drink'],21:['queue'],31:['burger'],41:['multi-order'],51:['portions'],71:['tight-budget']};
const intro2={1:['restaurant:street','egg'],6:['coffee'],16:['rice'],31:['platter'],41:['milkberry']};
function orders(shop,n){let list;
if(shop===0){if(n<=5)list=[['salad']];else if(n<=10)list=[['salad'],['toast']];else if(n<=15)list=[['deluxe'],['toast'],['salad']];else if(n<=20)list=[['salad'],['toast'],['juice']];else if(n<=30)list=[['salad'],['toast'],['juice'],['salad']];else if(n<=40)list=[['salad'],['toast'],['juice'],['burger']];else if(n<=50)list=[['salad','toast'],['juice'],['burger']];else if(n<=60)list=[['salad:2'],['toast'],['juice'],['burger']];else if(n<=70)list=[['deluxe'],['toast'],['juice'],['burger']];else list=[['salad'],['toast'],['juice'],['burger'],['salad']];}
else {if(n<=5)list=[['eggtoast'],['salad']];else if(n<=10)list=[['eggtoast'],['coffee']];else if(n<=15)list=[['eggtoast'],['coffee'],['salad']];else if(n<=20)list=[['eggtoast'],['coffee'],['fishrice']];else if(n<=30)list=[['eggtoast'],['coffee'],['fishrice'],['salad']];else if(n<=40)list=[['platter'],['fishrice'],['coffee']];else if(n<=50)list=[['eggtoast','milkberry'],['coffee']];else if(n<=60)list=[['milkberry:2'],['fishrice'],['coffee'],['eggtoast']];else if(n<=70)list=[['platter'],['fishrice'],['milkberry'],['eggtoast']];else list=[['platter'],['coffee'],['milkberry'],['fishrice'],['salad']];}
return list.map((parts,i)=>({id:`c${i+1}`,name:`客人${i+1}`,orders:parts.map(p=>{const [recipe,count]=p.split(':');return {recipe,count:Number(count||1)};})}));}
function signature(l){const forms=[];for(let flip=0;flip<2;flip++)for(let rotation=0;rotation<4;rotation++){const tr=([x,y])=>{if(flip)x=l.width-1-x;for(let r=0;r<rotation;r++)[x,y]=[l.width-1-y,x];return [x,y];};forms.push(JSON.stringify([l.width,tr(l.start),l.walls.map(tr).sort(),l.items.map(i=>[...tr([i.x,i.y]),i.type]).sort(),l.devices.map(d=>[...tr([d.x,d.y]),d.type,d.stations.map(tr).sort()]).sort()]));}return createHash('sha256').update(forms.sort()[0]).digest('hex');}
const all=[],report=[],seen=new Set();const started=Date.now();
for(let shop=0;shop<2;shop++)for(let n=1;n<=80;n++){
 const restaurant=restaurants[shop],id=restaurant.levelIds[n-1],customers=orders(shop,n),used=[...new Set(customers.flatMap(c=>c.orders.map(o=>o.recipe)))],rs=recipes.filter(r=>used.includes(r.id)),introductions=(shop===0?intro1:intro2)[n]||[];
 let min=n<=5?2:n<=10?4:n<=20?6:n<=30?8:n<=40?9:n<=50?10:n<=60?11:n<=70?12:13;if(n%10>=8||n%10===0)min+=2;if(shop===1)min+=1;
 let chosen,result,attempt=0;
 for(;attempt<3500;attempt++){
  let l;
  if(shop===0&&n===1){l=structuredClone(prototype[0]);}
  else{
   const size=n<=5&&shop===0?4:n<=15?5:6,deviceTypes=[...new Set(rs.map(r=>r.device))],devices=[];
   if(deviceTypes.includes('table'))devices.push({x:size-1,y:0,type:'table',name:'料理台',stations:[[size-1,1]]});
   if(deviceTypes.includes('pan'))devices.push({x:0,y:size-1,type:'pan',name:'煎锅',stations:[[1,size-1]]});
   if(deviceTypes.includes('drink'))devices.push({x:size-1,y:size-1,type:'drink',name:'饮料机',stations:[[size-2,size-1]]});
   const reserved=new Set(devices.flatMap(d=>[[d.x,d.y],...d.stations]).map(p=>p.join(','))),cells=[];for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(!reserved.has([x,y].join(',')))cells.push([x,y]);shuffle(cells);
   const start=cells.pop(),wallCount=n<=5?rnd(2):n<=10?1+rnd(3):2+rnd(n>50?6:4),walls=cells.splice(0,wallCount);
   cells.sort((a,b)=>Number(b[0]===0||b[1]===0||b[0]===size-1||b[1]===size-1)-Number(a[0]===0||a[1]===0||a[0]===size-1||a[1]===size-1));
   const items=[];for(const c of customers)for(const o of c.orders){const r=rs.find(r=>r.id===o.recipe);for(const [type,amount]of Object.entries(r.ingredients))for(let k=0;k<amount*o.count;k++){const cell=cells.shift();if(!cell)throw Error('insufficient cells');items.push({x:cell[0],y:cell[1],type});}}
   l={id,name:'',tip:'',width:size,height:size,start,walls,items,devices,recipes:rs,customers,capacity:7,budget:min+7};
  }
  l.availableProps=shop===1?['undo','overtime','ad-slot']:[...(n>=3?['undo']:[]),...(n>=8?['overtime']:[]),...(n>=11?['ad-slot']:[])];
  l.id=id;l.restaurantId=restaurant.id;l.restaurantName=restaurant.name;l.stageNumber=n;l.chapter=chapters[Math.floor((n-1)/10)];l.introductions=introductions;
  if(shop===0&&n===1){l.name='开工第一课';l.tip='订单看材料与设备，滑行收集后停靠制作。';}
  else {const suffix=n%10===0?'挑战关':introductions.length?'新内容':'路线练习';l.name=`${l.chapter}·${suffix}`;l.tip=introductions.length?'新内容登场，店长会带你认识新规则。':n>70?'综合挑战：先规划制作顺序，再收集材料。':'看清订单与设备，适时制作腾出背包。';}
  const errors=validateLevel(l);if(errors.length)throw Error(id+':'+errors.join(';'));
  const key=signature(l);if(seen.has(key))continue;
  const solved=solve(l,65000);if(solved.status!=='optimal'||solved.path.length<(shop===0&&n===1?2:min))continue;
  l.optimal=solved.path.length;l.solution=solved.path;l.budget=l.optimal+(n%10===0?1:n<=10?4:n<=40?3:2);
  seen.add(key);chosen=l;result={id,restaurant:restaurant.id,stage:n,chapter:l.chapter,introductions,shortest:l.optimal,budget:l.budget,customers:l.customers.length,ingredients:l.items.length,canonicalHash:key,visited:solved.visited,attempts:attempt+1};break;
 }
 if(!chosen)throw Error(`Failed ${restaurant.id}:${n} after ${attempt} candidates`);
 all.push(chosen);report.push(result);if(n%10===0||introductions.length)console.log(`${restaurant.name} ${n}/80 shortest=${chosen.optimal} attempts=${attempt+1} elapsed=${Math.round((Date.now()-started)/1000)}s`);
}
await writeFile('assets/scripts/features/kitchen/CampaignData.ts',`import type {Level} from './Rules';\nimport type {Restaurant} from './CampaignStore';\nexport const RESTAURANTS:Restaurant[]=${JSON.stringify(restaurants,null,2)};\nexport const CAMPAIGN_LEVELS:Level[]=${JSON.stringify(all,null,2)};\n`);
await writeFile('docs/verification/restaurant-campaign-levels.json',JSON.stringify({generatedAt:new Date().toISOString(),count:all.length,canonicalUnique:seen.size,seconds:(Date.now()-started)/1000,method:'BFS shared gameplay rules, no props, canonical rotation/reflection duplicate rejection',restaurants,levels:report},null,2));console.log('COMPLETE',all.length,'unique',seen.size);
