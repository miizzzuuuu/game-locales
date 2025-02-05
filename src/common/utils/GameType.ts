import { Transaction } from '../../types';

type BasePattern = {
    pattern: string;
    type: string;
};

type RegexPattern = BasePattern & {
    isRegex: true;
};

type PrefixPattern = BasePattern & {
    exclude?: readonly string[];
};

type PatternType = RegexPattern | PrefixPattern;

export const PCODE_PATTERNS: Record<string, PatternType> = {
    '24D': {
        pattern: 'p6',
        exclude: ['p6b'],
        type: 'Pcode24D',
    },
    '24DJackpot': {
        pattern: 'p6b',
        type: 'Pcode24DJackpot',
    },
    Roulette: {
        pattern: 'p7',
        exclude: ['p7e', 'p7f'],
        type: 'PcodeRoulette',
    },
    SoccerRoulette: {
        pattern: 'p7e',
        type: 'PcodeRouletteSoccer',
    },
    '12D': {
        pattern: 'p9',
        exclude: ['p9b'],
        type: 'Pcode12D',
    },
    '12DThunder': {
        pattern: 'p9b',
        type: 'Pcode12DThunder',
    },
    SicboDice: {
        pattern: 'p12',
        type: 'PcodeSicboDice',
    },
    '24DSpin': {
        pattern: 'm6',
        type: 'Pcode24DSpin',
    },
    Oglok: {
        pattern: 'm7',
        type: 'PcodeOglok',
    },
    Dice6: {
        pattern: 'm8',
        exclude: ['m8b'],
        type: 'PcodeDice6',
    },
    Dice6Fever: {
        pattern: 'm8b',
        type: 'PcodeDice6Fever',
    },
    HeadTail: {
        pattern: 'm10',
        type: 'PcodeHeadTail',
    },
    RedWhite: {
        pattern: 'm11',
        type: 'PcodeHeadTail',
    },
    Billiards: {
        pattern: 'm13',
        type: 'PcodeBilliards',
    },
    PokerDice: {
        pattern: 'm14',
        type: 'PcodePokerDice',
    },
    Suwit: {
        pattern: 'm19',
        type: 'PcodeSuwit',
    },
    Monopoly: {
        pattern: 'm20',
        type: 'PcodeMonopoly',
    },
    Baccarat: {
        pattern: 'm22',
        type: 'PcodeBaccarat',
    },
    DragonTiger: {
        pattern: 'm23',
        exclude: ['m23b', 'm23c'],
        type: 'PcodeDragonTiger',
    },
    DragonTigerWild: {
        pattern: '^m23[bc]$',
        isRegex: true,
        type: 'PcodeDragonTigerWild',
    },
    Fantan: {
        pattern: 'm25',
        type: 'PcodeFantan',
    },
    ShioFight: {
        pattern: 'm27',
        type: 'PcodeShioFight',
    },
    '48D': {
        pattern: 'm35',
        type: 'Pcode48D',
    },
    XocDia: {
        pattern: 'm40',
        type: 'PcodeXocDia',
    },
    Domino: {
        pattern: 'm41',
        type: 'PcodeDomino',
    },
    Ceme: {
        pattern: 'm46',
        type: 'PcodeCeme',
    },
} as const;

export type GameType = keyof typeof PCODE_PATTERNS;

// Update checkGameType function
export function checkGameType(item: Transaction<string>, gameType: GameType): boolean {
    const pattern = PCODE_PATTERNS[gameType];
    if ('isRegex' in pattern && pattern.isRegex) {
        return new RegExp(pattern.pattern).test(item.pcode);
    }
    if ('exclude' in pattern && pattern.exclude?.some((ex) => item.pcode.startsWith(ex))) {
        return false;
    }
    return item.pcode.startsWith(pattern.pattern);
}
