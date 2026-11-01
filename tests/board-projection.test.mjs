import test from 'node:test';
import assert from 'node:assert/strict';
import {BOARD_PROJECTION,projectBoardCell,unprojectBoardPoint,getBoardCellSize,configureBoardProjection,currentGeometry} from '../assets/scripts/features/kitchen/BoardProjection.ts';
import {configureBoardCalibration} from '../assets/scripts/features/kitchen/BoardProjection.ts';
test('authored grid calibration round trips every visible center and rejects wooden rim',()=>{try{for(const size of [4,5,6]){configureBoardCalibration(size);for(let row=0;row<size;row++)for(let col=0;col<size;col++){const p=projectBoardCell([col,row],size,size);assert.deepEqual(unprojectBoardPoint(p.x,p.y,size,size),[col,row]);}assert.equal(unprojectBoardPoint(0,295,size,size),null);}configureBoardCalibration(4);assert.ok(projectBoardCell([0,0],4,4).y>220);assert.ok(projectBoardCell([0,3],4,4).y<-210);assert.ok(getBoardCellSize(4,4)>140);}finally{configureBoardCalibration(null);}});

test('perspective preserves cell centers across rectangular boards',()=>{
 for(const [width,height] of [[4,4],[5,5],[6,6],[4,6],[6,5],[5,4]]){
  for(let row=0;row<height;row++)for(let col=0;col<width;col++){
   const p=projectBoardCell([col,row],width,height);
   assert.deepEqual(unprojectBoardPoint(p.x,p.y,width,height),[col,row]);
  }
  assert.equal(getBoardCellSize(width,height),575/Math.max(width,height));
  assert.ok(projectBoardCell([0,0],width,height).scale<projectBoardCell([0,height-1],width,height).scale);
 }
});
test('configurable single-point perspective has larger near row spacing and reversible centers',()=>{
 const original=currentGeometry();
 try{
  configureBoardProjection({topHalfWidth:220,bottomHalfWidth:300,topY:240,bottomY:-240});
  assert.equal(currentGeometry().topHalfWidth,220);
  const far=projectBoardCell([2,0],5,5),second=projectBoardCell([2,1],5,5);
  const near=projectBoardCell([2,4],5,5),penultimate=projectBoardCell([2,3],5,5);
  assert.ok(penultimate.y-near.y>far.y-second.y);
  for(let row=0;row<5;row++)for(let col=0;col<4;col++){
   const p=projectBoardCell([col,row],4,5);
   assert.deepEqual(unprojectBoardPoint(p.x,p.y,4,5),[col,row]);
  }
  assert.equal(getBoardCellSize(4,5),480/5);
 }finally{configureBoardProjection(original);}
 const p=projectBoardCell([3,4],6,6);
 assert.deepEqual(unprojectBoardPoint(p.x,p.y,6,6),[3,4]);
 assert.equal(currentGeometry().topY,287.5);
});
test('perspective rejects points outside trapezoid rather than its enclosing rectangle',()=>{
 for(const [x,y] of [[271,287.5],[-271,287.5],[295,-287.5],[0,288],[0,-288]])assert.equal(unprojectBoardPoint(x,y,5,5),null);
 assert.deepEqual(unprojectBoardPoint(0,287.5,5,5),[2,0]);
 assert.deepEqual(unprojectBoardPoint(294,-287.5,5,5),[4,4]);
 assert.equal(BOARD_PROJECTION.boardW,620);assert.equal(BOARD_PROJECTION.boardH,600);
 assert.deepEqual(BOARD_PROJECTION.topLeft,[-270,287.5]);
 assert.deepEqual(BOARD_PROJECTION.bottomRight,[294,-287.5]);
});

