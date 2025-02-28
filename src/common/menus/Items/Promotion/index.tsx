import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectOpenMenuMain,
    selectOpenMenuPromotion,
    toggleMenuPromotion,
} from '../../../../store/slice/menuSlice';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import NoPromotion from './NoPromotion';

const Promotion = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuPromotion = useAppSelector(selectOpenMenuPromotion);
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel
            show={openMenuPromotion}
            title="promotion"
            footerBg="#1e1f2e"
            handleBack={openMenuMain ? () => dispatch(toggleMenuPromotion()) : undefined}
            handleClose={handleClose}
        >
            <NoPromotion />
        </Panel>
    );
};

export default Promotion;
