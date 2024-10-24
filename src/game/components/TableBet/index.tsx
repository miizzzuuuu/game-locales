import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { useAppSelector } from '../../../store/hooks';
import { selectWinBets } from '../../../store/slice/resultSlice';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { Bet } from '../../../types';
import {
    BETS,
    BETS_50,
    BETS_COL_ROW,
    BETS_MULTI_COLS,
    BETS_MULTI_NUMBERS,
    getColor,
} from '../../utils/_24DHelper';
import ButtonBet from './ButtonBet';
import BetColRow from './ButtonBet/BetColRow';
import BetNumber from './ButtonBet/BetNumber';
import BetText from './ButtonBet/BetText';
import styles from './styles.module.scss';

const TableBet = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const winBets = useAppSelector(selectWinBets);

    const { placeBetHandler } = usePlaceBet({ useLowerCase: true, betIsOpen });

    const renderButtonBet = (
        key: string,
        bet: Bet,
        type: string | undefined,
        additionalClass: string,
    ) => {
        const className = `slot-${key} ${additionalClass} ${winBets.length > 0 ? (winBets.includes(bet.button) ? 'win' : 'lose') : ''}`;

        return (
            <ButtonBet
                key={key}
                button={bet.button}
                group={bet.group}
                className={className}
                onClick={placeBetHandler}
            >
                {type === 'number' ? (
                    <BetNumber button={bet.button} />
                ) : type === 'col-row' ? (
                    <BetColRow label={bet.button} group={bet.group} />
                ) : type === 'text' ? (
                    <BetText label={bet.button.toLocaleLowerCase()} />
                ) : null}
            </ButtonBet>
        );
    };

    const renderBets = () => {
        return Object.keys(BETS).map((key) => {
            const bet = BETS[key];
            const color = getColor(Number(bet.button));
            return renderButtonBet(key, bet, 'number', `bet-number-${color}`);
        });
    };

    const renderColRowBets = () => {
        return Object.keys(BETS_COL_ROW).map((key) => {
            const bet = BETS_COL_ROW[key];
            return renderButtonBet(key, bet, 'col-row', 'bet-col-row');
        });
    };

    const renderMultiColBets = () => {
        return Object.keys(BETS_MULTI_COLS).map((key) => {
            const bet = BETS_MULTI_COLS[key];
            return renderButtonBet(key, bet, 'col-row', 'bet-col-row');
        });
    };

    const render50Bets = () => {
        return Object.keys(BETS_50).map((key) => {
            const bet = BETS_50[key];
            const colorClass = ['Small', 'Odd', 'Red'].includes(bet.button)
                ? 'bet-red'
                : 'bet-black';
            return renderButtonBet(key, bet, 'text', colorClass);
        });
    };

    const renderMultiNumberBets = () => {
        return Object.keys(BETS_MULTI_NUMBERS).map((key) => {
            const bet = BETS_MULTI_NUMBERS[key];
            return renderButtonBet(key, bet, undefined, '');
        });
    };

    return (
        <div
            className={`${styles['table-bet']} ${betIsOpen ? styles.opened : styles.closed}${winBets.length > 0 ? ` ${styles['win-state']}` : ''}`}
        >
            {renderBets()}
            {renderColRowBets()}

            <div className={styles['container-multi-cols']}>{renderMultiColBets()}</div>

            {render50Bets()}
            {renderMultiNumberBets()}
        </div>
    );
};

export default TableBet;
