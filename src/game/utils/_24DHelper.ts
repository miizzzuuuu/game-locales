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

export class _24DHelper {
    static RED = [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19, 20];
    static BLACK = [5, 6, 7, 8, 13, 14, 15, 16, 21, 22, 23, 24];

    static getColor(result: number) {
        if (this.RED.includes(result)) {
            return 'red';
        } else if (this.BLACK.includes(result)) {
            return 'black';
        } else {
            return '';
        }
    }

    static PAYOUT: Record<string, number> = {
        n: 18,
        n4: 3.75,
        n6: 2.16,
        n8: 1.375,
        n12: 0.95,
    };

    static bets: Record<string, Bet> = {
        'n-1': { button: '01', group: 'n' },
        'n-2': { button: '02', group: 'n' },
        'n-3': { button: '03', group: 'n' },
        'n-4': { button: '04', group: 'n' },
        'n-5': { button: '05', group: 'n' },
        'n-6': { button: '06', group: 'n' },
        'n-7': { button: '07', group: 'n' },
        'n-8': { button: '08', group: 'n' },
        'n-9': { button: '09', group: 'n' },
        'n-10': { button: '10', group: 'n' },
        'n-11': { button: '11', group: 'n' },
        'n-12': { button: '12', group: 'n' },
        'n-13': { button: '13', group: 'n' },
        'n-14': { button: '14', group: 'n' },
        'n-15': { button: '15', group: 'n' },
        'n-16': { button: '16', group: 'n' },
        'n-17': { button: '17', group: 'n' },
        'n-18': { button: '18', group: 'n' },
        'n-19': { button: '19', group: 'n' },
        'n-20': { button: '20', group: 'n' },
        'n-21': { button: '21', group: 'n' },
        'n-22': { button: '22', group: 'n' },
        'n-23': { button: '23', group: 'n' },
        'n-24': { button: '24', group: 'n' },
    };

    static betsColRow: Record<string, Bet> = {
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

    static betsMultiCols: Record<string, Bet> = {
        'c-1-2': { button: '1st Column,2nd Column', group: 'n8' },
        'c-2-3': { button: '2nd Column,3rd Column', group: 'n8' },
        'c-3-4': { button: '3rd Column,4th Column', group: 'n8' },
        'c-4-5': { button: '4th Column,5th Column', group: 'n8' },
        'c-5-6': { button: '5th Column,6th Column', group: 'n8' },
    };

    static betMultiNumber: Record<string, Bet> = {
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

    static bets50: Record<string, Bet> = {
        small: { button: 'Small', group: 'n50' },
        big: { button: 'Big', group: 'n50' },
        odd: { button: 'Odd', group: 'n50' },
        even: { button: 'Even', group: 'n50' },
        red: { button: 'Red', group: 'n50' },
        black: { button: 'Black', group: 'n50' },
    };

    static getBetKeys = Object.keys(this.bets);
    static getBetColRowKeys = Object.keys(this.betsColRow);
    static getBetsMultiColsKeys = Object.keys(this.betsMultiCols);
    static getBet50Keys = Object.keys(this.bets50);
    static getBetMultiNumberKeys = Object.keys(this.betMultiNumber);

    static getWinResult(result: number): string[] {
        const wins: string[] = [];

        // angka
        wins.push(String(result).padStart(2, '0'));

        wins.push(this.redOrBlack(result));
        wins.push(this.evenOrOdd(result));
        wins.push(this.smallOrBig(result));

        // cols
        wins.push(...this.getColWins(result));

        // rows
        wins.push(...this.getRowWins(result));

        return wins;
    }

    static redOrBlack(result: number) {
        return this.RED.includes(result) ? 'Red' : 'Black';
    }

    static evenOrOdd(result: number) {
        return result % 2 === 0 ? 'Even' : 'Odd';
    }

    static smallOrBig(result: number) {
        return result <= 12 ? 'Small' : 'Big';
    }

    static getRowWins(result: number) {
        const ods = result % 4;

        if (ods === 1) {
            return ['1st Row', '1st Row,2nd Row'];
        }
        if (ods === 2) {
            return ['2nd Row', '1st Row,2nd Row'];
        }
        if (ods === 2) {
            return ['3rd Row', '3rd Row,4th Row'];
        }

        return ['4th Row', '3rd Row,4th Row'];
    }

    static getColWins(result: number) {
        const winCols = [];

        if (result <= 4) {
            winCols.push('1st Column');
        } else if (result > 4 && result <= 8) {
            winCols.push('2nd Column');
        } else if (result > 8 && result <= 12) {
            winCols.push('3rd Column');
        } else if (result > 12 && result <= 16) {
            winCols.push('4th Column');
        } else if (result > 16 && result <= 20) {
            winCols.push('5th Column');
        } else if (result > 20 && result <= 24) {
            winCols.push('6th Column');
        }

        if (result <= 8) {
            winCols.push('1st Column,2nd Column');
        }

        if (result > 4 && result <= 12) {
            winCols.push('2nd Column,3rd Column');
        }

        if (result > 8 && result <= 16) {
            winCols.push('3rd Column,4th Column');
        }

        if (result > 12 && result <= 20) {
            winCols.push('4th Column,5th Column');
        }

        if (result > 16 && result <= 24) {
            winCols.push('5th Column,6th Column');
        }

        return winCols;
    }

    static is24DJackpot = (item: Thunder<string>): item is { pcode: string; data: ThunderP6B } => {
        return item.pcode === 'p6b';
    };
}
