import { useTranslation } from 'react-i18next';
import { P } from '../../../../../../common/components/HowToPlay/ui';
import { BetDescriptionData, keyLang } from '../helper';
import CardExample from './CardExample';
import styles from './styles.module.scss';

type IProps = {
    nameTable: string;
    data: BetDescriptionData;
};

const TableBetExample = ({ nameTable, data }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className="text-nowrap">{t(`${keyLang}.bet`, { ns: 'game' })}</th>
                        <th className="text-nowrap">
                            {t(`${keyLang}.description`, { ns: 'game' })}
                        </th>
                        <th className="text-nowrap" colSpan={3}>
                            {t(`${keyLang}.result`, { ns: 'game' })}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>
                                <P className="text-nowrap text-center">
                                    {t(`${keyLang}.${nameTable}.${key}.title`, {
                                        ns: 'game',
                                    })}
                                </P>
                            </td>
                            <td>
                                <P className="text-center">
                                    {t(`${keyLang}.${nameTable}.${key}.description`, {
                                        ns: 'game',
                                    })}
                                </P>
                            </td>
                            <td className={styles['card-column']}>
                                <CardExample cardName="dragon" card={data[key].dragon} />
                            </td>
                            <td className={styles['card-column']}>
                                <CardExample cardName="tiger" card={data[key].tiger} />
                            </td>
                            <td className={styles['card-column']}>
                                <CardExample cardName="wild" card={data[key].wild} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBetExample;
