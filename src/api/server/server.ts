import { createServer } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import sendBetData from './response/send-bet/success.json';

// result
import resultsM6 from './response/results/m6.json';
import resultsM7 from './response/results/m7.json';
import resultM22 from './response/results/m22.json';
import resultM23 from './response/results/m23.json';
import resultP6 from './response/results/p6.json';
import resultsP7E from './response/results/p7e.json';

import transactionsP7EData from './response/transactions/p7e.json';
import transactionsP6BData from './response/transactions/p6b.json';

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
                async (schema) => {
                    const player = schema.db.player;
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
            this.get(ENDPOINTS.playerSettings, async (scheme) => {
                const settings = scheme.db.settings;
                return settings;
            });

            this.put(ENDPOINTS.playerSettings, async (_, request) => {
                const settings = JSON.parse(request.requestBody);

                return settings;
            });
            // end player settings

            // lastbets
            this.get(ENDPOINTS.playerLastbets, async (schema) => {
                const lastbets = schema.db.lastbets;
                return lastbets;
            });

            this.get(ENDPOINTS.playerLastbets + '/:pcode', async (_, request) => {
                const pcode = request.params.pcode;

                let lastbet: { periode: number; data: any[] } | { message: string } | undefined =
                    lastbets[pcode];

                if (!lastbet) {
                    lastbet = {
                        message: 'Empty Lastbet',
                    };
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
        player,
        settings,
        properties,
        lastbets,
    });

    return server;
}
