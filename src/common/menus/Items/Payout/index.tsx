import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectOpenMenuMain,
    selectOpenMenuPayout,
    toggleMenuPayout,
} from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import PayoutContent from './PayoutContent';
import styles from './styles.module.scss';

const Payout = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuPayout = useAppSelector(selectOpenMenuPayout);
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel
            show={openMenuPayout}
            title={<LabelTranslate value="payout-and-limit" />}
            footerBg="#1e1f2e"
            className={styles['menu-payout']}
            handleBack={openMenuMain ? () => dispatch(toggleMenuPayout()) : undefined}
            handleClose={handleClose}
        >
            <div className={styles.payout}>
                <PayoutContent />
            </div>
        </Panel>
    );
};

export default Payout;
