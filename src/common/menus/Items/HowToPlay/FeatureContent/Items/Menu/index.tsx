import { ReactElement } from 'react';
import SVGIconCancelBet from '../../../../../../components/ButtonCancelBet/SVG/SVGIconCancelBet';
import SVGIconDoubleBet from '../../../../../../components/ButtonDoubleBet/SVG/SVGIconDoubleBet';
// import SVGIconFavorite from '../../../../../../components/ButtonFavorite/SVG/SVGIconFavorite';
import SVGIconHideChip from '../../../../../../components/ButtonHideChip/SVG/SVGIconHideChip';
import SVGIconMenu from '../../../../../../components/ButtonMenu/SVG/SVGIconMenu';
import SVGIconRoadmap from '../../../../../../components/ButtonRoadmap/SVG/SVGIconRoadmap';
import SVGIconRebet from '../../../../../../components/ButtonRebet/SVG/SVGIconRebet';
import SVGIconStatistic from '../../../../../../components/ButtonSatatistic/SVG/SVGIconStatistic';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import { Container, P } from '../../../Components';
import HowToPlayCard from '../../../HowToPlayCard';

import styles from './styles.module.scss';

interface ButtonIconProps {
    icon: ReactElement;
}

const ButtonIcon = ({ icon }: ButtonIconProps) => {
    return <div className={styles['button-icon']}>{icon}</div>;
};

const paragraphArr = [
    { icon: <SVGIconCancelBet /> },
    { icon: <SVGIconDoubleBet /> },
    { icon: <SVGIconRebet /> },
    { icon: <SVGIconMenu /> },
    { icon: <SVGIconHideChip /> },
    { icon: <SVGIconStatistic /> },
    // { icon: <SVGIconFavorite /> },
    { icon: <SVGIconRoadmap strokeColor="#fff" /> },
];

const Menu = () => {
    const keyLang = 'common.htp.menu';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <P keyLang={keyLang} value="description" />

                <div className={styles.wrapper}>
                    {paragraphArr.map((value, idx) => (
                        <div key={idx} className={styles.card}>
                            <ButtonIcon icon={value.icon} />

                            <P keyLang={keyLang} value={`content.paragraph-${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default Menu;
