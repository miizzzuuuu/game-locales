import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';

import SLIDE_1 from '../assets/slide-1.json';

export const title = 'Cara Bermain';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => {
    return <Graphic isActive={isActive} animationData={SLIDE_1} />;
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
    graphic: (index: number) => <GraphicComponent isActive={index === 0} />,
    content: <ContentComponent />,
};

export default Slide1;
