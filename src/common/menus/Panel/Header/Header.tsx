import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import SVGIconX from '../../../components/SVG/SVGIconX';
import SVGIconLeft from '../SVG/SVGIconLeft';
import styles from './styles.module.scss';

interface IProps {
    title: string;

    handleClose: () => void;
    handleBack?: () => void;
}

const Header = ({ title, handleClose, handleBack }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles.header}>
            <p className={styles.title}>{t(title)}</p>

            {handleBack && (
                <Button className={`${styles.action} ${styles.left}`} onClick={handleBack}>
                    <SVGIconLeft />
                </Button>
            )}

            <Button className={`${styles.action} ${styles.right}`} onClick={handleClose}>
                <SVGIconX color="#6B6C80" />
            </Button>
        </div>
    );
};

export default Header;
