import { createServer, Response } from 'miragejs';
import { ENDPOINTS } from '../../common/utils/APIManager';

import eventsList from './response/events/eventsList.json';
import eventPrize from './response/events/eventsPrize.json';
import eventLatestWinners from './response/events/latestWinners.json';
import eventTopWinners from './response/events/topWinners.json';
import sendBetData from './response/send-bet/success.json';
import { time, timer } from './response/timer/dummyTimer';

// games
import gameData from './gameData';

// payouts
import payoutData from './payoutData';

// results
import resultData from './resultData';

// thunders
import thunderData from './thunderData';

// transactions
import transactionData from './transactionData';

// database
import { lastbets } from './db/lastbets';
import { player } from './db/player';
import { properties } from './db/properties';
import { settings } from './db/settings';

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
            this.get(ENDPOINTS.playerProperties, () => {
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
            this.get(ENDPOINTS.games, () => {
                return gameData;
            });

            this.get(ENDPOINTS.games + '/:pcode', (_, request) => {
                const pcode = request.params.pcode;

                if (pcode in gameData) {
                    return gameData[pcode];
                } else {
                    return new Response(400, {}, { message: 'Game Empty' });
                }
            });

            // payout
            this.get(ENDPOINTS.games + '/:pcode/payout', (_, request) => {
                const pcode = request.params.pcode;

                if (pcode in payoutData) {
                    return payoutData[pcode];
                } else {
                    return new Response(400, {}, { message: 'Payout Empty' });
                }
            });

            // thunder
            this.get(ENDPOINTS.currentThunder + '/:pcode/:period', (_, request) => {
                const pcode = request.params.pcode;

                if (pcode in thunderData) {
                    return thunderData[pcode];
                } else {
                    return new Response(400, {}, { message: 'Thunder Empty' });
                }
            });

            // timers
            this.get(ENDPOINTS.timers + '/:pcode', (_, request) => {
                const pcode = request.params.pcode;

                return {
                    pcode: pcode,
                    time: time,
                    timer: timer,
                };
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

    return server;
}
