import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../menus/Items/HowToPlay/HowToPlayCardV2';
import P from '../../../ui/P';
import LimitBet from './LimitBet';
import ChipHorizontal from './SVG/ChipHorizontal';
import Timer from './Timer';
import TotalBet from './TotalBet';
import Username from './Username';

const keyLang = 'features-htp.general';

const General = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <div className="htp__container">
                <div className="htp__section">
                    <Username />
                    <P>{t(`${keyLang}.paragraph-1`)}</P>
                </div>

                <div className="htp__section">
                    <TotalBet />
                    <P>{t(`${keyLang}.paragraph-2`)}</P>
                </div>

                <div className="htp__section">
                    <LimitBet />
                    <P>{t(`${keyLang}.paragraph-3`)}</P>
                </div>

                <div className="htp__section">
                    <Timer />
                    <P>{t(`${keyLang}.paragraph-4`)}</P>
                </div>

                <div className="htp__section">
                    <ChipHorizontal />
                    <P>{t(`${keyLang}.paragraph-5`)}</P>
                </div>
            </div>
        </HowToPlayCardV2>
    );
};

export default General;
