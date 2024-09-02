import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';
import { Features } from '../../utils/Features';

const GameUI = () => {
    const layoutVersion = Features.LAYOUT_VERSION;

    if (layoutVersion === 1) {
        return <LayoutV1></LayoutV1>;
    }

    return <LayoutV2></LayoutV2>;
};

export default GameUI;
