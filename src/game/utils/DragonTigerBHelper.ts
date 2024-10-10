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
        'dragon-wild': { button: "dragonwild", group: "wild" },
        'tiger-wild': { button: "tigerwild", group: "wild" }
    };
    static betsMid = {
        'dragon': { button: "dragon", group: "dragon" },
        'tiger': { button: "tiger", group: "tiger" }
        
    };
    static betsBottom = {
        'dragon-pair': { button: "dragonpair", group: "pair" },
        'tiger-pair': { button: "tigerpair", group: "pair" }
    };

    static betsCenter = {
        "superwild": { button: "superwild", group: "superwild" },
        "tie": { button: "tie", group: "tie" }
    };

    static bets:  Record<string, Bet> = {
        ...this.betsTop,
        ...this.betsMid,
        ...this.betsBottom,
        ...this.betsCenter
    }

    static payoutGroup: { [group: Bet['group']]: { normal: string; hot?: string; cold?: string } } =
        {
            // [TypeGroup.Number1]: { normal: '4:1', cold: '2:1', hot: '7:1' },
            // [TypeGroup.Number2]: { normal: '1.5:1' },
            // [TypeGroup.Number4]: { normal: '0.25:1' },
            // [TypeGroup.Number50]: { normal: '0.95:1', cold: '0.5:1', hot: '1.5:1' },
        };
}
