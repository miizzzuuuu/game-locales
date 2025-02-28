import Button from '../../../components/Button';
import LabelTranslate from '../../../components/LabelTranslate';
import SVGIconX from '../../../components/SVG/SVGIconX';
import SVGIconLeft from '../SVG/SVGIconLeft';
import styles from './styles.module.scss';

interface IProps {
    title: string;

    handleClose: () => void;
    handleBack?: () => void;
}

const Header = ({ title, handleClose, handleBack }: IProps) => {
    return (
        <div className={styles.header}>
            <LabelTranslate value={title} className={styles.title} />
            {/* <div className={styles.title}>{title}</div> */}

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
