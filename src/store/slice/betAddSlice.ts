import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BetSend, FetchStatus } from '../../types';

export interface BetAddState {
    history: {
        bet: BetSend[];
    }[];

    confirmStatus: FetchStatus | 'end';
    confirmError: null | string;
}

type ConfirmBetFullfiledAction = {
    periode: number;
    bet: BetSend[];
    total_bet: number;
    balance: number;
};

const betAddAdapter = createEntityAdapter<BetSend, string>({
    selectId: (bet) => `${bet.button}-${bet.group}`,
});

const initialState = betAddAdapter.getInitialState<BetAddState>({
    history: [],
    confirmStatus: 'idle',
    confirmError: null,
});

const betAddSlice = createSlice({
    name: 'betAdd',
    initialState,
    reducers: {
        placeSingleBet: (state, action: PayloadAction<BetSend>) => {
            state.history.push({
                bet: JSON.parse(JSON.stringify(state.entities)),
            });

            const { button, value, group } = action.payload;

            const exist = state.entities[`${button}-${group}`];
            if (exist) {
                exist.value += value;
            } else {
                betAddAdapter.addOne(state, action.payload);
            }
        },
        placeMultiBet: (state, action: PayloadAction<BetSend[]>) => {
            state.history.push({
                bet: JSON.parse(JSON.stringify(state.entities)),
            });

            const betArray = action.payload;

            betArray.forEach((bet) => {
                const { button, value, group } = bet;

                const existingBet = state.entities[`${button}-${group}`];
                if (existingBet) {
                    existingBet.value += value;
                } else {
                    betAddAdapter.addOne(state, bet);
                }
            });
        },
        undoBet: (state) => {
            const lastHistory = state.history.pop();

            if (lastHistory) {
                betAddAdapter.removeAll(state);
                betAddAdapter.addMany(state, lastHistory.bet);
            }
        },
        clearBet: (state) => {
            state.history.push({
                bet: JSON.parse(JSON.stringify(state.entities)),
            });

            betAddAdapter.removeAll(state);
        },
        doubleBet: (state) => {
            state.history.push({
                bet: JSON.parse(JSON.stringify(state.entities)),
            });

            for (const property in state.entities) {
                const bet = state.entities[property];
                bet.value += bet.value;
            }
        },
        resetBetAdd: (state) => {
            betAddAdapter.removeAll(state);
            state.history = [];
        },

        confirmBetPending: (state) => {
            state.confirmStatus = 'pending';
        },
        confirmBetFullfiled: (state, _: PayloadAction<ConfirmBetFullfiledAction>) => {
            state.confirmStatus = 'fulfilled';

            betAddAdapter.removeAll(state);
            state.history = [];
        },
        confirmBetRejected: (state, action: PayloadAction<string>) => {
            state.confirmStatus = 'rejected';
            state.confirmError = action.payload;

            betAddAdapter.removeAll(state);
            state.history = [];
        },
        resetConfirmBet: (state) => {
            state.confirmStatus = 'end';
            state.confirmError = null;
        },
        newAddBetPeriod: (state) => {
            state.confirmStatus = 'idle';
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
    confirmBetPending,
    confirmBetFullfiled,
    confirmBetRejected,
    resetConfirmBet,
    newAddBetPeriod,
} = betAddSlice.actions;

export const {
    selectEntities: selectEntitiesBetAdd,
    selectAll: selectAllBetAdd,
    selectIds: selectIdsBetAdd,
} = betAddAdapter.getSelectors((state: RootState) => state.betAdd);

export const selectTotalBetAdd = (state: RootState) => {
    let total = 0;

    Object.values(state.betAdd.entities).forEach((bet) => {
        total += bet.value;
    });

    return total;
};

export const selectHistoryBetAdd = (state: RootState) => state.betAdd.history;
export const selectConfirmBetStatus = (state: RootState) => state.betAdd.confirmStatus;
export const selectConfirmBetError = (state: RootState) => state.betAdd.confirmError;

export default betAddSlice.reducer;
