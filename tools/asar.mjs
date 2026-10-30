import {open,readFile} from 'node:fs/promises';
export async function readAsarJSON(archive,path){
 const handle=await open(archive,'r');
 try{
  const prefix=Buffer.alloc(16);await handle.read(prefix,0,16,0);
  const headerSize=prefix.readUInt32LE(4),jsonSize=prefix.readUInt32LE(12);
  if(headerSize>50_000_000||jsonSize>headerSize)throw Error('invalid archive header');
  const buffer=Buffer.alloc(jsonSize);await handle.read(buffer,0,jsonSize,16);
  let node=JSON.parse(buffer.toString());for(const part of path.split('/'))node=node.files[part];
  const content=Buffer.alloc(node.size);await handle.read(content,0,node.size,8+headerSize+Number(node.offset));return JSON.parse(content.toString());
 }finally{await handle.close();}
}
