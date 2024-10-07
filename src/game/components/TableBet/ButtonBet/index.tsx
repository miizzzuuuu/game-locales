import { ReactNode } from 'react';
import styles from './styles.module.scss';
import ChipBet from '../../../../common/components/ChipBet';
import { selectChip } from '../../../../store/slice/bets';
import { useAppSelector } from '../../../../store/hooks';

interface IProps {
    button: string;
    group: string;

    className?: string;
    children?: ReactNode;
    isWin?: boolean;

    onClick: (button: string, group: string) => void;
}

const ButtonBet = ({ button, group, children, isWin, className, onClick }: IProps) => {
    className = className
        ?.split(' ')
        .map((cn) => styles[cn])
        .join(' ');

    const chip = useAppSelector((state) => selectChip(state, `${button}-${group}`));

    return (
        <div
            className={`${styles['button-bet']}${className ? ` ${className}` : ''}${isWin ? ` ${styles.win}` : ''}`}
            onClick={() => onClick(button, group)}
        >
            {children && children}

            <div className={styles['slot-chip']}>{chip > 0 ? <ChipBet value={chip} /> : null}</div>
        </div>
    );
};

export default ButtonBet;
