import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { _24DHelper } from '../../game/utils/_24DHelper';

export interface ResultState {
    periode: number | null;
    resultNumber: number | null;
    winBets: string[];
    status: 'idle' | 'spin' | 'done';

    winAmount: number;
    winStatus: 'idle' | 'running' | 'show';
}

const initialState: ResultState = {
    periode: null,
    resultNumber: null,
    winBets: [],
    status: 'idle',
    winAmount: 0,
    winStatus: 'idle',
};

const baseSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setResult: (state, action: PayloadAction<number>) => {
            const resultNumber = action.payload;
            const winBet = _24DHelper.getWinResult(resultNumber);

            state.resultNumber = resultNumber;
            state.winBets = winBet;

            state.status = 'spin';
        },
        doneResult: (state) => {
            state.status = 'done';
        },
        resetResult: (state) => {
            state.resultNumber = null;
            state.winBets = [];
            state.status = 'idle';

            if (state.winAmount <= 0) {
                state.winStatus = 'idle';
            }
        },

        setWinAmount: (state, action: PayloadAction<number>) => {
            state.winAmount = action.payload;
            state.winStatus = 'show';
        },
        endWinAnimation: (state) => {
            state.winStatus = 'idle';
        },
        clearWinAmount: (state) => {
            state.winAmount = 0;
        },
    },
});

export const { setResult, doneResult, resetResult, setWinAmount, endWinAnimation, clearWinAmount } =
    baseSlice.actions;

export const selectResultNumber = (state: RootState) => state.result.resultNumber;
export const selectResultStatus = (state: RootState) => state.result.status;
export const selectWinBets = (state: RootState) => state.result.winBets;

export const selectWinAmount = (state: RootState) => state.result.winAmount;
export const selectWinStatus = (state: RootState) => state.result.winStatus;

export default baseSlice.reducer;
