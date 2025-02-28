import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import { formatNumber } from '../../../../../common/utils/StringHelper';
import { Bet } from '../../../../../types';
import { PAYOUT } from '../../../../utils/_24DHelper';
import styles from './styles.module.scss';

interface IProps {
    label: string;
    group: Bet['group'];
}

const BetColRow = ({ label, group }: IProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <span className={styles['button-name']}>
                {t(`${getBasePcode()}.${label}`, { ns: 'game' })}
            </span>

            <span className={styles.payout}>1:{formatNumber(PAYOUT[group], i18n.language)}</span>
        </div>
    );
};

const MemoizedBetColRow = memo(BetColRow);
export default MemoizedBetColRow;
