import { getPcode } from '../../../common/utils/GameHelper';
import { MiniHTPAnimationUrls } from '../../../types';

/**
    If animations are available in multiple languages, structure them like this:

    const ANIMATIONS_URLS: MiniHTPAnimationUrls = [
        {
            en: '',
            id: '',
        },
        {
            en: '',
            hi: '',
            id: '',
        },
        {
            en: '',
            hi: '',
            id: '',
            ko: '',
            zh: ''
        },
    }

 */

const ANIMATIONS_URLS: MiniHTPAnimationUrls = [
    'https://cdn.lottielab.com/l/E3LKnqriEikdTg.json',
    {
        en: 'https://cdn.lottielab.com/l/CHwzKob4zhYvaz.json',
    },
    'https://cdn.lottielab.com/l/EGpvJG8vtu5F9n.json',
];

export const QUICK_HTP_CONFIG: Record<string, { animations: MiniHTPAnimationUrls; key: string }> = {
    m23b: {
        animations: ANIMATIONS_URLS,
        key: 'm23b',
    },
} as const;

export const getUrlAnimation = (slide: number, language: string) => {
    const urls = QUICK_HTP_CONFIG[getPcode()]?.animations[slide - 1];

    if (typeof urls === 'object') {
        return urls[language] || urls[Object.keys(urls)[0]];
    }

    return urls;
};

export const getQuickHTPPrefix = () => {
    return QUICK_HTP_CONFIG[getPcode()]?.key;
};

export const checkIfQuickHTPExist = () => {
    return !!QUICK_HTP_CONFIG[getPcode()];
};
