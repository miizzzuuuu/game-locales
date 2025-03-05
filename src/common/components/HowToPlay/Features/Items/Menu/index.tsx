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
import { Card, CardWrapper, Container } from '../../../ui';
import P from '../../../ui/P';
import { prefixMenu } from '../../helper';
import styles from './styles.module.scss';

const ButtonIcon = ({ icon }: { icon: ReactNode }) => {
    return <div className={styles['button-icon']}>{icon}</div>;
};

const Menu = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${prefixMenu}.title`)}>
            <Container>
                <P>{t(`${prefixMenu}.description`)}</P>

                <CardWrapper>
                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconCancelBet />} />
                        <P>{t(`${prefixMenu}.paragraph-1`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconDoubleBet />} />
                        <P>{t(`${prefixMenu}.paragraph-2`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconRebet />} />
                        <P>{t(`${prefixMenu}.paragraph-3`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconMenu />} />
                        <P>{t(`${prefixMenu}.paragraph-4`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconHideChip />} />
                        <P>{t(`${prefixMenu}.paragraph-5`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconStatistic />} />
                        <P>{t(`${prefixMenu}.paragraph-6`)}</P>
                    </Card>

                    <Card className={styles['card-menu']}>
                        <ButtonIcon icon={<SVGIconRoadmap strokeColor="#fff" />} />
                        <P>{t(`${prefixMenu}.paragraph-7`)}</P>
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
