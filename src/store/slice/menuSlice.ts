import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type NameMenu =
    | 'main'
    | 'payout'
    | 'settings'
    | 'history'
    | 'htp'
    | 'statistic'
    | 'promotion';

export interface MenuState {
    openStatistic: boolean;
    openMenuMain: boolean;
    openMenuPayout: boolean;
    openMenuSettings: boolean;
    openMenuHistory: boolean;
    openMenuHTP: boolean;
    openMenuPromotion: boolean;

    menuOpened: NameMenu[];
}

const initialState: MenuState = {
    openStatistic: false,
    openMenuMain: false,
    openMenuPayout: false,
    openMenuSettings: false,
    openMenuHistory: false,
    openMenuHTP: false,
    openMenuPromotion: false,
    menuOpened: [],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenuStatistic: (state) => {
            const prev = state.openStatistic;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'statistic');
            } else {
                state.menuOpened.push('statistic');
            }

            state.openStatistic = !prev;
        },
        toggleMenuMain: (state) => {
            const prev = state.openMenuMain;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'main');
            } else {
                state.menuOpened.push('main');
            }

            state.openMenuMain = !prev;
        },
        toggleMenuPayout: (state) => {
            const prev = state.openMenuPayout;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'payout');
            } else {
                state.menuOpened.push('payout');
            }

            state.openMenuPayout = !prev;
        },
        toggleMenuSettings: (state) => {
            const prev = state.openMenuSettings;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'settings');
            } else {
                state.menuOpened.push('settings');
            }

            state.openMenuSettings = !prev;
        },
        toggleMenuHistory: (state) => {
            const prev = state.openMenuHistory;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'history');
            } else {
                state.menuOpened.push('history');
            }

            state.openMenuHistory = !state.openMenuHistory;
        },
        toggleMenuHTP: (state) => {
            const prev = state.openMenuHTP;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'htp');
            } else {
                state.menuOpened.push('htp');
            }

            state.openMenuHTP = !state.openMenuHTP;
        },
        toggleMenuPromotion: (state) => {
            const prev = state.openMenuPromotion;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'promotion');
            } else {
                state.menuOpened.push('promotion');
            }

            state.openMenuPromotion = !state.openMenuPromotion;
        },

        closeAllMenu: (state) => {
            state.menuOpened = [];

            state.openStatistic = false;
            state.openMenuMain = false;
            state.openMenuPayout = false;
            state.openMenuSettings = false;
            state.openMenuHistory = false;
            state.openMenuHTP = false;
        },

        // desktop
        toggleMenuSettingsDesktop: (state) => {
            const prev = state.openMenuSettings;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'settings');
            } else {
                state.menuOpened = state.menuOpened.filter(
                    (menu) => menu !== 'history' && menu !== 'htp',
                );
                state.menuOpened.push('settings');

                state.openMenuHistory = false;
                state.openMenuHTP = false;
            }

            state.openMenuSettings = !prev;
        },
        toggleMenuHistoryDesktop: (state) => {
            const prev = state.openMenuHistory;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'history');
            } else {
                state.menuOpened = state.menuOpened.filter(
                    (menu) => menu !== 'settings' && menu !== 'htp',
                );
                state.menuOpened.push('history');

                state.openMenuSettings = false;
                state.openMenuHTP = false;
            }

            state.openMenuHistory = !state.openMenuHistory;
        },
        toggleMenuHTPDesktop: (state) => {
            const prev = state.openMenuHTP;

            if (prev) {
                state.menuOpened = state.menuOpened.filter((menu) => menu !== 'htp');
            } else {
                state.menuOpened = state.menuOpened.filter(
                    (menu) => menu !== 'settings' && menu !== 'history',
                );
                state.menuOpened.push('htp');

                state.openMenuSettings = false;
                state.openMenuHistory = false;
            }

            state.openMenuHTP = !state.openMenuHTP;
        },
        closeAllMenuDesktop: (state, action: PayloadAction<NameMenu>) => {
            state.menuOpened = state.menuOpened.filter((menu) => menu !== action.payload);

            if (action.payload === 'history') {
                state.openMenuHistory = false;
            } else if (action.payload === 'settings') {
                state.openMenuSettings = false;
            } else if (action.payload === 'htp') {
                state.openMenuHTP = false;
            } else if (action.payload === 'payout') {
                state.openMenuPayout = false;
            }
        },
    },
});

export const {
    toggleMenuStatistic,
    toggleMenuMain,
    toggleMenuPayout,
    toggleMenuSettings,
    toggleMenuHistory,
    toggleMenuPromotion,
    toggleMenuHTP,
    closeAllMenu,

    toggleMenuSettingsDesktop,
    toggleMenuHistoryDesktop,
    toggleMenuHTPDesktop,
    closeAllMenuDesktop,
} = menuSlice.actions;

export const selectOpenStatistic = (state: RootState) => state.menu.openStatistic;

export const selectOpenMenuMain = (state: RootState) => state.menu.openMenuMain;
export const selectOpenMenuPayout = (state: RootState) => state.menu.openMenuPayout;
export const selectOpenMenuSettings = (state: RootState) => state.menu.openMenuSettings;
export const selectOpenMenuHistory = (state: RootState) => state.menu.openMenuHistory;
export const selectOpenMenuHTP = (state: RootState) => state.menu.openMenuHTP;
export const selectOpenMenuPromotion = (state: RootState) => state.menu.openMenuPromotion;

export const selectMenuOpened = (state: RootState) => state.menu.menuOpened;

export default menuSlice.reducer;
