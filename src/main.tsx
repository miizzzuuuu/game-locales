import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreProvider from './store/StoreProvider.tsx';
import App from './App.tsx';

import { makeServer } from './api/server/server.ts';

import { GameHelper } from './common/utils/GameHelper.tsx';
import APIManager from './common/utils/APIManager.ts';

import './services/i18next/index.ts';
import './styles/main.scss';
import { BetHelper } from './common/utils/BetHelper.ts';
import { TwentyFourDBet } from './game/utils/TwentyFourDBet.ts';

const main = async () => {
    if (import.meta.env.DEV) {
        makeServer({ environment: 'development' });
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pcode = urlParams.get('pcode');

    console.log('game pcode:', pcode);

    if (!pcode) {
        APIManager.handleErrorApi(new Error('pcode empty'));
        return;
    }

    GameHelper.pcode = pcode;
    GameHelper.activeLetterBox = false; // default false

    // modify for spesifik
    BetHelper.game = new TwentyFourDBet();

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
