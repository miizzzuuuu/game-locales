import { LoadNewValueData } from '../../types';

export const dummyChipBase = [
    1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 5000000,
];

export const dummyLoadNewValue: LoadNewValueData = {
    game: '',
    win: '10',
    pcode: 'p6d',
    timer: '60',
    periode: 60,
};

export const payoutData = [
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
        name: 'three number',
        min: 1000,
        max: 1000000,
        payout: 11,
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
        name: 'six number',
        min: 1000,
        max: 1000000,
        payout: 8,
        items: [],
    },
    {
        name: 'three numbers with 0',
        min: 1000,
        max: 1000000,
        payout: 11,
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
        name: 'bet dozen',
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
];
