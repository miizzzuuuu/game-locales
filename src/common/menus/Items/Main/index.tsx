import { useAppSelector } from '../../../../store/hooks';
import { selectOpenMenuMain } from '../../../../store/slice/menuSlice';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';
import Content from './Content';

const Main = ({ handleClose }: MenuPageProps) => {
    const openMenuMain = useAppSelector(selectOpenMenuMain);

    return (
        <Panel show={openMenuMain} title="menu" handleClose={handleClose}>
            <Content />
        </Panel>
    );
};

export default Main;
