import CHIP_1 from '../../assets/img/chips/chip-1.svg';
import CHIP_10 from '../../assets/img/chips/chip-10.svg';
import CHIP_2 from '../../assets/img/chips/chip-2.svg';
import CHIP_3 from '../../assets/img/chips/chip-3.svg';
import CHIP_4 from '../../assets/img/chips/chip-4.svg';
import CHIP_5 from '../../assets/img/chips/chip-5.svg';
import CHIP_6 from '../../assets/img/chips/chip-6.svg';
import CHIP_7 from '../../assets/img/chips/chip-7.svg';
import CHIP_8 from '../../assets/img/chips/chip-8.svg';
import CHIP_9 from '../../assets/img/chips/chip-9.svg';

const CHIP_COLORS: string[] = [
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

const CHIP_IMAGES: string[] = [
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

const getChipColorByIndex = (index: number): string => {
    return CHIP_COLORS[index % CHIP_COLORS.length];
};

const getChipColorByAmount = (amount: number, chipBase: number[]): string => {
    if (chipBase.length === 0) return CHIP_COLORS[0];

    let index = chipBase.findIndex(
        (base, i) => amount >= base && (i === chipBase.length - 1 || amount < chipBase[i + 1]),
    );

    if (index === -1 || index >= CHIP_COLORS.length) {
        index = CHIP_COLORS.length - 1;
    }

    return CHIP_COLORS[index];
};

const getChipImageByAmount = (amount: number, chipBase: number[]): string => {
    if (chipBase.length === 0) return CHIP_IMAGES[0];

    let index = chipBase.findIndex(
        (base, i) => amount >= base && (i === chipBase.length - 1 || amount < chipBase[i + 1]),
    );

    if (index === -1 || index >= CHIP_IMAGES.length) {
        index = CHIP_IMAGES.length - 1;
    }

    return CHIP_IMAGES[index];
};

export { getChipColorByAmount, getChipColorByIndex, getChipImageByAmount };
