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
        <div className={`${styles['table-bet']} ${betIsOpen ? styles.opened : styles.closed}`}>
            {_24DHelper.getBetKeys.map((key) => {
                const bet = _24DHelper.bets[key];

                const className = `slot-${key} bet-number`;
                const isWin = winBets?.includes(bet.button);

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        isWin={isWin}
                        onClick={placeBetHandler}
                    >
                        <BetNumber button={bet.button} />
                    </ButtonBet>
                );
            })}

            {_24DHelper.getBetColRowKeys.map((key) => {
                const bet = _24DHelper.betsColRow[key];

                const className = `slot-${key} bet-col-row`;
                const isWin = winBets?.includes(bet.button);

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        isWin={isWin}
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
                const isWin = winBets?.includes(bet.button);

                return (
                    <ButtonBet
                        key={key}
                        button={bet.button}
                        group={bet.group}
                        className={className}
                        isWin={isWin}
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
