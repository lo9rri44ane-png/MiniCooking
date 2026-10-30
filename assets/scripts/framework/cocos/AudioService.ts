import { AudioClip, AudioSource, Node, isValid } from 'cc';
import type { CocosAssets } from './CocosAssets';
import type { AssetLease } from '../core/AssetCache';
export class AudioService {
    private music: AudioSource;
    private effects: AudioSource;
    private musicLease: AssetLease<AudioClip> | null = null;
    private effectsLease: AssetLease<AudioClip> | null = null;
    private version = 0;
    private effectVersion = 0;
    private closed = false;
    private suspended = false;
    private musicOn = true;
    private soundOn = true;
    private assets: CocosAssets;
    constructor(owner: Node, assets: CocosAssets) { this.assets = assets; this.music = owner.addComponent(AudioSource); this.effects = owner.addComponent(AudioSource); this.music.loop = true; }
    async playMusic(path: string): Promise<void> { const request = ++this.version; const lease = await this.assets.retain(path, AudioClip); if (this.closed || request !== this.version) {
        lease.release();
        return;
    } this.music.stop(); this.music.clip = null; this.musicLease?.release(); this.musicLease = lease; this.music.clip = lease.asset; if (this.musicOn && !this.suspended)
        this.music.play(); }
    async playEffect(path: string): Promise<void> { const request = ++this.effectVersion; const lease = await this.assets.retain(path, AudioClip); if (this.closed || request !== this.effectVersion) {
        lease.release();
        return;
    } this.effects.stop(); this.effects.clip = null; this.effectsLease?.release(); this.effectsLease = lease; this.effects.clip = lease.asset; if (this.soundOn && !this.suspended)
        this.effects.play(); }
    configure(music: boolean, sound: boolean): void { this.musicOn = music; this.soundOn = sound; if (!music)
        this.music.pause();
    else if (!this.suspended && this.music.clip)
        this.music.play(); if (!sound)
        this.effects.stop(); }
    suspend(): void { this.suspended = true; this.music.pause(); this.effects.pause(); }
    resume(): void { this.suspended = false; if (this.musicOn && this.music.clip)
        this.music.play(); }
    dispose(): void { if (this.closed)
        return; this.closed = true; this.version++; this.effectVersion++; if (isValid(this.music)) {
        this.music.stop();
        this.music.clip = null;
    } if (isValid(this.effects)) {
        this.effects.stop();
        this.effects.clip = null;
    } this.musicLease?.release(); this.effectsLease?.release(); this.musicLease = null; this.effectsLease = null; }
}
