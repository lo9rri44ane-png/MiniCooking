export class AsyncRouter<View> {
    private sequence = 0;
    private closed = false;
    private current: View | null = null;
    private create: (id: string, data?: unknown) => Promise<View>;
    private activate: (view: View) => void;
    private destroy: (view: View) => void;
    constructor(create: (id: string, data?: unknown) => Promise<View>, activate: (view: View) => void, destroy: (view: View) => void) { this.create = create; this.activate = activate; this.destroy = destroy; }
    async go(id: string, data?: unknown): Promise<boolean> {
        if (this.closed)
            throw Error('页面管理器已关闭');
        const version = ++this.sequence;
        const view = await this.create(id, data);
        if (this.closed || version !== this.sequence) {
            this.destroy(view);
            return false;
        }
        try {
            this.activate(view);
        }
        catch (e) {
            this.destroy(view);
            throw e;
        }
        const previous = this.current;
        this.current = view;
        if (previous)
            this.destroy(previous);
        return true;
    }
    dispose(): void { if (this.closed)
        return; this.closed = true; this.sequence++; if (this.current)
        this.destroy(this.current); this.current = null; }
}
