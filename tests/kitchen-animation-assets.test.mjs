import {readHistoricalFile as readFile} from './retired-art.mjs';
import {activeOrArchived} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';
const hash=b=>createHash('sha256').update(b).digest('hex');
test('animation library covers all requested states with distinct authored fixed-canvas frames and audited backups',async()=>{
 const base='art/breakfast/v3',manifest=JSON.parse(await readFile(base+'/manifests/assets.json','utf8')),catalog=JSON.parse(await readFile(base+'/manifests/clips.json','utf8')),runtime=JSON.parse(await readFile(await activeOrArchived('assets/resources/art/breakfast-v3/animations/clips.json'),'utf8')),audit=JSON.parse(await readFile(base+'/manifests/animation-audit.json','utf8'));
 assert.deepEqual(catalog,runtime);assert.equal(audit.status,'complete');assert.equal(audit.blockers.length,0);
 const expected=['idle_empty','idle_small','idle_full','full','win',...['move','work'].flatMap(a=>['up','down','left','right'].map(d=>a+'_'+d))].map(k=>'hamster/'+k);
 expected.push(...['dog','rabbit','bear'].flatMap(s=>['appear','idle','celebrate','disappear'].map(a=>'customers/'+s+'/'+a)),'fx/smoke_appear','fx/smoke_disappear','environment/sunlight');assert.deepEqual(Object.keys(catalog.clips).sort(),expected.sort());
 for(const source of manifest.sources){const b=await readFile(source.path);assert.equal(hash(b),source.sha256);assert.equal(b.readUInt32BE(16),source.width);assert.equal(b.readUInt32BE(20),source.height);}
 for(const [key,clip]of Object.entries(catalog.clips)){
  assert.ok(clip.frames.length>=2);if(key==='environment/sunlight')assert.ok(clip.frames.length<=5);
  const entries=clip.frames.map(path=>manifest.assets.find(a=>a.runtime==='assets/resources/'+path+'.png'));assert.ok(entries.every(Boolean),key+' missing frame');assert.ok(new Set(entries.map(a=>a.sha256)).size>=2,key+' consists only of duplicated stills');
  assert.equal(new Set(entries.map(a=>a.width+'x'+a.height)).size,1,key+' frame canvases vary');
 }
 assert.equal(manifest.assets.filter(a=>a.clip).length,112);
 for(const a of manifest.assets){
  const b=await readFile(a.backup),r=await readFile(await activeOrArchived(a.runtime));assert.equal(hash(b),a.sha256);assert.deepEqual(b,r);assert.ok((await stat(await activeOrArchived(a.runtime+'.meta'))).size>0);
  const review=audit.assets.find(x=>x.key===a.key);assert.ok(review);assert.equal(review.sha256,a.sha256,'stale audit '+a.key);assert.equal(review.visualReview,'complete',a.key);
  if(a.fullBleed){assert.ok(a.key==='backgrounds/kitchen'||a.key.startsWith('environment/sunlight/'),'invalid silhouette exception');}else{assert.ok(review.minimumExportMargin>=3,a.key+' margin');assert.ok(review.sourceMargin>=3,a.key+' source clearance');}
 }
});
