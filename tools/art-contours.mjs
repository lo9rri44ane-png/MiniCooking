import{createRequire}from'node:module';
export const sharp=createRequire(import.meta.url)(process.env.ART_SHARP_MODULE||'sharp');
export async function components(source,threshold=32){
 const {data,info}=await sharp(source).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 const {width:w,height:h}=info,labels=new Int32Array(w*h),parts=[];let id=0;
 for(let start=0;start<labels.length;start++){
  if(labels[start]||data[start*4+3]<=threshold)continue;
  const queue=[start],part={id:++id,count:0,left:w,top:h,right:0,bottom:0};labels[start]=id;
  for(let head=0;head<queue.length;head++){
   const p=queue[head],x=p%w,y=Math.floor(p/w);part.count++;part.left=Math.min(part.left,x);part.right=Math.max(part.right,x);part.top=Math.min(part.top,y);part.bottom=Math.max(part.bottom,y);
   for(const n of [x?p-1:-1,x<w-1?p+1:-1,y?p-w:-1,y<h-1?p+w:-1])if(n>=0&&!labels[n]&&data[n*4+3]>threshold){labels[n]=id;queue.push(n);}
  }
  if(part.count>500)parts.push(part);
 }
 return {data,info,labels,parts:parts.sort((a,b)=>b.count-a.count)};
}
