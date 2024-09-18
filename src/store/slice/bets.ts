import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BetSend, FetchStatus } from '../../types';

export interface State {
    add: Record<string, number>;
    send: Record<string, number>;

    history: Record<string, number>[];

    confirmStatus: FetchStatus | 'end';
    confirmError: null | string;
}

type BetSendActionAdd = {
    bet: BetSend[];
    total_bet: number;
    periode: number;
};

type ConfirmBetFullfiledAction = {
    periode: number;
    bet: BetSend[];
    total_bet: number;
    balance: number;
};

const initialState: State = {
    add: {},
    send: {},
    history: [],

    confirmStatus: 'idle',
    confirmError: null,
};

const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        placeSingleBet: (state, action: PayloadAction<BetSend>) => {
            state.history.push({ ...state.add });

            const { button, group, value } = action.payload;
            const key = `${button}-${group}`;

            if (state.add[key]) {
                state.add[key] += value;
                return;
            }

            state.add[key] = value;
        },
        placeMultiBet: (state, action: PayloadAction<BetSend[]>) => {
            state.history.push({ ...state.add });

            const betArray = action.payload;

            betArray.forEach((bet) => {
                const { button, group, value } = bet;
                const key = `${button}-${group}`;

                if (state.add[key]) {
                    state.add[key] += value;
                    return;
                }

                state.add[key] = value;
            });
        },
        undoBet: (state) => {
            const lastHistory = state.history.pop();

            if (lastHistory) {
                state.add = lastHistory;
            }
        },
        clearBet: (state) => {
            state.history.push({ ...state.add });

            state.add = {};
        },
        doubleBet: (state) => {
            state.history.push({ ...state.add });

            for (const property in state.add) {
                const bet = state.add[property];
                state.add[property] += bet;
            }
        },
        resetBetAdd: (state) => {
            state.history = [];
            state.add = {};
        },

        // submit bet
        confirmBetPending: (state) => {
            state.confirmStatus = 'pending';
        },
        confirmBetFullfiled: (state, _: PayloadAction<ConfirmBetFullfiledAction>) => {
            state.confirmStatus = 'fulfilled';

            state.add = {};
            state.history = [];
        },
        confirmBetRejected: (state, action: PayloadAction<string>) => {
            state.confirmStatus = 'rejected';
            state.confirmError = action.payload;

            state.add = {};
            state.history = [];
        },
        resetConfirmBet: (state) => {
            state.confirmStatus = 'end';
            state.confirmError = null;
        },
        newAddBetPeriod: (state) => {
            state.confirmStatus = 'idle';
        },

        // bet send
        addBetSend: (state, action: PayloadAction<BetSendActionAdd>) => {
            const { bet } = action.payload;

            bet.forEach((data) => {
                const { button, group, value } = data;

                state.send[`${button}-${group}`] = value;
            });
        },
        resetBetSend: (state) => {
            state.send = {};
        },
    },
});

export const {
    placeSingleBet,
    placeMultiBet,
    undoBet,
    clearBet,
    doubleBet,
    resetBetAdd,
    // submit
    confirmBetPending,
    confirmBetFullfiled,
    confirmBetRejected,
    resetConfirmBet,
    newAddBetPeriod,
    // send
    addBetSend,
    resetBetSend,
} = betsSlice.actions;

export const selectHistoryBetAdd = (state: RootState) => state.bets.history;

export const selectBetAdd = (state: RootState) => state.bets.add;
export const selectBetSend = (state: RootState) => state.bets.send;

export const selectIdsBetAdd = createSelector([selectBetAdd], (add) => {
    return Object.keys(add);
});

export const selectChip = (state: RootState, key: string): number => {
    return (state.bets.add[key] ?? 0) + (state.bets.send[key] ?? 0);
};

export const selectTotalBetAdd = createSelector([selectBetAdd], (add) => {
    let totalAdd = 0;
    for (const [_, value] of Object.entries(add)) {
        totalAdd += value;
    }

    return totalAdd;
});

export const selectTotalBetSend = createSelector([selectBetSend], (send) => {
    let totalSend = 0;
    for (const [_, value] of Object.entries(send)) {
        totalSend += value;
    }

    return totalSend;
});

export const selectTotalBet = createSelector(
    [selectTotalBetAdd, selectTotalBetSend],
    (add, send) => {
        return add + send;
    },
);

export const selectConfirmBetStatus = (state: RootState) => state.bets.confirmStatus;
export const selectConfirmBetError = (state: RootState) => state.bets.confirmError;

export default betsSlice.reducer;
