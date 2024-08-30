import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import SVGBet from '../assets/SVGBet';

export const title = 'Taruhan';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <div>
                <SVGBet />
            </div>
        </Graphic>
    );
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Anda dapat bertaruh pada angka, rentang angka, warna atau apakah ganjil / genap.
                Setelah Anda memasang taruhan, Roda akan diputar dan 1 bola dilemparkan.
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
