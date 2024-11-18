export function range(size: number, startAt = 0): number[] {
    return [...Array(size).keys()].map((i) => i + startAt);
}

export function newArray(length: number, fill: any = null) {
    return Array(length).fill(fill);
}

export function newArray2D(col: number, row: number, fill: any = null) {
    return Array(row)
        .fill(undefined)
        .map(() => Array(col).fill(fill));
}

export function takeLeft<T>(array: T[], n = 1): T[] {
    return n >= array.length ? [...array] : array.slice(0, n);
}

export function takeRight<T>(array: T[], n = 1): T[] {
    return n >= array.length ? [...array] : array.slice(array.length - n, array.length);
}

export function hasCommonElement<T>(array1: T[], array2: T[]): boolean {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements.length > 0;
}

export function checkWinMultiBet<T>(win: T, button: T[]): boolean {
    const commonElements = button.filter((item) => item === win);
    return commonElements.length > 0;
}
