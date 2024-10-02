import { AppStartListening } from '../listenerMiddleware';
import { addBetSend, confirmBetFullfiled } from '../slice/bets';

import { updateBalance } from '../slice/playerSlice';

export const confirmBetFullfiledListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: confirmBetFullfiled,
        effect: (action, listenerApi) => {
            const newBalance = action.payload.balance - action.payload.total_bet;

            listenerApi.dispatch(
                addBetSend({
                    bet: action.payload.bet,
                    total_bet: action.payload.total_bet,
                    periode: action.payload.periode,
                }),
            );

            listenerApi.dispatch(updateBalance(newBalance));
        },
    });
};
