import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { _24DHelper } from '../../utils/_24DHelper';
import ButtonBet from './ButtonBet';
import BetColRow from './ButtonBet/BetColRow';
import BetNumber from './ButtonBet/BetNumber';
import BetText from './ButtonBet/BetText';
import styles from './styles.module.scss';
import { selectWinBets } from '../../../store/slice/resultSlice';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';

const TableBet = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const winBets = useAppSelector(selectWinBets);

    const { placeBetHandler } = usePlaceBet({ useLowerCase: true, betIsOpen });

    return (
        <div
            className={`${styles['table-bet']} ${betIsOpen ? styles.opened : styles.closed}${winBets.length > 0 ? ` ${styles['win-state']}` : ''}`}
        >
            {_24DHelper.getBetKeys.map((key) => {
                const bet = _24DHelper.bets[key];

                let className = `slot-${key} bet-number`;

                if (winBets.length > 0) {
                    className += winBets?.includes(bet.button) ? ' win' : ' lose';
                }

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        onClick={placeBetHandler}
                    >
                        <BetNumber button={bet.button} />
                    </ButtonBet>
                );
            })}

            {_24DHelper.getBetColRowKeys.map((key) => {
                const bet = _24DHelper.betsColRow[key];

                let className = `slot-${key} bet-col-row`;

                if (winBets.length > 0) {
                    className += winBets?.includes(bet.button) ? ' win' : ' lose';
                }

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        onClick={placeBetHandler}
                    >
                        <BetColRow label={bet.button} />
                    </ButtonBet>
                );
            })}

            {_24DHelper.getBet50Keys.map((key) => {
                const bet = _24DHelper.bets50[key];

                let className = `slot-${key}`;
                if (['Small', 'Odd', 'Red'].includes(bet.button)) {
                    className += ' bet-red';
                } else {
                    className += ' bet-yellow';
                }

                if (winBets.length > 0) {
                    className += winBets?.includes(bet.button) ? ' win' : ' lose';
                }

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        onClick={placeBetHandler}
                    >
                        <BetText label={bet.button.toLocaleLowerCase()} />
                    </ButtonBet>
                );
            })}

            {_24DHelper.getBetMultiNumberKeys.map((key) => {
                const bet = _24DHelper.betMultiNumber[key];

                const className = `slot-${key}`;

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        onClick={placeBetHandler}
                    />
                );
            })}
        </div>
    );
};

export default TableBet;
