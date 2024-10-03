import { memo } from 'react';
import styles from './styles.module.scss';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import LabelTranslate from '../../../../../common/components/LabelTranslate';

interface IProps {
    label: string;
}

const BetColRow = ({ label }: IProps) => {
    return (
        <div className={styles.container}>
            <LabelTranslate
                className={styles['button-name']}
                value={label}
                keyLang={getBasePcode()}
            />

            <span className={styles.payout}>6:1</span>
        </div>
    );
};

const MemoizedBetColRow = memo(BetColRow);
export default MemoizedBetColRow;
