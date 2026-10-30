import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState, move, validateLevel} from '../assets/scripts/features/kitchen/Rules.ts';
import {solve} from '../assets/scripts/features/kitchen/Solver.ts';
const recipe={id:'salad',name:'沙拉',ingredients:{leaf:1},device:'table'};
function fixture(extra={}){return {id:1,name:'测试',tip:'',width:4,height:3,start:[0,1],walls:[],items:[{x:1,y:1,type:'leaf'}],devices:[{x:3,y:0,type:'table',name:'料理台',stations:[[3,1]]}],recipes:[recipe],customers:[{id:'c1',name:'客人1',orders:[{recipe:'salad',count:1}]}],capacity:7,budget:10,...extra};}
test('zero movement is free; crossing station does not cook; stop cooks and last step wins',()=>{const l=fixture({budget:1});assert.deepEqual(move(l,initialState(l),'left').state,initialState(l));const r=move(l,initialState(l),'right');assert.equal(r.state.status,'won');assert.equal(r.state.steps,1);assert.equal(r.state.bag.leaf||0,0);assert.equal(r.events.filter(e=>e.kind==='cook').length,1);const crossing=fixture({devices:[{x:2,y:0,type:'table',name:'料理台',stations:[[2,1]]}]});assert.equal(move(crossing,initialState(crossing),'right').state.status,'playing');});
test('the seventh ingredient fails immediately before station even with complete recipe',()=>{const l=fixture({capacity:2,items:[{x:1,y:1,type:'leaf'},{x:2,y:1,type:'leaf'}]});const r=move(l,initialState(l),'right');assert.equal(r.state.status,'full');assert.deepEqual(r.state.pos,[2,1]);assert.equal(r.events.some(e=>e.kind==='cook'),false);assert.equal(initialState(l).remaining.length,2);});
test('priority consumes shared material, skips unsupported recipes and never pre-cooks waiting customers',()=>{const l=fixture({recipes:[recipe,{id:'soup',name:'汤',ingredients:{leaf:1,water:1},device:'table'}],customers:[{id:'c1',name:'甲',orders:[{recipe:'salad',count:1}]},{id:'c2',name:'乙',orders:[{recipe:'soup',count:1}]}]});const s=initialState(l);s.bag={water:1};const r=move(l,s,'right');assert.equal(r.state.done[0][0],1);assert.equal(r.state.done[1][0],0);assert.equal(r.state.bag.water,1);});
test('new customers are served during same stop, without extra steps',()=>{const l=fixture({items:[{x:1,y:1,type:'leaf'},{x:2,y:1,type:'leaf'}],customers:Array.from({length:4},(_,i)=>({id:`c${i}`,name:`客${i}`,orders:[{recipe:'salad',count:1}]}))});const s=initialState(l);s.bag={leaf:2};const r=move(l,s,'right');assert.equal(r.state.status,'won');assert.equal(r.events.filter(e=>e.kind==='cook').length,4);assert.equal(r.state.steps,1);});
test('only exhausted budget loses, and search proves shortest path using same rules',()=>{const l=fixture({items:[{x:0,y:2,type:'leaf'}],budget:1});assert.equal(move(l,initialState(l),'right').state.status,'steps');const solution=solve(fixture());assert.equal(solution.status,'optimal');assert.deepEqual(solution.path,['right']);});
test('configuration checks full-queue material conservation and recipe below capacity',()=>{assert.deepEqual(validateLevel(fixture()),[]);assert.ok(validateLevel(fixture({items:[]})).some(e=>e.includes('材料')));assert.ok(validateLevel(fixture({capacity:1})).some(e=>e.includes('容量')));});

const {LEVELS}=await import('../assets/scripts/features/kitchen/Levels.ts');
test('six shipping levels validate, replay to victory, and have strictly rising proven minima',()=>{
 assert.equal(LEVELS.length,6);let previous=0;
 for(const l of LEVELS){assert.deepEqual(validateLevel(l),[],l.name);const result=solve(l);assert.equal(result.status,'optimal',l.name);assert.equal(result.path.length,l.optimal,l.name);assert.ok(l.optimal>previous,l.name);previous=l.optimal;
 let s=initialState(l);for(const d of l.solution)s=move(l,s,d).state;assert.equal(s.status,'won',l.name);assert.ok(s.steps<=l.budget);assert.equal(Object.values(s.bag).reduce((a,b)=>a+b,0),0);assert.equal(s.remaining.length,0);
 }
});
test('station with shared material follows visible priority including multi-food customers',()=>{
 const l=fixture({recipes:[recipe,{id:'other',name:'另一道菜',ingredients:{leaf:1},device:'table'}],customers:[{id:'a',name:'甲',orders:[{recipe:'salad',count:1},{recipe:'other',count:1}]},{id:'b',name:'乙',orders:[{recipe:'salad',count:1}]}]});
 const s=initialState(l);s.bag={leaf:1};const r=move(l,s,'right');assert.deepEqual(r.state.done,[[1,1],[0]]);assert.deepEqual(r.state.active,[1]);
});
