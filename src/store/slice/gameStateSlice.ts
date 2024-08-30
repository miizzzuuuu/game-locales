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

    showMiniHowToPlay: boolean;
}

const initialState: GameStateState = {
    modeBet: 'main',
    showChip: true,
    message: {
        value: '',
        type: 'danger',
    },
    layoutVersion: 1,

    showMiniHowToPlay: true,
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
        setShowMiniHowToPlay: (state, action: PayloadAction<boolean>) => {
            state.showMiniHowToPlay = action.payload;
        },
    },
});

export const { toggleModeBet, toggleShowChip, setMessage, setShowMiniHowToPlay } =
    gameStateSlice.actions;

export const selectModeBet = (state: RootState) => state.gameState.modeBet;
export const selectShowChip = (state: RootState) => state.gameState.showChip;
export const selectMessageValue = (state: RootState) => state.gameState.message.value;
export const selectMessageType = (state: RootState) => state.gameState.message.type;
export const selectLayoutVersion = (state: RootState) => state.gameState.layoutVersion;
export const selectShowMiniHowToPlay = (state: RootState) => state.gameState.showMiniHowToPlay;

export default gameStateSlice.reducer;
