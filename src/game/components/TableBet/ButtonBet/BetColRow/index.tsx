import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
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
    const { i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <LabelTranslate
                className={styles['button-name']}
                value={label}
                keyLang={getBasePcode()}
            />

            <span className={styles.payout}>1:{formatNumber(PAYOUT[group], i18n.language)}</span>
        </div>
    );
};

export default memo(BetColRow);
