import type {Cell,Shape,Order} from './Types';
export const FOOD_CATALOG:{kind:string;shape:Shape}[]=[
 {kind:'tart',shape:[{x:0,y:0}]},{kind:'sushi',shape:[{x:0,y:0}]},
 ...['fish','bread','berry'].map(kind=>({kind,shape:[{x:0,y:0},{x:1,y:0}]})),
 {kind:'omelette',shape:[{x:0,y:0},{x:0,y:1}]},
 {kind:'waffle',shape:[{x:0,y:0},{x:0,y:1},{x:1,y:1}]},
 {kind:'lasagna',shape:[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}];
const key=(p:Cell)=>`${p.x},${p.y}`;
export function normalizeShape(shape:Shape):Shape {if(!shape.length)return[];const x=Math.min(...shape.map(p=>p.x)),y=Math.min(...shape.map(p=>p.y));return shape.map(p=>({x:p.x-x,y:p.y-y})).sort((a,b)=>a.y-b.y||a.x-b.x);}
export function shapeKey(shape:Shape):string{return normalizeShape(shape).map(key).join(';');}
/** Fixed orientations: rotations and reflections remain distinct authorable tray shapes. */
export function enumerateTrayShapes(maxArea=4):Shape[]{if(!Number.isInteger(maxArea)||maxArea<1||maxArea>4)throw Error('Tray area must be 1..4');let layer:Shape[]=[[{x:0,y:0}]],out:Shape[]=[];for(let area=1;area<=maxArea;area++){out.push(...layer);const next=new Map<string,Shape>();for(const s of layer)for(const p of s)for(const [dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const q={x:p.x+dx,y:p.y+dy};if(s.some(c=>key(c)===key(q)))continue;const n=normalizeShape([...s,q]);next.set(shapeKey(n),n);}layer=Array.from(next.values());}return out;}
export type Packing=Order['foods'];
export function packingKey(p:Packing):string{return p.map(f=>`${f.kind}@${f.x},${f.y}:${shapeKey(f.shape)}`).sort().join('|');}
/** First-empty-cell exact cover avoids duplicate permutations of identical food instances. */
export function enumeratePackings(shape:Shape,maxFoods=shape.length):Packing[]{
 if(!shape.length||shape.length>4||shape.some(p=>!Number.isInteger(p.x)||!Number.isInteger(p.y))||new Set(shape.map(key)).size!==shape.length||!Number.isInteger(maxFoods)||maxFoods<1)throw Error('Invalid packing bounds');
 const connected=new Set([key(shape[0])]);for(let changed=true;changed;){changed=false;for(const p of shape)if(!connected.has(key(p))&&shape.some(q=>connected.has(key(q))&&Math.abs(p.x-q.x)+Math.abs(p.y-q.y)===1)){connected.add(key(p));changed=true;}}if(connected.size!==shape.length)throw Error('Tray must be connected');
 const cells=normalizeShape(shape),target=new Set(cells.map(key)),results=new Map<string,Packing>();
 function visit(used:Set<string>,foods:Packing):void{const first=cells.find(p=>!used.has(key(p)));if(!first){results.set(packingKey(foods),foods);return;}if(foods.length>=maxFoods)return;
  for(const f of FOOD_CATALOG)for(const anchor of f.shape){const x=first.x-anchor.x,y=first.y-anchor.y,positions=f.shape.map(p=>key({x:x+p.x,y:y+p.y}));if(positions.some(k=>!target.has(k)||used.has(k)))continue;visit(new Set([...used,...positions]),[...foods,{kind:f.kind,shape:f.shape.map(p=>({...p})),x,y}]);}
 }visit(new Set(),[]);return Array.from(results.values());
}
