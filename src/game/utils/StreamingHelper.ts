import { getPcode } from '../../common/utils/GameHelper';
import { BACKGROUND_STREAMING, BACKGROUND_STREAMINGS } from '../constants/BackgroundStreaming';

export const getBackgroundStreaming = () => {
    const pcode = getPcode();

    if (pcode in BACKGROUND_STREAMINGS) {
        return BACKGROUND_STREAMINGS[pcode];
    }

    return BACKGROUND_STREAMING;
};
