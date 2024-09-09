export type FeaturesType = {
    LAYOUT_VERSION: 1 | 2 | 3;
    BUTTON_PATTERN: boolean;
    MINI_HOW_TO_PLAY: boolean;
    SHUFFLE_THE_CARDS: boolean;
    LETTER_BOX: boolean;
};

export const Features: FeaturesType = {
    LAYOUT_VERSION: 1,
    BUTTON_PATTERN: true,
    MINI_HOW_TO_PLAY: true,
    SHUFFLE_THE_CARDS: false,
    LETTER_BOX: false,
};
