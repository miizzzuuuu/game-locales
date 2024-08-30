import { CSSProperties } from 'react';
import SVGCheck from './SVG/check.svg';
import styles from './style.module.scss';

const DontShowAgain = () => {
    return (
        <div className={styles.container}>
            <div className={styles['input-bottom']}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="dsa"
                    style={{ '--check': `url("${SVGCheck}")` } as CSSProperties}
                />
                <label className={styles.label} htmlFor="dsa">
                    Don't show again
                </label>
            </div>
        </div>
    );
};

export default DontShowAgain;
