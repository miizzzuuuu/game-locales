import { AnimationEventHandler, ReactNode, useState } from 'react';

import styles from './styles.module.scss';
import Footer from './Footer';
import { DisplayHelper } from '../../utils/DisplayHelper';
import SliderUp from './SliderUp';
import Header from './Header/Header';

interface IProps {
    show: boolean;

    title?: ReactNode | undefined;
    children?: ReactNode | undefined;
    footerBg?: string;
    className?: string;

    handleClose: () => void;
    handleBack?: () => void;
}

const Panel = ({ show, title, children, footerBg, className, handleClose, handleBack }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const [hiddenUI, setVisibleUI] = useState(true);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (
            e.animationName.indexOf('menu-slide-up') >= 0 ||
            e.animationName.indexOf('menu-slide-left') >= 0
        ) {
            setVisibleUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (
            e.animationName.indexOf('menu-slide-down') >= 0 ||
            e.animationName.indexOf('menu-slide-right') >= 0
        ) {
            setVisibleUI(true);
        }
    };

    if (hiddenUI && !show) {
        return null;
    }

    return (
        <div
            className={`${styles['menu-content']}${deviceClassName}${show ? '' : ` ${styles.disappear}`}${className ? ` ${className}` : ''}`}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <SliderUp />
            <Header title={title} handleBack={handleBack} handleClose={handleClose} />

            <div className={styles['menu-body']}>{children}</div>

            <Footer style={{ backgroundColor: footerBg ? footerBg : undefined }} />
        </div>
    );
};

export default Panel;
