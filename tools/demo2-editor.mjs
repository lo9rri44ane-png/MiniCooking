import{assertProject,callEditor}from'./editor.mjs';import{readFile,writeFile,mkdir}from'node:fs/promises';
await assertProject();await callEditor('project_refresh_assets',{folder:'db://assets'});await callEditor('scene_open_scene',{scenePath:'db://assets/scene/main.scene'});
const hierarchy=await callEditor('sceneAdvanced_execute_scene_script',{name:'cocos-mcp-server',method:'getSceneHierarchy',args:[]}),all=[];function walk(n){all.push(n);n.children?.forEach(walk);}hierarchy.data.data.forEach(walk);const canvas=all.find(n=>n.name==='Canvas');if(!canvas)throw Error('main.scene Canvas missing');
let bridge=all.find(n=>n.name==='__Demo2Authoring');if(!bridge){const created=await callEditor('node_create_node',{name:'__Demo2Authoring',parentUuid:canvas.uuid,nodeType:'2DNode'});bridge={uuid:created.data?.uuid||created.data?.node?.uuid};await callEditor('component_attach_script',{nodeUuid:bridge.uuid,scriptPath:'db://assets/scripts/editor/KitchenPrefabAuthoring.ts'}).catch(()=>{});}
const cs=await callEditor('component_get_components',{nodeUuid:bridge.uuid}),comp=cs.data.components.find(c=>c.type!=='cc.UITransform');const execute=(name,args)=>callEditor('sceneAdvanced_execute_component_method',{uuid:comp.properties.uuid.value,name,args});
try{
 if(process.argv[2]==='generate'){
  await mkdir('assets/resources/prefabs/demo2',{recursive:true});await callEditor('project_refresh_assets',{folder:'db://assets/resources/prefabs'});
  const cell=88,children=[];for(let y=0;y<6;y++)for(let x=0;x<6;x++)children.push({name:`Demo2Cell-${x}-${y}`,x:(x-2.5)*cell,y:(2.5-y)*cell,w:86,h:86,fill:(x+y)%2?'#E7E3CC':'#DAE6C5',radius:7});
  const specs=[{id:'Demo2SelectPage',tree:{name:'Demo2SelectPage',w:720,h:1280}},{id:'Demo2PlayPage',tree:{name:'Demo2PlayPage',w:720,h:1280,children:[{name:'Demo2Board',x:0,y:-35,w:528,h:528}]}},{id:'Demo2Board',tree:{name:'Demo2Board',w:528,h:528,children}},...['Demo2Block','Demo2Food','Demo2Exit','Demo2OrderIcon','Demo2Washer'].map(id=>({id,tree:{name:id,w:id==='Demo2Washer'?360:88,h:id==='Demo2Washer'?120:88}}))];
  const r=await execute('generate',[specs]);if(r.data?.result?.length!==specs.length)throw Error(JSON.stringify(r));console.log('Native Demo2 prefabs generated',r.data.result.length);
 }
}finally{await callEditor('node_delete_node',{uuid:bridge.uuid});await callEditor('scene_save_scene',{});}
