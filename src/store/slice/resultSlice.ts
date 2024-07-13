import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TwentyFourDHelper } from '../../game/utils/TwentyFourDHelper';
import { ScanNumberData } from '../../types';

export interface ResultState {
    periode: number | null;
    resultNumber: number | null;
    winBets: string[];
    status: 'idle' | 'spin' | 'done';
    scanNumber: ScanNumberData | undefined;
    winAmount: number;
    winStatus: 'idle' | 'running' | 'show';
}

const initialState: ResultState = {
    periode: null,
    resultNumber: null,
    winBets: [],
    scanNumber: undefined,
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
            const winBet = TwentyFourDHelper.getWinResult(resultNumber);

            state.resultNumber = resultNumber;
            state.winBets = winBet;

            state.status = 'spin';
        },
        doneResult: (state) => {
            state.status = 'done';
        },
        setScanNumber: (state, action: PayloadAction<ScanNumberData>) => {
            console.log("setScannumber", action.payload);
            state.scanNumber = action.payload
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

export const {setScanNumber, setResult, doneResult, resetResult, setWinAmount, endWinAnimation, clearWinAmount } =
    baseSlice.actions;

export const selectResultNumber = (state: RootState) => state.result.resultNumber;
export const selectResultStatus = (state: RootState) => state.result.status;
export const selectWinBets = (state: RootState) => state.result.winBets;

export const selectWinAmount = (state: RootState) => state.result.winAmount;
export const selectWinStatus = (state: RootState) => state.result.winStatus;

export default baseSlice.reducer;
