import {
    Pcode,
    Pcode12D,
    Pcode12DThunder,
    Pcode24D,
    Pcode24DJackpot,
    Pcode48D,
    PcodeBaccarat,
    PcodeCeme,
    PcodeDice6,
    PcodeDice6Fever,
    PcodeDomino,
    PcodeDragonTigerWild,
    PcodeRedWhite,
    PcodeRoulette,
    PcodeShioFight,
    PcodeSicboDice,
    Transaction,
} from '../../types';

export function groupTransactionsByDate(
    transactions: Transaction<Pcode>[],
): Record<string, Transaction<Pcode>[]> {
    return transactions.reduce(
        (acc, transaction) => {
            const date = transaction.tglbel.split('T')[0];
            if (!acc[date]) {
                acc[date] = [];
            }

            acc[date].push(transaction);
            return acc;
        },
        {} as Record<string, Transaction<Pcode>[]>,
    );
}

export class TransactionHelper {
    static is24D = (item: Transaction<string>): item is Transaction<Pcode24D> => {
        return item.pcode.startsWith('p6') && !item.pcode.startsWith('p6b');
    };

    static is24DJackpot = (item: Transaction<string>): item is Transaction<Pcode24DJackpot> => {
        return item.pcode.startsWith('p6b');
    };

    static isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
        return item.pcode.startsWith('p7');
    };

    static is12D = (item: Transaction<string>): item is Transaction<Pcode12D> => {
        return item.pcode.startsWith('p9') && !item.pcode.startsWith('p9b');
    };

    static is12DThunder = (item: Transaction<string>): item is Transaction<Pcode12DThunder> => {
        return item.pcode.startsWith('p9b');
    };

    static isDragonTigerWild = (
        item: Transaction<string>,
    ): item is Transaction<PcodeDragonTigerWild> => {
        return /^m23[bc]$/.test(item.pcode);
    };

    static isSicboDice = (item: Transaction<string>): item is Transaction<PcodeSicboDice> => {
        return item.pcode.startsWith('p12');
    };

    static isDice6 = (item: Transaction<string>): item is Transaction<PcodeDice6> => {
        return item.pcode.startsWith('m8') && !item.pcode.startsWith('m8b');
    };

    static isDice6Fever = (item: Transaction<string>): item is Transaction<PcodeDice6Fever> => {
        return item.pcode.startsWith('m8b');
    };

    static isRedWhite = (item: Transaction<string>): item is Transaction<PcodeRedWhite> => {
        return item.pcode.startsWith('m11');
    };

    static isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
        return item.pcode.startsWith('m22');
    };

    static isDragonTigerWild = (
        item: Transaction<string>,
    ): item is Transaction<PcodeDragonTigerWild> => {
        return /^m23[bc]$/.test(item.pcode);
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
