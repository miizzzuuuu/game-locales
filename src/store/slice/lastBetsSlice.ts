import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BetSend } from '../../types';
import { RootState } from '../store';

export type LastBetState = {
    data: BetSend[];
    periode: number;
};

const initialState: LastBetState = {
    data: [],
    periode: 0,
};

const lastBetsSlice = createSlice({
    name: 'lastBets',
    initialState,
    reducers: {
        setLastBetData: (state, action: PayloadAction<LastBetState>) => {
            state.periode = action.payload.periode;
            state.data = action.payload.data;
        },
    },
});

export const { setLastBetData } = lastBetsSlice.actions;

export const selectLastBetData = (state: RootState) => state.lastBets.data;

export default lastBetsSlice.reducer;
