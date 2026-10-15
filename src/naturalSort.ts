export function naturalSort(arr: string[]): string[] {
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
    return [...arr].sort(collator.compare);
}
