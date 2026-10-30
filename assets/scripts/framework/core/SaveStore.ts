export interface StoragePort {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export class SaveStore<T> {
    private storage: StoragePort;
    private key: string;
    private version: number;
    private defaults: () => T;
    private validate: (value: unknown) => boolean;
    constructor(storage: StoragePort, key: string, version: number, defaults: () => T, validate: (value: unknown) => boolean) { this.storage = storage; this.key = key; this.version = version; this.defaults = defaults; this.validate = validate; }
    load(): T {
        const raw = this.storage.getItem(this.key);
        if (raw === null)
            return this.defaults();
        let item: unknown;
        try {
            item = JSON.parse(raw);
        }
        catch {
            throw Error('存档无法解析，原件已保留：' + this.key);
        }
        const saved = item as {
            version?: unknown;
            data?: unknown;
        } | null;
        if (!saved || saved.version !== this.version || !this.validate(saved.data))
            throw Error('存档版本或内容无效，原件已保留：' + this.key);
        return saved.data as T;
    }
    save(value: T): void { if (!this.validate(value))
        throw Error('拒绝保存无效数据'); const existing = this.storage.getItem(this.key); if (existing !== null)
        this.load(); this.storage.setItem(this.key, JSON.stringify({ version: this.version, data: value })); }
    /** Reset is explicit; callers must obtain the player's intent before using it. */
    reset(): T { const value = this.defaults(); this.storage.removeItem(this.key); this.save(value); return value; }
}
