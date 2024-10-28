import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import CardExample from '../CardTable';

import styles from './styles.module.scss';

export type ICardExample = Record<string, string>;

interface IProps {
    keyLang: string;
    keyLangMain: string;
    data: string[];
    exampleData: Record<string, Record<string, string>>;
    exampleDataValue: Record<string, Record<string, string>>;
}

const TableExample = ({ keyLang, keyLangMain, data, exampleData, exampleDataValue }: IProps) => {
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
                        <th colSpan={4}>
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
                            <td>
                                <LabelTranslate
                                    keyLang={keyLangMain.concat(`.${tableKeyLang}`)}
                                    value="title"
                                    className="text-capitalize"
                                />
                            </td>
                            <td>
                                <LabelTranslate
                                    keyLang={keyLangMain.concat(`.${tableKeyLang}`)}
                                    value="description"
                                    className={styles.desc}
                                    dangerouslySetInnerHTML
                                />
                            </td>
                            {Object.keys(exampleData[tableKeyLang]).map((key, idx) => {
                                return (
                                    <td key={idx} className={styles['card']}>
                                        <CardExample
                                            keyCard={key}
                                            data={exampleData[tableKeyLang][key]}
                                            dataValue={exampleDataValue[tableKeyLang][key]}
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

export default TableExample;
