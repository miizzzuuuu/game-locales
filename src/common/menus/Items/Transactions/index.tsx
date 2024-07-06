import styles from './styles.module.scss';

import Panel from '../../Panel';
import Content from './Content';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuHistory, toggleMenuHistory } from '../../../../store/slice/menuSlice';

const Transactions = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuHistory = useAppSelector(selectOpenMenuHistory);

    return (
        <Panel
            show={openMenuHistory}
            title={<LabelTranslate value="history" />}
            footerBg="#1e1f2e"
            className={styles['menu-history']}
            handleBack={() => dispatch(toggleMenuHistory())}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default Transactions;
