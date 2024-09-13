import { ReactNode } from 'react';
import styles from './styles.module.scss';
import ChipBet from '../../../../common/components/ChipBet';
import { DisplayHelper } from '../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../store/hooks';
import { selectChipBase } from '../../../../store/slice/chipSlice';
import { ChipHelper } from '../../../../common/utils/ChipHelper';

interface IProps {
    className?: string;
    children?: ReactNode;
    chip: number;

    isWin?: boolean;
    onClick?: () => void;
}

const ButtonBet = ({ children, isWin, className, chip, onClick }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const chipBase = useAppSelector(selectChipBase);
    const color = ChipHelper.getChipColorByAmount(chip, chipBase);

    className = className
        ?.split(' ')
        .map((cn) => styles[cn])
        .join(' ');

    return (
        <div
            className={`${styles['button-bet']}${deviceClassName}${className ? ` ${className}` : ''}${isWin ? ` ${styles.win}` : ''}`}
            onClick={onClick}
        >
            {children && children}

            <div className={styles['slot-chip']}>
                {chip > 0 && (
                    <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
                )}
            </div>
        </div>
    );
};

export default ButtonBet;
