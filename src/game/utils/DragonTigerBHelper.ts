import { Bet } from '../../types';

export enum TypeGroup {
    Wild = 'wild',
    Dragon = 'dragon',
    Tiger = 'tiger',
    Pair = 'pair',
    Tie = 'tie',
    SuperWild = 'superwild',
}

export class DragonTigerBHelper {
    static betsTop = {
        'dragon-wild': { button: 'dragonwild', group: 'wild' },
        'tiger-wild': { button: 'tigerwild', group: 'wild' },
    };
    static betsMid = {
        dragon: { button: 'dragon', group: 'dragon' },
        tiger: { button: 'tiger', group: 'tiger' },
    };
    static betsBottom = {
        'dragon-pair': { button: 'dragonpair', group: 'pair' },
        'tiger-pair': { button: 'tigerpair', group: 'pair' },
    };

    static betsCenter = {
        superwild: { button: 'superwild', group: 'superwild' },
        tie: { button: 'tie', group: 'tie' },
    };

    static bets: Record<string, Bet> = {
        ...this.betsTop,
        ...this.betsMid,
        ...this.betsBottom,
        ...this.betsCenter,
    };

    static payoutGroup: Record<string, number> = {
        'dragon-dragon': 1,
        'tiger-tiger': 1,
        'tie-tie': 11,
        'dragonwild-wild': 24,
        'tigerwild-wild': 24,
        'superwild-superwild': 127,
        'dragonpair-pair': 11,
        'tigerpair-pair': 11,
    };
}
