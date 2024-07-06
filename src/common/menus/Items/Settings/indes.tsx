import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuSettings, toggleMenuSettings } from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';

import Content from './Content';

const Settings = ({ handleClose }: MenuPageProps) => {
    const dispatch = useAppDispatch();

    const openMenuSettings = useAppSelector(selectOpenMenuSettings);
    return (
        <Panel
            show={openMenuSettings}
            title={<LabelTranslate value="settings" />}
            footerBg="#1e1f2e"
            handleBack={() => dispatch(toggleMenuSettings())}
            handleClose={handleClose}
        >
            <Content />
        </Panel>
    );
};

export default Settings;
