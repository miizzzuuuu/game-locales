import BACKGROUND_STREAMING from '../../assets/img/streaming/background-streaming.webp';
import { getPcode } from '../../common/utils/GameHelper';

const BG_STREAMINGS: Record<string, string> = {};

export const getBackgroundStreaming = () => {
    const pcode = getPcode();

    if (!(pcode in BG_STREAMINGS)) {
        return BACKGROUND_STREAMING;
    }

    return BG_STREAMINGS[pcode];
};
