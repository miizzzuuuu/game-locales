import { PropsWithChildren } from 'react';
import { Bet } from '../../../utils/BetHelper';
import { clsx } from 'clsx';
import styles from './table-bet-portrait.module.scss';
import ChipHelper from '../../../utils/ChipHelper';
import { useButtonBet } from '../hooks/useButtonBet';
import { useAppSelector } from '../../../store/hooks';

interface IProps extends PropsWithChildren {
    className?: string;
    bet: Bet;
    chipCanBlinking?: boolean;
}

type IPropsChip = {
    value: number;
    isBlink?: boolean;
    isLight?: boolean;
};

const Chip = ({ value, isBlink, isLight }: IPropsChip) => {
    const chipBase = useAppSelector((state) => state.auth.user.chipBase);

    const background = ChipHelper.getChipImageByAmount(
        value,
        chipBase,
        ChipHelper.chipArr,
    );

    const classesChip = clsx(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[length:100%_100%]',
        isBlink && styles.chipBlink,
    );

    return (
        <div
            className={classesChip}
            style={{
                backgroundImage: `url('${background}')`,
                width: 'calc(var(--button-bet-height) * 80 / 100)',
                height: 'calc(var(--button-bet-height) * 80 / 100)',
                fontSize: 'calc(10px * var(--scale-height))',
            }}
        >
            <div
                className='w-full text-center text-[0.7em] font-extrabold'
                style={{
                    lineHeight: 'calc(var(--button-bet-height) * 80 / 100)',
                }}
            >
                {ChipHelper.formatChipText(value)}

                <div
                    className={`${styles.chipLight} ${
                        isLight ? styles.animateChipLight : ''
                    }`}
                ></div>
            </div>
        </div>
    );
};

const BetButton = ({ bet, children, className, chipCanBlinking }: IProps) => {
    const { chip, classesBetButton, handleClick, isChipBlink, isChipLight } =
        useButtonBet({
            bet,
            styles,
            className,
            chipCanBlinking,
        });

    return (
        <div className={classesBetButton} onClick={handleClick}>
            {children}
            {chip > 0 && (
                <Chip
                    value={chip}
                    isBlink={isChipBlink}
                    isLight={isChipLight}
                />
            )}
        </div>
    );
};

export default BetButton;
