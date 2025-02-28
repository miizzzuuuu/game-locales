import i18n from '../../services/i18next/index';
import { Sound } from '../../services/sound';
import { BetSend } from '../../types';
import { gameResultAction, loadNewValueAction, noGameAction } from '../actions/socketAction';
import { AppStartListening } from '../listenerMiddleware';
import { newAddBetPeriod, placeMultiBet, resetBetSend, selectBetSend } from '../slice/bets';
import { setNewSet, updateGamePeriod, updateGameSet } from '../slice/gameSlice';
import { setMessage } from '../slice/gameStateSlice';
import { LastBetState, setLastBetData } from '../slice/lastBetsSlice';
import { selectBalance } from '../slice/playerSlice';
import { setResult } from '../slice/resultSlice';
import { openTime } from '../slice/timerSlice';

export const loadNewValueListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: loadNewValueAction,
        effect: (action, listenerApi) => {
            console.log('middleware: loadNewValue', { action, listenerApi });

            const data = action.payload;

            const dispatch = listenerApi.dispatch;
            const state = listenerApi.getState();

            dispatch(openTime(Number(data.timer)));
            dispatch(updateGamePeriod(data.periode));

            if (state.game.newSet) {
                dispatch(setNewSet(false));
            }
            if (data.shoePeriode) {
                dispatch(updateGameSet(data.shoePeriode));
            }
            dispatch(newAddBetPeriod());

            const betSend = selectBetSend(state);
            const betSendEntries = Object.entries(betSend);

            if (betSendEntries.length > 0) {
                const betSendFormated: BetSend[] = betSendEntries.map(([key, value]) => {
                    const [button, group] = key.split('@');

                    return { button, group, value };
                });

                const dataLastBet: LastBetState = {
                    data: betSendFormated,
                    periode: 0,
                };

                dispatch(resetBetSend());
                dispatch(setLastBetData(dataLastBet));

                const autoRebet = state.settings.autoRebet;
                if (autoRebet) {
                    // cek balance
                    const balance = selectBalance(state);

                    let totalLastBet = 0;
                    betSendFormated.forEach((bet) => {
                        totalLastBet += bet.value;
                    });

                    if (totalLastBet > balance) {
                        dispatch(
                            setMessage({
                                value: i18n.t('autobet-error-insufficient-balance'),
                                type: 'danger',
                            }),
                        );
                        return;
                    }

                    dispatch(placeMultiBet(betSendFormated));
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
        effect: (action, listenerApi) => {
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

export const noGameListenere = (startListening: AppStartListening) => {
    startListening({
        actionCreator: noGameAction,
        effect: (action, listenerApi) => {
            console.log('middleware: noGame', {
                action,
                listenerApi,
            });

            const dispatch = listenerApi.dispatch;

            dispatch(
                setMessage({
                    value: 'no game',
                    type: 'no-game',
                }),
            );
        },
    });
};
