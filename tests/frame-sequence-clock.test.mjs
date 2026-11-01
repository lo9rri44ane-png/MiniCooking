import test from 'node:test';
import assert from 'node:assert/strict';
import {FrameSequenceClock} from '../assets/scripts/framework/core/FrameSequenceClock.ts';
test('clock crosses frames at low framerate and completes once',()=>{const c=new FrameSequenceClock(4,8,false);assert.equal(c.advance(.26).index,2);assert.deepEqual(c.advance(.3),{index:3,completed:true});assert.equal(c.advance(1).completed,false);});
test('loop wraps multiple cycles and duration overrides fps',()=>{const c=new FrameSequenceClock(4,8,true,2);assert.equal(c.advance(4.6).index,1);});
test('pause preserves elapsed time; invalid dt cannot rewind',()=>{const c=new FrameSequenceClock(4,8,false);c.paused=true;assert.equal(c.advance(1).index,0);c.paused=false;assert.equal(c.advance(.125).index,1);assert.equal(c.advance(-1).index,1);});

test('fractional light sampling advances smoothly across frame and loop boundaries while pause freezes it',()=>{const c=new FrameSequenceClock(4,1/3,true);c.advance(2.97);assert.ok(Math.abs(c.phase-.99)<1e-9);c.advance(.06);assert.ok(Math.abs(c.phase-1.01)<1e-9);c.paused=true;const phase=c.phase;c.advance(3);assert.equal(c.phase,phase);c.paused=false;c.advance(8.97);assert.ok(c.phase<1e-9);});
