export class ChipHelper {
    static chipColors = [
        '#8B8B8B',
        '#266EE9',
        '#FA3E3E',
        '#36A530',
        '#9547FF',
        '#F3B000',
        '#494949',
        '#45BCD6',
        '#FF8319',
        '#FF48B6',
    ];

    public static getChipColorByIndex(index: number): string {
        return this.chipColors[index % this.chipColors.length];
    }

    static getChipColorByAmount(amount: number, chipBase: number[]): string {
        if (chipBase.length === 0) return this.chipColors[0];

        const n = this.chipColors.length;
        let index: number = n - 1;

        if (amount >= chipBase[index]) return this.chipColors[index];

        for (let i = 1; i < chipBase.length; i++) {
            if (amount < chipBase[i] && i <= n) {
                index = i - 1;
                break;
            }
        }

        return this.chipColors[index];
    }
}
