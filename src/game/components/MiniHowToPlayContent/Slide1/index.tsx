import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import styles from './styles.module.scss';

const keySlide = 'slide-1';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => (
    <Graphic
        isActive={isActive}
        animationSrc="https://cdn.lottielab.com/l/7C2Yk3GF9Ast5R.json"
        className={styles.image}
    />
);

const Slide1: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 0} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide1;
