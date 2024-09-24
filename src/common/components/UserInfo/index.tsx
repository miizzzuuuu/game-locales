import styles from './styles.module.scss';

interface IProps {
    label: string;
    labelSecond?: string;
    value: string;
    isRight?: boolean;
}

const UserInfo = ({ label, labelSecond, value, isRight }: IProps) => {
    return (
        <div className={`${styles['user-info']} ${isRight ? styles.right : styles.left}`}>
            <div className={styles['label-wrapper']}>
                {isRight ? (
                    <>
                        {labelSecond && (
                            <span className={styles['label-second']}>{labelSecond}</span>
                        )}
                        <span className={styles.label}>{label}</span>
                    </>
                ) : (
                    <>
                        <span className={styles.label}>{label}</span>
                        {labelSecond && (
                            <span className={styles['label-second']}>{labelSecond}</span>
                        )}
                    </>
                )}
            </div>

            <span className={styles.value}>{value}</span>
        </div>
    );
};

export default UserInfo;
