import { useTranslation } from 'react-i18next';
import { ITransactionCardProps } from '..';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectGameName } from '../../../../../../store/slice/gameSlice';
import { selectCurrency, selectShowCurrency } from '../../../../../../store/slice/playerSlice';
import LabelTranslate from '../../../../../components/LabelTranslate';
import { getGameDisplayName, getPcode } from '../../../../../utils/GameHelper';
import { formatCurrency, formatedDate } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const CardMinimize = ({ data }: ITransactionCardProps) => {
    const { i18n } = useTranslation();

    const { tglbel, pcode, total_transaction, total_debit, periode } = data;

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const gameName = useAppSelector(selectGameName);

    return (
        <div className={styles['card-top']}>
            <div className={`${styles['col-2']}`}>
                <span className={styles['game-name']}>
                    {pcode === getPcode() ? gameName : getGameDisplayName(pcode)}
                </span>

                <span
                    className={`${styles['text-total-transaction']}`}
                    style={{
                        color: total_transaction >= 0 ? '#3be800' : '#ff2667',
                    }}
                >
                    {total_transaction > 0 ? '+' : ''}
                    {formatCurrency(total_transaction, currency, i18n.language, !showCurrency)}
                </span>
            </div>

            <div className={`${styles['col-2']}`}>
                <span className={styles['text-secondary']}>
                    {formatedDate(tglbel, i18n.language)}
                </span>
                <span className={styles['text-secondary']}>
                    {formatCurrency(total_debit, currency, i18n.language, !showCurrency)}
                </span>
            </div>

            <div className={styles.bottom}>
                <LabelTranslate
                    value="period"
                    className={styles['text-secondary']}
                    style={{ textTransform: 'capitalize' }}
                />

                <span className={styles['text-period']}>#{periode}</span>
            </div>
        </div>
    );
};

export default CardMinimize;
