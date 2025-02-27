import { JSX } from 'react';
import ButtonFavorite from '../components/ButtonFavorite';
import ButtonHideChip from '../components/ButtonHideChip';
import ButtonRoadmap from '../components/ButtonRoadmap';
import ButtonSatatistic from '../components/ButtonSatatistic';

export type FeaturesType = {
    LAYOUT_VERSION: 1 | 2 | 3;
    MINI_HOW_TO_PLAY: boolean;
    SHUFFLE_THE_CARDS: boolean;
    LETTER_BOX: boolean;
    STREAMING_LANDSCAPE_LETTER_BOX: boolean;
    CHIP_ANIMATION: boolean;
};

export type BUTTON_KEY = 'HIDE_CHIP' | 'ROADMAP' | 'STATISTIC' | 'FAVORITE';

export const FEATURES: FeaturesType = {
    LAYOUT_VERSION: 1,
    MINI_HOW_TO_PLAY: true,
    SHUFFLE_THE_CARDS: false,
    LETTER_BOX: false,
    STREAMING_LANDSCAPE_LETTER_BOX: true,
    CHIP_ANIMATION: true,
} as const;

export const BUTTON_CONFIG: Record<
    BUTTON_KEY,
    {
        enabled: boolean;
        component: () => JSX.Element;
    }
> = {
    HIDE_CHIP: {
        enabled: true,
        component: ButtonHideChip,
    },
    ROADMAP: {
        enabled: true,
        component: ButtonRoadmap,
    },
    STATISTIC: {
        enabled: true,
        component: ButtonSatatistic,
    },
    FAVORITE: {
        enabled: false,
        component: ButtonFavorite,
    },
} as const;
