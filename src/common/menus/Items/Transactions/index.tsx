import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectOpenMenuHistory,
    selectOpenMenuMain,
    toggleMenuHistory,
} from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import Content from './Content';
import styles from './styles.module.scss';

const Transactions = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuHistory = useAppSelector(selectOpenMenuHistory);
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel
            show={openMenuHistory}
            title={<LabelTranslate value="history" />}
            footerBg="#1e1f2e"
            className={styles['menu-history']}
            handleBack={openMenuMain ? () => dispatch(toggleMenuHistory()) : undefined}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default Transactions;
