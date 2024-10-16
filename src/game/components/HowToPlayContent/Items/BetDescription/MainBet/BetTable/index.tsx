import LabelTranslate from '../../../../../../../common/components/LabelTranslate';
import { P } from '../../../../../../../common/menus/Items/HowToPlay/Components';
import CardExample, { ICardExample } from '../CardTable';
import styles from './styles.module.scss';

interface IHowtoplayTablebet {
    data: string[];
}

export const exampleData: {
    [key: string]: ICardExample['data'];
} = {
    dragon: {
        dragon: 'K',
        tiger: '7',
    },
    tiger: {
        dragon: '7',
        tiger: 'K',
    },
    tie: {
        dragon: 'K',
        tiger: 'K',
    },
};

const BetTable = ({ data }: IHowtoplayTablebet) => {
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
                        <th>
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
                                    keyLang={'htp.main-bet.table.'.concat(tableKeyLang)}
                                    value="title"
                                    className="text-capitalize"
                                />
                            </td>
                            <td>
                                <P
                                    keyLang={'htp.main-bet.table.'.concat(tableKeyLang)}
                                    value="description"
                                    className={`${styles['text-center']}`}
                                ></P>
                            </td>
                            <td className={styles['card']}>
                                <CardExample data={exampleData[tableKeyLang]} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BetTable;
