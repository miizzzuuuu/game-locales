import { AppStartListening } from '../listenerMiddleware';
import { addBetSend, confirmBetFullfiled } from '../slice/bets';

import { updateBalance } from '../slice/playerSlice';

export const confirmBetFullfiledListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: confirmBetFullfiled,
        effect: (action, listenerApi) => {
            const dispatch = listenerApi.dispatch;

            const newBalance = action.payload.balance - action.payload.total_bet;

            dispatch(
                addBetSend({
                    bet: action.payload.bet,
                    total_bet: action.payload.total_bet,
                    periode: action.payload.periode,
                }),
            );

            dispatch(updateBalance(newBalance));
        },
    });
};
