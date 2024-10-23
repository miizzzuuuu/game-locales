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
import { Bet } from '../../../types';

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
        return _24DHelper.getBetKeys.map((key) => {
            const bet = _24DHelper.bets[key];
            const color = _24DHelper.getColor(Number(bet.button));
            return renderButtonBet(key, bet, 'number', `bet-number-${color}`);
        });
    };

    const renderColRowBets = () => {
        return _24DHelper.getBetColRowKeys.map((key) => {
            const bet = _24DHelper.betsColRow[key];
            return renderButtonBet(key, bet, 'col-row', 'bet-col-row');
        });
    };

    const renderMultiColBets = () => {
        return _24DHelper.getBetsMultiColsKeys.map((key) => {
            const bet = _24DHelper.betsMultiCols[key];
            return renderButtonBet(key, bet, 'col-row', 'bet-col-row');
        });
    };

    const render50Bets = () => {
        return _24DHelper.getBet50Keys.map((key) => {
            const bet = _24DHelper.bets50[key];
            const colorClass = ['Small', 'Odd', 'Red'].includes(bet.button)
                ? 'bet-red'
                : 'bet-black';
            return renderButtonBet(key, bet, 'text', colorClass);
        });
    };

    const renderMultiNumberBets = () => {
        return _24DHelper.getBetMultiNumberKeys.map((key) => {
            const bet = _24DHelper.betMultiNumber[key];
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
