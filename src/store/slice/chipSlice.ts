import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ChipState {
    chipBase: number[];
    activeChip: number;
}

const initialState: ChipState = {
    chipBase: [],
    activeChip: 0,
};

const chipSlice = createSlice({
    name: 'chip',
    initialState,
    reducers: {
        setChipBase: (state, action: PayloadAction<number[]>) => {
            state.chipBase = action.payload;

            if (!state.activeChip && action.payload.length > 0) {
                state.activeChip = action.payload[0];
            }
        },
        setActiveChip: (state, action: PayloadAction<number>) => {
            state.activeChip = action.payload;
        },
    },
});

export const { setChipBase, setActiveChip } = chipSlice.actions;

export const selectChipBase = (state: RootState) => state.chip.chipBase;
export const selectActiveChip = (state: RootState) => state.chip.activeChip;

export default chipSlice.reducer;
