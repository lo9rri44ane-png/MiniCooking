import{prefabAssetPath}from'../assets/scripts/framework/cocos/PrefabPaths.ts';
import {test}from'node:test';import assert from'node:assert/strict';import{readdir,readFile}from'node:fs/promises';
const directory=new URL('../assets/resources/prefabs/',import.meta.url);
test('active native UI and actor prefabs have imported identities and valid internal object references',async()=>{
 const files=(await readdir(directory,{recursive:true})).filter(f=>f.endsWith('.prefab'));const source=await readFile(new URL('../assets/scripts/framework/cocos/PrefabFactory.ts',import.meta.url),'utf8'),expected=source.match(/PREFAB_IDS=\[([^\]]+)\]/)[1].match(/'[^']+'/g).map(x=>x.slice(1,-1));assert.deepEqual(files.map(x=>x.replaceAll('\\','/').split('/').at(-1).replace('.prefab','')).sort(),expected.sort());const ids=new Set();
 for(const f of files){const objects=JSON.parse(await readFile(new URL(f,directory),'utf8')),meta=JSON.parse(await readFile(new URL(f+'.meta',directory),'utf8'));assert.equal(objects[0].__type__,'cc.Prefab');assert.ok(meta.uuid);assert.ok(!ids.has(meta.uuid));ids.add(meta.uuid);assert.equal(objects[objects[0].data.__id__].__type__,'cc.Node');
 const visit=v=>{if(!v||typeof v!=='object')return;if('__id__'in v)assert.ok(Number.isInteger(v.__id__)&&v.__id__>=0&&v.__id__<objects.length,f+' broken reference');for(const x of Object.values(v))visit(x);};objects.forEach(visit);
 }
});
test('pages and user-facing cards/results contain authored visual children',async()=>{
 for(const id of ['HomePage','RestaurantsPage','LevelSelectPage','KitchenPage','SettingsPage','DiagnosticsPage','CustomerOrderCard','RecipePanel','RecipeCard','Chef','PrimaryButton','WinResult','FailResult','PausePanel']){const data=JSON.parse(await readFile(new URL('../assets/resources/'+prefabAssetPath(id)+'.prefab',import.meta.url),'utf8'));assert.ok(data.filter(o=>o.__type__==='cc.Node').length>1,id+' is an empty shell');}
});

test('actor templates serialize editable default frame sequences and common images',async()=>{for(const id of ['ChefBody','CustomerActor','CartoonSmoke']){const d=JSON.parse(await readFile(new URL('../assets/resources/'+prefabAssetPath(id)+'.prefab',import.meta.url),'utf8'));assert.ok(d.some(x=>Array.isArray(x.defaultFrames)&&x.defaultFrames.length===(id==='CartoonSmoke'?4:12)),id+' default clip missing');assert.ok(d.some(x=>x.__type__==='cc.Sprite'),id+' preview missing');}for(const id of ['IngredientTile','DeviceTile','OrderBubble','SunlightOverlay']){const d=JSON.parse(await readFile(new URL('../assets/resources/'+prefabAssetPath(id)+'.prefab',import.meta.url),'utf8'));assert.ok(d.some(x=>x.__type__==='cc.Sprite'),id+' skin preview missing');}});
