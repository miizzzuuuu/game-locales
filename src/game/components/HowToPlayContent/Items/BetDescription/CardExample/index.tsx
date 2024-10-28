import { useTranslation } from 'react-i18next';
import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import { getBasePcode } from '../../../../../../common/utils/GameHelper';
import Card from '../Card';
import styles from './style.module.scss';

export interface IProps {
    keyCard: string;
    data: string;
    dataValue?: string;
}

const CardExample = ({ keyCard, data, dataValue }: IProps) => {
    const { t } = useTranslation();
    const keyLang = getBasePcode();

    return (
        <div className={styles['item']}>
            <LabelTranslate value={keyCard} keyLang={keyLang} className={styles.name} />

            <div className={styles.cards}>
                <Card value={data} />
            </div>

            <span className={styles.value}>
                {!dataValue
                    ? t('htp.bet-description-and-example.anything')
                    : dataValue
                      ? dataValue
                      : 0}
            </span>
        </div>
    );
};

export default CardExample;
