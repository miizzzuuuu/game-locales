import { createServer } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import playerData from './response/player/player.json';
import propertiesData from './response/player/properties.json';
import settingsData from './response/player/settings.json';
import lastbetsAllData from './response/player/lastbets-all.json';
import lastbetsGameData from './response/player/lastbets-game.json';

import gamesData from './response/games/games.json';
import gameData from './response/games/game.json';
import payoutData from './response/games/payout.json';

import timersData from './response/timers/timers.json';
import timerData from './response/timers/timer.json';

import sendBetData from './response/send-bet/success.json';

import resultsP7EData from './response/results/p7e.json';

import transactionsP7EData from './response/transactions/p7e.json';

export function makeServer({ environment = 'test' } = {}) {
    const server = createServer({
        environment,
        routes() {
            // player
            this.get(ENDPOINTS.player, async () => {
                return playerData;
            });

            // player properties
            this.get(ENDPOINTS.playerProperties, async () => {
                return propertiesData;
            });

            // player settings
            this.get(ENDPOINTS.playerSettings, async () => {
                return settingsData;
            });

            this.put(ENDPOINTS.playerSettings, async (_, request) => {
                const settings = JSON.parse(request.requestBody);

                return settings;
            });
            // end player settings

            // lastbets
            this.get(ENDPOINTS.playerLastbets, async () => {
                return lastbetsAllData;
            });

            this.get(ENDPOINTS.playerLastbets + '/:pcode', async () => {
                return lastbetsGameData;
            });

            // games
            this.get(ENDPOINTS.games, async () => {
                return gamesData;
            });

            this.get(ENDPOINTS.games + '/:pcode', async () => {
                return gameData;
            });

            // payout
            this.get(ENDPOINTS.games + '/:pcode/payout', async () => {
                return payoutData;
            });

            // timers
            this.get(ENDPOINTS.timers, async () => {
                return timersData;
            });

            this.get(ENDPOINTS.timers + '/:pcode', async () => {
                return timerData;
            });

            // send bet
            this.post(ENDPOINTS.sendBet, async () => {
                return sendBetData;
            });

            // result
            this.get(ENDPOINTS.result + '/:pcode', async (_, request) => {
                const page = Number(request.params.page);
                const per_page = Number(request.params['per_page']);

                const total_datas = 100;
                const total_page = Math.ceil(total_datas / per_page);

                const data = resultsP7EData;

                return {
                    ...data,
                    pagination: {
                        total_datas: total_datas,
                        current_page: page,
                        total_pages: total_page,
                    },
                };
            });

            // transaction
            this.get(ENDPOINTS.transaction + '/:pcode', async (_, request) => {
                const page = Number(request.params.page);
                const per_page = Number(request.params['per_page']);

                const total_datas = 100;
                const total_page = Math.ceil(total_datas / per_page);

                const data = transactionsP7EData;

                return {
                    ...data,
                    pagination: {
                        total_datas: total_datas,
                        current_page: page,
                        total_pages: total_page,
                    },
                };
            });
        },
    });

    return server;
}
