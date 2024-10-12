import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { normalizeTime } from '../../common/utils/GameHelper';

export interface TimerState {
    time: number;
    timer: number;
    isClose: boolean;
}

const initialState: TimerState = {
    time: 0,
    timer: 1,
    isClose: true,
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimer: (state, action: PayloadAction<number>) => {
            state.timer = normalizeTime(action.payload);
        },

        closeTime: (state) => {
            state.time = 0;
            state.isClose = true;
        },
        openTime: (state, action: PayloadAction<number>) => {
            const time = normalizeTime(action.payload);
            state.time = time;
            state.isClose = false;
        },
    },
});

export const { setTimer, openTime, closeTime } = timerSlice.actions;

export const selectTime = (state: RootState) => state.timer.time;
export const selectTimer = (state: RootState) => state.timer.timer;
export const selectBetIsOpen = (state: RootState) => state.timer.time > 0;
export const selectTimerIsClose = (state: RootState) => state.timer.isClose;

export default timerSlice.reducer;
