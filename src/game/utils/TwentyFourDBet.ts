import { GameBetHelper } from '../../common/utils/BetHelper';
import { TypeGroup } from './TwentyFourDHelper';

export class TwentyFourDBet implements GameBetHelper {
    GroupBet50 = ['n50'];

    oppositeBet50: Record<string, string> = {
        red: `black-${TypeGroup.Number50}`,
        black: `red-${TypeGroup.Number50}`,
        odd: `even-${TypeGroup.Number50}`,
        even: `odd-${TypeGroup.Number50}`,
        small: `big-${TypeGroup.Number50}`,
        big: `small-${TypeGroup.Number50}`,
    };
}
