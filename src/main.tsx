import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { makeServer } from './api/server/server.ts';
import { handleErrorApi } from './common/utils/APIManager.ts';
import { BetHelper } from './common/utils/BetHelper.ts';
import { setPcode } from './common/utils/GameHelper.ts';
import { _24DBet } from './game/utils/_24DBet.ts';
import './services/i18next/index.ts';
import StoreProvider from './store/StoreProvider.tsx';
import './styles/main.scss';

declare global {
    interface Window {
        isIOS: any;
    }
}

const main = () => {
    if (import.meta.env.DEV) {
        makeServer({ environment: 'development' });
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pcode = urlParams.get('pcode');

    console.log('game pcode:', pcode);

    if (!pcode) {
        handleErrorApi(new Error('pcode empty'));
        return;
    }

    setPcode(pcode);
    document.body.classList.add(pcode);

    // modify for spesifik
    BetHelper.game = new _24DBet();

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <StoreProvider>
                <App />
            </StoreProvider>
        </React.StrictMode>,
    );
};

console.log('running in mode:', import.meta.env.MODE);

main();
