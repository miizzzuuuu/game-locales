export class ArrayHelper {
    static range = (size: number, startAt = 0): number[] => {
        return [...Array(size).keys()].map((i) => i + startAt);
    };

    static newArray2D = (col: number, row: number, fill: any = null) => {
        return Array(row)
            .fill(undefined)
            .map(() => Array(col).fill(fill));
    };

    static newArray = (length: number, fill: any = null) => {
        return Array(length).fill(fill);
    };

    static takeLeft = <T>(array: T[], n = 1): T[] => {
        return n >= array.length ? [...array] : array.slice(0, n);
    };

    static takeRight = <T>(array: T[], n = 1): T[] => {
        return n >= array.length ? [...array] : array.slice(array.length - n, array.length);
    };
}
