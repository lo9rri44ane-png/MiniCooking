import{prefabAssetPath}from'../assets/scripts/framework/cocos/PrefabPaths.ts';
import {readHistoricalFile as readFile} from './retired-art.mjs';
import {activeOrArchived} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
test('v7 UI and four board-light frames are reviewed, complete and match imported backups',async()=>{
 for(const group of ['ui','environment']){const base='art/breakfast/v7/manifests/',m=JSON.parse(await readFile(base+group+'-assets.json')),audit=JSON.parse(await readFile(base+group+'-audit.json'));assert.equal(m.assets.length,group==='ui'?8:4);for(const s of m.sources||[])assert.equal(sha(await readFile(s.path)),s.sha256);
  for(const a of m.assets){const bytes=await readFile(await activeOrArchived(a.runtime)),review=audit.assets.find(r=>r.key===a.key);assert.equal(sha(bytes),a.sha256);assert.deepEqual(bytes,await readFile(a.backup));assert.ok((await stat(await activeOrArchived(a.runtime+'.meta'))).size>0);assert.equal(review.reviewedSha256,a.sha256);assert.equal(review.visualReview,'complete');if(group==='ui'){assert.equal(a.edgeAlpha,0);assert.ok(a.minimumMargin>=3);}else{assert.equal(a.width,620);assert.equal(a.height,600);assert.ok(Math.hypot(a.originPeak.x-570,a.originPeak.y-48)<=1);}}
  if(group==='environment')assert.equal(new Set(m.assets.map(a=>a.sha256)).size,4,'sunlight must contain four distinct frames');
 }
});
test('pause and result templates retain authored cards with native sprites',async()=>{for(const id of ['PausePanel','FailResult','WinResult']){const data=JSON.parse(await readFile('assets/resources/'+prefabAssetPath(id)+'.prefab'));assert.ok(data.some(n=>n.__type__==='cc.Node'&&n._name==='DialogCard'));assert.ok(data.some(n=>n.__type__==='cc.Sprite'));}});
