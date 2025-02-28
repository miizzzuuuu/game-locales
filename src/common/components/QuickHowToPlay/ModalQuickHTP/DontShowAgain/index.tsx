import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import SVGCheck from './SVG/check.svg';
import styles from './style.module.scss';

interface IProps {
    checked: boolean;
    setChecked: (value: boolean) => void;
}

const DontShowAgain = ({ checked, setChecked }: IProps) => {
    const { t } = useTranslation();

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

                <span className={styles.label}>{t('dont-show-again')}</span>
            </div>
        </div>
    );
};

export default DontShowAgain;
