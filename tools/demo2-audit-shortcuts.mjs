import{pathToFileURL}from'node:url';
import fs from'node:fs';import{LEVELS}from'../assets/scripts/features/demo2/Levels.ts';import{initialState,actDrag}from'../assets/scripts/features/demo2/Rules.ts';import{Demo2Customers}from'../assets/scripts/features/demo2/Demo2Flow.ts';
const same=(a,b)=>a.length===b.length&&a.every(p=>b.some(q=>p.x===q.x&&p.y===q.y));
function permutations(a){if(a.length<2)return[a];return a.flatMap((v,i)=>permutations(a.filter((_,j)=>j!==i)).map(rest=>[v,...rest]));}
export function directAssemblies(l){const initial=initialState(l),q=new Demo2Customers(l.orders);for(let i=0;i<3;i++){q.fill(i);q.ready(i,q.slots[i].generation);}initial.activeOrderIds=q.active([]);const shortcuts=[];
for(const o of l.orders.filter(o=>initial.activeOrderIds.includes(o.id)))for(const t of l.entities.filter(t=>t.color===o.color&&same(t.shape,o.shape))){
const sequences=permutations(o.foods);for(const slots of sequences){function pack(s,index,used){if(index===slots.length){for(const ex of l.exits.filter(e=>e.color===t.color)){const w=Math.max(...t.shape.map(p=>p.x))+1,h=Math.max(...t.shape.map(p=>p.y))+1,vertical=ex.side==='top'||ex.side==='bottom';for(let a=ex.start;a<ex.start+ex.width;a++){const x=vertical?a:ex.side==='left'?-1:l.width-w+1,y=vertical?(ex.side==='top'?-1:l.height-h+1):a,n=actDrag(l,s,{entityId:t.id,dx:x-t.x,dy:y-t.y});if(n.delivered.length){shortcuts.push({order:o.id,tray:t.id,foodIds:used,assemblySteps:slots.length+1});return true;}}}return false;}const slot=slots[index];for(const f of s.foods.filter(f=>!used.includes(f.id)&&f.kind===slot.kind&&same(f.shape,slot.shape))){const dx=t.x+slot.x-f.x,dy=t.y+slot.y-f.y,n=dx||dy?actDrag(l,s,{entityId:f.id,dx,dy}):f.carrierId===t.id?s:null;if(n&& (n!==s||!dx&&!dy)&&pack(n,index+1,[...used,f.id]))return true;}return false;}if(pack(initial,0,[]))break;}}
return shortcuts;}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
const reports=LEVELS.filter(l=>l.id>=6&&(l.id<12||process.argv.includes('--all'))).map(l=>{const a=directAssemblies(l);return{id:l.id,directAssemblyExitCount:a.length,examples:a.slice(0,3)};});fs.writeFileSync('docs/demo2/shortcut-audit.json',JSON.stringify(reports,null,2));console.log(reports);

}
