import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TopWinnerData } from '../../types';
import { RootState } from '../store';

export type TopWinnerState = Omit<TopWinnerData, 'pcode'>;

const initialState: TopWinnerState = {
    periode: 0,
    data: [],
};

const topWinnerSlice = createSlice({
    name: 'topWinner',
    initialState,
    reducers: {
        setTopWinner: (state, action: PayloadAction<TopWinnerState>) => {
            state.periode = action.payload.periode;
            state.data = action.payload.data;
        },
        resetTopWinner: (state) => {
            state.data = [];
        },
    },
});

export const { setTopWinner, resetTopWinner } = topWinnerSlice.actions;

export const selectTopWinner = (state: RootState) => state.topWinner.data;

export default topWinnerSlice.reducer;
