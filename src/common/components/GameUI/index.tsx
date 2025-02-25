// import MainArea from '../../../game/components/MainArea';
import MainAreaDesktop from '../../../game/components/MainAreaDesktop';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import GameDesktop from '../../desktop/GameDesktop';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';
import LayoutV3 from '../../layouts/v3';
import { FEATURES } from '../../utils/Features';

const layoutVersion = FEATURES.LAYOUT_VERSION;
const Layout =
    layoutVersion === 1
        ? LayoutV1
        : layoutVersion === 2
          ? LayoutV2
          : layoutVersion === 3
            ? LayoutV3
            : null;

const GameUI = () => {
    const device = useAppSelector(selectDevice);

    if (device === 'desktop') {
        return (
            <GameDesktop>
                <MainAreaDesktop />
            </GameDesktop>
        );
    }

    if (!Layout) {
        return null;
    }

    return <Layout>{/* <MainArea /> */}</Layout>;
};

export default GameUI;
