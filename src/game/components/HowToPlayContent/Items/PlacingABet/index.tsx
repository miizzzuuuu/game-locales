import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import stylesParent from '../styles.module.scss';
import SVGBet50 from './SVG/SVGBet50';
import SVGColRow from './SVG/SVGColRow';
import SVGCorner from './SVG/SVGCorner';
import SVGDouble from './SVG/SVGDouble';
import SVGSingle from './SVG/SVGSingle';

const PlacingABet = () => {
    const keyLang = 'htp.placing-a-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <div className={stylesParent.container}>
                <Heading2 keyLang={keyLang} value="single-bet" />
                <div>
                    <SVGSingle />
                </div>

                <Heading2 keyLang={keyLang} value="split-bet" />
                <div>
                    <SVGDouble />
                </div>

                <Heading2 keyLang={keyLang} value="corner-bet" />
                <div>
                    <SVGCorner />
                </div>

                <Heading2 keyLang={keyLang} value="row-column-bets" />
                <div>
                    <SVGColRow />
                </div>

                <Heading2 keyLang={keyLang} value="50-50-bet" />
                <div>
                    <SVGBet50 />
                </div>
            </div>
        </HowToPlayCard>
    );
};

export default PlacingABet;
