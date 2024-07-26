import { DragonTigerBBet } from "../../game/utils/DragonTigerBBet";

export interface GameBetHelper {
    GroupBet50: string[];
    oppositeBet50: Record<string, string>;
}

export class BetHelper {
    static game: GameBetHelper | DragonTigerBBet |null;
}
