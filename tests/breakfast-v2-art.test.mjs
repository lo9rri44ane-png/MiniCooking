import {readHistoricalFile as readFile} from './retired-art.mjs';
import {activeOrArchived} from './retired-art.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFile as unusedNativeReadFile,stat}from'node:fs/promises';import{createHash}from'node:crypto';import{CAMPAIGN_LEVELS}from'../assets/scripts/features/kitchen/CampaignData.ts';import{BREAKFAST_ART_PATHS}from'../assets/scripts/features/kitchen/BreakfastArtCatalog.ts';
test('v2 every first-shop sprite has complete-silhouette audit, safety padding and matching classified backups',async()=>{
 const manifest=JSON.parse(await readFile('art/breakfast/v2/manifests/assets.json','utf8'));
 const audit=JSON.parse(await readFile('art/breakfast/v2/manifests/crop-audit-v2.json','utf8'));
 assert.ok(manifest.sources.length>=5);
 for(const source of manifest.sources){const b=await readFile(source.path);assert.equal(createHash('sha256').update(b).digest('hex'),source.sha256);assert.equal(b.readUInt32BE(16),source.width);assert.equal(b.readUInt32BE(20),source.height);}
 const required=new Set(CAMPAIGN_LEVELS.filter(l=>l.restaurantId==='breakfast').flatMap(l=>[...l.items.map(i=>'ingredients/'+i.type),...l.devices.map(d=>'devices/'+d.type),...l.recipes.map(r=>'dishes/'+r.id)]));
 for(const key of required)assert.ok(BREAKFAST_ART_PATHS.includes(key),'catalog missing '+key);
 assert.deepEqual([...manifest.assets.map(a=>a.key)].sort(),[...BREAKFAST_ART_PATHS].sort());
 for(const a of manifest.assets){
  const b=await readFile(a.backup),r=await readFile(await activeOrArchived(a.runtime));assert.equal(createHash('sha256').update(b).digest('hex'),a.sha256);assert.deepEqual(b,r);assert.equal(b.readUInt32BE(16),a.width);assert.equal(b.readUInt32BE(20),a.height);assert.ok((await stat(await activeOrArchived(a.runtime+'.meta'))).size>0);
  assert.ok(a.backup.startsWith('art/breakfast/v2/exports/'));assert.ok(a.runtime.startsWith('assets/resources/art/breakfast-v2/'));
  if(a.kind!=='full-bleed-background'){assert.ok(a.sourceBounds.padding>=12);const row=audit.assets.find(x=>x.key===a.key);assert.ok(row,'missing audit '+a.key);assert.equal(row.visualReview,'complete',a.key+' silhouette has not passed visual review');assert.equal(row.reviewedSha256,a.sha256,'stale visual review '+a.key);assert.ok(row.minimumExportMargin>=3,a.key+' transparent margin');assert.ok(row.lowAlphaPixelCount>0,a.key+' loses all feathered low-alpha edges');}
 }
});
