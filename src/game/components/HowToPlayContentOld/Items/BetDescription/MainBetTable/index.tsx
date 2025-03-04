import TableExample from '../TableExample';

interface IHowtoplayTablebet {
    data: string[];
}

export const exampleData: Record<string, Record<string, string>> = {
    dragon: {
        dragon: 'Ks',
        tiger: '7h',
        wild: '',
    },
    tiger: {
        dragon: '7c',
        tiger: 'Kd',
        wild: '',
    },
    tie: {
        dragon: 'Kd',
        tiger: 'Ks',
        wild: '',
    },
};

export const exampleDataValue: Record<string, Record<string, string>> = {
    dragon: {
        dragon: '13',
        tiger: '7',
        wild: '',
    },
    tiger: {
        dragon: '7',
        tiger: '13',
        wild: '',
    },
    tie: {
        dragon: '13',
        tiger: '13',
        wild: '',
    },
};

const MainBetTable = ({ data }: IHowtoplayTablebet) => {
    const keyLang = 'htp.bet-description-and-example.main-bet';
    const keyLangMain = 'htp.bet-description-and-example.main-bet.table';

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

export default MainBetTable;
