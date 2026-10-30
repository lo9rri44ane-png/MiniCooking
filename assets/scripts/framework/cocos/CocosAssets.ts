import { Asset, assetManager, resources } from 'cc';
import { AssetCache } from '../core/AssetCache';
import type { AssetLease } from '../core/AssetCache';
type AssetType<T extends Asset> = new (...args: any[]) => T;
export class CocosAssets {
    private requests = new Map<string, {
        bundle: string;
        path: string;
        type: AssetType<Asset>;
    }>();
    private bundles = new Map<string, Promise<void>>();
    private cache = new AssetCache<Asset>(async (key) => {
        const request = this.requests.get(key)!;
        if (request.bundle !== 'resources' && !assetManager.getBundle(request.bundle)) {
            let task = this.bundles.get(request.bundle);
            if (!task) {
                task = new Promise<void>((resolve, reject) => assetManager.loadBundle(request.bundle, e => e ? reject(e) : resolve()));
                this.bundles.set(request.bundle, task);
                void task.catch(() => this.bundles.delete(request.bundle));
            }
            await task;
        }
        const bundle = request.bundle === 'resources' ? resources : assetManager.getBundle(request.bundle);
        if (!bundle)
            throw Error('资源包未就绪：' + request.bundle);
        return new Promise<Asset>((resolve, reject) => bundle.load(request.path, request.type, (error, asset) => { if (error)
            reject(error);
        else {
            asset.addRef();
            resolve(asset);
        } }));
    }, asset => asset.decRef());
    retain<T extends Asset>(path: string, type: AssetType<T>, bundle = 'resources'): Promise<AssetLease<T>> {
        const key = JSON.stringify([bundle, path, type.name]);
        this.requests.set(key, { bundle, path, type });
        return this.cache.retain(key) as Promise<AssetLease<T>>;
    }
    close(): void { this.cache.close(); }
}
