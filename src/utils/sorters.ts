export function numericPropertySorter<TItem>(getProperty: (item: TItem) => number) {
    return (a: TItem, b: TItem) => getProperty(b) - getProperty(a);
}

export function stringPropertySorter<TItem>(getProperty: (item: TItem) => string) {
    return (a: TItem, b: TItem) => getProperty(a).localeCompare(getProperty(b));
}

export function datePropertySorter<TItem>(getProperty: (item: TItem) => Date) {
    return numericPropertySorter<TItem>((item) => getProperty(item).valueOf());
}

export function reverseSorter<TItem>(sorter: (a: TItem, b: TItem) => number) {
    return (a: TItem, b: TItem) => sorter(b, a);
}
