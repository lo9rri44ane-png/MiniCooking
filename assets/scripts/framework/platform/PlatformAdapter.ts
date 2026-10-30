export interface MiniSDK {
    shareAppMessage?: (options: {
        title: string;
    }) => void;
}
export interface PlatformResult {
    ok: boolean;
    status: 'requested' | 'unsupported' | 'failed';
    message?: string;
}
export interface PlatformAdapter {
    kind: 'web' | 'wechat' | 'douyin' | 'native';
    share(title: string): Promise<PlatformResult>;
    login(): Promise<PlatformResult>;
    showRewardedAd(): Promise<PlatformResult>;
}
export function createPlatform(environment: {
    wx?: MiniSDK;
    tt?: MiniSDK;
    native?: boolean;
}): PlatformAdapter {
    const sdk = environment.wx || environment.tt;
    const kind = environment.wx ? 'wechat' : environment.tt ? 'douyin' : environment.native ? 'native' : 'web';
    const unsupported = async (): Promise<PlatformResult> => ({ ok: false, status: 'unsupported', message: '尚未配置平台SDK、应用ID及服务端，未执行此操作' });
    return { kind, login: unsupported, showRewardedAd: unsupported, async share(title) { if (!sdk?.shareAppMessage)
            return unsupported(); try {
            sdk.shareAppMessage({ title });
            return { ok: true, status: 'requested' };
        }
        catch (e) {
            return { ok: false, status: 'failed', message: String(e) };
        } } };
}
