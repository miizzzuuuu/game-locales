import { LastBetsGameResponse } from '../../types';

import lastbetM22B from './response/lastbets/m22b.json';
import lastbetP6B from './response/lastbets/p6b.json';
import lastbetP7D from './response/lastbets/p7d.json';
import lastbetP7E from './response/lastbets/p7e.json';

const lastbetData: Record<string, LastBetsGameResponse> = {
    p6b: lastbetP6B,
    p7d: lastbetP7D,
    p7e: lastbetP7E,
    m22b: lastbetM22B,
};

export default lastbetData;
