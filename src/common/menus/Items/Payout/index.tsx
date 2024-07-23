import { MenuPageProps } from '../../Menu';
import LabelTranslate from '../../../components/LabelTranslate';
import Panel from '../../Panel';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuPayout, toggleMenuPayout } from '../../../../store/slice/menuSlice';
import PayoutContent from './PayoutContent';

const Payout = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuPayout = useAppSelector(selectOpenMenuPayout);

    return (
        <Panel
            show={openMenuPayout}
            title={<LabelTranslate value="payout-and-limit" />}
            footerBg="#1e1f2e"
            className={styles['menu-payout']}
            handleBack={() => dispatch(toggleMenuPayout())}
            handleClose={handleClose}
        >
            <div className={styles.payout}>
                <PayoutContent />
            </div>
        </Panel>
    );
};

export default Payout;
