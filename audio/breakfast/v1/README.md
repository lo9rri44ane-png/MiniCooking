# 早餐店音频 v1

从用户指定 `D:/CyTools/资源/音频` 本地库选取并处理，原库只读。没有生成语音或调用付费音频服务。

- `source/music、cooking、ui、battle`：选中的原件分类备份。
- `exports`：处理后正式 WAV；运行副本在 `assets/resources/audio/breakfast/<key>.wav`，字节一致。
- `manifests/assets.json`：逐条源路径、源 SHA256、导出 SHA256、时长、采样、声道、低通、增益、峰值/RMS和淡化参数。
- `manifests/library-index.json、candidates.json`：原库盘点与候选技术指标。
- `previews/battle-sampler.wav`：精简试听合集；每段顺序与起点见 `previews/timeline.json`。

共22条音效与1条音乐：click、step、pickup1/2/3、blocked、guest_in/out、bubble、cook_cut/fry/mix、cook_done、fly、check、order_done、full、start、win、lose、unlock、undo、music。

全部输出为44100Hz、PCM16。音效转单声道，低通减少尖锐高频、去直流、淡入淡出；拾取有三种轻微音高差异。三类设备循环采用最大24dB预增益与`tanh`软限幅，RMS约-33dBFS，首尾归零避免点击。音乐保留声道，28.94秒、峰值-18dBFS，供运行时低音量陪衬。

重跑（在项目根目录）：

```powershell
& 'C:/Users/Cy/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe' tools/prepare-kitchen-audio.py
```

需要该Python环境的NumPy及本地原库，解码辅助脚本为 `tools/inspect-audio-library.py`。重跑后通过Creator导入更新元数据，再验证实际播放。

当前完成的是技术解码、波形与峰值/RMS检查及可重复导出。是否足够轻柔、解压，以及音乐/音效平衡的主观听感，仍以用户试听和真实设备体验为准，不把技术指标当作主观听感验收。
