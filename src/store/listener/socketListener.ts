import { Sound } from '../../services/sound';
import { gameResultAction, loadNewValueAction, scanNumberAction } from '../actions/socketAction';
import { AppStartListening } from '../listenerMiddleware';
import { setMessage } from '../slice/gameStateSlice';
import { LastBetState, setLastBetData } from '../slice/lastBetsSlice';
import { selectBalance } from '../slice/playerSlice';
import { doneResult, setResult, setScanNumber } from '../slice/resultSlice';
import { openTime } from '../slice/timerSlice';

import i18n from '../../services/i18next/index';
import { HistoryItem, addHistory } from '../slice/historySlice';
import { setNewSet, updateGamePeriod, updateGameSet } from '../slice/gameSlice';
import { newAddBetPeriod, placeMultiBet, resetBetSend, selectBetSend } from '../slice/bets';
import { BetSend } from '../../types';

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
            dispatch(setScanNumber(undefined));

            const betSend = selectBetSend(state);
            const betSendEntries = Object.entries(betSend);

            if (betSendEntries.length > 0) {
                const betSendFormated: BetSend[] = betSendEntries.map(([key, value]) => {
                    const [button, group] = key.split('-');

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
                                value: i18n.t('common.autobet-error-insufficient-balance'),
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

export const scanNumberListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: scanNumberAction,
        effect: async (action, listenerApi) => {
            console.log('middleware: scanNumber');
            const dispatch = listenerApi.dispatch;
            const scanNumber = action.payload;
            dispatch(setScanNumber(scanNumber));
            if (scanNumber.submit) {
                debounce(() => {
                    dispatch(doneResult(scanNumber as any));
                    const formattedDate = getFormattedDate();
                    const result: HistoryItem = {
                        ...scanNumber,
                        result: scanNumber.win,
                        gamekey: scanNumber.gameSet,
                        value: scanNumber.value,
                        hitung: '1',
                        tanggal: formattedDate,
                    };
                    dispatch(addHistory(result as any));
                }, 5000)();
            }
        },
    });
};

let timerId: any;
function debounce(callback: () => void, wait: number) {
    return () => {
        if (timerId) {
        } else {
            timerId = setTimeout(() => {
                clearTimeout(timerId);
                timerId = undefined;
            }, wait);
            callback();
        }
    };
}

function padNumber(number: number) {
    return number.toString().padStart(2, '0');
}

function getFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = padNumber(currentDate.getMonth() + 1); // Months are zero-indexed
    const day = padNumber(currentDate.getDate());
    const hours = padNumber(currentDate.getHours());
    const minutes = padNumber(currentDate.getMinutes());
    const seconds = padNumber(currentDate.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
