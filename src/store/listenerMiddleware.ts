import {
    addListener,
    createListenerMiddleware,
    TypedAddListener,
    TypedStartListening,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

import { confirmBetFullfiledListener } from './listener/betsListener';
import { endWinAnimationListener } from './listener/resultListener';
import { updateSettingsListener } from './listener/settingsListener';
import {
    gameResultListener,
    loadNewValueListener,
    scanNumberListener,
} from './listener/socketListener';
import { closeTimeListener, openTimeListener } from './listener/timerListener';

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

loadNewValueListener(startAppListening);
scanNumberListener(startAppListening);
gameResultListener(startAppListening);
closeTimeListener(startAppListening);
openTimeListener(startAppListening);
confirmBetFullfiledListener(startAppListening);
updateSettingsListener(startAppListening);
endWinAnimationListener(startAppListening);
