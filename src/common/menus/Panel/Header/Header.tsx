import { ReactNode } from 'react';
import Button from '../../../components/Button';
import SVGIconLeft from '../SVG/SVGIconLeft';
import SVGIconX from '../SVG/SVGIconX';
import styles from './styles.module.scss';

interface IProps {
    title?: ReactNode | undefined;

    handleClose: () => void;
    handleBack?: () => void;
}

const Header = ({ title, handleClose, handleBack }: IProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>{title}</div>

            {handleBack && (
                <Button className={`${styles.action} ${styles.left}`} onClick={handleBack}>
                    <SVGIconLeft />
                </Button>
            )}

            <Button className={`${styles.action} ${styles.right}`} onClick={handleClose}>
                <SVGIconX />
            </Button>
        </div>
    );
};

export default Header;
