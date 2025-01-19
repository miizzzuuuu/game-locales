import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Player } from '../../types';
import { RootState } from '../store';

type PlayerState = Pick<Player, 'balance' | 'nickname' | 'currency' | 'operatorId' | 'lobbyUrl'> & {
    showCurrency: boolean;
};

const initialState: PlayerState = {
    nickname: '...',
    balance: 0,
    currency: '',
    operatorId: '',
    lobbyUrl: undefined,

    showCurrency: true,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerData: (state, action: PayloadAction<Player>) => {
            state.nickname = action.payload.nickname;
            state.balance = action.payload.balance;
            state.currency = action.payload.currency;
            state.operatorId = action.payload.operatorId;
            state.lobbyUrl = action.payload.lobbyUrl;

            if (action.payload.showCurrency !== undefined) {
                state.showCurrency = action.payload.showCurrency;
            }
        },
        updateBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload;
        },
        addBalance: (state, action: PayloadAction<number>) => {
            state.balance += action.payload;
        },
    },
});

export const { setPlayerData, updateBalance, addBalance } = playerSlice.actions;

export const selectNickname = (state: RootState) => state.player.nickname;
export const selectBalance = (state: RootState) => state.player.balance;
export const selectCurrency = (state: RootState) => state.player.currency;
export const selectShowCurrency = (state: RootState) => state.player.showCurrency;
export const selectOperatorId = (state: RootState) => state.player.operatorId;
export const selectLobbyUrl = (state: RootState) => state.player.lobbyUrl;

export default playerSlice.reducer;
