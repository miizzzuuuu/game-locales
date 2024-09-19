import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';

import SLIDE_1 from '../assets/slide-1.json';
import Lottie from 'lottie-react';

export const title = 'Cara Bermain';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <Lottie animationData={SLIDE_1} loop />
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
