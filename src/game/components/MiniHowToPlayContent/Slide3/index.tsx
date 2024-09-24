import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';

import SLIDE_3 from '../assets/slide-3.json';

const keySlide = 'slide-3';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => {
    return <Graphic isActive={isActive} animationData={SLIDE_3} />;
};

const Slide3: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 2} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide3;
