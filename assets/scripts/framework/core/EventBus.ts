export class EventBus<Events extends object> {
    private listeners = new Map<keyof Events, Set<(value: any) => void>>();
    on<K extends keyof Events>(key: K, listener: (value: Events[K]) => void): () => void {
        let set = this.listeners.get(key);
        if (!set) {
            set = new Set();
            this.listeners.set(key, set);
        }
        set.add(listener);
        return () => { set!.delete(listener); if (!set!.size && this.listeners.get(key) === set)
            this.listeners.delete(key); };
    }
    emit<K extends keyof Events>(key: K, value: Events[K]): void { for (const listener of Array.from(this.listeners.get(key) || []))
        listener(value); }
    clear(): void { this.listeners.clear(); }
}
