import {
    Pcode,
    Pcode24D,
    Pcode24DJackpot,
    Pcode48D,
    PcodeBaccarat,
    PcodeCeme,
    PcodeDomino,
    PcodeRedWhite,
    PcodeRoulette,
    PcodeShioFight,
    PcodeSicboDice,
    Transaction,
} from '../../types';

export class TransactionHelper {
    static groupTransactionsByDate(transactions: Transaction<Pcode>[]): {
        [key: string]: Transaction<Pcode>[];
    } {
        return transactions.reduce(
            (acc, transaction) => {
                const date = transaction.tglbel.split('T')[0];
                if (!acc[date]) {
                    acc[date] = [];
                }

                acc[date].push(transaction);
                return acc;
            },
            {} as { [key: string]: Transaction<Pcode>[] },
        );
    }

    static is24D = (item: Transaction<string>): item is Transaction<Pcode24D> => {
        return item.pcode.startsWith('p6') && !item.pcode.startsWith('p6b');
    };

    static is24DJackpot = (item: Transaction<string>): item is Transaction<Pcode24DJackpot> => {
        return item.pcode.startsWith('p6b');
    };

    static isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
        return item.pcode.startsWith('p7');
    };

    static isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
        return item.pcode.startsWith('m22');
    };

    static isSicboDice = (item: Transaction<string>): item is Transaction<PcodeSicboDice> => {
        return item.pcode.startsWith('p12');
    };

    static isRedWhite = (item: Transaction<string>): item is Transaction<PcodeRedWhite> => {
        return item.pcode.startsWith('m11');
    };

    static isShioFight = (item: Transaction<string>): item is Transaction<PcodeShioFight> => {
        return item.pcode.startsWith('m27');
    };

    static is48D = (item: Transaction<string>): item is Transaction<Pcode48D> => {
        return item.pcode.startsWith('m35');
    };

    static isDomino = (item: Transaction<string>): item is Transaction<PcodeDomino> => {
        return item.pcode.startsWith('m41');
    };

    static isCeme = (item: Transaction<string>): item is Transaction<PcodeCeme> => {
        return item.pcode.startsWith('m46');
    };
}
