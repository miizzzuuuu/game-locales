import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../../../common/utils/GameHelper';
import { payoutGroup } from '../../../../../utils/DragonTigerBHelper';
import Ornament from '../../../../TableBetV2/Ornament';
import SvgDragon from '../../../../TableBetV2/SVG/SvgDragon';
import SvgSuperWild from '../../../../TableBetV2/SVG/SvgSuperWild';
import SvgTie from '../../../../TableBetV2/SVG/SvgTie';
import SvgTiger from '../../../../TableBetV2/SVG/SvgTiger';
import styles from './styles.module.scss';

const TableBetDTWild = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles['table-bet']}>
                <div className={`${styles.top} ${styles.left} ${styles['dragon-wild']}`}>
                    <div className={`${styles['shadow-center']}`}></div>

                    <div className={styles.content}>
                        <div className={styles['bet-name']}>
                            {t(`${getBasePcode()}.dragon wild`, { ns: 'game' })}
                        </div>
                        <div className={styles['bet-payout']}>
                            {payoutGroup['dragonwild@wild']}:1
                        </div>
                    </div>
                </div>
                <div className={`${styles.top} ${styles.right} ${styles['tiger-wild']}`}>
                    <div className={styles['shadow-center']}></div>

                    <div className={styles.content}>
                        <div className={styles['bet-name']}>
                            {t(`${getBasePcode()}.tiger wild`, { ns: 'game' })}
                        </div>
                        <div className={styles['bet-payout']}>
                            {payoutGroup['tigerwild@wild']}:1
                        </div>
                    </div>
                </div>

                <div className={`${styles.middle} ${styles.left} ${styles.dragon} `}>
                    <div className={`${styles['shadow-center']}`}></div>
                    <div className={`${styles['dragon-back']}`}>
                        <SvgDragon />
                    </div>

                    <div className={`${styles.content}`}>
                        <div className={`${styles['bet-name']}`}>
                            {t(`${getBasePcode()}.dragon`, { ns: 'game' })}
                        </div>
                        <div className={`${styles['bet-payout']}`}>
                            {payoutGroup['dragon@dragon']}:1
                        </div>
                    </div>
                </div>

                <div className={`${styles.middle} ${styles.right} ${styles.tiger} `}>
                    <div className={styles['shadow-center']}></div>
                    <div className={styles['tiger-back']}>
                        <SvgTiger />
                    </div>

                    <div className={styles.content}>
                        <div className={styles['bet-name']}>
                            {t(`${getBasePcode()}.tiger`, { ns: 'game' })}
                        </div>
                        <div className={styles['bet-payout']}>{payoutGroup['tiger@tiger']}:1</div>
                    </div>
                </div>

                <div className={`${styles.bottom} ${styles.left} ${styles['dragon-pair']} `}>
                    <div className={styles['shadow-center']}></div>
                    <div className={styles.content}>
                        <div className={styles['bet-name']}>
                            {t(`${getBasePcode()}.dragon pair`, { ns: 'game' })}
                        </div>
                        <div className={styles['bet-payout']}>
                            {payoutGroup['dragonpair@pair']}:1
                        </div>
                    </div>
                </div>

                <div className={`${styles.bottom} ${styles.right} ${styles['tiger-pair']}`}>
                    <div className={styles['shadow-center']}></div>

                    <div className={styles.content}>
                        <div className={styles['bet-name']}>
                            {t(`${getBasePcode()}.tiger pair`, { ns: 'game' })}
                        </div>
                        <div className={styles['bet-payout']}>
                            {payoutGroup['tigerpair@pair']}:1
                        </div>
                    </div>
                </div>

                <div className={styles.center}>
                    <div className={`${styles['super-wild']} `}>
                        <SvgSuperWild />
                        <div className={`${styles.content}`}>
                            <div className={`${styles['bet-name']}`}>
                                {t(`${getBasePcode()}.super wild`, { ns: 'game' })}
                            </div>
                            <div className={`${styles['bet-payout']}`}>
                                {payoutGroup['superwild@superwild']}:1
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.tie}`}>
                        <SvgTie />
                        <div className={styles.content}>
                            <div className={styles['bet-name']}>
                                {t(`${getBasePcode()}.tie`, { ns: 'game' })}
                            </div>
                            <div className={styles['bet-payout']}>{payoutGroup['tie@tie']}:1</div>
                        </div>
                    </div>
                </div>

                <Ornament />
            </div>
        </div>
    );
};

export default TableBetDTWild;
