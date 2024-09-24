import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';

import SLIDE_2 from '../assets/slide-2.json';

const keySlide = 'slide-2';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => {
    return <Graphic isActive={isActive} animationData={SLIDE_2} />;
};

const Slide2: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 1} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide2;
