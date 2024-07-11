import { createServer, Response } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import sendBetData from './response/send-bet/success.json';

// result
import resultsM6 from './response/results/m6.json';
import resultsM7 from './response/results/m7.json';
import resultM22 from './response/results/m22.json';
import resultM23 from './response/results/m23.json';
import resultP6 from './response/results/p6.json';
import resultsP7E from './response/results/p7e.json';

import transactionsP6B from './response/transactions/p6b.json';
import transactionsP7E from './response/transactions/p7e.json';

// database
import { games } from './db/games';
import { timers } from './db/timer';
import { player } from './db/player';
import { settings } from './db/settings';
import { properties } from './db/properties';
import { lastbets } from './db/lastbets';
import { payouts } from './db/payouts';
import { PayoutData } from '../../types';

export function makeServer({ environment = 'test' } = {}) {
    const server = createServer({
        environment,
        routes() {
            // player
            this.get(
                ENDPOINTS.player,
                async () => {
                    return player;
                },
                { timing: 400 },
            );

            // player properties
            this.get(ENDPOINTS.playerProperties, async (scheme) => {
                const properties = scheme.db.properties;
                return properties;
            });

            // player settings
            this.get(ENDPOINTS.playerSettings, async () => {
                return settings;
            });

            this.put(ENDPOINTS.playerSettings, async (_, request) => {
                const settings = JSON.parse(request.requestBody);

                return settings;
            });
            // end player settings

            // lastbets
            this.get(ENDPOINTS.playerLastbets, async () => {
                return lastbets;
            });

            this.get(ENDPOINTS.playerLastbets + '/:pcode', async (_, request) => {
                const pcode = request.params.pcode;

                let lastbet: { periode: number; data: any[] } | { message: string } | undefined =
                    lastbets[pcode];

                if (!lastbet) {
                    return new Response(
                        400,
                        {},
                        {
                            message: 'Empty Lastbet',
                        },
                    );
                }

                return lastbet;
            });

            // games
            this.get(ENDPOINTS.games, async (schema) => {
                const games = schema.db.games;

                return games;
            });

            this.get(ENDPOINTS.games + '/:pcode', async (schema, request) => {
                const pcode = request.params.pcode;

                const game = schema.db.games.findBy({ pcode });

                return game;
            });

            // payout
            this.get(ENDPOINTS.games + '/:pcode/payout', async (_, request) => {
                const pcode = request.params.pcode;

                let payout: PayoutData[] | { message: string } | undefined = payouts[pcode];

                if (!payout) {
                    payout = { message: 'Payout Empty' };
                }

                return payout;
            });

            // timers
            this.get(ENDPOINTS.timers, async (schema) => {
                const timers = schema.db.timers;

                return timers;
            });

            this.get(ENDPOINTS.timers + '/:pcode', async (schema, request) => {
                const pcode = request.params.pcode;

                const timer = schema.db.timers.findBy({ pcode });

                return timer;
            });

            // send bet
            this.post(ENDPOINTS.sendBet, async () => {
                return sendBetData;
            });

            // result
            this.get(ENDPOINTS.result + '/:pcode', async (_, request) => {
                const pcode = request.params.pcode;

                const page = Number(request.params.page);
                const per_page = Number(request.params['per_page']);

                const total_datas = 100;
                const total_page = Math.ceil(total_datas / per_page);

                let data: { data: any[] };
                switch (pcode) {
                    case 'm6':
                        data = resultsM6;
                        break;
                    case 'm7':
                        data = resultsM7;
                        break;
                    case 'm22':
                    case 'm22b':
                    case 'm22c':
                    case 'm22d':
                        data = resultM22;
                        break;
                    case 'm23':
                        data = resultM23;
                        break;
                    case 'p6':
                    case 'p6b':
                        data = resultP6;
                        break;
                    case 'p7e':
                        data = resultsP7E;
                        break;
                    default:
                        data = { data: [] };
                }

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

                let data: object;
                switch (pcode) {
                    case 'p6':
                    case 'p6b':
                        data = transactionsP6B;
                        break;
                    case 'p7e':
                    case 'p7b':
                    case 'p7c':
                    case 'p7d':
                    case 'p7e':
                        data = transactionsP7E;
                        break;
                    default:
                        data = { data: [] };
                }

                return {
                    ...data,
                    pagination: {
                        total_datas: total_datas,
                        current_page: page,
                        total_pages: 1,
                    },
                };
            });

            // back to lobby
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
        properties,
    });

    return server;
}
