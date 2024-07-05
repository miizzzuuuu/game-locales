import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { useGetChipBet } from '../../../../common/hooks/useGetChipBet';
import { Bet } from '../../../../types';

interface IProps {
    className?: string;
    children?: ReactNode;
    bet: Bet;
}

const ButtonBet = ({ children, className, bet }: IProps) => {
    const { chip, color } = useGetChipBet(bet);

    console.log('chip', { chip, color });

    className = className
        ?.split(' ')
        .map((cn) => styles[cn])
        .join(' ');

    return (
        <div className={`${styles['button-bet']}${className ? ` ${className}` : ''}`}>
            {children && children}
        </div>
    );
};

export default ButtonBet;
