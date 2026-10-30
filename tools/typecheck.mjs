import {readAsarJSON} from './asar.mjs';
import {readFile,mkdir,writeFile,access} from 'node:fs/promises';import {join,dirname} from 'node:path';import {fileURLToPath} from 'node:url';import {spawnSync} from 'node:child_process';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const pkg=JSON.parse(await readFile(join(root,'package.json'),'utf8'));if(pkg.creator?.version!=='3.8.8')throw Error('工程必须锁定Creator3.8.8');
let local={};try{local=JSON.parse(await readFile(join(root,'config.local.json'),'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
const engine=process.env.COCOS_CREATOR_PATH||local.cocosCreatorPath;
const generated=join(root,'temp/declarations/cc.d.ts');let cc;
if(engine){const resources=engine.endsWith('.app')?join(engine,'Contents/Resources'):join(dirname(engine),'resources');const info=await readAsarJSON(join(resources,'app.asar'),'package.json');if(info.version!=='3.8.8'&&info.editor?.version!=='3.8.8')throw Error('指定引擎不是Creator3.8.8');const installed=join(resources,'resources/3d/engine/bin/.declarations/cc.d.ts');for(const candidate of [generated,installed])try{await access(candidate);cc=candidate;break;}catch{}}
else try{await access(generated);cc=generated;}catch{}
if(!cc)throw Error('未找到Creator3.8.8声明。先用Creator3.8.8打开工程完成导入；或设置COCOS_CREATOR_PATH为引擎可执行文件路径（macOS可填.app目录）。详见docs/换机与环境配置.md。');
const typescript=join(root,'node_modules/typescript/bin/tsc');await access(typescript);const output=join(root,'.checks');await mkdir(output,{recursive:true});
const files=[cc];try{const env=join(dirname(cc),'cc.env.d.ts');await access(env);files.push(env);}catch{}
const cfg={compilerOptions:{target:'ES2020',module:'ESNext',moduleResolution:'node',strict:true,experimentalDecorators:true,skipLibCheck:true,noEmit:true,lib:['ES2020','DOM'],types:[]},include:[join(root,'assets/scripts/**/*.ts'),...files]};const config=join(output,'tsconfig.json');await writeFile(config,JSON.stringify(cfg,null,2));const result=spawnSync(process.execPath,[typescript,'-p',config],{stdio:'inherit'});process.exitCode=result.status??1;
