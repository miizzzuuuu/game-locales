import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const keyLang = 'htp.dragon-tiger-wild-card';
const dataRow1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const dataRow2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

const TableCardValue = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>{t(`${keyLang}.card`, { ns: 'game' })}</td>
                        {dataRow1.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        <td>{t(`${keyLang}.value`, { ns: 'game' })}</td>
                        {dataRow2.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableCardValue;
