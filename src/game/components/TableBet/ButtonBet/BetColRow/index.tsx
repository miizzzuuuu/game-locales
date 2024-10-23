import { memo } from 'react';
import styles from './styles.module.scss';
import { StringHelper } from '../../../../../common/utils/StringHelper';
import { _24DHelper } from '../../../../utils/_24DHelper';
import { Bet } from '../../../../../types';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { useTranslation } from 'react-i18next';

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

            <span className={styles.payout}>
                1:{StringHelper.formatNumber(_24DHelper.PAYOUT[group], i18n.language)}
            </span>
        </div>
    );
};

export default memo(BetColRow);
