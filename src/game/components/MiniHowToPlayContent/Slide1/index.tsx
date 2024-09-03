import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
// import SVGWheel from '../assets/SVGWheel';

export const title = 'Cara Bermain';

export const GraphicComponent = () => {
    return <Graphic>{/* <SVGWheel style={{ width: '100%', height: '100%' }} /> */}</Graphic>;
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Memenangkan multiplier hingga x80 melalui sistem Bonus Wild Card, Bonus Dragon Tiger
                Wild dan Bonus Tie Wild, sehingga memiliki peningkatan pembayaran drastis diatas
                bayaran normal
            </p>
        </Content>
    );
};

const Slide1: ModalItem = {
    title,
    graphic: <GraphicComponent />,
    content: <ContentComponent />,
};

export default Slide1;
