import { Bet } from '../../types';

export enum TypeGroup {
    Wild = 'wild',
    Dragon = 'dragon',
    Tiger = 'tiger',
    Pair = 'pair',
    Tie = 'tie',
    SuperWild = 'superwild',
}

export const BETS: Record<string, Bet> = {
    // top
    'dragon-wild': { button: 'dragonwild', group: 'wild' },
    'tiger-wild': { button: 'tigerwild', group: 'wild' },

    // mid
    dragon: { button: 'dragon', group: 'dragon' },
    tiger: { button: 'tiger', group: 'tiger' },

    // bottom
    'dragon-pair': { button: 'dragonpair', group: 'pair' },
    'tiger-pair': { button: 'tigerpair', group: 'pair' },

    // center
    superwild: { button: 'superwild', group: 'superwild' },
    tie: { button: 'tie', group: 'tie' },
};

export const payoutGroup: Record<string, number> = {
    'dragon@dragon': 1,
    'tiger@tiger': 1,
    'tie@tie': 11,
    'dragonwild@wild': 24,
    'tigerwild@wild': 24,
    'superwild@superwild': 127,
    'dragonpair@pair': 11,
    'tigerpair@pair': 11,
};
