import { memo } from 'react';
import styles from './styles.module.scss';
import { GameHelper } from '../../../../../common/utils/GameHelper';
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
                keyLang={GameHelper.getBasePcode()}
            />
        </div>
    );
};

export default memo(BetText);
