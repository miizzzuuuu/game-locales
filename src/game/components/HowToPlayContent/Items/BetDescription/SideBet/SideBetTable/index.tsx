import TableExample from '../../TableExample';

interface IHowtoplayTablebet {
    data: string[];
}

export const exampleData: Record<string, Record<string, string>> = {
    'dragon-wild': {
        dragon: 'Ks',
        tiger: '8h',
        wild: 'Kd',
    },
    'tiger-wild': {
        dragon: '8h',
        tiger: 'Ks',
        wild: 'Kh',
    },
    'super-wild': {
        dragon: 'Kd',
        tiger: 'Ks',
        wild: 'Kd',
    },
    'dragon-pair': {
        dragon: 'Ks',
        tiger: '',
        wild: 'Kh',
    },
    'tiger-pair': {
        dragon: '',
        tiger: 'Kc',
        wild: 'Kc',
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

const SideBetTable = ({ data }: IHowtoplayTablebet) => {
    const keyLang = 'htp.bet-description-and-example.side-bet';
    const keyLangMain = 'htp.bet-description-and-example.side-bet.table';

    return (
        <TableExample
            keyLang={keyLang}
            keyLangMain={keyLangMain}
            data={data}
            exampleData={exampleData}
            exampleDataValue={exampleDataValue}
        />
    );
};

export default SideBetTable;
