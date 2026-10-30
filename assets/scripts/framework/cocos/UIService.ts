import {PrefabSlot} from './PrefabSlot';
import {PrefabSurface} from './PrefabSurface';
import {prefabNode} from './PrefabFactory';
import { fitWithin, toastLayout } from '../core/UILayout';
import { Node, UITransform, Graphics, Color, Label, Button, Layers, BlockInputEvents, Widget, SafeArea, isValid, Sprite } from 'cc';
import { AsyncRouter } from '../core/AsyncRouter';
export interface PageView {
    node: Node;
    dispose?: () => void;
}
export function uiNode(parent: Node, name: string, x: number, y: number, width: number, height: number): Node { const node = prefabNode(name,parent); const surface=node.getComponent(PrefabSurface);if(surface)surface.runtimeBound=true; node.layer = Layers.Enum.UI_2D; if(node.parent!==parent)parent.addChild(node); if(!node.getComponent(PrefabSlot)?.preserveLayout){node.setPosition(x, y); (node.getComponent(UITransform)||node.addComponent(UITransform)).setContentSize(width, height);} return node; }
export function box(node: Node, color: string): void { const size = node.getComponent(UITransform)!.contentSize, g = node.getComponent(Graphics)||node.addComponent(Graphics); g.clear();if(node.getComponent(Sprite)?.spriteFrame){g.enabled=false;return;} if(!node.getComponent(PrefabSlot)?.preserveStyle)g.fillColor = new Color().fromHEX(color); g.roundRect(-size.width / 2, -size.height / 2, size.width, size.height, 16); g.fill(); }
export function text(parent: Node, value: string, x: number, y: number, width: number, height = 55, size = 25): Label { const node = uiNode(parent, 'Text', x, y, width, height); const label = node.getComponent(Label)||node.addComponent(Label); label.string = value; if(!node.getComponent(PrefabSlot)?.preserveStyle){label.fontSize = size; label.lineHeight = size + 9; label.color = new Color().fromHEX('#E6EDF8');} label.horizontalAlign = Label.HorizontalAlign.CENTER; label.verticalAlign = Label.VerticalAlign.CENTER; label.overflow = Label.Overflow.SHRINK; return label; }
export function button(parent: Node, title: string, x: number, y: number, width: number, handler: () => unknown, onError: (e: unknown) => void): Node { const node = uiNode(parent, 'Button-' + title, x, y, width, 66); box(node, '#267E76'); text(node, title, 0, 0, width - 24, 55, 23); if(!node.getComponent(Button))node.addComponent(Button); node.on(Button.EventType.CLICK, () => { try {
    void Promise.resolve(handler()).catch(onError);
}
catch (e) {
    onError(e);
} }); return node; }
function stretch(node: Node): void { const w = node.addComponent(Widget); w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true; w.left = w.right = w.top = w.bottom = 0; w.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE; w.updateAlignment(); }
export class UIService {
    readonly pages: Node;
    readonly overlays: Node;
    readonly safe: Node;
    private layouts = new Map<Node, () => void>();
    private resize = () => { for (const child of this.pages.children)
        this.fitPage(child); for (const fn of this.layouts.values())
        fn(); };
    private fitPage(node: Node): void { const size = this.safe.getComponent(UITransform)!.contentSize, content = node.getComponent(UITransform)!.contentSize, scale = fitWithin(content.width, content.height, size.width, size.height); node.setScale(scale, scale, 1); }
    private track(node: Node, layout: () => void): void { this.layouts.set(node, layout); node.once(Node.EventType.NODE_DESTROYED, () => this.layouts.delete(node)); layout(); }
    private factories = new Map<string, () => PageView | Promise<PageView>>();
    private router: AsyncRouter<PageView>;
    private toast: Node | null = null;
    private timer: ReturnType<typeof setTimeout> | null = null;
    private closed = false;
    constructor(root: Node, width: number, height: number) { this.safe = uiNode(root, 'SafeArea', 0, 0, width, height); stretch(this.safe); this.safe.addComponent(SafeArea); this.pages = uiNode(this.safe, 'Pages', 0, 0, width, height); stretch(this.pages); this.overlays = uiNode(this.safe, 'Overlays', 0, 0, width, height); stretch(this.overlays); this.router = new AsyncRouter(async (id) => { const make = this.factories.get(id); if (!make)
        throw Error('页面未注册：' + id); return make(); }, view => { this.pages.addChild(view.node); this.fitPage(view.node); }, view => { view.dispose?.(); if (isValid(view.node))
        view.node.destroy(); }); this.safe.on(Node.EventType.SIZE_CHANGED, this.resize, this); }
    register(id: string, make: () => PageView | Promise<PageView>): void { if (this.factories.has(id))
        throw Error('页面重复注册：' + id); this.factories.set(id, make); }
    go(id: string): Promise<boolean> { return this.router.go(id); }
    notify(message: string): void { if (this.closed)
        return; if (this.timer)
        clearTimeout(this.timer); if (this.toast && isValid(this.toast))
        this.toast.destroy(); const toast = uiNode(this.overlays, 'Toast', 0, 0, 610, 100); box(toast, '#35445B'); text(toast, message, 0, 0, 570, 85, 21); this.toast = toast; this.track(toast, () => { if (!isValid(toast))
        return; const size = this.safe.getComponent(UITransform)!.contentSize, layout = toastLayout(size.width, size.height); toast.setPosition(0, layout.y); toast.setScale(layout.scale, layout.scale, 1); }); this.timer = setTimeout(() => { if (isValid(toast))
        toast.destroy(); if (this.toast === toast)
        this.toast = null; }, 2600); }
    popup(title: string, message: string): void { if (this.closed)
        return; const size = this.safe.getComponent(UITransform)!.contentSize; const overlay = uiNode(this.overlays, 'Popup', 0, 0, size.width, size.height); stretch(overlay); if(!overlay.getComponent(BlockInputEvents))overlay.addComponent(BlockInputEvents); const card = uiNode(overlay, 'Dialog', 0, 0, 680, 720); box(card, '#1B2B40'); text(card, title, 0, 180, 610, 70, 32); text(card, message, 0, 10, 600, 220, 24); button(card, '关闭', 0, -190, 420, () => overlay.destroy(), e => this.notify(String(e))); this.track(overlay, () => { if (!isValid(card))
        return; const available = this.safe.getComponent(UITransform)!.contentSize, scale = fitWithin(680, 720, available.width, available.height, 24); card.setScale(scale, scale, 1); }); }
    dispose(): void { if (this.closed)
        return; this.closed = true; if (this.timer)
        clearTimeout(this.timer); this.safe.off(Node.EventType.SIZE_CHANGED, this.resize, this); this.layouts.clear(); this.router.dispose(); this.factories.clear(); if (isValid(this.safe))
        this.safe.destroy(); }
}
