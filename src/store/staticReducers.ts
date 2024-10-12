import baseReducer from './slice/baseSlice';
// import betAddReducer from './slice/betAddSlice';
// import betSendReducer from './slice/betSendSlice';
import betsReducer from './slice/bets';
import chipReducer from './slice/chipSlice';
import gameReducer from './slice/gameSlice';
import gameStateReducer from './slice/gameStateSlice';
import historyReducer from './slice/historySlice';
import lastBetsReducer from './slice/lastBetsSlice';
import menuReducer from './slice/menuSlice';
import playerReducer from './slice/playerSlice';
import resultReducer from './slice/resultSlice';
import settingsReducer from './slice/settingsSlice';
import timerReducer from './slice/timerSlice';
import topWinnerReducer from './slice/topWinnerSlice';
import windowReducer from './slice/windowSlice';

export const staticReducers = {
    base: baseReducer,

    bets: betsReducer,
    // betAdd: betAddReducer,
    // betSend: betSendReducer,
    chip: chipReducer,
    game: gameReducer,
    gameState: gameStateReducer,
    lastBets: lastBetsReducer,
    menu: menuReducer,
    player: playerReducer,
    result: resultReducer,
    history: historyReducer,
    settings: settingsReducer,
    timer: timerReducer,
    topWinner: topWinnerReducer,
    window: windowReducer,
};
