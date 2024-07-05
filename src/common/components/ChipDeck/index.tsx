import { useAppSelector } from '../../../store/hooks';
import { selectActiveChip, selectChipBase } from '../../../store/slice/chipSlice';
import { ChipHelper } from '../../utils/ChipHelper';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Chip from './Chip';
import styles from './styles.module.scss';

interface IProps {
    version?: number;
}

const ChipDeck = ({ version = 1 }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const chipBase = useAppSelector(selectChipBase);
    const activeChip = useAppSelector(selectActiveChip);

    return (
        <div className={`${styles['chip-deck']}${deviceClassName} ${styles[`v${version}`]}`}>
            <div className={`${styles.wrapper} no-scrollbar`}>
                {chipBase.map((chip, idx) => (
                    <Chip
                        key={idx}
                        value={chip}
                        color={ChipHelper.getChipColorByIndex(idx)}
                        isActive={activeChip === chip}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChipDeck;
