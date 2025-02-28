import { CSSProperties } from 'react';
import SVGCheck from './SVG/check.svg';
import styles from './style.module.scss';
import LabelTranslate from '../../../LabelTranslate';

interface IProps {
    checked: boolean;
    setChecked: (value: boolean) => void;
}

const DontShowAgain = ({ checked, setChecked }: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles['input-bottom']}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="dsa"
                    style={{ '--check': `url("${SVGCheck}")` } as CSSProperties}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />

                <LabelTranslate type="span" className={styles.label} value="dont-show-again" />
            </div>
        </div>
    );
};

export default DontShowAgain;
