import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';

import SLIDE_1 from '../assets/slide-1.json';

const keySlide = 'slide-1';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => (
    <Graphic isActive={isActive} animationData={SLIDE_1} style={{ width: '28rem' }} />
);

const Slide1: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 0} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide1;
