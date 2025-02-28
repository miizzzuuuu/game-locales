import MainArea from '../../../game/components/MainArea';
import MainAreaDesktop from '../../../game/components/MainAreaDesktop';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import GameDesktop from '../../desktop/GameDesktop';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';
import LayoutV3 from '../../layouts/v3';
import { FEATURES } from '../../utils/Features';

// Extract Layout selection logic outside the component
const Layout =
    FEATURES.LAYOUT_VERSION === 3 ? LayoutV3 : FEATURES.LAYOUT_VERSION === 2 ? LayoutV2 : LayoutV1;

const DesktopGame = () => (
    <GameDesktop>
        <MainAreaDesktop />
    </GameDesktop>
);

const MobileGame = () => (
    <Layout>
        <MainArea />
    </Layout>
);

// Main component that conditionally renders based on device type
const GameUI = () => {
    const device = useAppSelector(selectDevice);

    return device === 'desktop' ? <DesktopGame /> : <MobileGame />;
};

export default GameUI;
