export interface GameBetHelper {
    GroupBet50: string[];
    oppositeBet50: Record<string, string>;
}

export class BetHelper {
    static game: GameBetHelper | null;
}
