import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
export async function callEditor(name,args={}){
 const response=await fetch('http://127.0.0.1:31388/mcp',{method:'POST',headers:{'content-type':'application/json'},signal:AbortSignal.timeout(45000),body:JSON.stringify({jsonrpc:'2.0',id:Date.now(),method:'tools/call',params:{name,arguments:args}})});
 const envelope=await response.json();if(envelope.error)throw Error(envelope.error.message);const data=JSON.parse(envelope.result.content[0].text);if(data.success===false)throw Error(name+': '+data.error);return data;
}
export async function assertProject(){const result=await callEditor('project_get_project_info');if(resolve(result.data.path)!==resolve(fileURLToPath(new URL('..',import.meta.url))))throw Error('编辑器不是目标工程，拒绝写入');return result;}
