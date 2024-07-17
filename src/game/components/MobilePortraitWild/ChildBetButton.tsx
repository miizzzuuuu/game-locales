import { PropsWithChildren } from 'react';
import stylesPortrait from './table-bet-portrait.module.scss';
import stylesLandscape from './table-bet-landscape.module.scss';
import { Bet } from '../../../types';
import { useGetChipBet } from '../../../common/hooks/useGetChipBet';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import ChipBet from '../../../common/components/ChipBet';

interface IProps extends PropsWithChildren {
    className?: string;
    bet: Bet;
    chipCanBlinking?: boolean;
    rounded?: "bottom-left" | "bottom-right"
    startColor: string
    endColor: string
    borderColor: string
    bgSvg: () => JSX.Element
    opacity: number;
    ratio: string;
}

const ChildBetButton = (
    { bgSvg, bet, opacity, children,ratio, className, chipCanBlinking,
        //  rounded, startColor, endColor, borderColor 
    }: IProps
) => {
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const { chip, color } = useGetChipBet(bet);
    const { placeBetHanlder: handleClick } = usePlaceBet();

    return (
        <div
            style={{
                opacity
            }}
            className={[styles.child.concat(" ".concat(className || "")), deviceClassName].join(" ")}

            onClick={() => handleClick(bet)}

        >
            {children}
            <div className={[styles.childLabel, styles.betButtonLabel].join(" ")} >
                <span className='text-lg'>{bet.button}</span>
                <span className='text-white/[.75]'>
                    {ratio}
                    <div className={styles['slot-chip']}>

                        {chip > 0 && (
                            <ChipBet
                                value={chip}
                                color={color}
                            />
                        )}
                    </div>
                </span>

            </div>
            {bgSvg()}

        </div>
    );
};

export default ChildBetButton;

