import { AnimationEventHandler, ReactNode, useState } from 'react';

import styles from './styles.module.scss';
import Footer from './Footer';
import { DisplayHelper } from '../../utils/DisplayHelper';
import SliderUp from './SliderUp';
import Header from './Header/Header';
import { useAppSelector } from '../../../store/hooks';
import { selectLayoutVersion } from '../../../store/slice/gameStateSlice';

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
    const layoutVersion = useAppSelector(selectLayoutVersion);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const [hiddenUI, setVisibleUI] = useState(true);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('menu-open') >= 0) {
            setVisibleUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('menu-close') >= 0) {
            setVisibleUI(true);
        }
    };

    if (hiddenUI && !show) {
        return null;
    }

    return (
        <div
            className={`${styles['menu-content']}${deviceClassName} ${styles[`layout-${layoutVersion}`]}${show ? '' : ` ${styles.disappear}`}${className ? ` ${className}` : ''}`}
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
