import { ReactNode, useState } from 'react';
import styles from './styles.module.scss';
import { SVGIconChevronDown } from '../../../../components/SVG/SVGIconChevronDown';

interface IProps {
    title: ReactNode;
    children?: ReactNode | undefined;
}

const HowToPlayCard = ({ title, children }: IProps) => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div
            className={`${styles.wrapper}${isOpen ? ` ${styles.open}` : ''}`}
            onClick={handleClick}
        >
            <div className={styles.top}>
                <div className={styles.title}>{title}</div>

                <div
                    className={`${styles['accordion-icon']} ${isOpen ? styles.open : styles.close}`}
                >
                    <SVGIconChevronDown color={isOpen ? 'white' : '#6B6C80'} />
                </div>
            </div>

            <div className={`${styles['accordion-content']}${isOpen ? ` ${styles.open}` : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default HowToPlayCard;
