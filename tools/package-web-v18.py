"""Package Creator's verified static HTML5 output for ordinary HTTP hosting."""
from pathlib import Path
import hashlib,json,zipfile

root=Path('build/web-mobile')
entry=root/'index.html'
assert entry.is_file(),'Build web-mobile in Creator first'
html=entry.read_text(encoding='utf-8').replace('<title>Cocos Creator | 小小厨房下班啦</title>','<title>小小厨房下班啦！</title>')
if 'rel="icon"' not in html:
    html=html.replace('<meta charset="utf-8">','<meta charset="utf-8">\n<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E">')
entry.write_text(html,encoding='utf-8')
files=sorted(p for p in root.rglob('*') if p.is_file())
out=Path('build/MiniCooking-v18-HTML5.zip')
instructions='''小小厨房下班啦！ v18 — HTML5 在线静态包
Creator 3.8.8 / web-mobile / Release

部署：把本ZIP内全部文件解压到服务器的网站目录，访问该目录的 index.html。
例如 https://你的域名/minicooking/ ，子目录部署也已验证。
必须一起上传 assets、cocos-js、src 等目录，保持相对路径，不要只上传HTML。
不需要Node或其他游戏后端；不要双击file://方式打开。
静态服务器需正确提供JS/JSON/CSS/PNG/WAV等文件的MIME类型。
建议index.html不长缓存；带哈希的资源文件可长期缓存，并启用gzip传输JS/JSON。
存档保存在玩家浏览器本地；换域名、换浏览器不会自动同步。

本轮已修复失败援助、常驻客人数、移动闪跳、经过触发开关及无效机关。
UI参考还原、机制混搭、阳光贴边、难度分级按用户要求仅记录待制作。
'''
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
    for p in files:z.write(p,p.relative_to(root).as_posix())
    z.writestr('部署说明.txt',instructions)
with zipfile.ZipFile(out) as z:
    assert len(z.namelist())==len(files)+1
    assert z.testzip() is None
report={'engine':'3.8.8','platform':'web-mobile','debug':False,'sourceMaps':False,'md5Cache':True,'files':len(files),'bytes':sum(p.stat().st_size for p in files),'zip':str(out),'zipBytes':out.stat().st_size,'zipSha256':hashlib.sha256(out.read_bytes()).hexdigest(),'serverSubdirectoryVerified':'/minicooking/','requiresBackend':False,'publicHosting':False}
Path('docs/verification/web-v18-build.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
