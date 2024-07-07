import { Sound } from '../../services/sound';
import { gameResultAction, loadNewValueAction } from '../actions/socketAction';
import { AppStartListening } from '../listenerMiddleware';
import { placeMultiBet } from '../slice/betAddSlice';
import { resetBetSend, selectAllBetSend } from '../slice/betSendSlice';
import { setMessage } from '../slice/gameStateSlice';
import { LastBetState, setLastBetData } from '../slice/lastBetsSlice';
import { selectBalance } from '../slice/playerSlice';
import { setResult } from '../slice/resultSlice';
import { openTime } from '../slice/timerSlice';

export const loadNewValueListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: loadNewValueAction,
        effect: async (action, listenerApi) => {
            console.log('middleware: loadNewValue', { action, listenerApi });

            const data = action.payload;

            const dispatch = listenerApi.dispatch;
            const state = listenerApi.getState();

            dispatch(openTime(Number(data.timer)));

            const betSend = selectAllBetSend(state);
            if (betSend.length > 0) {
                const dataLastBet: LastBetState = {
                    data: [...betSend],
                    periode: state.betSend.periode,
                };

                dispatch(resetBetSend());
                dispatch(setLastBetData(dataLastBet));

                const autoRebet = state.settings.autoRebet;
                if (autoRebet) {
                    // cek balance
                    const balance = selectBalance(state);

                    let totalLastBet = 0;
                    dataLastBet.data.forEach((bet) => {
                        totalLastBet += bet.value;
                    });

                    if (totalLastBet > balance) {
                        dispatch(
                            setMessage({
                                value: 'autoplay failed, insufficient_balance',
                                type: 'danger',
                            }),
                        );
                        return;
                    }

                    dispatch(placeMultiBet(dataLastBet.data));
                }
            }

            Sound.playGameStart();
            Sound.playOpenBet();
        },
    });
};

export const gameResultListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: gameResultAction,
        effect: async (action, listenerApi) => {
            console.log('middleware: gameResult', {
                action,
                listenerApi,
            });

            const dispatch = listenerApi.dispatch;

            const resultNumber = Number(action.payload.win);
            dispatch(setResult(resultNumber));
        },
    });
};
