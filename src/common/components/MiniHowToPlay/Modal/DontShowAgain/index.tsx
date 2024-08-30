import { CSSProperties } from 'react';
import SVGCheck from './SVG/check.svg';
import styles from './style.module.scss';

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
                <label className={styles.label} htmlFor="dsa">
                    Don't show again
                </label>
            </div>
        </div>
    );
};

export default DontShowAgain;
