import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Player } from '../../types';

type PlayerState = Pick<Player, 'balance' | 'nickname' | 'currency' | 'operatorId'>;

const initialState: PlayerState = {
    nickname: '...',
    balance: 0,
    currency: '',
    operatorId: '',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerData: (state, action: PayloadAction<PlayerState>) => {
            state.nickname = action.payload.nickname;
            state.balance = action.payload.balance;
            state.currency = action.payload.currency;
            state.operatorId = action.payload.operatorId;
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
export const selectOperatorId = (state: RootState) => state.player.operatorId;

export default playerSlice.reducer;
