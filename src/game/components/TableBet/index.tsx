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

const TableBet = () => {
    const tableBetRef = useRef<HTMLDivElement>(null);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const betIsOpen = useAppSelector(selectBetIsOpen);

    useEffect(() => {
        if (!betIsOpen) {
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
        <div className={`${styles['table-bet']}${deviceClassName}`} ref={tableBetRef}>
            {TwentyFourDHelper.getBetKeys.map((key) => {
                const bet = TwentyFourDHelper.bets[key];

                const className = `slot-${key} bet-number`;

                return (
                    <ButtonBet key={key} bet={bet} className={className}>
                        <BetNumber button={bet.button} />
                    </ButtonBet>
                );
            })}

            {TwentyFourDHelper.getBetColRowKeys.map((key) => {
                const bet = TwentyFourDHelper.betsColRow[key];

                const className = `slot-${key} bet-col-row`;

                return (
                    <ButtonBet key={key} bet={bet} className={className}>
                        <BetColRow
                            label={<LabelTranslate value={bet.button} keyLang="g24d.bet" />}
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

                return (
                    <ButtonBet key={key} bet={bet} className={className}>
                        <BetText
                            label={
                                <LabelTranslate value={bet.button.toLowerCase()} keyLang="g24d" />
                            }
                        />
                    </ButtonBet>
                );
            })}
        </div>
    );
};

export default TableBet;
