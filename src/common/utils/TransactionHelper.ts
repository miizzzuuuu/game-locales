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
    PcodeRouletteSoccer,
    PcodeShioFight,
    PcodeSicboDice,
    PcodeSuwit,
    PcodeXocDia,
    Transaction,
} from '../../types';
import { checkGameType } from './GameType';

export function groupTransactionsByDate(
    transactions: Transaction<Pcode>[],
): Record<string, Transaction<Pcode>[]> {
    const map = new Map<string, Transaction<Pcode>[]>();

    for (const transaction of transactions) {
        const date = transaction.tglbel.split('T')[0];
        const group = map.get(date);
        if (group) {
            group.push(transaction);
        } else {
            map.set(date, [transaction]);
        }
    }

    return Object.fromEntries(map);
}

export const is24D = (item: Transaction<string>): item is Transaction<Pcode24D> =>
    checkGameType(item, '24D');

export const is24DJackpot = (item: Transaction<string>): item is Transaction<Pcode24DJackpot> =>
    checkGameType(item, '24DJackpot');

export const isRoulette = (item: Transaction<string>): item is Transaction<PcodeRoulette> =>
    checkGameType(item, 'Roulette');

export const isSoccerRoulette = (
    item: Transaction<string>,
): item is Transaction<PcodeRouletteSoccer> => checkGameType(item, 'SoccerRoulette');

export const is12D = (item: Transaction<string>): item is Transaction<Pcode12D> =>
    checkGameType(item, '12D');

export const is12DThunder = (item: Transaction<string>): item is Transaction<Pcode12DThunder> =>
    checkGameType(item, '12DThunder');

export const isSicboDice = (item: Transaction<string>): item is Transaction<PcodeSicboDice> =>
    checkGameType(item, 'SicboDice');

export const is24DSpin = (item: Transaction<string>): item is Transaction<Pcode24DSpin> =>
    checkGameType(item, '24DSpin');

export const isOglok = (item: Transaction<string>): item is Transaction<PcodeOglok> =>
    checkGameType(item, 'Oglok');

export const isDice6 = (item: Transaction<string>): item is Transaction<PcodeDice6> =>
    checkGameType(item, 'Dice6');

export const isDice6Fever = (item: Transaction<string>): item is Transaction<PcodeDice6Fever> =>
    checkGameType(item, 'Dice6Fever');

export const isHeadTail = (item: Transaction<string>): item is Transaction<PcodeHeadTail> =>
    checkGameType(item, 'HeadTail');

export const isRedWhite = (item: Transaction<string>): item is Transaction<PcodeHeadTail> =>
    checkGameType(item, 'RedWhite');

export const isBilliards = (item: Transaction<string>): item is Transaction<PcodeBilliards> =>
    checkGameType(item, 'Billiards');

export const isPokerDice = (item: Transaction<string>): item is Transaction<PcodePokerDice> =>
    checkGameType(item, 'PokerDice');

export const isSuwit = (item: Transaction<string>): item is Transaction<PcodeSuwit> =>
    checkGameType(item, 'Suwit');

export const isMonopoly = (item: Transaction<string>): item is Transaction<PcodeMonopoly> =>
    checkGameType(item, 'Monopoly');

export const isBaccarat = (item: Transaction<string>): item is Transaction<PcodeBaccarat> =>
    checkGameType(item, 'Baccarat');

export const isDragonTiger = (item: Transaction<string>): item is Transaction<PcodeDragonTiger> =>
    checkGameType(item, 'DragonTiger');

export const isDragonTigerWild = (
    item: Transaction<string>,
): item is Transaction<PcodeDragonTigerWild> => checkGameType(item, 'DragonTigerWild');

export const isFantan = (item: Transaction<string>): item is Transaction<PcodeFantan> =>
    checkGameType(item, 'Fantan');

export const isShioFight = (item: Transaction<string>): item is Transaction<PcodeShioFight> =>
    checkGameType(item, 'ShioFight');

export const is48D = (item: Transaction<string>): item is Transaction<Pcode48D> =>
    checkGameType(item, '48D');

export const isXocDia = (item: Transaction<string>): item is Transaction<PcodeXocDia> =>
    checkGameType(item, 'XocDia');

export const isDomino = (item: Transaction<string>): item is Transaction<PcodeDomino> =>
    checkGameType(item, 'Domino');

export const isCeme = (item: Transaction<string>): item is Transaction<PcodeCeme> =>
    checkGameType(item, 'Ceme');
