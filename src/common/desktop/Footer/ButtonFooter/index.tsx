import { ReactNode } from 'react';
import Button from '../../../components/Button';
import styles from './styles.module.scss';

interface IProps {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
}

const ButtoonFooter = ({ label, icon, onClick }: IProps) => {
    return (
        <Button className={styles.button} onClick={onClick}>
            <span className={styles.label}>{label}</span>
            {icon}
        </Button>
    );
};

export default ButtoonFooter;
