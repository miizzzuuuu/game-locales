import CHIP_1 from '../../assets/img/chips/chip-1.svg';
import CHIP_2 from '../../assets/img/chips/chip-2.svg';
import CHIP_3 from '../../assets/img/chips/chip-3.svg';
import CHIP_4 from '../../assets/img/chips/chip-4.svg';
import CHIP_5 from '../../assets/img/chips/chip-5.svg';
import CHIP_6 from '../../assets/img/chips/chip-6.svg';
import CHIP_7 from '../../assets/img/chips/chip-7.svg';
import CHIP_8 from '../../assets/img/chips/chip-8.svg';
import CHIP_9 from '../../assets/img/chips/chip-9.svg';
import CHIP_10 from '../../assets/img/chips/chip-10.svg';

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

    static CHIP_IMAGES = [
        CHIP_1,
        CHIP_2,
        CHIP_3,
        CHIP_4,
        CHIP_5,
        CHIP_6,
        CHIP_7,
        CHIP_8,
        CHIP_9,
        CHIP_10,
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

    static getChipImageByAmount(amount: number, chipBase: number[]): string {
        if (chipBase.length === 0) return this.CHIP_IMAGES[0];

        const n = this.CHIP_IMAGES.length;
        let index: number = n - 1;

        if (amount >= chipBase[index]) return this.CHIP_IMAGES[index];

        for (let i = 1; i < chipBase.length; i++) {
            if (amount < chipBase[i] && i <= n) {
                index = i - 1;
                break;
            }
        }

        return this.CHIP_IMAGES[index];
    }
}
