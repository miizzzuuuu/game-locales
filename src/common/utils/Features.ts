import { JSX, lazy, LazyExoticComponent } from 'react';

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
        component: LazyExoticComponent<() => JSX.Element>;
    }
> = {
    HIDE_CHIP: {
        enabled: true,
        component: lazy(() => import('../components/ButtonHideChip')),
    },
    ROADMAP: {
        enabled: true,
        component: lazy(() => import('../components/ButtonRoadmap')),
    },
    STATISTIC: {
        enabled: true,
        component: lazy(() => import('../components/ButtonSatatistic')),
    },
    FAVORITE: {
        enabled: false,
        component: lazy(() => import('../components/ButtonFavorite')),
    },
} as const;
