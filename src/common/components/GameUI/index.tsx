import MainArea from '../../../game/components/MainArea';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';
import LayoutV3 from '../../layouts/v3';
import { Features } from '../../utils/Features';

const GameUI = () => {
    const layoutVersion = Features.LAYOUT_VERSION;

    let Layout = null;

    if (layoutVersion === 1) {
        Layout = LayoutV1;
    } else if (layoutVersion === 2) {
        Layout = LayoutV2;
    } else if (layoutVersion === 3) {
        Layout = LayoutV3;
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
