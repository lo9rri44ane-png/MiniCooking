export function fitWithin(width: number, height: number, availableWidth: number, availableHeight: number, padding = 0): number { return Math.max(.001, Math.min(1, Math.max(1, availableWidth - 2 * padding) / width, Math.max(1, availableHeight - 2 * padding) / height)); }
export function toastLayout(width: number, height: number): {
    scale: number;
    y: number;
} { const scale = fitWithin(610, 100, width, height, 24); return { scale, y: -height / 2 + 24 + 50 * scale }; }
