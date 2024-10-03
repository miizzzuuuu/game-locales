import { Features } from '../../utils/Features';
import Chip from './Chip';
import ChipAnimation from './ChipAnimation';

interface IProps {
    value: number;
    ignoreTransparent?: boolean;
}

const ChipBet = (props: IProps) => {
    return Features.CHIP_ANIMATION ? <ChipAnimation {...props} /> : <Chip {...props} />;
};

export default ChipBet;
