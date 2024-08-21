import { GameHelper } from '../../common/utils/GameHelper';
import { confirmBet } from '../../services/api/sendBet';
import { AppStartListening } from '../listenerMiddleware';
import { resetBetAdd, selectAllBetAdd, selectTotalBetAdd } from '../slice/betAddSlice';
import { selectPeriod } from '../slice/gameSlice';
import { setShowPatternBeforeClose, togglePatternUI } from '../slice/gameStateSlice';
import { selectBalance } from '../slice/playerSlice';
import { closeTime, openTime } from '../slice/timerSlice';
import { AppDispatch, RootState } from '../store';

const actionClose = (dispatch: AppDispatch, state?: RootState) => {
    if (state) {
        const betAdd = selectAllBetAdd(state);

        const showPatternUI = state.gameState.showPatternUI;
        if (showPatternUI) {
            dispatch(setShowPatternBeforeClose(true));
            dispatch(togglePatternUI());
        } else {
            dispatch(setShowPatternBeforeClose(false));
        }

        if (betAdd.length > 0) {
            const totalBetAdd = selectTotalBetAdd(state);
            const balance = selectBalance(state);
            const period = selectPeriod(state);

            const param = {
                button_bet: betAdd,
                total_bet: totalBetAdd,
                game: GameHelper.pcode,
                transId: '',
            };
            console.log('send bet param', param);

            confirmBet(dispatch, param, period, balance);
        } else {
            dispatch(resetBetAdd());
        }
    }
};

const actionOpen = (dispatch: AppDispatch, state?: RootState) => {
    if (state) {
        const showPatternUIBeforeClose = state.gameState.showPatternUIBeforeClose;
        if (showPatternUIBeforeClose) {
            dispatch(togglePatternUI());
        }
    }
};

export const closeTimeListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: closeTime,
        effect: async (_, listenerApi) => {
            console.log('middleware: closeTime');

            const dispatch = listenerApi.dispatch as AppDispatch;
            const curState = listenerApi.getState();

            actionClose(dispatch, curState);
        },
    });
};

export const openTimeListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: openTime,
        effect: async (_, listenerApi) => {
            console.log('middleware: openTime');

            const dispatch = listenerApi.dispatch as AppDispatch;
            const curState = listenerApi.getState();

            actionOpen(dispatch, curState);
        },
    });
};
