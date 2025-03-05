import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type MessageBoardcast = {
    title: string;
    message: string;
    show_once: boolean;
    status: boolean;
};

export interface State {
    message: Record<string, MessageBoardcast>;
}

const initialState: State = {
    message: {},
};

const boardcastSlice = createSlice({
    name: 'boardcast',
    initialState,
    reducers: {
        setBoardcast: (state, action: PayloadAction<{ key: string; data: MessageBoardcast }>) => {
            if (state.message[action.payload.key]) {
                state.message[action.payload.key] = action.payload.data;
            } else {
                state.message[action.payload.key] = action.payload.data;
            }
        },
        removeBoardcast: (state, action: PayloadAction<string>) => {
            delete state.message[action.payload];
        },
    },
});

export const { setBoardcast, removeBoardcast } = boardcastSlice.actions;

export const selectBoardcastMessage = (state: RootState) => state.boardcast.message;

export default boardcastSlice.reducer;
