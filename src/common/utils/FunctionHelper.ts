export class FunctionHelper {
    static debounce<T extends (...args: any[]) => void>(
        func: T,
        wait: number,
    ): (...args: Parameters<T>) => void {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        return (...args: Parameters<T>) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }

    static sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    static getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
}
