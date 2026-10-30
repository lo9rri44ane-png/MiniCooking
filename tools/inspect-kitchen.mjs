import {createRequire} from 'node:module';
import {chromium} from 'playwright';
const browser=await chromium.launch({...(process.env.PLAYWRIGHT_CHANNEL?{channel:process.env.PLAYWRIGHT_CHANNEL}:{}),headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
const page=await browser.newPage({viewport:{width:900,height:1440}});page.on('pageerror',e=>console.log('ERROR',e.message));page.on('console',m=>{if(m.type()==='error')console.log('CONSOLE',m.text())});
await page.goto('http://localhost:7456/');await page.waitForTimeout(6500);console.log(await page.evaluate(async()=>{const cc=await window.System.import('cc');return cc.director.getScene()?.getComponentsInChildren(cc.Label).map(l=>l.string)}));await page.screenshot({path:'docs/verification/kitchen-home.png'});await browser.close();
