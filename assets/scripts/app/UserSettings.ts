import { sys } from 'cc';
import { SaveStore } from '../framework/core/SaveStore';
export interface UserSettings {
    music: boolean;
    sound: boolean;
}
export function settingsStore(namespace: string): SaveStore<UserSettings> { return new SaveStore<UserSettings>(sys.localStorage, namespace + '.settings', 1, () => ({ music: true, sound: true }), value => { const s = value as UserSettings | null; return !!s && typeof s.music === 'boolean' && typeof s.sound === 'boolean'; }); }
