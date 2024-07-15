import MainArea from '../../../game/components/MainArea';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';

const layout: number = 1;

const GameUI = () => {
    if (layout === 1) {
        return <LayoutV1>
            <MainArea></MainArea>
        </LayoutV1>;
    }

    return <LayoutV2></LayoutV2>;
};

export default GameUI;
