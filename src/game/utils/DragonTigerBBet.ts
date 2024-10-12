import { GameBetHelper } from '../../common/utils/BetHelper';

export class DragonTigerBBet implements GameBetHelper {
    GroupBet50 = ['dragon', 'tiger'];

    oppositeBet50: Record<string, string> = {
        dragon: 'tiger-tiger',
        tiger: 'dragon-dragon',
    };
}
