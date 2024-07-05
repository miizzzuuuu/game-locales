import LabelTranslate from '../../../common/components/LabelTranslate';
import { TwentyFourDHelper } from '../../utils/TwentyFourDHelper';
import ButtonBet from './ButtonBet';
import BetColRow from './ButtonBet/BetColRow';
import BetNumber from './ButtonBet/BetNumber';
import BetText from './ButtonBet/BetText';
import styles from './styles.module.scss';

const TableBet = () => {
    return (
        <div className={styles['table-bet']}>
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
