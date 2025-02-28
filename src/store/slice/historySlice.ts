import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ResultState {
    status: 'idle' | 'done';
    history: HistoryItem[];
}

export type HistoryItem = {
    dragon: string;
    tiger: string;
    result: string;
    value: number;
    tanggal: string;
    periode: number;
    hitung: string;
    gamekey: number;
    idnomor: number;
};

const initialState: ResultState = {
    status: 'idle',
    history: [],
};

const baseSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory: (state, action: PayloadAction<HistoryItem[]>) => {
            state.history = action.payload;
        },
        addHistory: (state, action: PayloadAction<HistoryItem>) => {
            state.history.push(action.payload);
        },
        resetHistory: (state) => {
            state.history = [];
        },
    },
});

export const { setHistory, addHistory, resetHistory } = baseSlice.actions;

export default baseSlice.reducer;
