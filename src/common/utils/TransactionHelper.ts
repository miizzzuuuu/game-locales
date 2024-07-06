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
        return item.pcode === 'p6' || item.pcode === 'p6b';
    };

    static isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
        return (
            item.pcode === 'p7' ||
            item.pcode === 'p7b' ||
            item.pcode === 'p7c' ||
            item.pcode === 'p7d' ||
            item.pcode === 'p7e' ||
            item.pcode === 'p7f'
        );
    };

    static isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
        return (
            item.pcode === 'm22' ||
            item.pcode === 'm22b' ||
            item.pcode === 'm22c' ||
            item.pcode === 'm22d'
        );
    };
}
