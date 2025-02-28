import { useTranslation } from 'react-i18next';
import { ITransactionCardProps } from '..';
import BettingItemTransaction from '../../../../../../game/components/BettingItemTransaction';
import { formatNumber } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const BettingTable = ({ data }: ITransactionCardProps) => {
    const { t, i18n } = useTranslation();

    const { detail_betting, total_debit, total_credit } = data;

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>
                            <span className="text-capitalize">{t('bet')}</span>
                        </th>
                        <th>(x)</th>
                        <th>
                            X{' '}
                            <span style={{ display: 'inline' }} className="text-capitalize">
                                {t('win')}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {detail_betting.map((betting, index) => (
                        <tr key={index} className={`${betting.win_amount > 0 ? styles.win : ''}`}>
                            <td className="text-nowrap">
                                <BettingItemTransaction data={betting.tebak} />
                            </td>
                            <td>
                                <div className={`${styles['text-center']}`}>
                                    {formatNumber(betting.taruhan, i18n.language)}
                                </div>
                            </td>
                            <td>
                                <div className={`${styles['text-center']}`}>{betting.prize}</div>
                            </td>
                            <td>
                                <div
                                    className={`${styles['text-center']}${
                                        betting.win_amount <= 0 ? ` ${styles.muted}` : ''
                                    }`}
                                >
                                    {formatNumber(betting.win_amount, i18n.language)}
                                </div>
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td>
                            <span className="text-uppercase">{t('total')}</span>
                        </td>
                        <td>
                            <div className={`${styles['text-center']}`}>
                                {formatNumber(total_debit, i18n.language)}
                            </div>
                        </td>
                        <td className={`${styles.shading}`}>&nbsp;</td>
                        <td>
                            <div
                                className={`${styles['text-center']} ${styles.bigger}`}
                                style={{
                                    color: total_credit >= 0 ? '#3be800' : '#ff2667',
                                }}
                            >
                                {formatNumber(total_credit, i18n.language)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BettingTable;
