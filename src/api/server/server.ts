import { createServer, Response } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import sendBetData from './response/send-bet/success.json';
import eventsList from './response/events/eventsList.json';
import eventLatestWinners from './response/events/latestWinners.json';
import eventTopWinners from './response/events/topWinners.json';
import eventPrize from './response/events/eventsPrize.json';

// result
import resultData from './resultData';

// transaction
import transactionData from './transactionData';

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
                () => {
                    return player;
                },
                { timing: 400 },
            );

            // player properties
            this.get(ENDPOINTS.playerProperties, (scheme) => {
                const properties = scheme.db.properties;
                return properties;
            });

            // player settings
            this.get(ENDPOINTS.playerSettings, () => {
                return settings;
            });

            this.put(ENDPOINTS.playerSettings, (_, request) => {
                const settings = JSON.parse(request.requestBody);

                return settings;
            });
            // end player settings

            // lastbets
            this.get(ENDPOINTS.playerLastbets, () => {
                return lastbets;
            });

            this.get(ENDPOINTS.playerLastbets + '/:pcode', (_, request) => {
                const pcode = request.params.pcode;

                const lastbet: { periode: number; data: any[] } | { message: string } | undefined =
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
            this.get(ENDPOINTS.games, (schema) => {
                const games = schema.db.games;

                return games;
            });

            this.get(ENDPOINTS.games + '/:pcode', (schema, request) => {
                const pcode = request.params.pcode;

                const game = schema.db.games.findBy({ pcode });

                return game;
            });

            // payout
            this.get(ENDPOINTS.games + '/:pcode/payout', (_, request) => {
                const pcode = request.params.pcode;

                const payout: PayoutData[] | { message: string } | undefined = payouts[pcode];

                if (!payout) {
                    return new Response(400, {}, { message: 'Payout Empty' });
                }

                return payout;
            });

            // timers
            this.get(ENDPOINTS.timers, (schema) => {
                const timers = schema.db.timers;

                return timers;
            });

            this.get(ENDPOINTS.timers + '/:pcode', (schema, request) => {
                const pcode = request.params.pcode;

                const timer = schema.db.timers.findBy({ pcode });

                return timer;
            });

            // send bet
            this.post(ENDPOINTS.sendBet, () => {
                return sendBetData;
            });

            // result
            this.get(ENDPOINTS.result + '/:pcode', (_, request) => {
                const pcode = request.params.pcode;

                const page = Number(request.params.page);
                const per_page = Number(request.params.per_page);

                const total_datas = 100;
                const total_page = Math.ceil(total_datas / per_page);

                let data: { data: any[] };

                if (pcode in resultData) {
                    data = resultData[pcode];
                } else {
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
            this.get(ENDPOINTS.transaction + '/:pcode', (_, request) => {
                const page = Number(request.params.page);
                const pcode = request.params.pcode;
                // const per_page = Number(request.params['per_page']);

                const total_datas = 100;
                // const total_page = Math.ceil(total_datas / per_page);

                let data: object;
                if (pcode in transactionData) {
                    data = transactionData[pcode];
                } else {
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

            // mini how to play
            this.get(ENDPOINTS.miniHowToPlay + '/:pcode', () => {
                return {
                    show: true,
                };
            });

            this.put(ENDPOINTS.miniHowToPlay + '/:pcode', () => {
                return {
                    show: false,
                };
            });

            // events
            this.get(
                ENDPOINTS.events,
                () => {
                    return eventsList;
                },
                { timing: 1000 },
            );
            this.get(ENDPOINTS.events + '/:name' + ENDPOINTS.eventLatestWinners, () => {
                return eventLatestWinners;
            });
            this.get(ENDPOINTS.events + '/:name' + ENDPOINTS.eventTopWinners, () => {
                return eventTopWinners;
            });
            this.post(ENDPOINTS.events + '/:name' + ENDPOINTS.eventGetPrize, () => {
                return eventPrize;
            });
            // end events

            this.passthrough();
            this.passthrough('https://cdn.lottielab.com/*');
        },
    });

    server.db.loadData({
        games,
        timers,
        properties,
    });

    return server;
}
