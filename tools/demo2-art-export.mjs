import fs from 'node:fs';
import {createRequire} from 'node:module';
const sharp=createRequire(import.meta.url)(process.env.ART_SHARP_MODULE || 'C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1026-487-0_26.1026.487.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/sharp');
const root='assets/resources/art/latest/demo2/';
const source='art/demo2/source/foods-chroma.png';
const specs=[['lasagna-o4',30,35,450,440,512,512],['waffle-l3',550,45,410,435,512,512],['fish-i2h',1025,130,485,270,512,256],['omelette-i2v',110,530,270,460,256,512],['bread-i2h',480,640,535,250,512,256],['tart-i1',1060,555,425,420,256,256]];
const assets=[];
for(const [n,left,top,width,height,w,h] of specs){const {data,info}=await sharp(source).extract({left,top,width,height}).ensureAlpha().raw().toBuffer({resolveWithObject:true});for(let p=0;p<data.length;p+=4)if(data[p+1]>160&&data[p+2]>160&&data[p]<120)data[p+3]=0;const trim=await sharp(data,{raw:info}).trim().png().toBuffer();await sharp(trim).resize({width:Math.round(w*.94),height:Math.round(h*.94),fit:'contain',background:'#00000000'}).extend({left:Math.floor(w*.03),right:w-Math.round(w*.94)-Math.floor(w*.03),top:Math.floor(h*.03),bottom:h-Math.round(h*.94)-Math.floor(h*.03),background:'#00000000'}).png().toFile(root+'food-'+n+'.png');assets.push({resource:'art/latest/demo2/food-'+n,size:[w,h],sourceCrop:[left,top,width,height],safeMargin:.03});}
fs.writeFileSync('art/demo2/manifest.json',JSON.stringify({version:2,source,generatedWith:'built-in imagegen, cyan alpha export sharp',assets,notes:'95% similarity target unmeasured. Whole sprites fit shape bounds. L notch upper right. Floors are optional deterministic 128px sage tiles.'},null,2));
