import { createServer } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import playerData from './response/player/player.json';
import propertiesData from './response/player/properties.json';
import settingsData from './response/player/settings.json';
import lastbetsAllData from './response/player/lastbets-all.json';
import lastbetsGameData from './response/player/lastbets-game.json';

import payoutData from './response/games/payout.json';

import sendBetData from './response/send-bet/success.json';

import resultsP7EData from './response/results/p7e.json';

import transactionsP7EData from './response/transactions/p7e.json';
import transactionsP6BData from './response/transactions/p6b.json';

import { games } from './db/games';
import { timers } from './db/timer';

export function makeServer({ environment = 'test' } = {}) {
    const server = createServer({
        environment,
        routes() {
            // player
            this.get(
                ENDPOINTS.player,
                async () => {
                    return playerData;
                },
                { timing: 400 },
            );

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
            this.get(ENDPOINTS.games, async (schema) => {
                const games = schema.db.games;

                return games;
            });

            this.get(ENDPOINTS.games + '/:pcode', async (schema, request) => {
                let pcode = request.params.pcode;

                const game = schema.db.games.findBy({ pcode });

                return game;
            });

            // payout
            this.get(ENDPOINTS.games + '/:pcode/payout', async () => {
                return payoutData;
            });

            // timers
            this.get(ENDPOINTS.timers, async (schema) => {
                const timers = schema.db.timers;

                return timers;
            });

            this.get(ENDPOINTS.timers + '/:pcode', async (schema, request) => {
                let pcode = request.params.pcode;

                const timer = schema.db.timers.findBy({ pcode });

                return timer;
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
                const pcode = request.params.pcode;
                // const per_page = Number(request.params['per_page']);

                const total_datas = 100;
                // const total_page = Math.ceil(total_datas / per_page);

                const data =
                    pcode === 'p7e'
                        ? transactionsP7EData
                        : pcode === 'p6b'
                          ? transactionsP6BData
                          : { data: [] };

                return {
                    ...data,
                    pagination: {
                        total_datas: total_datas,
                        current_page: page,
                        total_pages: 1,
                    },
                };
            });

            this.get('/auth/maingame/change', () => {
                return {
                    message: 'success',
                };
            });
        },
    });

    server.db.loadData({
        games,
        timers,
    });

    return server;
}
