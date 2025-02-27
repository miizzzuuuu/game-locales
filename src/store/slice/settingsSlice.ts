import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';
import { formatedLanguage } from '../../common/utils/LangHelper';
import { Sound } from '../../services/sound';
import { Settings } from '../../types';
import { RootState } from '../store';

const initialState: Settings = {
    language: '',
    autoRebet: false,
    enableGameSound: true,
    enableGameMusic: true,
    enableStreamingSound: true,
    enableStreamingVideo: true,
    streamingQuality: 'medium',
    volumeGameSound: 100,
    volumeGameMusic: 100,
    volumeStreamingSound: 100,
};

const playerSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSetings: (state, action: PayloadAction<Partial<Settings>>) => {
            const payload = action.payload;

            const lang = formatedLanguage(payload.language);
            void i18next.changeLanguage(lang);
            state.language = lang;

            // state.autoRebet = autoRebet;

            if (payload.enableStreamingVideo !== undefined) {
                state.enableStreamingVideo = payload.enableStreamingVideo;
            }

            if (payload.enableStreamingSound !== undefined) {
                state.enableStreamingSound = payload.enableStreamingSound;
            }

            if (payload.volumeStreamingSound !== undefined) {
                state.volumeStreamingSound = payload.volumeStreamingSound;
            }

            if (payload.streamingQuality !== undefined) {
                state.streamingQuality = payload.streamingQuality;
            }

            if (payload.enableGameMusic !== undefined) {
                state.enableGameMusic = payload.enableGameMusic;
                Sound.enableMusic = payload.enableGameMusic;
            }

            if (payload.volumeGameMusic !== undefined) {
                const volumeGameMusic = payload.volumeGameMusic;
                state.volumeGameMusic = volumeGameMusic;
                Sound.volumeMusic = volumeGameMusic;
            }

            if (payload.enableGameSound !== undefined) {
                state.enableGameSound = payload.enableGameSound;
                Sound.enableSound = payload.enableGameSound;
            }

            if (payload.volumeGameSound !== undefined) {
                const volumeGameSound = payload.volumeGameSound;
                state.volumeGameSound = volumeGameSound;
                Sound.volumeSound = volumeGameSound;
            }
        },
        updateSetings: (state, action: PayloadAction<Partial<Settings>>) => {
            const payload = action.payload;

            if (payload.language !== undefined) {
                const lang = formatedLanguage(payload.language);
                void i18next.changeLanguage(lang);
                state.language = lang;
            }

            // state.autoRebet = autoRebet;

            if (payload.enableStreamingVideo !== undefined) {
                state.enableStreamingVideo = payload.enableStreamingVideo;
            }

            if (payload.enableStreamingSound !== undefined) {
                state.enableStreamingSound = payload.enableStreamingSound;
            }

            if (payload.volumeStreamingSound !== undefined) {
                state.volumeStreamingSound = payload.volumeStreamingSound;
            }

            if (payload.streamingQuality !== undefined) {
                state.streamingQuality = payload.streamingQuality;
            }

            if (payload.enableGameMusic !== undefined) {
                state.enableGameMusic = payload.enableGameMusic;
                Sound.enableMusic = payload.enableGameMusic;
            }

            if (payload.volumeGameMusic !== undefined) {
                const volumeGameMusic = payload.volumeGameMusic;
                state.volumeGameMusic = volumeGameMusic;
                Sound.volumeMusic = volumeGameMusic;
            }

            if (payload.enableGameSound !== undefined) {
                state.enableGameSound = payload.enableGameSound;
                Sound.enableSound = payload.enableGameSound;
            }

            if (payload.volumeGameSound !== undefined) {
                const volumeGameSound = payload.volumeGameSound;
                state.volumeGameSound = volumeGameSound;
                Sound.volumeSound = volumeGameSound;
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
