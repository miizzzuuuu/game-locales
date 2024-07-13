import { PayoutData } from '../../../types';

export const payouts: Record<string, PayoutData[]> = {
    p6b: [
        {
            name: 'one number',
            min: 1000,
            max: 1000000,
            payout: 29,
            items: [],
        },
        {
            name: 'two number',
            min: 1000,
            max: 1000000,
            payout: 17,
            items: [],
        },
        {
            name: 'four number',
            min: 1000,
            max: 1000000,
            payout: 8,
            items: [],
        },
        {
            name: 'bet column',
            min: 1000,
            max: 1000000,
            payout: 2,
            items: [],
        },
        {
            name: 'bet row',
            min: 1000,
            max: 1000000,
            payout: 2,
            items: [],
        },
        {
            name: 'side bet',
            min: 1000,
            max: 1000000,
            payout: null,
            items: [
                {
                    name: 'big',
                    payout: 1,
                },
                {
                    name: 'small',
                    payout: 1,
                },
                {
                    name: 'odd',
                    payout: 1,
                },
                {
                    name: 'even',
                    payout: 1,
                },
                {
                    name: 'red',
                    payout: 1,
                },
                {
                    name: 'black',
                    payout: 1,
                },
            ],
        },
    ],
};
