import MainArea from '../../../game/components/MainArea';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import GameDesktop from '../../desktop/GameDesktop';
import LayoutV1 from '../../layouts/v1';
import LayoutV1_2 from '../../layouts/v1.2';
import LayoutV2 from '../../layouts/v2';
import LayoutV3 from '../../layouts/v3';
import { Features } from '../../utils/Features';

const layoutVersion = Features.LAYOUT_VERSION;
const Layout =
    layoutVersion === 1
        ? LayoutV1
        : layoutVersion === 2
          ? LayoutV2
          : layoutVersion === 3
            ? LayoutV3
            : layoutVersion === 1.2
              ? LayoutV1_2
              : null;

const GameUI = () => {
    const device = useAppSelector(selectDevice);

    if (device === 'desktop') {
        return <GameDesktop />;
    }

    if (!Layout) {
        return null;
    }

    return (
        <Layout>
            <MainArea />
        </Layout>
    );
};

export default GameUI;
