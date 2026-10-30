import {initialState,move,stateKey,DIRECTIONS} from './Rules';
import type {Level,Direction,State} from './Rules';
export interface Solution {status:'optimal'|'unsolvable'|'unknown';path:Direction[];visited:number;}
export function solve(level:Level,limit=150000):Solution{
 const start=initialState(level),queue:{s:State;parent:number;direction?:Direction}[]=[{s:start,parent:-1}],seen=new Set([stateKey(start)]);
 for(let head=0;head<queue.length;head++){
  for(const direction of DIRECTIONS){const s=move(level,queue[head].s,direction).state;if(s.steps===queue[head].s.steps)continue;
   if(s.status==='won'){const path:Direction[]=[direction];let i=head;while(queue[i].parent>=0){path.push(queue[i].direction!);i=queue[i].parent;}return {status:'optimal',path:path.reverse(),visited:seen.size};}
   if(s.status!=='playing')continue;const key=stateKey(s);if(seen.has(key))continue;seen.add(key);queue.push({s,parent:head,direction});if(seen.size>=limit)return {status:'unknown',path:[],visited:seen.size};
  }
 }
 return {status:'unsolvable',path:[],visited:seen.size}; // exhaustive within this level's move budget
}
