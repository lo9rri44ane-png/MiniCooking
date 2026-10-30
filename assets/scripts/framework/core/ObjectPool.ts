export class ObjectPool<T extends object> {
    private free: T[] = [];
    private used = new Set<T>();
    private closed = false;
    private create: () => T;
    private reset: (item: T) => void;
    private destroy: (item: T) => void;
    private capacity: number;
    constructor(create: () => T, reset: (item: T) => void, destroy: (item: T) => void, capacity = 32) { if (!Number.isInteger(capacity) || capacity < 0)
        throw Error('对象池容量无效'); this.create = create; this.reset = reset; this.destroy = destroy; this.capacity = capacity; }
    acquire(): T { if (this.closed)
        throw Error('对象池已关闭'); const item = this.free.pop() || this.create(); this.used.add(item); return item; }
    release(item: T): boolean { if (!this.used.delete(item))
        return false; try {
        this.reset(item);
    }
    catch (e) {
        this.destroy(item);
        throw e;
    } if (this.closed || this.free.length >= this.capacity)
        this.destroy(item);
    else
        this.free.push(item); return true; }
    dispose(): void { this.closed = true; for (const item of this.free)
        this.destroy(item); this.free = []; }
}
