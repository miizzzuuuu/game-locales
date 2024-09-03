import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
// import SVGResult from '../assets/SVGResult';

export const title = 'Bonus Tie Wild';

export const GraphicComponent = () => {
    return <Graphic>{/* <SVGResult style={{ width: '16rem' }} /> */}</Graphic>;
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Dapatkan bonus dengan bertaruh pada Tie. Ketika pihak yang Anda pertaruhkan menang
                dan nilai kartu Anda sama dengan kartu wild card, Anda dapat memenangkan bonus wild.
            </p>
        </Content>
    );
};

const Slide4: ModalItem = {
    title,
    graphic: <GraphicComponent />,
    content: <ContentComponent />,
};

export default Slide4;
