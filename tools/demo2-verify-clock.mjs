import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({channel:'msedge',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
const page=await browser.newPage({viewport:{width:900,height:1440}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.clock.install();
async function view(){return page.evaluate(async()=>{if(!window.System)return{labels:[]};const c=await System.import('cc'),s=c.director.getScene();return{labels:s?.getComponentsInChildren(c.Label).filter(l=>l.node.activeInHierarchy).map(l=>l.string)||[],clock:s?.getComponentsInChildren(c.Label).find(l=>l.node.name==='Demo2TimeRemaining')?.string};});}
async function wait(fn){for(let i=0;i<600;i++){const s=await view();if(fn(s))return s;await page.waitForTimeout(100);}throw Error('timeout '+JSON.stringify(await view()));}
async function click(title,name){await page.evaluate(async({title,name})=>{const c=await System.import('cc'),b=c.director.getScene().getComponentsInChildren(c.Button).reverse().find(b=>b.node.activeInHierarchy&&(name?b.node.name===name:b.node.getComponentInChildren(c.Label)?.string===title));if(!b)throw Error('missing '+title+' '+name);b.node.emit(c.Button.EventType.CLICK);},{title,name});}
try{
 await page.goto('http://127.0.0.1:7456',{waitUntil:'domcontentloaded'});await wait(s=>s.labels.includes('Demo2 · 装盘试玩'));await click('Demo2 · 装盘试玩');await wait(s=>s.labels.includes('Demo2 · 装盘出餐'));const title=(await view()).labels.find(s=>s.startsWith('第1关 ·'));await click(title);await wait(s=>s.clock?.startsWith('剩余 '));
 await click(null,'Demo2PauseButton');await wait(s=>s.labels.includes('休息一下'));const paused=(await view()).clock;await page.clock.fastForward(60000);assert.equal((await view()).clock,paused,'pause freezes sixty seconds');
 await click('继续试玩');await page.clock.fastForward(2000);assert.notEqual((await view()).clock,paused,'resume consumes time');
 await page.clock.fastForward(301000);await wait(s=>s.labels.includes('时间到啦！'));await page.clock.fastForward(1000);assert.equal((await view()).labels.filter(s=>s==='时间到啦！').length,1);
 await mkdir('docs/verification/demo2/expansion',{recursive:true});await page.clock.resume();await page.screenshot({path:'docs/verification/demo2/expansion/time-expired.png'});
 await click('重试本关');const restarted=await wait(s=>s.clock?.startsWith('剩余 4:59')||s.clock==='05:00'||s.clock?.startsWith('剩余 5:00'));assert.ok(restarted.clock);assert.deepEqual(errors,[]);
 await writeFile('docs/verification/demo2/expansion/clock-report.json',JSON.stringify({pauseSixtySeconds:true,resumeConsumesTime:true,expirySingleModal:true,retryResetsTime:true,isolatedBrowser:true,errors},null,2));console.log('PASS real UI countdown: pause, resume, expiry once, retry reset');
}finally{await browser.close();}
