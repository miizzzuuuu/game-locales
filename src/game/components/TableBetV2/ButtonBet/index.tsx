import { Bet } from '../../../../types';

export interface BetButtonIProps {
    bet: Bet;
    placeBetHandler: (button: string, group: string) => void;
}
