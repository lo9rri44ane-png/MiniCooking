import {test}from'node:test';import assert from'node:assert/strict';import{readdir,readFile}from'node:fs/promises';
const directory=new URL('../assets/resources/prefabs/',import.meta.url);
test('45 native UI prefabs have imported identities and valid internal object references',async()=>{
 const files=(await readdir(directory)).filter(f=>f.endsWith('.prefab'));assert.equal(files.length,45);const ids=new Set();
 for(const f of files){const objects=JSON.parse(await readFile(new URL(f,directory),'utf8')),meta=JSON.parse(await readFile(new URL(f+'.meta',directory),'utf8'));assert.equal(objects[0].__type__,'cc.Prefab');assert.ok(meta.uuid);assert.ok(!ids.has(meta.uuid));ids.add(meta.uuid);assert.equal(objects[objects[0].data.__id__].__type__,'cc.Node');
 const visit=v=>{if(!v||typeof v!=='object')return;if('__id__'in v)assert.ok(Number.isInteger(v.__id__)&&v.__id__>=0&&v.__id__<objects.length,f+' broken reference');for(const x of Object.values(v))visit(x);};objects.forEach(visit);
 }
});
test('pages and user-facing cards/results contain authored visual children',async()=>{
 for(const id of ['HomePage','RestaurantsPage','LevelSelectPage','KitchenPage','SettingsPage','DiagnosticsPage','CustomerOrderCard','RecipePanel','RecipeCard','Chef','PrimaryButton','WinResult','FailResult','PausePanel','LoadingState','EmptyState','ErrorState']){const data=JSON.parse(await readFile(new URL(id+'.prefab',directory),'utf8'));assert.ok(data.filter(o=>o.__type__==='cc.Node').length>1,id+' is an empty shell');}
});
