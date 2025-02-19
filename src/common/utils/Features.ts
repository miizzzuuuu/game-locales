import { JSX, lazy, LazyExoticComponent } from 'react';

export type FeaturesType = {
    LAYOUT_VERSION: 1 | 2 | 3;
    MINI_HOW_TO_PLAY: boolean;
    SHUFFLE_THE_CARDS: boolean;
    LETTER_BOX: boolean;
    STREAMING_LANDSCAPE_LETTER_BOX: boolean;
    CHIP_ANIMATION: boolean;
};

export type BUTTON_KEY = 'HIDE_CHIP' | 'PATTERN' | 'STATISTIC' | 'FAVORITE';

export const Features: FeaturesType = {
    LAYOUT_VERSION: 1,
    MINI_HOW_TO_PLAY: true,
    SHUFFLE_THE_CARDS: false,
    LETTER_BOX: false,
    STREAMING_LANDSCAPE_LETTER_BOX: true,
    CHIP_ANIMATION: true,
};

export const BUTTON_FEATURES: Record<BUTTON_KEY, boolean> = {
    HIDE_CHIP: true,
    PATTERN: false,
    STATISTIC: true,
    FAVORITE: false,
} as const;

export const BUTTON_COMPONENTS: Record<BUTTON_KEY, LazyExoticComponent<() => JSX.Element>> = {
    HIDE_CHIP: lazy(() => import('../components/ButtonHideChip')),
    PATTERN: lazy(() => import('../components/ButtonPattern')),
    STATISTIC: lazy(() => import('../components/ButtonSatatistic')),
    FAVORITE: lazy(() => import('../components/ButtonFavorite')),
} as const;
