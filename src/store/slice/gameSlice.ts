import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Game } from '../../types';

export type GameState = Game;

const initialState: GameState = {
    name: '',
    displayName: '',
    periode: 0,
    pcode: '',
    stream: '',
    stream_hd: '',
    stream_uhd: '',
    stream_4k: '',
    stream_8k: '',
    bet: {},
    betHistory: [],
    newgame: '',
    maintenance: '',
    maintenance_text: '',
    min: 0,
    max: 0,
    min50: 0,
    max50: 0,
    category: '',
    shoePeriode: '',
    order: null,
    newSet: false,
    fast_table: false,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGame: (state, action: PayloadAction<Game>) => {
            state.name = action.payload.name;
            state.displayName = action.payload.displayName;
            state.periode = action.payload.periode;
            state.pcode = action.payload.pcode;
            state.stream = action.payload.stream;
            state.stream_hd = action.payload.stream_hd;
            state.stream_uhd = action.payload.stream_uhd;
            state.stream_4k = action.payload.stream_4k;
            state.stream_8k = action.payload.stream_8k;
            state.bet = action.payload.bet;
            state.betHistory = action.payload.betHistory;
            state.newgame = action.payload.newgame;
            state.maintenance = action.payload.maintenance;
            state.maintenance_text = action.payload.maintenance_text;
            state.min = action.payload.min;
            state.max = action.payload.max;
            state.min50 = action.payload.min50;
            state.max50 = action.payload.max50;
            state.category = action.payload.category;
            state.shoePeriode = action.payload.shoePeriode;
            state.order = action.payload.order;
            state.newSet = action.payload.newSet;
            state.fast_table = action.payload.fast_table;
        },

        updateGamePeriod: (state, action: PayloadAction<number>) => {
            state.periode = action.payload;
        },

        setNewSet: (state, action: PayloadAction<boolean>) => {
            state.newSet = action.payload;
        },
        updateGameSet: (state, action: PayloadAction<string>) => {
            state.shoePeriode = action.payload;
        },
    },
});

export const { setGame, updateGamePeriod, setNewSet, updateGameSet } = gameSlice.actions;

export const selectMin = (state: RootState) => state.game.min;
export const selectMax = (state: RootState) => state.game.max;
export const selectMin50 = (state: RootState) => state.game.min50;
export const selectMax50 = (state: RootState) => state.game.max50;

export const selectGameName = (state: RootState) => state.game.displayName;
export const selectPeriod = (state: RootState) => state.game.periode;

export const selectStream = (state: RootState) => state.game.stream;
export const selectStreamHD = (state: RootState) => state.game.stream_hd;

export const selectGameNewSet = (state: RootState) => state.game.newSet;
export const selectGameSet = (state: RootState) => state.game.shoePeriode.split('-')[0];

export default gameSlice.reducer;
