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
        return /^p6(?![b]$)/.test(item.pcode);
    };

    static is24DJackpot = (item: Transaction<string>): item is Transaction<Pcode24DJackpot> => {
        // return /^p6[bc]$/.test(item.pcode);
        // return item.pcode === 'p6b' || item.pcode === 'p6c';
        return /^p6[b]$/.test(item.pcode);
    };

    static isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
        return /^p7/.test(item.pcode);
    };

    static isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
        return /^m22/.test(item.pcode);
    };

    static isSicboDice = (item: Transaction<string>): item is Transaction<PcodeSicboDice> => {
        return /^p12/.test(item.pcode);
    };

    static isRedWhite = (item: Transaction<string>): item is Transaction<PcodeRedWhite> => {
        return /^m11/.test(item.pcode);
    };

    static isShioFight = (item: Transaction<string>): item is Transaction<PcodeShioFight> => {
        return /^m27/.test(item.pcode);
    };

    static is48D = (item: Transaction<string>): item is Transaction<Pcode48D> => {
        return /^m35/.test(item.pcode);
    };

    static isDomino = (item: Transaction<string>): item is Transaction<PcodeDomino> => {
        return /^m41/.test(item.pcode);
    };

    static isCeme = (item: Transaction<string>): item is Transaction<PcodeCeme> => {
        return /^m46/.test(item.pcode);
    };
}
