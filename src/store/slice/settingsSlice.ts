import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Settings } from '../../types';
import { formatedLanguage } from '../../common/utils/LangHelper';
import i18next from 'i18next';
import { Sound } from '../../services/sound';

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
        setSetings: (state, action: PayloadAction<Settings>) => {
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

            const lang = formatedLanguage(language);
            void i18next.changeLanguage(lang);
            state.language = lang;

            state.autoRebet = autoRebet;

            state.volumeStreamingSound = volumeStreamingSound;
            state.enableStreamingSound = enableStreamingSound;
            state.enableStreamingVideo = enableStreamingVideo;
            state.streamingQuality = streamingQuality;

            state.volumeGameSound = volumeGameSound;
            Sound.volumeSound = volumeGameSound;
            Sound.volumeMusic = volumeGameSound;

            state.enableGameSound = enableGameSound;
            Sound.enableSound = enableGameSound;
        },
        updateSetings: (state, action: PayloadAction<Partial<Settings>>) => {
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

            if (language !== undefined) {
                const lang = formatedLanguage(language);
                state.language = lang;

                void i18next.changeLanguage(lang);
            }

            if (autoRebet !== undefined) {
                state.autoRebet = autoRebet;
            }

            if (enableStreamingSound !== undefined) {
                state.enableStreamingSound = enableStreamingSound;
            }

            if (enableStreamingVideo !== undefined) {
                state.enableStreamingVideo = enableStreamingVideo;
            }

            if (streamingQuality !== undefined) {
                state.streamingQuality = streamingQuality;
            }

            if (volumeStreamingSound !== undefined) {
                state.volumeStreamingSound = volumeStreamingSound;
            }

            if (volumeGameSound !== undefined) {
                state.volumeGameSound = volumeGameSound;

                Sound.volumeSound = volumeGameSound;
                Sound.volumeMusic = volumeGameSound;
            }

            if (enableGameSound !== undefined) {
                state.enableGameSound = enableGameSound;

                Sound.enableSound = enableGameSound;
            }
        },
    },
});

export const { setSetings, updateSetings } = playerSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectAutoRebet = (state: RootState) => state.settings.autoRebet;
export const selectEnableGameSound = (state: RootState) => state.settings.enableGameSound;
export const selectEnableStreamingSound = (state: RootState) => state.settings.enableStreamingSound;
export const selectEnableStreamingVideo = (state: RootState) => state.settings.enableStreamingVideo;
export const selectStreamingQuality = (state: RootState) => state.settings.streamingQuality;
export const selectVolumeStreamingSound = (state: RootState) => state.settings.volumeStreamingSound;
export const selectVolumeGameSound = (state: RootState) => state.settings.volumeGameSound;

export default playerSlice.reducer;
