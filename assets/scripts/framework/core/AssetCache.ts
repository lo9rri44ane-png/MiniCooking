export interface AssetLease<T> {
    asset: T;
    release(): void;
}
interface Entry<T> {
    pending: Promise<T>;
    refs: number;
    asset?: T;
    ready: boolean;
}
export class AssetCache<T> {
    private entries = new Map<string, Entry<T>>();
    private closed = false;
    private load: (key: string) => Promise<T>;
    private dispose: (asset: T) => void;
    constructor(load: (key: string) => Promise<T>, dispose: (asset: T) => void) { this.load = load; this.dispose = dispose; }
    async retain(key: string): Promise<AssetLease<T>> {
        if (this.closed)
            throw Error('资源池已关闭');
        let entry = this.entries.get(key);
        if (!entry) {
            entry = { refs: 0, ready: false, pending: Promise.resolve().then(() => this.load(key)) };
            this.entries.set(key, entry);
        }
        const owned = entry;
        owned.refs++;
        let asset: T;
        try {
            asset = await owned.pending;
            owned.asset = asset;
            owned.ready = true;
        }
        catch (e) {
            owned.refs--;
            if (this.entries.get(key) === owned)
                this.entries.delete(key);
            throw e;
        }
        const release = () => { owned.refs--; if (owned.refs === 0 && owned.ready) {
            this.dispose(owned.asset!);
            if (this.entries.get(key) === owned)
                this.entries.delete(key);
        } };
        if (this.closed) {
            release();
            throw Error('资源加载期间资源池已关闭');
        }
        let released = false;
        return { asset, release: () => { if (released)
                return; released = true; release(); } };
    }
    close(): void { this.closed = true; }
}
