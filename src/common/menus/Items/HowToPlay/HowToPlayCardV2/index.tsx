import { ReactNode, useState } from 'react';
import { H1 } from '../../../../components/HowToPlay/ui';
import { SVGIconChevronDown } from '../../../../components/SVG/SVGIconChevronDown';
import styles from './styles.module.scss';

interface IProps {
    title: string;
    children?: ReactNode | undefined;
}

const HowToPlayCardV2 = ({ title, children }: IProps) => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div
            className={`${styles.wrapper}${isOpen ? ` ${styles.open}` : ''} htp`}
            onClick={handleClick}
        >
            <div className={styles.top}>
                <H1>{title}</H1>

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

export default HowToPlayCardV2;
