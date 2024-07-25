import { PayoutData } from '../../../types';

export const payouts: Record<string, PayoutData[]> = {
    p6b: [
        {
            name: 'one number',
            payout: 18,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'two numbers',
            payout: 8.5,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'four numbers',
            payout: 3.75,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'single row',
            payout: 2.16,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'single column',
            payout: 3.75,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'double row',
            payout: 0.95,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'double column',
            payout: 1.375,
            items: [],
            min: 1000,
            max: 1000000,
        },
        {
            name: 'side bet',
            payout: null,
            items: [
                {
                    name: 'big',
                    payout: 0.95,
                },
                {
                    name: 'small',
                    payout: 0.95,
                },
                {
                    name: 'odd',
                    payout: 0.95,
                },
                {
                    name: 'even',
                    payout: 0.95,
                },
                {
                    name: 'red',
                    payout: 0.95,
                },
                {
                    name: 'black',
                    payout: 0.95,
                },
            ],
            min: 5000,
            max: 5000000,
        },
    ],
};
