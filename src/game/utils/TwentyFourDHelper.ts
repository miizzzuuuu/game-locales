import { Bet } from '../../types';

export enum TypeGroup {
    Number1 = 'n',
    Number2 = 'n2',
    Number3 = 'n3',
    Number4 = 'n4',
    Number6 = 'n6',
    Number12 = 'n12',
    Number50 = 'n50',
}

export class TwentyFourDHelper {
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

        'c-1-2': { button: '1st Column,2nd Column', group: 'n' },
        'c-2-3': { button: '2nd Column,3rd Column', group: 'n' },
        'c-3-4': { button: '3rd Column,4th Column', group: 'n' },
        'c-4-5': { button: '4th Column,5th Column', group: 'n' },
        'c-5-6': { button: '5th Column,6th Column', group: 'n' },

        'r-1-2': { button: '1st Row,2nd Row', group: 'n12' },
        'r-3-4': { button: '3rd Row,4th Row', group: 'n' },
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
    static getBet50Keys = Object.keys(this.bets50);
}
