import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Settings } from '../../types';

type SettingsState = Settings;

const initialState: SettingsState = {
    language: '',
    autoRebet: false,
    enableGameSound: false,
    enableStreamingVideo: false,
    enableStreamingSound: false,
    streamingQuality: 'high',
    volumeStreamingSound: 0,
    volumeGameSound: 0,
};

const playerSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateLangauge: (state, action: PayloadAction<SettingsState['language']>) => {
            state.language = action.payload;
        },
    },
});

export const {} = playerSlice.actions;

export const selectLanguage = (state: RootState) => state.settings.language;
export const selectAutoRebet = (state: RootState) => state.settings.autoRebet;
export const selectEnableGameSound = (state: RootState) => state.settings.enableGameSound;
export const selectEnableStreamingVideo = (state: RootState) => state.settings.enableStreamingVideo;
export const selectEnableStreamingSound = (state: RootState) => state.settings.enableStreamingSound;
export const selectStreamingQuality = (state: RootState) => state.settings.streamingQuality;
export const selectVolumeStreamingSound = (state: RootState) => state.settings.volumeStreamingSound;
export const selectVolumeGameSound = (state: RootState) => state.settings.volumeGameSound;

export default playerSlice.reducer;
