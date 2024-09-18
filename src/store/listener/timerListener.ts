import { Features } from '../../common/utils/Features';
import { GameHelper } from '../../common/utils/GameHelper';
import { confirmBet } from '../../services/api/sendBet';
import { BetSend } from '../../types';
import { AppStartListening } from '../listenerMiddleware';
import { resetBetAdd, selectBetAdd, selectTotalBetAdd } from '../slice/bets';
// import { resetBetAdd, selectAllBetAdd, selectTotalBetAdd } from '../slice/betAddSlice';
import { selectPeriod } from '../slice/gameSlice';
import { setShowPatternBeforeClose, togglePatternUI } from '../slice/gameStateSlice';
import { selectBalance } from '../slice/playerSlice';
import { closeTime, openTime } from '../slice/timerSlice';
import { AppDispatch, RootState } from '../store';

const actionClose = (dispatch: AppDispatch, state?: RootState) => {
    if (state) {
        const betAdd = selectBetAdd(state);

        if (Features.BUTTON_PATTERN) {
            const showPatternUI = state.gameState.showPatternUI;
            if (showPatternUI) {
                dispatch(setShowPatternBeforeClose(true));
                dispatch(togglePatternUI());
            } else {
                dispatch(setShowPatternBeforeClose(false));
            }
        }

        const betAddEntries = Object.entries(betAdd);
        if (betAddEntries.length === 0) {
            dispatch(resetBetAdd());
            return;
        }

        const totalBetAdd = selectTotalBetAdd(state);
        const balance = selectBalance(state);
        const period = selectPeriod(state);

        const betAddToSend: BetSend[] = betAddEntries.map(([key, value]) => {
            const [button, group] = key.split('-');

            return { button, group, value };
        });

        const params = {
            button_bet: betAddToSend,
            total_bet: totalBetAdd,
            game: GameHelper.pcode,
            transId: '',
        };

        confirmBet(dispatch, params, period, balance);
    }
};

const actionOpen = (dispatch: AppDispatch, state?: RootState) => {
    if (Features.BUTTON_PATTERN && state) {
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
