import { AnimationEventHandler, ReactNode, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { SVGIconChevronDown } from '../../../../components/SVG/SVGIconChevronDown';

interface IProps {
    title: ReactNode;
    children?: ReactNode | undefined;
}

const Card = ({ title, children }: IProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const [isOpen, setOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            // close
            contentRef.current?.classList.remove(styles.open);
            contentRef.current?.classList.add(styles.close);
            setOpen(false);
        } else {
            // open
            contentRef.current?.classList.remove(styles.close);
            contentRef.current?.classList.add(styles.open);
            setOpen(true);
        }

        setHide((prev) => !prev);
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('accordion-general-close') > 0) {
            setOpen(false);
        }
    };

    return (
        <div className={`${styles.wrapper}${hide ? ` ${styles.open}` : ''}`} onClick={handleClick}>
            <div className={styles.top}>
                <div className={styles.title}>{title}</div>

                <div className={`${styles['accordion-icon']} ${hide ? styles.open : styles.close}`}>
                    <SVGIconChevronDown color={hide ? 'white' : '#6B6C80'} />
                </div>
            </div>

            <div
                className={`${styles['accordion-content']}`}
                onAnimationEnd={handleAnimationEnd}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;
