import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DeviceType, Orientation } from '../../types';

export interface WindowState {
    device: DeviceType;
    orientation: Orientation;
    isFocus: boolean;
}

const initialState: WindowState = {
    device: 'desktop',
    orientation: 'landscape',
    isFocus: true,
};

const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        setDeviceType: (state, action: PayloadAction<DeviceType>) => {
            state.device = action.payload;
        },
        setOrientation: (state, action: PayloadAction<Orientation>) => {
            state.orientation = action.payload;
        },
        setFocus: (state, action: PayloadAction<boolean>) => {
            state.isFocus = action.payload;
        },
    },
});

export const { setDeviceType, setOrientation, setFocus } = windowSlice.actions;

export const selectOrientation = (state: RootState) => state.window.orientation;
export const selectDevice = (state: RootState) => state.window.device;
export const selectFocus = (state: RootState) => state.window.isFocus;

export default windowSlice.reducer;
