import { AnimationEventHandler, useState } from 'react';
import Overlay from './Overlay';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { closeAllMenu, selectMenuOpened } from '../../../store/slice/menuSlice';
import Main from '../Items/Main';

import styles from './styles.module.scss';
import Statistic from '../Items/Statistic';
import Settings from '../Items/Settings/indes';
import HowToPlay from '../Items/HowToPlay/indes';
import Payout from '../Items/Payout';
import Transactions from '../Items/Transactions';

export interface MenuPageProps {
    handleClose: () => void;
}

const Menu = () => {
    const dispatch = useAppDispatch();

    const [hiddenUI, setHiddenUI] = useState(true);

    const menuOpened = useAppSelector(selectMenuOpened);

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

    const handleClose = () => {
        dispatch(closeAllMenu());
    };

    if (hiddenUI && menuOpened.length === 0) {
        return null;
    }

    return (
        <div
            className={`${styles.menu}${menuOpened.length > 0 ? '' : ` ${styles.closed}`}`}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <Overlay handleClose={handleClose} />

            <Statistic handleClose={handleClose} />
            <Main handleClose={handleClose} />
            <Settings handleClose={handleClose} />
            <HowToPlay handleClose={handleClose} />
            <Payout handleClose={handleClose} />
            <Transactions handleClose={handleClose} />
        </div>
    );
};

export default Menu;
