import { ITransactionCardProps } from '..';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectCurrency } from '../../../../../../store/slice/playerSlice';
import { selectLanguage } from '../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../components/LabelTranslate';
import { GameHelper } from '../../../../../utils/GameHelper';
import { LangHelper } from '../../../../../utils/LangHelper';
import { StringHelper } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const CardMinimize = ({ data }: ITransactionCardProps) => {
    const { tglbel, pcode, total_transaction, total_debit, periode } = data;

    const lang = useAppSelector(selectLanguage);
    const currency = useAppSelector(selectCurrency);

    return (
        <div className={styles['card-top']}>
            <div className={`${styles['col-2']}`}>
                <span className={styles['game-name']}>{GameHelper.getGameDisplayName(pcode)}</span>

                <span
                    className={`${styles['text-total-transaction']}`}
                    style={{
                        color: total_transaction >= 0 ? '#3be800' : '#ff2667',
                    }}
                >
                    {total_transaction > 0 ? '+' : ''}
                    {StringHelper.formatMoneyWithCurrency(total_transaction, currency, lang)}
                </span>
            </div>

            <div className={`${styles['col-2']}`}>
                <span className={styles['text-secondary']}>
                    {LangHelper.formatedDate(tglbel, lang)}
                </span>
                <span className={styles['text-secondary']}>
                    {StringHelper.formatMoneyWithCurrency(total_debit, currency, lang)}
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
