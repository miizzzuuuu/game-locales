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

const TableBet = () => {
    const tableBetRef = useRef<HTMLDivElement>(null);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const betIsOpen = useAppSelector(selectBetIsOpen);

    const { placeBetHanlder } = usePlaceBet();

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

    return (
        <div
            className={`${styles['table-bet']} ${deviceClassName} ${styles.closed}`}
            ref={tableBetRef}
        >
            {TwentyFourDHelper.getBetKeys.map((key) => {
                const bet = TwentyFourDHelper.bets[key];

                const className = `slot-${key} bet-number`;

                return (
                    <ButtonBet
                        key={key}
                        bet={bet}
                        className={className}
                        onClick={() => placeBetHanlder(bet)}
                    >
                        <BetNumber button={bet.button} />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBetColRowKeys.map((key) => {
                const bet = TwentyFourDHelper.betsColRow[key];

                const className = `slot-${key} bet-col-row`;

                return (
                    <ButtonBet
                        key={key}
                        bet={bet}
                        className={className}
                        onClick={() => placeBetHanlder(bet)}
                    >
                        <BetColRow label={<LabelTranslate value={bet.button} keyLang="p6.bet" />} />
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

                return (
                    <ButtonBet
                        key={key}
                        bet={bet}
                        className={className}
                        onClick={() => placeBetHanlder(bet)}
                    >
                        <BetText
                            label={<LabelTranslate value={bet.button.toLowerCase()} keyLang="p6" />}
                        />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBetMultiNumberKeys.map((key) => {
                const bet = TwentyFourDHelper.betMultiNumber[key];

                const className = `slot-${key}`;

                return (
                    <ButtonBet
                        key={key}
                        bet={bet}
                        className={className}
                        onClick={() => placeBetHanlder(bet)}
                    />
                );
            })}
        </div>
    );
};

export default TableBet;
