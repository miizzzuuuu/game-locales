import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

import SVGBet50 from './SVG/SVGBet50';
import SVGColRow from './SVG/SVGColRow';
import SVGCorner from './SVG/SVGCorner';
import SVGDouble from './SVG/SVGDouble';
import SVGSingle from './SVG/SVGSingle';

const PlacingABet = () => {
    const keyLang = 'htp.placing-a-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
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
            </Container>
        </HowToPlayCard>
    );
};

export default PlacingABet;
