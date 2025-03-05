import { ModalItem } from '../../../../common/components/QuickHowToPlay/ModalQuickHTP';
import Content from '../../../../common/components/QuickHowToPlay/SharedComponents/Content';
import GraphicComponent from '../../../../common/components/QuickHowToPlay/SharedComponents/GraphicComponent';
import Title from '../../../../common/components/QuickHowToPlay/SharedComponents/Title';
import styles from './styles.module.scss';

const keySlide = 'slide-2';

const Slide1: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => (
        <GraphicComponent isActive={index === 1} slideNumber={2} className={styles.image} />
    ),
    content: <Content keySlide={keySlide} />,
};

export default Slide1;
