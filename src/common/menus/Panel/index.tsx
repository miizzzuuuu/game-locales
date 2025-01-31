import { AnimationEventHandler, ReactNode, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { Features } from '../../utils/Features';
import Footer from './Footer';
import Header from './Header/Header';
import SliderUp from './SliderUp';
import styles from './styles.module.scss';

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
    const device = useAppSelector(selectDevice);
    const [hiddenUI, setVisibleUI] = useState(true);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.includes('slideIn')) {
            setVisibleUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.includes('slideOut')) {
            setVisibleUI(true);
        }
    };

    if (hiddenUI && !show) {
        return null;
    }

    return (
        <div
            className={`${styles['menu-content']} ${styles[`layout-${Features.LAYOUT_VERSION}`]}${show ? '' : ` ${styles.disappear}`}${className ? ` ${className}` : ''}`}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            {device !== 'desktop' && <SliderUp />}
            <Header title={title} handleBack={handleBack} handleClose={handleClose} />

            <div className={`${styles['menu-body']}${bodyClassName ? ` ${bodyClassName}` : ''}`}>
                {children}
            </div>

            {device !== 'desktop' && (
                <Footer style={{ backgroundColor: footerBg }} />
            )}
        </div>
    );
};

export default Panel;
