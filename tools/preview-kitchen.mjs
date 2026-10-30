import {sourceSignature} from './source-signature.mjs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';import {writeFile} from 'node:fs/promises';
import {LEVELS} from '../assets/scripts/features/kitchen/Levels.ts';
import {initialState,move,DIRECTIONS,stateKey} from '../assets/scripts/features/kitchen/Rules.ts';
import {chromium} from 'playwright';
const browser=await chromium.launch({...(process.env.PLAYWRIGHT_CHANNEL?{channel:process.env.PLAYWRIGHT_CHANNEL}:{}),headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
const errors=[],checks=[];
try{
const page=await browser.newPage({viewport:{width:900,height:1440}});page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
await page.goto('http://localhost:7456/');await page.waitForTimeout(5000);
const labels=()=>page.evaluate(async()=>{const cc=await window.System.import('cc');return cc.director.getScene().getComponentsInChildren(cc.Label).map(l=>l.string);});
const point=async(name,nth=0)=>page.evaluate(async({name,nth})=>{const cc=await window.System.import('cc'),nodes=cc.director.getScene().getComponentsInChildren(cc.Button).filter(b=>b.node.getComponentInChildren(cc.Label)?.string===name),node=nodes[nth]?.node;if(!node)throw Error('missing '+name+' '+nth);const c=document.querySelector('#GameCanvas'),r=c.getBoundingClientRect(),cam=cc.director.getScene().getChildByName('Canvas').getComponent(cc.Canvas).cameraComponent,p=cam.worldToScreen(node.worldPosition);return{x:r.x+p.x*r.width/c.width,y:r.y+(c.height-p.y)*r.height/c.height};},{name,nth});
const click=async(name,nth=0)=>{const p=await point(name,nth);await page.mouse.click(p.x,p.y);await page.waitForTimeout(160);};
const key={up:'ArrowUp',down:'ArrowDown',left:'ArrowLeft',right:'ArrowRight'},arrow={up:'↑',down:'↓',left:'←',right:'→'};
await page.screenshot({path:'docs/verification/kitchen-home.png'});await click('开始试玩 · 选择关卡');await page.screenshot({path:'docs/verification/kitchen-select.png'});
for(let i=0;i<6;i++){
 await click('开工',i);await page.waitForTimeout(150);assert.ok((await labels()).includes(`0${i+1}  ${LEVELS[i].name}`));
 if(i===0){await click('暂停');assert.ok((await labels()).includes('休息一下'));await page.keyboard.press('ArrowRight');await click('继续开工');await click('菜谱');assert.ok((await labels()).includes('本关订单与菜谱'));await click('关闭');checks.push('pause-and-recipes');}
 if(i===4){await page.screenshot({path:'docs/verification/kitchen-level-5.png'});}
 if(i===5){await page.screenshot({path:'docs/verification/kitchen-level-6.png'});}
 for(let j=0;j<LEVELS[i].solution.length;j++){
  const d=LEVELS[i].solution[j];
  if(i===0&&j===0){const pos=await page.evaluate(async()=>{const cc=await window.System.import('cc'),scene=cc.director.getScene(),b=scene.getChildByName('Canvas').getChildByName('SafeArea').getChildByName('Pages').getChildByName('KitchenGame').getChildByName('Board'),cam=scene.getChildByName('Canvas').getComponent(cc.Canvas).cameraComponent,c=document.querySelector('#GameCanvas'),r=c.getBoundingClientRect(),p=cam.worldToScreen(b.worldPosition);return{x:r.x+p.x*r.width/c.width,y:r.y+(c.height-p.y)*r.height/c.height};});await page.mouse.move(pos.x-80,pos.y);await page.mouse.down();await page.mouse.move(pos.x+80,pos.y,{steps:6});await page.mouse.up();}
  else if(i===1)await click(arrow[d]);else await page.keyboard.press(key[d]);
  await page.waitForTimeout(1150);
 }
 const result=await labels();assert.ok(result.includes('下班啦！'),`level ${i+1}: ${result.join('|')}`);assert.ok(result.some(t=>t.includes(`本次 ${LEVELS[i].optimal}步`)));checks.push(`level-${i+1}-physical-input-win`);console.log('won',i+1);if(i===5)await page.screenshot({path:'docs/verification/kitchen-win.png'});await click('返回选关');
}
function failurePath(l,status){const q=[{s:initialState(l),path:[]}],seen=new Set();for(let h=0;h<q.length&&h<30000;h++)for(const d of DIRECTIONS){const r=move(l,q[h].s,d).state,p=[...q[h].path,d];if(r.status===status)return p;if(r.status!=='playing'||r.steps===q[h].s.steps)continue;const k=stateKey(r)+r.steps;if(!seen.has(k)){seen.add(k);q.push({s:r,path:p});}}throw Error('no failure path '+status);}
for(const [index,status,title]of [[0,'steps','步数用完啦'],[5,'full','背包满啦']]){
 await click('开工',index);for(const d of failurePath(LEVELS[index],status)){await page.keyboard.press(key[d]);await page.waitForTimeout(1150);}assert.ok((await labels()).includes(title));checks.push(status+'-failure');await page.screenshot({path:`docs/verification/kitchen-fail-${status}.png`});await click('重新开工');assert.ok((await labels()).includes(`剩余 ${LEVELS[index].budget} / ${LEVELS[index].budget} 步`));await click('选关');
}
// Page-lifecycle check: one key must be one step after repeated route changes.
await click('开工',0);await click('选关');await click('开工',0);await page.keyboard.press('ArrowRight');await page.waitForTimeout(700);assert.ok((await labels()).includes('剩余 4 / 5 步'));checks.push('route-listener-cleanup');await click('选关');await click('返回首页');assert.ok((await labels()).includes('小小厨房，下班啦！'));
assert.deepEqual(errors,[]);await writeFile('docs/verification/kitchen-browser.json',JSON.stringify({verifiedAt:new Date().toISOString(),signature:await sourceSignature(),preview:'http://localhost:7456/',checks,errors,levels:LEVELS.map(l=>({id:l.id,minimum:l.optimal,budget:l.budget}))},null,2));console.log(JSON.stringify({checks,errors}));
}finally{await browser.close();}

