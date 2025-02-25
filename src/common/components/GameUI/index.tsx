import MainArea from '../../../game/components/MainArea';
import MainAreaDesktop from '../../../game/components/MainAreaDesktop';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import GameDesktop from '../../desktop/GameDesktop';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';
import LayoutV3 from '../../layouts/v3';
import { FEATURES } from '../../utils/Features';

const LAYOUT_COMPONENTS = {
    1: LayoutV1,
    2: LayoutV2,
    3: LayoutV3,
} as const;

const Layout = LAYOUT_COMPONENTS[FEATURES.LAYOUT_VERSION] ?? LayoutV1;

const DesktopGame = () => (
    <GameDesktop>
        <MainAreaDesktop />
    </GameDesktop>
);

const GameUI = () => {
    const device = useAppSelector(selectDevice);

    if (device === 'desktop') {
        return <DesktopGame />;
    }

    return (
        <Layout>
            <MainArea />
        </Layout>
    );
};

export default GameUI;
