export type Payout = {
    name: string;
    payout: string;
};

export const mainBetPayout: Payout[] = [
    {
        name: 'one-number',
        payout: '29:1',
    },
    {
        name: 'two-numbers',
        payout: '175:1',
    },
    {
        name: 'three-numbers',
        payout: '11:1',
    },
    {
        name: 'four-numbers',
        payout: '8:1',
    },
    {
        name: 'six-numbers',
        payout: '8:1',
    },
    {
        name: 'three-numbers-with-0',
        payout: '11:1',
    },
    {
        name: 'column-bet',
        payout: '2:1',
    },
    {
        name: 'bet-dozen',
        payout: '2:1',
    },
];

export const sideBetPayout: Payout[] = [
    {
        name: 'big',
        payout: '1:1',
    },
    {
        name: 'small',
        payout: '1:1',
    },
    {
        name: 'odd',
        payout: '1:1',
    },
    {
        name: 'even',
        payout: '1:1',
    },
    {
        name: 'red',
        payout: '1:1',
    },
    {
        name: 'black',
        payout: '1:1',
    },
];
