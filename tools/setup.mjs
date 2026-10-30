import {spawnSync} from 'node:child_process';import {fileURLToPath} from 'node:url';import {dirname,join} from 'node:path';
const root=dirname(dirname(fileURLToPath(import.meta.url)));if(Number(process.versions.node.split('.')[0])<22)throw Error('请安装Node.js22或更高版本，然后重试npm run setup');
const py=spawnSync('python',['--version'],{encoding:'utf8'});if(py.error||py.status!==0)console.warn('提示：BMad工作流需要Python3.10+；游戏预览本身不依赖Python。');
const npmCli=process.env.npm_execpath;if(!npmCli)throw Error('请通过npm run setup执行初始化。');
function run(args,cwd=root){const r=spawnSync(process.execPath,[npmCli,...args],{cwd,stdio:'inherit'});if(r.error)throw r.error;if(r.status!==0)throw Error('依赖安装/编译失败，请检查网络、Node版本和上方错误后重试。');}
run(['ci','--ignore-scripts']);run(['ci','--ignore-scripts'],join(root,'extensions/cocos-mcp-server'));run(['run','build'],join(root,'extensions/cocos-mcp-server'));
console.log('\n依赖与Cocos MCP扩展准备完成。请用Creator3.8.8打开本目录，等待导入后预览assets/scene/main.scene。\n自动化浏览器验证是可选项：npm run setup:browser；打开Creator预览后npm run verify:ui。');
