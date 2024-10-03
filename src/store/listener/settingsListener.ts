import { updatePlayerSettings } from '../../services/api/playerSettings';
import { AppStartListening } from '../listenerMiddleware';
import { updateSetings } from '../slice/settingsSlice';

export const updateSettingsListener = (startListening: AppStartListening) => {
    startListening({
        actionCreator: updateSetings,
        effect: (_, listenerApi) => {
            console.log('middleware: updateSettings');

            const state = listenerApi.getState();

            const settings = state.settings;

            void updatePlayerSettings(settings);
        },
    });
};
