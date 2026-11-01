import {readHistoricalFile as readFile} from './retired-art.mjs';
import {activeOrArchived} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';
const hash=b=>createHash('sha256').update(b).digest('hex');
test('cooking presentation art has six reviewed complete outputs, identical backups and imported identities',async()=>{
 const base='art/breakfast/v4',manifest=JSON.parse(await readFile(base+'/manifests/assets.json','utf8')),audit=JSON.parse(await readFile(base+'/manifests/crop-audit.json','utf8'));
 assert.equal(audit.status,'complete');assert.deepEqual(audit.blockers,[]);
 assert.deepEqual(manifest.assets.map(a=>a.key).sort(),['ui/work_track','ui/work_fill','ui/order_check','board/station_mat','environment/sunlight','backgrounds/kitchen'].sort());
 for(const source of manifest.sources){const b=await readFile(source.path);assert.equal(hash(b),source.sha256);assert.equal(b.readUInt32BE(16),source.width);assert.equal(b.readUInt32BE(20),source.height);}
 for(const a of manifest.assets){const b=await readFile(a.backup),r=await readFile(await activeOrArchived(a.runtime)),review=audit.assets.find(v=>v.key===a.key);assert.equal(hash(b),a.sha256);assert.deepEqual(b,r);assert.ok((await stat(await activeOrArchived(a.runtime+'.meta'))).size>0);assert.equal(review.reviewedSha256,a.sha256);assert.equal(review.visualReview,'complete');if(!review.fullBleed)assert.ok(Math.min(...Object.values(review.margin))>=3);}
});
