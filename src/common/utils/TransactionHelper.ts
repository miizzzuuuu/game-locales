import {
    Pcode,
    Pcode12D,
    Pcode12DThunder,
    Pcode24D,
    Pcode24DJackpot,
    Pcode24DSpin,
    Pcode48D,
    PcodeBaccarat,
    PcodeBilliards,
    PcodeCeme,
    PcodeDice6,
    PcodeDice6Fever,
    PcodeDomino,
    PcodeDragonTiger,
    PcodeDragonTigerWild,
    PcodeFantan,
    PcodeHeadTail,
    PcodeMonopoly,
    PcodeOglok,
    PcodePokerDice,
    PcodeRoulette,
    PcodeShioFight,
    PcodeSicboDice,
    PcodeSuwit,
    PcodeXocDia,
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

export const is24D = (item: Transaction<string>): item is Transaction<Pcode24D> => {
    return item.pcode.startsWith('p6') && !item.pcode.startsWith('p6b');
};

export const is24DJackpot = (item: Transaction<string>): item is Transaction<Pcode24DJackpot> => {
    return item.pcode.startsWith('p6b');
};

export const isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> => {
    return item.pcode.startsWith('p7');
};

export const is12D = (item: Transaction<string>): item is Transaction<Pcode12D> => {
    return item.pcode.startsWith('p9') && !item.pcode.startsWith('p9b');
};

export const is12DThunder = (item: Transaction<string>): item is Transaction<Pcode12DThunder> => {
    return item.pcode.startsWith('p9b');
};

export const isSicboDice = (item: Transaction<string>): item is Transaction<PcodeSicboDice> => {
    return item.pcode.startsWith('p12');
};

export const is24DSpin = (item: Transaction<string>): item is Transaction<Pcode24DSpin> => {
    return item.pcode.startsWith('m6');
};

export const isOglok = (item: Transaction<string>): item is Transaction<PcodeOglok> => {
    return item.pcode.startsWith('m7');
};

export const isDice6 = (item: Transaction<string>): item is Transaction<PcodeDice6> => {
    return item.pcode.startsWith('m8') && !item.pcode.startsWith('m8b');
};

export const isDice6Fever = (item: Transaction<string>): item is Transaction<PcodeDice6Fever> => {
    return item.pcode.startsWith('m8b');
};

export const isHeadTail = (item: Transaction<string>): item is Transaction<PcodeHeadTail> => {
    return item.pcode.startsWith('m10');
};

export const isRedWhite = (item: Transaction<string>): item is Transaction<PcodeHeadTail> => {
    return item.pcode.startsWith('m11');
};

export const isBilliards = (item: Transaction<string>): item is Transaction<PcodeBilliards> => {
    return item.pcode.startsWith('m13');
};

export const isPokerDice = (item: Transaction<string>): item is Transaction<PcodePokerDice> => {
    return item.pcode.startsWith('m14');
};

export const isSuwit = (item: Transaction<string>): item is Transaction<PcodeSuwit> => {
    return item.pcode.startsWith('m19');
};

export const isMonopoly = (item: Transaction<string>): item is Transaction<PcodeMonopoly> => {
    return item.pcode.startsWith('m20');
};

export const isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> => {
    return item.pcode.startsWith('m22');
};

export const isDragonTiger = (item: Transaction<string>): item is Transaction<PcodeDragonTiger> => {
    return (
        item.pcode.startsWith('m23') &&
        !item.pcode.startsWith('m23b') &&
        !item.pcode.startsWith('m23c')
    );
};

export const isDragonTigerWild = (
    item: Transaction<string>,
): item is Transaction<PcodeDragonTigerWild> => {
    return /^m23[bc]$/.test(item.pcode);
};

export const isFantan = (item: Transaction<string>): item is Transaction<PcodeFantan> => {
    return item.pcode.startsWith('m25');
};

export const isShioFight = (item: Transaction<string>): item is Transaction<PcodeShioFight> => {
    return item.pcode.startsWith('m27');
};

export const is48D = (item: Transaction<string>): item is Transaction<Pcode48D> => {
    return item.pcode.startsWith('m35');
};

export const isXocDia = (item: Transaction<string>): item is Transaction<PcodeXocDia> => {
    return item.pcode.startsWith('m40');
};

export const isDomino = (item: Transaction<string>): item is Transaction<PcodeDomino> => {
    return item.pcode.startsWith('m41');
};

export const isCeme = (item: Transaction<string>): item is Transaction<PcodeCeme> => {
    return item.pcode.startsWith('m46');
};
