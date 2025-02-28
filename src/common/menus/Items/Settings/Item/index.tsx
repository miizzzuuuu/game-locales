import { ReactNode } from 'react';
import LabelTranslate from '../../../../components/LabelTranslate';
import { ToggleSwitch } from '../ToggleSwitch';
import styles from './styles.module.scss';

interface IProps {
    label: string;
    icon: ReactNode;
    active: boolean;
    onChangeActive?: (checked: boolean) => void;
}

const Item = ({ label, icon, active, onChangeActive }: IProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.left}>
                {icon}

                <LabelTranslate type="span" className={styles.text} value={label} />
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
