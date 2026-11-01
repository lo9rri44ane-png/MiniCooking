import {readHistoricalFile as readFile} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';
const hash=b=>createHash('sha256').update(b).digest('hex');
test('rejected v1 art remains backed up for audit and cannot reappear in runtime resources',async()=>{
 const m=JSON.parse(await readFile('art/breakfast/manifests/assets.json','utf8'));assert.equal(m.acceptance,'rejected-v1');
 for(const source of m.sources){const b=await readFile(source.path);assert.equal(hash(b),source.sha256);assert.equal(b.readUInt32BE(16),source.width);assert.equal(b.readUInt32BE(20),source.height);}
 for(const a of m.assets){const b=await readFile(a.backup);assert.equal(hash(b),a.sha256);assert.equal(b.readUInt32BE(16),a.width);assert.equal(b.readUInt32BE(20),a.height);await assert.rejects(stat(a.runtime),{code:'ENOENT'});}
});
