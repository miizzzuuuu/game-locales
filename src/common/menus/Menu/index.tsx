import { AnimationEventHandler, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    closeAllMenu,
    closeAllMenuDesktop,
    NameMenu,
    selectMenuOpened,
} from '../../../store/slice/menuSlice';
import { selectDevice } from '../../../store/slice/windowSlice';
import HowToPlay from '../Items/HowToPlay/indes';
import Main from '../Items/Main';
import Payout from '../Items/Payout';
import Settings from '../Items/Settings/indes';
import Statistic from '../Items/Statistic';
import Transactions from '../Items/Transactions';
import Overlay from './Overlay';
import styles from './styles.module.scss';

export interface MenuPageProps {
    handleClose: () => void;
}

const Menu = () => {
    const dispatch = useAppDispatch();

    const [hiddenUI, setHiddenUI] = useState(true);

    const menuOpened = useAppSelector(selectMenuOpened);
    const device = useAppSelector(selectDevice);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeIn') {
            setHiddenUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeOut' && menuOpened.length === 0) {
            setHiddenUI(true);
        }
    };

    const handleClose = useCallback(
        (type?: NameMenu) => {
            if (device !== 'desktop' || !type) {
                dispatch(closeAllMenu());
                return;
            }

            dispatch(closeAllMenuDesktop(type));
        },
        [device, dispatch],
    );

    if (hiddenUI && menuOpened.length === 0) {
        return null;
    }

    return (
        <div
            className={`${styles.menu}${menuOpened.length > 0 ? '' : ` ${styles.closed}`}`}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            {device !== 'desktop' && <Overlay handleClose={() => handleClose()} />}

            <Statistic handleClose={() => handleClose()} />
            <Main handleClose={() => handleClose()} />
            <Settings handleClose={() => handleClose('settings')} />
            <HowToPlay handleClose={() => handleClose('htp')} />
            <Payout handleClose={() => handleClose('payout')} />
            <Transactions handleClose={() => handleClose('history')} />
        </div>
    );
};

export default Menu;
