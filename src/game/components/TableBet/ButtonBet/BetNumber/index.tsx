import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../../../common/utils/StringHelper';
import { _24DHelper } from '../../../../utils/_24DHelper';
import styles from './styles.module.scss';

interface IProps {
    button: string;
}

const BetNumber = ({ button }: IProps) => {
    const { i18n } = useTranslation();

    const isRed = _24DHelper.RED.includes(Number(button));

    return (
        <div className={styles.container}>
            <span className={`${styles['button-name']}${isRed ? ` ${styles['text-red']}` : ''}`}>
                {Number(button)}
            </span>

            <span className={styles.payout}>
                1:{formatNumber(_24DHelper.PAYOUT['n'], i18n.language)}
            </span>
        </div>
    );
};

const MemoizedBetNumber = memo(BetNumber);
export default MemoizedBetNumber;
