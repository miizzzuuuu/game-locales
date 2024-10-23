import { GameBetHelper } from '../../common/utils/BetHelper';
import { TypeGroup } from './_24DHelper';

export class _24DBet implements GameBetHelper {
    GroupBet50 = ['n50'];

    oppositeBet50: Record<string, string> = {
        Red: `Black@${TypeGroup.Number50}`,
        Black: `Red@${TypeGroup.Number50}`,
        Objectdd: `Even@${TypeGroup.Number50}`,
        Even: `Odd@${TypeGroup.Number50}`,
        Small: `Big@${TypeGroup.Number50}`,
        Big: `Small@${TypeGroup.Number50}`,
    };
}
