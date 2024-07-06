import HowToPlayContent from '../../../../game/components/HowToPlayContent';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuHTP, toggleMenuHTP } from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';

import styles from './styles.module.scss';

const HowToPlay = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuHTP = useAppSelector(selectOpenMenuHTP);

    return (
        <Panel
            show={openMenuHTP}
            title={<LabelTranslate value="how-to-play" />}
            footerBg="#1e1f2e"
            className={styles['menu-how-to-play']}
            handleBack={() => dispatch(toggleMenuHTP())}
            handleClose={handleClose}
        >
            <HowToPlayContent />
        </Panel>
    );
};

export default HowToPlay;
