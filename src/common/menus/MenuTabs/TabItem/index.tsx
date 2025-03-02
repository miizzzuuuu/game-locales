import Button from '../../../components/Button';
import styles from './styles.module.scss';

interface IProps {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
}

const TabItem = ({ text, isActive, onClick }: IProps) => {
    return (
        <Button
            className={`${styles.item}${isActive ? ` ${styles.active}` : ''}`}
            onClick={() => onClick?.()}
        >
            <span className={styles['item-text']}>{text}</span>
        </Button>
    );
};

export default TabItem;
