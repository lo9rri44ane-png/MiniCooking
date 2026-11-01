import test from 'node:test';import assert from 'node:assert/strict';
import {CustomerDepartureCount} from '../assets/scripts/features/kitchen/CustomerDepartureCount.ts';
const level={customers:Array.from({length:5},(_,i)=>({id:String(i),orders:[{recipe:'a',count:1}]}))};
test('count includes waiting and only decrements on actual departure, once',()=>{
 const m=new CustomerDepartureCount(5),state={active:[0,1,2],queue:3,done:[[0],[0],[0],[0],[0]]};m.reset(level,state);
 assert.equal(m.remaining,5);state.done[0][0]=1;assert.equal(m.remaining,5);
 assert.equal(m.markDeparted(0),true);assert.equal(m.remaining,4);assert.equal(m.markDeparted(0),false);assert.equal(m.markDeparted(9),false);assert.equal(m.remaining,4);
});
test('undo rebuild restores customers and invalidates old callbacks; reset handles queued customers',()=>{
 const m=new CustomerDepartureCount(5),old=m.reset(level,{active:[1,2,3],queue:4,done:[[1],[0],[0],[0],[0]]});assert.equal(m.remaining,4);
 m.reset(level,{active:[0,1,2],queue:3,done:[[0],[0],[0],[0],[0]]});assert.equal(m.remaining,5);assert.equal(m.markDeparted(1,old),false);assert.equal(m.remaining,5);
 for(let i=0;i<5;i++)m.markDeparted(i);assert.equal(m.remaining,0);assert.equal(m.markDeparted(-1),false);assert.equal(m.remaining,0);
});
