import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectOpenMenuMain,
    selectOpenMenuSettings,
    toggleMenuSettings,
} from '../../../../store/slice/menuSlice';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import Content from './Content';

const Settings = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();
    const openMenuSettings = useAppSelector(selectOpenMenuSettings);
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel
            show={openMenuSettings}
            title="settings"
            footerBg="#1e1f2e"
            handleBack={openMenuMain ? () => dispatch(toggleMenuSettings()) : undefined}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default Settings;
