import {readFile,writeFile,unlink}from'node:fs/promises';import {assertProject,callEditor}from'./editor.mjs';
await assertProject();const method=process.argv[2]||'query-tasks-info',args=JSON.parse(process.argv[3]||'[]');const saved='.checks/web-build-bridge.json';let bridge;
try{bridge=JSON.parse(await readFile(saved,'utf8'));}catch{
 await callEditor('project_refresh_assets',{folder:'db://assets/scripts/editor'});
 await callEditor('scene_open_scene',{scenePath:'db://assets/scene/main.scene'});
 const h=await callEditor('sceneAdvanced_execute_scene_script',{name:'cocos-mcp-server',method:'getSceneHierarchy',args:[]}),nodes=[];const walk=n=>{nodes.push(n);n.children?.forEach(walk);};h.data.data.forEach(walk);const canvas=nodes.find(n=>n.name==='Canvas');if(!canvas)throw Error('Open main scene');
 const made=await callEditor('node_create_node',{name:'__WebBuildAuthoring',parentUuid:canvas.uuid,nodeType:'2DNode'}),id=made.data?.uuid||made.data?.node?.uuid;
 await callEditor('component_attach_script',{nodeUuid:id,scriptPath:'db://assets/scripts/editor/KitchenPrefabAuthoring.ts'}).catch(()=>{});
 const list=await callEditor('component_get_components',{nodeUuid:id}),uuid=list.data.components.find(c=>c.type!=='cc.UITransform').properties.uuid.value;bridge={id,uuid};await writeFile(saved,JSON.stringify(bridge));
}
if(method==='cleanup'){await callEditor('node_delete_node',{uuid:bridge.id});await callEditor('scene_save_scene',{});await unlink(saved);console.log('bridge removed');}else console.log(JSON.stringify(await callEditor('sceneAdvanced_execute_component_method',{uuid:bridge.uuid,name:'webBuildRequest',args:[method,args]}),null,2));
