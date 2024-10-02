export class ArrayHelper {
    static range = (size: number, startAt = 0): number[] => {
        return [...Array(size).keys()].map((i) => i + startAt);
    };

    static newArray2D = <T>(col: number, row: number, fill?: T): T[][] => {
        return Array(row)
            .fill(undefined)
            .map(() => Array(col).fill(fill));
    };

    static newArray = <T>(length: number, fill?: T): T[] => {
        return Array(length).fill(fill);
    };

    static takeLeft = <T>(array: T[], n = 1): T[] => {
        return n >= array.length ? [...array] : array.slice(0, n);
    };

    static takeRight = <T>(array: T[], n = 1): T[] => {
        return n >= array.length ? [...array] : array.slice(array.length - n, array.length);
    };
}
