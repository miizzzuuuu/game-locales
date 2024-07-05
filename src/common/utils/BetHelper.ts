export interface GameSpesificHelper {
    GroupBet50: string[];
    oppositeBet50: Record<string, string>;
}

export class BetHelper {
    static game: GameSpesificHelper | null;
}
