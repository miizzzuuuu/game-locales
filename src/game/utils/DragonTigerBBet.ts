import { GameBetHelper } from '../../common/utils/BetHelper';
import { TypeGroup } from './TwentyFourDHelper';

export class DragonTigerBBet implements GameBetHelper {
    GroupBet50 = ['n50'];

    oppositeBet50: Record<string, string> = {
        Red: `Black-${TypeGroup.Number50}`,
        Black: `Red-${TypeGroup.Number50}`,
        Objectdd: `Even-${TypeGroup.Number50}`,
        Even: `Odd-${TypeGroup.Number50}`,
        Small: `Big-${TypeGroup.Number50}`,
        Big: `Small-${TypeGroup.Number50}`,
    };

    Dragon= "dragon";
    Tiger= "tiger";

    OppositeDragon = this.Tiger
    OppositeTiger = this.Dragon

    max50bet = ["dragon", "tiger"];

    getOpposite(group: typeof this.Dragon| typeof this.Tiger){
        if(group==this.Dragon)
            return this.OppositeDragon;
        if(group==this.Tiger)
            return this.OppositeTiger;
    }

}
