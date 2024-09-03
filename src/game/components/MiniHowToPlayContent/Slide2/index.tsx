import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
// import SVGBet from '../assets/SVGBet';

export const title = 'Bonus Wild Card';

export const GraphicComponent = () => {
    return <Graphic>{/* <SVGBet style={{ width: '100%', height: '100%' }} /> */}</Graphic>;
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Dapatkan bonus dengan bertaruh pada Dragon, Tiger, atau Tie. Ketika pihak yang Anda
                pertaruhkan menang dan nilai kartu Anda sama dengan kartu wild, Anda dapat
                memenangkan bonus wild.
            </p>
        </Content>
    );
};

const Slide2: ModalItem = {
    title,
    graphic: <GraphicComponent />,
    content: <ContentComponent />,
};

export default Slide2;
