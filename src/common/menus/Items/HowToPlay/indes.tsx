import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuHTP, toggleMenuHTP } from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';

import Content from './Content';

const HowToPlay = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuHTP = useAppSelector(selectOpenMenuHTP);

    return (
        <Panel
            show={openMenuHTP}
            title={<LabelTranslate value="how-to-play" />}
            footerBg="#1e1f2e"
            handleBack={() => dispatch(toggleMenuHTP())}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default HowToPlay;
