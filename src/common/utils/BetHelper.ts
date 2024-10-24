export interface GameBetHelper {
    GroupBet50: string[];
    oppositeBet50: Record<string, string>;
}

let gameBet: GameBetHelper | null = null;

export const getGameBetHelper = () => gameBet;
export const setGameBetHelper = (value: GameBetHelper) => {
    gameBet = value;
};
