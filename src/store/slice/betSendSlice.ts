import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BetSend } from '../../types';

export interface BetSendState {
    total_bet: number;
    periode: number;
}

type BetSendActionAdd = {
    bet: BetSend[];
    total_bet: number;
    periode: number;
};

const betSendAdapter = createEntityAdapter<BetSend, string>({
    selectId: (bet) => `${bet.button}-${bet.group}`,
});

const initialState = betSendAdapter.getInitialState<BetSendState>({
    total_bet: 0,
    periode: 0,
});

const betSendSlice = createSlice({
    name: 'betSend',
    initialState,
    reducers: {
        addBetSend: (state, action: PayloadAction<BetSendActionAdd>) => {
            state.periode = action.payload.periode;

            const { bet, total_bet } = action.payload;

            bet.forEach((data) => {
                const { button, value, group } = data;

                const exist = state.entities[`${button}-${group}`];
                if (exist) {
                    exist.value += value;
                } else {
                    betSendAdapter.addOne(state, data);
                }
            });

            state.total_bet += total_bet;
        },
        resetBetSend: (state) => {
            betSendAdapter.removeAll(state);
            state.total_bet = 0;
            state.periode = 0;
        },
    },
});

export const { addBetSend, resetBetSend } = betSendSlice.actions;

export const {
    selectEntities: selectEntitiesBetSend,
    selectAll: selectAllBetSend,
    selectIds: selectIdsBetSend,
} = betSendAdapter.getSelectors((state: RootState) => state.betSend);

export default betSendSlice.reducer;
