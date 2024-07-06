import { AppStartListening } from '../listenerMiddleware';
import { confirmBetFullfiled } from '../slice/betAddSlice';
import { addBetSend } from '../slice/betSendSlice';
import { updateBalance } from '../slice/playerSlice';

export const confirmBetFullfiledListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: confirmBetFullfiled,
        effect: async (action, listenerApi) => {
            console.log('middleware: confirmBetFullfiled');

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
