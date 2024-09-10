import { DisplayHelper } from '../../utils/DisplayHelper';
import styles from './styles.module.scss';

interface IProps {
    label: string;
    labelSecond?: string;
    value: string;
    isRight?: boolean;
}

const UserInfo = ({ label, labelSecond, value, isRight }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <div
            className={`${styles['user-info']}${deviceClassName} ${isRight ? styles.right : styles.left}`}
        >
            <div className={styles['label-wrapper']}>
                <span className={styles.label}>{label}</span>
                {labelSecond && <span className={styles['label-second']}>{labelSecond}</span>}
            </div>

            <span className={styles.value}>{value}</span>
        </div>
    );
};

export default UserInfo;
