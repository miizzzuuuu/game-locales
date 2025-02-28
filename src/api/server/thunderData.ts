import { ThunderM46, ThunderM8B, ThunderP6B, ThunderP7E, ThunderP9B } from '../../types';
import thundersP6B from './response/thunders/p6b.json';
import thundersP7E from './response/thunders/p7e.json';
import thundersP9B from './response/thunders/p9b.json';

const thunderData: Record<string, ThunderP6B | ThunderP7E | ThunderP9B | ThunderM8B | ThunderM46> = {
    p6b: thundersP6B,
    p7e: thundersP7E,
    p9b: thundersP9B,
};

export default thunderData;
