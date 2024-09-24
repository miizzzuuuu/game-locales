import { AnimationEventHandler, ReactNode, useState } from 'react';

import styles from './styles.module.scss';
import Footer from './Footer';
import SliderUp from './SliderUp';
import Header from './Header/Header';
import { Features } from '../../utils/Features';

interface IProps {
    show: boolean;

    title?: ReactNode | undefined;
    children?: ReactNode | undefined;
    footerBg?: string;
    className?: string;
    bodyClassName?: string;

    handleClose: () => void;
    handleBack?: () => void;
}

const Panel = ({
    show,
    title,
    children,
    footerBg,
    className,
    bodyClassName,
    handleClose,
    handleBack,
}: IProps) => {
    const layoutVersion = Features.LAYOUT_VERSION;

    const [hiddenUI, setVisibleUI] = useState(true);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        // if (
        //     e.animationName === 'slideInUp' ||
        //     e.animationName === 'slideInRight' ||
        //     e.animationName === 'slideInLeft'
        // ) {
        if (/slideIn/.test(e.animationName)) {
            setVisibleUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        // if (
        //     e.animationName === 'slideOutDown' ||
        //     e.animationName === 'slideOutLeft' ||
        //     e.animationName === 'slideOutRight'
        // ) {
        if (/slideOut/.test(e.animationName)) {
            setVisibleUI(true);
        }
    };

    if (hiddenUI && !show) {
        return null;
    }

    return (
        <div
            className={`${styles['menu-content']} ${styles[`layout-${layoutVersion}`]}${show ? '' : ` ${styles.disappear}`}${className ? ` ${className}` : ''}`}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <SliderUp />
            <Header title={title} handleBack={handleBack} handleClose={handleClose} />

            <div className={`${styles['menu-body']}${bodyClassName ? ` ${bodyClassName}` : ''}`}>
                {children}
            </div>

            <Footer style={{ backgroundColor: footerBg ? footerBg : undefined }} />
        </div>
    );
};

export default Panel;
