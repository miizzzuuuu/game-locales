import { useEffect, useRef } from 'react';
import LabelTranslate from '../../../common/components/LabelTranslate';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { TwentyFourDHelper } from '../../utils/TwentyFourDHelper';
import ButtonBet from './ButtonBet';
import BetColRow from './ButtonBet/BetColRow';
import BetNumber from './ButtonBet/BetNumber';
import BetText from './ButtonBet/BetText';
import styles from './styles.module.scss';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { selectWinBets } from '../../../store/slice/resultSlice';
import { GameHelper } from '../../../common/utils/GameHelper';
import { useGetChips } from '../../../common/hooks/useGetChips';

const TableBet = () => {
    const tableBetRef = useRef<HTMLDivElement>(null);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const betIsOpen = useAppSelector(selectBetIsOpen);
    const winBets = useAppSelector(selectWinBets);

    const { placeBetHandler } = usePlaceBet({ useLowerCase: true });
    const { chipBet, chipBetSend } = useGetChips();

    useEffect(() => {
        if (!betIsOpen) {
            console.log('close');
            tableBetRef.current?.classList.remove(styles.opened);
            tableBetRef.current?.classList.add(styles.closed);
        } else {
            if (tableBetRef.current?.classList.contains(styles.closed)) {
                tableBetRef.current?.classList.remove(styles.closed);
                tableBetRef.current?.classList.add(styles.opened);
            }
        }
    }, [betIsOpen]);

    const basePcode = GameHelper.getBasePcode();

    return (
        <div
            className={`${styles['table-bet']} ${deviceClassName} ${styles.closed}`}
            ref={tableBetRef}
        >
            {TwentyFourDHelper.getBetKeys.map((key) => {
                const bet = TwentyFourDHelper.bets[key];

                const className = `slot-${key} bet-number`;
                const isWin = winBets?.includes(bet.button);

                const chip = chipBet(bet) + chipBetSend(bet);

                return (
                    <ButtonBet
                        key={key}
                        chip={chip}
                        className={className}
                        isWin={isWin}
                        onClick={() => placeBetHandler(bet)}
                    >
                        <BetNumber button={bet.button} />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBetColRowKeys.map((key) => {
                const bet = TwentyFourDHelper.betsColRow[key];

                const className = `slot-${key} bet-col-row`;
                const isWin = winBets?.includes(bet.button);

                const chip = chipBet(bet) + chipBetSend(bet);

                return (
                    <ButtonBet
                        key={key}
                        chip={chip}
                        className={className}
                        isWin={isWin}
                        onClick={() => placeBetHandler(bet)}
                    >
                        <BetColRow
                            label={<LabelTranslate value={bet.button} keyLang={basePcode} />}
                        />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBet50Keys.map((key) => {
                const bet = TwentyFourDHelper.bets50[key];

                let className = `slot-${key}`;
                if (['Small', 'Odd', 'Red'].includes(bet.button)) {
                    className += ' bet-red';
                } else {
                    className += ' bet-yellow';
                }
                const isWin = winBets?.includes(bet.button);

                const chip = chipBet(bet) + chipBetSend(bet);

                return (
                    <ButtonBet
                        key={key}
                        chip={chip}
                        className={className}
                        isWin={isWin}
                        onClick={() => placeBetHandler(bet)}
                    >
                        <BetText
                            label={
                                <LabelTranslate
                                    value={bet.button.toLowerCase()}
                                    keyLang={basePcode}
                                />
                            }
                        />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBetMultiNumberKeys.map((key) => {
                const bet = TwentyFourDHelper.betMultiNumber[key];

                const className = `slot-${key}`;

                const chip = chipBet(bet) + chipBetSend(bet);

                return (
                    <ButtonBet
                        key={key}
                        chip={chip}
                        className={className}
                        onClick={() => placeBetHandler(bet)}
                    />
                );
            })}
        </div>
    );
};

export default TableBet;
