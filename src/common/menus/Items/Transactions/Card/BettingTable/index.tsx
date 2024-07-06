import { ITransactionCardProps } from '..';
import BettingItemTransaction from '../../../../../../game/components/BettingItemTransaction';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectLanguage } from '../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../components/LabelTranslate';
import { StringHelper } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const BettingTable = ({ data }: ITransactionCardProps) => {
    const { detail_betting, total_debit, total_credit } = data;

    const lang = useAppSelector(selectLanguage);

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>
                            <LabelTranslate value="bet" style={{ textTransform: 'capitalize' }} />
                        </th>
                        <th>(x)</th>
                        <th>
                            X{' '}
                            <LabelTranslate
                                value="win"
                                style={{ textTransform: 'capitalize', display: 'inline' }}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {detail_betting.map((betting, index) => (
                        <tr key={index} className={`${betting.win_amount > 0 ? styles.win : ''}`}>
                            <td>
                                <BettingItemTransaction data={betting.tebak} />
                            </td>
                            <td>
                                <div className={`${styles['text-center']}`}>
                                    {StringHelper.formatMoneyOnlyNumber(betting.taruhan, lang)}
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
                                    {StringHelper.formatMoneyOnlyNumber(betting.win_amount, lang)}
                                </div>
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td>
                            <LabelTranslate value="total" style={{ textTransform: 'capitalize' }} />
                        </td>
                        <td>
                            <div className={`${styles['text-center']}`}>
                                {StringHelper.formatMoneyOnlyNumber(total_debit, lang)}
                            </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            <div
                                className={`${styles['text-center']} ${styles['bigger']}`}
                                style={{
                                    color: total_credit >= 0 ? '#3be800' : '#ff2667',
                                }}
                            >
                                {StringHelper.formatMoneyOnlyNumber(total_credit, lang)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BettingTable;
