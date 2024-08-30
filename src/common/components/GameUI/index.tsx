import { useAppSelector } from '../../../store/hooks';
import { selectShowMiniHowToPlay } from '../../../store/slice/gameStateSlice';
import LayoutV1 from '../../layouts/v1';
import LayoutV2 from '../../layouts/v2';

const GameUI = () => {
    const layoutVersion = useAppSelector(selectShowMiniHowToPlay);

    if (layoutVersion === 1) {
        return <LayoutV1></LayoutV1>;
    }

    return <LayoutV2></LayoutV2>;
};

export default GameUI;
