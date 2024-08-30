import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import SVGWheel from '../assets/SVGWheel';

export const title = 'Cara Bermain';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <div>
                <SVGWheel />
            </div>
        </Graphic>
    );
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Permainan dimana 1 bola kecil dilemparkan kedalam Roda berputar yang memiliki 37
                slot dengan angka dari 0 hingga 36 Angka.
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
