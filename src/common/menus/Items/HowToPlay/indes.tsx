import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectOpenMenuHTP,
    selectOpenMenuMain,
    toggleMenuHTP,
} from '../../../../store/slice/menuSlice';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import Content from './Content';

import styles from './styles.module.scss';

const HowToPlay = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuHTP = useAppSelector(selectOpenMenuHTP);
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel
            show={openMenuHTP}
            title="how-to-play"
            footerBg="#1e1f2e"
            className={styles['menu-how-to-play']}
            handleBack={openMenuMain ? () => dispatch(toggleMenuHTP()) : undefined}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default HowToPlay;
