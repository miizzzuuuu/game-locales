import { useTranslation } from 'react-i18next';
import { P } from '../../../../../../common/components/HowToPlay/ui';
import { prefixBetDescription } from '../../../helper';
import { BetDescriptionData } from '../helper';
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
                        <th className="text-nowrap">
                            {t(`${prefixBetDescription}.bet`, { ns: 'game' })}
                        </th>
                        <th className="text-nowrap">
                            {t(`${prefixBetDescription}.description`, { ns: 'game' })}
                        </th>
                        <th className="text-nowrap" colSpan={3}>
                            {t(`${prefixBetDescription}.result`, { ns: 'game' })}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>
                                <P className="text-nowrap text-center">
                                    {t(`${prefixBetDescription}.${nameTable}.${key}.title`, {
                                        ns: 'game',
                                    })}
                                </P>
                            </td>
                            <td>
                                <P className="text-center">
                                    {t(`${prefixBetDescription}.${nameTable}.${key}.description`, {
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
