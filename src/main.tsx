import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreProvider from './store/StoreProvider.tsx';
import App from './App.tsx';

import { makeServer } from './api/server/server.ts';

import './services/i18next/index.ts';
import './styles/main.scss';

const main = async () => {
    if (import.meta.env.DEV) {
        makeServer({ environment: 'development' });
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pcode = urlParams.get('pcode');

    console.log('game pcode:', pcode);

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <StoreProvider>
                <App />
            </StoreProvider>
        </React.StrictMode>,
    );
};

main();
