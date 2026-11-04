import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {sharp,components} from './art-contours.mjs';
const source='art/demo2/source/chibi-v3/foods-atlas.png',dest='assets/resources/art/latest/demo2',backup='art/demo2/exports/previous-v2';
await fs.mkdir(backup,{recursive:true});await fs.mkdir('art/demo2/exports/chibi-v3',{recursive:true});
const parsed=await components(source,32),parts=parsed.parts.slice(0,8).sort((a,b)=>Math.floor((a.top+a.bottom)/2/(parsed.info.height/2))-Math.floor((b.top+b.bottom)/2/(parsed.info.height/2))||a.left-b.left);
if(parts.length!==8)throw Error('Expected eight separate complete foods');
const specs=[['lasagna-o4',512,512],['waffle-l3',512,512],['fish-i2h',512,256],['omelette-i2v',256,512],['bread-i2h',512,256],['tart-i1',256,256],['berry-i2h',512,256],['sushi-i1',256,256]],audit=[];
for(let i=0;i<specs.length;i++){
 const [name,w,h]=specs[i],p=parts[i],file=`${dest}/food-${name}.png`,left=Math.max(0,p.left-3),top=Math.max(0,p.top-3),width=Math.min(parsed.info.width-left,p.right-left+4),height=Math.min(parsed.info.height-top,p.bottom-top+4);
 if(p.left<2||p.top<2||p.right>=parsed.info.width-2||p.bottom>=parsed.info.height-2)throw Error('Source clipped '+name);
 try{await fs.copyFile(file,`${backup}/food-${name}.png`,fs.constants.COPYFILE_EXCL);}catch(e){if(e.code!=='EEXIST'&&e.code!=='ENOENT')throw e;}
 // Alpha connectivity removes detached generator flecks, never white subject pixels.
 const raw=Buffer.from(parsed.data);for(let pixel=0;pixel<parsed.labels.length;pixel++)if(parsed.labels[pixel]!==p.id)raw[pixel*4+3]=0;
 const trim=await sharp(raw,{raw:parsed.info}).extract({left,top,width,height}).png().toBuffer(),innerW=Math.round(w*.90),innerH=Math.round(h*.90);
 const fit=await sharp(trim).resize(innerW,innerH,{fit:'contain',background:'#00000000'}).png().toBuffer();
 const output=await sharp({create:{width:w,height:h,channels:4,background:'#00000000'}}).composite([{input:fit,left:Math.floor((w-innerW)/2),top:Math.floor((h-innerH)/2)}]).png().toBuffer();
 await fs.writeFile(file,output);await fs.writeFile(`art/demo2/exports/chibi-v3/food-${name}.png`,output);
 audit.push({resource:`art/latest/demo2/food-${name}`,sourceCrop:[left,top,width,height],size:[w,h],safeMargin:.05,sha256:createHash('sha256').update(output).digest('hex')});
}
const items=await Promise.all(audit.map(async(a,i)=>({input:await sharp('assets/resources/'+a.resource+'.png').resize(240,240,{fit:'contain',background:'#E1EAD8'}).png().toBuffer(),left:i%4*256+8,top:Math.floor(i/4)*256+8})));
await sharp({create:{width:1024,height:512,channels:4,background:'#E1EAD8'}}).composite(items).png().toFile('art/demo2/exports/chibi-v3/contact-sheet.png');
await fs.writeFile('art/demo2/manifest-chibi-v3.json',JSON.stringify({source,generatedWith:'built-in image_gen, transparent sprite atlas; sharp alpha connectivity exports',style:'Demo1 soft matte chibi; no photo texture',assets:audit},null,2));console.log('Exported eight complete chibi sprites; retained old exports');
