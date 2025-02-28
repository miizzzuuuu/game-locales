import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { getOrientation } from '../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { BETS } from '../../utils/DragonTigerBHelper';
import { RenderCard } from '../Card/RenderCard';
import BetDragon from './ButtonBet/BetDragon';
import BetDragonPair from './ButtonBet/BetDragonPair';
import BetDragonWild from './ButtonBet/BetDragonWild';
import BetSuperWild from './ButtonBet/BetSuperWild';
import BetTie from './ButtonBet/BetTie';
import BetTiger from './ButtonBet/BetTiger';
import BetTigerPair from './ButtonBet/BetTigerPair';
import BetTigerWild from './ButtonBet/BetTigerWild';
import styles from './index.module.scss';

const TableBetV2 = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const { placeBetHandler } = usePlaceBet({ betIsOpen });
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const isSuperWildLose =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        !(
            scanNumber.dragon_value == scanNumber.tiger_value &&
            scanNumber.dragon_value == scanNumber.wild_value
        );

    const isDragonWildPairWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        ((scanNumber.dragon_value == scanNumber.wild_value &&
            scanNumber.wild_value > scanNumber.tiger_value) ||
            scanNumber.dragon_value == scanNumber.wild_value);

    const isTigerWildPairWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        ((scanNumber.tiger_value == scanNumber.wild_value &&
            scanNumber.wild_value > scanNumber.dragon_value) ||
            scanNumber.tiger_value == scanNumber.wild_value);

    return (
        <div className={`${styles['table-bet']} ${betIsOpen ? styles.opened : styles.closed}`}>
            <BetDragonWild bet={BETS['dragon-wild']} placeBetHandler={placeBetHandler} />
            <BetTigerWild bet={BETS['tiger-wild']} placeBetHandler={placeBetHandler} />

            <BetDragon bet={BETS.dragon} placeBetHandler={placeBetHandler} />
            <BetTiger bet={BETS.tiger} placeBetHandler={placeBetHandler} />

            <BetDragonPair bet={BETS['dragon-pair']} placeBetHandler={placeBetHandler} />
            <BetTigerPair bet={BETS['tiger-pair']} placeBetHandler={placeBetHandler} />

            <div className={styles.center}>
                <BetSuperWild bet={BETS.superwild} placeBetHandler={placeBetHandler} />
                <BetTie bet={BETS.tie} placeBetHandler={placeBetHandler} />

                <div
                    className={`${styles['slot-card']}`}
                    style={{
                        transform: `translateX(${getOrientation() == 'portrait' ? '50%' : '50%'}) translateY( ${
                            getOrientation() == 'portrait' ? '5%' : '6%'
                        })`,
                        transformOrigin: 'center',
                    }}
                >
                    <RenderCard
                        notAbsolute={getOrientation() == 'portrait' ? true : true}
                        delay={3500}
                        top="-1rem"
                        right="unset"
                        left={getOrientation() == 'portrait' ? '0%' : '50%'}
                        position={{ x: '-50%', y: '5px' }}
                        opacity={
                            isDragonWildPairWin || isTigerWildPairWin
                                ? 1
                                : isSuperWildLose
                                  ? 0.6
                                  : 1
                        }
                        value={scanNumber?.wild ?? ''}
                        appear={!!(!betIsOpen && scanNumber?.wild && scanNumber.wild !== 'x')}
                        disappear={!scanNumber}
                        submit={scanNumber?.submit}
                    />
                </div>
            </div>

            <div className={`${styles.stick} ${styles.left}`}>
                <div className={styles.long}></div>
                <div className={styles['stick-top']}></div>
                <div className={styles['stick-bottom']}></div>
                <div className={styles['top-ornamen']}>
                    <div className={styles['top-ornamen-circle']}></div>
                </div>
                <div className={styles['bottom-ornamen']}>
                    <div className={styles['bottom-ornamen-circle']}></div>
                </div>
            </div>

            <div className={`${styles.stick} ${styles.right}`}>
                <div className={`${styles.long}`}></div>
                <div className={`${styles['stick-top']}`}></div>
                <div className={`${styles['stick-bottom']}`}></div>
                <div className={`${styles['top-ornamen']}`}>
                    <div className={`${styles['top-ornamen-circle']}`}></div>
                </div>
                <div className={`${styles['bottom-ornamen']}`}>
                    <div className={`${styles['bottom-ornamen-circle']}`}></div>
                </div>
            </div>
        </div>
    );
};

export default TableBetV2;
