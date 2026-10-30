import {readFile,writeFile} from 'node:fs/promises';import {callEditor,assertProject}from './editor.mjs';
await assertProject();const roots=JSON.parse(await readFile('tools/prefabs/approved-layouts.json','utf8')),all=[];const walk=n=>{all.push(n);n.children?.forEach(walk);};roots.forEach(walk);
const find=name=>all.find(n=>n.name===name),prefix=p=>all.find(n=>n.name.startsWith(p));
const empty=(name,w=100,h=100)=>({name,w,h,children:[]});
const specs=[];function add(id,tree){tree=structuredClone(tree||empty(id));tree.name=id;tree.x=0;tree.y=0;specs.push({id,tree});}
for(const [id,name]of Object.entries({HomePage:'KitchenHome',RestaurantsPage:'Restaurants',LevelSelectPage:'CampaignSelect',KitchenPage:'KitchenGame',SettingsPage:'Page'}))add(id,find(name)||find(id));
add('DiagnosticsPage',find('DiagnosticsPage')||empty('DiagnosticsPage',720,1280));
for(const [id,p]of Object.entries({PrimaryButton:'Action-',FrameworkButton:'Button-',CustomerOrderCard:'CustomerSlot-',IngredientTile:'Ingredient-',RequiredDevice:'RequiredDevice-',DeviceTile:'Device-',BoardCell:'Cell-',Wall:'Wall',Station:'Station',BagSlot:'BagSlot',AdBagSlot:'AdBagSlot-',Chef:'Chef',ChefBody:'ChefBody',ChefHalo:'ChefHalo',RestaurantCard:'Restaurant-',LevelCard:'CampaignLevel-',GuideDock:'GuideDock',GuideFocus:'GuideFocus-',GuideTarget:'GuideTarget',RecipeCard:'RecipeCard-',IngredientChip:'OrderIngredient-'}))add(id,prefix(p));
for(const id of ['Board','HUD','Effects','TutorialOverlay','EnergyWidget','Container','Panel','TextLabel','Toast','Popup','ChoicePanel','WinResult','FailResult','PausePanel','RecipePanel','LoadingState','EmptyState','ErrorState']){let tree=id==='TextLabel'?find('Label'):['Board','HUD','Effects','TutorialOverlay'].includes(id)?find(id):id==='EnergyWidget'?find('Action-'):id==='RecipePanel'?find('RecipePanel'):id==='RecipeCard'?prefix('RecipeCard-'):id==='WinResult'?all.find(n=>n.name==='Modal'&&n.children?.some(c=>c.label?.text==='下班啦！')):id==='PausePanel'?all.find(n=>n.name==='Modal'&&n.children?.some(c=>c.label?.text==='休息一下')):undefined;if(!tree&&id!=='Container')tree={name:id,w:id.includes('Result')?720:600,h:id.includes('Result')?1280:120,fill:'#FFFCF3',children:[]};add(id,tree);}
// Runtime population owns board/HUD contents, never a snapshot of a particular level.
for(const s of specs)if(s.id==='KitchenPage')s.tree.children=s.tree.children.filter(c=>['Background','HUD','Board','Effects'].includes(c.name)).map(c=>({...c,children:[]}));
await writeFile('tools/prefabs/catalog.json',JSON.stringify(specs,null,2));
await callEditor('project_refresh_assets',{}).catch(()=>{});
const hierarchy=await callEditor('sceneAdvanced_execute_scene_script',{name:'cocos-mcp-server',method:'getSceneHierarchy',args:[]});const nodes=[];const visit=n=>{nodes.push(n);n.children?.forEach(visit);};hierarchy.data.data.forEach(visit);const canvas=nodes.find(n=>n.name==='Canvas');if(!canvas)throw Error('请先在当前Creator打开main.scene，再执行原生生成。');
let helper=nodes.find(n=>n.name==='__PrefabAuthoring_Temporary');if(!helper){const created=await callEditor('node_create_node',{name:'__PrefabAuthoring_Temporary',parentUuid:canvas.uuid,nodeType:'2DNode'});helper={uuid:created.data?.uuid||created.data?.node?.uuid};if(!helper.uuid)throw Error(JSON.stringify(created));await callEditor('component_add_component',{nodeUuid:helper.uuid,componentType:'d884cIkHN5DiZUl/7OitTYt'}).catch(()=>{});}
const c=await callEditor('component_get_components',{nodeUuid:helper.uuid});const x=c.data.components.find(c=>c.type!=='cc.UITransform');if(!x)throw Error('生成组件未就绪');
for(const s of specs){if(['Board','HUD','Effects','TutorialOverlay'].includes(s.id))s.tree.children=[];const clean=n=>{if(n.name==='ChefHalo'||n.name.startsWith('GuideFocus-')||n.name==='GuideTarget'||n.name==='GuideSwipeOutline'){delete n.fill;delete n.opacity;}n.children?.forEach(clean);};clean(s.tree);}
const label=(text,x,y,w=580,h=60,size=24)=>({name:'Label',x,y,w,h,label:{text,size,line:size+6,color:'#39382F',align:1},children:[]});
const button=(title,y)=>({name:'Action-'+title,x:0,y,w:380,h:64,fill:'#297D64',button:true,children:[label(title,0,0,360,58,22)]});
for(const s of specs){
 if(['LoadingState','EmptyState','ErrorState'].includes(s.id)){s.tree.w=600;s.tree.h=180;s.tree.children=[label({LoadingState:'正在准备厨房…',EmptyState:'暂时没有内容',ErrorState:'操作未完成，请检查后重试'}[s.id],0,0,560,120)];}
 if(s.id==='FailResult'){s.tree.w=720;s.tree.h=1280;s.tree.block=true;s.tree.children=[label('步数用完啦',0,170,620,85,40),label('订单还没完成。本局已扣1体力。',0,35,610,150),button('重新开工',-105),button('返回选关',-285)];}
 if(s.id==='ChoicePanel'||s.id==='Popup'){s.tree.w=720;s.tree.h=1280;s.tree.block=true;s.tree.children=[label('操作提示',0,440,650,70,34),label('请根据提示选择下一步',0,342,640,110,22),button('关闭',-190)];}
 if(s.id==='AdBagSlot'){s.tree.w=76;s.tree.h=65;s.tree.fill='#A8997F';s.tree.button=true;s.tree.children=[label('广告\n+1格',0,0,69,61,22)];}
 if(s.id==='Wall'){s.tree.w=100;s.tree.h=100;s.tree.fill='#938771';s.tree.children=[label('障碍',0,0,92,92,16)];}
 if(s.id==='GuideFocus'||s.id==='GuideTarget'||s.id==='ChefHalo'){delete s.tree.fill;s.tree.stroke={width:5,color:'#FFC930'};s.tree.children=[];}
}
await writeFile('tools/prefabs/catalog.json',JSON.stringify(specs,null,2));
for(const s of specs)s.tree.children?.sort((a,b)=>a.name==='Background'?-1:b.name==='Background'?1:0);
await writeFile('tools/prefabs/catalog.json',JSON.stringify(specs,null,2));
const result=await callEditor('sceneAdvanced_execute_component_method',{uuid:x.properties.uuid.value,name:'generate',args:[specs]});if(!Array.isArray(result.data?.result)||result.data.result.length!==specs.length)throw Error('原生序列化没有完整返回，停止保存场景');console.log(JSON.stringify({generated:result.data.result.length}));await callEditor('node_delete_node',{uuid:helper.uuid});await callEditor('scene_save_scene',{});
