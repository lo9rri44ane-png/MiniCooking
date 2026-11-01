from pathlib import Path
import base64,hashlib,io,json,wave
import numpy as np
root=Path('build/wechatgame-dev');bundle=root/'subpackages/resources'
config_path=next(bundle.glob('config.*.json'));config=json.loads(config_path.read_text())
def decode(v):
 if len(v)==36:return v
 h=v[:2]+base64.b64decode(v[2:22]).hex()
 return '-'.join([h[:8],h[8:12],h[12:16],h[16:20],h[20:]])+v[22:]
versions=config['versions']['native'];slots={decode(config['uuids'][versions[i]]):i+1 for i in range(0,len(versions),2)}
rows=[]
for p in sorted((bundle/'native').rglob('*.wav')):
 original=p.read_bytes()
 with wave.open(io.BytesIO(original),'rb') as w:
  assert w.getsampwidth()==2
  channels,rate,n=w.getnchannels(),w.getframerate(),w.getnframes()
  x=np.frombuffer(w.readframes(n),dtype='<i2').astype(np.float64).reshape(-1,channels)/32768
 target=min(rate,22050);m=round(n*target/rate)
 spectrum=np.fft.rfft(x,axis=0)[:m//2+1]
 y=np.fft.irfft(spectrum,n=m,axis=0)*(m/n)
 encoded=io.BytesIO()
 with wave.open(encoded,'wb') as w:
  w.setnchannels(channels);w.setsampwidth(2);w.setframerate(target)
  w.writeframes(np.round(np.clip(y,-1,32767/32768)*32768).astype('<i2').tobytes())
 output=encoded.getvalue();uuid,old_hash,ext=p.name.rsplit('.',2);slot=slots[uuid];assert versions[slot]==old_hash
 new_hash=hashlib.md5(output).hexdigest()[:5];p.write_bytes(output);p.rename(p.with_name(uuid+'.'+new_hash+'.wav'));versions[slot]=new_hash
 rows.append({'uuid':uuid,'bytesBefore':len(original),'bytesAfter':len(output),'sampleRate':target,'channels':channels,'durationErrorSeconds':abs(n/rate-m/target),'rmsChangeDb':float(20*np.log10(max(np.sqrt(np.mean(y*y)),1e-12)/max(np.sqrt(np.mean(x*x)),1e-12)))})
text=json.dumps(config,separators=(',',':'));version=hashlib.md5(text.encode()).hexdigest()[:5];old_version=config_path.name.split('.')[1];config_path.write_text(text,encoding='utf-8');config_path.rename(bundle/('config.'+version+'.json'));(bundle/('index.'+old_version+'.js')).rename(bundle/('index.'+version+'.js'));(bundle/'game.js').write_text("require('./index."+version+".js');\n",encoding='utf-8')
settings_path=next((root/'src').glob('settings.*.json'));settings=json.loads(settings_path.read_text());settings['assets']['bundleVers']['resources']=version;settings_path.write_text(json.dumps(settings,separators=(',',':')),encoding='utf-8')
Path('docs/verification/wechat-audio-compression.json').write_text(json.dumps(rows,indent=2),encoding='utf-8')
print(json.dumps({'count':len(rows),'before':sum(r['bytesBefore'] for r in rows),'after':sum(r['bytesAfter'] for r in rows),'maxDurationError':max(r['durationErrorSeconds'] for r in rows),'maxRmsChangeDb':max(abs(r['rmsChangeDb']) for r in rows)}))
