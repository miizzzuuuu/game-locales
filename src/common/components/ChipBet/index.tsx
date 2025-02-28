import { memo } from 'react';
import { FEATURES } from '../../utils/Features';
import Chip from './Chip';
import ChipAnimation from './ChipAnimation';

export interface ChipBetProps {
    value: number;
    ignoreTransparent?: boolean;
}

const ChipComponent = FEATURES.CHIP_ANIMATION ? ChipAnimation : Chip;

const ChipBet = (props: ChipBetProps) => {
    return <ChipComponent {...props} />;
};

const MemoizedChipBet = memo(ChipBet);
export default MemoizedChipBet;
