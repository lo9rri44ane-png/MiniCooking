import fs from 'node:fs/promises';import {createHash} from 'node:crypto';
import {sharp,components} from './art-contours.mjs';
const root='assets/resources/art/latest/demo2',out='art/demo2/exports/chibi-v4',old='art/demo2/exports/previous-v3';
await fs.mkdir(out,{recursive:true});await fs.mkdir(old,{recursive:true});
const specs=[['fish','food-fish-i2h',512,256],['bread','food-bread-i2h',512,256],['berry','food-berry-i2h',512,256],['omelette','food-omelette-i2v',256,512],['waffle','food-waffle-l3',512,512],['bubble-double','order-bubble-double',768,384],['bubble-single','order-bubble-single',512,512]];
const audit=[];
for(const [sourceKey,key,w,h] of specs){
 const source=`art/demo2/source/chibi-v4/${sourceKey}.png`,c=await components(source,32),p=c.parts[0];if(!p)throw Error('Empty sprite '+key);
 if(p.left<2||p.top<2||p.right>c.info.width-3||p.bottom>c.info.height-3)throw Error('Source touches edge '+key);
 const raw=Buffer.from(c.data);for(let i=0;i<c.labels.length;i++)if(c.labels[i]!==p.id)raw[i*4+3]=0;
 const sourceCrop=[p.left,p.top,p.right-p.left+1,p.bottom-p.top+1],trim=await sharp(raw,{raw:c.info}).extract({left:sourceCrop[0],top:sourceCrop[1],width:sourceCrop[2],height:sourceCrop[3]}).png().toBuffer();
 const inset=sourceKey==='waffle'?.90:.94,scale=Math.min(w*inset/sourceCrop[2],h*inset/sourceCrop[3]),rw=Math.round(sourceCrop[2]*scale),rh=Math.round(sourceCrop[3]*scale),resized=await sharp(trim).resize(rw,rh).ensureAlpha().raw().toBuffer();
 let left=Math.floor((w-rw)/2),top=Math.floor((h-rh)/2);
 if(sourceKey==='waffle'){
  // Translate the complete artwork into its L footprint; never mask/cut the missing cell.
  const candidates=[];for(let dx=-16;dx<=16;dx++)for(let dy=-16;dy<=16;dy++){
   const x0=left+dx,y0=top+dy;if(Math.min(x0,y0,w-x0-rw,h-y0-rh)<Math.floor(w*.03))continue;
   let overflow=false;for(let y=0;y<rh&&!overflow;y++)for(let x=0;x<rw;x++)if(x+x0>=w/2&&y+y0<h/2&&resized[(y*rw+x)*4+3]>0){overflow=true;break;}
   if(!overflow)candidates.push({left:x0,top:y0,d:dx*dx+dy*dy});
  }
  candidates.sort((a,b)=>a.d-b.d);if(!candidates.length)throw Error('L sprite still crosses empty quadrant; regenerate');({left,top}=candidates[0]);
 }
 const input=await sharp(resized,{raw:{width:rw,height:rh,channels:4}}).png().toBuffer(),png=await sharp({create:{width:w,height:h,channels:4,background:'#00000000'}}).composite([{input,left,top}]).png().toBuffer();
 try{await fs.copyFile(`${root}/${key}.png`,`${old}/${key}.png`,fs.constants.COPYFILE_EXCL);}catch(e){if(!['ENOENT','EEXIST'].includes(e.code))throw e;}
 await fs.writeFile(`${root}/${key}.png`,png);await fs.writeFile(`${out}/${key}.png`,png);
 audit.push({resource:`art/latest/demo2/${key}`,source,sourceCrop,size:[w,h],visibleBounds:[left,top,rw,rh],fill:[rw/w,rh/h],safeMargin:.03,emptyLQuadrant:sourceKey==='waffle'?true:undefined,sha256:createHash('sha256').update(png).digest('hex')});
}
const file='art/demo2/manifest.json',m=JSON.parse(await fs.readFile(file,'utf8'));try{await fs.copyFile(file,`${old}/manifest.json`,fs.constants.COPYFILE_EXCL);}catch(e){if(e.code!=='EEXIST')throw e;}
m.version=4;m.generatedWith='built-in image_gen; v3 retained sprites plus v4 individual regenerated sprites, alpha-connected proportional exports';for(const a of audit){m.assets=m.assets.filter(old=>old.resource!==a.resource);m.assets.push(a);}m.notes='Individual chibi food generation; tight proportional fit; L artwork translated intact inside occupied cells; dedicated single/double-order bubbles';await fs.writeFile(file,JSON.stringify(m,null,2));
await fs.writeFile(`${out}/audit.json`,JSON.stringify(audit,null,2));
const foods=['lasagna-o4','waffle-l3','fish-i2h','omelette-i2v','bread-i2h','tart-i1','berry-i2h','sushi-i1'];
for(const [tone,bg]of[['dark','#28303C'],['light','#F8EDD6']]){
 const inputs=[];for(const [i,name]of foods.entries())inputs.push({input:await sharp(`${root}/food-${name}.png`).resize(240,240,{fit:'contain',background:bg}).png().toBuffer(),left:i%4*256+8,top:Math.floor(i/4)*256+8});
 await sharp({create:{width:1024,height:512,channels:4,background:bg}}).composite(inputs).png().toFile(`${out}/check-${tone}.png`);
}
await fs.copyFile(`${out}/check-light.png`,'art/demo2/contact-sheet.png');console.log('Exported tight food sprites and balanced bubbles',audit.map(a=>[a.resource,a.fill,a.emptyLQuadrant]));
