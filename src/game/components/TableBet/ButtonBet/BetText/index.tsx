import { memo } from 'react';
import styles from './styles.module.scss';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import LabelTranslate from '../../../../../common/components/LabelTranslate';

interface IProps {
    label: string;
}

const BetText = ({ label }: IProps) => {
    return (
        <div className={styles.container}>
            <LabelTranslate
                type="span"
                className={styles.text}
                value={label}
                keyLang={getBasePcode()}
            />
        </div>
    );
};

const MemoizedBetText = memo(BetText);

export default MemoizedBetText;
