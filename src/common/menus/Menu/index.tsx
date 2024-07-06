import { AnimationEventHandler, useState } from 'react';
import Overlay from './Overlay';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { closeAllMenu, selectMenuOpened } from '../../../store/slice/menuSlice';
import Main from '../Items/Main';

import styles from './styles.module.scss';
import Statistic from '../Items/Statistic';
import Settings from '../Items/Settings/indes';
import HowToPlay from '../Items/HowToPlay/indes';

export interface MenuPageProps {
    handleClose: () => void;
}

const Menu = () => {
    const dispatch = useAppDispatch();

    const [hiddenUI, setVisibleUI] = useState(true);

    const menuOpened = useAppSelector(selectMenuOpened);

    const handleAnimationStart: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('panel-fadein') >= 0) {
            setVisibleUI(false);
        }
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        console.log('handleAnimationEnd menu', e.animationName);
        if (
            (e.animationName.indexOf('menu-slide-down') >= 0 ||
                e.animationName.indexOf('menu-slide-right') >= 0) &&
            menuOpened.length === 0
        ) {
            setVisibleUI(true);
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
            {/* <MenuPayout handleClose={handleClose} />
            <MenuSettings handleClose={handleClose} />
            <MenuHistory handleClose={handleClose} />
            <MenuHTP handleClose={handleClose} /> */}
        </div>
    );
};

export default Menu;
