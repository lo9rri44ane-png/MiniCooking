import {sourceSignature} from './source-signature.mjs';
import {readdir,readFile,writeFile,access} from 'node:fs/promises';import {join} from 'node:path';
const pkg=JSON.parse(await readFile('package.json','utf8'));if(pkg.creator?.version!=='3.8.8')throw Error('引擎版本未锁定');
const pending=[];async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const path=join(dir,e.name);if(e.isDirectory())await walk(path);else if(!e.name.endsWith('.meta'))try{await access(path+'.meta');}catch{pending.push(path);}}}await walk('assets');
const skills=(await readdir('.agents/skills',{withFileTypes:true})).filter(e=>e.isDirectory()).length;
let previewVerified=false;for(const file of ['docs/verification/prefab-browser.json','docs/verification/tutorial-action-browser.json','docs/verification/tutorial-swipe-browser.json','docs/verification/restaurant-campaign-edge-browser.json','docs/verification/restaurant-campaign-browser.json','docs/verification/kitchen-ad-slot-browser.json','docs/verification/kitchen-props-browser.json','docs/verification/kitchen-order-badges.json','docs/verification/kitchen-browser.json','docs/verification/2d-browser.json'])try{const p=JSON.parse(await readFile(file,'utf8'));if(p.errors.length===0&&p.signature===await sourceSignature())previewVerified=true;}catch{}
const report={engine:pkg.creator.version,workflowSkills:skills,pendingEditorImports:pending,logicTests:'run npm test',typecheck:'run npm run typecheck',enginePreviewVerified:previewVerified,buildPerformed:false};await writeFile('docs/verification/readiness.json',JSON.stringify(report,null,2));console.log(JSON.stringify({engine:report.engine,workflowSkills:skills,pendingEditorImportCount:pending.length,enginePreviewVerified:previewVerified}));






