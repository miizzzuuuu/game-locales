export type FeaturesType = {
    LAYOUT_VERSION: 1 | 2 | 3 | 1.2;
    BUTTON_PATTERN: boolean;
    MINI_HOW_TO_PLAY: boolean;
    SHUFFLE_THE_CARDS: boolean;
    LETTER_BOX: boolean;
    STREAMING_LANDSCAPE_LETTER_BOX: boolean;
    CHIP_ANIMATION: boolean;
};

export const Features: FeaturesType = {
    LAYOUT_VERSION: 1.2,
    BUTTON_PATTERN: true,
    MINI_HOW_TO_PLAY: true,
    SHUFFLE_THE_CARDS: true,
    LETTER_BOX: false,
    STREAMING_LANDSCAPE_LETTER_BOX: true,
    CHIP_ANIMATION: true,
};
