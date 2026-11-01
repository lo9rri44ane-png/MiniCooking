import {readHistoricalFile as readFile} from './retired-art.mjs';
import {activeOrArchived} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';
import{BOARD_CALIBRATION}from'../assets/scripts/features/kitchen/BoardCalibration.ts';
import{configureBoardCalibration,getBoardCellSize,projectBoardCell,unprojectBoardPoint}from'../assets/scripts/features/kitchen/BoardProjection.ts';
const sha=b=>createHash('sha256').update(b).digest('hex');
test('v6 boards share a reviewed exterior and measured centers while fewer cells produce larger elements',async()=>{
 const base='art/breakfast/v6/manifests/',m=JSON.parse(await readFile(base+'boards.json')),audit=JSON.parse(await readFile(base+'board-audit.json'));
 assert.equal(audit.status,'complete');assert.deepEqual(audit.blockers,[]);assert.equal(m.assets.length,3);assert.equal(new Set(audit.assets.map(a=>a.alphaSha256)).size,1);assert.match(audit.assets[0].alphaSha256,/^[a-f0-9]{64}$/);
 for(const s of m.sources)assert.equal(sha(await readFile(s.path)),s.sha256);
 const sizes=[];try{for(const size of [4,5,6]){const c=BOARD_CALIBRATION[size];assert.equal(c.rows[0],13);assert.equal(c.rows[size],585);configureBoardCalibration(size);sizes.push(getBoardCellSize(size,size));for(let row=0;row<size;row++)for(let col=0;col<size;col++){const p=projectBoardCell([col,row],size,size);assert.deepEqual(unprojectBoardPoint(p.x,p.y,size,size),[col,row]);}assert.equal(unprojectBoardPoint(0,-286,size,size),null);}}finally{configureBoardCalibration(null);}assert.ok(sizes[0]>sizes[1]&&sizes[1]>sizes[2]);
 for(const a of m.assets){const bytes=await readFile(await activeOrArchived(a.runtime)),r=audit.assets.find(r=>r.key===a.key);assert.equal(bytes.readUInt32BE(16),620);assert.equal(bytes.readUInt32BE(20),600);assert.equal(sha(bytes),a.sha256);assert.deepEqual(bytes,await readFile(a.backup));assert.ok((await stat(await activeOrArchived(a.runtime+'.meta'))).size>0);assert.equal(r.reviewedSha256,a.sha256);assert.equal(r.visualReview,'complete');}
});
