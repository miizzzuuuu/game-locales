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

export const MINI_HTP_AIMATIOSN: Record<string, MiniHTPAnimationUrls> = {
    p6b: ANIMATIONS_URLS,
} as const;

export const getUrlAnimation = (slide: number, language: string) => {
    const urls = MINI_HTP_AIMATIOSN[getPcode()]?.[slide - 1];

    if (typeof urls === 'object') {
        return urls[language] || urls[Object.keys(urls)[0]];
    }

    return urls;
};
