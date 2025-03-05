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
import { Card, CardWrapper, Container } from '../../../ui';

const keyLang = 'features-htp.menu';

const ButtonIcon = ({ icon }: { icon: ReactNode }) => {
    return <div className={styles['button-icon']}>{icon}</div>;
};

const Menu = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <Container>
                <P>{t(`${keyLang}.description`)}</P>

                <CardWrapper>
                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconCancelBet />} />
                        <P>{t(`${keyLang}.paragraph-1`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconDoubleBet />} />
                        <P>{t(`${keyLang}.paragraph-2`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconRebet />} />
                        <P>{t(`${keyLang}.paragraph-3`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconMenu />} />
                        <P>{t(`${keyLang}.paragraph-4`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconHideChip />} />
                        <P>{t(`${keyLang}.paragraph-5`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconStatistic />} />
                        <P>{t(`${keyLang}.paragraph-6`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconRoadmap strokeColor="#fff" />} />
                        <P>{t(`${keyLang}.paragraph-7`)}</P>
                    </Card>

                    {/* <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconFavorite />} />
                        <P>{t(`${keyLang}.paragraph-8`)}</P>
                    </Card> */}
                </CardWrapper>
            </Container>
        </HowToPlayCardV2>
    );
};

export default Menu;
