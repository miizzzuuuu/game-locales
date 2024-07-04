import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Settings } from '../../types';
import { LangHelper } from '../../common/utils/LangHelper';

const initialState: Settings = {
    language: '',
    autoRebet: false,
    enableGameSound: false,
    enableStreamingSound: false,
    enableStreamingVideo: false,
    streamingQuality: 'high',
    volumeStreamingSound: 0,
    volumeGameSound: 0,
};

const playerSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSetings: (state, action: PayloadAction<Settings>) => {
            const {
                language,
                autoRebet,
                enableGameSound,
                enableStreamingSound,
                enableStreamingVideo,
                streamingQuality,
                volumeStreamingSound,
                volumeGameSound,
            } = action.payload;

            state.language = LangHelper.formatedLanguage(language);
            state.autoRebet = autoRebet;
            state.enableGameSound = enableGameSound;
            state.enableStreamingSound = enableStreamingSound;
            state.enableStreamingVideo = enableStreamingVideo;
            state.streamingQuality = streamingQuality;
            state.volumeStreamingSound = volumeStreamingSound;
            state.volumeGameSound = volumeGameSound;
        },
        updateLangauge: (state, action: PayloadAction<Settings['language']>) => {
            state.language = LangHelper.formatedLanguage(action.payload);
        },
        updateAutoRebet: (state, action: PayloadAction<Settings['autoRebet']>) => {
            state.autoRebet = action.payload;
        },
        updateEnableGameSound: (state, action: PayloadAction<Settings['enableGameSound']>) => {
            state.enableGameSound = action.payload;
        },
        updateEnableStreamingSound: (
            state,
            action: PayloadAction<Settings['enableStreamingSound']>,
        ) => {
            state.enableStreamingSound = action.payload;
        },
        updateEnableStreamingVideo: (
            state,
            action: PayloadAction<Settings['enableStreamingVideo']>,
        ) => {
            state.enableStreamingVideo = action.payload;
        },
        updateStreamingQuality: (state, action: PayloadAction<Settings['streamingQuality']>) => {
            state.streamingQuality = action.payload;
        },
        updateVolumeStreamingSound: (
            state,
            action: PayloadAction<Settings['volumeStreamingSound']>,
        ) => {
            state.volumeStreamingSound = action.payload;
        },
        updateVolumeGameSound: (state, action: PayloadAction<Settings['volumeGameSound']>) => {
            state.volumeGameSound = action.payload;
        },
    },
});

export const {
    updateSetings,
    updateLangauge,
    updateAutoRebet,
    updateEnableGameSound,
    updateEnableStreamingSound,
    updateEnableStreamingVideo,
    updateStreamingQuality,
    updateVolumeStreamingSound,
    updateVolumeGameSound,
} = playerSlice.actions;

export const selectLanguage = (state: RootState) => state.settings.language;
export const selectAutoRebet = (state: RootState) => state.settings.autoRebet;
export const selectEnableGameSound = (state: RootState) => state.settings.enableGameSound;
export const selectEnableStreamingSound = (state: RootState) => state.settings.enableStreamingSound;
export const selectEnableStreamingVideo = (state: RootState) => state.settings.enableStreamingVideo;
export const selectStreamingQuality = (state: RootState) => state.settings.streamingQuality;
export const selectVolumeStreamingSound = (state: RootState) => state.settings.volumeStreamingSound;
export const selectVolumeGameSound = (state: RootState) => state.settings.volumeGameSound;

export default playerSlice.reducer;
