import { BUTTON_CONFIG } from '../../common/utils/Features';
import { getPcode } from '../../common/utils/GameHelper';
import { confirmBet } from '../../services/api/sendBet';
import { BetSend } from '../../types';
import { AppStartListening } from '../listenerMiddleware';
import { resetBetAdd, selectBetAdd, selectTotalBetAdd } from '../slice/bets';
import { selectPeriod } from '../slice/gameSlice';
import { setShowRoadmapBeforeClose, toggleRoadmapUI } from '../slice/gameStateSlice';
import { selectBalance } from '../slice/playerSlice';
import { closeTime, openTime } from '../slice/timerSlice';
import { AppDispatch, RootState } from '../store';

const actionClose = (dispatch: AppDispatch, state?: RootState) => {
    if (state) {
        const betAdd = selectBetAdd(state);

        if (BUTTON_CONFIG.ROADMAP.enabled && state) {
            const showPatternUI = state.gameState.showRoadmapUI;
            if (showPatternUI) {
                dispatch(setShowRoadmapBeforeClose(true));
                dispatch(toggleRoadmapUI());
            } else {
                dispatch(setShowRoadmapBeforeClose(false));
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
            const [button, group] = key.split('@');

            return { button, group, value };
        });

        const params = {
            button_bet: betAddToSend,
            total_bet: totalBetAdd,
            game: getPcode(),
            transId: '',
            newlobby: true,
        };

        void confirmBet(dispatch, params, period, balance);
    }
};

const actionOpen = (dispatch: AppDispatch, state?: RootState) => {
    if (!BUTTON_CONFIG.ROADMAP.enabled || !state) {
        return;
    }

    const showPatternUIBeforeClose = state.gameState.showRoadmapUIBeforeClose;
    if (showPatternUIBeforeClose && !state.gameState.showRoadmapUI) {
        dispatch(toggleRoadmapUI());
    }
};

export const closeTimeListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: closeTime,
        effect: (_, listenerApi) => {
            console.log('middleware: closeTime');

            const dispatch = listenerApi.dispatch;
            const curState = listenerApi.getState();

            actionClose(dispatch, curState);
        },
    });
};

export const openTimeListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: openTime,
        effect: (_, listenerApi) => {
            console.log('middleware: openTime');

            const dispatch = listenerApi.dispatch;
            const curState = listenerApi.getState();

            actionOpen(dispatch, curState);
        },
    });
};
