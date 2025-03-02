import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleSwitch } from '../ToggleSwitch';
import styles from './styles.module.scss';

interface IProps {
    label: string;
    icon: ReactNode;
    active: boolean;
    onChangeActive?: (checked: boolean) => void;
}

const Item = ({ label, icon, active, onChangeActive }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles.item}>
            <div className={styles.left}>
                {icon}

                <span className={styles.text}>{t(label)}</span>
            </div>

            <ToggleSwitch
                checked={active}
                onChange={(currentValue) => {
                    onChangeActive?.(currentValue);
                }}
            />
        </div>
    );
};

export default Item;
