export function dateSorter<T>(getDate: (item: T) => Date) {
    return (a: T, b: T) => getDate(b).valueOf() - getDate(a).valueOf();
}
