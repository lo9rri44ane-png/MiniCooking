import http from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('../build/web-mobile/',import.meta.url)));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp3':'audio/mpeg','.ogg':'audio/ogg','.wav':'audio/wav','.wasm':'application/wasm','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname==='/')pathname='/index.html';const path=resolve(root,'.'+pathname);if(!path.startsWith(root+sep)){res.writeHead(403).end();return;}const info=await stat(path);if(!info.isFile()){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':mime[extname(path)]||'application/octet-stream','Content-Length':info.size,'Cache-Control':'no-cache'});createReadStream(path).pipe(res);}catch{res.writeHead(404).end();}}).listen(8088,'0.0.0.0',()=>console.log('MiniCooking v18 build: http://localhost:8088/'));
