import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import { Container, P } from '../../../../../common/components/HowToPlay/ui';
import styles from './styles.module.scss';
import DragonWild from './SVG/DragonWild';
import TigerWild from './SVG/TigerWild';
import SuperWild from './SVG/SuperWild';
import DragonPair from './SVG/DragonPair';
import TigerPair from './SVG/TigerPair';
import { prefixWildBet } from '../../helper';

const keyContents = ['dragon-wild', 'tiger-wild', 'super-wild', 'dragon-pair', 'tiger-pair'];
const Icons = [<DragonWild />, <TigerWild />, <SuperWild />, <DragonPair />, <TigerPair />];

const WildBet = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${prefixWildBet}.title`, { ns: 'game' })}>
            <Container>
                <P>{t(`${prefixWildBet}.description`, { ns: 'game' })}</P>
                <P>{t(`${prefixWildBet}.description-2`, { ns: 'game' })}</P>

                {keyContents.map((key, idx) => {
                    return (
                        <div key={key} className={styles.wrapper}>
                            <div className={styles.icon}>{Icons[idx]}</div>
                            <P>{t(`${prefixWildBet}.${key}`, { ns: 'game' })}</P>
                        </div>
                    );
                })}
            </Container>
        </HowToPlayCardV2>
    );
};

export default WildBet;
