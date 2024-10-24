import { Bet, Thunder, ThunderP6B } from '../../types';

export enum TypeGroup {
    Number1 = 'n',
    Number2 = 'n2',
    Number3 = 'n3',
    Number4 = 'n4',
    Number6 = 'n6',
    Number12 = 'n12',
    Number50 = 'n50',
}

const RED_NUMBERS = [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19, 20];
const BLACK_NUMBERS = [5, 6, 7, 8, 13, 14, 15, 16, 21, 22, 23, 24];

export const getColor = (result: number): string => {
    if (RED_NUMBERS.includes(result)) {
        return 'red';
    } else if (BLACK_NUMBERS.includes(result)) {
        return 'black';
    }
    return '';
};

export const PAYOUT: Record<string, number> = {
    n: 18,
    n4: 3.75,
    n6: 2.16,
    n8: 1.375,
    n12: 0.95,
};

export const BETS: Record<string, Bet> = {
    ...Object.fromEntries(
        Array.from({ length: 24 }, (_, i) => [
            `n-${i + 1}`,
            { button: (i + 1).toString().padStart(2, '0'), group: 'n' },
        ]),
    ),
};

export const BETS_COL_ROW: Record<string, Bet> = {
    'c-1': { button: '1st Column', group: 'n4' },
    'c-2': { button: '2nd Column', group: 'n4' },
    'c-3': { button: '3rd Column', group: 'n4' },
    'c-4': { button: '4th Column', group: 'n4' },
    'c-5': { button: '5th Column', group: 'n4' },
    'c-6': { button: '6th Column', group: 'n4' },

    'r-1': { button: '1st Row', group: 'n6' },
    'r-2': { button: '2nd Row', group: 'n6' },
    'r-3': { button: '3rd Row', group: 'n6' },
    'r-4': { button: '4th Row', group: 'n6' },

    'r-1-2': { button: '1st Row,2nd Row', group: 'n12' },
    'r-3-4': { button: '3rd Row,4th Row', group: 'n12' },
};

export const BETS_MULTI_COLS: Record<string, Bet> = {
    'c-1-2': { button: '1st Column,2nd Column', group: 'n8' },
    'c-2-3': { button: '2nd Column,3rd Column', group: 'n8' },
    'c-3-4': { button: '3rd Column,4th Column', group: 'n8' },
    'c-4-5': { button: '4th Column,5th Column', group: 'n8' },
    'c-5-6': { button: '5th Column,6th Column', group: 'n8' },
};

export const BETS_MULTI_NUMBERS: Record<string, Bet> = {
    'h-1-1': { button: '01,05', group: 'n2' },
    'h-1-2': { button: '05,09', group: 'n2' },
    'h-1-3': { button: '09,13', group: 'n2' },
    'h-1-4': { button: '13,17', group: 'n2' },
    'h-1-5': { button: '17,21', group: 'n2' },
    'h-2-1': { button: '02,06', group: 'n2' },
    'h-2-2': { button: '06,10', group: 'n2' },
    'h-2-3': { button: '10,14', group: 'n2' },
    'h-2-4': { button: '14,18', group: 'n2' },
    'h-2-5': { button: '18,22', group: 'n2' },
    'h-3-1': { button: '03,07', group: 'n2' },
    'h-3-2': { button: '07,11', group: 'n2' },
    'h-3-3': { button: '11,15', group: 'n2' },
    'h-3-4': { button: '15,19', group: 'n2' },
    'h-3-5': { button: '19,23', group: 'n2' },
    'h-4-1': { button: '04,08', group: 'n2' },
    'h-4-2': { button: '08,12', group: 'n2' },
    'h-4-3': { button: '12,16', group: 'n2' },
    'h-4-4': { button: '16,20', group: 'n2' },
    'h-4-5': { button: '20,24', group: 'n2' },

    'v-1-1': { button: '01,02', group: 'n2' },
    'v-1-2': { button: '05,06', group: 'n2' },
    'v-1-3': { button: '09,10', group: 'n2' },
    'v-1-4': { button: '13,14', group: 'n2' },
    'v-1-5': { button: '17,18', group: 'n2' },
    'v-1-6': { button: '21,22', group: 'n2' },

    'v-2-1': { button: '02,03', group: 'n2' },
    'v-2-2': { button: '06,07', group: 'n2' },
    'v-2-3': { button: '10,11', group: 'n2' },
    'v-2-4': { button: '14,15', group: 'n2' },
    'v-2-5': { button: '18,19', group: 'n2' },
    'v-2-6': { button: '22,23', group: 'n2' },

    'v-3-1': { button: '03,04', group: 'n2' },
    'v-3-2': { button: '07,08', group: 'n2' },
    'v-3-3': { button: '11,12', group: 'n2' },
    'v-3-4': { button: '15,16', group: 'n2' },
    'v-3-5': { button: '19,20', group: 'n2' },
    'v-3-6': { button: '23,24', group: 'n2' },

    'v-h-1-1': { button: '01,02,05,06', group: 'n4' },
    'v-h-1-2': { button: '05,06,09,10', group: 'n4' },
    'v-h-1-3': { button: '09,10,13,14', group: 'n4' },
    'v-h-1-4': { button: '13,14,17,18', group: 'n4' },
    'v-h-1-5': { button: '17,18,21,22', group: 'n4' },

    'v-h-2-1': { button: '02,03,06,07', group: 'n4' },
    'v-h-2-2': { button: '06,07,10,11', group: 'n4' },
    'v-h-2-3': { button: '10,11,14,15', group: 'n4' },
    'v-h-2-4': { button: '14,15,18,19', group: 'n4' },
    'v-h-2-5': { button: '18,19,22,23', group: 'n4' },

    'v-h-3-1': { button: '03,04,07,08', group: 'n4' },
    'v-h-3-2': { button: '07,08,11,12', group: 'n4' },
    'v-h-3-3': { button: '11,12,15,16', group: 'n4' },
    'v-h-3-4': { button: '15,16,19,20', group: 'n4' },
    'v-h-3-5': { button: '19,20,23,24', group: 'n4' },
};

export const BETS_50: Record<string, Bet> = {
    small: { button: 'Small', group: 'n50' },
    big: { button: 'Big', group: 'n50' },
    odd: { button: 'Odd', group: 'n50' },
    even: { button: 'Even', group: 'n50' },
    red: { button: 'Red', group: 'n50' },
    black: { button: 'Black', group: 'n50' },
};

export const getWinResult = (result: number): string[] => {
    const wins = [
        String(result).padStart(2, '0'),
        redOrBlack(result),
        evenOrOdd(result),
        smallOrBig(result),
        ...getColWins(result),
        ...getRowWins(result),
    ];
    return wins;
};

// Fungsi untuk menentukan warna berdasarkan angka
const redOrBlack = (result: number): string => {
    return RED_NUMBERS.includes(result) ? 'Red' : 'Black';
};

// Fungsi untuk menentukan genap atau ganjil
const evenOrOdd = (result: number): string => {
    return result % 2 === 0 ? 'Even' : 'Odd';
};

// Fungsi untuk menentukan kecil atau besar
const smallOrBig = (result: number): string => {
    return result <= 12 ? 'Small' : 'Big';
};

const getColWins = (result: number): string[] => {
    const winCols: string[] = [];
    const columnMap = [
        { range: [1, 4], label: '1st Column' },
        { range: [5, 8], label: '2nd Column' },
        { range: [9, 12], label: '3rd Column' },
        { range: [13, 16], label: '4th Column' },
        { range: [17, 20], label: '5th Column' },
        { range: [21, 24], label: '6th Column' },
    ];

    columnMap.forEach(({ range, label }, i) => {
        if (result >= range[0] && result <= range[1]) {
            winCols.push(label);
        }
        if (result >= range[0] && result <= range[1] + 4) {
            winCols.push(`${label},${columnMap[i + 1]?.label}`);
        }
    });

    return winCols;
};

const getRowWins = (result: number): string[] => {
    const ods = result % 4;
    switch (ods) {
        case 1:
            return ['1st Row', '1st Row,2nd Row'];
        case 2:
            return ['2nd Row', '1st Row,2nd Row'];
        case 3:
            return ['3rd Row', '3rd Row,4th Row'];
        default:
            return ['4th Row', '3rd Row,4th Row'];
    }
};

export const is24DJackpotThunder = (
    item: Thunder<string>,
): item is { pcode: string; data: ThunderP6B } => {
    return item.pcode === 'p6b';
};
