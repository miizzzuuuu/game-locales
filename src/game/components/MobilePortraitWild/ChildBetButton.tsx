import { PropsWithChildren } from 'react';
import stylesPortrait from './table-bet-portrait.module.scss';
import stylesLandscape from './table-bet-landscape.module.scss';
import { Bet } from '../../../types';
import { useGetChipBet } from '../../../common/hooks/useGetChipBet';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import ChipBet from '../../../common/components/ChipBet';
import LabelTranslate from '../../../common/components/LabelTranslate';
import { GameHelper } from '../../../common/utils/GameHelper';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { useAppSelector } from '../../../store/hooks';

interface IProps extends PropsWithChildren {
    className?: string;
    bet: Bet;
    chipCanBlinking?: boolean;
    rounded?: "bottom-left" | "bottom-right"
    startColor: string
    endColor: string
    borderColor: string
    bgSvg: (isWin: boolean| undefined) => JSX.Element
    isLose: boolean | undefined;
    isSubmit: boolean | undefined;
    ratio: string;
}

const ChildBetButton = (
    { bgSvg, bet, isLose,isSubmit, children, ratio, className
        //  rounded, startColor, endColor, borderColor 
    }: IProps
) => {
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const { chip, color } = useGetChipBet(bet);
    const { placeBetHanlder: handleClick } = usePlaceBet();
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isWin = !!(  !betIsOpen && isSubmit && !isLose);

    return (
        <div
            style={{
                opacity:  !betIsOpen && isLose?0.6:1
            }}
            className={[styles.child.concat(" ".concat(className || "")), deviceClassName].join(" ")}

            onClick={() => handleClick(bet)}

        >
            {children}
            <div className={[styles.childLabel, styles.betButtonLabel].join(" ")} >
                <span className={styles.text_lg}>
                    <LabelTranslate value={bet.button.toLowerCase()} keyLang={GameHelper.getBasePcode()} />
                </span>
                <span >
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
            {bgSvg(isWin)}

        </div>
    );
};

export default ChildBetButton;

