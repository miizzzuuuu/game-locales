import { Pcode, Pcode24D, PcodeBaccarat, PcodeRoulette, Transaction } from '../../types';

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
        return /^p6/.test(item.pcode);
    };

    static isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
        return /^p7/.test(item.pcode);
    };

    static isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
        return /^m22/.test(item.pcode);
    };
}
