import {
    addListener,
    createListenerMiddleware,
    TypedAddListener,
    TypedStartListening,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

import { gameResultListener, loadNewValueListener } from './listener/socketListener';
import { closeTimeListener } from './listener/timerListener';
import { confirmBetFullfiledListener } from './listener/betAddListener';
import { updateSettingsListener } from './listener/settingsListener';

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

loadNewValueListener(startAppListening);
gameResultListener(startAppListening);
closeTimeListener(startAppListening);
confirmBetFullfiledListener(startAppListening);
updateSettingsListener(startAppListening);
