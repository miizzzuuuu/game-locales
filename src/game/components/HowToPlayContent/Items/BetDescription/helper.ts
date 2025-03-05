export type CardData = { card: string; value?: number };
export type BetDescriptionData = Record<string, Record<string, CardData>>;

export const mainBetData: BetDescriptionData = {
    dragon: {
        dragon: {
            card: 'Ks',
            value: 13,
        },
        tiger: {
            card: '7h',
            value: 7,
        },
        wild: {
            card: '',
        },
    },
    tiger: {
        dragon: {
            card: '7c',
            value: 7,
        },
        tiger: {
            card: 'Kd',
            value: 13,
        },
        wild: {
            card: '',
        },
    },
    tie: {
        dragon: {
            card: 'Kd',
            value: 13,
        },
        tiger: {
            card: 'Ks',
            value: 13,
        },
        wild: {
            card: '',
        },
    },
};

export const sideBetData: BetDescriptionData = {
    'dragon-wild': {
        dragon: {
            card: 'Ks',
        },
        tiger: {
            card: '8h',
        },
        wild: {
            card: 'Kd',
        },
    },
    'tiger-wild': {
        dragon: {
            card: '8h',
        },
        tiger: {
            card: 'Ks',
        },
        wild: {
            card: 'Kh',
        },
    },
    'super-wild': {
        dragon: {
            card: 'Kd',
        },
        tiger: {
            card: 'Ks',
        },
        wild: {
            card: 'Kd',
        },
    },
    'dragon-pair': {
        dragon: {
            card: 'Ks',
        },
        tiger: {
            card: '',
        },
        wild: {
            card: 'Kh',
        },
    },
    'tiger-pair': {
        dragon: {
            card: '',
        },
        tiger: {
            card: 'Kc',
        },
        wild: {
            card: 'Kc',
        },
    },
};

export const exampleDataValue: Record<string, Record<string, string>> = {
    'dragon-wild': {
        dragon: '13',
        tiger: '8',
        wild: '13',
    },
    'tiger-wild': {
        dragon: '8',
        tiger: '13',
        wild: '13',
    },
    'super-wild': {
        dragon: '13',
        tiger: '13',
        wild: '13',
    },
    'dragon-pair': {
        dragon: '13',
        tiger: '',
        wild: '13',
    },
    'tiger-pair': {
        dragon: '',
        tiger: '13',
        wild: '13',
    },
};
