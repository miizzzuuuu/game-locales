import { combineReducers } from '@reduxjs/toolkit';

// import betAddReducer from './slice/betAddSlice';
// import betSendReducer from './slice/betSendSlice';
// import chipReducer from './slice/chipSlice';
// import gameReducer from './slice/gameSlice';
// import gameStateReducer from './slice/gameStateSlice';
// import lastBetReducer from './slice/lastBetSlice';
// import menuReducer from './slice/menuSlice';
// import playerReducer from './slice/playerSlice';
// import resultReducer from './slice/resultSlice';
// import settingsReducer from './slice/settingsSlice';
// import timerReducer from './slice/timerSlice';
import windowReducer from './slice/windowSlice';

export const rootReducer = combineReducers({
    // betAdd: betAddReducer,
    // betSend: betSendReducer,
    // chip: chipReducer,
    // game: gameReducer,
    // gameState: gameStateReducer,
    // lastBet: lastBetReducer,
    // menu: menuReducer,
    // player: playerReducer,
    // result: resultReducer,
    // settings: settingsReducer,
    // timer: timerReducer,
    window: windowReducer,
});
