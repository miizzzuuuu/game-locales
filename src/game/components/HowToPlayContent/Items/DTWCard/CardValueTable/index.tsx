import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import styles from './styles.module.scss';

const CardValueTable = () => {
    const keyLang = 'htp.dragon-tiger-wild-card';
    const dataRow1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const dataRow2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead></thead>
                <tbody>
                    <tr className={``}>
                        <th>
                            <LabelTranslate
                                keyLang={keyLang}
                                value="card"
                                className="text-capitalize"
                            />
                        </th>
                        {dataRow1.map((val) => (
                            <td className="text-nowrap">{val}</td>
                        ))}
                    </tr>
                    <tr className={``}>
                        <th>
                            <LabelTranslate
                                keyLang={keyLang}
                                value="value"
                                className="text-capitalize"
                            />
                        </th>
                        {dataRow2.map((val) => (
                            <td className="text-nowrap">{val}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CardValueTable;
