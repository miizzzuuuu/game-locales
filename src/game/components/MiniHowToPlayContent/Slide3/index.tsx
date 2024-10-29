import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';

const keySlide = 'slide-3';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => (
    <Graphic
        isActive={isActive}
        animationSrc="https://cdn.lottielab.com/l/BL6Spgp3SYcmkS.json"
        style={{ height: 'unset' }}
    />
);

const Slide3: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 2} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide3;
