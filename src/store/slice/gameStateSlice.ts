import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface GameStateState {
    modeBet: 'main' | 'race-track';
    showChip: boolean;
    message: {
        value: string | undefined;
        type: 'danger' | 'warning' | 'none';
    };
    layoutVersion: number;

    showPatternUI: boolean;
    showPatternUIBeforeClose: boolean;
}

const initialState: GameStateState = {
    modeBet: 'main',
    showChip: true,
    message: {
        value: '',
        type: 'danger',
    },
    layoutVersion: 1,

    showPatternUI: false,
    showPatternUIBeforeClose: false,
};

const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        toggleModeBet: (state) => {
            if (state.modeBet === 'main') {
                state.modeBet = 'race-track';
            } else {
                state.modeBet = 'main';
            }
        },
        toggleShowChip: (state) => {
            state.showChip = !state.showChip;
        },
        setMessage: (state, action: PayloadAction<GameStateState['message']>) => {
            state.message = action.payload;
        },

        togglePatternUI: (state) => {
            state.showPatternUI = !state.showPatternUI;
        },
        setShowPatternBeforeClose: (state, action: PayloadAction<boolean>) => {
            state.showPatternUIBeforeClose = action.payload;
        },
    },
});

export const {
    toggleModeBet,
    toggleShowChip,
    setMessage,
    togglePatternUI,
    setShowPatternBeforeClose,
} = gameStateSlice.actions;

export const selectModeBet = (state: RootState) => state.gameState.modeBet;
export const selectShowChip = (state: RootState) => state.gameState.showChip;
export const selectMessageValue = (state: RootState) => state.gameState.message.value;
export const selectMessageType = (state: RootState) => state.gameState.message.type;
export const selectLayoutVersion = (state: RootState) => state.gameState.layoutVersion;

export const selectShowPatternUI = (state: RootState) => state.gameState.showPatternUI;

export default gameStateSlice.reducer;
