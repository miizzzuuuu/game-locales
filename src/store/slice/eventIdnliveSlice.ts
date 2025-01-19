import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EventIdnlive } from '../../types';
import { RootState } from '../store';

export interface State {
    list: EventIdnlive[];
}

const initialState: State = {
    list: [],
};

const eventIdnliveSlice = createSlice({
    name: 'eventIdnlive',
    initialState,
    reducers: {
        setEventsList: (state, action: PayloadAction<EventIdnlive[]>) => {
            state.list = action.payload;
        },
    },
});

export const { setEventsList } = eventIdnliveSlice.actions;

export const selectEventIdnliveList = (state: RootState) => state.eventIdnlive.list;

export default eventIdnliveSlice.reducer;
