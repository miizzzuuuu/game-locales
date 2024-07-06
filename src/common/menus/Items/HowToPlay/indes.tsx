import HowToPlayContent from '../../../../game/components/HowToPlayContent';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuHTP, toggleMenuHTP } from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';

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
            <HowToPlayContent />
        </Panel>
    );
};

export default HowToPlay;
