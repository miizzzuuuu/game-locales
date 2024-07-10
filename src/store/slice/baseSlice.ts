import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface State {
    test: string;
}

const initialState: State = {
    test: '',
};

const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<string>) => {
            state.test = action.payload;
        },
    },
});

export const { setTest } = baseSlice.actions;

export const selectTest = (state: RootState) => state.base.test;

export default baseSlice.reducer;
