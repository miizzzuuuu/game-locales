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
    'https://cdn.lottielab.com/l/7B7qpyGRgm3m7L.json',
    'https://cdn.lottielab.com/l/FNJoyNcwuSu8P3.json',
    'https://cdn.lottielab.com/l/gcj2eacK47zTE0.json',
];

export const QUICK_HTP_CONFIG: Record<string, { animations: MiniHTPAnimationUrls; key: string }> = {
    p6b: {
        animations: ANIMATIONS_URLS,
        key: 'p6b',
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
