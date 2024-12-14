import MainArea from '../../../game/components/MainArea';
import LayoutV1 from '../../layouts/v1';
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
            : null;

const GameUI = () => {
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
