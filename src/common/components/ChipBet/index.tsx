import { memo } from 'react';
import { Features } from '../../utils/Features';
import Chip from './Chip';
import ChipAnimation from './ChipAnimation';

export interface ChipBetProps {
    value: number;
    ignoreTransparent?: boolean;
}

const ChipComponent = Features.CHIP_ANIMATION ? ChipAnimation : Chip;

const ChipBet = (props: ChipBetProps) => {
    return <ChipComponent {...props} />;
};

const MemoizedChipBet = memo(ChipBet);
export default MemoizedChipBet;
