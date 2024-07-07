import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { useGetChipBet } from '../../../../common/hooks/useGetChipBet';
import { Bet } from '../../../../types';
import TableBetChip from '../TableBetChip';
import { DisplayHelper } from '../../../../common/utils/DisplayHelper';

interface IProps {
    className?: string;
    children?: ReactNode;
    bet: Bet;

    isWin?: boolean;
    onClick?: () => void;
}

const ButtonBet = ({ children, isWin, className, bet, onClick }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip, color } = useGetChipBet(bet);

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
                    <TableBetChip
                        value={chip}
                        color={color}
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
            </div>
        </div>
    );
};

export default ButtonBet;
