import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../menus/Items/HowToPlay/HowToPlayCardV2';
import SVGIconCancelBet from '../../../../ButtonCancelBet/SVG/SVGIconCancelBet';
import SVGIconDoubleBet from '../../../../ButtonDoubleBet/SVG/SVGIconDoubleBet';
import SVGIconHideChip from '../../../../ButtonHideChip/SVG/SVGIconHideChip';
import SVGIconMenu from '../../../../ButtonMenu/SVG/SVGIconMenu';
import SVGIconRebet from '../../../../ButtonRebet/SVG/SVGIconRebet';
import SVGIconRoadmap from '../../../../ButtonRoadmap/SVG/SVGIconRoadmap';
import SVGIconStatistic from '../../../../ButtonSatatistic/SVG/SVGIconStatistic';
import P from '../../../ui/P';
import styles from './styles.module.scss';

const keyLang = 'features-htp.menu';

const ButtonIcon = ({ icon }: { icon: ReactNode }) => {
    return <div className={styles['button-icon']}>{icon}</div>;
};

const Menu = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <div className="htp__container">
                <P>{t(`${keyLang}.description`)}</P>

                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconCancelBet />} />
                        <P>{t(`${keyLang}.paragraph-1`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconDoubleBet />} />
                        <P>{t(`${keyLang}.paragraph-2`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconRebet />} />
                        <P>{t(`${keyLang}.paragraph-3`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconMenu />} />
                        <P>{t(`${keyLang}.paragraph-4`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconHideChip />} />
                        <P>{t(`${keyLang}.paragraph-5`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconStatistic />} />
                        <P>{t(`${keyLang}.paragraph-6`)}</P>
                    </div>

                    <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconRoadmap strokeColor="#fff" />} />
                        <P>{t(`${keyLang}.paragraph-7`)}</P>
                    </div>

                    {/* <div className={styles.card}>
                        <ButtonIcon icon={<SVGIconFavorite />} />
                        <P>{t(`${keyLang}.paragraph-8`)}</P>
                    </div> */}
                </div>
            </div>
        </HowToPlayCardV2>
    );
};

export default Menu;
