export interface GameConfig {
    version: 1;
    width: number;
    height: number;
    title: string;
    namespace: string;
}
export function validateConfig(input: unknown): GameConfig {
    const c = input as GameConfig | null;
    if (!c || c.version !== 1 || !Number.isInteger(c.width) || !Number.isInteger(c.height) || c.width < 320 || c.height < 320 || c.width > 3840 || c.height > 3840 || typeof c.namespace !== 'string' || !/^[a-zA-Z0-9._-]{1,100}$/.test(c.namespace) || typeof c.title !== 'string' || !c.title.trim() || c.title.length > 60)
        throw Error('框架配置无效');
    return { ...c };
}
export const DEFAULT_CONFIG: GameConfig = { version: 1, width: 720, height: 1280, title: '小游戏开发框架', namespace: 'minigame-starter' };
