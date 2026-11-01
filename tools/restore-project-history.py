"""Restore selected archived paths without silently overwriting current files."""
from pathlib import Path
import argparse,hashlib,json,zipfile
p=argparse.ArgumentParser();p.add_argument('archive');p.add_argument('--prefix',required=True);p.add_argument('--overwrite',action='store_true');a=p.parse_args();root=Path.cwd().resolve()
with zipfile.ZipFile(a.archive) as z:
 manifest=json.loads(z.read('manifest.json'));rows=[r for r in manifest['files'] if r['path'].startswith(a.prefix)]
 if not rows:raise SystemExit('No matching paths')
 for row in rows:
  path=(root/row['path']).resolve()
  if not path.is_relative_to(root):raise SystemExit('Unsafe archive path')
  data=z.read('blobs/'+row['sha256'])
  if hashlib.sha256(data).hexdigest()!=row['sha256']:raise SystemExit('Archive hash mismatch')
  if path.exists() and path.read_bytes()!=data and not a.overwrite:raise SystemExit('Current file differs; use --overwrite only if intended: '+str(path))
 for row in rows:
  path=(root/row['path']).resolve();path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(z.read('blobs/'+row['sha256']))
print('Restored',len(rows),'files')
