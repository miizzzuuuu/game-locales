import { AppStartListening } from '../listenerMiddleware';
import { updateBalance } from '../slice/playerSlice';
import { clearWinAmount, endWinAnimation } from '../slice/resultSlice';
import { RootState } from '../store';

export const endWinAnimationListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: endWinAnimation,
        effect: async (_, listenerApi) => {
            console.log('middleware: endWinAnimation');

            const state = listenerApi.getState() as RootState;

            if (state.result.winAmount > 0) {
                const newBalance = state.player.balance + state.result.winAmount;

                const dispatch = listenerApi.dispatch;
                dispatch(updateBalance(newBalance));
                dispatch(clearWinAmount());
            }
        },
    });
};
