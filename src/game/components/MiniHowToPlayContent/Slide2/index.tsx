import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';

const keySlide = 'slide-2';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => (
    <Graphic
        isActive={isActive}
        animationSrc="https://cdn.lottielab.com/l/CHwzKob4zhYvaz.json"
        style={{ height: 'unset' }}
    />
);

const Slide2: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 1} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide2;
