import LabelTranslate from '../../../../../../../common/components/LabelTranslate';
import { P } from '../../../../../../../common/menus/Items/HowToPlay/Components';
import CardExample, { ICardExample } from '../../CardTable';
import styles from './styles.module.scss';

interface IHowtoplayTablebet {
    data: string[];
}

export const exampleData: {
    [key: string]: ICardExample['data'];
} = {
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

export const exampleDataValue: {
    [key: string]: ICardExample['data'];
} = {
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

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            <LabelTranslate
                                keyLang={keyLang}
                                value="title"
                                className="text-capitalize"
                            />
                        </th>
                        <th>
                            <LabelTranslate
                                keyLang={keyLang}
                                value="description"
                                className="text-capitalize"
                            />
                        </th>
                        <th colSpan={3}>
                            <LabelTranslate
                                keyLang={keyLang}
                                value="examples"
                                className="text-capitalize"
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tableKeyLang, index) => (
                        <tr key={index} className={``}>
                            <td className="text-nowrap">
                                <LabelTranslate
                                    keyLang={'htp.bet-description-and-example.main-bet.table.'.concat(
                                        tableKeyLang,
                                    )}
                                    value="title"
                                    className="text-capitalize"
                                />
                            </td>
                            <td>
                                <P
                                    keyLang={'htp.bet-description-and-example.main-bet.table.'.concat(
                                        tableKeyLang,
                                    )}
                                    dangerouslySetInnerHTML
                                    value="description"
                                    className={`${styles['text-center']}`}
                                ></P>
                            </td>
                            {Object.keys(exampleData[tableKeyLang]).map((key) => {
                                return (
                                    <td className={styles['card']}>
                                        <CardExample
                                            // @ts-ignore
                                            data={{ [key]: exampleData[tableKeyLang][key] }}
                                            dataValue={{
                                                // @ts-ignore
                                                [key]: exampleDataValue[tableKeyLang][key],
                                            }}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MainBetTable;
