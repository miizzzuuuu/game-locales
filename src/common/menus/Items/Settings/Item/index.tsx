import { ReactNode } from 'react';
import { ToggleSwitch } from '../ToggleSwitch';
import styles from './styles.module.scss';

interface IProps {
    label: ReactNode | undefined;
    icon: ReactNode;
    active: boolean;
    onChangeActive?: (checked: boolean) => void;
}

const Item = ({ label, icon, active, onChangeActive }: IProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.left}>
                {icon}

                <span className={styles.text}>{label}</span>
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
