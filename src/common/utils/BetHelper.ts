export interface GameBetHelper {
    GroupBet50: string[];
    oppositeBet50: Record<string, string>;
}

export const betHelper: { game: GameBetHelper | null } = {
    game: null,
};
