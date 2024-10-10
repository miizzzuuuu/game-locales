import { GameBetHelper } from '../../common/utils/BetHelper';

export class DragonTigerBBet implements GameBetHelper {
    GroupBet50 = ['n50'];

    oppositeBet50: Record<string, string> = {

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
